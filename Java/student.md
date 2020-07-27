# Spring ioc

## 简介

有一个类，在类里面有方法（不是静态的方法），调用类里面的方法，创建类的对象，使用对象调用方法，创建类对象的过程，需要new出来对象。而运用Spring ioc（控制反转）则不用在去new对象，而是交给spring配置创建类对象。
也就是说在开发过程中不再需要关注对象的创建和生命周期的管理，而是在需要的时由Spring框架提供，这个由Spring框架管理对象创建和生命周期的机制称之为控制反转。

## 实现

有三种方法
  
* set方式注入
  
```
<bean id="student" class ="org.lanqiao.entiy.Student">
<property name="stuno" value="2"></property>
<property name="stuname" value="yl"></property>
<property name="stuAge" value="18"></property>
</bean>
```

* 构造器方式注入
  
```
<bean id="students" class="org.lanqiao.entiy.Student">
<constructor-arg value="1"></constructor-arg>
<constructor-arg value="czq"></constructor-arg>
<constructor-arg value="20"></constructor-arg>
</bean>
```

* 命名注入 (需要先引入xmlns:p="http://www.springframework.org/schema/p")

```
<bean id="studentss" class="org.lanqiao.entiy.Student" p:stuAge="22" p:stuname="lht" p:stuno="3"></bean>
</beans>
```

* 获取spring上下文对象

```ApplicationContext conext = new ClassPathXmlApplicationContext("applicationContext.xml");
Student student = (Student)conext.getBean("student");
```

## 实现原理

* `public static UserService getService(){`

根据id值userService，得到id值对应的class属性值
`Sting classValue = "class属性值";`
使用反射创建类对象
`Clss class = Class.forName(classValue);`
创建类对象
`UserService service = class.newInstance();`
`return service;}`

# Spring AOP

## 简介

面向切面编程，通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高了开发的效率。

## Java代理模式

具有与被代理对象相同的接口的类，客户端必须通过代理与被代理的目标类进行交互，而代理一般在交互的过程中（交互前后），进行某些特定的处理。

### 静态代理

被代理类和代理类实现同一个接口，将被代理类作为参数传入代理类，由代理类来实现被代理类的方法。

代码如下：
```
package com.lxj.proxy;


public interface Animal {
	
	public void action();
	public void breath();
	
}
package com.lxj.proxy;


//被代理类Cat
public class Cat implements Animal{

	@Override
	public void action() {
		System.out.println("喵喵喵~~~~");
	}

	@Override
	public void breath() {
		System.out.println("猫式呼吸法~~~~");
	}
}
package com.lxj.proxy;

//代理类
public class CatProxy implements Animal{

	//真正要代理的类
	Cat cat;
	
	public CatProxy(Cat cat){
		this.cat = cat;
	}
	
	@Override
	public void action() {
		System.out.println("==========DogProxy 代理类执行开始！=============");
		//实质上在代理类中是调用了被代理实现接口的方法
		cat.action();
		System.out.println("==========DogProxy 代理类执行结束！===========");
	}

	@Override
	public void breath() {
		System.out.println("==========DogProxy 代理类执行开始！=============");
		cat.breath();
		System.out.println("==========DogProxy 代理类执行结束！===========");
	}

}

package com.lxj.proxy;


public class TestStaticProxy {
	
    public static void main(String[] args) {
		 //被代理的类Cat，Cat实现了Animal接口
         Cat cat = new Cat();
         //代理类CatProxy，也实现了Animal接口
		 CatProxy catProxy = new CatProxy(cat);
         //代理类来调用方法，实际上调用的是Cat的action(),breath()方法
		 catProxy.action();
		 catProxy.breath();
	}
}
```

### 动态代理

* 由jdk代理（需要实现接口）
* 由CGLIB代理（不需要实现接口）


# MySql

## 执行计划

当数据小的时候，我们用sql查询，感觉都是瞬间完成，可当数据变大，千万、上亿的时候，我们运行同样的sql就会迟迟不会有结果，这个时候查询优化和索引就显得很重要了。

