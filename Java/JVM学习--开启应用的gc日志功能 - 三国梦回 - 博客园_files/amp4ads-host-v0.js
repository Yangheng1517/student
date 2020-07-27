self.AMP_CONFIG={"pump-early-frame":1,"chunked-amp":1,"amp-ad-ff-adx-ady":0.01,"amp-list-load-more":1,"amp-consent-v2":1,"expAdsenseCanonical":0.05,"canary":0,"expAdsenseUnconditionedCanonical":0.05,"amp-story-v1":1,"hidden-mutation-observer":1,"amp-list-viewport-resize":1,"a4aProfilingRate":0.01,"allow-url-opt-in":["ios-scrollable-iframe","pump-early-frame","twitter-default-placeholder","twitter-default-placeholder-fade","twitter-default-placeholder-pulse"],"version-locking":1,"amp-auto-ads-adsense-holdout":0.1,"as-use-attr-for-format":0.01,"blurry-placeholder":1,"amp-playbuzz":1,"flexAdSlots":0.05,"fixed-elements-in-lightbox":1,"amp-access-iframe":1,"ios-scrollable-iframe":0,"doubleclickSraExp":0.01,"allow-doc-opt-in":["amp-next-page","disable-amp-story-desktop","inabox-viewport-friendly","inabox-css-cleanup","inabox-no-chunking"],"doubleclickSraReportExcludedBlock":0.1,"ampdoc-closest":1,"amp-story-responsive-units":1,"ios-fixed-no-transfer":0,"expAdsenseA4A":0.01,"v":"011907301630320","type":"production"};/*AMP_CONFIG*/(function(){var h;function m(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function q(a){return m(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=t(c[1],c[1]),e=c[2]?t(c[2],c[2]):"";b[d]=e}return b};var x="";
function y(a){var b=a||self;if(b.AMP_MODE)var c=b.AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,g=c.__karma__&&c.__karma__.config.amp.testOnIe,f=w(c.location.originalHash||c.location.hash);d=d.spt;var k=w(c.location.search);x||(x=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011907301630320");c={localDev:!1,development:!(!["1","actions","amp","amp4ads","amp4email"].includes(f.development)&&!c.AMP_DEV_MODE),examiner:"2"==f.development,filter:f.filter,geoOverride:f["amp-geo"],userLocationOverride:f["amp-user-location"],minified:!0,
lite:void 0!=k.amp_lite,test:e,testIe:g,log:f.log,version:"1907301630320",rtvVersion:x,singlePassType:d};c=b.AMP_MODE=c}return c};function ba(a){var b=!1,c=null,d=a;return function(a){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];b||(c=d.apply(self,e),b=!0,d=null);return c}};var z=self.AMP_CONFIG||{},A={thirdParty:z.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:z.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof z.thirdPartyFrameRegex?new RegExp(z.thirdPartyFrameRegex):z.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:z.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:z.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:z.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.dev$/]};function ca(){}
function B(a,b,c){var d=this;c=void 0===c?"":c;this.win=a;this.Y=b;this.w=this.win.console&&this.win.console.log&&"0"!=y().log?this.Y({localDev:!1,development:y(void 0).development,filter:y(void 0).filter,minified:!0,lite:y(void 0).lite,test:!1,log:y(void 0).log,version:y(void 0).version,rtvVersion:y(void 0).rtvVersion,singlePassType:y(void 0).singlePassType}):0;this.H=c;this.A=null;this.U=ba(function(){a.fetch(A.cdn+"/rtv/01"+encodeURIComponent("1907301630320")+"/log-messages.simple.json").then(function(a){return a.json()},ca).then(function(a){a&&
(d.A=a)})})}function C(a,b,c){if(0!=a.w){var d=a.win.console.log;"ERROR"==b?d=a.win.console.error||d:"INFO"==b?d=a.win.console.info||d:"WARN"==b&&(d=a.win.console.warn||d);b=c;b=Array.isArray(b[0])?[D(a,b[0])]:b;d.apply(a.win.console,b)}}h=B.prototype;h.isEnabled=function(){return 0!=this.w};h.fine=function(a,b){4<=this.w&&C(this,"FINE",Array.prototype.slice.call(arguments,1))};h.info=function(a,b){3<=this.w&&C(this,"INFO",Array.prototype.slice.call(arguments,1))};
h.warn=function(a,b){2<=this.w&&C(this,"WARN",Array.prototype.slice.call(arguments,1))};h.P=function(a,b){if(1<=this.w)C(this,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=E.apply(null,Array.prototype.slice.call(arguments,1));F(this,c);return c}};h.error=function(a,b){var c=this.P.apply(this,arguments);c&&(c.name=a||c.name,self.reportError(c))};h.expectedError=function(a,b){var c=this.P.apply(this,arguments);c&&(c.expected=!0,self.reportError(c))};
h.createError=function(a){var b=E.apply(null,arguments);F(this,b);return b};h.createExpectedError=function(a){var b=E.apply(null,arguments);F(this,b);b.expected=!0;return b};
h.assert=function(a,b,c){var d;if(Array.isArray(b))return this.assert(a,D(this,b));if(!a){var e=(b||"Assertion failed").split("%s"),g=e.shift(),f=g,k=[],l=2;for(""!=g&&k.push(g);0<e.length;){var r=e.shift(),n=arguments[l++];n&&n.tagName&&(d=n);k.push(n);g=r.trim();""!=g&&k.push(g);f+=G(n)+r}l=Error(f);l.fromAssert=!0;l.associatedElement=d;l.messageArray=k;F(this,l);self.reportError(l);throw l;}return a};h.assertElement=function(a,b){this.assert(a&&1==a.nodeType,(b||"Element expected")+": %s",a);return a};
h.assertString=function(a,b){this.assert("string"==typeof a,(b||"String expected")+": %s",a);return a};h.assertNumber=function(a,b){this.assert("number"==typeof a,(b||"Number expected")+": %s",a);return a};h.assertArray=function(a,b){this.assert(Array.isArray(a),(b||"Array expected")+": %s",a);return a};h.assertBoolean=function(a,b){this.assert(!!a===a,(b||"Boolean expected")+": %s",a);return a};
h.assertEnumValue=function(a,b,c){a:{for(var d in a)if(a[d]===b){a=!0;break a}a=!1}if(a)return b;this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function F(a,b){b=H(b);a.H?b.message?-1==b.message.indexOf(a.H)&&(b.message+=a.H):b.message=a.H:0<=b.message.indexOf("\u200b\u200b\u200b")&&(b.message=b.message.replace("\u200b\u200b\u200b",""))}
function D(a,b){var c=b[0];y(a.win).development&&!a.A&&a.U();var d=b.slice(1);return a.A&&c in a.A?E.apply(null,[a.A[c]].concat(d)).message:"More info at "+d.reduce(function(a,b){return a+"&s[]="+encodeURIComponent(G(b))},"https://log.amp.dev/?v=01"+encodeURIComponent("1907301630320")+"&id="+encodeURIComponent(c))}function G(a){return a&&1==a.nodeType?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}
function H(a){var b=Object.getOwnPropertyDescriptor(a,"message");if(b&&b.writable)return a;var c=a.stack,d=Error(a.message),e;for(e in a)d[e]=a[e];d.stack=c;return d}function E(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];e instanceof Error&&!b?b=H(e):(c&&(c+=" "),c+=e)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}self.log=self.log||{user:null,dev:null,userForEmbed:null};var I=self.log,J=null;function K(){I.user||(I.user=da());return I.user}
function da(){var a="\u200b\u200b\u200b";if(!J)throw Error("failed to call initLogConstructor");return new J(self,function(a){var b=parseInt(a.log,10);return a.development||1<=b?4:2},a)}function L(){if(I.dev)return I.dev;if(!J)throw Error("failed to call initLogConstructor");return I.dev=new J(self,function(a){a=parseInt(a.log,10);return 3<=a?4:2<=a?3:0})};function M(a){return a||{}};function N(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var O,ea="Webkit webkit Moz moz ms O o".split(" ");function fa(a,b,c){if(N(b,"--"))return b;O||(O=Object.create(null));var d=O[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<ea.length;g++){var f=ea[g]+e;if(void 0!==a[f]){e=f;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(O[b]=d)}return d}function ha(a){var b={"pointer-events":"none"};a=a.style;for(var c in b)a.setProperty(fa(a,c),b[c].toString(),"important")}
function ia(a,b,c){var d;(b=fa(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}function P(a,b){for(var c in b)ia(a,c,b[c])}function ja(a,b){for(var c=0;c<b.length;c++)ia(a,b[c],null)};function ka(a,b,c){var d=150,e=c.width/2-b.width/2-b.left+"px",g=c.height/2-b.height/2-b.top+"px",f=b.top+"px",k=c.width-(b.left+b.width)+"px",l=b.left+"px",r=c.height-(b.top+b.height)+"px",n=b.height+"px",u=b.width+"px";var p=e;var v=g;"number"==typeof p&&(p+="px");void 0===v?p="translate("+p+")":("number"==typeof v&&(v+="px"),p="translate("+p+", "+v+")");P(a,{position:"fixed",top:f,right:k,left:l,bottom:r,height:n,width:u,transition:"transform "+d+"ms ease",transform:p,margin:0})};function Q(a,b,c){a.requestAnimationFrame(function(){b.measure&&b.measure(c);b.mutate&&b.mutate(c)})}function la(a){var b=200;setTimeout(a,b)};function ma(a,b,c){Q(a,{measure:function(c){c.viewportSize={width:a.innerWidth,height:a.innerHeight};c.rect=q(b.getBoundingClientRect())},mutate:function(d){var e=d.viewportSize,g=m(0,0,e.width,e.height);ka(b,d.rect,d.viewportSize);ha(b);la(function(){Q(a,{mutate:function(){ja(b,["pointer-events"]);P(b,{position:"fixed","z-index":1E3,left:0,right:0,top:0,bottom:0,width:"100vw",height:"100vh",transition:null,transform:null,margin:0,border:0});c(d.rect,g)}})})}},{})}
function pa(a,b,c,d){Q(a,{mutate:function(){ja(b,"position z-index left right top bottom width height margin border".split(" "));c();Q(a,{measure:function(){d(q(b.getBoundingClientRect()))}})}})};function R(a){this.o=a;this.I=this.L=!1;this.C=null;qa(this)}function qa(a){a.o.addEventListener("resize",function(){return a.onWindowResize()})}R.prototype.onWindowResize=function(){this.L&&(this.I=!0)};R.prototype.expandFrame=function(a,b){var c=this;ma(this.o,a,function(a,e){c.L=!0;c.I=!1;c.C=a;b(e)})};R.prototype.collapseFrame=function(a,b){var c=this;pa(this.o,a,function(){c.L=!1;c.I||b(c.C)},function(a){c.C=a;c.I&&b(c.C)})};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function S(a,b,c){c=void 0===c?{}:c;var d=void 0===d?null:d;c.type=a;c.sentinel=b;return"amp-"+(d||"")+JSON.stringify(c)};function T(){var a=100;this.S=a;this.K=this.O=0;this.B=Object.create(null)}T.prototype.has=function(a){return!!this.B[a]};T.prototype.get=function(a){var b=this.B[a];if(b)return b.access=++this.K,b.payload};T.prototype.put=function(a,b){this.has(a)||this.O++;this.B[a]={payload:b,access:this.K};if(!(this.O<=this.S)){L().warn("lru-cache","Trimming LRU cache");a=this.B;var c=this.K+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var g=d}}void 0!==g&&(delete a[g],this.O--)}};M({c:!0,v:!0,a:!0,ad:!0,action:!0});var U,ra;function sa(a){try{return!!a.location.href&&(a.test||!0)}catch(b){return!1}};function ta(){this.h=null}h=ta.prototype;h.add=function(a){var b=this;this.h||(this.h=[]);this.h.push(a);return function(){b.remove(a)}};h.remove=function(a){this.h&&(a=this.h.indexOf(a),-1<a&&this.h.splice(a,1))};h.removeAll=function(){this.h&&(this.h.length=0)};h.fire=function(a){if(this.h)for(var b=this.h,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.h?this.h.length:0};function ua(a,b){function c(c){f=null;g=a.setTimeout(d,e);b.apply(null,c)}function d(){g=0;f&&c(f)}var e=100,g=0,f=null;return function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];g?f=b:c(b)}};function V(a){this.o=a;this.G=null;var b=this.o;a=b.document;if(a.scrollingElement)a=a.scrollingElement;else{var c;if(c=a.body)b=b.navigator.userAgent,c=/WebKit/i.test(b)&&!/Edge/i.test(b);a=c?a.body:a.documentElement}this.Z=a;this.J=null}
V.prototype.observe=function(a,b){var c=this;if(!this.G){this.G=new ta;var d=ua(this.o,function(){c.J=c.getViewportRect();c.G.fire()});this.J=this.getViewportRect();this.o.addEventListener("scroll",d,!0);this.o.addEventListener("resize",d,!0)}b({viewportRect:this.J,targetRect:this.getTargetRect(a)});return this.G.add(function(){b({viewportRect:c.J,targetRect:c.getTargetRect(a)})})};
V.prototype.getViewportRect=function(){var a=this.Z,b=this.o,c=a.scrollLeft||b.pageXOffset,d=a.scrollTop||b.pageYOffset;return m(Math.round(c),Math.round(d),b.innerWidth,b.innerHeight)};V.prototype.getTargetRect=function(a){for(var b=q(a.getBoundingClientRect()),c=0,d=a.ownerDocument.defaultView;10>c&&d!=this.o&&d!=this.o.top;c++,d=d.parent){var e=q(d.frameElement.getBoundingClientRect());a=b;var g=e.left,f=e.top;b=0==g&&0==f||0==a.width&&0==a.height?a:m(a.left+g,a.top+f,a.width,a.height)}return b};var va=["send-positions"];function W(){this.M={}}W.prototype.listen=function(a,b){this.M[a]=b};W.prototype.fire=function(a,b,c){return a in this.M?this.M[a].apply(b,c):!1};function wa(a,b){this.D=b;this.j=Object.create(null);a.ampInaboxPositionObserver=a.ampInaboxPositionObserver||new V(a);this.N=a.ampInaboxPositionObserver;this.F=new W;this.R=new R(a);this.F.listen("send-positions",this.X);this.F.listen("full-overlay-frame",this.W);this.F.listen("cancel-full-overlay-frame",this.V)}h=wa.prototype;
h.processMessage=function(a){var b=a.data;if("string"==typeof b&&0==b.indexOf("amp-")&&-1!=b.indexOf("{")){var c=b.indexOf("{");try{var d=JSON.parse(b.substr(c))}catch(p){L().error("MESSAGING","Failed to parse message: "+b,p),d=null}}else d=null;if(!d||!d.sentinel)return!1;a:if(b=d.sentinel,this.j[b])b=this.j[b];else{if(c=this.getMeasureableFrame(a.source))for(var e=c.contentWindow,g=0;g<this.D.length;g++)for(var f=this.D[g],k=0,l=e;10>k;k++,l=l.parent){if(f.contentWindow==l){this.j[b]={iframe:f,
measurableFrame:c};b=this.j[b];break a}if(l==window.top)break}b=null}var r=b;if(!r)return L().info("InaboxMessagingHost","Ignored message from untrusted iframe:",a),!1;var n=r.iframe.dataset.ampAllowed,u=n?n.split(/\s*,\s*/):va;return-1===u.indexOf(d.type)?(L().info("InaboxMessagingHost","Ignored non-whitelisted message type:",a),!1):this.F.fire(d.type,this,[r.measurableFrame,d,a.source,a.origin])?!0:(L().warn("InaboxMessagingHost","Unprocessed AMP message:",a),!1)};
h.X=function(a,b,c,d){var e=this.N.getViewportRect(),g=this.N.getTargetRect(a);xa(b,c,d,M({viewportRect:e,targetRect:g}));this.j[b.sentinel].observeUnregisterFn=this.j[b.sentinel].observeUnregisterFn||this.N.observe(a,function(a){return xa(b,c,d,a)});return!0};function xa(a,b,c,d){b.postMessage(S("position",a.sentinel,d),c)}h.W=function(a,b,c,d){this.R.expandFrame(a,function(a){c.postMessage(S("full-overlay-frame-response",b.sentinel,M({success:!0,boxRect:a})),d)});return!0};
h.V=function(a,b,c,d){this.R.collapseFrame(a,function(a){c.postMessage(S("cancel-full-overlay-frame-response",b.sentinel,M({success:!0,boxRect:a})),d)});return!0};h.getMeasureableFrame=function(a){if(!a)return null;for(var b,c=0,d=a;10>c&&d!=d.top&&!sa(d);c++,b=d,d=d.parent);if(b){c=b.parent.document.querySelectorAll("iframe");d=0;for(var e=c[d];d<c.length;d++,e=c[d])if(e.contentWindow==b)return e}return a.frameElement};
h.unregisterIframe=function(a){var b=this.D.indexOf(a);-1!=b&&this.D.splice(b,1);for(var c in this.j)this.j[c].iframe==a&&(this.j[c].observeUnregisterFn&&this.j[c].observeUnregisterFn(),delete this.j[c])};function ya(a){a=a.__AMP_TOP||a;return za(a,"ampdoc")}function Aa(a){var b=Ba(a);b=Ba(b);b=b.isSingleDoc()?b.win:b;return za(b,"viewer")}function Ba(a){return a.nodeType?ya((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function za(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function Ca(){var a=1.5,b=Da(a);return function(a){return setTimeout(a,b())}}function Da(a){var b=a||2,c=0;return function(){var a=Math.pow(b,c++);var e=a*(e||.3)*Math.random();.5<Math.random()&&(e*=-1);a+=e;return 1E3*a}};var Ea=!1;function Fa(a){Ea||(Ea=!0,P(a.body,{opacity:1,visibility:"visible",animation:"none"}))};var X=self.AMPErrors||[];self.AMPErrors=X;function Y(a){Y=Ca();return Y(a)}function Ga(a){try{return JSON.stringify(a)}catch(b){return String(a)}}var Z;
function Ha(a,b){try{if(a)if(void 0!==a.message)a=H(a);else{var c=a;a=Error(Ga(c));a.origError=c}else a=Error("Unknown error");if(a.reported)return a;a.reported=!0;var d=b||a.associatedElement;d&&d.classList&&(d.classList.add("i-amphtml-error"),y().development&&(d.classList.add("i-amphtml-element-error"),d.setAttribute("error-message",a.message)));if(self.console){var e=console.error||console.log;a.messageArray?e.apply(console,a.messageArray):d?e.call(console,a.message,d):e.call(console,a.message)}d&&
d.T&&d.T("amp:error",a.message);Ia.call(void 0,void 0,void 0,void 0,void 0,a)}catch(g){setTimeout(function(){throw g;})}return a}function Ia(a,b,c,d,e){var g=this;this&&this.document&&Fa(this.document);if(!y().development){var f=!1;try{f=Ja()}catch(l){}if(!(f&&.01<Math.random())){var k=Ka(a,b,c,d,e,f);k&&Y(function(){try{return La(g,k).catch(function(){})}catch(l){}})}}}
function La(a,b){return Ma(a,b).then(function(a){if(!a){var c=new XMLHttpRequest;c.open("POST",A.errorReporting,!0);c.send(JSON.stringify(b))}})}
function Ma(a,b){var c=ya(a);if(!c.isSingleDoc())return Promise.resolve(!1);var d=c.getSingleDoc(),e=d.getRootNode().documentElement,g=e.hasAttribute("report-errors-to-viewer");if(!g)return Promise.resolve(!1);var f=Aa(d);return f.hasCapability("errorReporter")?f.isTrustedViewer().then(function(a){if(!a)return!1;f.sendMessage("error",M({m:b.m,a:b.a,s:b.s,el:b.el,ex:b.ex,v:b.v,jse:b.jse}));return!0}):Promise.resolve(!1)}
function Ka(a,b,c,d,e,g){var f=a;e&&(f=e.message?e.message:String(e));f||(f="Unknown error");a=f;var k=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var l=!(self&&self.window),r=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||l)if(k=!0,.001<r)return;var n=0<=a.indexOf("\u200b\u200b\u200b");if(!(n&&.1<r)){f=Object.create(null);f.v=y().rtvVersion;f.noAmp=g?"1":"0";f.m=a.replace("\u200b\u200b\u200b","");f.a=n?"1":"0";f.ex=k?"1":"0";f.dw=l?"1":"0";var u="1p";self.context&&
self.context.location?(f["3p"]="1",u="3p"):y().runtime&&(u=y().runtime);y().singlePassType&&(f.spt=y().singlePassType);f.rt=u;"inabox"===u&&(f.adid=y().a4aId);g=self;f.ca=g.AMP_CONFIG&&g.AMP_CONFIG.canary?"1":"0";g=self;f.bt=g.AMP_CONFIG&&g.AMP_CONFIG.type?g.AMP_CONFIG.type:"unknown";self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(f.or=self.location.ancestorOrigins[0]);self.viewerState&&(f.vs=self.viewerState);self.parent&&self.parent!=self&&(f.iem="1");if(self.AMP&&self.AMP.viewer){var p=
self.AMP.viewer.getResolvedViewerUrl(),v=self.AMP.viewer.maybeGetMessagingOrigin();p&&(f.rvu=p);v&&(f.mso=v)}Z||(Z=Na());f.jse=Z;var na=[];g=self.__AMP__EXPERIMENT_TOGGLES||null;for(var oa in g)na.push(oa+"="+(g[oa]?"1":"0"));f.exps=na.join(",");e?(f.el=e.associatedElement?e.associatedElement.tagName:"u",e.args&&(f.args=JSON.stringify(e.args)),n||e.ignoreStack||!e.stack||(f.s=e.stack),e.message&&(e.message+=" _reported_")):(f.f=b||"",f.l=c||"",f.c=d||"");f.r=self.document?self.document.referrer:"";
f.ae=X.join(",");f.fr=self.location.originalHash||self.location.hash;b=a;25<=X.length&&X.splice(0,X.length-25+1);X.push(b);return f}}}
function Ja(){var a=self;if(!a.document)return!1;a=a.document.querySelectorAll("script[src]");for(var b=0;b<a.length;b++){var c=a[b].src.toLowerCase();if("string"==typeof c){U||(U=self.document.createElement("a"),ra=self.UrlCache||(self.UrlCache=new T));var d=ra;var e=U;if(d&&d.has(c))c=d.get(c);else{e.href=c;e.protocol||(e.href=e.href);var g={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==
g.pathname[0]&&(g.pathname="/"+g.pathname);if("http:"==g.protocol&&80==g.port||"https:"==g.protocol&&443==g.port)g.port="",g.host=g.hostname;e=e.origin&&"null"!=e.origin?e.origin:"data:"!=g.protocol&&g.host?g.protocol+"//"+g.host:g.href;g.origin=e;d&&d.put(c,g);c=g}}if(!A.cdnProxyRegex.test(c.origin))return!0}return!1}
function Na(){function a(){}a.prototype.t=function(){throw Error("message");};var b=new a;try{b.t()}catch(d){b=d.stack;if(N(b,"t@"))return"Safari";if(-1<b.indexOf(".prototype.t@"))return"Firefox";var c=b.split("\n").pop();if(/\bat .* \(/i.test(c))return"IE";if(N(b,"Error: message"))return"Chrome"}return"unknown"};new function(a){if(a.ampInaboxInitialized)L().info("inabox-host","Skip a 2nd attempt of initializing AMP inabox host.");else{a.ampInaboxInitialized=!0;J=B;L();K();self.reportError=Ha;a.ampInaboxIframes&&!Array.isArray(a.ampInaboxIframes)&&(L().info("inabox-host","Invalid %s. %s","ampInaboxIframes",a.ampInaboxIframes),a.ampInaboxIframes=[]);var b=new wa(a,a.ampInaboxIframes);a.AMP=a.AMP||{};a.AMP.inaboxUnregisterIframe?L().info("inabox-host","win.AMP[inaboxUnregisterIframe] already defined}"):a.AMP.inaboxUnregisterIframe=
b.unregisterIframe.bind(b);var c=a.ampInaboxPendingMessages,d=function(a){try{b.processMessage(a)}catch(g){L().error("inabox-host","Error processing inabox message",a,g)}};c&&(Array.isArray(c)?c.forEach(function(a){var b=!(!a.source||!a.source.postMessage);b||K().error("inabox-host","Missing message.source. message.data="+JSON.stringify(a.data));b&&d(a)}):L().info("inabox-host","Invalid %s %s","ampInaboxPendingMessages",c));a.ampInaboxPendingMessages=[];a.ampInaboxPendingMessages.push=function(){};
a.addEventListener("message",d.bind(b))}}(self);})();

//# sourceMappingURL=amp4ads-host-v0.js.map