EXPLAIN语法可以用来进行查询分析，在SQL语句前加一个"EXPLAIN"即可。

如：`explain select * from table where table.id = 1 `

运行上面sql语句会得到下面信息：

table | type | possible_keys | key | key_len | ref | rows | Extra

EXPLAIN列的解释：

* table：显示数据是哪张表的
* typr：显示连接使用了哪种类型。从好到差分别为：const、eq_reg、ref、range、indexhe、ALL
* possible_keys ：可能运用在这张表的索引。如果为空，则没有可能的索引
* key：实际使用的索引，为空则没有使用索引
* key_len：使用的索引的长度，长度越短越好
* ref：显示索引的哪一列被使用了
* rows：MYSQL认为必须检查的用来返回请求数据的行数
* Extra：关于MYSQL如何解析查询的额外信息

Extra各种返回值的意思：
* Distinct ：一旦mysql找到了与行相联合匹配的行，就不再搜索了。

* Not exists ：mysql优化了LEFT JOIN，一旦它找到了匹配LEFT JOIN标准的行，就不再搜索了。

* Range checked for each Record（index map:#） ：没有找到理想的索引，因此对从前面表中来的每一个行组合，mysql检查使用哪个索引，并用它来从表中返回行。这是使用索引的最慢的连接之一。

* Using filesort ：看到这个的时候，查询就需要优化了。mysql需要进行额外的步骤来发现如何对返回的行排序。它根据连接类型以及存储排序键值和匹配条件的全部行的行指针来排序全部行。

* Using index ：列数据是从仅仅使用了索引中的信息而没有读取实际的行动的表返回的，这发生在对表的全部的请求列都是同一个索引的部分的时候。

* Using temporary ：看到这个的时候，查询需要优化了。这里，mysql需要创建一个临时表来存储结果，这通常发生在对不同的列集进行ORDER BY上，而不是GROUP BY上。

* Where used ：使用了WHERE从句来限制哪些行将与下一张表匹配或者是返回给用户。如果不想返回表中的全部行，并且连接类型ALL或index，这就会发生，或者是查询有问题。

## 索引

### 作用

* 提高mysql的检索速度

* 降低更新表的速度，如对表进行INSERT、UPDATE和DELETE

* 索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录

* 创建索引时，需要确保该索引是应用在SQL查询语句的条件(一般作为WHERE 子句的条件)

### 分类

* 单列索引：一个索引只包含单个列，一个表可以有多个单列索引
* 组合索引：一个索引包含多个列

### 创建索引

* 普通索引（如果是CHAR，VARCHAR类型，length可以小于字段实际长度；如果是BLOB和TEXT类型，必须指定 length）

创建索引：
`CREATE INDEX indexName ON mytable(username(length)); `

修改表结构添加索引：
`ALTER table tableName ADD INDEX indexName(columnName)`

创建表时直接添加：
```
CREATE TABLE mytable(  
 
ID INT NOT NULL,   
 
username VARCHAR(16) NOT NULL,  
 
INDEX [indexName] (username(length))  
 
);  
```
 删除索引：
 `DROP INDEX [indexName] ON mytable; `

 * 唯一索引 （索引列的值必须唯一，但允许有空值。如果是组合索引，则列值的组合必须唯一）

创建索引：
`CREATE UNIQUE INDEX indexName ON mytable(username(length)) `

修改表结构：
`ALTER table mytable ADD UNIQUE [indexName] (username(length))`

创建表时直接添加：
```CREATE TABLE mytable(  
 
ID INT NOT NULL,   
 
username VARCHAR(16) NOT NULL,  
 
UNIQUE [indexName] (username(length))  
 
);  
```

删除索引：
``

* 显示索引：
  `SHOW INDEX FROM table_name; `

## 事务

事务主要用来处理操作量大、复杂度高的数据。

* 在mysql中只有使用了 Innodb 数据库引擎的数据库或表才支持事务
* 事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行
* 事务用来管理 insert,update,delete 语句
  
事务要满足的四个条件（ACID）
* 原子性（Atomicity）：要么全部成功、要么全部失败
* 一致性（Consistency）：在事务开始之前和事务结束以后，数据库的完整性没有被破坏
* 隔离性（Isolation）：分为读未提交、读提交、可重复读、串行化
* 持久性（Durability）：事务处理结束后，对数据的修改就是永久的


在 MySQL 命令行的默认设置下，事务都是自动提交的，即执行 SQL 语句后就会马上执行 COMMIT 操作

但是可以用set来设置事务的提交模式

`SET AUTOCOMMIT=0 禁止自动提交`

`SET AUTOCOMMIT=1 开启自动提交`

事务控制语句：

* BEGIN 开始一个事务
* COMMIT 提交一个事务
* ROLLBACK 回滚一个事务
* SAVEPOINT 在事务中创建一个保存点
* RELEASE SAVEPOINT 删除一个保存点（当没有保存点时会抛出异常）
* ROLLBACK TO 将事务回滚到保存点
* SET TRANSACTION 设置事务隔离级别（READ UNCOMMITTED、READ COMMITTED、REPEATABLE READ 、 SERIALIZABLE）

## 锁

### 乐观锁

先进行业务操作，不到最后一步不进行加锁，"乐观"的认为加锁一定会成功的，在最后一步更新数据的时候在进行加锁，乐观锁的实现方式一般为每一条数据加一个版本号

对数据进行修改操作时，先判断版本号是否与数据库中的版本号一致
```
SELECT name AS old_name, version AS old_version FROM tb where ...;
根据获取的数据进行业务操作，得到new_dname和new_version
UPDATE SET name = new_name, version = new_version WHERE version = old_version
if (updated row > 0) {
    // 乐观锁获取成功，操作完成
} else {
    // 乐观锁获取失败，回滚并重试
}
```

乐观锁不需要数据库底层支持

### 悲观锁

在整个数据处理过程中，将数据处于锁定状态。悲观锁的实现，往往依靠数据库提供的锁机制

首先我们需要set autocommit=0，即不允许自动提交

for update仅适用于InnoDB，且必须在事务块(BEGIN/COMMIT)中才能生效。在进行事务操作时，通过“for update”语句，MySQL会对查询结果集中每行数据都添加排他锁，其他线程对该记录的更新与删除操作都会阻塞

代码：
```
begin;
select id,name,stock as old_stock from shop  where id=1 for update;
update shop set stock=stock-1 where id=1 and stock=old_stock;
commit;
```



<table tableName="course_class_ref" domainObjectName="CourseClassRef"></table>
        <table tableName="role_permission_ref" domainObjectName="RolePermissionRfe"></table>
        <table tableName="t_class" domainObjectName="TClass"></table>
        <table tableName="t_config" domainObjectName="TConfig"></table>
        <table tableName="t_course" domainObjectName="TCourse"></table>
        <table tableName="t_menu" domainObjectName="TMenu"></table>
        <table tableName="t_order" domainObjectName="TOrder"></table>
        <table tableName="t_permission" domainObjectName="TPermission"></table>
        <table tableName="t_role" domainObjectName="TRole"></table>
        <table tableName="t_user" domainObjectName="TUser"></table>
        <table tableName="user_class_ref" domainObjectName="UserClassRef"></table>
        <table tableName="user_relation_ref" domainObjectName="UserRelationRef"></table>
        <table tableName="user_role_ref" domainObjectName="UserRoleRef"></table>


<?xml version="1.0" encoding="UTF-8"?>


<table tableName="course_class_ref" domainObjectName="CourseClassRef" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="role_permission_ref" domainObjectName="RolePermissionRfe" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="t_class" domainObjectName="TClass" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="t_config" domainObjectName="TConfig" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="t_course" domainObjectName="TCourse" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="t_menu" domainObjectName="TMenu" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="t_order" domainObjectName="TOrder" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="t_permission" domainObjectName="TPermission" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="t_role" domainObjectName="TRole" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="t_user" domainObjectName="TUser" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="user_class_ref" domainObjectName="UserClassRef" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="user_relation_ref" domainObjectName="UserRelationRef" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
        <table tableName="user_role_ref" domainObjectName="UserRoleRef" enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false"></table>
