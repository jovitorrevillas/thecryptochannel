(function(){var d;window.AmCharts?d=window.AmCharts:(d={},window.AmCharts=d,d.themes={},d.maps={},d.inheriting={},d.charts=[],d.onReadyArray=[],d.useUTC=!1,d.updateRate=60,d.uid=0,d.lang={},d.translations={},d.mapTranslations={},d.windows={},d.initHandlers=[],d.amString="am",d.pmString="pm");d.Class=function(a){var b=function(){arguments[0]!==d.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(d.inheriting),b.base=a.inherits.prototype,delete a.inherits):
(b.prototype.createEvents=function(){for(var a=0;a<arguments.length;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,a,b);a&&this.events[a]&&this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events&&(a=a.events[b]))for(b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a){for(var b=
this.events[a.type],c=0;c<b.length;c++){var d=b[c];d.handler.call(d.scope,a)}});for(var c in a)b.prototype[c]=a[c];return b};d.addChart=function(a){window.requestAnimationFrame?d.animationRequested||(d.animationRequested=!0,window.requestAnimationFrame(d.update)):d.updateInt||(d.updateInt=setInterval(function(){d.update()},Math.round(1E3/d.updateRate)));d.charts.push(a)};d.removeChart=function(a){for(var b=d.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);0===b.length&&(d.requestAnimation&&(window.cancelAnimationFrame(d.requestAnimation),
d.animationRequested=!1),d.updateInt&&(clearInterval(d.updateInt),d.updateInt=NaN))};d.isModern=!0;d.getIEVersion=function(){var a=0,b,c;"Microsoft Internet Explorer"==navigator.appName&&(b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/,null!==c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};d.applyLang=function(a,b){var c=d.translations;b.dayNames=d.extend({},d.dayNames);b.shortDayNames=d.extend({},d.shortDayNames);b.monthNames=d.extend({},d.monthNames);b.shortMonthNames=d.extend({},d.shortMonthNames);
b.amString="am";b.pmString="pm";c&&(c=c[a])&&(d.lang=c,b.langObj=c,c.monthNames&&(b.dayNames=d.extend({},c.dayNames),b.shortDayNames=d.extend({},c.shortDayNames),b.monthNames=d.extend({},c.monthNames),b.shortMonthNames=d.extend({},c.shortMonthNames)),c.am&&(b.amString=c.am),c.pm&&(b.pmString=c.pm));d.amString=b.amString;d.pmString=b.pmString};d.IEversion=d.getIEVersion();9>d.IEversion&&0<d.IEversion&&(d.isModern=!1,d.isIE=!0);d.dx=0;d.dy=0;if(document.addEventListener||window.opera)d.isNN=!0,d.isIE=
!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleWheel=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){(e.mouseWheelScrollEnabled||
e.mouseWheelZoomEnabled)&&e.handleWheel&&e.handleWheel(a);break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}d.onReadyArray=[]};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;
if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0));d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",d.handleLoad));
d.addWheelListeners=function(){d.wheelIsListened||(d.isNN&&(window.addEventListener("DOMMouseScroll",d.handleWheel,!0),document.addEventListener("mousewheel",d.handleWheel,!0)),d.isIE&&document.attachEvent("onmousewheel",d.handleWheel));d.wheelIsListened=!0};d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.requestAnimation&&window.cancelAnimationFrame(d.requestAnimation);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",
d.handleMouseMove,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad))};d.makeChart=function(a,b,c){var e=b.type,g=b.theme;d.isString(g)&&(g=d.themes[g],b.theme=
g);var f;switch(e){case "serial":f=new d.AmSerialChart(g);break;case "xy":f=new d.AmXYChart(g);break;case "pie":f=new d.AmPieChart(g);break;case "radar":f=new d.AmRadarChart(g);break;case "gauge":f=new d.AmAngularGauge(g);break;case "funnel":f=new d.AmFunnelChart(g);break;case "map":f=new d.AmMap(g);break;case "stock":f=new d.AmStockChart(g);break;case "gantt":f=new d.AmGanttChart(g)}d.extend(f,b);d.isReady?isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c):d.ready(function(){isNaN(c)?
f.write(a):setTimeout(function(){d.realWrite(f,a)},c)});return f};d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&(d.requestAnimation=window.requestAnimationFrame(d.update))};
"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,
"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var g,f,h,k;a+="";if(1>b)return a;g=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++g<a;k[g]+=
h){h=k[g];for(k[g]="";h.length>b;k[g]+=d.trim(h.slice(0,f))+((h=h.slice(f)).length?c:""))f=2==e||(f=h.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:f.input.length-f[0].length||1==e&&b||f.input.length+(f=h.slice(b).match(/^\S*/))[0].length;h=d.trim(h)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,g,f,h,k){var l=d.text(a,b,c,e,g,f,h);if(l){var m=l.getBBox();if(m.width>k){var n="\n";d.isModern||(n="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,n,!0);l.remove();l=d.text(a,b,c,e,g,f,h)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=
b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();
var d=e.length;if(0<d){var f;for(f=0;f<d;f++){var h=e[f];if(h&&h[a])h[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&
(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=!1;0>a&&(c=!0,a=Math.abs(a));var e=String(Math.round(a*Math.pow(10,b)));if(0<b){var d=e.length;if(d<b){var f;for(f=0;f<
b-d;f++)e="0"+e}d=e.substring(0,e.length-b);""===d&&(d=0);e=d+"."+e.substring(e.length-b,e.length);return c?"-"+e:e}return String(e)};d.formatDuration=function(a,b,c,e,g,f){var h=d.intervals,k=f.decimalSeparator;if(a>=h[b].contains){var l=a-Math.floor(a/h[b].contains)*h[b].contains;"ss"==b?(l=d.formatNumber(l,f),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,f.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/h[b].contains);b=h[b].nextInterval;return d.formatDuration(a,
b,c,e,g,f)}"ss"==b&&(a=d.formatNumber(a,f),1==a.split(k)[0].length&&(a="0"+a));"mm"==b&&(a=d.roundTo(a,f.precision));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(h[g].count>h[b].count)for(a=h[b].count;a<h[g].count;a++)b=h[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,g){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=
b.thousandsSeparator;void 0==f&&(f=",");void 0==b&&(b=" ");var h;h=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==k[1]&&(m=m+f+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,f,c))}m=h+m;""===h&&!0===e&&0!==a&&(m="+"+m);!0===g&&(m+="%");return m};d.addZeroes=function(a,
b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";
var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,g=a.x,f=a.x+a.width,h=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(g,h,b));e||(e=l(g,k,b));e||(e=l(f,h,b));e||(e=l(f,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?
!0:!1};d.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,g,f,h,k){if(b){void 0===g&&(g="");var l;for(l=0;l<c.length;l++){var m=c[l],n=b[m];void 0!==n&&(n=f?d.addPrefix(n,k,h,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+g+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]",
"g"),b[d]))}}return a};d.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,g){var f=d.formatNumber(a,e),h="",k,l,m;if(0===a)return"0";0>a&&(h="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,
thousandsSeparator:e.thousandsSeparator}),!g||l==c)){f=h+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);f=h+""+l+""+c[k].prefix;break}return f};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};
d.applyTheme=function(a,b,c){b||(b=d.theme);try{b=JSON.parse(JSON.stringify(b))}catch(e){}b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),
a):d.extend(a,new b(c),!0),a.listeners))for(var g in a.listeners)b=a.listeners[g],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],
b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a.theme=null,a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*
Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,b,c,e,d){return e*Math.sin(b/d*(Math.PI/2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var f=0,h=e;if(0===b)return c;if(1==(b/=d))return c+e;f||(f=.3*d);h<Math.abs(e)?(h=e,a=f/4):a=f/(2*Math.PI)*Math.asin(e/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/f)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;
e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var g=
0;g<a[c].length;g++)e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c][g],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AxisBase=d.Class({construct:function(a){this.createEvents("clickItem","rollOverItem","rollOutItem","rollOverGuide","rollOutGuide","clickGuide");this.titleDY=this.y=this.x=this.dy=this.dx=0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=
0;this.labelsEnabled=!0;this.labelRotation=0;this.autoGridCount=!0;this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.minHorizontalGap=75;this.minVerticalGap=35;this.titleBold=!0;this.minorGridEnabled=!1;this.minorGridAlpha=.07;this.autoWrap=!1;this.titleAlign="middle";this.labelOffset=0;this.bcn="axis-";this.centerLabels=!1;this.firstDayOfWeek=1;this.centerLabelOnFullPeriod=this.markPeriodChange=this.boldPeriodBeginning=!0;this.titleWidth=
0;this.periods=[{period:"fff",count:1},{period:"fff",count:5},{period:"fff",count:10},{period:"fff",count:50},{period:"fff",count:100},{period:"fff",count:500},{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",
count:4},{period:"DD",count:5},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"NN:SS.QQQ"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",
format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod={fff:"ss",ss:"mm",mm:"hh",hh:"DD",DD:"MM",MM:"YYYY"};d.applyTheme(this,a,"AxisBase")},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},init:function(){this.createBalloon()},draw:function(){var a=this.chart;this.prevBY=this.prevBX=NaN;
this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();this.setBalloonBounds();this.labels=[];var b=a.container,c=b.set();a.gridSet.push(c);this.set=c;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=b;this.axisLine=new this.axisRenderer(this);this.autoGridCount?("V"==this.orientation?(a=this.height/this.minVerticalGap,3>a&&(a=3)):a=this.width/this.minHorizontalGap,this.gridCountR=Math.max(a,1)):this.gridCountR=this.gridCount;this.axisWidth=this.axisLine.axisWidth;this.addTitle()},
setOrientation:function(a){this.orientation=a?"H":"V"},addTitle:function(){var a=this.title;this.titleLabel=null;if(a){var b=this.chart,c=this.titleColor;void 0===c&&(c=b.color);var e=this.titleFontSize;isNaN(e)&&(e=b.fontSize+1);a=d.text(b.container,a,c,b.fontFamily,e,this.titleAlign,this.titleBold);d.setCN(b,a,this.bcn+"title");this.titleLabel=a}},positionTitle:function(){var a=this.titleLabel;if(a){var b,c,e=this.labelsSet,g={};0<e.length()?g=e.getBBox():(g.x=0,g.y=0,g.width=this.width,g.height=
this.height,d.VML&&(g.y+=this.y,g.x+=this.x));e.push(a);var e=g.x,f=g.y;d.VML&&(f-=this.y,e-=this.x);var h=g.width,g=g.height,k=this.width,l=this.height,m=0,n=a.getBBox().height/2,q=this.inside,p=this.titleAlign;switch(this.position){case "top":b="left"==p?-1:"right"==p?k:k/2;c=f-10-n;break;case "bottom":b="left"==p?-1:"right"==p?k:k/2;c=f+g+10+n;break;case "left":b=e-10-n;q&&(b-=5);m=-90;c=("left"==p?l+1:"right"==p?-1:l/2)+this.titleDY;this.titleWidth=n+10;break;case "right":b=e+h+10+n,q&&(b+=7),
c=("left"==p?l+2:"right"==p?-2:l/2)+this.titleDY,this.titleWidth=n+10,m=-90}this.marginsChanged?(a.translate(b,c),this.tx=b,this.ty=c):a.translate(this.tx,this.ty);this.marginsChanged=!1;isNaN(this.titleRotation)||(m=this.titleRotation);0!==m&&a.rotate(m)}},pushAxisItem:function(a,b){var c=this,e=a.graphics();0<e.length()&&(b?c.labelsSet.push(e):c.set.push(e));if(e=a.getLabel())c.labelsSet.push(e),e.click(function(b){c.handleMouse(b,a,"clickItem")}).touchend(function(b){c.handleMouse(b,a,"clickItem")}).mouseover(function(b){c.handleMouse(b,
a,"rollOverItem")}).mouseout(function(b){c.handleMouse(b,a,"rollOutItem")})},handleMouse:function(a,b,c){this.fire({type:c,value:b.value,serialDataItem:b.serialDataItem,axis:this,target:b.label,chart:this.chart,event:a})},addGuide:function(a){for(var b=this.guides,c=!1,e=b.length,g=0;g<b.length;g++)b[g]==a&&(c=!0,e=g);a=d.processObject(a,d.Guide,this.theme);a.id||(a.id="guideAuto"+e+"_"+(new Date).getTime());c||b.push(a)},removeGuide:function(a){var b=this.guides,c;for(c=0;c<b.length;c++)b[c]==a&&
b.splice(c,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b=a.graphics.getBBox(),c=this.x+b.x+b.width/2,b=this.y+b.y+b.height/2,e=a.fillColor;void 0===e&&(e=a.lineColor);this.chart.showBalloon(a.balloonText,e,!0,c,b);this.fire({type:"rollOverGuide",guide:a,chart:this.chart})},handleGuideOut:function(a){this.chart.hideBalloon();this.fire({type:"rollOutGuide",guide:a,chart:this.chart})},handleGuideClick:function(a){this.chart.hideBalloon();this.fire({type:"clickGuide",guide:a,
chart:this.chart})},addEventListeners:function(a,b){var c=this;a.mouseover(function(){c.handleGuideOver(b)});a.mouseup(function(){c.handleGuideClick(b)});a.touchstart(function(){c.handleGuideOver(b)});a.mouseout(function(){c.handleGuideOut(b)})},getBBox:function(){var a;this.labelsSet&&(a=this.labelsSet.getBBox());a?d.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height}):a={x:0,y:0,width:0,height:0};return a},destroy:function(){d.remove(this.set);d.remove(this.labelsSet);var a=this.axisLine;
a&&d.remove(a.axisSet);d.remove(this.grid0)},chooseMinorFrequency:function(a){for(var b=10;0<b;b--)if(a/b==Math.round(a/b))return a/b},parseDatesDraw:function(){var a,b=this.chart,c=this.showFirstLabel,e=this.showLastLabel,g,f="",h=d.extractPeriod(this.minPeriod),k=d.getPeriodDuration(h.period,h.count),l,m,n,q,p,t=this.firstDayOfWeek,r=this.boldPeriodBeginning;a=this.minorGridEnabled;var w,z=this.gridAlpha,x,u=this.choosePeriod(0),A=u.period,u=u.count,y=d.getPeriodDuration(A,u);y<k&&(A=h.period,u=
h.count,y=k);h=A;"WW"==h&&(h="DD");this.stepWidth=this.getStepWidth(this.timeDifference);var B=Math.ceil(this.timeDifference/y)+5,D=l=d.resetDateToMin(new Date(this.startTime-y),A,u,t).getTime();if(h==A&&1==u&&this.centerLabelOnFullPeriod||this.autoWrap||this.centerLabels)n=y*this.stepWidth,this.autoWrap&&!this.centerLabels&&(n=-n);this.cellWidth=k*this.stepWidth;q=Math.round(l/y);k=-1;q/2==Math.round(q/2)&&(k=-2,l-=y);q=this.firstTime;var C=0,I=0;a&&1<u&&(w=this.chooseMinorFrequency(u),x=d.getPeriodDuration(A,
w),"DD"==A&&(x+=d.getPeriodDuration("hh")),"fff"==A&&(x=1));if(0<this.gridCountR)for(B-5-k>this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),a=k;a<=B;a++){p=q+y*(a+Math.floor((D-q)/y))-C;"DD"==A&&(p+=36E5);p=d.resetDateToMin(new Date(p),A,u,t).getTime();"MM"==A&&(g=(p-l)/y,1.5<=(p-l)/y&&(p=p-(g-1)*y+d.getPeriodDuration("DD",3),p=d.resetDateToMin(new Date(p),A,1).getTime(),C+=y));g=(p-this.startTime)*this.stepWidth;if("radar"==b.type){if(g=this.axisWidth-
g,0>g||g>this.axisWidth)continue}else this.rotate?"date"==this.type&&"middle"==this.gridPosition&&(I=-y*this.stepWidth/2):"date"==this.type&&(g=this.axisWidth-g);f=!1;this.nextPeriod[h]&&(f=this.checkPeriodChange(this.nextPeriod[h],1,p,l,h));l=!1;f&&this.markPeriodChange?(f=this.dateFormatsObject[this.nextPeriod[h]],this.twoLineMode&&(f=this.dateFormatsObject[h]+"\n"+f,f=d.fixBrakes(f)),l=!0):f=this.dateFormatsObject[h];r||(l=!1);this.currentDateFormat=f;f=d.formatDate(new Date(p),f,b);if(a==k&&!c||
a==B&&!e)f=" ";this.labelFunction&&(f=this.labelFunction(f,new Date(p),this,A,u,m).toString());this.boldLabels&&(l=!0);m=new this.axisItemRenderer(this,g,f,!1,n,I,!1,l);this.pushAxisItem(m);m=l=p;if(!isNaN(w))for(g=1;g<u;g+=w)this.gridAlpha=this.minorGridAlpha,f=p+x*g,f=d.resetDateToMin(new Date(f),A,w,t).getTime(),f=new this.axisItemRenderer(this,(f-this.startTime)*this.stepWidth,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0),this.pushAxisItem(f);this.gridAlpha=z}},choosePeriod:function(a){var b=
d.getPeriodDuration(this.periods[a].period,this.periods[a].count),c=this.periods;return this.timeDifference<b&&0<a?c[a-1]:Math.ceil(this.timeDifference/b)<=this.gridCountR?c[a]:a+1<c.length?this.choosePeriod(a+1):c[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},timeZoom:function(a,b){this.startTime=a;this.endTime=b},minDuration:function(){var a=d.extractPeriod(this.minPeriod);return d.getPeriodDuration(a.period,a.count)},
checkPeriodChange:function(a,b,c,e,g){c=new Date(c);var f=new Date(e),h=this.firstDayOfWeek;e=b;"DD"==a&&(b=1);c=d.resetDateToMin(c,a,b,h).getTime();b=d.resetDateToMin(f,a,b,h).getTime();return"DD"==a&&"hh"!=g&&c-b<d.getPeriodDuration(a,e)-d.getPeriodDuration("hh",1)?!1:c!=b?!0:!1},generateDFObject:function(){this.dateFormatsObject={};var a;for(a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=b.format}},hideBalloon:function(){this.balloon&&this.balloon.hide&&
this.balloon.hide();this.prevBY=this.prevBX=NaN},formatBalloonText:function(a){return a},showBalloon:function(a,b,c,e){var d=this.offset;switch(this.position){case "bottom":b=this.height+d;break;case "top":b=-d;break;case "left":a=-d;break;case "right":a=this.width+d}c||(c=this.currentDateFormat);if("V"==this.orientation){if(0>b||b>this.height)return;if(isNaN(b)){this.hideBalloon();return}b=this.adjustBalloonCoordinate(b,e);e=this.coordinateToValue(b)}else{if(0>a||a>this.width)return;if(isNaN(a)){this.hideBalloon();
return}a=this.adjustBalloonCoordinate(a,e);e=this.coordinateToValue(a)}var f;if(d=this.chart.chartCursor)f=d.index;if(this.balloon&&void 0!==e&&this.balloon.enabled){if(this.balloonTextFunction){if("date"==this.type||!0===this.parseDates)e=new Date(e);e=this.balloonTextFunction(e)}else this.balloonText?e=this.formatBalloonText(this.balloonText,f,c):isNaN(e)||(e=this.formatValue(e,c));if(a!=this.prevBX||b!=this.prevBY)this.balloon.setPosition(a,b),this.prevBX=a,this.prevBY=b,e&&this.balloon.showBalloon(e)}},
adjustBalloonCoordinate:function(a){return a},createBalloon:function(){var a=this.chart,b=a.chartCursor;b&&(b=b.cursorPosition,"mouse"!=b&&(this.stickBalloonToCategory=!0),"start"==b&&(this.stickBalloonToStart=!0),"ValueAxis"==this.cname&&(this.stickBalloonToCategory=!1));this.balloon&&(this.balloon.destroy&&this.balloon.destroy(),d.extend(this.balloon,a.balloon,!0))},setBalloonBounds:function(){var a=this.balloon;if(a){var b=this.chart;a.cornerRadius=0;a.shadowAlpha=0;a.borderThickness=1;a.borderAlpha=
1;a.adjustBorderColor=!1;a.showBullet=!1;this.balloon=a;a.chart=b;a.mainSet=b.plotBalloonsSet;a.pointerWidth=this.tickLength;if(this.parseDates||"date"==this.type)a.pointerWidth=0;a.className=this.id;b="V";"V"==this.orientation&&(b="H");this.stickBalloonToCategory||(a.animationDuration=0);var c,e,d,f,h=this.inside,k=this.width,l=this.height;switch(this.position){case "bottom":c=0;e=k;h?(d=0,f=l):(d=l,f=l+1E3);break;case "top":c=0;e=k;h?(d=0,f=l):(d=-1E3,f=0);break;case "left":d=0;f=l;h?(c=0,e=k):
(c=-1E3,e=0);break;case "right":d=0,f=l,h?(c=0,e=k):(c=k,e=k+1E3)}a.drop||(a.pointerOrientation=b);a.setBounds(c,d,e,f)}}})})();(function(){var d=window.AmCharts;d.ValueAxis=d.Class({inherits:d.AxisBase,construct:function(a){this.cname="ValueAxis";this.createEvents("axisChanged","logarithmicAxisFailed","axisZoomed","axisIntZoomed");d.ValueAxis.base.construct.call(this,a);this.dataChanged=!0;this.stackType="none";this.position="left";this.unitPosition="right";this.includeAllValues=this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};
this.scrollbar=!1;this.baseValue=0;this.radarCategoriesEnabled=!0;this.axisFrequency=1;this.gridType="polygons";this.useScientificNotation=!1;this.axisTitleOffset=10;this.pointPosition="axis";this.minMaxMultiplier=1;this.logGridLimit=2;this.totalTextOffset=this.treatZeroAs=0;this.minPeriod="ss";this.relativeStart=0;this.relativeEnd=1;d.applyTheme(this,a,this.cname)},updateData:function(){0>=this.gridCountR&&(this.gridCountR=1);this.totals=[];this.data=this.chart.chartData;var a=this.chart;"xy"!=a.type&&
(this.stackGraphs("smoothedLine"),this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step"));this.recalculateToPercents&&this.recalculate();if(this.synchronizationMultiplier&&this.synchronizeWith)d.isString(this.synchronizeWith)&&(this.synchronizeWith=a.getValueAxisById(this.synchronizeWith)),this.synchronizeWith&&(this.synchronizeWithAxis(this.synchronizeWith),this.foundGraphs=!0);else if(this.foundGraphs=!1,this.getMinMax(),0===this.start&&this.end==this.data.length-1&&isNaN(this.minZoom)&&
isNaN(this.maxZoom)||isNaN(this.fullMin)&&isNaN(this.fullMax))this.fullMin=this.min,this.fullMax=this.max,"date"!=this.type&&this.strictMinMax&&(isNaN(this.minimum)||(this.fullMin=this.minimum),isNaN(this.maximum)||(this.fullMax=this.maximum)),this.logarithmic&&(this.fullMin=this.logMin,0===this.fullMin&&(this.fullMin=this.treatZeroAs)),"date"==this.type&&(this.minimumDate||(this.fullMin=this.minRR),this.maximumDate||(this.fullMax=this.maxRR),this.strictMinMax&&(this.minimumDate&&(this.fullMin=this.minimumDate.getTime()),
this.maximumDate&&(this.fullMax=this.maximumDate.getTime())))},draw:function(){d.ValueAxis.base.draw.call(this);var a=this.chart,b=this.set;this.labelRotationR=this.labelRotation;d.setCN(a,this.set,"value-axis value-axis-"+this.id);d.setCN(a,this.labelsSet,"value-axis value-axis-"+this.id);d.setCN(a,this.axisLine.axisSet,"value-axis value-axis-"+this.id);var c=this.type;"duration"==c&&(this.duration="ss");!0===this.dataChanged&&(this.updateData(),this.dataChanged=!1);"date"==c&&(this.logarithmic=
!1,this.min=this.minRR,this.max=this.maxRR,this.reversed=!1,this.getDateMinMax());if(this.logarithmic){var e=this.treatZeroAs,g=this.getExtremes(0,this.data.length-1).min;!isNaN(this.minimum)&&this.minimum<g&&(g=this.minimum);this.logMin=g;this.minReal<g&&(this.minReal=g);isNaN(this.minReal)&&(this.minReal=g);0<e&&0===g&&(this.minReal=g=e);if(0>=g||0>=this.minimum){this.fire({type:"logarithmicAxisFailed",chart:a});return}}this.grid0=null;var f,h,k=a.dx,l=a.dy,e=!1,g=this.logarithmic;if(isNaN(this.min)||
isNaN(this.max)||!this.foundGraphs||Infinity==this.min||-Infinity==this.max)e=!0;else{"date"==this.type&&this.min==this.max&&(this.max+=this.minDuration(),this.min-=this.minDuration());var m=this.labelFrequency,n=this.showFirstLabel,q=this.showLastLabel,p=1,t=0;this.minCalc=this.min;this.maxCalc=this.max;if(this.strictMinMax&&(isNaN(this.minimum)||(this.min=this.minimum),isNaN(this.maximum)||(this.max=this.maximum),this.min==this.max))return;isNaN(this.minZoom)||(this.minReal=this.min=this.minZoom);
isNaN(this.maxZoom)||(this.max=this.maxZoom);if(this.logarithmic){h=this.fullMin;var r=this.fullMax;isNaN(this.minimum)||(h=this.minimum);isNaN(this.maximum)||(r=this.maximum);var r=Math.log(r)*Math.LOG10E-Math.log(h)*Math.LOG10E,w=Math.log(this.max)/Math.LN10-Math.log(h)*Math.LOG10E;this.relativeStart=d.roundTo((Math.log(this.minReal)/Math.LN10-Math.log(h)*Math.LOG10E)/r,5);this.relativeEnd=d.roundTo(w/r,5)}else this.relativeStart=d.roundTo(d.fitToBounds((this.min-this.fullMin)/(this.fullMax-this.fullMin),
0,1),5),this.relativeEnd=d.roundTo(d.fitToBounds((this.max-this.fullMin)/(this.fullMax-this.fullMin),0,1),5);var r=Math.round((this.maxCalc-this.minCalc)/this.step)+1,z;!0===g?(z=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E,this.stepWidth=this.axisWidth/z,z>this.logGridLimit&&(r=Math.ceil(Math.log(this.max)*Math.LOG10E)+1,t=Math.round(Math.log(this.minReal)*Math.LOG10E),r>this.gridCountR&&(p=Math.ceil(r/this.gridCountR)))):this.stepWidth=this.axisWidth/(this.max-this.min);var x=
0;1>this.step&&-1<this.step&&(x=d.getDecimals(this.step));this.integersOnly&&(x=0);x>this.maxDecCount&&(x=this.maxDecCount);w=this.precision;isNaN(w)||(x=w);isNaN(this.maxZoom)&&(this.max=d.roundTo(this.max,this.maxDecCount),this.min=d.roundTo(this.min,this.maxDecCount));h={};h.precision=x;h.decimalSeparator=a.nf.decimalSeparator;h.thousandsSeparator=a.nf.thousandsSeparator;this.numberFormatter=h;var u;this.exponential=!1;for(h=t;h<r;h+=p){var A=d.roundTo(this.step*h+this.min,x);-1!=String(A).indexOf("e")&&
(this.exponential=!0)}this.duration&&(this.maxInterval=d.getMaxInterval(this.max,this.duration));var x=this.step,y,A=this.minorGridAlpha;this.minorGridEnabled&&(y=this.getMinorGridStep(x,this.stepWidth*x));if(this.autoGridCount||0!==this.gridCount)if("date"==c)this.generateDFObject(),this.timeDifference=this.max-this.min,this.maxTime=this.lastTime=this.max,this.startTime=this.firstTime=this.min,this.parseDatesDraw();else for(r>=this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=
this.autoRotateAngle),c=this.minCalc,g&&(r++,c=this.maxCalc-r*x),this.gridCountReal=r,h=this.startCount=t;h<r;h+=p)if(t=x*h+c,t=d.roundTo(t,this.maxDecCount+1),!this.integersOnly||Math.round(t)==t)if(isNaN(w)||Number(d.toFixed(t,w))==t){if(!0===g)if(z>this.logGridLimit){if(t=Math.pow(10,h),t>this.max)continue}else if(0>=t&&(t=c+x*h+x/2,0>=t))continue;u=this.formatValue(t,!1,h);Math.round(h/m)!=h/m&&(u=void 0);if(0===h&&!n||h==r-1&&!q)u=" ";f=this.getCoordinate(t);var B;this.rotate&&this.autoWrap&&
(B=this.stepWidth*x-10);u=new this.axisItemRenderer(this,f,u,void 0,B,void 0,void 0,this.boldLabels);this.pushAxisItem(u);if(t==this.baseValue&&"radar"!=a.type){var D,C,I=this.width,H=this.height;"H"==this.orientation?0<=f&&f<=I+1&&(D=[f,f,f+k],C=[H,0,l]):0<=f&&f<=H+1&&(D=[0,I,I+k],C=[f,f,f+l]);D&&(f=d.fitToBounds(2*this.gridAlpha,0,1),isNaN(this.zeroGridAlpha)||(f=this.zeroGridAlpha),f=d.line(a.container,D,C,this.gridColor,f,1,this.dashLength),f.translate(this.x,this.y),this.grid0=f,a.axesSet.push(f),
f.toBack(),d.setCN(a,f,this.bcn+"zero-grid-"+this.id),d.setCN(a,f,this.bcn+"zero-grid"))}if(!isNaN(y)&&0<A&&h<r-1){f=x/y;g&&(y=x*(h+p)+this.minCalc,y=d.roundTo(y,this.maxDecCount+1),z>this.logGridLimit&&(y=Math.pow(10,h+p)),f=9,y=(y-t)/f);I=this.gridAlpha;this.gridAlpha=this.minorGridAlpha;for(H=1;H<f;H++){var Q=this.getCoordinate(t+y*H),Q=new this.axisItemRenderer(this,Q,"",!1,0,0,!1,!1,0,!0);this.pushAxisItem(Q)}this.gridAlpha=I}}z=this.guides;B=z.length;if(0<B){D=this.fillAlpha;for(h=this.fillAlpha=
0;h<B;h++)C=z[h],k=NaN,y=C.above,isNaN(C.toValue)||(k=this.getCoordinate(C.toValue),u=new this.axisItemRenderer(this,k,"",!0,NaN,NaN,C),this.pushAxisItem(u,y)),l=NaN,isNaN(C.value)||(l=this.getCoordinate(C.value),u=new this.axisItemRenderer(this,l,C.label,!0,NaN,(k-l)/2,C),this.pushAxisItem(u,y)),isNaN(k)&&(l-=3,k=l+3),u&&(m=u.label)&&this.addEventListeners(m,C),isNaN(k-l)||0>l&&0>k||(k=new this.guideFillRenderer(this,l,k,C),this.pushAxisItem(k,y),y=k.graphics(),C.graphics=y,this.addEventListeners(y,
C));this.fillAlpha=D}u=this.baseValue;this.min>this.baseValue&&this.max>this.baseValue&&(u=this.min);this.min<this.baseValue&&this.max<this.baseValue&&(u=this.max);g&&u<this.minReal&&(u=this.minReal);this.baseCoord=this.getCoordinate(u,!0);u={type:"axisChanged",target:this,chart:a};u.min=g?this.minReal:this.min;u.max=this.max;this.fire(u);this.axisCreated=!0}g=this.axisLine.set;u=this.labelsSet;b.translate(this.x,this.y);u.translate(this.x,this.y);this.positionTitle();"radar"!=a.type&&g.toFront();
!this.visible||e?(b.hide(),g.hide(),u.hide()):(b.show(),g.show(),u.show());this.axisY=this.y;this.axisX=this.x},getDateMinMax:function(){this.minimumDate&&(this.minimumDate instanceof Date||(this.minimumDate=d.getDate(this.minimumDate,this.chart.dataDateFormat,"fff")),this.min=this.minimumDate.getTime());this.maximumDate&&(this.maximumDate instanceof Date||(this.maximumDate=d.getDate(this.maximumDate,this.chart.dataDateFormat,"fff")),this.max=this.maximumDate.getTime())},formatValue:function(a,b,
c){var e=this.exponential,g=this.logarithmic,f=this.numberFormatter,h=this.chart;if(f)return!0===this.logarithmic&&(e=-1!=String(a).indexOf("e")?!0:!1),this.useScientificNotation&&(e=!0),this.usePrefixes&&(e=!1),e?(c=-1==String(a).indexOf("e")?a.toExponential(15):String(a),e=c.split("e"),c=Number(e[0]),e=Number(e[1]),c=d.roundTo(c,14),b||isNaN(this.precision)||(c=d.roundTo(c,this.precision)),10==c&&(c=1,e+=1),c=c+"e"+e,0===a&&(c="0"),1==a&&(c="1")):(g&&(e=String(a).split("."),e[1]?(f.precision=e[1].length,
0>c&&(f.precision=Math.abs(c)),b&&1<a&&(f.precision=0),b||isNaN(this.precision)||(f.precision=this.precision)):f.precision=-1),c=this.usePrefixes?d.addPrefix(a,h.prefixesOfBigNumbers,h.prefixesOfSmallNumbers,f,!b):d.formatNumber(a,f,f.precision)),this.duration&&(b&&(f.precision=0),c=d.formatDuration(a,this.duration,"",this.durationUnits,this.maxInterval,f)),"date"==this.type&&(c=d.formatDate(new Date(a),this.currentDateFormat,h)),this.recalculateToPercents?c+="%":(b=this.unit)&&(c="left"==this.unitPosition?
b+c:c+b),this.labelFunction&&(c="date"==this.type?this.labelFunction(c,new Date(a),this).toString():this.labelFunction(a,c,this).toString()),c},getMinorGridStep:function(a,b){var c=[5,4,2];60>b&&c.shift();for(var e=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),d=0;d<c.length;d++){var f=a/c[d],h=Math.floor(Math.log(Math.abs(f))*Math.LOG10E);if(!(1<Math.abs(e-h)))if(1>a){if(h=Math.pow(10,-h)*f,h==Math.round(h))return f}else if(f==Math.round(f))return f}},stackGraphs:function(a){var b=this.stackType;
"stacked"==b&&(b="regular");"line"==b&&(b="none");"100% stacked"==b&&(b="100%");this.stackType=b;var c=[],e=[],g=[],f=[],h,k=this.chart.graphs,l,m,n,q,p,t=this.baseValue,r=!1;if("line"==a||"step"==a||"smoothedLine"==a)r=!0;if(r&&("regular"==b||"100%"==b))for(q=0;q<k.length;q++)n=k[q],n.stackGraph=null,n.hidden||(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(l&&(n.stackGraph=l),l=n));n=this.start-10;l=this.end+10;q=this.data.length-1;n=d.fitToBounds(n,0,q);l=d.fitToBounds(l,
0,q);for(p=n;p<=l;p++){var w=0;for(q=0;q<k.length;q++)if(n=k[q],n.hidden)n.newStack&&(g[p]=NaN,e[p]=NaN);else if(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable)if(m=this.data[p].axes[this.id].graphs[n.id],h=m.values.value,isNaN(h))n.newStack&&(g[p]=NaN,e[p]=NaN);else{var z=d.getDecimals(h);w<z&&(w=z);isNaN(f[p])?f[p]=Math.abs(h):f[p]+=Math.abs(h);f[p]=d.roundTo(f[p],w);z=n.fillToGraph;r&&z&&(z=this.data[p].axes[this.id].graphs[z.id])&&(m.values.open=z.values.value);"regular"==
b&&(r&&(isNaN(c[p])?(c[p]=h,m.values.close=h,m.values.open=this.baseValue):(isNaN(h)?m.values.close=c[p]:m.values.close=h+c[p],m.values.open=c[p],c[p]=m.values.close)),"column"==a&&(n.newStack&&(g[p]=NaN,e[p]=NaN),m.values.close=h,0>h?(m.values.close=h,isNaN(e[p])?m.values.open=t:(m.values.close+=e[p],m.values.open=e[p]),e[p]=m.values.close):(m.values.close=h,isNaN(g[p])?m.values.open=t:(m.values.close+=g[p],m.values.open=g[p]),g[p]=m.values.close)))}}for(p=this.start;p<=this.end;p++)for(q=0;q<k.length;q++)(n=
k[q],n.hidden)?n.newStack&&(g[p]=NaN,e[p]=NaN):(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(m=this.data[p].axes[this.id].graphs[n.id],h=m.values.value,isNaN(h)||(c=h/f[p]*100,m.values.percents=c,m.values.total=f[p],n.newStack&&(g[p]=NaN,e[p]=NaN),"100%"==b&&(isNaN(e[p])&&(e[p]=0),isNaN(g[p])&&(g[p]=0),0>c?(m.values.close=d.fitToBounds(c+e[p],-100,100),m.values.open=e[p],e[p]=m.values.close):(m.values.close=d.fitToBounds(c+g[p],-100,100),m.values.open=g[p],g[p]=m.values.close)))))},
recalculate:function(){var a=this.chart,b=a.graphs,c;for(c=0;c<b.length;c++){var e=b[c];if(e.valueAxis==this){var g="value";if("candlestick"==e.type||"ohlc"==e.type)g="open";var f,h,k=this.end+2,k=d.fitToBounds(this.end+1,0,this.data.length-1),l=this.start;0<l&&l--;var m;h=this.start;e.compareFromStart&&(h=0);if(!isNaN(a.startTime)&&(m=a.categoryAxis)){var n=m.minDuration(),n=new Date(a.startTime+n/2),q=d.resetDateToMin(new Date(a.startTime),m.minPeriod).getTime();d.resetDateToMin(new Date(n),m.minPeriod).getTime()>
q&&h++}if(m=a.recalculateFromDate)m=d.getDate(m,a.dataDateFormat,"fff"),h=a.getClosestIndex(a.chartData,"time",m.getTime(),!0,0,a.chartData.length),k=a.chartData.length-1;for(m=h;m<=k&&(h=this.data[m].axes[this.id].graphs[e.id],f=h.values[g],e.recalculateValue&&(f=h.dataContext[e.valueField+e.recalculateValue]),isNaN(f));m++);this.recBaseValue=f;for(g=l;g<=k;g++){h=this.data[g].axes[this.id].graphs[e.id];h.percents={};var l=h.values,p;for(p in l)h.percents[p]="percents"!=p?l[p]/f*100-100:l[p]}}}},
getMinMax:function(){var a=!1,b=this.chart,c=b.graphs,e;for(e=0;e<c.length;e++){var g=c[e].type;("line"==g||"step"==g||"smoothedLine"==g)&&this.expandMinMax&&(a=!0)}a&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++);"serial"==b.type&&(!0!==b.categoryAxis.parseDates||a||this.end<this.data.length-1&&this.end++);this.includeAllValues&&(this.start=0,this.end=this.data.length-1);a=this.minMaxMultiplier;b=this.getExtremes(this.start,this.end);this.min=b.min;this.max=b.max;this.minRR=
this.min;this.maxRR=this.max;a=(this.max-this.min)*(a-1);this.min-=a;this.max+=a;a=this.guides.length;if(this.includeGuidesInMinMax&&0<a)for(b=0;b<a;b++)c=this.guides[b],c.toValue<this.min&&(this.min=c.toValue),c.value<this.min&&(this.min=c.value),c.toValue>this.max&&(this.max=c.toValue),c.value>this.max&&(this.max=c.value);isNaN(this.minimum)||(this.min=this.minimum);isNaN(this.maximum)||(this.max=this.maximum);"date"==this.type&&this.getDateMinMax();this.min>this.max&&(a=this.max,this.max=this.min,
this.min=a);isNaN(this.minZoom)||(this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);this.minCalc=this.min;this.maxCalc=this.max;this.minReal=this.min;this.maxReal=this.max;0===this.min&&0===this.max&&(this.max=9);this.min>this.max&&(this.min=this.max-1);a=this.min;b=this.max;c=this.max-this.min;e=0===c?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;isNaN(this.maximum)&&(this.max=Math.ceil(this.max/
e)*e+e);isNaN(this.minimum)&&(this.min=Math.floor(this.min/e)*e-e);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=0>this.max?0:100);c=this.max-this.min;e=Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;this.step=Math.ceil(c/this.gridCountR/e)*e;c=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E));c=d.fixStepE(c);e=Math.ceil(this.step/c);5<e&&(e=10);5>=e&&2<e&&(e=5);this.step=Math.ceil(this.step/
(c*e))*c*e;isNaN(this.setStep)||(this.step=this.setStep);1>c?(this.maxDecCount=Math.abs(Math.log(Math.abs(c))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),this.step=d.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0;this.min=this.step*Math.floor(this.min/this.step);this.max=this.step*Math.ceil(this.max/this.step);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);1<this.minReal&&1<this.max-this.minReal&&(this.minReal=Math.floor(this.minReal));c=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*
Math.LOG10E));0===this.min&&(this.minReal=c);0===this.min&&1<this.minReal&&(this.minReal=1);0<this.min&&0<this.minReal-this.step&&(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min);this.logarithmic&&(2<Math.log(b)*Math.LOG10E-Math.log(a)*Math.LOG10E?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E)),this.maxReal=this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(b))*Math.LOG10E))):(a=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,
Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*Math.LOG10E))/10<a&&(this.minReal=this.min=10*a)))},getExtremes:function(a,b){var c,e,d;for(d=a;d<=b;d++){var f=this.data[d].axes[this.id].graphs,h;for(h in f)if(f.hasOwnProperty(h)){var k=this.chart.graphsById[h];if(k.includeInMinMax&&(!k.hidden||this.includeHidden)){isNaN(c)&&(c=Infinity);isNaN(e)&&(e=-Infinity);this.foundGraphs=!0;k=f[h].values;this.recalculateToPercents&&(k=f[h].percents);var l;if(this.minMaxField)l=k[this.minMaxField],l<c&&
(c=l),l>e&&(e=l);else for(var m in k)k.hasOwnProperty(m)&&"percents"!=m&&"total"!=m&&"error"!=m&&(l=k[m],l<c&&(c=l),l>e&&(e=l))}}}return{min:c,max:e}},zoomOut:function(a){this.maxZoom=this.minZoom=NaN;this.zoomToRelativeValues(0,1,a)},zoomToRelativeValues:function(a,b,c){if(this.reversed){var e=a;a=1-b;b=1-e}var d=this.fullMax,e=this.fullMin,f=e+(d-e)*a,h=e+(d-e)*b;0<=this.minimum&&0>f&&(f=0);this.logarithmic&&(isNaN(this.minimum)||(e=this.minimum),isNaN(this.maximum)||(d=this.maximum),d=Math.log(d)*
Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.pow(10,d*a+Math.log(e)*Math.LOG10E),h=Math.pow(10,d*b+Math.log(e)*Math.LOG10E));return this.zoomToValues(f,h,c)},zoomToValues:function(a,b,c){if(b<a){var e=b;b=a;a=e}var g=this.fullMax,e=this.fullMin;this.relativeStart=d.roundTo((a-e)/(g-e),9);this.relativeEnd=d.roundTo((b-e)/(g-e),9);if(this.logarithmic){isNaN(this.minimum)||(e=this.minimum);isNaN(this.maximum)||(g=this.maximum);var g=Math.log(g)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.log(b)/Math.LN10-
Math.log(e)*Math.LOG10E;this.relativeStart=d.roundTo((Math.log(a)/Math.LN10-Math.log(e)*Math.LOG10E)/g,9);this.relativeEnd=d.roundTo(f/g,9)}if(this.minZoom!=a||this.maxZoom!=b)return this.minZoom=a,this.maxZoom=b,e={type:"axisZoomed"},e.chart=this.chart,e.valueAxis=this,e.startValue=a,e.endValue=b,e.relativeStart=this.relativeStart,e.relativeEnd=this.relativeEnd,this.prevStartValue==a&&this.prevEndValue==b||this.fire(e),this.prevStartValue=a,this.prevEndValue=b,c||(a={},d.copyProperties(e,a),a.type=
"axisIntZoomed",this.fire(a)),0===this.relativeStart&&1==this.relativeEnd&&(this.maxZoom=this.minZoom=NaN),!0},coordinateToValue:function(a){if(isNaN(a))return NaN;var b=this.axisWidth,c=this.stepWidth,e=this.reversed,d=this.rotate,f=this.min,h=this.minReal;return!0===this.logarithmic?Math.pow(10,(d?!0===e?(b-a)/c:a/c:!0===e?a/c:(b-a)/c)+Math.log(h)*Math.LOG10E):!0===e?d?f-(a-b)/c:a/c+f:d?a/c+f:f-(a-b)/c},getCoordinate:function(a,b){if(isNaN(a))return NaN;var c=this.rotate,e=this.reversed,d=this.axisWidth,
f=this.stepWidth,h=this.min,k=this.minReal;!0===this.logarithmic?(0===a&&(a=this.treatZeroAs),h=Math.log(a)*Math.LOG10E-Math.log(k)*Math.LOG10E,c=c?!0===e?d-f*h:f*h:!0===e?f*h:d-f*h):c=!0===e?c?d-f*(a-h):f*(a-h):c?f*(a-h):d-f*(a-h);1E7<Math.abs(c)&&(c=c/Math.abs(c)*1E7);b||(c=Math.round(c));return c},synchronizeWithAxis:function(a){this.synchronizeWith=a;this.listenTo(this.synchronizeWith,"axisChanged",this.handleSynchronization)},handleSynchronization:function(){if(this.synchronizeWith){d.isString(this.synchronizeWith)&&
(this.synchronizeWith=this.chart.getValueAxisById(this.synchronizeWith));var a=this.synchronizeWith,b=a.min,c=a.max,a=a.step,e=this.synchronizationMultiplier;e&&(this.min=b*e,this.max=c*e,this.step=a*e,b=Math.abs(Math.log(Math.abs(Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E))))*Math.LOG10E),this.maxDecCount=b=Math.round(b),this.draw())}}})})();(function(){var d=window.AmCharts;d.RecAxis=d.Class({construct:function(a){var b=a.chart,c=a.axisThickness,e=a.axisColor,g=a.axisAlpha,f=a.offset,h=a.dx,k=a.dy,l=a.x,m=a.y,n=a.height,q=a.width,p=b.container;"H"==a.orientation?(e=d.line(p,[0,q],[0,0],e,g,c),this.axisWidth=a.width,"bottom"==a.position?(k=c/2+f+n+m-1,c=l):(k=-c/2-f+m+k,c=h+l)):(this.axisWidth=a.height,"right"==a.position?(e=d.line(p,[0,0,-h],[0,n,n-k],e,g,c),k=m+k,c=c/2+f+h+q+l-1):(e=d.line(p,[0,0],[0,n],e,g,c),k=m,c=-c/2-f+l));e.translate(c,
k);c=b.container.set();c.push(e);b.axesSet.push(c);d.setCN(b,e,a.bcn+"line");this.axisSet=c;this.set=e}})})();(function(){var d=window.AmCharts;d.RecItem=d.Class({construct:function(a,b,c,e,g,f,h,k,l,m,n,q){b=Math.round(b);var p=a.chart;this.value=c;void 0==c&&(c="");l||(l=0);void 0==e&&(e=!0);var t=p.fontFamily,r=a.fontSize;void 0==r&&(r=p.fontSize);var w=a.color;void 0==w&&(w=p.color);void 0!==n&&(w=n);var z=a.chart.container,x=z.set();this.set=x;var u=a.axisThickness,A=a.axisColor,y=a.axisAlpha,B=a.tickLength,D=a.gridAlpha,C=a.gridThickness,I=a.gridColor,H=a.dashLength,Q=a.fillColor,M=a.fillAlpha,P=a.labelsEnabled;
n=a.labelRotationR;var ia=a.counter,J=a.inside,aa=a.labelOffset,ma=a.dx,na=a.dy,Pa=a.orientation,Z=a.position,da=a.previousCoord,X=a.height,xa=a.width,ea=a.offset,fa,Ba;h?(void 0!==h.id&&(q=p.classNamePrefix+"-guide-"+h.id),P=!0,isNaN(h.tickLength)||(B=h.tickLength),void 0!=h.lineColor&&(I=h.lineColor),void 0!=h.color&&(w=h.color),isNaN(h.lineAlpha)||(D=h.lineAlpha),isNaN(h.dashLength)||(H=h.dashLength),isNaN(h.lineThickness)||(C=h.lineThickness),!0===h.inside&&(J=!0,0<ea&&(ea=0)),isNaN(h.labelRotation)||
(n=h.labelRotation),isNaN(h.fontSize)||(r=h.fontSize),h.position&&(Z=h.position),void 0!==h.boldLabel&&(k=h.boldLabel),isNaN(h.labelOffset)||(aa=h.labelOffset)):""===c&&(B=0);m&&!isNaN(a.minorTickLength)&&(B=a.minorTickLength);var ga="start";0<g&&(ga="middle");a.centerLabels&&(ga="middle");var V=n*Math.PI/180,Y,Da,G=0,v=0,oa=0,ha=Y=0,Qa=0;"V"==Pa&&(n=0);var ca;P&&""!==c&&(ca=a.autoWrap&&0===n?d.wrappedText(z,c,w,t,r,ga,k,Math.abs(g),0):d.text(z,c,w,t,r,ga,k),ga=ca.getBBox(),ha=ga.width,Qa=ga.height);
if("H"==Pa){if(0<=b&&b<=xa+1&&(0<B&&0<y&&b+l<=xa+1&&(fa=d.line(z,[b+l,b+l],[0,B],A,y,C),x.push(fa)),0<D&&(Ba=d.line(z,[b,b+ma,b+ma],[X,X+na,na],I,D,C,H),x.push(Ba))),v=0,G=b,h&&90==n&&J&&(G-=r),!1===e?(ga="start",v="bottom"==Z?J?v+B:v-B:J?v-B:v+B,G+=3,0<g&&(G+=g/2-3,ga="middle"),0<n&&(ga="middle")):ga="middle",1==ia&&0<M&&!h&&!m&&da<xa&&(e=d.fitToBounds(b,0,xa),da=d.fitToBounds(da,0,xa),Y=e-da,0<Y&&(Da=d.rect(z,Y,a.height,Q,M),Da.translate(e-Y+ma,na),x.push(Da))),"bottom"==Z?(v+=X+r/2+ea,J?(0<n?(v=
X-ha/2*Math.sin(V)-B-3,a.centerRotatedLabels||(G+=ha/2*Math.cos(V)-4+2)):0>n?(v=X+ha*Math.sin(V)-B-3+2,G+=-ha*Math.cos(V)-Qa*Math.sin(V)-4):v-=B+r+3+3,v-=aa):(0<n?(v=X+ha/2*Math.sin(V)+B+3,a.centerRotatedLabels||(G-=ha/2*Math.cos(V))):0>n?(v=X+B+3-ha/2*Math.sin(V)+2,G+=ha/2*Math.cos(V)):v+=B+u+3+3,v+=aa)):(v+=na+r/2-ea,G+=ma,J?(0<n?(v=ha/2*Math.sin(V)+B+3,a.centerRotatedLabels||(G-=ha/2*Math.cos(V))):v+=B+3,v+=aa):(0<n?(v=-(ha/2)*Math.sin(V)-B-6,a.centerRotatedLabels||(G+=ha/2*Math.cos(V))):v-=B+
r+3+u+3,v-=aa)),"bottom"==Z?Y=(J?X-B-1:X+u-1)+ea:(oa=ma,Y=(J?na:na-B-u+1)-ea),f&&(G+=f),r=G,0<n&&(r+=ha/2*Math.cos(V)),ca&&(f=0,J&&(f=ha/2*Math.cos(V)),r+f>xa+2||0>r))ca.remove(),ca=null}else{0<=b&&b<=X+1&&(0<B&&0<y&&b+l<=X+1&&(fa=d.line(z,[0,B+1],[b+l,b+l],A,y,C),x.push(fa)),0<D&&(Ba=d.line(z,[0,ma,xa+ma],[b,b+na,b+na],I,D,C,H),x.push(Ba)));ga="end";if(!0===J&&"left"==Z||!1===J&&"right"==Z)ga="start";v=b-Qa/2+2;1==ia&&0<M&&!h&&!m&&(e=d.fitToBounds(b,0,X),da=d.fitToBounds(da,0,X),V=e-da,Da=d.polygon(z,
[0,a.width,a.width,0],[0,0,V,V],Q,M),Da.translate(ma,e-V+na),x.push(Da));v+=r/2;"right"==Z?(G+=ma+xa+ea,v+=na,J?(f||(v-=r/2+3),G=G-(B+4)-aa):(G+=B+4+u,v-=2,G+=aa)):J?(G+=B+4-ea,f||(v-=r/2+3),h&&(G+=ma,v+=na),G+=aa):(G+=-B-u-4-2-ea,v-=2,G-=aa);fa&&("right"==Z?(oa+=ma+ea+xa-1,Y+=na,oa=J?oa-u:oa+u):(oa-=ea,J||(oa-=B+u)));f&&(v+=f);J=-3;"right"==Z&&(J+=na);ca&&(v>X+1||v<J-r/10)&&(ca.remove(),ca=null)}fa&&(fa.translate(oa,Y),d.setCN(p,fa,a.bcn+"tick"),d.setCN(p,fa,q,!0),h&&d.setCN(p,fa,"guide"));!1===
a.visible&&(fa&&fa.remove(),ca&&(ca.remove(),ca=null));ca&&(ca.attr({"text-anchor":ga}),ca.translate(G,v,NaN,!0),0!==n&&ca.rotate(-n,a.chart.backgroundColor),a.allLabels.push(ca),this.label=ca,d.setCN(p,ca,a.bcn+"label"),d.setCN(p,ca,q,!0),h&&d.setCN(p,ca,"guide"));Ba&&(d.setCN(p,Ba,a.bcn+"grid"),d.setCN(p,Ba,q,!0),h&&d.setCN(p,Ba,"guide"));Da&&(d.setCN(p,Da,a.bcn+"fill"),d.setCN(p,Da,q,!0));m?Ba&&d.setCN(p,Ba,a.bcn+"grid-minor"):(a.counter=0===ia?1:0,a.previousCoord=b);0===this.set.node.childNodes.length&&
this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}})})();(function(){var d=window.AmCharts;d.RecFill=d.Class({construct:function(a,b,c,e){var g=a.dx,f=a.dy,h=a.orientation,k=0;if(c<b){var l=b;b=c;c=l}var m=e.fillAlpha;isNaN(m)&&(m=0);var l=a.chart.container,n=e.fillColor;"V"==h?(b=d.fitToBounds(b,0,a.height),c=d.fitToBounds(c,0,a.height)):(b=d.fitToBounds(b,0,a.width),c=d.fitToBounds(c,0,a.width));c-=b;isNaN(c)&&(c=4,k=2,m=0);0>c&&"object"==typeof n&&(n=n.join(",").split(",").reverse());"V"==h?(h=d.rect(l,a.width,c,n,m),h.translate(g,b-k+f)):(h=d.rect(l,
c,a.height,n,m),h.translate(b-k+g,f));d.setCN(a.chart,h,"guide-fill");e.id&&d.setCN(a.chart,h,"guide-fill-"+e.id);this.set=l.set([h])},graphics:function(){return this.set},getLabel:function(){}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.21.12";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=
0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=this.accessible=!0;this.touchStartTime=this.touchClickDuration=0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),
c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.cssScale=this.handDrawThickness=1;this.cssAngle=0;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},
{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];this.langObj={};
d.applyTheme(this,a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(a,b,c){this.accessible&&a&&(c&&a.setAttr("role",c),a.setAttr("aria-label",b))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==
c||(c=.001);var g=this.updateWidth();this.realWidth=g;var f=this.updateHeight();this.realHeight=f;b=d.polygon(a,[0,g-1,g-1,0],[0,0,f-1,f-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,g,f),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var g=b[e],g=d.processObject(g,d.Title,this.theme);if(!1!==g.enabled){var f=
g.color;void 0===f&&(f=this.color);var h=g.size;isNaN(h)&&(h=this.fontSize+2);isNaN(g.alpha);var k=this.marginLeft,l=!0;void 0!==g.bold&&(l=g.bold);f=d.wrappedText(this.container,g.text,f,this.fontFamily,h,"middle",l,this.realWidth-35-this.marginRight-k);f.translate(k+(this.realWidth-this.marginRight-k)/2,c);f.node.style.pointerEvents="none";g.sprite=f;void 0!==g.tabIndex&&f.setAttr("tabindex",g.tabIndex);d.setCN(this,f,"title");g.id&&d.setCN(this,f,"title-"+g.id);f.attr({opacity:g.alpha});c+=f.getBBox().height+
5;a?f.remove():this.freeLabelsSet.push(f)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){var b;if(b="object"!=typeof a?document.getElementById(a):a){for(;b.firstChild;)b.removeChild(b.firstChild);
this.div=b;b.style.overflow="hidden";b.style.textAlign="left";a=this.chartDiv;var c=this.legendDiv,e=this.legend,g=c.style,f=a.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var h,k=document.createElement("div");h=k.style;h.position="relative";this.containerDiv=k;k.className=this.classNamePrefix+"-main-div";a.className=this.classNamePrefix+"-chart-div";b.appendChild(k);(b=this.exportConfig)&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,
b));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e){e=this.addLegend(e,e.divId);if(e.enabled)switch(g.left=null,g.top=null,g.right=null,f.left=null,f.right=null,f.top=null,g.position="relative",f.position="relative",h.width="100%",h.height="100%",e.position){case "bottom":k.appendChild(a);k.appendChild(c);break;case "top":k.appendChild(c);k.appendChild(a);break;case "absolute":g.position="absolute";
f.position="absolute";void 0!==e.left&&(g.left=e.left+"px");void 0!==e.right&&(g.right=e.right+"px");void 0!==e.top&&(g.top=e.top+"px");void 0!==e.bottom&&(g.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;k.appendChild(a);k.appendChild(c);break;case "right":g.position="relative";f.position="absolute";k.appendChild(a);k.appendChild(c);break;case "left":g.position="absolute";f.position="relative";k.appendChild(a);k.appendChild(c);break;case "outside":k.appendChild(a)}else k.appendChild(a);this.prevLegendPosition=
e.position}else k.appendChild(a);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);(this.mouseWheelScrollEnabled||this.mouseWheelZoomEnabled)&&d.addWheelListeners();this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=
d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));(a=this.percentFormatter)&&
!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,this.realWidth,
this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();this.checkTransform(this.div);a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),this.graphsBehindSet=a.set(),d.remove(this.bulletBehindSet),
this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),this.axesLabelsSet=a.set(),d.remove(this.balloonsSet),
this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(e){}var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);if(b!=this.mw||c!=this.mh)this.mw=b,this.mh=
c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,g=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var e=Math.round(e),c=Math.round(c),a=Math.round(d.toCoordinate(this.width,c)),f=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<f&&(b.style.width=a+"px",b.style.height=f+"px",b.style.padding=0,g&&g.setSize(a,f),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme));
this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,f);this.updateWidth();this.balloon.chart=this;this.realWidth=a;this.realHeight=f;this.divRealWidth=c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},checkTransform:function(a){if(this.autoTransform&&
window.getComputedStyle&&a){if(a.style){var b=window.getComputedStyle(a,null);if(b&&(b=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform"))&&"none"!==b){var c=b.split("(")[1].split(")")[0].split(","),b=c[0],c=c[1],b=Math.sqrt(b*b+c*c);isNaN(b)||(this.cssScale*=b)}}a.parentNode&&this.checkTransform(a.parentNode)}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();
this.legend&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&
(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);this.legend&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},
drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,g=a.align,f=a.size,h=a.color,k=a.rotation,l=a.alpha,m=a.bold,n=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);n||(n=0);c||(c=0);void 0===h&&(h=b.color);isNaN(f)&&(f=b.fontSize);g||(g="start");"left"==g&&(g="start");"right"==g&&(g="end");"center"==g&&(g="middle",k?c=b.realHeight-c+c/2:n=b.realWidth/2-n);void 0===l&&(l=1);void 0===k&&(k=0);c+=f/2;e=d.text(b.container,
e,h,b.fontFamily,f,g,m,l);e.translate(n,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==k&&e.rotate(k);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,f,h,k,l,m){a={x:a,y:b,text:c,align:e,size:d,color:f,alpha:k,rotation:h,bold:l,url:m,enabled:!0};this.container&&this.drawLabel(a);this.allLabels.push(a)},
clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var f=
e.offsetHeight,e=e.style,h=this.chartDiv.style,k=c.position;if(("right"==k||"left"==k)&&void 0===c.divId){a-=d;if(0>a||isNaN(a))a=0;h.width=a+"px";this.balloon&&this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,this.realHeight);"left"==k?(h.left=d+"px",e.left="0px"):(h.left="0px",e.left=a+"px");b>f&&(e.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:e,
bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?
(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction="auto")},checkTouchDuration:function(a){var b=
this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",
function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,b);a.handleMouseDown.call(a,
b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){this.skipEvents||
(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),this.chartRendered||(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=
a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();a.positionCred();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",chart:a})},10);a.previousHeight=a.divRealHeight;
a.previousWidth=a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);a&&(this.dataChanged=!0,this.marginsUpdated=
!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},a.hideBalloonTime)},cleanChart:function(){},
hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var f=this;clearTimeout(f.balloonTO);clearTimeout(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(e,d),isNaN(e)||isNaN(d)?f.followCursor(!0):f.followCursor(!1)):f.followCursor(!0),a&&f.showBalloon(a))},
handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var f=a.touches.item(1);f&&this.panEventsEnabled&&this.boundingRect&&(e=f.clientX-this.boundingRect.left,
d=f.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();a&&(a.touches&&this.tapToActivate&&
!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},addLegend:function(a,b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=
b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},
animate:function(a,b,c,e,g,f,h){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:g,effect:f,suffix:h};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,
e=b.frame+1,g=b.obj,f=b.attribute;if(e<=c){b.frame++;var h=Number(b.from),k=Number(b.to)-h,c=d[b.effect](0,e,h,k,c);0===k?(this.animations.splice(a,1),g.node.style[f]=Number(b.to)+b.suffix):g.node.style[f]=c+b.suffix}else g.node.style[f]=Number(b.to)+b.suffix,g.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",
chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);if(c!=a||!0===this.inIframe()){c=a="http://www."+a;var b="JavaScript charts",e="";"ammap"==this.product&&(c=a+"/javascript-maps/",b="Interactive JavaScript maps",
e="JS map by amCharts");a=document.createElement("a");e=document.createTextNode(e);a.setAttribute("href",c);a.setAttribute("title",b);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(e);this.chartDiv.appendChild(a);this.amLink=a;a=a.style;a.position="absolute";a.textDecoration="none";a.color=this.color;a.fontFamily=this.fontFamily;a.fontSize="11px";a.opacity=.7;a.display="block";this.positionCred()}}},positionCred:function(){var a=this.amLink;if(a){var b=this.creditsPosition,
c=a.style,e=a.offsetWidth,a=a.offsetHeight,d=0,f=0,h=this.realWidth,k=this.realHeight,l=this.type;if("serial"==l||"xy"==l||"gantt"==l)d=this.marginLeftReal,f=this.marginTopReal,h=d+this.plotAreaWidth,k=f+this.plotAreaHeight;var l=5+d,m=f+5;"bottom-left"==b&&(l=5+d,m=k-a-3);"bottom-right"==b&&(l=h-e-5,m=k-a-3);"top-right"==b&&(l=h-e-5,m=f+5);c.left=l+"px";c.top=m+"px"}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});
d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmGraph=d.Class({construct:function(a){this.cname="AmGraph";this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=4;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;
this.pointPosition="middle";this.depthCount=1;this.includeInMinMax=!0;this.negativeBase=0;this.visibleInLegend=!0;this.showAllValueLabels=!1;this.showBulletsAt=this.showBalloonAt="close";this.lineThickness=1;this.dashLength=0;this.connect=!0;this.lineAlpha=1;this.bullet="none";this.bulletBorderThickness=2;this.bulletBorderAlpha=0;this.bulletAlpha=1;this.bulletSize=8;this.cornerRadiusTop=this.hideBulletsCount=this.bulletOffset=0;this.cursorBulletAlpha=1;this.gradientOrientation="vertical";this.dy=
this.dx=0;this.periodValue="";this.clustered=!0;this.periodSpan=1;this.accessibleLabel="[[title]] [[category]] [[value]]";this.accessibleSkipText="Press enter to skip [[title]]";this.y=this.x=0;this.switchable=!0;this.minDistance=.8;this.tcc=1;this.labelRotation=0;this.labelAnchor="auto";this.labelOffset=3;this.bcn="graph-";this.dateFormat="MMM DD, YYYY";this.noRounding=!0;d.applyTheme(this,a,this.cname)},init:function(){this.createBalloon()},draw:function(){var a=this.chart;a.isRolledOverBullet=
!1;var b=a.type;if(a.drawGraphs){isNaN(this.precision)||(this.numberFormatter?this.numberFormatter.precision=this.precision:this.numberFormatter={precision:this.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator});var c=a.container;this.container=c;this.destroy();var e=c.set();this.set=e;e.translate(this.x,this.y);var g=c.set();this.bulletSet=g;g.translate(this.x,this.y);this.behindColumns?(a.graphsBehindSet.push(e),a.bulletBehindSet.push(g)):(a.graphsSet.push(e),
a.bulletSet.push(g));var f=this.bulletAxis;d.isString(f)&&(this.bulletAxis=a.getValueAxisById(f));c=c.set();d.remove(this.columnsSet);this.columnsSet=c;d.setCN(a,e,"graph-"+this.type);d.setCN(a,e,"graph-"+this.id);d.setCN(a,g,"graph-"+this.type);d.setCN(a,g,"graph-"+this.id);this.columnsArray=[];this.ownColumns=[];this.allBullets=[];this.animationArray=[];g=this.labelPosition;g||(f=this.valueAxis.stackType,g="top","column"==this.type&&(a.rotate&&(g="right"),"100%"==f||"regular"==f)&&(g="middle"),
this.labelPosition=g);d.ifArray(this.data)&&(a=!1,"xy"==b?this.xAxis.axisCreated&&this.yAxis.axisCreated&&(a=!0):this.valueAxis.axisCreated&&(a=!0),!this.hidden&&a&&this.createGraph());e.push(c)}},createGraph:function(){var a=this,b=a.chart;a.startAlpha=b.startAlpha;a.seqAn=b.sequencedAnimation;a.baseCoord=a.valueAxis.baseCoord;void 0===a.fillAlphas&&(a.fillAlphas=0);a.bulletColorR=a.bulletColor;void 0===a.bulletColorR&&(a.bulletColorR=a.lineColorR,a.bulletColorNegative=a.negativeLineColor);void 0===
a.bulletAlpha&&(a.bulletAlpha=a.lineAlpha);if("step"==c||d.VML)a.noRounding=!1;var c=b.type;"gantt"==c&&(c="serial");clearTimeout(a.playedTO);if(!isNaN(a.valueAxis.min)&&!isNaN(a.valueAxis.max)){switch(c){case "serial":a.categoryAxis&&(a.createSerialGraph(),"candlestick"==a.type&&1>a.valueAxis.minMaxMultiplier&&a.positiveClip(a.set));break;case "radar":a.createRadarGraph();break;case "xy":a.createXYGraph()}a.playedTO=setTimeout(function(){a.setAnimationPlayed.call(a)},500*a.chart.startDuration)}},
setAnimationPlayed:function(){this.animationPlayed=!0},createXYGraph:function(){var a=[],b=[],c=this.xAxis,e=this.yAxis;this.pmh=e.height;this.pmw=c.width;this.pmy=this.pmx=0;var d;for(d=this.start;d<=this.end;d++){var f=this.data[d].axes[c.id].graphs[this.id],h=f.values,k=h.x,l=h.y,h=c.getCoordinate(k,this.noRounding),m=e.getCoordinate(l,this.noRounding);if(!isNaN(k)&&!isNaN(l)&&(a.push(h),b.push(m),f.x=h,f.y=m,k=this.createBullet(f,h,m,d),l=this.labelText)){var l=this.createLabel(f,l),n=0;k&&(n=
k.size);this.positionLabel(f,h,m,l,n)}}this.drawLineGraph(a,b);this.launchAnimation()},createRadarGraph:function(){var a=this.valueAxis.stackType,b=[],c=[],e=[],d=[],f,h,k,l,m;for(m=this.start;m<=this.end;m++){var n=this.data[m].axes[this.valueAxis.id].graphs[this.id],q,p;"none"==a||"3d"==a?q=n.values.value:(q=n.values.close,p=n.values.open);if(isNaN(q))this.connect||(this.drawLineGraph(b,c,e,d),b=[],c=[],e=[],d=[]);else{var t=this.valueAxis.getCoordinate(q,this.noRounding)-this.height,t=t*this.valueAxis.rMultiplier,
r=-360/(this.end-this.start+1)*m;"middle"==this.valueAxis.pointPosition&&(r-=180/(this.end-this.start+1));q=t*Math.sin(r/180*Math.PI);t*=Math.cos(r/180*Math.PI);b.push(q);c.push(t);if(!isNaN(p)){var w=this.valueAxis.getCoordinate(p,this.noRounding)-this.height,w=w*this.valueAxis.rMultiplier,z=w*Math.sin(r/180*Math.PI),r=w*Math.cos(r/180*Math.PI);e.push(z);d.push(r);isNaN(k)&&(k=z);isNaN(l)&&(l=r)}r=this.createBullet(n,q,t,m);n.x=q;n.y=t;if(z=this.labelText)z=this.createLabel(n,z),w=0,r&&(w=r.size),
this.positionLabel(n,q,t,z,w);isNaN(f)&&(f=q);isNaN(h)&&(h=t)}}b.push(f);c.push(h);isNaN(k)||(e.push(k),d.push(l));this.drawLineGraph(b,c,e,d);this.launchAnimation()},positionLabel:function(a,b,c,e,d){if(e){var f=this.chart,h=this.valueAxis,k="middle",l=!1,m=this.labelPosition,n=e.getBBox(),q=this.chart.rotate,p=a.isNegative,t=this.fontSize;void 0===t&&(t=this.chart.fontSize);c-=n.height/2-t/2-1;void 0!==a.labelIsNegative&&(p=a.labelIsNegative);switch(m){case "right":m=q?p?"left":"right":"right";
break;case "top":m=q?"top":p?"bottom":"top";break;case "bottom":m=q?"bottom":p?"top":"bottom";break;case "left":m=q?p?"right":"left":"left"}var t=a.columnGraphics,r=0,w=0;t&&(r=t.x,w=t.y);var z=this.labelOffset;switch(m){case "right":k="start";b+=d/2+z;break;case "top":c=h.reversed?c+(d/2+n.height/2+z):c-(d/2+n.height/2+z);break;case "bottom":c=h.reversed?c-(d/2+n.height/2+z):c+(d/2+n.height/2+z);break;case "left":k="end";b-=d/2+z;break;case "inside":"column"==this.type&&(l=!0,q?p?(k="end",b=r-3-
z):(k="start",b=r+3+z):c=p?w+7+z:w-10-z);break;case "middle":"column"==this.type&&(l=!0,q?b-=(b-r)/2+z-3:c-=(c-w)/2+z-3)}"auto"!=this.labelAnchor&&(k=this.labelAnchor);e.attr({"text-anchor":k});this.labelRotation&&e.rotate(this.labelRotation);e.translate(b,c);!this.showAllValueLabels&&t&&l&&(n=e.getBBox(),n.height>a.columnHeight||n.width>a.columnWidth)&&(e.remove(),e=null);if(e&&"radar"!=f.type)if(q){if(0>c||c>this.height)e.remove(),e=null;!this.showAllValueLabels&&e&&(0>b||b>this.width)&&(e.remove(),
e=null)}else{if(0>b||b>this.width)e.remove(),e=null;!this.showAllValueLabels&&e&&(0>c||c>this.height)&&(e.remove(),e=null)}e&&this.allBullets.push(e);return e}},getGradRotation:function(){var a=270;"horizontal"==this.gradientOrientation&&(a=0);return this.gradientRotation=a},createSerialGraph:function(){this.dashLengthSwitched=this.fillColorsSwitched=this.lineColorSwitched=void 0;var a=this.chart,b=this.id,c=this.index,e=this.data,g=this.chart.container,f=this.valueAxis,h=this.type,k=this.columnWidthReal,
l=this.showBulletsAt;isNaN(this.columnWidth)||(k=this.columnWidth);isNaN(k)&&(k=.8);var m=this.useNegativeColorIfDown,n=this.width,q=this.height,p=this.y,t=this.rotate,r=this.columnCount,w=d.toCoordinate(this.cornerRadiusTop,k/2),z=this.connect,x=[],u=[],A,y,B,D,C=this.chart.graphs.length,I,H=this.dx/this.tcc,Q=this.dy/this.tcc,M=f.stackType,P=this.start,ia=this.end,J=this.scrollbar,aa="graph-column-";J&&(aa="scrollbar-graph-column-");var ma=this.categoryAxis,na=this.baseCoord,Pa=this.negativeBase,
Z=this.columnIndex,da=this.lineThickness,X=this.lineAlpha,xa=this.lineColorR,ea=this.dashLength,fa=this.set,Ba,ga=this.getGradRotation(),V=this.chart.columnSpacing,Y=ma.cellWidth,Da=(Y*k-r)/r;V>Da&&(V=Da);var G,v,oa,ha=q,Qa=n,ca=0,tb=0,ub=0,vb=0,lb=0,mb=0,wb=this.fillColorsR,Ra=this.negativeFillColors,Ja=this.negativeLineColor,bb=this.fillAlphas,cb=this.negativeFillAlphas;"object"==typeof bb&&(bb=bb[0]);"object"==typeof cb&&(cb=cb[0]);var xb=this.noRounding;"step"==h&&(xb=!1);var nb=f.getCoordinate(f.min);
f.logarithmic&&(nb=f.getCoordinate(f.minReal));this.minCoord=nb;this.resetBullet&&(this.bullet="none");if(!(J||"line"!=h&&"smoothedLine"!=h&&"step"!=h||(1==e.length&&"step"!=h&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!Ra&&void 0==Ja||m))){var Ua=Pa;Ua>f.max&&(Ua=f.max);Ua<f.min&&(Ua=f.min);f.logarithmic&&(Ua=f.minReal);var Ka=f.getCoordinate(Ua)+.5,Mb=f.getCoordinate(f.max);t?(ha=q,Qa=Math.abs(Mb-Ka),ub=q,vb=Math.abs(nb-Ka),mb=tb=0,f.reversed?(ca=0,lb=Ka):(ca=Ka,lb=0)):(Qa=
n,ha=Math.abs(Mb-Ka),vb=n,ub=Math.abs(nb-Ka),lb=ca=0,f.reversed?(mb=p,tb=Ka):mb=Ka)}var La=Math.round;this.pmx=La(ca);this.pmy=La(tb);this.pmh=La(ha);this.pmw=La(Qa);this.nmx=La(lb);this.nmy=La(mb);this.nmh=La(ub);this.nmw=La(vb);d.isModern||(this.nmy=this.nmx=0,this.nmh=this.height);this.clustered||(r=1);k="column"==h?(Y*k-V*(r-1))/r:Y*k;1>k&&(k=1);var Nb=this.fixedColumnWidth;isNaN(Nb)||(k=Nb);var L;if("line"==h||"step"==h||"smoothedLine"==h){if(0<P){for(L=P-1;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],
oa=v.values.value,!isNaN(oa)){P=L;break}if(this.lineColorField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.lineColor){this.lineColorSwitched=v.lineColor;void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched);break}if(this.fillColorsField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.fillColors){this.fillColorsSwitched=v.fillColors;break}if(this.dashLengthField)for(L=P;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],!isNaN(v.dashLength)){this.dashLengthSwitched=
v.dashLength;break}}if(ia<e.length-1)for(L=ia+1;L<e.length;L++)if(G=e[L],v=G.axes[f.id].graphs[b],oa=v.values.value,!isNaN(oa)){ia=L;break}}ia<e.length-1&&ia++;var T=[],U=[],Ma=!1;if("line"==h||"step"==h||"smoothedLine"==h)if(this.stackable&&"regular"==M||"100%"==M||this.fillToGraph)Ma=!0;var Ob=this.noStepRisers,db=-1E3,eb=-1E3,ob=this.minDistance,Sa=!0,Va=!1;for(L=P;L<=ia;L++){G=e[L];v=G.axes[f.id].graphs[b];v.index=L;var fb,Ta=NaN;if(m&&void 0==this.openField)for(var yb=L+1;yb<e.length&&(!e[yb]||
!(fb=e[L+1].axes[f.id].graphs[b])||!fb.values||(Ta=fb.values.value,isNaN(Ta)));yb++);var S,R,K,ba,ja=NaN,E=NaN,F=NaN,O=NaN,N=NaN,qa=NaN,ra=NaN,sa=NaN,ta=NaN,ya=NaN,Ea=NaN,ka=NaN,la=NaN,W=NaN,zb=NaN,Ab=NaN,ua=NaN,va=void 0,Na=wb,Wa=bb,Ha=xa,Ca,za,Bb=this.proCandlesticks,pb=this.topRadius,Fa=q-1,pa=n-1,gb=this.pattern;void 0!=v.pattern&&(gb=v.pattern);isNaN(v.alpha)||(Wa=v.alpha);isNaN(v.dashLength)||(ea=v.dashLength);var Ia=v.values;f.recalculateToPercents&&(Ia=v.percents);"none"==M&&(Z=isNaN(v.columnIndex)?
this.columnIndex:v.columnIndex);if(Ia){W=this.stackable&&"none"!=M&&"3d"!=M?Ia.close:Ia.value;if("candlestick"==h||"ohlc"==h)W=Ia.close,Ab=Ia.low,ra=f.getCoordinate(Ab),zb=Ia.high,ta=f.getCoordinate(zb);ua=Ia.open;F=f.getCoordinate(W,xb);isNaN(ua)||(N=f.getCoordinate(ua,xb),m&&"regular"!=M&&"100%"!=M&&(Ta=ua,ua=N=NaN));m&&(void 0==this.openField?fb&&(fb.isNegative=Ta<W?!0:!1,isNaN(Ta)&&(v.isNegative=!Sa)):v.isNegative=Ta>W?!0:!1);if(!J)switch(this.showBalloonAt){case "close":v.y=F;break;case "open":v.y=
N;break;case "high":v.y=ta;break;case "low":v.y=ra}var ja=G.x[ma.id],Xa=this.periodSpan-1;"step"!=h||isNaN(G.cellWidth)||(Y=G.cellWidth);var wa=Math.floor(Y/2)+Math.floor(Xa*Y/2),Ga=wa,qb=0;"left"==this.stepDirection&&(qb=(2*Y+Xa*Y)/2,ja-=qb);"center"==this.stepDirection&&(qb=Y/2,ja-=qb);"start"==this.pointPosition&&(ja-=Y/2+Math.floor(Xa*Y/2),wa=0,Ga=Math.floor(Y)+Math.floor(Xa*Y));"end"==this.pointPosition&&(ja+=Y/2+Math.floor(Xa*Y/2),wa=Math.floor(Y)+Math.floor(Xa*Y),Ga=0);if(Ob){var Cb=this.columnWidth;
isNaN(Cb)||(wa*=Cb,Ga*=Cb)}J||(v.x=ja);-1E5>ja&&(ja=-1E5);ja>n+1E5&&(ja=n+1E5);t?(E=F,O=N,N=F=ja,isNaN(ua)&&!this.fillToGraph&&(O=na),qa=ra,sa=ta):(O=E=ja,isNaN(ua)&&!this.fillToGraph&&(N=na));if(!Bb&&W<ua||Bb&&W<Ba)v.isNegative=!0,Ra&&(Na=Ra),cb&&(Wa=cb),void 0!=Ja&&(Ha=Ja);Va=!1;isNaN(W)||(m?W>Ta?(Sa&&(Va=!0),Sa=!1):(Sa||(Va=!0),Sa=!0):v.isNegative=W<Pa?!0:!1,Ba=W);var Pb=!1;J&&a.chartScrollbar.ignoreCustomColors&&(Pb=!0);Pb||(void 0!=v.color&&(Na=v.color),v.fillColors&&(Na=v.fillColors));F=d.fitToBounds(F,
-3E4,3E4);switch(h){case "line":if(isNaN(W))z||(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-db)>=ob||Math.abs(F-eb)>=ob)x.push(E),u.push(F),db=E,eb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));if(Va||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawLineGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),m?(Sa?(this.lineColorSwitched=
xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra),void 0===this.bulletColor&&(this.bulletColorSwitched=xa)):(this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,void 0===this.bulletColor&&(this.bulletColorSwitched=this.lineColorSwitched)),this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawLineGraph(x,u,T,U),x=[],u=[],T=[],U=[],eb=db=-1E3)}break;case "smoothedLine":if(isNaN(W))z||(this.drawSmoothedGraph(x,u,T,U),x=[],u=[],T=[],U=[]);else{if(Math.abs(E-
db)>=ob||Math.abs(F-eb)>=ob)x.push(E),u.push(F),db=E,eb=F;ya=E;Ea=F;ka=E;la=F;!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N));if(Va||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawSmoothedGraph(x,u,T,U),x=[E],u=[F],T=[],U=[],!Ma||isNaN(N)||isNaN(O)||(T.push(O),U.push(N)),this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawSmoothedGraph(x,
u,T,U),x=[],u=[],T=[],U=[])}break;case "step":if(!isNaN(W)){t?(isNaN(A)||(x.push(A),u.push(F-wa)),u.push(F-wa),x.push(E),u.push(F+Ga),x.push(E),!Ma||isNaN(N)||isNaN(O)||(isNaN(B)||(T.push(B),U.push(N-wa)),T.push(O),U.push(N-wa),T.push(O),U.push(N+Ga))):(isNaN(y)||(u.push(y),x.push(E-wa)),x.push(E-wa),u.push(F),x.push(E+Ga),u.push(F),!Ma||isNaN(N)||isNaN(O)||(isNaN(D)||(T.push(O-wa),U.push(D)),T.push(O-wa),U.push(N),T.push(O+Ga),U.push(N)));A=E;y=F;B=O;D=N;ya=E;Ea=F;ka=E;la=F;if(Va||void 0!=v.lineColor||
void 0!=v.fillColors||!isNaN(v.dashLength)){var Db=x[x.length-2],dc=u[u.length-2];x.pop();u.pop();T.pop();U.pop();this.drawLineGraph(x,u,T,U);x=[Db];u=[dc];T=[];U=[];Ma&&(T=[Db,Db+wa+Ga],U=[D,D]);t?(u.push(F+Ga),x.push(E)):(x.push(E+Ga),u.push(F));this.lineColorSwitched=v.lineColor;this.fillColorsSwitched=v.fillColors;this.dashLengthSwitched=v.dashLength;m&&(Sa?(this.lineColorSwitched=xa,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Ra))}if(Ob||v.gap)A=y=NaN,this.drawLineGraph(x,
u,T,U),x=[],u=[],T=[],U=[]}else if(!z){if(1>=this.periodSpan||1<this.periodSpan&&E-A>wa+Ga)A=y=NaN;this.drawLineGraph(x,u,T,U);x=[];u=[];T=[];U=[]}break;case "column":Ca=Ha;void 0!=v.lineColor&&(Ca=v.lineColor);if(!isNaN(W)){m||(v.isNegative=W<Pa?!0:!1);v.isNegative&&(Ra&&(Na=Ra),void 0!=Ja&&(Ca=Ja));var Qb=f.min,Rb=f.max,rb=ua;isNaN(rb)&&(rb=Pa);if(!(W<Qb&&rb<Qb||W>Rb&&rb>Rb)){var Aa;if(t){"3d"==M?(R=F-(r/2-this.depthCount+1)*(k+V)+V/2+Q*Z,S=O+H*Z,Aa=Z):(R=Math.floor(F-(r/2-Z)*(k+V)+V/2),S=O,Aa=
0);K=k;ya=E;Ea=R+k/2;ka=E;la=R+k/2;R+K>q+Aa*Q&&(K=q-R+Aa*Q);R<Aa*Q&&(K+=R,R=Aa*Q);ba=E-O;var ec=S;S=d.fitToBounds(S,0,n);ba+=ec-S;ba=d.fitToBounds(ba,-S,n-S+H*Z);v.labelIsNegative=0>ba?!0:!1;0===ba&&1/W===1/-0&&(v.labelIsNegative=!0);isNaN(G.percentWidthValue)||(K=this.height*G.percentWidthValue/100,R=ja-K/2,Ea=R+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);R<q&&0<K&&(va=new d.Cuboid(g,ba,K,H-a.d3x,Q-a.d3y,Na,Wa,da,Ca,X,ga,w,t,ea,gb,pb,aa),v.columnWidth=Math.abs(ba),v.columnHeight=Math.abs(K))}else{"3d"==
M?(S=E-(r/2-this.depthCount+1)*(k+V)+V/2+H*Z,R=N+Q*Z,Aa=Z):(S=E-(r/2-Z)*(k+V)+V/2,R=N,Aa=0);K=k;ya=S+k/2;Ea=F;ka=S+k/2;la=F;S+K>n+Aa*H&&(K=n-S+Aa*H);S<Aa*H&&(K+=S-Aa*H,S=Aa*H);ba=F-N;v.labelIsNegative=0<ba?!0:!1;0===ba&&1/W!==1/Math.abs(W)&&(v.labelIsNegative=!0);var fc=R;R=d.fitToBounds(R,this.dy,q);ba+=fc-R;ba=d.fitToBounds(ba,-R+Q*Aa,q-R);isNaN(G.percentWidthValue)||(K=this.width*G.percentWidthValue/100,S=ja-K/2,ya=S+K/2);K=d.roundTo(K,2);ba=d.roundTo(ba,2);S<n+Z*H&&0<K&&(this.showOnAxis&&(R-=
Q/2),va=new d.Cuboid(g,K,ba,H-a.d3x,Q-a.d3y,Na,Wa,da,Ca,this.lineAlpha,ga,w,t,ea,gb,pb,aa),v.columnHeight=Math.abs(ba),v.columnWidth=Math.abs(K))}}if(va){za=va.set;d.setCN(a,va.set,"graph-"+this.type);d.setCN(a,va.set,"graph-"+this.id);v.className&&d.setCN(a,va.set,v.className,!0);v.columnGraphics=za;S=d.roundTo(S,2);R=d.roundTo(R,2);za.translate(S,R);(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer");if(!J){"none"==M&&(I=t?(this.end+1-L)*C-c:C*L+c);"3d"==M&&(t?(I=(this.end+1-L)*C-c-1E3*
this.depthCount,ya+=H*Z,ka+=H*Z,v.y+=H*Z):(I=(C-c)*(L+1)+1E3*this.depthCount,Ea+=Q*Z,la+=Q*Z,v.y+=Q*Z));if("regular"==M||"100%"==M)I=t?0<Ia.value?(this.end+1-L)*C+c:(this.end+1-L)*C-c:0<Ia.value?C*L+c:C*L-c;this.columnsArray.push({column:va,depth:I});v.x=t?R+K/2:S+K/2;this.ownColumns.push(va);this.animateColumns(va,L,E,O,F,N);this.addListeners(za,v);void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)}this.columnsSet.push(za)}}break;case "candlestick":if(!isNaN(ua)&&!isNaN(W)){var Ya,hb;Ca=
Ha;void 0!=v.lineColor&&(Ca=v.lineColor);ya=E;la=Ea=F;ka=E;if(t){"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);E=d.fitToBounds(E,0,pa);O=d.fitToBounds(O,0,pa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;R=F-k/2;S=O;K=k;R+K>q&&(K=q-R);0>R&&(K+=R,R=0);if(R<q&&0<K){var Eb,Fb;W>ua?(Eb=[E,sa],Fb=[O,qa]):(Eb=[O,sa],Fb=[E,qa]);!isNaN(sa)&&!isNaN(qa)&&F<q&&0<F&&(Ya=d.line(g,Eb,[F,F],Ca,X,da),hb=d.line(g,Fb,
[F,F],Ca,X,da));ba=E-O;va=new d.Cuboid(g,ba,K,H,Q,Na,bb,da,Ca,X,ga,w,t,ea,gb,pb,aa)}}else{"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);F=d.fitToBounds(F,0,Fa);N=d.fitToBounds(N,0,Fa);ra=d.fitToBounds(ra,0,Fa);ta=d.fitToBounds(ta,0,Fa);if(0===F&&0===N&&0===ra&&0===ta)continue;if(F==Fa&&N==Fa&&ra==Fa&&ta==Fa)continue;S=E-k/2;R=N+da/2;K=k;S+K>n&&(K=n-S);0>S&&(K+=S,S=0);ba=F-N;if(S<n&&0<K){Bb&&W>=ua&&(Wa=0);var va=new d.Cuboid(g,K,ba,H,Q,Na,Wa,da,Ca,X,ga,w,t,ea,gb,pb,aa),Gb,Hb;W>ua?(Gb=[F,ta],
Hb=[N,ra]):(Gb=[N,ta],Hb=[F,ra]);!isNaN(ta)&&!isNaN(ra)&&E<n&&0<E&&(Ya=d.line(g,[E,E],Gb,Ca,X,da),hb=d.line(g,[E,E],Hb,Ca,X,da),d.setCN(a,Ya,this.bcn+"line-high"),v.className&&d.setCN(a,Ya,v.className,!0),d.setCN(a,hb,this.bcn+"line-low"),v.className&&d.setCN(a,hb,v.className,!0))}}va&&(za=va.set,v.columnGraphics=za,fa.push(za),za.translate(S,R-da/2),(v.url||this.showHandOnHover)&&za.setAttr("cursor","pointer"),Ya&&(fa.push(Ya),fa.push(hb)),J||(v.x=t?R+K/2:S+K/2,this.animateColumns(va,L,E,O,F,N),
this.addListeners(za,v),void 0!==this.tabIndex&&za.setAttr("tabindex",this.tabIndex)))}break;case "ohlc":if(!(isNaN(ua)||isNaN(zb)||isNaN(Ab)||isNaN(W))){var Sb=g.set();fa.push(Sb);W<ua&&(v.isNegative=!0,void 0!=Ja&&(Ha=Ja));void 0!=v.lineColor&&(Ha=v.lineColor);var Za,$a,ab;if(t){la=F;ka=E;"open"==l&&(ka=O);"high"==l&&(ka=sa);"low"==l&&(ka=qa);qa=d.fitToBounds(qa,0,pa);sa=d.fitToBounds(sa,0,pa);if(0===E&&0===O&&0===qa&&0===sa)continue;if(E==pa&&O==pa&&qa==pa&&sa==pa)continue;var Ib=F-k/2,Ib=d.fitToBounds(Ib,
0,q),Tb=d.fitToBounds(F,0,q),Jb=F+k/2,Jb=d.fitToBounds(Jb,0,q);0<=O&&O<=pa&&($a=d.line(g,[O,O],[Ib,Tb],Ha,X,da,ea));0<F&&F<q&&(Za=d.line(g,[qa,sa],[F,F],Ha,X,da,ea));0<=E&&E<=pa&&(ab=d.line(g,[E,E],[Tb,Jb],Ha,X,da,ea))}else{la=F;"open"==l&&(la=N);"high"==l&&(la=ta);"low"==l&&(la=ra);var ka=E,ra=d.fitToBounds(ra,0,Fa),ta=d.fitToBounds(ta,0,Fa),Kb=E-k/2,Kb=d.fitToBounds(Kb,0,n),Ub=d.fitToBounds(E,0,n),Lb=E+k/2,Lb=d.fitToBounds(Lb,0,n);0<=N&&N<=Fa&&($a=d.line(g,[Kb,Ub],[N,N],Ha,X,da,ea));0<E&&E<n&&(Za=
d.line(g,[E,E],[ra,ta],Ha,X,da,ea));0<=F&&F<=Fa&&(ab=d.line(g,[Ub,Lb],[F,F],Ha,X,da,ea))}fa.push($a);fa.push(Za);fa.push(ab);d.setCN(a,$a,this.bcn+"stroke-open");d.setCN(a,ab,this.bcn+"stroke-close");d.setCN(a,Za,this.bcn+"stroke");v.className&&d.setCN(a,Sb,v.className,!0);Za&&this.addListeners(Za,v);ab&&this.addListeners(ab,v);$a&&this.addListeners($a,v);ya=E;Ea=F}}if(!J&&!isNaN(W)){var Vb=this.hideBulletsCount;if(this.end-this.start<=Vb||0===Vb){var Wb=this.createBullet(v,ka,la,L),Xb=this.labelText;
if(Xb&&!isNaN(ya)&&!isNaN(ya)){var gc=this.createLabel(v,Xb),Yb=0;Wb&&(Yb=Wb.size);this.positionLabel(v,ya,Ea,gc,Yb)}if("regular"==M||"100%"==M){var Zb=f.totalText;if(Zb){var Oa=this.createLabel(v,Zb,f.totalTextColor);d.setCN(a,Oa,this.bcn+"label-total");this.allBullets.push(Oa);if(Oa){var $b=Oa.getBBox(),ac=$b.width,bc=$b.height,ib,jb,sb=f.totalTextOffset,cc=f.totals[L];cc&&cc.remove();var kb=0;"column"!=h&&(kb=this.bulletSize);t?(jb=Ea,ib=0>W?E-ac/2-2-kb-sb:E+ac/2+3+kb+sb):(ib=ya,jb=0>W?F+bc/2+
kb+sb:F-bc/2-3-kb-sb);Oa.translate(ib,jb);f.totals[L]=Oa;t?(0>jb||jb>q)&&Oa.remove():(0>ib||ib>n)&&Oa.remove()}}}}}}}this.lastDataItem=v;if("line"==h||"step"==h||"smoothedLine"==h)"smoothedLine"==h?this.drawSmoothedGraph(x,u,T,U):this.drawLineGraph(x,u,T,U),J||this.launchAnimation();this.bulletsHidden&&this.hideBullets();this.customBulletsHidden&&this.hideCustomBullets()},animateColumns:function(a,b){var c=this,e=c.chart.startDuration;0<e&&!c.animationPlayed&&(c.seqAn?(a.set.hide(),c.animationArray.push(a),
e=setTimeout(function(){c.animate.call(c)},e/(c.end-c.start+1)*(b-c.start)*1E3),c.timeOuts.push(e)):c.animate(a),c.chart.animatable.push(a))},createLabel:function(a,b,c){var e=this.chart,g=a.labelColor;g||(g=this.color);g||(g=e.color);c&&(g=c);c=this.fontSize;void 0===c&&(this.fontSize=c=e.fontSize);var f=this.labelFunction;b=e.formatString(b,a);b=d.cleanFromEmpty(b);f&&(b=f(a,b));if(void 0!==b&&""!==b)return a=d.text(this.container,b,g,e.fontFamily,c),a.node.style.pointerEvents="none",d.setCN(e,
a,this.bcn+"label"),this.bulletSet.push(a),a},positiveClip:function(a){a.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,c,e){var g=this;if(1<a.length){var f=g.noRounding,h=g.set,k=g.chart,l=g.container,m=l.set(),n=l.set();h.push(n);h.push(m);var q=g.lineAlpha,p=g.lineThickness,h=g.fillAlphas,t=g.lineColorR,r=g.negativeLineAlpha;isNaN(r)&&(r=q);var w=g.lineColorSwitched;w&&(t=w);var w=g.fillColorsR,
z=g.fillColorsSwitched;z&&(w=z);var x=g.dashLength;(z=g.dashLengthSwitched)&&(x=z);var z=g.negativeLineColor,u=g.negativeFillColors,A=g.negativeFillAlphas,y=g.baseCoord;0!==g.negativeBase&&(y=g.valueAxis.getCoordinate(g.negativeBase,f),y>g.height&&(y=g.height),0>y&&(y=0));q=d.line(l,a,b,t,q,p,x,!1,!1,f);q.node.setAttribute("stroke-linejoin","round");d.setCN(k,q,g.bcn+"stroke");m.push(q);m.click(function(a){g.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){g.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){g.handleGraphEvent(a,
"rollOutGraph")}).touchmove(function(a){g.chart.handleMouseMove(a)}).touchend(function(a){g.chart.handleTouchEnd(a)});void 0===z||g.useNegativeColorIfDown||(p=d.line(l,a,b,z,r,p,x,!1,!1,f),p.node.setAttribute("stroke-linejoin","round"),d.setCN(k,p,g.bcn+"stroke"),d.setCN(k,p,g.bcn+"stroke-negative"),n.push(p));if(0<h||0<A)if(p=a.join(";").split(";"),r=b.join(";").split(";"),q=k.type,"serial"==q||"radar"==q?0<c.length?(c.reverse(),e.reverse(),p=a.concat(c),r=b.concat(e)):"radar"==q?(r.push(0),p.push(0)):
g.rotate?(r.push(r[r.length-1]),p.push(y),r.push(r[0]),p.push(y),r.push(r[0]),p.push(p[0])):(p.push(p[p.length-1]),r.push(y),p.push(p[0]),r.push(y),p.push(a[0]),r.push(r[0])):"xy"==q&&(b=g.fillToAxis)&&(d.isString(b)&&(b=k.getValueAxisById(b)),"H"==b.orientation?(y="top"==b.position?0:b.height,p.push(p[p.length-1]),r.push(y),p.push(p[0]),r.push(y),p.push(a[0]),r.push(r[0])):(y="left"==b.position?0:b.width,r.push(r[r.length-1]),p.push(y),r.push(r[0]),p.push(y),r.push(r[0]),p.push(p[0]))),a=g.gradientRotation,
0<h&&(b=d.polygon(l,p,r,w,h,1,"#000",0,a,f),b.pattern(g.pattern,NaN,k.path),d.setCN(k,b,g.bcn+"fill"),m.push(b)),u||void 0!==z)isNaN(A)&&(A=h),u||(u=z),f=d.polygon(l,p,r,u,A,1,"#000",0,a,f),d.setCN(k,f,g.bcn+"fill"),d.setCN(k,f,g.bcn+"fill-negative"),f.pattern(g.pattern,NaN,k.path),n.push(f),n.click(function(a){g.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){g.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){g.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){g.chart.handleMouseMove(a)}).touchend(function(a){g.chart.handleTouchEnd(a)});
g.applyMask(n,m)}},applyMask:function(a,b){var c=a.length();"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(b),0<c&&this.negativeClip(a))},drawSmoothedGraph:function(a,b,c,e){if(1<a.length){var g=this.set,f=this.chart,h=this.container,k=h.set(),l=h.set();g.push(l);g.push(k);var m=this.lineAlpha,n=this.lineThickness,g=this.dashLength,q=this.fillAlphas,p=this.lineColorR,t=this.fillColorsR,r=this.negativeLineColor,w=this.negativeFillColors,z=this.negativeFillAlphas,x=this.baseCoord,u=this.lineColorSwitched;
u&&(p=u);(u=this.fillColorsSwitched)&&(t=u);var A=this.negativeLineAlpha;isNaN(A)&&(A=m);u=this.getGradRotation();m=new d.Bezier(h,a,b,p,m,n,t,0,g,void 0,u);d.setCN(f,m,this.bcn+"stroke");k.push(m.path);void 0!==r&&(n=new d.Bezier(h,a,b,r,A,n,t,0,g,void 0,u),d.setCN(f,n,this.bcn+"stroke"),d.setCN(f,n,this.bcn+"stroke-negative"),l.push(n.path));0<q&&(n=a.join(";").split(";"),m=b.join(";").split(";"),p="",0<c.length?(c.push("M"),e.push("M"),c.reverse(),e.reverse(),n=a.concat(c),m=b.concat(e)):(this.rotate?
(p+=" L"+x+","+b[b.length-1],p+=" L"+x+","+b[0]):(p+=" L"+a[a.length-1]+","+x,p+=" L"+a[0]+","+x),p+=" L"+a[0]+","+b[0]),a=new d.Bezier(h,n,m,NaN,0,0,t,q,g,p,u),d.setCN(f,a,this.bcn+"fill"),a.path.pattern(this.pattern,NaN,f.path),k.push(a.path),w||void 0!==r)&&(z||(z=q),w||(w=r),h=new d.Bezier(h,n,m,NaN,0,0,w,z,g,p,u),h.path.pattern(this.pattern,NaN,f.path),d.setCN(f,h,this.bcn+"fill"),d.setCN(f,h,this.bcn+"fill-negative"),l.push(h.path));this.applyMask(l,k)}},launchAnimation:function(){var a=this,
b=a.chart.startDuration;if(0<b&&!a.animationPlayed){var c=a.set,e=a.bulletSet;d.VML||(c.attr({opacity:a.startAlpha}),e.attr({opacity:a.startAlpha}));c.hide();e.hide();a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},a.index*b*1E3),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,c=this.bulletSet,e=this.x,d=this.y;b.show();c.show();var f=a.startDuration,h=a.startEffect;b&&(this.rotate?(b.translate(-1E3,d),c.translate(-1E3,d)):(b.translate(e,-1E3),
c.translate(e,-1E3)),b.animate({opacity:1,translate:e+","+d},f,h),c.animate({opacity:1,translate:e+","+d},f,h),a.animatable.push(b))},animate:function(a){var b=this.chart,c=this.animationArray;!a&&0<c.length&&(a=c[0],c.shift());c=d[d.getEffect(b.startEffect)];b=b.startDuration;a&&(this.rotate?a.animateWidth(b,c):a.animateHeight(b,c),a.set.show())},legendKeyColor:function(){var a=this.legendColor,b=this.lineAlpha;void 0===a&&(a=this.lineColorR,0===b&&(b=this.fillColorsR)&&(a="object"==typeof b?b[0]:
b));return a},legendKeyAlpha:function(){var a=this.legendAlpha;void 0===a&&(a=this.lineAlpha,this.fillAlphas>a&&(a=this.fillAlphas),0===a&&(a=this.bulletAlpha),0===a&&(a=1));return a},createBullet:function(a,b,c){if(!isNaN(b)&&!isNaN(c)&&("none"!=this.bullet||this.customBullet||a.bullet||a.customBullet)){var e=this.chart,g=this.container,f=this.bulletOffset,h=this.bulletSize;isNaN(a.bulletSize)||(h=a.bulletSize);var k=a.values.value,l=this.maxValue,m=this.minValue,n=this.maxBulletSize,q=this.minBulletSize;
isNaN(l)||(isNaN(k)||(h=(k-m)/(l-m)*(n-q)+q),m==l&&(h=n));l=h;this.bulletAxis&&(h=a.values.error,isNaN(h)||(k=h),h=this.bulletAxis.stepWidth*k);h<this.minBulletSize&&(h=this.minBulletSize);this.rotate?b=a.isNegative?b-f:b+f:c=a.isNegative?c+f:c-f;q=this.bulletColorR;a.lineColor&&void 0===this.bulletColor&&(this.bulletColorSwitched=a.lineColor);this.bulletColorSwitched&&(q=this.bulletColorSwitched);a.isNegative&&void 0!==this.bulletColorNegative&&(q=this.bulletColorNegative);void 0!==a.color&&(q=a.color);
var p;"xy"==e.type&&this.valueField&&(p=this.pattern,a.pattern&&(p=a.pattern));f=this.bullet;a.bullet&&(f=a.bullet);var k=this.bulletBorderThickness,m=this.bulletBorderColorR,n=this.bulletBorderAlpha,t=this.bulletAlpha;m||(m=q);this.useLineColorForBulletBorder&&(m=this.lineColorR,a.isNegative&&this.negativeLineColor&&(m=this.negativeLineColor),this.lineColorSwitched&&(m=this.lineColorSwitched));var r=a.alpha;isNaN(r)||(t=r);p=d.bullet(g,f,h,q,t,k,m,n,l,0,p,e.path);l=this.customBullet;a.customBullet&&
(l=a.customBullet);l&&(p&&p.remove(),"function"==typeof l?(l=new l,l.chart=e,a.bulletConfig&&(l.availableSpace=c,l.graph=this,l.graphDataItem=a,l.bulletY=c,a.bulletConfig.minCoord=this.minCoord-c,l.bulletConfig=a.bulletConfig),l.write(g),p&&l.showBullet&&l.set.push(p),a.customBulletGraphics=l.cset,p=l.set):(p=g.set(),l=g.image(l,0,0,h,h),p.push(l),this.centerCustomBullets&&l.translate(-h/2,-h/2)));if(p){(a.url||this.showHandOnHover)&&p.setAttr("cursor","pointer");if("serial"==e.type||"gantt"==e.type)if(-.5>
b||b>this.width||c<-h/2||c>this.height)p.remove(),p=null;p&&(this.bulletSet.push(p),p.translate(b,c),this.addListeners(p,a),this.allBullets.push(p));a.bx=b;a.by=c;d.setCN(e,p,this.bcn+"bullet");a.className&&d.setCN(e,p,a.className,!0)}if(p){p.size=h||0;if(e=this.bulletHitAreaSize)g=d.circle(g,e,"#FFFFFF",.001,0),g.translate(b,c),a.hitBullet=g,this.bulletSet.push(g),this.addListeners(g,a);a.bulletGraphics=p;void 0!==this.tabIndex&&p.setAttr("tabindex",this.tabIndex)}else p={size:0};p.graphDataItem=
a;return p}},showBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!1;for(b=0;b<a.length;b++)a[b].show()},hideBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!0;for(b=0;b<a.length;b++)a[b].hide()},showCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!1;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.show()}},hideCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!0;for(b=0;b<
a.length;b++){var c=a[b].graphDataItem;c&&c.customBulletGraphics&&c.customBulletGraphics.hide()}},addListeners:function(a,b){var c=this;a.mouseover(function(a){c.handleRollOver(b,a)}).mouseout(function(a){c.handleRollOut(b,a)}).touchend(function(a){c.handleRollOver(b,a);c.chart.panEventsEnabled&&c.handleClick(b,a)}).touchstart(function(a){c.handleRollOver(b,a)}).click(function(a){c.handleClick(b,a)}).dblclick(function(a){c.handleDoubleClick(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)});
var e=c.chart;if(e.accessible&&c.accessibleLabel){var d=e.formatString(c.accessibleLabel,b);e.makeAccessible(a,d)}},handleRollOver:function(a,b){this.handleGraphEvent(b,"rollOverGraph");if(a){var c=this.chart;a.bulletConfig&&(c.isRolledOverBullet=!0);var e={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);clearTimeout(c.hoverInt);(c=c.chartCursor)&&c.valueBalloonsEnabled||this.showGraphBalloon(a,"V",!0)}},handleRollOut:function(a,
b){var c=this.chart;if(a){var e={type:"rollOutGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);c.isRolledOverBullet=!1}this.handleGraphEvent(b,"rollOutGraph");(c=c.chartCursor)&&c.valueBalloonsEnabled||this.hideBalloon()},handleClick:function(a,b){if(!this.chart.checkTouchMoved()&&this.chart.checkTouchDuration(b)){if(a){var c={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c);
d.getURL(a.url,this.urlTarget)}this.handleGraphEvent(b,"clickGraph")}},handleGraphEvent:function(a,b){var c={type:b,graph:this,target:this,chart:this.chart,event:a};this.fire(c);this.chart.fire(c)},handleRightClick:function(a,b){if(a){var c={type:"rightClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},handleDoubleClick:function(a,b){if(a){var c={type:"doubleClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,
event:b};this.fire(c);this.chart.fire(c)}},zoom:function(a,b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns){var c;for(c=0;c<b.length;c++){var e=b[c].set;e&&e.setAttr("opacity",a)}}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){d.remove(this.set);d.remove(this.bulletSet);var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},createBalloon:function(){var a=this.chart;
this.balloon?this.balloon.destroy&&this.balloon.destroy():this.balloon={};var b=this.balloon;d.extend(b,a.balloon,!0);b.chart=a;b.mainSet=a.plotBalloonsSet;b.className=this.id},hideBalloon:function(){var a=this,b=a.chart;b.chartCursor?b.chartCursor.valueBalloonsEnabled||b.hideBalloon():b.hideBalloon();clearTimeout(a.hoverInt);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},b.hideBalloonTime)},hideBalloonReal:function(){this.balloon&&this.balloon.hide();this.fixBulletSize()},fixBulletSize:function(){if(d.isModern){var a=
this.resizedDItem;if(a){var b=a.bulletGraphics;if(b&&!b.doNotScale){b.translate(a.bx,a.by,1);var c=this.bulletAlpha;isNaN(a.alpha)||(c=a.alpha);b.setAttr("fill-opacity",c);b.setAttr("stroke-opacity",this.bulletBorderAlpha)}}this.resizedDItem=null}},showGraphBalloon:function(a,b,c,e,g){if(a){var f=this.chart,h=this.balloon,k=0,l=0,m=f.chartCursor,n=!0;m?m.valueBalloonsEnabled||(h=f.balloon,k=this.x,l=this.y,n=!1):(h=f.balloon,k=this.x,l=this.y,n=!1);clearTimeout(this.hoverInt);if(f.chartCursor&&(this.currentDataItem=
a,"serial"==f.type&&f.isRolledOverBullet&&f.chartCursor.valueBalloonsEnabled)){this.hideBalloonReal();return}this.resizeBullet(a,e,g);if(h&&h.enabled&&this.showBalloon&&!this.hidden){var m=f.formatString(this.balloonText,a,!0),q=this.balloonFunction;q&&(m=q(a,a.graph));m&&(m=d.cleanFromEmpty(m));m&&""!==m?(e=f.getBalloonColor(this,a),h.drop||(h.pointerOrientation=b),b=a.x,g=a.y,f.rotate&&(b=a.y,g=a.x),b+=k,g+=l,isNaN(b)||isNaN(g)?this.hideBalloonReal():(a=this.width,q=this.height,n&&h.setBounds(k,
l,a+k,q+l),h.changeColor(e),h.setPosition(b,g),h.fixPrevious(),h.fixedPosition&&(c=!1),!c&&"radar"!=f.type&&(b<k-.5||b>a+k||g<l-.5||g>q+l)?(h.showBalloon(m),h.hide(0)):(h.followCursor(c),h.showBalloon(m)))):(this.hideBalloonReal(),h.hide(),this.resizeBullet(a,e,g))}else this.hideBalloonReal()}},resizeBullet:function(a,b,c){this.fixBulletSize();if(a&&d.isModern&&(1!=b||!isNaN(c))){var e=a.bulletGraphics;e&&!e.doNotScale&&(e.translate(a.bx,a.by,b),isNaN(c)||(e.setAttr("fill-opacity",c),e.setAttr("stroke-opacity",
c)),this.resizedDItem=a)}}})})();(function(){var d=window.AmCharts;d.ChartCursor=d.Class({construct:function(a){this.cname="ChartCursor";this.createEvents("changed","zoomed","onHideCursor","onShowCursor","draw","selected","moved","panning","zoomStarted");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonText="[[category]]";
this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition="middle";this.bulletsEnabled=this.skipZoomDispatch=!1;this.bulletSize=8;this.selectWithoutZooming=this.oneBalloonOnly=!1;this.graphBulletSize=1.7;this.animationDuration=.3;this.zooming=!1;this.adjustment=0;this.avoidBalloonOverlapping=!0;this.leaveCursor=!1;this.leaveAfterTouch=!0;this.valueZoomable=!1;this.balloonPointerOrientation="horizontal";this.hLineEnabled=this.vLineEnabled=!0;this.vZoomEnabled=
this.hZoomEnabled=!1;d.applyTheme(this,a,this.cname)},draw:function(){this.destroy();var a=this.chart;a.panRequired=!0;var b=a.container;this.rotate=a.rotate;this.container=b;this.prevLineHeight=this.prevLineWidth=NaN;b=b.set();b.translate(this.x,this.y);this.set=b;a.cursorSet.push(b);this.createElements();d.isString(this.limitToGraph)&&(this.limitToGraph=d.getObjById(a.graphs,this.limitToGraph),this.fullWidth=!1,this.cursorPosition="middle");this.pointer=this.balloonPointerOrientation.substr(0,1).toUpperCase();
this.isHidden=!1;this.hideLines();this.valueLineAxis||(this.valueLineAxis=a.valueAxes[0])},createElements:function(){var a=this,b=a.chart,c=b.dx,e=b.dy,g=a.width,f=a.height,h,k,l=a.cursorAlpha,m=a.valueLineAlpha;a.rotate?(h=m,k=l):(k=m,h=l);"xy"==b.type&&(k=l,void 0!==m&&(k=m),h=l);a.vvLine=d.line(a.container,[c,0,0],[e,0,f],a.cursorColor,h,1);d.setCN(b,a.vvLine,"cursor-line");d.setCN(b,a.vvLine,"cursor-line-vertical");a.hhLine=d.line(a.container,[0,g,g+c],[0,0,e],a.cursorColor,k,1);d.setCN(b,a.hhLine,
"cursor-line");d.setCN(b,a.hhLine,"cursor-line-horizontal");a.vLine=a.rotate?a.vvLine:a.hhLine;a.set.push(a.vvLine);a.set.push(a.hhLine);a.set.node.style.pointerEvents="none";a.fullLines=a.container.set();b=b.cursorLineSet;b.push(a.fullLines);b.translate(a.x,a.y);b.clipRect(-1,-1,g+2,f+2);void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b)}).focus(function(b){a.showCursor()}).blur(function(b){a.hideCursor()}));a.set.clipRect(0,0,g,f)},handleKeys:function(a){var b=
this.prevIndex,c=this.chart;if(c){var e=c.chartData;e&&(isNaN(b)&&(b=e.length-1),37!=a.keyCode&&40!=a.keyCode||b--,39!=a.keyCode&&38!=a.keyCode||b++,b=d.fitToBounds(b,c.startIndex,c.endIndex),(a=this.chart.chartData[b])&&this.setPosition(a.x.categoryAxis),this.prevIndex=b)}},update:function(){var a=this.chart;if(a){var b=a.mouseX-this.x,c=a.mouseY-this.y;this.mouseX=b;this.mouseY=c;this.mouse2X=a.mouse2X-this.x;this.mouse2Y=a.mouse2Y-this.y;var e;if(a.chartData&&0<a.chartData.length){this.mouseIsOver()?
(this.hideGraphBalloons=!1,this.rolledOver=e=!0,this.updateDrawing(),this.vvLine&&isNaN(this.fx)&&(a.rotate||!this.limitToGraph)&&this.vvLine.translate(b,0),!this.hhLine||!isNaN(this.fy)||a.rotate&&this.limitToGraph||this.hhLine.translate(0,c),isNaN(this.mouse2X)?this.dispatchMovedEvent(b,c):e=!1):this.forceShow||this.hideCursor();if(this.zooming){if(!isNaN(this.mouse2X)){isNaN(this.mouse2X0)||this.dispatchPanEvent();return}if(this.pan){this.dispatchPanEvent();return}(this.hZoomEnabled||this.vZoomEnabled)&&
this.zooming&&this.updateSelection()}e&&this.showCursor()}}},updateDrawing:function(){this.drawing&&this.chart.setMouseCursor("crosshair");if(this.drawingNow&&(d.remove(this.drawingLine),1<Math.abs(this.drawStartX-this.mouseX)||1<Math.abs(this.drawStartY-this.mouseY))){var a=this.chart,b=a.marginTop,a=a.marginLeft;this.drawingLine=d.line(this.container,[this.drawStartX+a,this.mouseX+a],[this.drawStartY+b,this.mouseY+b],this.cursorColor,1,1)}},fixWidth:function(a){if(this.fullWidth&&this.prevLineWidth!=
a){var b=this.vvLine,c=0;b&&(b.remove(),c=b.x);b=this.container.set();b.translate(c,0);c=d.rect(this.container,a,this.height,this.cursorColor,this.cursorAlpha,this.cursorAlpha,this.cursorColor);d.setCN(this.chart,c,"cursor-fill");c.translate(-a/2-1,0);b.push(c);this.vvLine=b;this.fullLines.push(b);this.prevLineWidth=a}},fixHeight:function(a){if(this.fullWidth&&this.prevLineHeight!=a){var b=this.hhLine,c=0;b&&(b.remove(),c=b.y);b=this.container.set();b.translate(0,c);c=d.rect(this.container,this.width,
a,this.cursorColor,this.cursorAlpha);c.translate(0,-a/2);b.push(c);this.fullLines.push(b);this.hhLine=b;this.prevLineHeight=a}},fixVLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineX)){var c=0,e=this.mouseX;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate||(c="bottom"==d.position?this.height:-this.height),e=a)}this.vvLine.translate(e,c)}else this.prevLineX!=a&&this.vvLine.translate(this.prevLineX,this.prevLineY);this.fx=a;this.prevLineX!=a&&(c=this.animationDuration,
this.zooming&&(c=0),this.vvLine.stop(),this.vvLine.animate({translate:a+","+b},c,"easeOutSine"),this.prevLineX=a,this.prevLineY=b)}},fixHLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineY)){var c=0,e=this.mouseY;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate&&(c="right"==d.position?this.width:-this.width),e=a)}this.hhLine.translate(c,e)}else this.prevLineY!=a&&this.hhLine.translate(this.prevLineX,this.prevLineY);this.fy=a;this.prevLineY!=a&&(c=this.animationDuration,
this.zooming&&(c=0),this.hhLine.stop(),this.hhLine.animate({translate:b+","+a},c,"easeOutSine"),this.prevLineY=a,this.prevLineX=b)}},hideCursor:function(a){this.forceShow=!1;this.chart.wasTouched&&this.leaveAfterTouch||this.isHidden||this.leaveCursor||(this.hideCursorReal(),a?this.chart.handleCursorHide():this.fire({target:this,chart:this.chart,type:"onHideCursor"}),this.chart.setMouseCursor("auto"))},hideCursorReal:function(){this.hideLines();this.isHidden=!0;this.index=this.prevLineY=this.prevLineX=
this.mouseY0=this.mouseX0=this.fy=this.fx=NaN},hideLines:function(){this.vvLine&&this.vvLine.hide();this.hhLine&&this.hhLine.hide();this.fullLines&&this.fullLines.hide();this.isHidden=!0;this.chart.handleCursorHide()},showCursor:function(a){!this.drawing&&this.enabled&&(this.vLineEnabled&&this.vvLine&&this.vvLine.show(),this.hLineEnabled&&this.hhLine&&this.hhLine.show(),this.isHidden=!1,this.updateFullLine(),a||this.fire({target:this,chart:this.chart,type:"onShowCursor"}),this.pan&&this.chart.setMouseCursor("move"))},
updateFullLine:function(){this.zooming&&this.fullWidth&&this.selection&&(this.rotate?0<this.selection.height&&this.hhLine.hide():0<this.selection.width&&this.vvLine.hide())},updateSelection:function(){if(!this.pan&&this.enabled){var a=this.mouseX,b=this.mouseY;isNaN(this.fx)||(a=this.fx);isNaN(this.fy)||(b=this.fy);this.clearSelection();var c=this.mouseX0,e=this.mouseY0,g=this.width,f=this.height,a=d.fitToBounds(a,0,g),b=d.fitToBounds(b,0,f),h;a<c&&(h=a,a=c,c=h);b<e&&(h=b,b=e,e=h);this.hZoomEnabled?
g=a-c:c=0;this.vZoomEnabled?f=b-e:e=0;isNaN(this.mouse2X)&&0<Math.abs(g)&&0<Math.abs(f)&&(a=this.chart,b=d.rect(this.container,g,f,this.cursorColor,this.selectionAlpha),d.setCN(a,b,"cursor-selection"),b.width=g,b.height=f,b.translate(c,e),this.set.push(b),this.selection=b);this.updateFullLine()}},mouseIsOver:function(){var a=this.mouseX,b=this.mouseY;if(this.justReleased)return this.justReleased=!1,!0;if(this.mouseIsDown)return!0;if(!this.chart.mouseIsOver)return this.handleMouseOut(),!1;if(0<a&&
a<this.width&&0<b&&b<this.height)return!0;this.handleMouseOut()},fixPosition:function(){this.prevY=this.prevX=NaN},handleMouseDown:function(){this.update();if(this.mouseIsOver())if(this.mouseIsDown=!0,this.mouseX0=this.mouseX,this.mouseY0=this.mouseY,this.mouse2X0=this.mouse2X,this.mouse2Y0=this.mouse2Y,this.drawing)this.drawStartY=this.mouseY,this.drawStartX=this.mouseX,this.drawingNow=!0;else if(this.dispatchMovedEvent(this.mouseX,this.mouseY),!this.pan&&isNaN(this.mouse2X0)&&(isNaN(this.fx)||(this.mouseX0=
this.fx),isNaN(this.fy)||(this.mouseY0=this.fy)),this.hZoomEnabled||this.vZoomEnabled){this.zooming=!0;var a={chart:this.chart,target:this,type:"zoomStarted"};a.x=this.mouseX/this.width;a.y=this.mouseY/this.height;this.index0=a.index=this.index;this.timestamp0=this.timestamp;this.fire(a)}},registerInitialMouse:function(){},handleReleaseOutside:function(){this.mouseIsDown=!1;if(this.drawingNow){this.drawingNow=!1;d.remove(this.drawingLine);var a=this.drawStartX,b=this.drawStartY,c=this.mouseX,e=this.mouseY,
g=this.chart;(2<Math.abs(a-c)||2<Math.abs(b-e))&&this.fire({type:"draw",target:this,chart:g,initialX:a,initialY:b,finalX:c,finalY:e})}this.zooming&&(this.zooming=!1,this.selectWithoutZooming?this.dispatchZoomEvent("selected"):(this.hZoomEnabled||this.vZoomEnabled)&&this.dispatchZoomEvent("zoomed"),this.rolledOver&&this.dispatchMovedEvent(this.mouseX,this.mouseY));this.mouse2Y0=this.mouse2X0=this.mouseY0=this.mouseX0=NaN},dispatchZoomEvent:function(a){if(!this.pan){var b=this.selection;if(b&&3<Math.abs(b.width)&&
3<Math.abs(b.height)){var c=Math.min(this.index,this.index0),e=Math.max(this.index,this.index0),d=c,f=e,h=this.chart,k=h.chartData,l=h.categoryAxis;l&&l.parseDates&&!l.equalSpacing&&(d=k[c]?k[c].time:Math.min(this.timestamp0,this.timestamp),f=k[e]?h.getEndTime(k[e].time):Math.max(this.timestamp0,this.timestamp));var b={type:a,chart:this.chart,target:this,end:f,start:d,startIndex:c,endIndex:e,selectionHeight:b.height,selectionWidth:b.width,selectionY:b.y,selectionX:b.x},m;this.hZoomEnabled&&4<Math.abs(this.mouseX0-
this.mouseX)&&(b.startX=this.mouseX0/this.width,b.endX=this.mouseX/this.width,m=!0);this.vZoomEnabled&&4<Math.abs(this.mouseY0-this.mouseY)&&(b.startY=1-this.mouseY0/this.height,b.endY=1-this.mouseY/this.height,m=!0);m&&(this.prevY=this.prevX=NaN,this.fire(b),"selected"!=a&&this.clearSelection());this.hideCursor()}}},dispatchMovedEvent:function(a,b,c,e){a=Math.round(a);b=Math.round(b);if(!this.isHidden&&(a!=this.prevX||b!=this.prevY||"changed"==c)){c||(c="moved");var d=this.fx,f=this.fy;isNaN(d)&&
(d=a);isNaN(f)&&(f=b);var h=!1;this.zooming&&this.pan&&(h=!0);h={hidden:this.isHidden,type:c,chart:this.chart,target:this,x:a,y:b,finalX:d,finalY:f,zooming:this.zooming,panning:h,mostCloseGraph:this.mostCloseGraph,index:this.index,skip:e,hideBalloons:this.hideGraphBalloons};this.prevIndex=this.index;this.rotate?(h.position=b,h.finalPosition=f):(h.position=a,h.finalPosition=d);this.prevX=a;this.prevY=b;e?this.chart.handleCursorMove(h):(this.fire(h),"changed"==c&&this.chart.fire(h))}},dispatchPanEvent:function(){if(this.mouseIsDown){var a=
d.roundTo((this.mouseX-this.mouseX0)/this.width,3),b=d.roundTo((this.mouseY-this.mouseY0)/this.height,3),c=d.roundTo((this.mouse2X-this.mouse2X0)/this.width,3),e=d.roundTo((this.mouse2Y-this.mouse2Y0)/this.height,2),g=!1;0!==Math.abs(a)&&0!==Math.abs(b)&&(g=!0);if(this.prevDeltaX==a||this.prevDeltaY==b)g=!1;isNaN(c)||isNaN(e)||(0!==Math.abs(c)&&0!==Math.abs(e)&&(g=!0),this.prevDelta2X!=c&&this.prevDelta2Y!=e)||(g=!1);g&&(this.hideLines(),this.fire({type:"panning",chart:this.chart,target:this,deltaX:a,
deltaY:b,delta2X:c,delta2Y:e,index:this.index}),this.prevDeltaX=a,this.prevDeltaY=b,this.prevDelta2X=c,this.prevDelta2Y=e)}},clearSelection:function(){var a=this.selection;a&&(a.width=0,a.height=0,a.remove())},destroy:function(){this.clear();d.remove(this.selection);this.selection=null;clearTimeout(this.syncTO);d.remove(this.set)},clear:function(){},setTimestamp:function(a){this.timestamp=a},setIndex:function(a,b){a!=this.index&&(this.index=a,b||this.isHidden||this.dispatchMovedEvent(this.mouseX,
this.mouseY,"changed"))},handleMouseOut:function(){this.enabled&&this.rolledOver&&(this.leaveCursor||this.setIndex(void 0),this.forceShow=!1,this.hideCursor(),this.rolledOver=!1)},showCursorAt:function(a){var b=this.chart.categoryAxis;b&&this.setPosition(b.categoryToCoordinate(a),a)},setPosition:function(a,b){var c=this.chart,e=c.categoryAxis;if(e){var d,f;void 0===b&&(b=e.coordinateToValue(a));e.showBalloonAt(b,a);this.forceShow=!0;e.stickBalloonToCategory?c.rotate?this.fixHLine(a,0):this.fixVLine(a,
0):(this.showCursor(),c.rotate?this.hhLine.translate(0,a):this.vvLine.translate(a,0));c.rotate?d=a:f=a;c.rotate?(this.vvLine&&this.vvLine.hide(),this.hhLine&&this.hhLine.show()):(this.hhLine&&this.hhLine.hide(),this.vvLine&&this.vvLine.show());this.updateFullLine();this.isHidden=!1;this.dispatchMovedEvent(f,d,"moved",!0)}},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.drawing=a},syncWithCursor:function(a,b){clearTimeout(this.syncTO);a&&(a.isHidden?this.hideCursor(!0):this.syncWithCursorReal(a,
b))},isZooming:function(a){this.zooming=a},syncWithCursorReal:function(a,b){var c=a.vvLine,e=a.hhLine;this.index=a.index;this.forceShow=!0;this.zooming&&this.pan||this.showCursor(!0);this.hideGraphBalloons=b;this.justReleased=a.justReleased;this.zooming=a.zooming;this.index0=a.index0;this.mouseX0=a.mouseX0;this.mouseY0=a.mouseY0;this.mouse2X0=a.mouse2X0;this.mouse2Y0=a.mouse2Y0;this.timestamp0=a.timestamp0;this.prevDeltaX=a.prevDeltaX;this.prevDeltaY=a.prevDeltaY;this.prevDelta2X=a.prevDelta2X;this.prevDelta2Y=
a.prevDelta2Y;this.fx=a.fx;this.fy=a.fy;a.zooming&&this.updateSelection();var d=a.mouseX,f=a.mouseY;this.rotate?(d=NaN,this.vvLine&&this.vvLine.hide(),this.hhLine&&e&&(isNaN(a.fy)?this.hhLine.translate(0,a.mouseY):this.fixHLine(a.fy,0))):(f=NaN,this.hhLine&&this.hhLine.hide(),this.vvLine&&c&&(isNaN(a.fx)?this.vvLine.translate(a.mouseX,0):this.fixVLine(a.fx,0)));this.dispatchMovedEvent(d,f,"moved",!0)}})})();(function(){var d=window.AmCharts;d.SimpleChartScrollbar=d.Class({construct:function(a){this.createEvents("zoomed","zoomStarted","zoomEnded");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconHeight=this.dragIconWidth=35;this.dragIcon="dragIconRoundBig";
this.dragCursorHover="cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;";this.dragCursorDown="cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;";this.vResizeCursor="ns-resize";this.hResizeCursor="ew-resize";this.enabled=!0;this.percentStart=this.offset=0;this.percentEnd=1;d.applyTheme(this,a,"SimpleChartScrollbar")},getPercents:function(){var a=this.getDBox(),b=a.x,c=a.y,e=a.width,a=a.height;this.rotate?(b=1-c/this.height,c=1-(c+a)/this.height):(c=b/this.width,
b=(b+e)/this.width);this.percentStart=c;this.percentEnd=b},draw:function(){var a=this;a.destroy();if(a.enabled){var b=a.chart.container,c=a.rotate,e=a.chart;e.panRequired=!0;var g=b.set();a.set=g;c?d.setCN(e,g,"scrollbar-vertical"):d.setCN(e,g,"scrollbar-horizontal");e.scrollbarsSet.push(g);var f,h;c?(f=a.scrollbarHeight,h=e.plotAreaHeight):(h=a.scrollbarHeight,f=e.plotAreaWidth);a.width=f;if((a.height=h)&&f){var k=d.rect(b,f,h,a.backgroundColor,a.backgroundAlpha,1,a.backgroundColor,a.backgroundAlpha);
d.setCN(e,k,"scrollbar-bg");a.bg=k;g.push(k);k=d.rect(b,f,h,"#000",.005);g.push(k);a.invisibleBg=k;k.click(function(){a.handleBgClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()}).touchend(function(){a.handleBgClick()});k=d.rect(b,f,h,a.selectedBackgroundColor,a.selectedBackgroundAlpha);d.setCN(e,k,"scrollbar-bg-selected");a.selectedBG=k;g.push(k);f=d.rect(b,f,h,"#000",.005);a.dragger=f;g.push(f);f.mousedown(function(b){a.handleDragStart(b)}).mouseup(function(){a.handleDragStop()}).mouseover(function(){a.handleDraggerOver()}).mouseout(function(){a.handleMouseOut()}).touchstart(function(b){a.handleDragStart(b)}).touchend(function(){a.handleDragStop()});
h=e.pathToImages;var l,k=a.dragIcon.replace(/\.[a-z]*$/i,"");d.isAbsolute(k)&&(h="");c?(l=h+k+"H"+e.extension,h=a.dragIconWidth,c=a.dragIconHeight):(l=h+k+e.extension,c=a.dragIconWidth,h=a.dragIconHeight);k=b.image(l,0,0,c,h);d.setCN(e,k,"scrollbar-grip-left");l=b.image(l,0,0,c,h);d.setCN(e,l,"scrollbar-grip-right");var m=10,n=20;e.panEventsEnabled&&(m=25,n=a.scrollbarHeight);var q=d.rect(b,m,n,"#000",.005),p=d.rect(b,m,n,"#000",.005);p.translate(-(m-c)/2,-(n-h)/2);q.translate(-(m-c)/2,-(n-h)/2);
c=b.set([k,p]);b=b.set([l,q]);a.iconLeft=c;g.push(a.iconLeft);a.iconRight=b;g.push(b);a.updateGripCursor(!1);e.makeAccessible(c,a.accessibleLabel);e.makeAccessible(b,a.accessibleLabel);e.makeAccessible(f,a.accessibleLabel);c.setAttr("role","menuitem");b.setAttr("role","menuitem");f.setAttr("role","menuitem");void 0!==a.tabIndex&&(c.setAttr("tabindex",a.tabIndex),c.keyup(function(b){a.handleKeys(b,1,0)}));void 0!==a.tabIndex&&(f.setAttr("tabindex",a.tabIndex),f.keyup(function(b){a.handleKeys(b,1,1)}));
void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b,0,1)}));c.mousedown(function(){a.leftDragStart()}).mouseup(function(){a.leftDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.leftDragStart()}).touchend(function(){a.leftDragStop()});b.mousedown(function(){a.rightDragStart()}).mouseup(function(){a.rightDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.rightDragStart()}).touchend(function(){a.rightDragStop()});
d.ifArray(e.chartData)?g.show():g.hide();a.hideDragIcons();a.clipDragger(!1)}g.translate(a.x,a.y);g.node.style.msTouchAction="none";g.node.style.touchAction="none"}},handleKeys:function(a,b,c){this.getPercents();var e=this.percentStart,d=this.percentEnd;if(this.rotate)var f=d,d=e,e=f;if(37==a.keyCode||40==a.keyCode)e-=.02*b,d-=.02*c;if(39==a.keyCode||38==a.keyCode)e+=.02*b,d+=.02*c;this.rotate&&(a=d,d=e,e=a);isNaN(d)||isNaN(e)||this.percentZoom(e,d,!0)},updateScrollbarSize:function(a,b){if(!isNaN(a)&&
!isNaN(b)){a=Math.round(a);b=Math.round(b);var c=this.dragger,e,d,f,h,k;this.rotate?(e=0,d=a,f=this.width+1,h=b-a,c.setAttr("height",b-a),c.setAttr("y",d)):(e=a,d=0,f=b-a,h=this.height+1,k=b-a,c.setAttr("x",e),c.setAttr("width",k));this.clipAndUpdate(e,d,f,h)}},update:function(){var a,b=!1,c,e,d=this.x,f=this.y,h=this.dragger,k=this.getDBox();if(k){c=k.x+d;e=k.y+f;var l=k.width,k=k.height,m=this.rotate,n=this.chart,q=this.width,p=this.height,t=n.mouseX,n=n.mouseY;a=this.initialMouse;this.forceClip&&
this.clipDragger(!0);if(this.dragging){var r=this.initialCoord;if(m)a=r+(n-a),0>a&&(a=0),r=p-k,a>r&&(a=r),h.setAttr("y",a);else{a=r+(t-a);0>a&&(a=0);r=q-l;if(a>r||isNaN(a))a=r;h.setAttr("x",a)}this.clipDragger(!0)}if(this.resizingRight){if(m)if(a=n-e,!isNaN(this.maxHeight)&&a>this.maxHeight&&(a=this.maxHeight),a+e>p+f&&(a=p-e+f),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;h.setAttr("height",a)}else if(a=t-c,!isNaN(this.maxWidth)&&a>this.maxWidth&&(a=this.maxWidth),
a+c>q+d&&(a=q-c+d),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;h.setAttr("width",a)}this.clipDragger(!0)}if(this.resizingLeft){if(m)if(c=e,e=n,e<f&&(e=f),isNaN(e)&&(e=f),e>p+f&&(e=p+f),a=!0===b?c-e:k+c-e,!isNaN(this.maxHeight)&&a>this.maxHeight&&(a=this.maxHeight,e=c),0>a)this.resizingRight=!0,this.resizingLeft=!1,h.setAttr("y",c+k-f);else{if(0===a||isNaN(a))a=.1;h.setAttr("y",e-f);h.setAttr("height",a)}else if(e=t,e<d&&(e=d),isNaN(e)&&(e=d),e>q+d&&(e=q+d),a=!0===
b?c-e:l+c-e,!isNaN(this.maxWidth)&&a>this.maxWidth&&(a=this.maxWidth,e=c),0>a)this.resizingRight=!0,this.resizingLeft=!1,h.setAttr("x",c+l-d);else{if(0===a||isNaN(a))a=.1;h.setAttr("x",e-d);h.setAttr("width",a)}this.clipDragger(!0)}}},stopForceClip:function(){this.animating=this.forceClip=!1},clipDragger:function(a){var b=this.getDBox();if(b){var c=b.x,e=b.y,d=b.width,b=b.height,f=!1;if(this.rotate){if(c=0,d=this.width+1,this.clipY!=e||this.clipH!=b)f=!0}else if(e=0,b=this.height+1,this.clipX!=c||
this.clipW!=d)f=!0;f&&this.clipAndUpdate(c,e,d,b);a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent())}},maskGraphs:function(){},clipAndUpdate:function(a,b,c,e){this.clipX=a;this.clipY=b;this.clipW=c;this.clipH=e;this.selectedBG.setAttr("width",c);this.selectedBG.setAttr("height",e);this.selectedBG.translate(a,b);this.updateDragIconPositions();this.maskGraphs(a,b,c,e)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),
c=b.x,e=b.y,d=b.width,b=b.height;this.getPercents();this.rotate?(c=e,d=this.height/b):d=this.width/d;a={type:"zoomed",position:c,chart:a,target:this,multiplier:d,relativeStart:this.percentStart,relativeEnd:this.percentEnd};if(this.percentStart!=this.prevPercentStart||this.percentEnd!=this.prevPercentEnd||this.prevMultiplier!=d)this.fire(a),this.prevPercentStart=this.percentStart,this.prevPercentEnd=this.percentEnd,this.prevMultiplier=d}},updateDragIconPositions:function(){var a=this.getDBox(),b=a.x,
c=a.y,d=this.iconLeft,g=this.iconRight,f,h,k=this.scrollbarHeight;this.rotate?(f=this.dragIconWidth,h=this.dragIconHeight,d.translate((k-h)/2,c-f/2),g.translate((k-h)/2,c+a.height-f/2)):(f=this.dragIconHeight,h=this.dragIconWidth,d.translate(b-h/2,(k-f)/2),g.translate(b-h/2+a.width,(k-f)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){if(!this.resizingLeft&&!this.resizingRight&&!this.dragging){if(this.hideResizeGrips||!this.resizeEnabled)this.iconLeft.hide(),
this.iconRight.hide();this.removeCursors()}},removeCursors:function(){this.chart.setMouseCursor("auto")},fireZoomEvent:function(a){this.fire({type:a,chart:this.chart,target:this})},percentZoom:function(a,b,c){a=d.fitToBounds(a,0,b);b=d.fitToBounds(b,a,1);if(this.dragger&&this.enabled){this.dragger.stop();isNaN(a)&&(a=0);isNaN(b)&&(b=1);var e,g;this.rotate?(e=this.height,b=e-e*b,g=e-e*a):(e=this.width,g=e*b,b=e*a);this.updateScrollbarSize(b,g);this.clipDragger(!1);this.getPercents();c&&this.dispatchScrollbarEvent()}},
destroy:function(){this.clear();d.remove(this.set);d.remove(this.iconRight);d.remove(this.iconLeft)},clear:function(){},handleDragStart:function(){if(this.enabled){this.fireZoomEvent("zoomStarted");var a=this.chart;this.dragger.stop();this.removeCursors();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorDown);this.dragging=!0;var b=this.getDBox();this.rotate?(this.initialCoord=b.y,this.initialMouse=a.mouseY):(this.initialCoord=b.x,this.initialMouse=a.mouseX)}},handleDragStop:function(){this.updateOnReleaseOnly&&
(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent());this.dragging=!1;this.mouseIsOver&&this.removeCursors();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover);this.update();this.fireZoomEvent("zoomEnded")},handleDraggerOver:function(){this.handleMouseOver();d.isModern&&(this.dragger.node.style.cssText=this.dragCursorHover)},leftDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingLeft=!0;this.updateGripCursor(!0)},updateGripCursor:function(a){d.isModern&&
(a=this.rotate?a?this.vResizeCursorDown:this.vResizeCursorHover:a?this.hResizeCursorDown:this.hResizeCursorHover)&&(this.iconRight&&(this.iconRight.node.style.cssText=a),this.iconLeft&&(this.iconLeft.node.style.cssText=a))},leftDragStop:function(){this.resizingLeft&&(this.resizingLeft=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"));this.updateGripCursor(!1)},rightDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingRight=
!0;this.updateGripCursor(!0)},rightDragStop:function(){this.resizingRight&&(this.resizingRight=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"));this.updateGripCursor(!1)},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.vResizeCursor&&this.chart.setMouseCursor(this.vResizeCursor):this.hResizeCursor&&this.chart.setMouseCursor(this.hResizeCursor);this.handleMouseOver()},getDBox:function(){if(this.dragger)return this.dragger.getBBox()},
handleBgClick:function(){var a=this;if(!a.resizingRight&&!a.resizingLeft){a.zooming=!0;var b,c,e=a.scrollDuration,g=a.dragger;b=a.getDBox();var f=b.height,h=b.width;c=a.chart;var k=a.y,l=a.x,m=a.rotate;m?(b="y",c=c.mouseY-f/2-k,c=d.fitToBounds(c,0,a.height-f)):(b="x",c=c.mouseX-h/2-l,c=d.fitToBounds(c,0,a.width-h));a.updateOnReleaseOnly?(a.skipEvent=!1,g.setAttr(b,c),a.dispatchScrollbarEvent(),a.clipDragger()):(a.animating=!0,c=Math.round(c),m?g.animate({y:c},e,">"):g.animate({x:c},e,">"),a.forceClip=
!0,clearTimeout(a.forceTO),a.forceTO=setTimeout(function(){a.stopForceClip.call(a)},5E3*e))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent())},handleReleaseOutside:function(){if(this.set){if(this.resizingLeft||this.resizingRight||this.dragging)this.dragging=this.resizingRight=this.resizingLeft=!1,this.updateOnRelease(),this.removeCursors();this.animating=this.mouseIsOver=!1;this.hideDragIcons();this.update()}},handleMouseOver:function(){this.mouseIsOver=
!0;this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=!1;this.hideDragIcons();this.removeCursors()}})})();(function(){var d=window.AmCharts;d.ChartScrollbar=d.Class({inherits:d.SimpleChartScrollbar,construct:function(a){this.cname="ChartScrollbar";d.ChartScrollbar.base.construct.call(this,a);this.graphLineColor="#BBBBBB";this.graphLineAlpha=0;this.graphFillColor="#BBBBBB";this.graphFillAlpha=1;this.selectedGraphLineColor="#888888";this.selectedGraphLineAlpha=0;this.selectedGraphFillColor="#888888";this.selectedGraphFillAlpha=1;this.gridCount=0;this.gridColor="#FFFFFF";this.gridAlpha=.7;this.skipEvent=
this.autoGridCount=!1;this.color="#FFFFFF";this.scrollbarCreated=!1;this.oppositeAxis=!0;this.accessibleLabel="Zoom chart using cursor arrows";d.applyTheme(this,a,this.cname)},init:function(){var a=this.categoryAxis,b=this.chart,c=this.gridAxis;a||("CategoryAxis"==this.gridAxis.cname?(this.catScrollbar=!0,a=new d.CategoryAxis,a.id="scrollbar"):(a=new d.ValueAxis,a.data=b.chartData,a.id=c.id,a.type=c.type,a.maximumDate=c.maximumDate,a.minimumDate=c.minimumDate,a.minPeriod=c.minPeriod,a.minMaxField=
c.minMaxField),this.categoryAxis=a);a.chart=b;var e=b.categoryAxis;e&&(a.firstDayOfWeek=e.firstDayOfWeek);a.dateFormats=c.dateFormats;a.markPeriodChange=c.markPeriodChange;a.boldPeriodBeginning=c.boldPeriodBeginning;a.labelFunction=c.labelFunction;a.axisItemRenderer=d.RecItem;a.axisRenderer=d.RecAxis;a.guideFillRenderer=d.RecFill;a.inside=!0;a.fontSize=this.fontSize;a.tickLength=0;a.axisAlpha=0;d.isString(this.graph)&&(this.graph=d.getObjById(b.graphs,this.graph));(a=this.graph)&&this.catScrollbar&&
(c=this.valueAxis,c||(this.valueAxis=c=new d.ValueAxis,c.visible=!1,c.scrollbar=!0,c.axisItemRenderer=d.RecItem,c.axisRenderer=d.RecAxis,c.guideFillRenderer=d.RecFill,c.labelsEnabled=!1,c.chart=b),b=this.unselectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.unselectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers),b=this.selectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.selectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers));this.scrollbarCreated=!0},
draw:function(){var a=this;d.ChartScrollbar.base.draw.call(a);if(a.enabled){a.scrollbarCreated||a.init();var b=a.chart,c=b.chartData,e=a.categoryAxis,g=a.rotate,f=a.x,h=a.y,k=a.width,l=a.height,m=a.gridAxis,n=a.set;e.setOrientation(!g);e.parseDates=m.parseDates;"ValueAxis"==a.categoryAxis.cname&&(e.rotate=!g);e.equalSpacing=m.equalSpacing;e.minPeriod=m.minPeriod;e.startOnAxis=m.startOnAxis;e.width=k-1;e.height=l;e.gridCount=a.gridCount;e.gridColor=a.gridColor;e.gridAlpha=a.gridAlpha;e.color=a.color;
e.tickLength=0;e.axisAlpha=0;e.autoGridCount=a.autoGridCount;e.parseDates&&!e.equalSpacing&&e.timeZoom(b.firstTime,b.lastTime);e.minimum=a.gridAxis.fullMin;e.maximum=a.gridAxis.fullMax;e.strictMinMax=!0;e.zoom(0,c.length-1);if((m=a.graph)&&a.catScrollbar){var q=a.valueAxis,p=m.valueAxis;q.id=p.id;q.rotate=g;q.setOrientation(g);q.width=k;q.height=l;q.dataProvider=c;q.reversed=p.reversed;q.logarithmic=p.logarithmic;q.gridAlpha=0;q.axisAlpha=0;n.push(q.set);g?(q.y=h,q.x=0):(q.x=f,q.y=0);var f=Infinity,
h=-Infinity,t;for(t=0;t<c.length;t++){var r=c[t].axes[p.id].graphs[m.id].values,w;for(w in r)if(r.hasOwnProperty(w)&&"percents"!=w&&"total"!=w){var z=r[w];z<f&&(f=z);z>h&&(h=z)}}Infinity!=f&&(q.minimum=f);-Infinity!=h&&(q.maximum=h+.1*(h-f));f==h&&(--q.minimum,q.maximum+=1);void 0!==a.minimum&&(q.minimum=a.minimum);void 0!==a.maximum&&(q.maximum=a.maximum);q.zoom(0,c.length-1);w=a.unselectedGraph;w.id=m.id;w.bcn="scrollbar-graph-";w.rotate=g;w.chart=b;w.data=c;w.valueAxis=q;w.chart=m.chart;w.categoryAxis=
a.categoryAxis;w.periodSpan=m.periodSpan;w.valueField=m.valueField;w.openField=m.openField;w.closeField=m.closeField;w.highField=m.highField;w.lowField=m.lowField;w.lineAlpha=a.graphLineAlpha;w.lineColorR=a.graphLineColor;w.fillAlphas=a.graphFillAlpha;w.fillColorsR=a.graphFillColor;w.connect=m.connect;w.hidden=m.hidden;w.width=k;w.height=l;w.pointPosition=m.pointPosition;w.stepDirection=m.stepDirection;w.periodSpan=m.periodSpan;p=a.selectedGraph;p.id=m.id;p.bcn=w.bcn+"selected-";p.rotate=g;p.chart=
b;p.data=c;p.valueAxis=q;p.chart=m.chart;p.categoryAxis=e;p.periodSpan=m.periodSpan;p.valueField=m.valueField;p.openField=m.openField;p.closeField=m.closeField;p.highField=m.highField;p.lowField=m.lowField;p.lineAlpha=a.selectedGraphLineAlpha;p.lineColorR=a.selectedGraphLineColor;p.fillAlphas=a.selectedGraphFillAlpha;p.fillColorsR=a.selectedGraphFillColor;p.connect=m.connect;p.hidden=m.hidden;p.width=k;p.height=l;p.pointPosition=m.pointPosition;p.stepDirection=m.stepDirection;p.periodSpan=m.periodSpan;
b=a.graphType;b||(b=m.type);w.type=b;p.type=b;c=c.length-1;w.zoom(0,c);p.zoom(0,c);p.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});w.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});n.push(w.set);n.push(p.set)}n.push(e.set);n.push(e.labelsSet);a.bg.toBack();a.invisibleBg.toFront();a.dragger.toFront();a.iconLeft.toFront();a.iconRight.toFront()}},
timeZoom:function(a,b,c){this.startTime=a;this.endTime=b;this.timeDifference=b-a;this.skipEvent=!d.toBoolean(c);this.zoomScrollbar();this.dispatchScrollbarEvent()},zoom:function(a,b){this.start=a;this.end=b;this.skipEvent=!0;this.zoomScrollbar()},dispatchScrollbarEvent:function(){if(this.categoryAxis&&"ValueAxis"==this.categoryAxis.cname)d.ChartScrollbar.base.dispatchScrollbarEvent.call(this);else if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart.chartData,b,c,e=this.dragger.getBBox();b=e.x;
var g=e.y,f=e.width,e=e.height,h=this.chart;this.rotate?(b=g,c=e):c=f;f={type:"zoomed",target:this};f.chart=h;var k=this.categoryAxis,l=this.stepWidth,g=h.minSelectedTime,e=h.maxSelectedTime,m=!1;if(k.parseDates&&!k.equalSpacing){if(a=h.lastTime,h=h.firstTime,k=Math.round(b/l)+h,b=this.dragging?k+this.timeDifference:Math.round((b+c)/l)+h,k>b&&(k=b),0<g&&b-k<g&&(b=Math.round(k+(b-k)/2),m=Math.round(g/2),k=b-m,b+=m,m=!0),0<e&&b-k>e&&(b=Math.round(k+(b-k)/2),m=Math.round(e/2),k=b-m,b+=m,m=!0),b>a&&(b=
a),b-g<k&&(k=b-g),k<h&&(k=h),k+g>b&&(b=k+g),k!=this.startTime||b!=this.endTime)this.startTime=k,this.endTime=b,f.start=k,f.end=b,f.startDate=new Date(k),f.endDate=new Date(b),this.fire(f)}else{k.startOnAxis||(b+=l/2);c-=this.stepWidth/2;g=k.xToIndex(b);b=k.getCoordinate(g)-this.stepWidth/2;b=k.xToIndex(b+c);if(g!=this.start||this.end!=b)k.startOnAxis&&(this.resizingRight&&g==b&&b++,this.resizingLeft&&g==b&&(0<g?g--:b=1)),this.start=g,this.end=this.dragging?this.start+this.difference:b,f.start=this.start,
f.end=this.end,k.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),this.fire(f);this.percentStart=g;this.percentEnd=b}m&&this.zoomScrollbar(!0)}},zoomScrollbar:function(a){if((!(this.dragging||this.resizingLeft||this.resizingRight||this.animating)||a)&&this.dragger&&this.enabled){var b,c,d=this.chart;a=d.chartData;var g=this.categoryAxis;g.parseDates&&!g.equalSpacing?(a=g.stepWidth,c=d.firstTime,b=a*(this.startTime-c),c=a*(this.endTime-
c)):(a[this.start]&&(b=a[this.start].x[g.id]),a[this.end]&&(c=a[this.end].x[g.id]),a=g.stepWidth,g.startOnAxis||(d=a/2,b-=d,c+=d));this.stepWidth=a;isNaN(b)||isNaN(c)||this.updateScrollbarSize(b,c)}},maskGraphs:function(a,b,c,d){var g=this.selectedGraph;g&&g.set.clipRect(a,b,c,d)},handleDragStart:function(){d.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;this.timeDifference=this.endTime-this.startTime;0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){d.ChartScrollbar.base.handleBackgroundClick.call(this);
this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&(this.timeDifference=0))}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor=
"#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=
this.follow,g=c.container,f=this.set;d.remove(f);this.removeDiv();f=g.set();f.node.style.pointerEvents="none";this.set=f;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(f);if(this.show){var h=this.l,k=this.t,l=this.r,m=this.b,n=this.balloonColor,q=this.fillColor,p=this.borderColor,t=q;void 0!=n&&(this.adjustBorderColor?t=p=n:q=n);var r=this.horizontalPadding,w=this.verticalPadding,z=this.pointerWidth,x=this.pointerOrientation,u=this.cornerRadius,
A=c.fontFamily,y=this.fontSize;void 0==y&&(y=c.fontSize);var n=document.createElement("div"),B=c.classNamePrefix;n.className=B+"-balloon-div";this.className&&(n.className=n.className+" "+B+"-balloon-div-"+this.className);B=n.style;this.disableMouseEvents&&(B.pointerEvents="none");B.position="absolute";var D=this.minWidth,C=document.createElement("div");n.appendChild(C);var I=C.style;isNaN(D)||(I.minWidth=D-2*r+"px");I.textAlign=this.textAlign;I.maxWidth=this.maxWidth+"px";I.fontSize=y+"px";I.color=
this.color;I.fontFamily=A;C.innerHTML=this.text;c.chartDiv.appendChild(n);this.textDiv=n;var I=n.offsetWidth,H=n.offsetHeight;n.clientHeight&&(I=n.clientWidth,H=n.clientHeight);A=H+2*w;C=I+2*r;!isNaN(D)&&C<D&&(C=D);window.opera&&(A+=2);var Q=!1,y=this.offsetY;c.handDrawn&&(y+=c.handDrawScatter+2);"H"!=x?(D=a-C/2,b<k+A+10&&"down"!=x?(Q=!0,e&&(b+=y),y=b+z,this.deltaSignY=-1):(e&&(b-=y),y=b-A-z,this.deltaSignY=1)):(2*z>A&&(z=A/2),y=b-A/2,a<h+(l-h)/2?(D=a+z,this.deltaSignX=-1):(D=a-C-z,this.deltaSignX=
1));y+A>=m&&(y=m-A);y<k&&(y=k);D<h&&(D=h);D+C>l&&(D=l-C);var k=y+w,m=D+r,M=this.shadowAlpha,P=this.shadowColor,r=this.borderThickness,ia=this.bulletSize,J,w=this.fillAlpha,aa=this.borderAlpha;this.showBullet&&(J=d.circle(g,ia,t,w),f.push(J));this.drop?(h=C/1.6,l=0,"V"==x&&(x="down"),"H"==x&&(x="left"),"down"==x&&(D=a+1,y=b-h-h/3),"up"==x&&(l=180,D=a+1,y=b+h+h/3),"left"==x&&(l=270,D=a+h+h/3+2,y=b),"right"==x&&(l=90,D=a-h-h/3+2,y=b),k=y-H/2+1,m=D-I/2-1,q=d.drop(g,h,l,q,w,r,p,aa)):0<u||0===z?(0<M&&(a=
d.rect(g,C,A,q,0,r+1,P,M,u),d.isModern?a.translate(1,1):a.translate(4,4),f.push(a)),q=d.rect(g,C,A,q,w,r,p,aa,u)):(t=[],u=[],"H"!=x?(h=a-D,h>C-z&&(h=C-z),h<z&&(h=z),t=[0,h-z,a-D,h+z,C,C,0,0],u=Q?[0,0,b-y,0,0,A,A,0]:[A,A,b-y,A,A,0,0,A]):(x=b-y,x>A-z&&(x=A-z),x<z&&(x=z),u=[0,x-z,b-y,x+z,A,A,0,0],t=a<h+(l-h)/2?[0,0,D<a?0:a-D,0,0,C,C,0]:[C,C,D+C>a?C:a-D,C,C,0,0,C]),0<M&&(a=d.polygon(g,t,u,q,0,r,P,M),a.translate(1,1),f.push(a)),q=d.polygon(g,t,u,q,w,r,p,aa));this.bg=q;f.push(q);q.toFront();d.setCN(c,q,
"balloon-bg");this.className&&d.setCN(c,q,"balloon-bg-"+this.className);g=1*this.deltaSignX;m+=this.sdx;k+=this.sdy;B.left=m+"px";B.top=k+"px";f.translate(D-g,y,1,!0);q=q.getBBox();this.bottom=y+A+1;this.yPos=q.y+y;J&&J.translate(this.pointToX-D+g,b-y);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(f.translate(this.prevX,this.prevY,NaN,!0),f.animate({translate:D-g+","+y},b,"easeOutSine"),n&&(B.left=this.prevTX+"px",B.top=this.prevTY+"px",this.xAnim=c.animate({node:n},
"left",this.prevTX,m,b,"easeOutSine","px"),this.yAnim=c.animate({node:n},"top",this.prevTY,k,b,"easeOutSine","px")));this.prevX=D-g;this.prevY=y;this.prevTX=m;this.prevTY=k}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*
this.deltaSignX-this.sdx,b=this.chart.mouseY-this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var d=c.getBBox(),a=a-d.width/2,g=b-d.height-10;a<this.l&&(a=this.l);a>this.r-d.width&&(a=this.r-d.width);g<this.t&&(g=b+10);c.translate(a,g);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=g+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=
a},setBounds:function(a,b,c,d){this.l=a;this.t=b;this.r=c;this.b=d;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=
!0;b.destroyTO&&clearTimeout(b.destroyTO);b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var d=b.set;d&&(d.setAttr("opacity",b.fillAlpha),b.fadeAnim1=d.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=
b,this.positionChanged=!0},followCursor:function(a){var b=this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,d=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=d,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.AmCoordinateChart=d.Class({inherits:d.AmChart,construct:function(a){d.AmCoordinateChart.base.construct.call(this,a);this.theme=a;this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.startAlpha=1;this.startDuration=0;this.startEffect="elastic";this.sequencedAnimation=!0;this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");
this.balloonDateFormat="MMM DD, YYYY";this.valueAxes=[];this.graphs=[];this.guides=[];this.gridAboveGraphs=!1;d.applyTheme(this,a,"AmCoordinateChart")},initChart:function(){d.AmCoordinateChart.base.initChart.call(this);this.drawGraphs=!0;var a=this.categoryAxis;a&&(this.categoryAxis=d.processObject(a,d.CategoryAxis,this.theme));this.processValueAxes();this.createValueAxes();this.processGraphs();this.processGuides();d.VML&&(this.startAlpha=1);this.setLegendData(this.graphs);this.gridAboveGraphs&&(this.gridSet.toFront(),
this.bulletSet.toFront(),this.balloonsSet.toFront())},createValueAxes:function(){if(0===this.valueAxes.length){var a=new d.ValueAxis;this.addValueAxis(a)}},parseData:function(){this.processValueAxes();this.processGraphs()},parseSerialData:function(a){this.chartData=[];if(a)if(0<this.processTimeout){1>this.processCount&&(this.processCount=1);var b=a.length/this.processCount;this.parseCount=Math.ceil(b)-1;for(var c=0;c<b;c++)this.delayParseSerialData(a,c)}else this.parseCount=0,this.parsePartSerialData(a,
0,a.length,0);else this.onDataUpdated()},delayParseSerialData:function(a,b){var c=this,d=c.processCount;setTimeout(function(){c.parsePartSerialData.call(c,a,b*d,(b+1)*d,b)},c.processTimeout)},parsePartSerialData:function(a,b,c,e){c>a.length&&(c=a.length);var g=this.graphs,f={},h=this.seriesIdField;h||(h=this.categoryField);var k=!1,l,m=this.categoryAxis,n,q,p;m&&(k=m.parseDates,n=m.forceShowField,p=m.classNameField,q=m.labelColorField,l=m.categoryFunction);var t,r,w={},z;k&&(t=d.extractPeriod(m.minPeriod),
r=t.period,t=t.count,z=d.getPeriodDuration(r,t));var x={};this.lookupTable=x;var u,A=this.dataDateFormat,y={};for(u=b;u<c;u++){var B={},D=a[u];b=D[this.categoryField];B.dataContext=D;B.category=l?l(b,D,m):String(b);n&&(B.forceShow=D[n]);p&&(B.className=D[p]);q&&(B.labelColor=D[q]);x[D[h]]=B;if(k&&(m.categoryFunction?b=m.categoryFunction(b,D,m):(!A||b instanceof Date||(b=b.toString()+" |"),b=d.getDate(b,A,m.minPeriod)),b=d.resetDateToMin(b,r,t,m.firstDayOfWeek),B.category=b,B.time=b.getTime(),isNaN(B.time)))continue;
var C=this.valueAxes;B.axes={};B.x={};var I;for(I=0;I<C.length;I++){var H=C[I].id;B.axes[H]={};B.axes[H].graphs={};var Q;for(Q=0;Q<g.length;Q++){b=g[Q];var M=b.id,P=1.1;isNaN(b.gapPeriod)||(P=b.gapPeriod);var ia=b.periodValue;if(b.valueAxis.id==H){B.axes[H].graphs[M]={};var J={};J.index=u;var aa=D;b.dataProvider&&(aa=f);J.values=this.processValues(aa,b,ia);if(!b.connect||b.forceGap&&!isNaN(b.gapPeriod))if(y&&y[M]&&0<P&&B.time-w[M]>=z*P&&(y[M].gap=!0),b.forceGap){var P=0,ma;for(ma in J.values)P++;
0<P&&(w[M]=B.time,y[M]=J)}else w[M]=B.time,y[M]=J;this.processFields(b,J,aa);J.category=B.category;J.serialDataItem=B;J.graph=b;B.axes[H].graphs[M]=J}}}this.chartData[u]=B}if(this.parseCount==e){for(a=0;a<g.length;a++)b=g[a],b.dataProvider&&this.parseGraphData(b);this.dataChanged=!1;this.dispatchDataUpdated=!0;this.onDataUpdated()}},processValues:function(a,b,c){var e={},g,f=!1;"candlestick"!=b.type&&"ohlc"!=b.type||""===c||(f=!0);for(var h="value error open close low high".split(" "),k=0;k<h.length;k++){var l=
h[k];"value"!=l&&"error"!=l&&f&&(c=l.charAt(0).toUpperCase()+l.slice(1));var m=a[b[l+"Field"]+c];null!==m&&(g=Number(m),isNaN(g)||(e[l]=g),"date"==b.valueAxis.type&&void 0!==m&&(g=d.getDate(m,b.chart.dataDateFormat),e[l]=g.getTime()))}return e},parseGraphData:function(a){var b=a.dataProvider,c=a.seriesIdField;c||(c=this.seriesIdField);c||(c=this.categoryField);var d;for(d=0;d<b.length;d++){var g=b[d],f=this.lookupTable[String(g[c])],h=a.valueAxis.id;f&&(h=f.axes[h].graphs[a.id],h.serialDataItem=f,
h.values=this.processValues(g,a,a.periodValue),this.processFields(a,h,g))}},addValueAxis:function(a){a.chart=this;this.valueAxes.push(a);this.validateData()},removeValueAxesAndGraphs:function(){var a=this.valueAxes,b;for(b=a.length-1;-1<b;b--)this.removeValueAxis(a[b])},removeValueAxis:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--){var d=b[c];d&&d.valueAxis==a&&this.removeGraph(d)}b=this.valueAxes;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);this.validateData()},addGraph:function(a){this.graphs.push(a);
this.chooseGraphColor(a,this.graphs.length-1);this.validateData()},removeGraph:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--)b[c]==a&&(b.splice(c,1),a.destroy());this.validateData()},handleValueAxisZoom:function(){},processValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.ValueAxis,this.theme);a[b]=c;c.chart=this;c.init();this.listenTo(c,"axisIntZoomed",this.handleValueAxisZoom);c.id||(c.id="valueAxisAuto"+b+"_"+(new Date).getTime());
void 0===c.usePrefixes&&(c.usePrefixes=this.usePrefixes)}},processGuides:function(){var a=this.guides,b=this.categoryAxis;if(a)for(var c=0;c<a.length;c++){var e=a[c];(void 0!==e.category||void 0!==e.date)&&b&&b.addGuide(e);e.id||(e.id="guideAuto"+c+"_"+(new Date).getTime());var g=e.valueAxis;g?(d.isString(g)&&(g=this.getValueAxisById(g)),g?g.addGuide(e):this.valueAxes[0].addGuide(e)):isNaN(e.value)||this.valueAxes[0].addGuide(e)}},processGraphs:function(){var a=this.graphs,b;this.graphsById={};for(b=
0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.AmGraph,this.theme);a[b]=c;this.chooseGraphColor(c,b);c.chart=this;c.init();d.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.id||(c.id="graphAuto"+b+"_"+(new Date).getTime());this.graphsById[c.id]=c}},formatString:function(a,b,c){var e=b.graph,g=e.valueAxis;g.duration&&b.values.value&&(g=d.formatDuration(b.values.value,g.duration,"",g.durationUnits,g.maxInterval,g.numberFormatter),
a=a.split("[[value]]").join(g));a=d.massReplace(a,{"[[title]]":e.title,"[[description]]":b.description});a=c?d.fixNewLines(a):d.fixBrakes(a);return a=d.cleanFromEmpty(a)},getBalloonColor:function(a,b,c){var e=a.lineColor,g=a.balloonColor;c&&(g=e);c=a.fillColorsR;"object"==typeof c?e=c[0]:void 0!==c&&(e=c);b.isNegative&&(c=a.negativeLineColor,a=a.negativeFillColors,"object"==typeof a?c=a[0]:void 0!==a&&(c=a),void 0!==c&&(e=c));void 0!==b.color&&(e=b.color);void 0!==b.lineColor&&(e=b.lineColor);b=b.fillColors;
void 0!==b&&(e=b,d.ifArray(b)&&(e=b[0]));void 0===g&&(g=e);return g},getGraphById:function(a){return d.getObjById(this.graphs,a)},getValueAxisById:function(a){return d.getObjById(this.valueAxes,a)},processFields:function(a,b,c){if(a.itemColors){var e=a.itemColors,g=b.index;b.color=g<e.length?e[g]:d.randomColor()}e="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" ");for(g=0;g<e.length;g++){var f=
e[g],h=a[f+"Field"];h&&(h=c[h],d.isDefined(h)&&(b[f]=h))}b.dataContext=c},chooseGraphColor:function(a,b){if(a.lineColor)a.lineColorR=a.lineColor;else{var c;c=this.colors.length>b?this.colors[b]:a.lineColorR?a.lineColorR:d.randomColor();a.lineColorR=c}a.fillColorsR=a.fillColors?a.fillColors:a.lineColorR;a.bulletBorderColorR=a.bulletBorderColor?a.bulletBorderColor:a.useLineColorForBulletBorder?a.lineColorR:a.bulletColor;a.bulletColorR=a.bulletColor?a.bulletColor:a.lineColorR;if(c=this.patterns)a.pattern=
c[b]},handleLegendEvent:function(a){var b=a.type;if(a=a.dataItem){var c=a.hidden,d=a.showBalloon;switch(b){case "clickMarker":this.textClickEnabled&&(d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a));break;case "clickLabel":d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case "rollOverItem":c||this.highlightGraph(a);break;case "rollOutItem":c||this.unhighlightGraph();break;case "hideItem":this.hideGraph(a);break;case "showItem":this.showGraph(a)}}},highlightGraph:function(a){var b=
this.graphs;if(b){var c,d=.2;this.legend&&(d=this.legend.rollOverGraphAlpha);if(1!=d)for(c=0;c<b.length;c++){var g=b[c];g!=a&&g.changeOpacity(d)}}},unhighlightGraph:function(){var a;this.legend&&(a=this.legend.rollOverGraphAlpha);if(1!=a){a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].changeOpacity(1)}},showGraph:function(a){a.switchable&&(a.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(a){a.switchable&&(this.dataChanged=
!0,"xy"!=this.type&&(this.marginsUpdated=!1),a.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=!0;this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){this.animatable=[];var a=this.graphs;if(a){var b;for(b=0;b<a.length;b++)a[b].animationPlayed=!1}},animateAgain:function(){this.resetAnimation();this.validateNow()}})})();(function(){var d=window.AmCharts;d.TrendLine=d.Class({construct:function(a){this.cname="TrendLine";this.createEvents("click","rollOver","rollOut");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container,e,g,f,h,k=a.categoryAxis,l=a.initialDate,m=a.initialCategory,n=a.finalDate,q=a.finalCategory,p=a.valueAxis,t=a.valueAxisX,r=a.initialXValue,w=a.finalXValue,
z=a.initialValue,x=a.finalValue,u=p.recalculateToPercents,A=b.dataDateFormat;k&&(l&&(l=d.getDate(l,A,"fff"),a.initialDate=l,e=k.dateToCoordinate(l)),m&&(e=k.categoryToCoordinate(m)),n&&(n=d.getDate(n,A,"fff"),a.finalDate=n,g=k.dateToCoordinate(n)),q&&(g=k.categoryToCoordinate(q)));t&&!u&&(isNaN(r)||(e=t.getCoordinate(r)),isNaN(w)||(g=t.getCoordinate(w)));p&&!u&&(isNaN(z)||(f=p.getCoordinate(z)),isNaN(x)||(h=p.getCoordinate(x)));if(!(isNaN(e)||isNaN(g)||isNaN(f)||isNaN(f))){b.rotate?(k=[f,h],h=[e,
g]):(k=[e,g],h=[f,h]);f=d.line(c,k,h,a.lineColor,a.lineAlpha,a.lineThickness,a.dashLength);e=k;g=h;n=k[1]-k[0];q=h[1]-h[0];0===n&&(n=.01);0===q&&(q=.01);l=n/Math.abs(n);m=q/Math.abs(q);q=90*Math.PI/180-Math.asin(n/(n*q/Math.abs(n*q)*Math.sqrt(Math.pow(n,2)+Math.pow(q,2))));n=Math.abs(5*Math.cos(q));q=Math.abs(5*Math.sin(q));e.push(k[1]-l*q,k[0]-l*q);g.push(h[1]+m*n,h[0]+m*n);h=d.polygon(c,e,g,"#ffffff",.005,0);c=c.set([h,f]);c.translate(b.marginLeftReal,b.marginTopReal);b.trendLinesSet.push(c);d.setCN(b,
f,"trend-line");d.setCN(b,f,"trend-line-"+a.id);a.line=f;a.set=c;if(f=a.initialImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[0]+f.offsetX,g[0]+f.offsetY),c.push(f.set);if(f=a.finalImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[1]+f.offsetX,g[1]+f.offsetY),c.push(f.set);c.mouseup(function(){a.handleLineClick()}).mouseover(function(){a.handleLineOver()}).mouseout(function(){a.handleLineOut()});c.touchend&&c.touchend(function(){a.handleLineClick()});
c.clipRect(0,0,b.plotAreaWidth,b.plotAreaHeight)}},handleLineClick:function(){this.fire({type:"click",trendLine:this,chart:this.chart})},handleLineOver:function(){var a=this.rollOverColor;void 0!==a&&this.line.attr({stroke:a});this.balloonText&&(clearTimeout(this.chart.hoverInt),a=this.line.getBBox(),this.chart.showBalloon(this.balloonText,this.lineColor,!0,this.x+a.x+a.width/2,this.y+a.y+a.height/2));this.fire({type:"rollOver",trendLine:this,chart:this.chart})},handleLineOut:function(){this.line.attr({stroke:this.lineColor});
this.balloonText&&this.chart.hideBalloon();this.fire({type:"rollOut",trendLine:this,chart:this.chart})},destroy:function(){d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.Image=d.Class({construct:function(a){this.cname="Image";this.height=this.width=20;this.rotation=this.offsetY=this.offsetX=0;this.balloonColor=this.color="#000000";this.opacity=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.set&&a.set.remove();var b=a.chart.container;a.set=b.set();var c,d;a.url?(c=b.image(a.url,0,0,a.width,a.height),d=1):a.svgPath&&(c=b.path(a.svgPath),c.setAttr("fill",a.color),c.setAttr("stroke",a.outlineColor),b=c.getBBox(),d=
Math.min(a.width/b.width,a.height/b.height));c&&(c.setAttr("opacity",a.opacity),a.set.rotate(a.rotation),c.translate(-a.width/2,-a.height/2,d),a.balloonText&&c.mouseover(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}).mouseout(function(){a.chart.hideBalloon()}).touchend(function(){a.chart.hideBalloon()}).touchstart(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}),a.set.push(c))},translate:function(a,b){this.set&&this.set.translate(a,b)}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,g,f,h,k,l){0>=b&&(b=.001);if(void 0==g||0===g)g=.01;void 0===f&&(f="#000000");void 0===h&&(h=0);e={fill:c,stroke:f,"fill-opacity":e,"stroke-width":g,"stroke-opacity":h};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);k&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,g,f,h,k){f||(f="middle");"right"==f&&(f="end");"left"==f&&(f="start");isNaN(k)&&(k=1);void 0!==b&&(b=String(b),d.isIE&&
!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":g+"px",opacity:k};!0===h&&(c["font-weight"]="bold");c["text-anchor"]=f;return a.text(b,c)};d.polygon=function(a,b,c,e,g,f,h,k,l,m,n){isNaN(f)&&(f=.01);isNaN(k)&&(k=g);var q=e,p=!1;"object"==typeof q&&1<q.length&&(p=!0,q=q[0]);void 0===h&&(h=q);g={fill:q,stroke:h,"fill-opacity":g,"stroke-width":f,"stroke-opacity":k};void 0!==n&&0<n&&(g["stroke-dasharray"]=n);n=d.dx;f=d.dy;a.handDrawn&&(c=d.makeHD(b,
c,a.handDrawScatter),b=c[0],c=c[1]);h=Math.round;m&&(h=Number);k="M"+(h(b[0])+n)+","+(h(c[0])+f);for(q=1;q<b.length;q++)m&&(b[q]=d.roundTo(b[q],5),c[q]=d.roundTo(c[q],5)),k+=" L"+(h(b[q])+n)+","+(h(c[q])+f);a=a.path(k+" Z").attr(g);p&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,g,f,h,k,l,m,n){if(isNaN(b)||isNaN(c))return a.set();isNaN(f)&&(f=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(g)&&(g=0);var q=e,p=!1;"object"==typeof q&&(q=q[0],p=!0);void 0===h&&(h=q);void 0===k&&
(k=g);b=Math.round(b);c=Math.round(c);var t=0,r=0;0>b&&(b=Math.abs(b),t=-b);0>c&&(c=Math.abs(c),r=-c);t+=d.dx;r+=d.dy;g={fill:q,stroke:h,"fill-opacity":g,"stroke-opacity":k};void 0!==n&&0<n&&(g["stroke-dasharray"]=n);a=a.rect(t,r,b,c,l,f).attr(g);p&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,g,f,h,k,l,m,n,q,p){var t;"circle"==b&&(b="round");switch(b){case "round":t=d.circle(a,c/2,e,g,f,h,k);break;case "square":t=d.polygon(a,[-c/2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,g,f,h,
k,m-180,void 0,p);break;case "rectangle":t=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,g,f,h,k,m-180,void 0,p);break;case "diamond":t=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,g,f,h,k);break;case "triangleUp":t=d.triangle(a,c,0,e,g,f,h,k);break;case "triangleDown":t=d.triangle(a,c,180,e,g,f,h,k);break;case "triangleLeft":t=d.triangle(a,c,270,e,g,f,h,k);break;case "triangleRight":t=d.triangle(a,c,90,e,g,f,h,k);break;case "bubble":t=d.circle(a,c/2,e,g,f,h,k,!0);break;case "line":t=d.line(a,[-c/
2,c/2],[0,0],e,g,f,h,k);break;case "yError":t=a.set();t.push(d.line(a,[0,0],[-c/2,c/2],e,g,f));t.push(d.line(a,[-l,l],[-c/2,-c/2],e,g,f));t.push(d.line(a,[-l,l],[c/2,c/2],e,g,f));break;case "xError":t=a.set(),t.push(d.line(a,[-c/2,c/2],[0,0],e,g,f)),t.push(d.line(a,[-c/2,-c/2],[-l,l],e,g,f)),t.push(d.line(a,[c/2,c/2],[-l,l],e,g,f))}t&&t.pattern(n,NaN,q);return t};d.triangle=function(a,b,c,d,g,f,h,k){if(void 0===f||0===f)f=1;void 0===h&&(h="#000");void 0===k&&(k=0);d={fill:d,stroke:h,"fill-opacity":g,
"stroke-width":f,"stroke-opacity":k};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(d)};d.line=function(a,b,c,e,g,f,h,k,l,m,n){if(a.handDrawn&&!n)return d.handDrawnLine(a,b,c,e,g,f,h,k,l,m,n);f={fill:"none","stroke-width":f};void 0!==h&&0<h&&(f["stroke-dasharray"]=h);isNaN(g)||(f["stroke-opacity"]=
g);e&&(f.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;g=d.dy;h="M"+(e(b[0])+m)+","+(e(c[0])+g);for(k=1;k<b.length;k++)b[k]=d.roundTo(b[k],5),c[k]=d.roundTo(c[k],5),h+=" L"+(e(b[k])+m)+","+(e(c[k])+g);if(d.VML)return a.path(h,void 0,!0).attr(f);l&&(h+=" M0,0 L0,0");return a.path(h).attr(f)};d.makeHD=function(a,b,c){for(var d=[],g=[],f=1;f<a.length;f++)for(var h=Number(a[f-1]),k=Number(b[f-1]),l=Number(a[f]),m=Number(b[f]),n=Math.round(Math.sqrt(Math.pow(l-
h,2)+Math.pow(m-k,2))/50)+1,l=(l-h)/n,m=(m-k)/n,q=0;q<=n;q++){var p=k+q*m+Math.random()*c;d.push(h+q*l+Math.random()*c);g.push(p)}return[d,g]};d.handDrawnLine=function(a,b,c,e,g,f,h,k,l,m){var n,q=a.set();for(n=1;n<b.length;n++)for(var p=[b[n-1],b[n]],t=[c[n-1],c[n]],t=d.makeHD(p,t,a.handDrawScatter),p=t[0],t=t[1],r=1;r<p.length;r++)q.push(d.line(a,[p[r-1],p[r]],[t[r-1],t[r]],e,g,f+Math.random()*a.handDrawThickness-a.handDrawThickness/2,h,k,l,m,!0));return q};d.doNothing=function(a){return a};d.drop=
function(a,b,c,d,g,f,h,k){var l=1/180*Math.PI,m=c-20,n=Math.sin(m*l)*b,q=Math.cos(m*l)*b,p=Math.sin((m+40)*l)*b,t=Math.cos((m+40)*l)*b,r=.8*b,w=-b/3,z=b/3;0===c&&(w=-w,z=0);180==c&&(z=0);90==c&&(w=0);270==c&&(w=0,z=-z);c={fill:d,stroke:h,"stroke-width":f,"stroke-opacity":k,"fill-opacity":g};b="M"+n+","+q+" A"+b+","+b+",0,1,1,"+p+","+t+(" A"+r+","+r+",0,0,0,"+(Math.sin((m+20)*l)*b+z)+","+(Math.cos((m+20)*l)*b+w));b+=" A"+r+","+r+",0,0,0,"+n+","+q;return a.path(b,void 0,void 0,"1000,1000").attr(c)};
d.wedge=function(a,b,c,e,g,f,h,k,l,m,n,q,p,t){var r=Math.round;f=r(f);h=r(h);k=r(k);var w=r(h/f*k),z=d.VML,x=359.5+f/100;359.94<x&&(x=359.94);g>=x&&(g=x);var u=1/180*Math.PI,x=b+Math.sin(e*u)*k,A=c-Math.cos(e*u)*w,y=b+Math.sin(e*u)*f,B=c-Math.cos(e*u)*h,D=b+Math.sin((e+g)*u)*f,C=c-Math.cos((e+g)*u)*h,I=b+Math.sin((e+g)*u)*k,u=c-Math.cos((e+g)*u)*w,H={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},Q=0;180<Math.abs(g)&&(Q=1);e=a.set();var M;z&&(x=r(10*x),y=
r(10*y),D=r(10*D),I=r(10*I),A=r(10*A),B=r(10*B),C=r(10*C),u=r(10*u),b=r(10*b),l=r(10*l),c=r(10*c),f*=10,h*=10,k*=10,w*=10,1>Math.abs(g)&&1>=Math.abs(D-y)&&1>=Math.abs(C-B)&&(M=!0));g="";var P;q&&(H["fill-opacity"]=0,H["stroke-opacity"]=m["stroke-opacity"]/2,H.stroke=m.stroke);if(0<l){P=" M"+x+","+(A+l)+" L"+y+","+(B+l);z?(M||(P+=" A"+(b-f)+","+(l+c-h)+","+(b+f)+","+(l+c+h)+","+y+","+(B+l)+","+D+","+(C+l)),P+=" L"+I+","+(u+l),0<k&&(M||(P+=" B"+(b-k)+","+(l+c-w)+","+(b+k)+","+(l+c+w)+","+I+","+(l+u)+
","+x+","+(l+A)))):(P+=" A"+f+","+h+",0,"+Q+",1,"+D+","+(C+l)+" L"+I+","+(u+l),0<k&&(P+=" A"+k+","+w+",0,"+Q+",0,"+x+","+(A+l)));P+=" Z";var ia=l;z&&(ia/=10);for(var J=0;J<ia;J+=10){var aa=a.path(P,void 0,void 0,"1000,1000").attr(H);e.push(aa);aa.translate(0,-J)}P=a.path(" M"+x+","+A+" L"+x+","+(A+l)+" L"+y+","+(B+l)+" L"+y+","+B+" L"+x+","+A+" Z",void 0,void 0,"1000,1000").attr(H);l=a.path(" M"+D+","+C+" L"+D+","+(C+l)+" L"+I+","+(u+l)+" L"+I+","+u+" L"+D+","+C+" Z",void 0,void 0,"1000,1000").attr(H);
e.push(P);e.push(l)}z?(M||(g=" A"+r(b-f)+","+r(c-h)+","+r(b+f)+","+r(c+h)+","+r(y)+","+r(B)+","+r(D)+","+r(C)),h=" M"+r(x)+","+r(A)+" L"+r(y)+","+r(B)+g+" L"+r(I)+","+r(u)):h=" M"+x+","+A+" L"+y+","+B+(" A"+f+","+h+",0,"+Q+",1,"+D+","+C)+" L"+I+","+u;0<k&&(z?M||(h+=" B"+(b-k)+","+(c-w)+","+(b+k)+","+(c+w)+","+I+","+u+","+x+","+A):h+=" A"+k+","+w+",0,"+Q+",0,"+x+","+A);a.handDrawn&&(k=d.line(a,[x,y],[A,B],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),e.push(k));a=a.path(h+
" Z",void 0,void 0,"1000,1000").attr(m);if(n){k=[];for(w=0;w<n.length;w++)k.push(d.adjustLuminosity(m.fill,n[w]));"radial"!=t||d.isModern||(k=[]);0<k.length&&a.gradient(t+"Gradient",k)}d.isModern&&"radial"==t&&a.grad&&(a.grad.setAttribute("gradientUnits","userSpaceOnUse"),a.grad.setAttribute("r",f),a.grad.setAttribute("cx",b),a.grad.setAttribute("cy",c));a.pattern(q,NaN,p);e.wedge=a;e.push(a);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&
4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,g;for(g=0;3>g;g++)e=parseInt(a.substr(2*g,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.Bezier=d.Class({construct:function(a,b,c,e,g,f,h,k,l,m,n){var q=a.chart,p=d.bezierX,t=d.bezierY;isNaN(q.bezierX)||(p=q.bezierX);isNaN(q.bezierY)||(t=q.bezierY);isNaN(p)&&(q.rotate?(p=20,t=4):(t=20,p=4));var r,w;"object"==typeof h&&1<h.length&&(w=!0,r=h,h=h[0]);"object"==typeof k&&(k=k[0]);0===k&&(h="none");f={fill:h,"fill-opacity":k,"stroke-width":f};void 0!==l&&0<l&&(f["stroke-dasharray"]=l);isNaN(g)||(f["stroke-opacity"]=g);e&&(f.stroke=e);e="M"+Math.round(b[0])+
","+Math.round(c[0])+" ";g=[];for(l=0;l<b.length;l++)isNaN(b[l])||isNaN(c[l])?(e+=this.drawSegment(g,p,t),l<b.length-1&&(e+="L"+b[l+1]+","+c[l+1]+" "),g=[]):g.push({x:Number(b[l]),y:Number(c[l])});e+=this.drawSegment(g,p,t);m&&(e+=m);this.path=a.path(e).attr(f);this.node=this.path.node;w&&this.path.gradient("linearGradient",r,n)},drawSegment:function(a,b,c){var d="";if(2<a.length)for(var g=0;g<a.length-1;g++){var f=[],h=a[g-1],k=a[g],l=a[g+1],m=a[g+2];0===g?(f.push({x:k.x,y:k.y}),f.push({x:k.x,y:k.y}),
f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y})):g>=a.length-2?(f.push({x:h.x,y:h.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:l.x,y:l.y})):(f.push({x:h.x,y:h.y}),f.push({x:k.x,y:k.y}),f.push({x:l.x,y:l.y}),f.push({x:m.x,y:m.y}));h=[];k=Math.round;h.push({x:k(f[1].x),y:k(f[1].y)});h.push({x:k((-f[0].x+b*f[1].x+f[2].x)/b),y:k((-f[0].y+c*f[1].y+f[2].y)/c)});h.push({x:k((f[1].x+b*f[2].x-f[3].x)/b),y:k((f[1].y+c*f[2].y-f[3].y)/c)});h.push({x:k(f[2].x),y:k(f[2].y)});d+="C"+h[1].x+","+h[1].y+","+
h[2].x+","+h[2].y+","+h[3].x+","+h[3].y+" "}else 1<a.length&&(d+="L"+a[1].x+","+a[1].y);return d}})})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&
(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,
a)},circle:function(a,b,c,e){var g=new d.AmDObject("circle",this);g.attr({r:c,cx:a,cy:b});this.addToContainer(g.node,e);return g},ellipse:function(a,b,c,e,g){var f=new d.AmDObject("ellipse",this);f.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(f.node,g);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,g,f,h){var k=new d.AmDObject("rect",this);d.VML&&(g=Math.round(100*g/Math.min(c,e)),c+=2*f,e+=2*f,k.bw=f,k.node.style.marginLeft=
-f,k.node.style.marginTop=-f);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:g,ry:g,"stroke-width":f});this.addToContainer(k.node,h);return k},image:function(a,b,c,e,g,f){var h=new d.AmDObject("image",this);h.attr({x:b,y:c,width:e,height:g});this.R.path(h,a);this.addToContainer(h.node,f);return h},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var g=new d.AmDObject("path",this);e||(e="100,100");
g.attr({cs:e});c?g.attr({dd:a}):g.attr({d:a});this.addToContainer(g.node,b);return g},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),d=c.left-Math.round(c.left),g=c.top-Math.round(c.top);d&&(b.left=d+"px");g&&(b.top=g+"px")}catch(f){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),
c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("text");c.appendChild(e);e.innerHTML=a.accessibleTitle;e.style.opacity=0}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),a.accessibleDescription&&(b.innerHTML="",b.appendChild(document.createTextNode(a.accessibleDescription))),
c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),d.parseDefs(a.defs,b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,d){this.R.clipRect(this,a,b,c,d)},translate:function(a,b,c,d){d||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=
c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var g=e,f=a[e];c=d.getEffect(c);this.R.animate(this,g,f,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=
a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;
var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,
"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},keyup:function(a){this.R.addListener(this,"keyup",a);return this},focus:function(a){this.R.addListener(this,"focus",a);return this},blur:function(a){this.R.addListener(this,"blur",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",
a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.VMLRenderer=d.Class({construct:function(a,b){this.chart=b;this.D=a;this.cNames={circle:"oval",ellipse:"oval",rect:"roundrect",path:"shape"};this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"}},create:function(a,b){var c;if("group"==b)c=document.createElement("div"),a.type="div";else if("text"==b)c=document.createElement("div"),a.type="text";else if("image"==b)c=document.createElement("img"),
a.type="image";else{a.type="shape";a.shapeType=this.cNames[b];c=document.createElement("amvml:"+this.cNames[b]);var d=document.createElement("amvml:stroke");c.appendChild(d);a.stroke=d;var g=document.createElement("amvml:fill");c.appendChild(g);a.fill=g;g.className="amvml";d.className="amvml";c.className="amvml"}c.style.position="absolute";c.style.top=0;c.style.left=0;return c},path:function(a,b){a.node.setAttribute("src",b)},setAttr:function(a,b,c){if(void 0!==c){var e;8===document.documentMode&&
(e=!0);var g=a.node,f=a.type,h=g.style;"r"==b&&(h.width=2*c,h.height=2*c);"oval"==a.shapeType&&("rx"==b&&(h.width=2*c),"ry"==b&&(h.height=2*c));"roundrect"==a.shapeType&&("width"!=b&&"height"!=b||--c);"cursor"==b&&(h.cursor=c);"cx"==b&&(h.left=c-d.removePx(h.width)/2);"cy"==b&&(h.top=c-d.removePx(h.height)/2);var k=this.styleMap[b];"width"==k&&0>c&&(c=0);void 0!==k&&(h[k]=c);"text"==f&&("text-anchor"==b&&(a.anchor=c,k=g.clientWidth,"end"==c&&(h.marginLeft=-k+"px"),"middle"==c&&(h.marginLeft=-(k/2)+
"px",h.textAlign="center"),"start"==c&&(h.marginLeft="0px")),"fill"==b&&(h.color=c),"font-weight"==b&&(h.fontWeight=c));if(h=a.children)for(k=0;k<h.length;k++)h[k].setAttr(b,c);if("shape"==f){"cs"==b&&(g.style.width="100px",g.style.height="100px",g.setAttribute("coordsize",c));"d"==b&&g.setAttribute("path",this.svgPathToVml(c));"dd"==b&&g.setAttribute("path",c);f=a.stroke;a=a.fill;"stroke"==b&&(e?f.color=c:f.setAttribute("color",c));"stroke-width"==b&&(e?f.weight=c:f.setAttribute("weight",c));"stroke-opacity"==
b&&(e?f.opacity=c:f.setAttribute("opacity",c));"stroke-dasharray"==b&&(h="solid",0<c&&3>c&&(h="dot"),3<=c&&6>=c&&(h="dash"),6<c&&(h="longdash"),e?f.dashstyle=h:f.setAttribute("dashstyle",h));if("fill-opacity"==b||"opacity"==b)0===c?e?a.on=!1:a.setAttribute("on",!1):e?a.opacity=c:a.setAttribute("opacity",c);"fill"==b&&(e?a.color=c:a.setAttribute("color",c));"rx"==b&&(e?g.arcSize=c+"%":g.setAttribute("arcsize",c+"%"))}}},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},
text:function(a,b,c){var e=new d.AmDObject("text",this.D),g=e.node;g.style.whiteSpace="pre";g.innerHTML=a;this.D.addToContainer(g,c);this.attr(e,b);return e},getBBox:function(a){return this.getBox(a.node)},getBox:function(a){var b=a.offsetLeft,c=a.offsetTop,d=a.offsetWidth,g=a.offsetHeight,f;if(a.hasChildNodes()){var h,k,l;for(l=0;l<a.childNodes.length;l++){f=this.getBox(a.childNodes[l]);var m=f.x;isNaN(m)||(isNaN(h)?h=m:m<h&&(h=m));var n=f.y;isNaN(n)||(isNaN(k)?k=n:n<k&&(k=n));m=f.width+m;isNaN(m)||
(d=Math.max(d,m));f=f.height+n;isNaN(f)||(g=Math.max(g,f))}0>h&&(b+=h);0>k&&(c+=k)}return{x:b,y:c,width:d,height:g}},setText:function(a,b){var c=a.node;c&&(c.innerHTML=b);this.setAttr(a,"text-anchor",a.anchor)},addListener:function(a,b,c){a.node["on"+b]=c},move:function(a,b,c){var e=a.node,g=e.style;"text"==a.type&&(c-=d.removePx(g.fontSize)/2-1);"oval"==a.shapeType&&(b-=d.removePx(g.width)/2,c-=d.removePx(g.height)/2);a=a.bw;isNaN(a)||(b-=a,c-=a);isNaN(b)||isNaN(c)||(e.style.left=b+"px",e.style.top=
c+"px")},svgPathToVml:function(a){var b=a.split(" ");a="";var c,d=Math.round,g;for(g=0;g<b.length;g++){var f=b[g],h=f.substring(0,1),f=f.substring(1),k=f.split(","),l=d(k[0])+","+d(k[1]);"M"==h&&(a+=" m "+l);"L"==h&&(a+=" l "+l);"Z"==h&&(a+=" x e");if("Q"==h){var m=c.length,n=c[m-1],q=k[0],p=k[1],l=k[2],t=k[3];c=d(c[m-2]/3+2/3*q);n=d(n/3+2/3*p);q=d(2/3*q+l/3);p=d(2/3*p+t/3);a+=" c "+c+","+n+","+q+","+p+","+l+","+t}"C"==h&&(a+=" c "+k[0]+","+k[1]+","+k[2]+","+k[3]+","+k[4]+","+k[5]);"A"==h&&(a+=" wa "+
f);"B"==h&&(a+=" at "+f);c=k}return a},animate:function(a,b,c,d,g){var f=a.node,h=this.chart;a.animationFinished=!1;if("translate"==b){b=c.split(",");c=b[1];var k=f.offsetTop;h.animate(a,"left",f.offsetLeft,b[0],d,g,"px");h.animate(a,"top",k,c,d,g,"px")}},clipRect:function(a,b,c,d,g){a=a.node;0===b&&0===c?(a.style.width=d+"px",a.style.height=g+"px",a.style.overflow="hidden"):a.style.clip="rect("+c+"px "+(b+d)+"px "+(c+g)+"px "+b+"px)"},rotate:function(a,b,c){if(0!==Number(b)){var e=a.node;a=e.style;
c||(c=this.getBGColor(e.parentNode));a.backgroundColor=c;a.paddingLeft=1;c=b*Math.PI/180;var g=Math.cos(c),f=Math.sin(c),h=d.removePx(a.left),k=d.removePx(a.top),l=e.offsetWidth,e=e.offsetHeight;b/=Math.abs(b);a.left=h+l/2-l/2*Math.cos(c)-b*e/2*Math.sin(c)+3;a.top=k-b*l/2*Math.sin(c)+b*e/2*Math.sin(c);a.cssText=a.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+g+"', M12='"+-f+"', M21='"+f+"', M22='"+g+"', sizingmethod='auto expand');"}},getBGColor:function(a){var b="#FFFFFF";if(a.style){var c=
a.style.backgroundColor;""!==c?b=c:a.parentNode&&(b=this.getBGColor(a.parentNode))}return b},set:function(a){var b=new d.AmDObject("group",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},gradient:function(a,b,c,d){var g="";"radialGradient"==b&&(b="gradientradial",c.reverse());"linearGradient"==b&&(b="gradient");var f;for(f=0;f<c.length;f++)g+=Math.round(100*f/(c.length-1))+"% "+c[f],f<c.length-1&&(g+=",");a=a.fill;90==d?d=0:270==d?d=180:180==
d?d=90:0===d&&(d=270);8===document.documentMode?(a.type=b,a.angle=d):(a.setAttribute("type",b),a.setAttribute("angle",d));g&&(a.colors.value=g)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);this.D.remove(a.node)},disableSelection:function(a){a.onselectstart=function(){return!1};a.style.cursor="default"},pattern:function(a,b,c,e){c=a.node;a=a.fill;var g="none";b.color&&(g=b.color);c.fillColor=g;b=b.url;d.isAbsolute(b)||(b=e+b);8===document.documentMode?(a.type="tile",a.src=b):(a.setAttribute("type",
"tile"),a.setAttribute("src",b))},update:function(){}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,g){a.animationFinished=!1;var f=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(f=(f=f.getAttribute("transform"))?String(f).substring(10,
f.length-1):"0,0",f=f.split(", ").join(" "),f=f.split(" ").join(","),0===f&&(f="0,0")):f=Number(f.getAttribute(b));c={obj:a,frame:0,attribute:b,from:f,to:c,time:e,effect:g};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,g=c.frame+1,f=c.obj,h=c.attribute,k,l,m;if(g<=e){c.frame++;if("translate"==h){k=c.from.split(",");h=Number(k[0]);k=Number(k[1]);isNaN(k)&&(k=0);l=c.to.split(",");m=Number(l[0]);l=Number(l[1]);
m=0===m-h?m:Math.round(d[c.effect](0,g,h,m-h,e));c=0===l-k?l:Math.round(d[c.effect](0,g,k,l-k,e));h="transform";if(isNaN(m)||isNaN(c))continue;c="translate("+m+","+c+")"}else l=Number(c.from),k=Number(c.to),m=k-l,c=d[c.effect](0,g,l,m,e),isNaN(c)&&(c=k),0===m&&this.animations.splice(a,1);this.setAttr(f,h,c)}else"translate"==h?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),f.translate(m,l)):(k=Number(c.to),this.setAttr(f,h,k)),f.animationFinished=!0,this.animations.splice(a,1)}},getBBox:function(a){if(a=
a.node)try{return a.getBBox()}catch(b){}return{width:0,height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,g){var f=a.node,h=a.clipPath;h&&this.D.remove(h);var k=f.parentNode;k&&(f=document.createElementNS(d.SVG_NS,"clipPath"),h=d.getUniqueId(),f.setAttribute("id",h),this.D.rect(b,c,e,g,0,0,f),k.appendChild(f),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+h+")"),this.clipPathC++,
a.clipPath=f)},text:function(a,b,c){var e=new d.AmDObject("text",this.D);a=String(a).split("\n");var g=d.removePx(b["font-size"]),f;for(f=0;f<a.length;f++){var h=this.create(null,"tspan");h.appendChild(document.createTextNode(a[f]));h.setAttribute("y",(g+2)*f+Math.round(g/2));h.setAttribute("x",0);e.node.appendChild(h)}e.node.setAttribute("y",Math.round(g/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},
move:function(a,b,c,d){isNaN(b)&&(b=0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";d&&(b=b+" scale("+d+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),d="rotate("+b+")";c&&(d=c+" "+d);this.setAttr(a,"transform",d)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var g=a.node,f=a.grad;
f&&this.D.remove(f);b=document.createElementNS(d.SVG_NS,b);f=d.getUniqueId();b.setAttribute("id",f);if(!isNaN(e)){var h=0,k=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?h=100:0===e&&(k=100);b.setAttribute("x1",h+"%");b.setAttribute("x2",k+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)h=document.createElementNS(d.SVG_NS,"stop"),k=100*e/(c.length-1),0===e&&(k=0),h.setAttribute("offset",k+"%"),h.setAttribute("stop-color",c[e]),b.appendChild(h);g.parentNode.appendChild(b);
c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+c);g.setAttribute("fill","url("+c+f+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var g=a.node;isNaN(c)&&(c=1);var f=a.patternNode;f&&this.D.remove(f);var f=document.createElementNS(d.SVG_NS,"pattern"),h=d.getUniqueId(),k=b;b.url&&(k=b.url);d.isAbsolute(k)||-1!=k.indexOf("data:image")||(k=e+k);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&
(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var n=-Math.random()*Number(b.randomY);isNaN(n)||(m=n);f.setAttribute("id",h);f.setAttribute("width",e);f.setAttribute("height",l);f.setAttribute("patternUnits","userSpaceOnUse");f.setAttribute("xlink:href",k);b.color&&(n=document.createElementNS(d.SVG_NS,"rect"),n.setAttributeNS(null,"height",e),n.setAttributeNS(null,"width",l),n.setAttributeNS(null,"fill",b.color),f.appendChild(n));this.D.image(k,0,0,e,l,f).translate(c,
m);k="#";d.baseHref&&!d.isIE&&(k=this.removeTarget(window.location.href)+k);g.setAttribute("fill","url("+k+h+")");a.patternNode=f;g.parentNode.appendChild(f)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderThickness=
this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.accessibleLabel="[[title]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=
!1;this.showEntries=!0;this.labelDx=0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,g=a.divRealHeight,f=this.div,h=this.legendData;this.data&&(h=this.combineLegend?this.legendData.concat(this.data):
this.data);isNaN(this.fontSize)&&(this.fontSize=a.fontSize);this.maxColumnsReal=this.maxColumns;if("right"==b||"left"==b)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var k=a.autoMarginOffset;"bottom"==b?(this.marginBottom=k,this.marginTop=0):(this.marginTop=k,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==
b?(c=f.offsetWidth,g=f.offsetHeight,f.clientHeight&&(c=f.clientWidth,g=f.clientHeight)):(isNaN(c)||(f.style.width=c+"px"),f.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",f.appendChild(b.container),b.width=c,b.height=g,b.setSize(c,g),b.addDefs(a)):b=new d.AmDraw(f,c,g,a);this.container=b;this.lx=0;this.ly=8;g=this.markerSize;g>this.fontSize&&(this.ly=g/2-1);0<g&&(this.lx+=g+this.markerLabelGap);this.titleWidth=0;if(g=this.title)g=
d.text(this.container,g,this.color,a.fontFamily,this.fontSize,"start",!0),d.setCN(a,g,"legend-title"),g.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=g.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<h.length;a++)this.createEntry(h[a]);for(a=this.index=0;a<h.length;a++)this.createValue(h[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+
this.titleWidth,c=this.marginRight,e=this.marginTop,g=this.marginBottom,f=this.horizontalGap,h=this.div,k=this.divWidth,l=this.maxColumnsReal,m=this.verticalGap,n=this.spacing,q=k-c-b,p=0,t=0,r=this.container;this.set&&this.set.remove();var w=r.set();this.set=w;var z=r.set();w.push(z);var x=this.entries,u,A;for(A=0;A<x.length;A++){u=x[A].getBBox();var y=u.width;y>p&&(p=y);u=u.height;u>t&&(t=u)}var y=t=0,B=f,D=0,C=0;for(A=0;A<x.length;A++){var I=x[A];this.reversedOrder&&(I=x[x.length-A-1]);u=I.getBBox();
var H;this.equalWidths?H=y*(p+n+this.markerLabelGap):(H=B,B=B+u.width+f+n);H+u.width>q&&0<A&&0!==y&&(t++,H=y=0,B=H+u.width+f+n,D=D+C+m,C=0);u.height>C&&(C=u.height);I.translate(H,D);y++;!isNaN(l)&&y>=l&&(y=0,t++,D=D+C+m,B=f,C=0);z.push(I)}u=z.getBBox();l=u.height+2*m-1;"left"==a||"right"==a?(n=u.width+2*f,k=n+b+c,h.style.width=k+"px",this.ieW=k):n=k-b-c-1;c=d.polygon(this.container,[0,n,n,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,
c,"legend-bg");w.push(c);w.translate(b,e);c.toBack();b=f;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=f+(n-u.width)/2:"right"==this.align&&(b=f+n-u.width);z.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);e=l+e+g+1;0>e&&(e=0);"absolute"!=a&&"outside"!=a&&e>this.chart.divRealHeight&&(h.style.top="0px");h.style.height=Math.round(e)+"px";r.setSize(this.divWidth,e)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this,c=b.chart,e=b.useGraphSettings,
g=a.markerType;g&&(e=!1);a.legendEntryWidth=b.markerSize;g||(g=b.markerType);var f=a.color,h=a.alpha;a.legendKeyColor&&(f=a.legendKeyColor());a.legendKeyAlpha&&(h=a.legendKeyAlpha());var k;!0===a.hidden&&(k=f=b.markerDisabledColor);var l=a.pattern,m,n=a.customMarker;n||(n=b.customMarker);var q=b.container,p=b.markerSize,t=0,r=0,w=p/2;if(e){e=a.type;b.switchType=void 0;if("line"==e||"step"==e||"smoothedLine"==e||"ohlc"==e)m=q.set(),a.hidden||(f=a.lineColorR,k=a.bulletBorderColorR),t=d.line(q,[0,2*
p],[p/2,p/2],f,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(c,t,"graph-stroke"),m.push(t),a.bullet&&(a.hidden||(f=a.bulletColorR),t=d.bullet(q,a.bullet,a.bulletSize,f,a.bulletAlpha,a.bulletBorderThickness,k,a.bulletBorderAlpha))&&(d.setCN(c,t,"graph-bullet"),t.translate(p+1,p/2),m.push(t)),w=0,t=p,r=p/3;else{a.getGradRotation&&(m=a.getGradRotation(),0===m&&(m=180));t=a.fillColorsR;!0===a.hidden&&(t=f);if(m=b.createMarker("rectangle",t,a.fillAlphas,a.lineThickness,f,a.lineAlpha,m,l,a.dashLength))w=
p,m.translate(w,p/2);t=p}d.setCN(c,m,"graph-"+e);d.setCN(c,m,"graph-"+a.id)}else if(n)m=q.image(n,0,0,p,p);else{var z;isNaN(b.gradientRotation)||(z=180+b.gradientRotation);(m=b.createMarker(g,f,h,void 0,void 0,void 0,z,l))&&m.translate(p/2,p/2)}d.setCN(c,m,"legend-marker");b.addListeners(m,a);q=q.set([m]);b.switchable&&a.switchable&&q.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(c,q,"legend-item-"+a.id);d.setCN(c,q,a.className,!0);k=b.switchType;var x;k&&"none"!=k&&0<p&&("x"==k?(x=b.createX(),
x.translate(p/2,p/2)):x=b.createV(),x.dItem=a,!0!==a.hidden?"x"==k?x.hide():x.show():"x"!=k&&x.hide(),b.switchable||x.hide(),b.addListeners(x,a),a.legendSwitch=x,q.push(x),d.setCN(c,x,"legend-switch"));k=b.color;a.showBalloon&&b.textClickEnabled&&void 0!==b.selectedColor&&(k=b.selectedColor);b.useMarkerColorForLabels&&!l&&(k=f);!0===a.hidden&&(k=b.markerDisabledColor);f=d.massReplace(b.labelText,{"[[title]]":a.title});void 0!==b.tabIndex&&(q.setAttr("tabindex",b.tabIndex),q.setAttr("role","menuitem"),
q.keyup(function(c){13==c.keyCode&&b.clickMarker(a,c)}));c.accessible&&b.accessibleLabel&&(l=d.massReplace(b.accessibleLabel,{"[[title]]":a.title}),c.makeAccessible(q,l));l=b.fontSize;m&&(p<=l&&(p=p/2+b.ly-l/2+(l+2-p)/2-r,m.translate(w,p),x&&x.translate(x.x,p)),a.legendEntryWidth=m.getBBox().width);var u;f&&(f=d.fixBrakes(f),a.legendTextReal=f,u=b.labelWidth,u=isNaN(u)?d.text(b.container,f,k,c.fontFamily,l,"start"):d.wrappedText(b.container,f,k,c.fontFamily,l,"start",!1,u,0),d.setCN(c,u,"legend-label"),
u.translate(b.lx+t,b.ly),q.push(u),b.labelDx=t,c=u.getBBox().width,b.maxLabelWidth<c&&(b.maxLabelWidth=c));b.entries[b.index]=q;a.legendEntry=b.entries[b.index];a.legendMarker=m;a.legendLabel=u;b.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,
b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor});this.dispatch("rollOverItem",a,b)},rollOutLabel:function(a,b){if(!a.hidden&&this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==
this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);
this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&!a.hideFromLegend){var g=b.maxLabelWidth;b.forceWidth&&(g=b.labelWidth);b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&a.legendLabel&&(g=a.legendLabel.getBBox().width);var f=g;if(b.valueText&&0<b.valueWidth){var h=b.color;b.useMarkerColorForValues&&(h=a.color,a.legendKeyColor&&(h=a.legendKeyColor()));!0===a.hidden&&(h=b.markerDisabledColor);var k=b.valueText,g=g+b.lx+b.labelDx+b.markerLabelGap+
b.valueWidth,l="end";"left"==b.valueAlign&&(g-=b.valueWidth,l="start");h=d.text(b.container,k,h,b.chart.fontFamily,c,l);d.setCN(e,h,"legend-value");h.translate(g,b.ly);b.entries[b.index].push(h);f+=b.valueWidth+2*b.markerLabelGap;h.dItem=a;b.valueLabels.push(h)}b.index++;e=b.markerSize;e<c+7&&(e=c+7,d.VML&&(e+=3));c=b.container.rect(a.legendEntryWidth,0,f,e,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,
c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,c,e,g,f,h,k,l){var m=this.markerSize,n=this.container;g||(g=this.markerBorderColor);g||
(g=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);return d.bullet(n,a,m,b,c,e,g,f,m,h,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var g=a[c],f=g.dItem;f.periodDataItem=void 0;f.periodPercentDataItem=void 0;var h=" ";if(e)f.value?g.text(f.value):g.text("");else{var k=null;if(void 0!==f.type){var k=f.currentDataItem,l=this.periodValueText;f.legendPeriodValueText&&
(l=f.legendPeriodValueText);f.legendPeriodValueTextR&&(l=f.legendPeriodValueTextR);k?(h=this.valueText,f.legendValueText&&(h=f.legendValueText),f.legendValueTextR&&(h=f.legendValueTextR),h=b.formatString(h,k)):l&&b.formatPeriodString&&(l=d.massReplace(l,{"[[title]]":f.title}),h=b.formatPeriodString(l,f))}else h=b.formatString(this.valueText,f);l=f;k&&(l=k);var m=this.valueFunction;m&&(h=m(l,h,b.periodDataItem));var n;this.useMarkerColorForLabels&&!k&&f.lastDataItem&&(k=f.lastDataItem);k?n=b.getBalloonColor(f,
k):f.legendKeyColor&&(n=f.legendKeyColor());f.legendColorFunction&&(n=f.legendColorFunction(l,h,f.periodDataItem,f.periodPercentDataItem));g.text(h);if(!f.pattern&&(this.useMarkerColorForValues&&g.setAttr("fill",n),this.useMarkerColorForLabels)){if(g=f.legendMarker)g.setAttr("fill",n),g.setAttr("stroke",n);(g=f.legendLabel)&&(f.hidden?g.setAttr("fill",this.markerDisabledColor):g.setAttr("fill",n))}}}},renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML=
"";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var c=b.getMilliseconds(),d=String(c);10>c&&(d="00"+c);10<=c&&100>c&&(d="0"+c);a=a.replace(/fff/g,d)}return a};d.extractPeriod=function(a){var b=d.stripNumbers(a),c=1;b!=a&&(c=Number(a.slice(0,a.indexOf(b))));return{period:b,count:c}};d.getDate=function(a,b,c){return a instanceof Date?d.newDate(a,c):b&&isNaN(a)?d.stringToDate(a,b):new Date(a)};d.daysInMonth=function(a){return(new Date(a.getYear(),a.getMonth()+
1,0)).getDate()};d.newDate=function(a,b){return b&&-1==b.indexOf("fff")?new Date(a):new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())};d.resetDateToMin=function(a,b,c,e){void 0===e&&(e=1);var g,f,h,k,l,m,n;d.useUTC?(g=a.getUTCFullYear(),f=a.getUTCMonth(),h=a.getUTCDate(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds(),a=a.getUTCDay()):(g=a.getFullYear(),f=a.getMonth(),h=a.getDate(),k=a.getHours(),l=
a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds(),a=a.getDay());switch(b){case "YYYY":g=Math.floor(g/c)*c;f=0;h=1;n=m=l=k=0;break;case "MM":f=Math.floor(f/c)*c;h=1;n=m=l=k=0;break;case "WW":h=a>=e?h-a+e:h-(7+a)+e;n=m=l=k=0;break;case "DD":n=m=l=k=0;break;case "hh":k=Math.floor(k/c)*c;n=m=l=0;break;case "mm":l=Math.floor(l/c)*c;n=m=0;break;case "ss":m=Math.floor(m/c)*c;n=0;break;case "fff":n=Math.floor(n/c)*c}d.useUTC?(a=new Date,a.setUTCFullYear(g,f,h),a.setUTCHours(k,l,m,n)):a=new Date(g,f,h,
k,l,m,n);return a};d.getPeriodDuration=function(a,b){void 0===b&&(b=1);var c;switch(a){case "YYYY":c=316224E5;break;case "MM":c=26784E5;break;case "WW":c=6048E5;break;case "DD":c=864E5;break;case "hh":c=36E5;break;case "mm":c=6E4;break;case "ss":c=1E3;break;case "fff":c=1}return c*b};d.intervals={s:{nextInterval:"ss",contains:1E3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:Infinity,count:3}};
d.getMaxInterval=function(a,b){var c=d.intervals;return a>=c[b].contains?(a=Math.round(a/c[b].contains),b=c[b].nextInterval,d.getMaxInterval(a,b)):"ss"==b?c[b].nextInterval:b};d.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");d.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" ");d.monthNames="January February March April May June July August September October November December".split(" ");d.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
d.getWeekNumber=function(a){a=new Date(a);a.setHours(0,0,0);a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864E5+1)/7)};d.stringToDate=function(a,b){var c={},e=[{pattern:"YYYY",period:"year"},{pattern:"YY",period:"year"},{pattern:"MM",period:"month"},{pattern:"M",period:"month"},{pattern:"DD",period:"date"},{pattern:"D",period:"date"},{pattern:"JJ",period:"hours"},{pattern:"J",period:"hours"},{pattern:"HH",period:"hours"},{pattern:"H",period:"hours"},
{pattern:"KK",period:"hours"},{pattern:"K",period:"hours"},{pattern:"LL",period:"hours"},{pattern:"L",period:"hours"},{pattern:"NN",period:"minutes"},{pattern:"N",period:"minutes"},{pattern:"SS",period:"seconds"},{pattern:"S",period:"seconds"},{pattern:"QQQ",period:"milliseconds"},{pattern:"QQ",period:"milliseconds"},{pattern:"Q",period:"milliseconds"}],g=!0,f=b.indexOf("AA");-1!=f&&(a.substr(f,2),"pm"==a.toLowerCase&&(g=!1));var f=b,h,k,l;for(l=0;l<e.length;l++)k=e[l].period,c[k]=0,"date"==k&&(c[k]=
1);for(l=0;l<e.length;l++)if(h=e[l].pattern,k=e[l].period,-1!=b.indexOf(h)){var m=d.getFromDateString(h,a,f);b=b.replace(h,"");if("KK"==h||"K"==h||"LL"==h||"L"==h)g||(m+=12);c[k]=m}d.useUTC?(e=new Date,e.setUTCFullYear(c.year,c.month,c.date),e.setUTCHours(c.hours,c.minutes,c.seconds,c.milliseconds)):e=new Date(c.year,c.month,c.date,c.hours,c.minutes,c.seconds,c.milliseconds);return e};d.getFromDateString=function(a,b,c){if(void 0!==b)return c=c.indexOf(a),b=String(b),b=b.substr(c,a.length),"0"==b.charAt(0)&&
(b=b.substr(1,b.length-1)),b=Number(b),isNaN(b)&&(b=0),-1!=a.indexOf("M")&&b--,b};d.formatDate=function(a,b,c){c||(c=d);var e,g,f,h,k,l,m,n,q=d.getWeekNumber(a);d.useUTC?(e=a.getUTCFullYear(),g=a.getUTCMonth(),f=a.getUTCDate(),h=a.getUTCDay(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds()):(e=a.getFullYear(),g=a.getMonth(),f=a.getDate(),h=a.getDay(),k=a.getHours(),l=a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds());var p=String(e).substr(2,2),t="0"+h;b=b.replace(/W/g,
q);q=k;24==q&&(q=0);var r=q;10>r&&(r="0"+r);b=b.replace(/JJ/g,r);b=b.replace(/J/g,q);r=k;0===r&&(r=24,-1!=b.indexOf("H")&&(f--,0===f&&(e=new Date(a),e.setDate(e.getDate()-1),g=e.getMonth(),f=e.getDate(),e=e.getFullYear())));a=g+1;9>g&&(a="0"+a);q=f;10>f&&(q="0"+f);var w=r;10>w&&(w="0"+w);b=b.replace(/HH/g,w);b=b.replace(/H/g,r);r=k;11<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/KK/g,w);b=b.replace(/K/g,r);r=k;0===r&&(r=12);12<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/LL/g,w);b=b.replace(/L/g,r);
r=l;10>r&&(r="0"+r);b=b.replace(/NN/g,r);b=b.replace(/N/g,l);l=m;10>l&&(l="0"+l);b=b.replace(/SS/g,l);b=b.replace(/S/g,m);m=n;10>m?m="00"+m:100>m&&(m="0"+m);l=n;10>l&&(l="00"+l);b=b.replace(/A/g,"@A@");b=b.replace(/QQQ/g,m);b=b.replace(/QQ/g,l);b=b.replace(/Q/g,n);b=b.replace(/YYYY/g,"@IIII@");b=b.replace(/YY/g,"@II@");b=b.replace(/MMMM/g,"@XXXX@");b=b.replace(/MMM/g,"@XXX@");b=b.replace(/MM/g,"@XX@");b=b.replace(/M/g,"@X@");b=b.replace(/DD/g,"@RR@");b=b.replace(/D/g,"@R@");b=b.replace(/EEEE/g,"@PPPP@");
b=b.replace(/EEE/g,"@PPP@");b=b.replace(/EE/g,"@PP@");b=b.replace(/E/g,"@P@");b=b.replace(/@IIII@/g,e);b=b.replace(/@II@/g,p);b=b.replace(/@XXXX@/g,c.monthNames[g]);b=b.replace(/@XXX@/g,c.shortMonthNames[g]);b=b.replace(/@XX@/g,a);b=b.replace(/@X@/g,g+1);b=b.replace(/@RR@/g,q);b=b.replace(/@R@/g,f);b=b.replace(/@PPPP@/g,c.dayNames[h]);b=b.replace(/@PPP@/g,c.shortDayNames[h]);b=b.replace(/@PP@/g,t);b=b.replace(/@P@/g,h);return b=12>k?b.replace(/@A@/g,c.amString):b.replace(/@A@/g,c.pmString)};d.changeDate=
function(a,b,c,e,g){if(d.useUTC)return d.changeUTCDate(a,b,c,e,g);var f=-1;void 0===e&&(e=!0);void 0===g&&(g=!1);!0===e&&(f=1);switch(b){case "YYYY":a.setFullYear(a.getFullYear()+c*f);e||g||a.setDate(a.getDate()+1);break;case "MM":b=a.getMonth();a.setMonth(a.getMonth()+c*f);a.getMonth()>b+c*f&&a.setDate(a.getDate()-1);e||g||a.setDate(a.getDate()+1);break;case "DD":a.setDate(a.getDate()+c*f);break;case "WW":a.setDate(a.getDate()+c*f*7);break;case "hh":a.setHours(a.getHours()+c*f);break;case "mm":a.setMinutes(a.getMinutes()+
c*f);break;case "ss":a.setSeconds(a.getSeconds()+c*f);break;case "fff":a.setMilliseconds(a.getMilliseconds()+c*f)}return a};d.changeUTCDate=function(a,b,c,d,g){var f=-1;void 0===d&&(d=!0);void 0===g&&(g=!1);!0===d&&(f=1);switch(b){case "YYYY":a.setUTCFullYear(a.getUTCFullYear()+c*f);d||g||a.setUTCDate(a.getUTCDate()+1);break;case "MM":b=a.getUTCMonth();a.setUTCMonth(a.getUTCMonth()+c*f);a.getUTCMonth()>b+c*f&&a.setUTCDate(a.getUTCDate()-1);d||g||a.setUTCDate(a.getUTCDate()+1);break;case "DD":a.setUTCDate(a.getUTCDate()+
c*f);break;case "WW":a.setUTCDate(a.getUTCDate()+c*f*7);break;case "hh":a.setUTCHours(a.getUTCHours()+c*f);break;case "mm":a.setUTCMinutes(a.getUTCMinutes()+c*f);break;case "ss":a.setUTCSeconds(a.getUTCSeconds()+c*f);break;case "fff":a.setUTCMilliseconds(a.getUTCMilliseconds()+c*f)}return a}})();





(function(){var e=window.AmCharts;e.AmRectangularChart=e.Class({inherits:e.AmCoordinateChart,construct:function(a){e.AmRectangularChart.base.construct.call(this,a);this.theme=a;this.createEvents("zoomed","changed");this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20;this.depth3D=this.angle=0;this.plotAreaFillColors="#FFFFFF";this.plotAreaFillAlphas=0;this.plotAreaBorderColor="#000000";this.plotAreaBorderAlpha=0;this.maxZoomFactor=20;this.zoomOutButtonImageSize=19;this.zoomOutButtonImage=
"lens";this.zoomOutText="Show all";this.zoomOutButtonColor="#e5e5e5";this.zoomOutButtonAlpha=0;this.zoomOutButtonRollOverAlpha=1;this.zoomOutButtonPadding=8;this.trendLines=[];this.autoMargins=!0;this.marginsUpdated=!1;this.autoMarginOffset=10;e.applyTheme(this,a,"AmRectangularChart")},initChart:function(){e.AmRectangularChart.base.initChart.call(this);this.updateDxy();!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),this.drawGraphs=!1);this.processScrollbars();this.updateMargins();this.updatePlotArea();
this.updateScrollbars();this.updateTrendLines();this.updateChartCursor();this.updateValueAxes();this.scrollbarOnly||this.updateGraphs()},drawChart:function(){e.AmRectangularChart.base.drawChart.call(this);this.drawPlotArea();if(e.ifArray(this.chartData)){var a=this.chartCursor;a&&a.draw()}},resetMargins:function(){var a={},b;if("xy"==this.type){var c=this.xAxes,d=this.yAxes;for(b=0;b<c.length;b++){var g=c[b];g.ignoreAxisWidth||(g.setOrientation(!0),g.fixAxisPosition(),a[g.position]=!0)}for(b=0;b<
d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(!1),c.fixAxisPosition(),a[c.position]=!0)}else{d=this.valueAxes;for(b=0;b<d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(this.rotate),c.fixAxisPosition(),a[c.position]=!0);(b=this.categoryAxis)&&!b.ignoreAxisWidth&&(b.setOrientation(!this.rotate),b.fixAxisPosition(),b.fixAxisPosition(),a[b.position]=!0)}a.left&&(this.marginLeft=0);a.right&&(this.marginRight=0);a.top&&(this.marginTop=0);a.bottom&&(this.marginBottom=0);this.fixMargins=
a},measureMargins:function(){var a=this.valueAxes,b,c=this.autoMarginOffset,d=this.fixMargins,g=this.realWidth,h=this.realHeight,f=c,e=c,l=g;b=h;var m;for(m=0;m<a.length;m++)a[m].handleSynchronization(),b=this.getAxisBounds(a[m],f,l,e,b),f=Math.round(b.l),l=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);if(a=this.categoryAxis)b=this.getAxisBounds(a,f,l,e,b),f=Math.round(b.l),l=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);d.left&&f<c&&(this.marginLeft=Math.round(-f+c),!isNaN(this.minMarginLeft)&&
this.marginLeft<this.minMarginLeft&&(this.marginLeft=this.minMarginLeft));d.right&&l>=g-c&&(this.marginRight=Math.round(l-g+c),!isNaN(this.minMarginRight)&&this.marginRight<this.minMarginRight&&(this.marginRight=this.minMarginRight));d.top&&e<c+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-e+c+this.titleHeight),!isNaN(this.minMarginTop)&&this.marginTop<this.minMarginTop&&(this.marginTop=this.minMarginTop));d.bottom&&b>h-c&&(this.marginBottom=Math.round(this.marginBottom+b-h+c),!isNaN(this.minMarginBottom)&&
this.marginBottom<this.minMarginBottom&&(this.marginBottom=this.minMarginBottom));this.initChart()},getAxisBounds:function(a,b,c,d,g){if(!a.ignoreAxisWidth){var h=a.labelsSet,f=a.tickLength;a.inside&&(f=0);if(h)switch(h=a.getBBox(),a.position){case "top":a=h.y;d>a&&(d=a);break;case "bottom":a=h.y+h.height;g<a&&(g=a);break;case "right":a=h.x+h.width+f+3;c<a&&(c=a);break;case "left":a=h.x-f,b>a&&(b=a)}}return{l:b,t:d,r:c,b:g}},drawZoomOutButton:function(){var a=this;if(!a.zbSet){var b=a.container.set();
a.zoomButtonSet.push(b);var c=a.color,d=a.fontSize,g=a.zoomOutButtonImageSize,h=a.zoomOutButtonImage.replace(/\.[a-z]*$/i,""),f=a.langObj.zoomOutText||a.zoomOutText,k=a.zoomOutButtonColor,l=a.zoomOutButtonAlpha,m=a.zoomOutButtonFontSize,p=a.zoomOutButtonPadding;isNaN(m)||(d=m);(m=a.zoomOutButtonFontColor)&&(c=m);var m=a.zoomOutButton,n;m&&(m.fontSize&&(d=m.fontSize),m.color&&(c=m.color),m.backgroundColor&&(k=m.backgroundColor),isNaN(m.backgroundAlpha)||(a.zoomOutButtonRollOverAlpha=m.backgroundAlpha));
var u=m=0,u=a.pathToImages;if(h){if(e.isAbsolute(h)||void 0===u)u="";n=a.container.image(u+h+a.extension,0,0,g,g);e.setCN(a,n,"zoom-out-image");b.push(n);n=n.getBBox();m=n.width+5}void 0!==f&&(c=e.text(a.container,f,c,a.fontFamily,d,"start"),e.setCN(a,c,"zoom-out-label"),d=c.getBBox(),u=n?n.height/2-3:d.height/2,c.translate(m,u),b.push(c));n=b.getBBox();c=1;e.isModern||(c=0);k=e.rect(a.container,n.width+2*p+5,n.height+2*p-2,k,1,1,k,c);k.setAttr("opacity",l);k.translate(-p,-p);e.setCN(a,k,"zoom-out-bg");
b.push(k);k.toBack();a.zbBG=k;n=k.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-n.width+p,a.marginTopReal+p);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();a.clickZB()});for(l=0;l<b.length;l++)b[l].attr({cursor:"pointer"});void 0!==a.zoomOutButtonTabIndex&&(b.setAttr("tabindex",a.zoomOutButtonTabIndex),b.setAttr("role","menuitem"),b.keyup(function(b){13==
b.keyCode&&a.clickZB()}));a.zbSet=b}},rollOverZB:function(){this.rolledOverZB=!0;this.zbBG.setAttr("opacity",this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.rolledOverZB=!1;this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.rolledOverZB=!1;this.zoomOut()},zoomOut:function(){this.zoomOutValueAxes()},drawPlotArea:function(){var a=this.dx,b=this.dy,c=this.marginLeftReal,d=this.marginTopReal,g=this.plotAreaWidth-1,h=this.plotAreaHeight-1,f=this.plotAreaFillColors,
k=this.plotAreaFillAlphas,l=this.plotAreaBorderColor,m=this.plotAreaBorderAlpha;"object"==typeof k&&(k=k[0]);f=e.polygon(this.container,[0,g,g,0,0],[0,0,h,h,0],f,k,1,l,m,this.plotAreaGradientAngle);e.setCN(this,f,"plot-area");f.translate(c+a,d+b);this.set.push(f);0!==a&&0!==b&&(f=this.plotAreaFillColors,"object"==typeof f&&(f=f[0]),f=e.adjustLuminosity(f,-.15),g=e.polygon(this.container,[0,a,g+a,g,0],[0,b,b,0,0],f,k,1,l,m),e.setCN(this,g,"plot-area-bottom"),g.translate(c,d+h),this.set.push(g),a=e.polygon(this.container,
[0,0,a,a,0],[0,h,h+b,b,0],f,k,1,l,m),e.setCN(this,a,"plot-area-left"),a.translate(c,d),this.set.push(a));(c=this.bbset)&&this.scrollbarOnly&&c.remove()},updatePlotArea:function(){var a=this.updateWidth(),b=this.updateHeight(),c=this.container;this.realWidth=a;this.realWidth=b;c&&this.container.setSize(a,b);var c=this.marginLeftReal,d=this.marginTopReal,a=a-c-this.marginRightReal-this.dx,b=b-d-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b);
this.plotBalloonsSet.translate(c,d)},updateDxy:function(){this.dx=Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180));this.dy=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180));this.d3x=Math.round(this.columnSpacing3D*Math.cos(this.angle*Math.PI/180));this.d3y=Math.round(-this.columnSpacing3D*Math.sin(this.angle*Math.PI/180))},updateMargins:function(){var a=this.getTitleHeight();this.titleHeight=a;this.marginTopReal=this.marginTop-this.dy;this.fixMargins&&!this.fixMargins.top&&(this.marginTopReal+=
a);this.marginBottomReal=this.marginBottom;this.marginLeftReal=this.marginLeft;this.marginRightReal=this.marginRight},updateValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b];this.setAxisRenderers(c);this.updateObjectSize(c)}},setAxisRenderers:function(a){a.axisRenderer=e.RecAxis;a.guideFillRenderer=e.RecFill;a.axisItemRenderer=e.RecItem;a.marginsChanged=!0},updateGraphs:function(){var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.index=b;c.rotate=this.rotate;this.updateObjectSize(c)}},
updateObjectSize:function(a){a.width=this.plotAreaWidth-1;a.height=this.plotAreaHeight-1;a.x=this.marginLeftReal;a.y=this.marginTopReal;a.dx=this.dx;a.dy=this.dy},updateChartCursor:function(){var a=this.chartCursor;a&&(a=e.processObject(a,e.ChartCursor,this.theme),this.updateObjectSize(a),this.addChartCursor(a),a.chart=this)},processScrollbars:function(){var a=this.chartScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),this.addChartScrollbar(a))},updateScrollbars:function(){},removeChartCursor:function(){e.callMethod("destroy",
[this.chartCursor]);this.chartCursor=null},zoomTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b];c.valueAxis.recalculateToPercents?c.set&&c.set.hide():(c.x=this.marginLeftReal,c.y=this.marginTopReal,c.draw())}},handleCursorValueZoom:function(){},addTrendLine:function(a){this.trendLines.push(a)},zoomOutValueAxes:function(){for(var a=this.valueAxes,b=0;b<a.length;b++)a[b].zoomOut()},removeTrendLine:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--)b[c]==a&&
b.splice(c,1)},adjustMargins:function(a,b){var c=a.position,d=a.scrollbarHeight+a.offset;a.enabled&&("top"==c?b?this.marginLeftReal+=d:this.marginTopReal+=d:b?this.marginRightReal+=d:this.marginBottomReal+=d)},getScrollbarPosition:function(a,b,c){var d="bottom",g="top";a.oppositeAxis||(g=d,d="top");a.position=b?"bottom"==c||"left"==c?d:g:"top"==c||"right"==c?d:g},updateChartScrollbar:function(a,b){if(a){a.rotate=b;var c=this.marginTopReal,d=this.marginLeftReal,g=a.scrollbarHeight,h=this.dx,f=this.dy,
e=a.offset;"top"==a.position?b?(a.y=c,a.x=d-g-e):(a.y=c-g+f-e,a.x=d+h):b?(a.y=c+f,a.x=d+this.plotAreaWidth+h+e):(a.y=c+this.plotAreaHeight+e,a.x=this.marginLeftReal)}},showZB:function(a){var b=this.zbSet;a&&(b=this.zoomOutText,""!==b&&b&&this.drawZoomOutButton());if(b=this.zbSet)this.zoomButtonSet.push(b),a?b.show():b.hide(),this.rollOutZB()},handleReleaseOutside:function(a){e.AmRectangularChart.base.handleReleaseOutside.call(this,a);(a=this.chartCursor)&&a.handleReleaseOutside&&a.handleReleaseOutside()},
handleMouseDown:function(a){e.AmRectangularChart.base.handleMouseDown.call(this,a);var b=this.chartCursor;b&&b.handleMouseDown&&!this.rolledOverZB&&b.handleMouseDown(a)},update:function(){e.AmRectangularChart.base.update.call(this);this.chartCursor&&this.chartCursor.update&&this.chartCursor.update()},handleScrollbarValueZoom:function(a){this.relativeZoomValueAxes(a.target.valueAxes,a.relativeStart,a.relativeEnd);this.zoomAxesAndGraphs()},zoomValueScrollbar:function(a){if(a&&a.enabled){var b=a.valueAxes[0],
c=b.relativeStart,d=b.relativeEnd;b.reversed&&(d=1-c,c=1-b.relativeEnd);a.percentZoom(c,d)}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){var a=this.valueAxes,b;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);a=this.graphs;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);(b=this.chartCursor)&&b.clearSelection();this.zoomTrendLines()}},handleValueAxisZoomReal:function(a,b){var c=a.relativeStart,d=a.relativeEnd;if(c>d)var g=c,c=d,d=g;this.relativeZoomValueAxes(b,c,d);this.updateAfterValueZoom()},
updateAfterValueZoom:function(){this.zoomAxesAndGraphs();this.zoomScrollbar()},relativeZoomValueAxes:function(a,b,c){this.hideBalloonReal();b=e.fitToBounds(b,0,1);c=e.fitToBounds(c,0,1);if(b>c){var d=b;b=c;c=d}var d=1/this.maxZoomFactor,g=e.getDecimals(d)+4;c-b<d&&(c=b+(c-b)/2,b=c-d/2,c+=d/2,1<c&&(b-=c-1,c=1),0>b&&(b=0,c=d));b=e.roundTo(b,g);c=e.roundTo(c,g);d=!1;if(a){for(g=0;g<a.length;g++){var h=a[g].zoomToRelativeValues(b,c,!0);h&&(d=h)}this.showZB()}return d},addChartCursor:function(a){e.callMethod("destroy",
[this.chartCursor]);a&&(this.listenTo(a,"moved",this.handleCursorMove),this.listenTo(a,"zoomed",this.handleCursorZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted),this.listenTo(a,"panning",this.handleCursorPanning),this.listenTo(a,"onHideCursor",this.handleCursorHide));this.chartCursor=a},handleCursorChange:function(){},handleCursorMove:function(a){var b,c=this.valueAxes;for(b=0;b<c.length;b++)if(!a.panning){var d=c[b];d&&d.showBalloon&&d.showBalloon(a.x,a.y)}},handleCursorZoom:function(a){if(this.skipZoomed)this.skipZoomed=
!1;else{var b=this.startX0,c=this.endX0,d=this.endY0,g=this.startY0,e=a.startX,f=a.endX,k=a.startY,l=a.endY;this.startX0=this.endX0=this.startY0=this.endY0=NaN;this.handleCursorZoomReal(b+e*(c-b),b+f*(c-b),g+k*(d-g),g+l*(d-g),a)}},handleCursorHide:function(){var a,b=this.valueAxes;for(a=0;a<b.length;a++)b[a].hideBalloon();b=this.graphs;for(a=0;a<b.length;a++)b[a].hideBalloonReal()}})})();(function(){var e=window.AmCharts;e.AmSerialChart=e.Class({inherits:e.AmRectangularChart,construct:function(a){this.type="serial";e.AmSerialChart.base.construct.call(this,a);this.cname="AmSerialChart";this.theme=a;this.columnSpacing=5;this.columnSpacing3D=0;this.columnWidth=.8;var b=new e.CategoryAxis(a);b.chart=this;this.categoryAxis=b;this.zoomOutOnDataUpdate=!0;this.mouseWheelZoomEnabled=this.mouseWheelScrollEnabled=this.rotate=this.skipZoom=!1;this.minSelectedTime=0;e.applyTheme(this,a,this.cname)},
initChart:function(){e.AmSerialChart.base.initChart.call(this);this.updateCategoryAxis(this.categoryAxis,this.rotate,"categoryAxis");if(this.dataChanged)this.parseData();else this.onDataUpdated();this.drawGraphs=!0},onDataUpdated:function(){var a=this.countColumns(),b=this.chartData,c=this.graphs,d;for(d=0;d<c.length;d++){var g=c[d];g.data=b;g.columnCount=a}0<b.length&&(this.firstTime=this.getStartTime(b[0].time),this.lastTime=this.getEndTime(b[b.length-1].time));this.drawChart();this.autoMargins&&
!this.marginsUpdated?(this.marginsUpdated=!0,this.measureMargins()):this.dispDUpd()},syncGrid:function(){if(this.synchronizeGrid){var a=this.valueAxes,b,c;if(0<a.length){var d=0;for(c=0;c<a.length;c++)b=a[c],d<b.gridCountReal&&(d=b.gridCountReal);var g=!1;for(c=0;c<a.length;c++)if(b=a[c],b.gridCountReal<d){var h=(d-b.gridCountReal)/2,f=g=h;0!==h-Math.round(h)&&(g-=.5,f+=.5);0<=b.min&&0>b.min-g*b.step&&(f+=g,g=0);0>=b.max&&0<b.max+f*b.step&&(g+=f,f=0);h=e.getDecimals(b.step);b.minimum=e.roundTo(b.min-
g*b.step,h);b.maximum=e.roundTo(b.max+f*b.step,h);b.setStep=b.step;g=b.strictMinMax=!0}g&&this.updateAfterValueZoom();for(c=0;c<a.length;c++)b=a[c],b.minimum=NaN,b.maximum=NaN,b.setStep=NaN,b.strictMinMax=!1}}},handleWheelReal:function(a,b){if(!this.wheelBusy){var c=this.categoryAxis,d=c.parseDates,g=c.minDuration(),e=1,f=1;this.mouseWheelZoomEnabled?b||(e=-1):b&&(e=-1);var k=this.chartCursor;if(k){var l=k.mouseX,k=k.mouseY;e!=f&&(l=this.rotate?k/this.plotAreaHeight:l/this.plotAreaWidth,e*=l,f*=1-
l);l=.05*(this.end-this.start);d&&(l=.05*(this.endTime-this.startTime)/g);1>l&&(l=1);e*=l;f*=l;if(!d||c.equalSpacing)e=Math.round(e),f=Math.round(f)}k=this.chartData.length;c=this.lastTime;l=this.firstTime;0>a?d?(k=this.endTime-this.startTime,d=this.startTime+e*g,g=this.endTime+f*g,0<f&&0<e&&g>=c&&(g=c,d=c-k),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<e&&this.end>=k-1&&(e=f=0),d=this.start+e,g=this.end+f,this.zoomToIndexes(d,g)):d?(k=this.endTime-this.startTime,d=this.startTime-e*g,g=this.endTime-
f*g,0<f&&0<e&&d<=l&&(d=l,g=l+k),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<e&&1>this.start&&(e=f=0),d=this.start-e,g=this.end-f,this.zoomToIndexes(d,g))}},validateData:function(a){this.marginsUpdated=!1;this.zoomOutOnDataUpdate&&!a&&(this.endTime=this.end=this.startTime=this.start=NaN);var b=a=!1,c=!1,d=this.chartScrollbar;d&&(d.dragging&&(a=!0,d.handleDragStop()),d.resizingRight&&(c=!0,d.rightDragStop()),d.resizingLeft&&(b=!0,d.leftDragStop()));e.AmSerialChart.base.validateData.call(this);
a&&d.handleDragStart();c&&d.rightDragStart();b&&d.leftDragStart()},drawChart:function(){if(0<this.realWidth&&0<this.realHeight){e.AmSerialChart.base.drawChart.call(this);var a=this.chartData;if(e.ifArray(a)){var b=this.chartScrollbar;!b||!this.marginsUpdated&&this.autoMargins||b.draw();(b=this.valueScrollbar)&&b.draw();var b=a.length-1,c,d;c=this.categoryAxis;if(c.parseDates&&!c.equalSpacing){if(c=this.startTime,d=this.endTime,isNaN(c)||isNaN(d))c=this.firstTime,d=this.lastTime}else{c=this.start;
d=this.end;if(isNaN(c)||isNaN(d))d=c=NaN;isNaN(c)&&(isNaN(this.startTime)||(c=this.getClosestIndex(a,"time",this.startTime,!0,0,a.length)));isNaN(d)&&(isNaN(this.endTime)||(d=this.getClosestIndex(a,"time",this.endTime,!1,0,a.length)));if(isNaN(c)||isNaN(d))c=0,d=b}this.endTime=this.startTime=this.end=this.start=void 0;this.zoom(c,d)}}else this.cleanChart()},cleanChart:function(){e.callMethod("destroy",[this.valueAxes,this.graphs,this.categoryAxis,this.chartScrollbar,this.chartCursor,this.valueScrollbar])},
updateCategoryAxis:function(a,b,c){a.chart=this;a.id=c;a.rotate=b;a.setOrientation(!this.rotate);a.init();this.setAxisRenderers(a);this.updateObjectSize(a)},updateValueAxes:function(){e.AmSerialChart.base.updateValueAxes.call(this);var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],d=this.rotate;c.rotate=d;c.setOrientation(d);d=this.categoryAxis;if(!d.startOnAxis||d.parseDates)c.expandMinMax=!0}},getStartTime:function(a){var b=this.categoryAxis;return e.resetDateToMin(new Date(a),b.minPeriod,
1,b.firstDayOfWeek).getTime()},getEndTime:function(a){var b=e.extractPeriod(this.categoryAxis.minPeriod);return e.changeDate(new Date(a),b.period,b.count,!0).getTime()-1},updateMargins:function(){e.AmSerialChart.base.updateMargins.call(this);var a=this.chartScrollbar;a&&(this.getScrollbarPosition(a,this.rotate,this.categoryAxis.position),this.adjustMargins(a,this.rotate));if(a=this.valueScrollbar)this.getScrollbarPosition(a,!this.rotate,this.valueAxes[0].position),this.adjustMargins(a,!this.rotate)},
updateScrollbars:function(){e.AmSerialChart.base.updateScrollbars.call(this);this.updateChartScrollbar(this.chartScrollbar,this.rotate);this.updateChartScrollbar(this.valueScrollbar,!this.rotate)},zoom:function(a,b){var c=this.categoryAxis;c.parseDates&&!c.equalSpacing?(this.timeZoom(a,b),isNaN(a)&&this.zoomOutValueAxes()):this.indexZoom(a,b);(c=this.chartCursor)&&(c.pan||c.hideCursorReal());this.updateLegendValues()},timeZoom:function(a,b){var c=this.maxSelectedTime;isNaN(c)||(b!=this.endTime&&b-
a>c&&(a=b-c),a!=this.startTime&&b-a>c&&(b=a+c));var d=this.minSelectedTime;if(0<d&&b-a<d){var g=Math.round(a+(b-a)/2),d=Math.round(d/2);a=g-d;b=g+d}d=this.chartData;g=this.categoryAxis;if(e.ifArray(d)&&(a!=this.startTime||b!=this.endTime)){var h=g.minDuration(),f=this.firstTime,k=this.lastTime;a||(a=f,isNaN(c)||(a=k-c));b||(b=k);a>k&&(a=k);b<f&&(b=f);a<f&&(a=f);b>k&&(b=k);b<a&&(b=a+h);b-a<h/5&&(b<k?b=a+h/5:a=b-h/5);this.startTime=a;this.endTime=b;c=d.length-1;h=this.getClosestIndex(d,"time",a,!0,
0,c);d=this.getClosestIndex(d,"time",b,!1,h,c);g.timeZoom(a,b);g.zoom(h,d);this.start=e.fitToBounds(h,0,c);this.end=e.fitToBounds(d,0,c);this.zoomAxesAndGraphs();this.zoomScrollbar();this.fixCursor();this.showZB();this.syncGrid();this.updateColumnsDepth();this.dispatchTimeZoomEvent()}},showZB:function(){var a,b=this.categoryAxis;b&&b.parseDates&&!b.equalSpacing&&(this.startTime>this.firstTime&&(a=!0),this.endTime<this.lastTime&&(a=!0));0<this.start&&(a=!0);this.end<this.chartData.length-1&&(a=!0);
if(b=this.valueAxes)b=b[0],isNaN(b.relativeStart)||(0!==e.roundTo(b.relativeStart,3)&&(a=!0),1!=e.roundTo(b.relativeEnd,3)&&(a=!0));e.AmSerialChart.base.showZB.call(this,a)},updateAfterValueZoom:function(){e.AmSerialChart.base.updateAfterValueZoom.call(this);this.updateColumnsDepth()},indexZoom:function(a,b){var c=this.maxSelectedSeries,d=!1;isNaN(c)||(b!=this.end&&b-a>c&&(a=b-c,d=!0),a!=this.start&&b-a>c&&(b=a+c,d=!0));if(d&&(d=this.chartScrollbar)&&d.dragger){var g=d.dragger.getBBox();d.maxWidth=
g.width;d.maxHeight=g.height}if(a!=this.start||b!=this.end)d=this.chartData.length-1,isNaN(a)&&(a=0,isNaN(c)||(a=d-c)),isNaN(b)&&(b=d),b<a&&(b=a),b>d&&(b=d),a>d&&(a=d-1),0>a&&(a=0),this.start=a,this.end=b,this.categoryAxis.zoom(a,b),this.zoomAxesAndGraphs(),this.zoomScrollbar(),this.fixCursor(),0!==a||b!=this.chartData.length-1?this.showZB(!0):this.showZB(!1),this.syncGrid(),this.updateColumnsDepth(),this.dispatchIndexZoomEvent()},updateGraphs:function(){e.AmSerialChart.base.updateGraphs.call(this);
var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.columnWidthReal=this.columnWidth;c.categoryAxis=this.categoryAxis;e.isString(c.fillToGraph)&&(c.fillToGraph=this.graphsById[c.fillToGraph])}},zoomAxesAndGraphs:function(){e.AmSerialChart.base.zoomAxesAndGraphs.call(this);this.updateColumnsDepth()},updateColumnsDepth:function(){if(0!==this.depth3D||0!==this.angle){var a,b=this.graphs,c;this.columnsArray=[];for(a=0;a<b.length;a++){c=b[a];var d=c.columnsArray;if(d){var g;for(g=0;g<d.length;g++)this.columnsArray.push(d[g])}}this.columnsArray.sort(this.compareDepth);
b=this.columnsSet;if(0<this.columnsArray.length){d=this.container.set();this.columnSet.push(d);for(a=0;a<this.columnsArray.length;a++)d.push(this.columnsArray[a].column.set);c&&d.translate(c.x,c.y);this.columnsSet=d}e.remove(b)}},compareDepth:function(a,b){return a.depth>b.depth?1:-1},zoomScrollbar:function(){var a=this.chartScrollbar,b=this.categoryAxis;if(a){if(!this.zoomedByScrollbar){var c=a.dragger;c&&c.stop()}this.zoomedByScrollbar=!1;b.parseDates&&!b.equalSpacing?a.timeZoom(this.startTime,
this.endTime):a.zoom(this.start,this.end)}this.zoomValueScrollbar(this.valueScrollbar)},updateTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b],c=e.processObject(c,e.TrendLine,this.theme);a[b]=c;c.chart=this;c.id||(c.id="trendLineAuto"+b+"_"+(new Date).getTime());e.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.categoryAxis=this.categoryAxis}},validateNow:function(a,b){a&&this.zoomOutOnDataUpdate&&
(this.endTime=this.end=this.startTime=this.start=NaN);e.AmSerialChart.base.validateNow.call(this,a,b)},countColumns:function(){var a=0,b=this.valueAxes.length,c=this.graphs.length,d,g,e=!1,f,k;for(k=0;k<b;k++){g=this.valueAxes[k];var l=g.stackType,m=0;if("100%"==l||"regular"==l)for(e=!1,f=0;f<c;f++)d=this.graphs[f],d.tcc=1,d.valueAxis==g&&"column"==d.type&&(!e&&d.stackable&&(a++,e=!0),(!d.stackable&&d.clustered||d.newStack&&0!==m)&&a++,d.columnIndex=a-1,d.clustered||(d.columnIndex=0),m++);if("none"==
l||"3d"==l){m=!1;for(f=0;f<c;f++)d=this.graphs[f],d.valueAxis==g&&"column"==d.type&&(d.clustered?(d.tcc=1,d.newStack&&(a=0),d.hidden||(d.columnIndex=a,a++)):d.hidden||(m=!0,d.tcc=1,d.columnIndex=0));m&&0===a&&(a=1)}if("3d"==l){g=1;for(m=0;m<c;m++)d=this.graphs[m],d.newStack&&g++,d.depthCount=g,d.tcc=a;a=g}}return a},parseData:function(){e.AmSerialChart.base.parseData.call(this);this.parseSerialData(this.dataProvider)},getCategoryIndexByValue:function(a){var b=this.chartData,c;for(c=0;c<b.length;c++)if(b[c].category==
a)return c},handleScrollbarZoom:function(a){this.zoomedByScrollbar=!0;this.zoom(a.start,a.end)},dispatchTimeZoomEvent:function(){if(this.drawGraphs&&(this.prevStartTime!=this.startTime||this.prevEndTime!=this.endTime)){var a={type:"zoomed"};a.startDate=new Date(this.startTime);a.endDate=new Date(this.endTime);a.startIndex=this.start;a.endIndex=this.end;this.startIndex=this.start;this.endIndex=this.end;this.startDate=a.startDate;this.endDate=a.endDate;this.prevStartTime=this.startTime;this.prevEndTime=
this.endTime;var b=this.categoryAxis,c=e.extractPeriod(b.minPeriod).period,b=b.dateFormatsObject[c];a.startValue=e.formatDate(a.startDate,b,this);a.endValue=e.formatDate(a.endDate,b,this);a.chart=this;a.target=this;this.fire(a)}},dispatchIndexZoomEvent:function(){if(this.drawGraphs&&(this.prevStartIndex!=this.start||this.prevEndIndex!=this.end)){this.startIndex=this.start;this.endIndex=this.end;var a=this.chartData;if(e.ifArray(a)&&!isNaN(this.start)&&!isNaN(this.end)){var b={chart:this,target:this,
type:"zoomed"};b.startIndex=this.start;b.endIndex=this.end;b.startValue=a[this.start].category;b.endValue=a[this.end].category;this.categoryAxis.parseDates&&(this.startTime=a[this.start].time,this.endTime=a[this.end].time,b.startDate=new Date(this.startTime),b.endDate=new Date(this.endTime));this.prevStartIndex=this.start;this.prevEndIndex=this.end;this.fire(b)}}},updateLegendValues:function(){this.legend&&this.legend.updateValues()},getClosestIndex:function(a,b,c,d,g,e){0>g&&(g=0);e>a.length-1&&
(e=a.length-1);var f=g+Math.round((e-g)/2),k=a[f][b];return c==k?f:1>=e-g?d?g:Math.abs(a[g][b]-c)<Math.abs(a[e][b]-c)?g:e:c==k?f:c<k?this.getClosestIndex(a,b,c,d,g,f):this.getClosestIndex(a,b,c,d,f,e)},zoomToIndexes:function(a,b){var c=this.chartData;if(c){var d=c.length;0<d&&(0>a&&(a=0),b>d-1&&(b=d-1),d=this.categoryAxis,d.parseDates&&!d.equalSpacing?this.zoom(c[a].time,this.getEndTime(c[b].time)):this.zoom(a,b))}},zoomToDates:function(a,b){var c=this.chartData;if(c)if(this.categoryAxis.equalSpacing){var d=
this.getClosestIndex(c,"time",a.getTime(),!0,0,c.length);b=e.resetDateToMin(b,this.categoryAxis.minPeriod,1);c=this.getClosestIndex(c,"time",b.getTime(),!1,0,c.length);this.zoom(d,c)}else this.zoom(a.getTime(),b.getTime())},zoomToCategoryValues:function(a,b){this.chartData&&this.zoom(this.getCategoryIndexByValue(a),this.getCategoryIndexByValue(b))},formatPeriodString:function(a,b){if(b){b.periodDataItem={};b.periodPercentDataItem={};var c=["value","open","low","high","close"],d="value open low high close average sum count".split(" "),
g=b.valueAxis,h=this.chartData,f=b.numberFormatter;f||(f=this.nf);for(var k=0;k<c.length;k++){for(var l=c[k],m=0,p=0,n=0,u=0,v,x,E,t,r,B,q,w,y,C,F=this.start;F<=this.end;F++){var D=h[F];if(D){var A=D.axes[g.id].graphs[b.id];if(A){if(A.values){var z=A.values[l],D=D.x.categoryAxis;if(this.rotate){if(0>D||D>A.graph.height)z=NaN}else if(0>D||D>A.graph.width)z=NaN;if(!isNaN(z)){isNaN(v)&&(v=z);x=z;if(isNaN(E)||E>z)E=z;if(isNaN(t)||t<z)t=z;r=e.getDecimals(m);D=e.getDecimals(z);m+=z;m=e.roundTo(m,Math.max(r,
D));p++;r=m/p}}if(A.percents&&(A=A.percents[l],!isNaN(A))){isNaN(B)&&(B=A);q=A;if(isNaN(w)||w>A)w=A;if(isNaN(y)||y<A)y=A;C=e.getDecimals(n);z=e.getDecimals(A);n+=A;n=e.roundTo(n,Math.max(C,z));u++;C=n/u}}}}m={open:v,close:x,high:t,low:E,average:r,sum:m,count:p};n={open:B,close:q,high:y,low:w,average:C,sum:n,count:u};a=e.formatValue(a,m,d,f,l+"\\.",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,n,d,this.pf,"percents\\."+l+"\\.");b.periodDataItem[l]=m;b.periodPercentDataItem[l]=
n}}return a=e.cleanFromEmpty(a)},formatString:function(a,b,c){if(b){var d=b.graph;if(void 0!==a){if(-1!=a.indexOf("[[category]]")){var g=b.serialDataItem.category;if(this.categoryAxis.parseDates){var h=this.balloonDateFormat,f=this.chartCursor;f&&f.categoryBalloonDateFormat&&(h=f.categoryBalloonDateFormat);h=e.formatDate(g,h,this);-1!=h.indexOf("fff")&&(h=e.formatMilliseconds(h,g));g=h}a=a.replace(/\[\[category\]\]/g,String(g.replace("$","$$$")))}g=d.numberFormatter;g||(g=this.nf);h=b.graph.valueAxis;
(f=h.duration)&&!isNaN(b.values.value)&&(f=e.formatDuration(b.values.value,f,"",h.durationUnits,h.maxInterval,g),a=a.replace(RegExp("\\[\\[value\\]\\]","g"),f));"date"==h.type&&(h=e.formatDate(new Date(b.values.value),d.dateFormat,this),f=RegExp("\\[\\[value\\]\\]","g"),a=a.replace(f,h),h=e.formatDate(new Date(b.values.open),d.dateFormat,this),f=RegExp("\\[\\[open\\]\\]","g"),a=a.replace(f,h));d="value open low high close total".split(" ");h=this.pf;a=e.formatValue(a,b.percents,d,h,"percents\\.");
a=e.formatValue(a,b.values,d,g,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,b.values,["percents"],h);-1!=a.indexOf("[[")&&(a=e.formatDataContextValue(a,b.dataContext));-1!=a.indexOf("[[")&&b.graph.customData&&(a=e.formatDataContextValue(a,b.graph.customData));a=e.AmSerialChart.base.formatString.call(this,a,b,c)}return a}},updateChartCursor:function(){e.AmSerialChart.base.updateChartCursor.call(this);var a=this.chartCursor,b=this.categoryAxis;if(a){var c=
a.categoryBalloonAlpha,d=a.categoryBalloonColor,g=a.color;void 0===d&&(d=a.cursorColor);var h=a.valueZoomable,f=a.zoomable,k=a.valueLineEnabled;this.rotate?(a.vLineEnabled=k,a.hZoomEnabled=h,a.vZoomEnabled=f):(a.hLineEnabled=k,a.vZoomEnabled=h,a.hZoomEnabled=f);if(a.valueLineBalloonEnabled)for(k=0;k<this.valueAxes.length;k++)h=this.valueAxes[k],(f=h.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,h.balloon=f;else for(f=0;f<this.valueAxes.length;f++)h=
this.valueAxes[f],h.balloon&&(h.balloon=null);b&&(b.balloonTextFunction=a.categoryBalloonFunction,a.categoryLineAxis=b,b.balloonText=a.categoryBalloonText,a.categoryBalloonEnabled&&((f=b.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,b.balloon=f),b.balloon&&(b.balloon.enabled=a.categoryBalloonEnabled))}},addChartScrollbar:function(a){e.callMethod("destroy",[this.chartScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarZoom));
this.rotate?void 0===a.width&&(a.width=a.scrollbarHeight):void 0===a.height&&(a.height=a.scrollbarHeight);a.gridAxis=this.categoryAxis;this.chartScrollbar=a},addValueScrollbar:function(a){e.callMethod("destroy",[this.valueScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarValueZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted));var b=a.scrollbarHeight;this.rotate?void 0===a.height&&(a.height=b):void 0===a.width&&(a.width=b);a.gridAxis||(a.gridAxis=this.valueAxes[0]);
a.valueAxes=this.valueAxes;this.valueScrollbar=a},removeChartScrollbar:function(){e.callMethod("destroy",[this.chartScrollbar]);this.chartScrollbar=null},removeValueScrollbar:function(){e.callMethod("destroy",[this.valueScrollbar]);this.valueScrollbar=null},handleReleaseOutside:function(a){e.AmSerialChart.base.handleReleaseOutside.call(this,a);e.callMethod("handleReleaseOutside",[this.chartScrollbar,this.valueScrollbar])},update:function(){e.AmSerialChart.base.update.call(this);this.chartScrollbar&&
this.chartScrollbar.update&&this.chartScrollbar.update();this.valueScrollbar&&this.valueScrollbar.update&&this.valueScrollbar.update()},processScrollbars:function(){e.AmSerialChart.base.processScrollbars.call(this);var a=this.valueScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),a.id="valueScrollbar",this.addValueScrollbar(a))},handleValueAxisZoom:function(a){this.handleValueAxisZoomReal(a,this.valueAxes)},zoomOut:function(){e.AmSerialChart.base.zoomOut.call(this);this.zoom();this.syncGrid()},
getNextItem:function(a){var b=a.index,c=this.chartData,d=a.graph;if(b+1<c.length)for(b+=1;b<c.length;b++)if(a=c[b])if(a=a.axes[d.valueAxis.id].graphs[d.id],!isNaN(a.y))return a},handleCursorZoomReal:function(a,b,c,d,e){var h=e.target,f,k;this.rotate?(isNaN(a)||isNaN(b)||this.relativeZoomValueAxes(this.valueAxes,a,b)&&this.updateAfterValueZoom(),h.vZoomEnabled&&(f=e.start,k=e.end)):(isNaN(c)||isNaN(d)||this.relativeZoomValueAxes(this.valueAxes,c,d)&&this.updateAfterValueZoom(),h.hZoomEnabled&&(f=e.start,
k=e.end));isNaN(f)||isNaN(k)||(a=this.categoryAxis,a.parseDates&&!a.equalSpacing?this.zoomToDates(new Date(f),new Date(k)):this.zoomToIndexes(f,k))},handleCursorZoomStarted:function(){var a=this.valueAxes;if(a){var a=a[0],b=a.relativeStart,c=a.relativeEnd;a.reversed&&(b=1-a.relativeEnd,c=1-a.relativeStart);this.rotate?(this.startX0=b,this.endX0=c):(this.startY0=b,this.endY0=c)}this.categoryAxis&&(this.start0=this.start,this.end0=this.end,this.startTime0=this.startTime,this.endTime0=this.endTime)},
fixCursor:function(){this.chartCursor&&this.chartCursor.fixPosition();this.prevCursorItem=null},handleCursorMove:function(a){e.AmSerialChart.base.handleCursorMove.call(this,a);var b=a.target,c=this.categoryAxis;if(a.panning)this.handleCursorHide(a);else if(this.chartData&&!b.isHidden){var d=this.graphs;if(d){var g;g=c.xToIndex(this.rotate?a.y:a.x);if(g=this.chartData[g]){var h,f,k,l;if(b.oneBalloonOnly&&b.valueBalloonsEnabled){var m=Infinity;for(h=d.length-1;0<=h;h--)if(f=d[h],f.balloon.enabled&&
f.showBalloon&&!f.hidden){k=f.valueAxis.id;k=g.axes[k].graphs[f.id];if(b.showNextAvailable&&isNaN(k.y)&&(k=this.getNextItem(k),!k))continue;k=k.y;"top"==f.showBalloonAt&&(k=0);"bottom"==f.showBalloonAt&&(k=this.height);var p=b.mouseX,n=b.mouseY;k=this.rotate?Math.abs(p-k):Math.abs(n-k);k<m&&(m=k,l=f)}b.mostCloseGraph=l}if(this.prevCursorItem!=g||l!=this.prevMostCloseGraph){m=[];for(h=0;h<d.length;h++){f=d[h];k=f.valueAxis.id;k=g.axes[k].graphs[f.id];if(b.showNextAvailable&&isNaN(k.y)&&(k=this.getNextItem(k),
!k&&f.balloon)){f.balloon.hide();continue}l&&f!=l?(f.showGraphBalloon(k,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.hide(0)):b.valueBalloonsEnabled?(f.balloon.showBullet=b.bulletsEnabled,f.balloon.bulletSize=b.bulletSize/2,a.hideBalloons||(f.showGraphBalloon(k,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.set&&m.push({balloon:f.balloon,y:f.balloon.pointToY}))):(f.currentDataItem=k,f.resizeBullet(k,b.graphBulletSize,b.graphBulletAlpha))}b.avoidBalloonOverlapping&&this.arrangeBalloons(m);
this.prevCursorItem=g}this.prevMostCloseGraph=l}}d=e.fitToBounds(a.x,0,b.width);l=e.fitToBounds(a.y,0,b.height);c.showBalloon(d,l,b.categoryBalloonDateFormat,a.skip);this.updateLegendValues()}},handleCursorHide:function(a){e.AmSerialChart.base.handleCursorHide.call(this,a);a=this.categoryAxis;this.prevCursorItem=null;this.updateLegendValues();a&&a.hideBalloon();a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].currentDataItem=null},handleCursorPanning:function(a){var b=a.target,c,d=a.deltaX,g=a.deltaY,
h=a.delta2X,f=a.delta2Y;a=!1;if(this.rotate){isNaN(h)&&(h=d,a=!0);var k=this.endX0;c=this.startX0;var l=k-c,k=k-l*h,m=l;a||(m=0);a=e.fitToBounds(c-l*d,0,1-m)}else isNaN(f)&&(f=g,a=!0),k=this.endY0,c=this.startY0,l=k-c,k+=l*g,m=l,a||(m=0),a=e.fitToBounds(c+l*f,0,1-m);c=e.fitToBounds(k,m,1);var p;b.valueZoomable&&(p=this.relativeZoomValueAxes(this.valueAxes,a,c));var n;c=this.categoryAxis;this.rotate&&(d=g,h=f);a=!1;isNaN(h)&&(h=d,a=!0);if(b.zoomable&&(0<Math.abs(d)||0<Math.abs(h)))if(c.parseDates&&
!c.equalSpacing){if(f=this.startTime0,g=this.endTime0,c=g-f,h*=c,l=this.firstTime,k=this.lastTime,m=c,a||(m=0),a=Math.round(e.fitToBounds(f-c*d,l,k-m)),h=Math.round(e.fitToBounds(g-h,l+m,k)),this.startTime!=a||this.endTime!=h)n={chart:this,target:b,type:"zoomed",start:a,end:h},this.skipZoomed=!0,b.fire(n),this.zoom(a,h),n=!0}else if(f=this.start0,g=this.end0,c=g-f,d=Math.round(c*d),h=Math.round(c*h),l=this.chartData.length-1,a||(c=0),a=e.fitToBounds(f-d,0,l-c),c=e.fitToBounds(g-h,c,l),this.start!=
a||this.end!=c)this.skipZoomed=!0,b.fire({chart:this,target:b,type:"zoomed",start:a,end:c}),this.zoom(a,c),n=!0;!n&&p&&this.updateAfterValueZoom()},arrangeBalloons:function(a){var b=this.plotAreaHeight;a.sort(this.compareY);var c,d,e,h=this.plotAreaWidth,f=a.length;for(c=0;c<f;c++)d=a[c].balloon,d.setBounds(0,0,h,b),d.restorePrevious(),d.draw(),b=d.yPos-3;a.reverse();for(c=0;c<f;c++){d=a[c].balloon;var b=d.bottom,k=d.bottom-d.yPos;0<c&&b-k<e+3&&d.setBounds&&(d.setBounds(0,e+3,h,e+k+3),d.restorePrevious(),
d.draw());d.set&&d.set.show();e=d.bottom}},compareY:function(a,b){return a.y<b.y?1:-1}})})();(function(){var e=window.AmCharts;e.Cuboid=e.Class({construct:function(a,b,c,d,e,h,f,k,l,m,p,n,u,v,x,E,t){this.set=a.set();this.container=a;this.h=Math.round(c);this.w=Math.round(b);this.dx=d;this.dy=e;this.colors=h;this.alpha=f;this.bwidth=k;this.bcolor=l;this.balpha=m;this.dashLength=v;this.topRadius=E;this.pattern=x;this.rotate=u;this.bcn=t;u?0>b&&0===p&&(p=180):0>c&&270==p&&(p=90);this.gradientRotation=p;0===d&&0===e&&(this.cornerRadius=n);this.draw()},draw:function(){var a=this.set;a.clear();
var b=this.container,c=b.chart,d=this.w,g=this.h,h=this.dx,f=this.dy,k=this.colors,l=this.alpha,m=this.bwidth,p=this.bcolor,n=this.balpha,u=this.gradientRotation,v=this.cornerRadius,x=this.dashLength,E=this.pattern,t=this.topRadius,r=this.bcn,B=k,q=k;"object"==typeof k&&(B=k[0],q=k[k.length-1]);var w,y,C,F,D,A,z,L,M,Q=l;E&&(l=0);var G,H,I,J,K=this.rotate;if(0<Math.abs(h)||0<Math.abs(f))if(isNaN(t))z=q,q=e.adjustLuminosity(B,-.2),q=e.adjustLuminosity(B,-.2),w=e.polygon(b,[0,h,d+h,d,0],[0,f,f,0,0],
q,l,1,p,0,u),0<n&&(M=e.line(b,[0,h,d+h],[0,f,f],p,n,m,x)),y=e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],q,l,1,p,0,u),y.translate(h,f),0<n&&(C=e.line(b,[h,h],[f,f+g],p,n,m,x)),F=e.polygon(b,[0,0,h,h,0],[0,g,g+f,f,0],q,l,1,p,0,u),D=e.polygon(b,[d,d,d+h,d+h,d],[0,g,g+f,f,0],q,l,1,p,0,u),0<n&&(A=e.line(b,[d,d+h,d+h,d],[0,f,g+f,g],p,n,m,x)),q=e.adjustLuminosity(z,.2),z=e.polygon(b,[0,h,d+h,d,0],[g,g+f,g+f,g,g],q,l,1,p,0,u),0<n&&(L=e.line(b,[0,h,d+h],[g,g+f,g+f],p,n,m,x));else{var N,O,P;K?(N=g/2,q=h/2,P=g/2,O=
d+h/2,H=Math.abs(g/2),G=Math.abs(h/2)):(q=d/2,N=f/2,O=d/2,P=g+f/2+1,G=Math.abs(d/2),H=Math.abs(f/2));I=G*t;J=H*t;.1<G&&.1<G&&(w=e.circle(b,G,B,l,m,p,n,!1,H),w.translate(q,N));.1<I&&.1<I&&(z=e.circle(b,I,e.adjustLuminosity(B,.5),l,m,p,n,!1,J),z.translate(O,P))}l=Q;1>Math.abs(g)&&(g=0);1>Math.abs(d)&&(d=0);!isNaN(t)&&(0<Math.abs(h)||0<Math.abs(f))?(k=[B],k={fill:k,stroke:p,"stroke-width":m,"stroke-opacity":n,"fill-opacity":l},K?(l="M0,0 L"+d+","+(g/2-g/2*t),m=" B",0<d&&(m=" A"),e.VML?(l+=m+Math.round(d-
I)+","+Math.round(g/2-J)+","+Math.round(d+I)+","+Math.round(g/2+J)+","+d+",0,"+d+","+g,l=l+(" L0,"+g)+(m+Math.round(-G)+","+Math.round(g/2-H)+","+Math.round(G)+","+Math.round(g/2+H)+",0,"+g+",0,0")):(l+="A"+I+","+J+",0,0,0,"+d+","+(g-g/2*(1-t))+"L0,"+g,l+="A"+G+","+H+",0,0,1,0,0"),G=90):(m=d/2-d/2*t,l="M0,0 L"+m+","+g,e.VML?(l="M0,0 L"+m+","+g,m=" B",0>g&&(m=" A"),l+=m+Math.round(d/2-I)+","+Math.round(g-J)+","+Math.round(d/2+I)+","+Math.round(g+J)+",0,"+g+","+d+","+g,l+=" L"+d+",0",l+=m+Math.round(d/
2+G)+","+Math.round(H)+","+Math.round(d/2-G)+","+Math.round(-H)+","+d+",0,0,0"):(l+="A"+I+","+J+",0,0,0,"+(d-d/2*(1-t))+","+g+"L"+d+",0",l+="A"+G+","+H+",0,0,1,0,0"),G=180),b=b.path(l).attr(k),b.gradient("linearGradient",[B,e.adjustLuminosity(B,-.3),e.adjustLuminosity(B,-.3),B],G),K?b.translate(h/2,0):b.translate(0,f/2)):b=0===g?e.line(b,[0,d],[0,0],p,n,m,x):0===d?e.line(b,[0,0],[0,g],p,n,m,x):0<v?e.rect(b,d,g,k,l,m,p,n,v,u,x):e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],k,l,m,p,n,u,!1,x);d=isNaN(t)?0>g?[w,
M,y,C,F,D,A,z,L,b]:[z,L,y,C,F,D,w,M,A,b]:K?0<d?[w,b,z]:[z,b,w]:0>g?[w,b,z]:[z,b,w];e.setCN(c,b,r+"front");e.setCN(c,y,r+"back");e.setCN(c,z,r+"top");e.setCN(c,w,r+"bottom");e.setCN(c,F,r+"left");e.setCN(c,D,r+"right");for(w=0;w<d.length;w++)if(y=d[w])a.push(y),e.setCN(c,y,r+"element");E&&b.pattern(E,NaN,c.path)},width:function(a){isNaN(a)&&(a=0);this.w=Math.round(a);this.draw()},height:function(a){isNaN(a)&&(a=0);this.h=Math.round(a);this.draw()},animateHeight:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rh=c.h;c.frame=0;c.height(1);setTimeout(function(){c.updateHeight.call(c)},1E3/e.updateRate)},updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateHeight.call(a)}):setTimeout(function(){a.updateHeight.call(a)},1E3/e.updateRate)):(a.height(a.rh),a.animationFinished=!0)},animateWidth:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rw=c.w;c.frame=0;c.width(1);setTimeout(function(){c.updateWidth.call(c)},1E3/e.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateWidth.call(a)}):setTimeout(function(){a.updateWidth.call(a)},1E3/e.updateRate)):(a.width(a.rw),a.animationFinished=!0)}})})();(function(){var e=window.AmCharts;e.CategoryAxis=e.Class({inherits:e.AxisBase,construct:function(a){this.cname="CategoryAxis";e.CategoryAxis.base.construct.call(this,a);this.minPeriod="DD";this.equalSpacing=this.parseDates=!1;this.position="bottom";this.startOnAxis=!1;this.gridPosition="middle";this.safeDistance=30;this.stickBalloonToCategory=!1;e.applyTheme(this,a,this.cname)},draw:function(){e.CategoryAxis.base.draw.call(this);this.generateDFObject();var a=this.chart.chartData;this.data=a;this.labelRotationR=
this.labelRotation;this.type=null;if(e.ifArray(a)){var b,c=this.chart;"scrollbar"!=this.id?(e.setCN(c,this.set,"category-axis"),e.setCN(c,this.labelsSet,"category-axis"),e.setCN(c,this.axisLine.axisSet,"category-axis")):this.bcn=this.id+"-";var d=this.start,g=this.labelFrequency,h=0,f=this.end-d+1,k=this.gridCountR,l=this.showFirstLabel,m=this.showLastLabel,p,n="",n=e.extractPeriod(this.minPeriod),u=e.getPeriodDuration(n.period,n.count),v,x,E,t,r,B=this.rotate,q=this.firstDayOfWeek,w=this.boldPeriodBeginning;
b=e.resetDateToMin(new Date(a[a.length-1].time+1.05*u),this.minPeriod,1,q).getTime();this.firstTime=c.firstTime;this.endTime>b&&(this.endTime=b);r=this.minorGridEnabled;x=this.gridAlpha;var y=0,C=0;if(this.widthField)for(b=this.start;b<=this.end;b++)if(t=this.data[b]){var F=Number(this.data[b].dataContext[this.widthField]);isNaN(F)||(y+=F,t.widthValue=F)}if(this.parseDates&&!this.equalSpacing)this.lastTime=a[a.length-1].time,this.maxTime=e.resetDateToMin(new Date(this.lastTime+1.05*u),this.minPeriod,
1,q).getTime(),this.timeDifference=this.endTime-this.startTime,this.parseDatesDraw();else if(!this.parseDates){if(this.cellWidth=this.getStepWidth(f),f<k&&(k=f),h+=this.start,this.stepWidth=this.getStepWidth(f),0<k)for(q=Math.floor(f/k),t=this.chooseMinorFrequency(q),f=h,f/2==Math.round(f/2)&&f--,0>f&&(f=0),w=0,this.widthField&&(f=this.start,q=1),this.end-f+1>=this.autoRotateCount&&(this.labelRotationR=this.autoRotateAngle),b=f;b<=this.end+2;b++){k=!1;0<=b&&b<this.data.length?(v=this.data[b],n=v.category,
k=v.forceShow):n="";if(r&&!isNaN(t))if(b/t==Math.round(b/t)||k)b/q==Math.round(b/q)||k||(this.gridAlpha=this.minorGridAlpha,n=void 0);else continue;else if(b/q!=Math.round(b/q)&&!k)continue;f=this.getCoordinate(b-h);k=0;"start"==this.gridPosition&&(f-=this.cellWidth/2,k=this.cellWidth/2);p=!0;E=k;"start"==this.tickPosition&&(E=0,p=!1,k=0);if(b==d&&!l||b==this.end&&!m)n=void 0;Math.round(w/g)!=w/g&&(n=void 0);w++;a=this.cellWidth;B&&(a=NaN,this.ignoreAxisWidth||!c.autoMargins)&&(a="right"==this.position?
c.marginRight-this.titleWidth:c.marginLeft-this.titleWidth,a-=this.tickLength+10);this.labelFunction&&v&&(n=this.labelFunction(n,v,this));n=e.fixBrakes(n);u=!1;this.boldLabels&&(u=!0);b>this.end&&"start"==this.tickPosition&&(n=" ");this.rotate&&this.inside&&(k-=2);isNaN(v.widthValue)||(v.percentWidthValue=v.widthValue/y*100,a=this.rotate?this.height*v.widthValue/y:this.width*v.widthValue/y,f=C,C+=a,E=k=a/2);p=new this.axisItemRenderer(this,f,n,p,a,k,void 0,u,E,!1,v.labelColor,v.className);p.serialDataItem=
v;this.pushAxisItem(p);this.gridAlpha=x}}else if(this.parseDates&&this.equalSpacing){h=this.start;this.startTime=this.data[this.start].time;this.endTime=this.data[this.end].time;this.timeDifference=this.endTime-this.startTime;b=this.choosePeriod(0);g=b.period;v=b.count;b=e.getPeriodDuration(g,v);b<u&&(g=n.period,v=n.count,b=u);x=g;"WW"==x&&(x="DD");this.currentDateFormat=this.dateFormatsObject[x];this.stepWidth=this.getStepWidth(f);k=Math.ceil(this.timeDifference/b)+1;n=e.resetDateToMin(new Date(this.startTime-
b),g,v,q).getTime();this.cellWidth=this.getStepWidth(f);f=Math.round(n/b);d=-1;f/2==Math.round(f/2)&&(d=-2,n-=b);f=this.start;f/2==Math.round(f/2)&&f--;0>f&&(f=0);C=this.end+2;C>=this.data.length&&(C=this.data.length);a=!1;a=!l;this.previousPos=-1E3;20<this.labelRotationR&&(this.safeDistance=5);F=f;if(this.data[f].time!=e.resetDateToMin(new Date(this.data[f].time),g,v,q).getTime()){var u=0,D=n;for(b=f;b<C;b++)t=this.data[b].time,this.checkPeriodChange(g,v,t,D)&&(u++,2<=u&&(F=b,b=C),D=t)}r&&1<v&&(t=
this.chooseMinorFrequency(v),e.getPeriodDuration(g,t));if(0<this.gridCountR)for(b=f;b<C;b++)if(t=this.data[b].time,this.checkPeriodChange(g,v,t,n)&&b>=F){f=this.getCoordinate(b-this.start);r=!1;this.nextPeriod[x]&&(r=this.checkPeriodChange(this.nextPeriod[x],1,t,n,x))&&e.resetDateToMin(new Date(t),this.nextPeriod[x],1,q).getTime()!=t&&(r=!1);u=!1;r&&this.markPeriodChange?(r=this.dateFormatsObject[this.nextPeriod[x]],u=!0):r=this.dateFormatsObject[x];n=e.formatDate(new Date(t),r,c);if(b==d&&!l||b==
k&&!m)n=" ";a?a=!1:(w||(u=!1),f-this.previousPos>this.safeDistance*Math.cos(this.labelRotationR*Math.PI/180)&&(this.labelFunction&&(n=this.labelFunction(n,new Date(t),this,g,v,E)),this.boldLabels&&(u=!0),p=new this.axisItemRenderer(this,f,n,void 0,void 0,void 0,void 0,u),r=p.graphics(),this.pushAxisItem(p),r=r.getBBox().width,e.isModern||(r-=f),this.previousPos=f+r));E=n=t}}for(b=l=0;b<this.data.length;b++)if(t=this.data[b])this.parseDates&&!this.equalSpacing?(m=t.time,d=this.cellWidth,"MM"==this.minPeriod&&
(d=864E5*e.daysInMonth(new Date(m))*this.stepWidth,t.cellWidth=d),m=Math.round((m-this.startTime)*this.stepWidth+d/2)):m=this.getCoordinate(b-h),t.x[this.id]=m;if(this.widthField)for(b=this.start;b<=this.end;b++)t=this.data[b],d=t.widthValue,t.percentWidthValue=d/y*100,this.rotate?(m=this.height*d/y/2+l,l=this.height*d/y+l):(m=this.width*d/y/2+l,l=this.width*d/y+l),t.x[this.id]=m;y=this.guides.length;for(b=0;b<y;b++)if(l=this.guides[b],q=q=q=r=d=NaN,m=l.above,l.toCategory&&(q=c.getCategoryIndexByValue(l.toCategory),
isNaN(q)||(d=this.getCoordinate(q-h),l.expand&&(d+=this.cellWidth/2),p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,l),this.pushAxisItem(p,m))),l.category&&(q=c.getCategoryIndexByValue(l.category),isNaN(q)||(r=this.getCoordinate(q-h),l.expand&&(r-=this.cellWidth/2),q=(d-r)/2,p=new this.axisItemRenderer(this,r,l.label,!0,NaN,q,l),this.pushAxisItem(p,m))),w=c.dataDateFormat,l.toDate&&(!w||l.toDate instanceof Date||(l.toDate=l.toDate.toString()+" |"),l.toDate=e.getDate(l.toDate,w),this.equalSpacing?
(q=c.getClosestIndex(this.data,"time",l.toDate.getTime(),!1,0,this.data.length-1),isNaN(q)||(d=this.getCoordinate(q-h))):d=(l.toDate.getTime()-this.startTime)*this.stepWidth,p=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,l),this.pushAxisItem(p,m)),l.date&&(!w||l.date instanceof Date||(l.date=l.date.toString()+" |"),l.date=e.getDate(l.date,w),this.equalSpacing?(q=c.getClosestIndex(this.data,"time",l.date.getTime(),!1,0,this.data.length-1),isNaN(q)||(r=this.getCoordinate(q-h))):r=(l.date.getTime()-
this.startTime)*this.stepWidth,q=(d-r)/2,p=!0,l.toDate&&(p=!1),p="H"==this.orientation?new this.axisItemRenderer(this,r,l.label,p,2*q,NaN,l):new this.axisItemRenderer(this,r,l.label,!1,NaN,q,l),this.pushAxisItem(p,m)),p&&(q=p.label)&&this.addEventListeners(q,l),0<d||0<r){q=!1;if(this.rotate){if(d<this.height||r<this.height)q=!0}else if(d<this.width||r<this.width)q=!0;q&&(d=new this.guideFillRenderer(this,r,d,l),r=d.graphics(),this.pushAxisItem(d,m),l.graphics=r,r.index=b,this.addEventListeners(r,
l))}if(c=c.chartCursor)B?c.fixHeight(this.cellWidth):(c.fixWidth(this.cellWidth),c.fullWidth&&this.balloon&&(this.balloon.minWidth=this.cellWidth));this.previousHeight=A}this.axisCreated=!0;this.set.translate(this.x,this.y);this.labelsSet.translate(this.x,this.y);this.labelsSet.show();this.positionTitle();(B=this.axisLine.set)&&B.toFront();var A=this.getBBox().height;2<A-this.previousHeight&&this.autoWrap&&!this.parseDates&&(this.axisCreated=this.chart.marginsUpdated=!1)},xToIndex:function(a){var b=
this.data,c=this.chart,d=c.rotate,g=this.stepWidth,h;if(this.parseDates&&!this.equalSpacing)a=this.startTime+Math.round(a/g)-this.minDuration()/2,h=c.getClosestIndex(b,"time",a,!1,this.start,this.end+1);else if(this.widthField)for(c=Infinity,g=this.start;g<=this.end;g++){var f=this.data[g];f&&(f=Math.abs(f.x[this.id]-a),f<c&&(c=f,h=g))}else this.startOnAxis||(a-=g/2),h=this.start+Math.round(a/g);h=e.fitToBounds(h,0,b.length-1);var k;b[h]&&(k=b[h].x[this.id]);d?k>this.height+1&&h--:k>this.width+1&&
h--;0>k&&h++;return h=e.fitToBounds(h,0,b.length-1)},dateToCoordinate:function(a){return this.parseDates&&!this.equalSpacing?(a.getTime()-this.startTime)*this.stepWidth:this.parseDates&&this.equalSpacing?(a=this.chart.getClosestIndex(this.data,"time",a.getTime(),!1,0,this.data.length-1),this.getCoordinate(a-this.start)):NaN},categoryToCoordinate:function(a){if(this.chart){if(this.parseDates)return this.dateToCoordinate(new Date(a));a=this.chart.getCategoryIndexByValue(a);if(!isNaN(a))return this.getCoordinate(a-
this.start)}else return NaN},coordinateToDate:function(a){return this.equalSpacing?(a=this.xToIndex(a),new Date(this.data[a].time)):new Date(this.startTime+a/this.stepWidth)},coordinateToValue:function(a){a=this.xToIndex(a);if(a=this.data[a])return this.parseDates?a.time:a.category},getCoordinate:function(a){a*=this.stepWidth;this.startOnAxis||(a+=this.stepWidth/2);return Math.round(a)},formatValue:function(a,b){b||(b=this.currentDateFormat);this.parseDates&&(a=e.formatDate(new Date(a),b,this.chart));
return a},showBalloonAt:function(a,b){void 0===b&&(b=this.parseDates?this.dateToCoordinate(new Date(a)):this.categoryToCoordinate(a));return this.adjustBalloonCoordinate(b)},formatBalloonText:function(a,b,c){var d="",g="",h=this.chart,f=this.data[b];if(f)if(this.parseDates)d=e.formatDate(f.category,c,h),b=e.changeDate(new Date(f.category),this.minPeriod,1),g=e.formatDate(b,c,h),-1!=d.indexOf("fff")&&(d=e.formatMilliseconds(d,f.category),g=e.formatMilliseconds(g,b));else{var k;this.data[b+1]&&(k=this.data[b+
1]);d=e.fixNewLines(f.category);k&&(g=e.fixNewLines(k.category))}a=a.replace(/\[\[category\]\]/g,String(d));return a=a.replace(/\[\[toCategory\]\]/g,String(g))},adjustBalloonCoordinate:function(a,b){var c=this.xToIndex(a),d=this.chart.chartCursor;if(this.stickBalloonToCategory){var e=this.data[c];e&&(a=e.x[this.id]);this.stickBalloonToStart&&(a-=this.cellWidth/2);var h=0;if(d){var f=d.limitToGraph;if(f){var k=f.valueAxis.id;f.hidden||(h=e.axes[k].graphs[f.id].y)}this.rotate?("left"==this.position?
(f&&(h-=d.width),0<h&&(h=0)):0>h&&(h=0),d.fixHLine(a,h)):("top"==this.position?(f&&(h-=d.height),0<h&&(h=0)):0>h&&(h=0),d.fullWidth&&(a+=1),d.fixVLine(a,h))}}d&&!b&&(d.setIndex(c),this.parseDates&&d.setTimestamp(this.coordinateToDate(a).getTime()));return a}})})();




(function(){var e=window.AmCharts;e.AmStockChart=e.Class({construct:function(a){this.type="stock";this.cname="AmStockChart";e.addChart(this);this.version="3.21.12";this.theme=a;this.createEvents("buildStarted","zoomed","rollOverStockEvent","rollOutStockEvent","clickStockEvent","panelRemoved","dataUpdated","init","rendered","drawn","resized");this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");this.firstDayOfWeek=1;this.glueToTheEnd=
!1;this.dataSetCounter=-1;this.zoomOutOnDataSetChange=!1;this.panels=[];this.dataSets=[];this.chartCursors=[];this.comparedDataSets=[];this.classNamePrefix="amcharts";this.categoryAxesSettings=new e.CategoryAxesSettings(a);this.valueAxesSettings=new e.ValueAxesSettings(a);this.panelsSettings=new e.PanelsSettings(a);this.chartScrollbarSettings=new e.ChartScrollbarSettings(a);this.chartCursorSettings=new e.ChartCursorSettings(a);this.stockEventsSettings=new e.StockEventsSettings(a);this.legendSettings=
new e.LegendSettings(a);this.balloon=new e.AmBalloon(a);this.previousEndDate=new Date(0);this.previousStartDate=new Date(0);this.dataSetCount=this.graphCount=0;this.chartCreated=!1;this.processTimeout=0;this.autoResize=this.extendToFullPeriod=!0;this.langObj={};e.applyTheme(this,a,this.cname)},write:function(a){var b=this;if(b.listeners)for(var c in b.listeners){var d=b.listeners[c];b.addListener(d.event,d.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);
0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){var b=this.theme;window.AmCharts_path&&(this.path=window.AmCharts_path);void 0===this.path&&(this.path=e.getPath());void 0===this.path&&(this.path="amcharts/");this.path=e.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(e.callInitHandler(this),this.initHC=!0);e.applyLang(this.language,this);this.chartCursors=
[];var c=this.exportConfig;c&&e.AmExport&&!this.AmExport&&(this.AmExport=new e.AmExport(this,c));this.amExport&&e.AmExport&&(this.AmExport=e.extend(this.amExport,new e.AmExport(this),!0));this.AmExport&&this.AmExport.init();this.chartRendered=!1;a="object"!=typeof a?document.getElementById(a):a;this.zoomOutOnDataSetChange&&(this.endDate=this.startDate=void 0);this.categoryAxesSettings=e.processObject(this.categoryAxesSettings,e.CategoryAxesSettings,b);this.valueAxesSettings=e.processObject(this.valueAxesSettings,
e.ValueAxesSettings,b);this.chartCursorSettings=e.processObject(this.chartCursorSettings,e.ChartCursorSettings,b);this.chartScrollbarSettings=e.processObject(this.chartScrollbarSettings,e.ChartScrollbarSettings,b);this.legendSettings=e.processObject(this.legendSettings,e.LegendSettings,b);this.panelsSettings=e.processObject(this.panelsSettings,e.PanelsSettings,b);this.stockEventsSettings=e.processObject(this.stockEventsSettings,e.StockEventsSettings,b);this.dataSetSelector&&(this.dataSetSelector=
e.processObject(this.dataSetSelector,e.DataSetSelector,b));this.periodSelector&&(this.periodSelector=e.processObject(this.periodSelector,e.PeriodSelector,b));a.innerHTML="";this.div=a;this.measure();this.createLayout();this.updateDataSets();this.addDataSetSelector();this.addPeriodSelector();this.addPanels();this.updatePanels();this.addChartScrollbar();this.updateData();this.skipDefault||this.setDefaultPeriod();this.skipEvents=!1},setDefaultPeriod:function(){var a=this.periodSelector;a&&(this.animationPlayed=
!1,a.setDefaultPeriod())},validateSize:function(){this.measurePanels()},updateDataSets:function(){var a=this.mainDataSet,b=this.dataSets,c;for(c=0;c<b.length;c++){var d=b[c],d=e.processObject(d,e.DataSet);b[c]=d;d.id||(this.dataSetCount++,d.id="ds"+this.dataSetCount);void 0===d.color&&(d.color=this.colors.length-1>c?this.colors[c]:e.randomColor())}!a&&e.ifArray(b)&&(this.mainDataSet=this.dataSets[0]);this.getSelections()},getLastDate:function(a){var b=e.getDate(a,this.dataDateFormat,"fff");a=this.categoryAxesSettings.minPeriod;
var c=e.extractPeriod(a),b=e.changeDate(b,c.period,1*c.count,!0).getTime();-1==a.indexOf("fff")&&--b;return new Date(b)},getFirstDate:function(a){a=e.getDate(a,this.dataDateFormat,"fff");var b=e.extractPeriod(this.categoryAxesSettings.minPeriod);return new Date(e.resetDateToMin(a,b.period,1*b.count,this.firstDayOfWeek))},updateData:function(){var a=this,b=a.mainDataSet;if(b){a.parsingData=!1;var c=a.categoryAxesSettings;-1==e.getItemIndex(c.minPeriod,c.groupToPeriods)&&c.groupToPeriods.unshift(c.minPeriod);
var d=b.dataProvider;if(e.ifArray(d)){var k=b.categoryField;a.firstDate=a.getFirstDate(d[0][k]);a.lastDate=a.getLastDate(d[d.length-1][k]);a.periodSelector&&a.periodSelector.setRanges(a.firstDate,a.lastDate);b.dataParsed||(a.parsingData=!0,0<a.processTimeout?setTimeout(function(){a.parseStockData.call(a,b,c.minPeriod,c.groupToPeriods,a.firstDayOfWeek,a.dataDateFormat)},a.processTimeout):a.parseStockData(b,c.minPeriod,c.groupToPeriods,a.firstDayOfWeek,a.dataDateFormat));this.updateComparingData()}else a.firstDate=
void 0,a.lastDate=void 0;a.fixGlue();if(!a.parsingData)a.onDataUpdated()}},fixGlue:function(){if(this.glueToTheEnd&&this.startDate&&this.endDate&&this.lastDate){this.startDate=new Date(this.startDate.getTime()+(this.lastDate.getTime()-this.endDate.getTime())+1);var a=e.extractPeriod(this.categoryAxesSettings.minPeriod);this.startDate=e.resetDateToMin(this.startDate,a.period,a.count,this.firstDayOfWeek);this.endDate=this.lastDate;this.updateScrollbar=!0}},isDataParsed:function(){if(this.mainDataSet){for(var a=
!0,b=0;b<this.comparedDataSets.length;b++)this.comparedDataSets[b].dataParsed||(a=!1);if(this.mainDataSet.dataParsed&&a)return!0}return!1},onDataUpdated:function(){this.isDataParsed()&&(this.updatePanelsWithNewData(),this.skipEvents||this.fire({type:"dataUpdated",chart:this}))},updateComparingData:function(){var a=this.comparedDataSets,b=this.categoryAxesSettings,c;for(c=0;c<a.length;c++){var d=a[c];d.dataParsed||(this.parsingData=!0,0<this.processTimeout?this.delayedParseStockData(c,d):this.parseStockData(d,
b.minPeriod,b.groupToPeriods,this.firstDayOfWeek,this.dataDateFormat))}},delayedParseStockData:function(a,b){var c=this,d=c.categoryAxesSettings;setTimeout(function(){c.parseStockData.call(c,b,d.minPeriod,d.groupToPeriods,c.firstDayOfWeek,c.dataDateFormat)},c.processTimeout*a)},parseStockData:function(a,b,c,d,k){var g=this,l={},h=a.dataProvider,n=a.categoryField;if(n){var f=e.getItemIndex(b,c),m=c.length,q,t=h.length,p,y={};for(q=f;q<m;q++)p=c[q],l[p]=[];var v={},A=a.fieldMappings,E=A.length;for(q=
0;q<t;q++){var B=h[q],D=e.getDate(B[n],k,b),C=D.getTime(),r={},z;for(z=0;z<E;z++)r[A[z].toField]=B[A[z].fromField];for(z=f;z<m;z++){p=c[z];var u=e.extractPeriod(p),F=u.period,G=u.count,w,x;if(z==f||C>=y[p]||!y[p]){v[p]={};v[p].amCategoryIdField=String(e.resetDateToMin(D,F,G,d).getTime());var H;for(H=0;H<E;H++)u=A[H].toField,w=v[p],null!==r[u]&&(x=Number(r[u]),w[u+"Count"]=0,isNaN(x)||(w[u+"Open"]=x,w[u+"Sum"]=x,w[u+"High"]=x,w[u+"AbsHigh"]=x,w[u+"Low"]=x,w[u+"Close"]=x,w[u+"Count"]=1,w[u+"Average"]=
x));w.dataContext=B;w.rawData=[];w.rawData.push(B);l[p].push(v[p]);z>f&&(u=e.newDate(D,b),u=e.changeDate(u,F,G,!0),u=e.resetDateToMin(u,F,G,d),y[p]=u.getTime());if(z==f)for(var I in B)B.hasOwnProperty(I)&&(v[p][I]=B[I]);v[p][n]=e.newDate(D,b)}else for(w=v[p],w.rawData&&w.rawData.push(B),p=0;p<E;p++)u=A[p].toField,q==t-1&&(w[n]=e.newDate(D,b)),null!==r[u]&&(x=Number(r[u]),isNaN(x)||(isNaN(w[u+"Low"])&&(w[u+"Low"]=x),x<w[u+"Low"]&&(w[u+"Low"]=x),isNaN(w[u+"High"])&&(w[u+"High"]=x),x>w[u+"High"]&&(w[u+
"High"]=x),isNaN(w[u+"AbsHigh"])&&(w[u+"AbsHigh"]=x),Math.abs(x)>w[u+"AbsHigh"]&&(w[u+"AbsHigh"]=x),w[u+"Close"]=x,F=e.getDecimals(w[u+"Sum"]),G=e.getDecimals(x),isNaN(w[u+"Sum"])&&(w[u+"Sum"]=0),w[u+"Sum"]+=x,w[u+"Sum"]=e.roundTo(w[u+"Sum"],Math.max(F,G)),w[u+"Count"]++,w[u+"Average"]=w[u+"Sum"]/w[u+"Count"]))}}}a.agregatedDataProviders=l;e.ifArray(a.stockEvents)?0<g.processTimeout?setTimeout(function(){g.parseEvents.call(g,a,g.panels,g.stockEventsSettings,g.firstDayOfWeek,g,g.dataDateFormat)},g.processTimeout):
g.parseEvents(a,g.panels,g.stockEventsSettings,g.firstDayOfWeek,g,g.dataDateFormat):(a.dataParsed=!0,g.onDataUpdated())},parseEvents:function(a,b,c,d,k,g){d=a.stockEvents;d.sort(function(a,b){return a.showOnAxis||b.showOnAxis?(1==a.showOnAxis)-(1==b.showOnAxis):isNaN(a.value)&&isNaN(b.value)?0:!isNaN(a.value)-!isNaN(b.value)});var l=a.agregatedDataProviders,h=b.length,n,f,m,q,t,p;for(n=0;n<h;n++){p=b[n];t=p.graphs;m=t.length;for(f=0;f<m;f++)q=t[f],q.customBulletField="amCustomBullet"+q.id+"_"+p.id,
q.bulletConfigField="amCustomBulletConfig"+q.id+"_"+p.id,q.chart=p;for(f=0;f<d.length;f++)m=d[f],q=m.graph,e.isString(q)&&(q=e.getObjById(t,q))&&(m.graph=q),q&&(m.panel=q.chart)}for(var y in l)if(l.hasOwnProperty(y))for(b=l[y],h=e.extractPeriod(y),n=b.length,f=0;f<d.length;f++){m=d[f];q=m.date instanceof Date;g&&!q&&(m.date=e.stringToDate(m.date,g));q=m.date.getTime();var v=this.getEventDataItem(q,b,a,0,n,h);v&&(q=m.graph,p=m.panel,q&&(t="amCustomBullet"+q.id+"_"+p.id,q="amCustomBulletConfig"+q.id+
"_"+p.id,v[q]?p=v[q]:(p={},p.eventDispatcher=k,p.eventObjects=[],p.letters=[],p.descriptions=[],p.shapes=[],p.backgroundColors=[],p.backgroundAlphas=[],p.borderColors=[],p.borderAlphas=[],p.colors=[],p.rollOverColors=[],p.showOnAxis=[],p.values=[],p.showAts=[],p.fontSizes=[],p.showBullets=[],v[t]=e.StackedBullet,v[q]=p),p.eventObjects.push(m),p.letters.push(m.text),p.descriptions.push(m.description),m.type?p.shapes.push(m.type):p.shapes.push(c.type),void 0!==m.backgroundColor?p.backgroundColors.push(m.backgroundColor):
p.backgroundColors.push(c.backgroundColor),isNaN(m.backgroundAlpha)?p.backgroundAlphas.push(c.backgroundAlpha):p.backgroundAlphas.push(m.backgroundAlpha),isNaN(m.borderAlpha)?p.borderAlphas.push(c.borderAlpha):p.borderAlphas.push(m.borderAlpha),void 0!==m.borderColor?p.borderColors.push(m.borderColor):p.borderColors.push(c.borderColor),void 0!==m.rollOverColor?p.rollOverColors.push(m.rollOverColor):p.rollOverColors.push(c.rollOverColor),void 0!==m.showAt?p.showAts.push(m.showAt):p.showAts.push(c.showAt),
void 0!==m.fontSize&&p.fontSizes.push(m.fontSize),p.colors.push(m.color),p.values.push(m.value),p.showOnAxis.push(m.showOnAxis),p.showBullets.push(m.showBullet),p.date=new Date(m.date)))}a.dataParsed=!0;this.onDataUpdated()},getEventDataItem:function(a,b,c,d,k,g){var l=g.period,h=g.count,n=Math.floor(d+(k-d)/2),f=b[n],m=f[c.categoryField],q=this.dataDateFormat,t=m instanceof Date;q&&!t&&(m=e.stringToDate(m,q));q=m.getTime();"YYYY"==l&&(q=e.resetDateToMin(new Date(m),l,h,this.firstDayOfWeek).getTime());
l="fff"==l?m.getTime()+1:e.resetDateToMin(e.changeDate(new Date(m),g.period,g.count),l,h,this.firstDayOfWeek).getTime();if(a>=q&&a<l)return f;if(!(1>=k-d))return a<q?this.getEventDataItem(a,b,c,d,n,g):this.getEventDataItem(a,b,c,n,k,g)},createLayout:function(){var a=this.div,b,c,d=this.classNamePrefix,e=document.createElement("div");e.style.position="relative";this.containerDiv=e;e.className=d+"-stock-div";a.appendChild(e);if(a=this.periodSelector)b=a.position;if(a=this.dataSetSelector)c=a.position;
if("left"==b||"left"==c)a=document.createElement("div"),a.className=d+"-left-div",a.style.cssFloat="left",a.style.styleFloat="left",a.style.width="0px",a.style.position="absolute",e.appendChild(a),this.leftContainer=a;if("right"==b||"right"==c)b=document.createElement("div"),b.className=d+"-right-div",b.style.cssFloat="right",b.style.styleFloat="right",b.style.width="0px",e.appendChild(b),this.rightContainer=b;b=document.createElement("div");b.className=d+"-center-div";e.appendChild(b);this.centerContainer=
b;e=document.createElement("div");e.className=d+"-panels-div";b.appendChild(e);this.panelsContainer=e},addPanels:function(){this.measurePanels(!0);for(var a=this.panels,b=0;b<a.length;b++){var c=a[b],c=e.processObject(c,e.StockPanel,this.theme,!0);a[b]=c;this.addStockPanel(c,b)}this.panelsAdded=!0},measurePanels:function(a){this.measure();var b=this.chartScrollbarSettings,c=this.divRealHeight,d=this.divRealWidth;if(this.div){var e=this.panelsSettings.panelSpacing;b.enabled&&(c-=b.height);(b=this.periodSelector)&&
!b.vertical&&(b=b.offsetHeight,c-=b+e);(b=this.dataSetSelector)&&!b.vertical&&(b=b.offsetHeight,c-=b+e);a||c==this.prevPH&&this.prevPW==d||this.fire({type:"resized",chart:this});this.prevPW!=d&&(this.prevPW=d);if(c!=this.prevPH){a=this.panels;0<c&&(this.panelsContainer.style.height=c+"px");for(var d=0,g,b=0;b<a.length;b++)if(g=a[b]){var l=g.percentHeight;isNaN(l)&&(l=100/a.length,g.percentHeight=l);d+=l}this.panelsHeight=Math.max(c-e*(a.length-1),0);for(b=0;b<a.length;b++)if(g=a[b])g.percentHeight=
g.percentHeight/d*100,g.panelBox&&(g.panelBox.style.height=Math.round(g.percentHeight*this.panelsHeight/100)+"px");this.prevPH=c}}},addStockPanel:function(a,b){var c=this.panelsSettings,d=document.createElement("div");0<b&&!this.panels[b-1].showCategoryAxis&&(d.style.marginTop=c.panelSpacing+"px");a.hideBalloonReal();a.panelBox=d;a.stockChart=this;a.langObj=this.langObj;a.id||(a.id="stockPanel"+b);d.className="amChartsPanel "+this.classNamePrefix+"-stock-panel-div "+this.classNamePrefix+"-stock-panel-div-"+
a.id;a.pathToImages=this.pathToImages;a.path=this.path;d.style.height=Math.round(a.percentHeight*this.panelsHeight/100)+"px";d.style.width="100%";this.panelsContainer.appendChild(d);0<c.backgroundAlpha&&(d.style.backgroundColor=c.backgroundColor);if(d=a.stockLegend)d=e.processObject(d,e.StockLegend,this.theme),d.container=void 0,d.title=a.title,d.marginLeft=c.marginLeft,d.marginRight=c.marginRight,d.verticalGap=3,d.position="top",e.copyProperties(this.legendSettings,d),a.addLegend(d,d.divId);a.zoomOutText=
"";this.addCursor(a)},enableCursors:function(a){var b=this.chartCursors,c;for(c=0;c<b.length;c++)b[c].enabled=a},updatePanels:function(){var a=this.panels,b;for(b=0;b<a.length;b++)this.updatePanel(a[b]);this.mainDataSet&&this.updateGraphs();this.currentPeriod=void 0},updatePanel:function(a){a.seriesIdField="amCategoryIdField";a.dataProvider=[];a.chartData=[];a.graphs=[];var b=a.categoryAxis,c=this.categoryAxesSettings;e.copyProperties(this.panelsSettings,a);e.copyProperties(c,b);b.parseDates=!0;a.addClassNames=
this.addClassNames;a.classNamePrefix=this.classNamePrefix;a.zoomOutOnDataUpdate=!1;void 0!==this.mouseWheelScrollEnabled&&(a.mouseWheelScrollEnabled=this.mouseWheelScrollEnabled);void 0!==this.mouseWheelZoomEnabled&&(a.mouseWheelZoomEnabled=this.mouseWheelZoomEnabled);a.dataDateFormat=this.dataDateFormat;a.language=this.language;a.showCategoryAxis?"top"==b.position?a.marginTop=c.axisHeight:a.marginBottom=c.axisHeight:(a.categoryAxis.labelsEnabled=!1,a.chartCursor&&(a.chartCursor.categoryBalloonEnabled=
!1));var c=a.valueAxes,d=c.length,k;0===d&&(k=new e.ValueAxis(this.theme),a.addValueAxis(k));b=new e.AmBalloon(this.theme);e.copyProperties(this.balloon,b);a.balloon=b;c=a.valueAxes;d=c.length;for(b=0;b<d;b++)k=c[b],e.copyProperties(this.valueAxesSettings,k);a.listenersAdded=!1;a.write(a.panelBox)},zoom:function(a,b){this.zoomChart(a,b)},zoomOut:function(){this.zoomChart(this.firstDate,this.lastDate)},updatePanelsWithNewData:function(){var a=this.mainDataSet,b=this.scrollbarChart;this.updateGraphs();
if(a){var c=this.panels;this.currentPeriod=void 0;var d;for(d=0;d<c.length;d++){var k=c[d];k.categoryField=a.categoryField;0===a.dataProvider.length&&(k.dataProvider=[]);k.scrollbarChart=b}if(b){c=this.categoryAxesSettings;d=c.minPeriod;b.categoryField=a.categoryField;k=b.dataProvider;if(0<a.dataProvider.length){var g=this.chartScrollbarSettings.usePeriod;if(g){var l=a.agregatedDataProviders[d],h=a.categoryField,n=this.getFirstDate(l[0][h]).getTime();this.getLastDate(l[l.length-1][h]).getTime()-n<
e.getPeriodDuration(g)&&(g=d);b.dataProvider=a.agregatedDataProviders[g]}else b.dataProvider=a.agregatedDataProviders[d]}else b.dataProvider=[];g=b.categoryAxis;g.minPeriod=d;g.firstDayOfWeek=this.firstDayOfWeek;g.equalSpacing=c.equalSpacing;g.axisAlpha=0;g.markPeriodChange=c.markPeriodChange;b.bbsetr=!0;k!=b.dataProvider&&b.validateData();c=this.panelsSettings;b.maxSelectedTime=c.maxSelectedTime;b.minSelectedTime=c.minSelectedTime}0<a.dataProvider.length&&(this.fixGlue(),this.zoomChart(this.startDate,
this.endDate))}this.panelDataInvalidated=!1},addChartScrollbar:function(){var a=this.chartScrollbarSettings,b=this.scrollbarChart;b&&(b.clear(),b.destroy());if(a.enabled){var c=this.panelsSettings,d=this.categoryAxesSettings,b=new e.AmSerialChart(this.theme);b.svgIcons=c.svgIcons;b.language=this.language;b.pathToImages=this.pathToImages;b.autoMargins=!1;b.addClassNames=!0;this.scrollbarChart=b;b.id="scrollbarChart";b.scrollbarOnly=!0;b.zoomOutText="";c.fontFamily&&(b.fontFamily=c.fontFamily);isNaN(c.fontSize)||
(b.fontSize=c.fontSize);b.marginLeft=c.marginLeft;b.marginRight=c.marginRight;b.marginTop=0;b.marginBottom=0;var c=d.dateFormats,k=b.categoryAxis;k.boldPeriodBeginning=d.boldPeriodBeginning;c&&(k.dateFormats=d.dateFormats);k.labelsEnabled=!1;k.parseDates=!0;d=a.graph;if(e.isString(d)){c=this.panels;for(k=0;k<c.length;k++){var g=e.getObjById(c[k].stockGraphs,a.graph);g&&(d=g)}a.graph=d}var l;d&&(l=new e.AmGraph(this.theme),l.valueField=d.valueField,l.periodValue=d.periodValue,l.type=d.type,l.connect=
d.connect,l.minDistance=a.minDistance,b.addGraph(l));d=new e.ChartScrollbar(this.theme);b.addChartScrollbar(d);e.copyProperties(a,d);d.scrollbarHeight=a.height;d.graph=l;this.listenTo(d,"zoomed",this.handleScrollbarZoom);l=document.createElement("div");l.className=this.classNamePrefix+"-scrollbar-chart-div";l.style.height=a.height+"px";d=this.periodSelectorContainer;c=this.periodSelector;k=this.centerContainer;"bottom"==a.position?c?"bottom"==c.position?k.insertBefore(l,d):k.appendChild(l):k.appendChild(l):
c?"top"==c.position?k.insertBefore(l,d.nextSibling):k.insertBefore(l,k.firstChild):k.insertBefore(l,k.firstChild);b.write(l)}},handleScrollbarZoom:function(a){if(this.skipScrollbarEvent)this.skipScrollbarEvent=!1;else{var b=a.endDate,c={};c.startDate=a.startDate;c.endDate=b;this.updateScrollbar=!1;this.handleZoom(c)}},addPeriodSelector:function(){var a=this.periodSelector;if(a){var b=this.categoryAxesSettings.minPeriod;a.minDuration=e.getPeriodDuration(b);a.minPeriod=b;a.chart=this;var c=this.dataSetSelector,
d,b=this.dssContainer;c&&(d=c.position);var c=this.panelsSettings.panelSpacing,k=document.createElement("div");this.periodSelectorContainer=k;var g=this.leftContainer,l=this.rightContainer,h=this.centerContainer,n=this.panelsContainer,f=a.width+2*c+"px";switch(a.position){case "left":g.style.width=a.width+"px";g.appendChild(k);h.style.paddingLeft=f;break;case "right":h.style.marginRight=f;l.appendChild(k);l.style.width=a.width+"px";break;case "top":n.style.clear="both";h.insertBefore(k,n);k.style.paddingBottom=
c+"px";k.style.overflow="hidden";break;case "bottom":k.style.marginTop=c+"px","bottom"==d?h.insertBefore(k,b):h.appendChild(k)}this.listenTo(a,"changed",this.handlePeriodSelectorZoom);a.write(k)}},addDataSetSelector:function(){var a=this.dataSetSelector;if(a){a.chart=this;a.dataProvider=this.dataSets;var b=a.position,c=this.panelsSettings.panelSpacing,d=document.createElement("div");this.dssContainer=d;var e=this.leftContainer,g=this.rightContainer,l=this.centerContainer,h=this.panelsContainer,c=
a.width+2*c+"px";switch(b){case "left":e.style.width=a.width+"px";e.appendChild(d);l.style.paddingLeft=c;break;case "right":l.style.marginRight=c;g.appendChild(d);g.style.width=a.width+"px";break;case "top":h.style.clear="both";l.insertBefore(d,h);d.style.overflow="hidden";break;case "bottom":l.appendChild(d)}a.write(d)}},handlePeriodSelectorZoom:function(a){var b=this.scrollbarChart;b&&(b.updateScrollbar=!0);a.predefinedPeriod?(this.predefinedStart=a.startDate,this.predefinedEnd=a.endDate):this.predefinedEnd=
this.predefinedStart=null;this.zoomOutValueAxes();this.zoomChart(a.startDate,a.endDate)},zoomOutValueAxes:function(){var a=this.panels;if(this.panelsSettings.zoomOutAxes)for(var b=0;b<a.length;b++){var c=a[b].valueAxes;if(c)for(var d=0;d<c.length;d++){var e=c[d];e.minZoom=NaN;e.maxZoom=NaN}}},addCursor:function(a){var b=this.chartCursorSettings;if(b.enabled){var c=e.processObject(a.chartCursor,e.ChartCursor,this.theme);e.copyProperties(b,c);var d=b.categoryBalloonFunction;a.chartCursor&&(e.copyProperties(a.chartCursor,
c),a.chartCursor.categoryBalloonFunction&&(d=a.chartCursor.categoryBalloonFunction));c.categoryBalloonFunction=d;a.removeChartCursor();a.addChartCursor(c);"mouse"==b.cursorPosition?this.listenTo(c,"moved",this.handleCursorChange):this.listenTo(c,"changed",this.handleCursorChange);this.listenTo(c,"onHideCursor",this.handleCursorChange);this.listenTo(c,"zoomStarted",this.handleCursorChange);this.listenTo(c,"zoomed",this.handleCursorZoom);this.chartCursors.push(c)}},handleCursorChange:function(a){a=
a.target;var b=this.chartCursors,c;for(c=0;c<b.length;c++){var d=b[c];d!=a&&d.syncWithCursor(a,this.chartCursorSettings.onePanelOnly)}},handleCursorZoom:function(a){var b=this.scrollbarChart;b&&(b.updateScrollbar=!0);var b={},c,d;if(this.categoryAxesSettings.equalSpacing){d=this.mainDataSet.categoryField;var e=this.mainDataSet.agregatedDataProviders[this.currentPeriod];c=new Date(e[a.start][d]);d=new Date(e[a.end][d])}else c=new Date(a.start),d=new Date(a.end);b.startDate=c;b.endDate=d;this.handleZoom(b);
this.handleCursorChange(a)},handleZoom:function(a){this.zoomChart(a.startDate,a.endDate)},zoomChart:function(a,b){var c=this;a||(a=c.firstDate);var d=e.newDate(a),k=c.firstDate,g=c.lastDate,l=c.currentPeriod,h=c.categoryAxesSettings,n=h.minPeriod,f=c.panelsSettings,m=c.periodSelector,q=c.panels,t=c.comparedGraphs,p=c.scrollbarChart,y=c.firstDayOfWeek;if(k&&g){a||(a=k);b||(b=g);if(l){var v=e.extractPeriod(l);a.getTime()==b.getTime()&&v!=n&&(b=e.changeDate(b,v.period,v.count),b.setTime(b.getTime()-
1))}a.getTime()<k.getTime()&&(a=k);a.getTime()>g.getTime()&&(a=g);b.getTime()<k.getTime()&&(b=k);b.getTime()>g.getTime()&&(b=g);n=e.getItemIndex(n,h.groupToPeriods);h=l;l=c.choosePeriod(n,a,b);c.currentPeriod=l;var n=e.extractPeriod(l),A=e.getPeriodDuration(n.period,n.count);1>b.getTime()-a.getTime()&&(a=new Date(b.getTime()-1));v=e.newDate(a);c.extendToFullPeriod&&(v.getTime()-k.getTime()<.1*A&&(v=e.resetDateToMin(a,n.period,n.count,y)),g.getTime()-b.getTime()<.1*A&&(b=e.resetDateToMin(g,n.period,
n.count,y),b=e.changeDate(b,n.period,n.count,!0)));for(k=0;k<q.length;k++)g=q[k],g.chartCursor&&g.chartCursor.panning&&(v=d);for(k=0;k<q.length;k++){g=q[k];d=!1;if(l!=h){for(d=0;d<t.length;d++)A=t[d].graph,A.dataProvider=A.dataSet.agregatedDataProviders[l];d=g.categoryAxis;d.firstDayOfWeek=y;d.minPeriod=l;g.dataProvider=c.mainDataSet.agregatedDataProviders[l];if(d=g.chartCursor)d.categoryBalloonDateFormat=c.chartCursorSettings.categoryBalloonDateFormat(n.period),g.showCategoryAxis||(d.categoryBalloonEnabled=
!1);g.startTime=v.getTime();g.endTime=b.getTime();g.start=NaN;g.validateData(!0);d=!0}g.chartCursor&&g.chartCursor.panning&&(d=!0);d||(g.startTime=void 0,g.endTime=void 0,g.zoomToDates(v,b));0<f.startDuration&&c.animationPlayed&&!d?(g.startDuration=0,g.animateAgain()):0<f.startDuration&&!d&&g.animateAgain()}c.animationPlayed=!0;f=e.newDate(b);p&&c.updateScrollbar&&(p.zoomToDates(a,f),c.skipScrollbarEvent=!0,setTimeout(function(){c.resetSkip.call(c)},100));c.updateScrollbar=!0;c.startDate=a;c.endDate=
b;m&&m.zoom(a,b);c.skipEvents||a.getTime()==c.previousStartDate.getTime()&&b.getTime()==c.previousEndDate.getTime()||(m={type:"zoomed"},m.startDate=a,m.endDate=b,m.chart=c,m.period=l,c.fire(m),c.previousStartDate=e.newDate(a),c.previousEndDate=e.newDate(b))}c.eventsHidden&&c.showHideEvents(!1);c.dispDUpd()},dispDUpd:function(){this.skipEvents||(this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),this.chartRendered||(this.chartRendered=!0,this.fire({type:"rendered",chart:this})),
this.fire({type:"drawn",chart:this}));this.animationPlayed=this.chartCreated=!0},resetSkip:function(){this.skipScrollbarEvent=!1},updateGraphs:function(){this.getSelections();if(0<this.dataSets.length){var a=this.panels;this.comparedGraphs=[];var b;for(b=0;b<a.length;b++){var c=a[b],d=c.valueAxes,k;for(k=0;k<d.length;k++){var g=d[k];g.prevLog&&(g.logarithmic=g.prevLog);g.recalculateToPercents="always"==c.recalculateToPercents?!0:!1}d=this.mainDataSet;k=this.comparedDataSets;g=c.stockGraphs;c.graphs=
[];var l,h,n;for(l=0;l<g.length;l++){var f=g[l],f=e.processObject(f,e.StockGraph,this.theme);g[l]=f;if(!f.title||f.resetTitleOnDataSetChange)f.title=d.title,f.resetTitleOnDataSetChange=!0;f.useDataSetColors&&(f.lineColor=d.color,f.fillColors=void 0,f.bulletColor=void 0);var m=!1,q=d.fieldMappings;for(h=0;h<q.length;h++){n=q[h];var t=f.valueField;t&&n.toField==t&&(m=!0);(t=f.openField)&&n.toField==t&&(m=!0);(t=f.closeField)&&n.toField==t&&(m=!0);(t=f.lowField)&&n.toField==t&&(m=!0)}c.graphs.push(f);
c.processGraphs();f.hideFromLegend=m?!1:!0;t=!1;"always"==c.recalculateToPercents&&(t=!0);var p=c.stockLegend,y,v,A,E;p&&(p=e.processObject(p,e.StockLegend,this.theme),c.stockLegend=p,y=p.valueTextComparing,v=p.valueTextRegular,A=p.periodValueTextComparing,E=p.periodValueTextRegular);if(f.comparable){var B=k.length;if(f.valueAxis){0<B&&f.valueAxis.logarithmic&&"never"!=c.recalculateToPercents&&(f.valueAxis.logarithmic=!1,f.valueAxis.prevLog=!0);0<B&&"whenComparing"==c.recalculateToPercents&&(f.valueAxis.recalculateToPercents=
!0);p&&f.valueAxis&&!0===f.valueAxis.recalculateToPercents&&(t=!0);var D;for(D=0;D<B;D++){var C=k[D],r=f.comparedGraphs[C.id];r||(r=new e.AmGraph(this.theme),r.id="comparedGraph_"+f.id+"_"+C.id);f.compareGraphType&&(r.type=f.compareGraphType);f.compareGraph&&(e.copyProperties(f.compareGraph,r),f.compareGraph.balloon&&(r.balloon={},e.copyProperties(f.compareGraph.balloon,r.balloon)));r.periodValue=f.periodValue;r.recalculateValue=f.recalculateValue;r.dataSet=C;r.behindColumns=f.behindColumns;f.comparedGraphs[C.id]=
r;r.seriesIdField="amCategoryIdField";r.connect=f.connect;r.clustered=f.clustered;r.showBalloon=f.showBalloon;this.passFields(f,r);var z=f.compareField;z||(z=f.valueField);r.customBulletsHidden=!f.showEventsOnComparedGraphs;m=!1;q=C.fieldMappings;for(h=0;h<q.length;h++)n=q[h],n.toField==z&&(m=!0);if(m){r.valueField=z;r.title=C.title?C.title:f.title;r.lineColor=C.color;f.compareGraphLineColor&&(r.lineColor=f.compareGraphLineColor);h=f.compareGraphLineThickness;isNaN(h)||(r.lineThickness=h);h=f.compareGraphDashLength;
isNaN(h)||(r.dashLength=h);h=f.compareGraphLineAlpha;isNaN(h)||(r.lineAlpha=h);h=f.compareGraphCornerRadiusTop;isNaN(h)||(r.cornerRadiusTop=h);h=f.compareGraphCornerRadiusBottom;isNaN(h)||(r.cornerRadiusBottom=h);h=f.compareGraphBalloonColor;isNaN(h)||(r.balloonColor=h);h=f.compareGraphBulletColor;isNaN(h)||(r.bulletColor=h);if(h=f.compareGraphFillColors)r.fillColors=h;if(h=f.compareGraphNegativeFillColors)r.negativeFillColors=h;if(h=f.compareGraphFillAlphas)r.fillAlphas=h;if(h=f.compareGraphNegativeFillAlphas)r.negativeFillAlphas=
h;if(h=f.compareGraphBullet)r.bullet=h;if(h=f.compareGraphNumberFormatter)r.numberFormatter=h;h=f.compareGraphPrecision;isNaN(h)||(r.precision=h);if(h=f.compareGraphBalloonText)r.balloonText=h;h=f.compareGraphBulletSize;isNaN(h)||(r.bulletSize=h);h=f.compareGraphBulletAlpha;isNaN(h)||(r.bulletAlpha=h);h=f.compareGraphBulletBorderAlpha;isNaN(h)||(r.bulletBorderAlpha=h);if(h=f.compareGraphBulletBorderColor)r.bulletBorderColor=h;h=f.compareGraphBulletBorderThickness;isNaN(h)||(r.bulletBorderThickness=
h);r.visibleInLegend=f.compareGraphVisibleInLegend;r.balloonFunction=f.compareGraphBalloonFunction;r.hideBulletsCount=f.hideBulletsCount;r.valueAxis=f.valueAxis;p&&(t&&y?(r.legendValueTextR=y,r.legendPeriodValueTextR=A):(v&&(r.legendValueTextR=v),r.legendPeriodValueTextR=E));c.showComparedOnTop?c.graphs.push(r):c.graphs.unshift(r);this.comparedGraphs.push({graph:r,dataSet:C})}}}}p&&(t&&y?(f.legendValueTextR=y,f.legendPeriodValueTextR=A):(v&&(f.legendValueTextR=v),f.legendPeriodValueTextR=E))}}}},
passFields:function(a,b){for(var c="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className".split(" "),d=0;d<c.length;d++){var e=c[d];b[e+"Field"]=a[e+"Field"]}},choosePeriod:function(a,b,c){var d=this.categoryAxesSettings,k=d.groupToPeriods,g=k[a],l=k[a+1],h=e.extractPeriod(g),h=e.getPeriodDuration(h.period,h.count),n=b.getTime(),f=c.getTime(),m=d.maxSeries;d.alwaysGroup&&g==d.minPeriod&&(g=1<k.length?k[1]:k[0]);return(f-
n)/h>m&&0<m&&l?this.choosePeriod(a+1,b,c):g},getSelections:function(){var a=[],b=this.dataSets,c;for(c=0;c<b.length;c++){var d=b[c];d.compared&&a.push(d)}this.comparedDataSets=a;b=this.panels;for(c=0;c<b.length;c++)d=b[c],d.hideDrawingIcons&&("never"!=d.recalculateToPercents&&0<a.length?d.hideDrawingIcons(!0):d.drawingIconsEnabled&&d.hideDrawingIcons(!1))},addPanel:function(a){this.panels.push(a);this.prevPH=void 0;e.removeChart(a);e.addChart(a)},addPanelAt:function(a,b){this.panels.splice(b,0,a);
this.prevPH=void 0;e.removeChart(a);e.addChart(a)},removePanel:function(a){var b=this.panels;this.prevPH=void 0;var c;for(c=b.length-1;0<=c;c--)b[c]==a&&(this.fire({type:"panelRemoved",panel:a,chart:this}),b.splice(c,1),a.destroy(),a.clear())},validateData:function(a){var b=this;b.validateDataTO&&clearTimeout(b.validateDataTO);b.validateDataTO=setTimeout(function(){b.validateDataReal.call(b,a)},100)},validateDataReal:function(a){a||this.resetDataParsed();this.updateDataSets();this.mainDataSet.compared=
!1;this.updateData();(a=this.dataSetSelector)&&a.write(a.div)},resetDataParsed:function(){var a=this.dataSets,b;for(b=0;b<a.length;b++)a[b].dataParsed=!1},validateNow:function(a,b){this.skipDefault=!0;this.chartRendered=!1;this.prevPH=void 0;this.skipEvents=b;this.clear(!0);this.initTO&&clearTimeout(this.initTO);a&&this.resetDataParsed();this.write(this.div)},hideStockEvents:function(){this.showHideEvents(!1);this.eventsHidden=!0},showStockEvents:function(){this.showHideEvents(!0);this.eventsHidden=
!1},showHideEvents:function(a){var b=this.panels,c;for(c=0;c<b.length;c++){var d=b[c].graphs,e;for(e=0;e<d.length;e++){var g=d[e];!0===a?g.showCustomBullets(!0):g.hideCustomBullets(!0)}}},invalidateSize:function(){var a=this;clearTimeout(a.validateTO);var b=setTimeout(function(){a.validateNow()},5);a.validateTO=b},measure:function(){var a=this.div;if(a){var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);this.divRealWidth=b;this.divRealHeight=c}},handleResize:function(){var a=
this,b=setTimeout(function(){a.validateSizeReal()},150);a.initTO=b},validateSizeReal:function(){this.previousWidth=this.divRealWidth;this.previousHeight=this.divRealHeight;this.measure();if(this.divRealWidth!=this.previousWidth||this.divRealHeight!=this.previousHeight)0<this.divRealWidth&&0<this.divRealHeight&&this.fire({type:"resized",chart:this}),this.divRealHeight!=this.previousHeight&&this.validateNow()},clear:function(a){var b=this.panels,c;if(b)for(c=0;c<b.length;c++){var d=b[c];a||(d.cleanChart(),
d.destroy());d.clear(a)}(b=this.scrollbarChart)&&b.clear();this.validateDataTO&&clearTimeout(this.validateDataTO);if(b=this.div)b.innerHTML="";a||(e.removeChart(this),this.div=null,e.deleteObject(this))}});e.StockEvent=e.Class({construct:function(){}})})();(function(){var e=window.AmCharts;e.DataSet=e.Class({construct:function(){this.cname="DataSet";this.fieldMappings=[];this.dataProvider=[];this.agregatedDataProviders=[];this.stockEvents=[];this.compared=!1;this.showInCompare=this.showInSelect=!0}})})();(function(){var e=window.AmCharts;e.PeriodSelector=e.Class({construct:function(a){this.cname="PeriodSelector";this.theme=a;this.createEvents("changed");this.inputFieldsEnabled=!0;this.position="bottom";this.width=180;this.fromText="From: ";this.toText="to: ";this.periodsText="Zoom: ";this.accessibilityText="Select a timeframe to show chart data";this.periods=[];this.inputFieldWidth=100;this.dateFormat="DD-MM-YYYY";this.hideOutOfScopePeriods=!0;e.applyTheme(this,a,this.cname)},zoom:function(a,b){var c=
this.chart;this.inputFieldsEnabled&&(this.startDateField.value=e.formatDate(a,this.dateFormat,c),this.endDateField.value=e.formatDate(b,this.dateFormat,c));this.markButtonAsSelected()},write:function(a){var b=this,c=b.chart,d=c.classNamePrefix;a.className="amChartsPeriodSelector "+d+"-period-selector-div";var k=b.width,g=b.position;b.width=void 0;b.position=void 0;e.applyStyles(a.style,b);b.width=k;b.position=g;b.div=a;a.innerHTML='<fieldset style="border: none; padding:0"><legend style="display: none;">'+
        (c.langObj.periodSelectorAccessibilityText||b.accessibilityText)+"</legend></fieldset>";var l=a.firstChild;a=b.theme;k=b.position;k="top"==k||"bottom"==k?!1:!0;b.vertical=k;var h=g=0;if(b.inputFieldsEnabled){var n=document.createElement("div");l.appendChild(n);var f=document.createTextNode(c.langObj.fromText||b.fromText);n.appendChild(f);k?e.addBr(n):(n.style.styleFloat="left",n.style.display="inline");var m=document.createElement("input");m.setAttribute("aria-label",c.langObj.fromText||b.fromText);
m.className="amChartsInputField "+d+"-start-date-input";a&&e.applyStyles(m.style,a.PeriodInputField);m.style.textAlign="center";m.onblur=function(a){b.handleCalChange(a)};e.isNN&&m.addEventListener("keypress",function(a){b.handleCalendarChange.call(b,a)},!0);e.isIE&&m.attachEvent("onkeypress",function(a){b.handleCalendarChange.call(b,a)});n.appendChild(m);b.startDateField=m;if(k)f=b.width-6+"px",e.addBr(n);else{var f=b.inputFieldWidth+"px",q=document.createTextNode(" ");n.appendChild(q)}m.style.width=
f;m=document.createTextNode(c.langObj.toText||b.toText);n.appendChild(m);k&&e.addBr(n);m=document.createElement("input");m.setAttribute("aria-label",c.langObj.toText||b.toText);m.className="amChartsInputField "+d+"-end-date-input";a&&e.applyStyles(m.style,a.PeriodInputField);m.style.textAlign="center";m.onblur=function(){b.handleCalChange()};e.isNN&&m.addEventListener("keypress",function(a){b.handleCalendarChange.call(b,a)},!0);e.isIE&&m.attachEvent("onkeypress",function(a){b.handleCalendarChange.call(b,
a)});n.appendChild(m);b.endDateField=m;k?e.addBr(n):g=m.offsetHeight+2;f&&(m.style.width=f)}n=b.periods;if(e.ifArray(n)){f=document.createElement("div");k||(f.style.cssFloat="right",f.style.styleFloat="right",f.style.display="inline");l.appendChild(f);k&&e.addBr(f);c=document.createTextNode(c.langObj.periodsText||b.periodsText);f.appendChild(c);b.periodContainer=f;for(var t,c=0;c<n.length;c++)l=n[c],t=document.createElement("input"),t.type="button",t.value=l.label,t.period=l.period,t.count=l.count,
t.periodObj=l,t.className="amChartsButton "+d+"-period-input",a&&e.applyStyles(t.style,a.PeriodButton),k&&(t.style.width=b.width-1+"px"),t.style.boxSizing="border-box",f.appendChild(t),b.addEventListeners(t),l.button=t;!k&&t&&(h=t.offsetHeight)}b.offsetHeight=Math.max(g,h)},addEventListeners:function(a){var b=this;e.isNN&&a.addEventListener("click",function(a){b.handlePeriodChange.call(b,a)},!0);e.isIE&&a.attachEvent("onclick",function(a){b.handlePeriodChange.call(b,a)})},getPeriodDates:function(){var a=
this.periods,b;for(b=0;b<a.length;b++)this.selectPeriodButton(a[b],!0)},handleCalendarChange:function(a){13==a.keyCode&&this.handleCalChange(a)},handleCalChange:function(a){var b=this.dateFormat,c=e.stringToDate(this.startDateField.value,b),b=this.chart.getLastDate(e.stringToDate(this.endDateField.value,b));try{this.startDateField.blur(),this.endDateField.blur()}catch(k){}if(c&&b){var d={type:"changed"};d.startDate=c;d.endDate=b;d.chart=this.chart;d.event=a;this.fire(d)}},handlePeriodChange:function(a){this.selectPeriodButton((a.srcElement?
a.srcElement:a.target).periodObj,!1,a)},setRanges:function(a,b){this.firstDate=a;this.lastDate=b;this.getPeriodDates()},selectPeriodButton:function(a,b,c){var d=a.button,k=d.count,g=d.period,l=this.chart,h,n,f=this.firstDate,m=this.lastDate,q,t=this.theme;h=this.selectFromStart;f&&m&&("MAX"==g?(h=f,n=m):"YTD"==g?(h=new Date,h.setMonth(0,1),h.setHours(0,0,0,0),0===k&&h.setDate(h.getDate()-1),n=this.lastDate):"YYYY"==g||"MM"==g?h?(h=f,n=new Date(f),"YYYY"==g&&(k*=12),n.setMonth(n.getMonth()+k)):(h=
new Date(m),"YYYY"==g&&(g="MM",k*=12),"MM"==g&&(h=e.resetDateToMin(h,"DD")),e.changeDate(h,g,k,!1),n=m):"fff"==g?(e.getPeriodDuration(g,k),q=e.getPeriodDuration(g,k),h?(h=f,n.setMilliseconds(f.getMilliseconds()-q+1)):(h=new Date(m.getTime()),h.setMilliseconds(h.getMilliseconds()-q+1),n=this.lastDate)):(q=e.getPeriodDuration(g,k),h?(h=f,n=new Date(f.getTime()+q-1)):(h=new Date(m.getTime()-q+1),n=m)),a.startTime=h.getTime(),this.hideOutOfScopePeriods&&(b&&a.startTime<f.getTime()?d.style.display="none":
d.style.display="inline"),h.getTime()>m.getTime()&&(q=e.getPeriodDuration("DD",1),h=new Date(m.getTime()-q)),h.getTime()<f.getTime()&&(h=f),"YTD"==g&&(a.startTime=h.getTime(),m.getFullYear()<(new Date).getFullYear()&&(d.style.display="none")),a.endTime=n.getTime(),b||(this.skipMark=!0,this.unselectButtons(),d.className="amChartsButtonSelected "+l.classNamePrefix+"-period-input-selected",t&&e.applyStyles(d.style,t.PeriodButtonSelected),a={type:"changed"},a.startDate=h,a.endDate=n,a.predefinedPeriod=
g,a.chart=this.chart,a.count=k,a.event=c,this.fire(a)))},markButtonAsSelected:function(){if(!this.skipMark){var a=this.chart,b=this.periods,c=a.startDate.getTime(),d=a.endDate.getTime(),k=this.lastDate.getTime();d>k&&(d=k);k=this.theme;this.unselectButtons();var g;for(g=b.length-1;0<=g;g--){var l=b[g],h=l.button;l.startTime&&l.endTime&&c==l.startTime&&d==l.endTime&&(this.unselectButtons(),h.className="amChartsButtonSelected "+a.classNamePrefix+"-period-input-selected",k&&e.applyStyles(h.style,k.PeriodButtonSelected))}}this.skipMark=
!1},unselectButtons:function(){var a=this.chart,b=this.periods,c,d=this.theme;for(c=b.length-1;0<=c;c--){var k=b[c].button;k.className="amChartsButton "+a.classNamePrefix+"-period-input";d&&e.applyStyles(k.style,d.PeriodButton)}},setDefaultPeriod:function(){var a=this.periods,b;if(this.chart.chartCreated)for(b=0;b<a.length;b++){var c=a[b];c.selected&&this.selectPeriodButton(c)}}})})();(function(){var e=window.AmCharts;e.StockGraph=e.Class({inherits:e.AmGraph,construct:function(a){e.StockGraph.base.construct.call(this,a);this.cname="StockGraph";this.useDataSetColors=!0;this.periodValue="Close";this.compareGraphType="line";this.compareGraphVisibleInLegend=!0;this.comparable=this.resetTitleOnDataSetChange=!1;this.comparedGraphs={};this.showEventsOnComparedGraphs=!1;e.applyTheme(this,a,this.cname)}})})();(function(){var e=window.AmCharts;e.StockPanel=e.Class({inherits:e.AmSerialChart,construct:function(a){e.StockPanel.base.construct.call(this,a);this.cname="StockPanel";this.theme=a;this.showCategoryAxis=this.showComparedOnTop=!0;this.recalculateToPercents="whenComparing";this.panelHeaderPaddingBottom=this.panelHeaderPaddingLeft=this.panelHeaderPaddingRight=this.panelHeaderPaddingTop=0;this.trendLineAlpha=1;this.trendLineColor="#00CC00";this.trendLineColorHover="#CC0000";this.trendLineThickness=2;
this.trendLineDashLength=0;this.stockGraphs=[];this.drawingIconsEnabled=!1;this.iconSize=38;this.autoMargins=this.allowTurningOff=this.eraseAll=this.erasingEnabled=this.drawingEnabled=!1;e.applyTheme(this,a,this.cname)},initChart:function(a){e.StockPanel.base.initChart.call(this,a);this.drawingIconsEnabled&&this.createDrawIcons();(a=this.chartCursor)&&this.listenTo(a,"draw",this.handleDraw)},addStockGraph:function(a){this.stockGraphs.push(a);return a},handleCursorZoom:function(a){a.start=NaN;a.end=
NaN;e.StockPanel.base.handleCursorZoom.call(this,a)},removeStockGraph:function(a){var b=this.stockGraphs,c;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1)},createDrawIcons:function(){var a=this,b=a.iconSize,c=a.container,d=a.pathToImages,k=a.realWidth-2*b-1-a.marginRight,g=e.rect(c,b,b,"#000",.005),l=e.rect(c,b,b,"#000",.005);l.translate(b+1,0);var h=c.image(d+"pencilIcon"+a.extension,0,0,b,b);e.setCN(a,h,"pencil");a.pencilButton=h;l.setAttr("cursor","pointer");g.setAttr("cursor","pointer");g.mouseup(function(){a.handlePencilClick()});
var n=c.image(d+"pencilIconH"+a.extension,0,0,b,b);e.setCN(a,n,"pencil-pushed");a.pencilButtonPushed=n;a.drawingEnabled||n.hide();var f=c.image(d+"eraserIcon"+a.extension,b+1,0,b,b);e.setCN(a,f,"eraser");a.eraserButton=f;l.mouseup(function(){a.handleEraserClick()});g.touchend&&(g.touchend(function(){a.handlePencilClick()}),l.touchend(function(){a.handleEraserClick()}));b=c.image(d+"eraserIconH"+a.extension,b+1,0,b,b);e.setCN(a,b,"eraser-pushed");a.eraserButtonPushed=b;a.erasingEnabled||b.hide();c=
c.set([h,n,f,b,g,l]);e.setCN(a,c,"drawing-tools");c.translate(k,1);this.hideIcons&&c.hide()},handlePencilClick:function(){var a=!this.drawingEnabled;this.disableDrawing(!a);this.erasingEnabled=!1;var b=this.eraserButtonPushed;b&&b.hide();b=this.pencilButtonPushed;a?b&&b.show():(b&&b.hide(),this.setMouseCursor("auto"))},disableDrawing:function(a){this.drawingEnabled=!a;var b=this.chartCursor;this.stockChart&&(this.stockChart.enableCursors(a),b&&b.enableDrawing(!a))},handleEraserClick:function(){this.disableDrawing(!0);
var a=this.pencilButtonPushed;a&&a.hide();a=this.eraserButtonPushed;if(this.eraseAll){var a=this.trendLines,b;for(b=a.length-1;0<=b;b--){var c=a[b];c.isProtected||this.removeTrendLine(c)}this.validateNow()}else(this.erasingEnabled=b=!this.erasingEnabled)?(a&&a.show(),this.setTrendColorHover(this.trendLineColorHover),this.setMouseCursor("auto")):(a&&a.hide(),this.setTrendColorHover())},setTrendColorHover:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--){var d=b[c];d.isProtected||(d.rollOverColor=
a);this.listenTo(d,"click",this.handleTrendClick)}},handleDraw:function(a){var b=this.drawOnAxis;e.isString(b)&&(b=this.getValueAxisById(b));b||(b=this.valueAxes[0]);this.drawOnAxis=b;var c=this.categoryAxis,d=a.initialX,k=a.finalX,g=a.initialY;a=a.finalY;var l=new e.TrendLine(this.theme);l.initialDate=c.coordinateToDate(d);l.finalDate=c.coordinateToDate(k);l.initialValue=b.coordinateToValue(g);l.finalValue=b.coordinateToValue(a);l.lineAlpha=this.trendLineAlpha;l.lineColor=this.trendLineColor;l.lineThickness=
this.trendLineThickness;l.dashLength=this.trendLineDashLength;l.valueAxis=b;l.categoryAxis=c;this.addTrendLine(l);this.listenTo(l,"click",this.handleTrendClick);this.validateNow()},hideDrawingIcons:function(a){(this.hideIcons=a)&&this.disableDrawing(a)},handleTrendClick:function(a){this.erasingEnabled&&(a=a.trendLine,this.eraseAll||a.isProtected||this.removeTrendLine(a),this.validateNow())},handleWheelReal:function(a,b){var c=this.scrollbarChart;if(!this.wheelBusy&&c){var d=1,e=1;this.mouseWheelZoomEnabled?
b||(d=-1):b&&(d=-1);if(d!=e)var g=this.mouseX/this.plotAreaWidth,d=d*g,e=e*(1-g);if(c=c.chartScrollbar)c.getPercents(),g=.05*(c.percentEnd-c.percentStart),.005>g&&(g=.005),0>a?(d=c.percentStart+d*g,e=c.percentEnd+e*g):(d=c.percentStart-d*g,e=c.percentEnd-e*g),e>d&&c.percentZoom(d,e,!0)}}})})();(function(){var e=window.AmCharts;e.CategoryAxesSettings=e.Class({construct:function(a){this.cname="CategoryAxesSettings";this.minPeriod="DD";this.equalSpacing=!1;this.axisHeight=28;this.tickLength=this.axisAlpha=0;this.gridCount=10;this.maxSeries=150;this.groupToPeriods="ss 10ss 30ss mm 10mm 30mm hh DD WW MM YYYY".split(" ");this.markPeriodChange=this.autoGridCount=!0;e.applyTheme(this,a,this.cname)}})})();(function(){var e=window.AmCharts;e.ChartCursorSettings=e.Class({construct:function(a){this.cname="ChartCursorSettings";this.enabled=!0;this.bulletsEnabled=this.valueBalloonsEnabled=!1;this.graphBulletSize=1;this.onePanelOnly=!1;this.categoryBalloonDateFormats=[{period:"YYYY",format:"YYYY"},{period:"MM",format:"MMM, YYYY"},{period:"WW",format:"MMM DD, YYYY"},{period:"DD",format:"MMM DD, YYYY"},{period:"hh",format:"JJ:NN"},{period:"mm",format:"JJ:NN"},{period:"ss",format:"JJ:NN:SS"},{period:"fff",
format:"JJ:NN:SS"}];e.applyTheme(this,a,this.cname)},categoryBalloonDateFormat:function(a){var b=this.categoryBalloonDateFormats,c,d;for(d=0;d<b.length;d++)b[d].period==a&&(c=b[d].format);return c}})})();(function(){var e=window.AmCharts;e.ChartScrollbarSettings=e.Class({construct:function(a){this.cname="ChartScrollbarSettings";this.height=40;this.enabled=!0;this.color="#FFFFFF";this.updateOnReleaseOnly=this.autoGridCount=!0;this.hideResizeGrips=!1;this.position="bottom";this.minDistance=1;e.applyTheme(this,a,this.cname)}})})();(function(){var e=window.AmCharts;e.LegendSettings=e.Class({construct:function(a){this.cname="LegendSettings";this.marginBottom=this.marginTop=0;this.usePositiveNegativeOnPercentsOnly=!0;this.positiveValueColor="#00CC00";this.negativeValueColor="#CC0000";this.autoMargins=this.equalWidths=this.textClickEnabled=!1;e.applyTheme(this,a,this.cname)}})})();(function(){var e=window.AmCharts;e.PanelsSettings=e.Class({construct:function(a){this.cname="PanelsSettings";this.marginBottom=this.marginTop=this.marginRight=this.marginLeft=0;this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.panelSpacing=8;this.panEventsEnabled=!0;this.creditsPosition="top-right";this.svgIcons=this.zoomOutAxes=!0;e.applyTheme(this,a,this.cname)}})})();(function(){var e=window.AmCharts;e.StockEventsSettings=e.Class({construct:function(a){this.cname="StockEventsSettings";this.type="sign";this.backgroundAlpha=1;this.backgroundColor="#DADADA";this.borderAlpha=1;this.borderColor="#888888";this.balloonColor=this.rollOverColor="#CC0000";e.applyTheme(this,a,this.cname)}})})();(function(){var e=window.AmCharts;e.ValueAxesSettings=e.Class({construct:function(a){this.cname="ValueAxesSettings";this.tickLength=0;this.showFirstLabel=this.autoGridCount=this.inside=!0;this.showLastLabel=!1;this.axisAlpha=0;e.applyTheme(this,a,this.cname)}})})();(function(){var e=window.AmCharts;e.getItemIndex=function(a,b){var c=-1,d;for(d=0;d<b.length;d++)a==b[d]&&(c=d);return c};e.addBr=function(a){a.appendChild(document.createElement("br"))};e.applyStyles=function(a,b){if(b&&a)for(var c in a){var d=c,e=b[d];if(void 0!==e)try{a[d]=e}catch(g){}}}})();(function(){var e=window.AmCharts;e.StockLegend=e.Class({inherits:e.AmLegend,construct:function(a){e.StockLegend.base.construct.call(this,a);this.cname="StockLegend";this.valueTextComparing="[[percents.value]]%";this.valueTextRegular="[[value]]";e.applyTheme(this,a,this.cname)},drawLegend:function(){var a=this;e.StockLegend.base.drawLegend.call(a);var b=a.chart;if(b.allowTurningOff){var c=a.container,d=c.image(b.pathToImages+"xIcon"+b.extension,b.realWidth-19,3,19,19),b=c.image(b.pathToImages+"xIconH"+
b.extension,b.realWidth-19,3,19,19);b.hide();a.xButtonHover=b;d.mouseup(function(){a.handleXClick()}).mouseover(function(){a.handleXOver()});b.mouseup(function(){a.handleXClick()}).mouseout(function(){a.handleXOut()})}},handleXOver:function(){this.xButtonHover.show()},handleXOut:function(){this.xButtonHover.hide()},handleXClick:function(){var a=this.chart,b=a.stockChart;b.removePanel(a);b.validateNow()}})})();(function(){var e=window.AmCharts;e.DataSetSelector=e.Class({construct:function(a){this.cname="DataSetSelector";this.theme=a;this.createEvents("dataSetSelected","dataSetCompared","dataSetUncompared");this.position="left";this.selectText="Select:";this.comboBoxSelectText="Select...";this.compareText="Compare to:";this.width=180;this.dataProvider=[];this.listHeight=150;this.listCheckBoxSize=14;this.rollOverBackgroundColor="#b2e1ff";this.selectedBackgroundColor="#7fceff";e.applyTheme(this,a,this.cname)},
write:function(a){var b=this,c,d=b.theme,k=b.chart;a.className="amChartsDataSetSelector "+k.classNamePrefix+"-data-set-selector-div";var g=b.width;c=b.position;b.width=void 0;b.position=void 0;e.applyStyles(a.style,b);b.div=a;b.width=g;b.position=c;a.innerHTML="";var g=b.position,l;l="top"==g||"bottom"==g?!1:!0;b.vertical=l;var h;l&&(h=b.width+"px");var g=b.dataProvider,n,f;if(1<b.countDataSets("showInSelect")){c=document.createTextNode(k.langObj.selectText||b.selectText);a.appendChild(c);l&&e.addBr(a);
var m=document.createElement("select");h&&(m.style.width=h);b.selectCB=m;d&&e.applyStyles(m.style,d.DataSetSelect);m.className=k.classNamePrefix+"-data-set-select";a.appendChild(m);e.isNN&&m.addEventListener("change",function(a){b.handleDataSetChange.call(b,a)},!0);e.isIE&&m.attachEvent("onchange",function(a){b.handleDataSetChange.call(b,a)});for(c=0;c<g.length;c++)if(n=g[c],!0===n.showInSelect){f=document.createElement("option");f.className=k.classNamePrefix+"-data-set-select-option";f.text=n.title;
f.value=c;n==b.chart.mainDataSet&&(f.selected=!0);try{m.add(f,null)}catch(q){m.add(f)}}b.offsetHeight=m.offsetHeight}if(0<b.countDataSets("showInCompare")&&1<g.length)if(l?(e.addBr(a),e.addBr(a)):(c=document.createTextNode(" "),a.appendChild(c)),c=document.createTextNode(k.langObj.compareText||b.compareText),a.appendChild(c),f=b.listCheckBoxSize,l){e.addBr(a);h=document.createElement("div");a.appendChild(h);h.className="amChartsCompareList "+k.classNamePrefix+"-compare-div";d&&e.applyStyles(h.style,
d.DataSetCompareList);h.style.overflow="auto";h.style.overflowX="hidden";h.style.width=b.width-2+"px";h.style.maxHeight=b.listHeight+"px";for(c=0;c<g.length;c++)n=g[c],!0===n.showInCompare&&n!=b.chart.mainDataSet&&(d=document.createElement("div"),d.style.padding="4px",d.style.position="relative",d.name="amCBContainer",d.className=k.classNamePrefix+"-compare-item-div",d.dataSet=n,d.style.height=f+"px",n.compared&&(d.style.backgroundColor=b.selectedBackgroundColor),h.appendChild(d),l=document.createElement("div"),
l.style.width=f+"px",l.style.height=f+"px",l.style.position="absolute",l.style.backgroundColor=n.color,d.appendChild(l),l=document.createElement("div"),l.style.width="100%",l.style.position="absolute",l.style.left=f+10+"px",d.appendChild(l),n=document.createTextNode(n.title),l.style.whiteSpace="nowrap",l.style.cursor="default",l.appendChild(n),b.addEventListeners(d));e.addBr(a);e.addBr(a)}else{d=document.createElement("select");b.compareCB=d;h&&(d.style.width=h);a.appendChild(d);e.isNN&&d.addEventListener("change",
function(a){b.handleCBSelect.call(b,a)},!0);e.isIE&&d.attachEvent("onchange",function(a){b.handleCBSelect.call(b,a)});f=document.createElement("option");f.text=k.langObj.comboBoxSelectText||b.comboBoxSelectText;try{d.add(f,null)}catch(q){d.add(f)}for(c=0;c<g.length;c++)if(n=g[c],!0===n.showInCompare&&n!=b.chart.mainDataSet){f=document.createElement("option");f.text=n.title;f.value=c;n.compared&&(f.selected=!0);try{d.add(f,null)}catch(q){d.add(f)}}b.offsetHeight=d.offsetHeight}},addEventListeners:function(a){var b=
this;e.isNN&&(a.addEventListener("mouseover",function(a){b.handleRollOver.call(b,a)},!0),a.addEventListener("mouseout",function(a){b.handleRollOut.call(b,a)},!0),a.addEventListener("click",function(a){b.handleClick.call(b,a)},!0));e.isIE&&(a.attachEvent("onmouseout",function(a){b.handleRollOut.call(b,a)}),a.attachEvent("onmouseover",function(a){b.handleRollOver.call(b,a)}),a.attachEvent("onclick",function(a){b.handleClick.call(b,a)}))},handleDataSetChange:function(){var a=this.selectCB,a=this.dataProvider[a.options[a.selectedIndex].value],
b=this.chart;b.mainDataSet=a;b.zoomOutOnDataSetChange&&(b.startDate=void 0,b.endDate=void 0);b.validateData(!0);this.fire({type:"dataSetSelected",dataSet:a,chart:this.chart})},handleRollOver:function(a){a=this.getRealDiv(a);a.dataSet.compared||(a.style.backgroundColor=this.rollOverBackgroundColor)},handleRollOut:function(a){a=this.getRealDiv(a);a.dataSet.compared||(a.style.removeProperty&&a.style.removeProperty("background-color"),a.style.removeAttribute&&a.style.removeAttribute("backgroundColor"))},
handleCBSelect:function(a){var b=this.compareCB,c=this.dataProvider,d,e;for(d=0;d<c.length;d++)e=c[d],e.compared&&(a={type:"dataSetUncompared",dataSet:e}),e.compared=!1;c=b.selectedIndex;0<c&&(e=this.dataProvider[b.options[c].value],e.compared||(a={type:"dataSetCompared",dataSet:e}),e.compared=!0);b=this.chart;b.validateData(!0);a.chart=b;this.fire(a)},handleClick:function(a){a=this.getRealDiv(a).dataSet;!0===a.compared?(a.compared=!1,a={type:"dataSetUncompared",dataSet:a}):(a.compared=!0,a={type:"dataSetCompared",
dataSet:a});var b=this.chart;b.validateData(!0);a.chart=b;this.fire(a)},getRealDiv:function(a){a||(a=window.event);a=a.currentTarget?a.currentTarget:a.srcElement;"amCBContainer"==a.parentNode.name&&(a=a.parentNode);return a},countDataSets:function(a){var b=this.dataProvider,c=0,d;for(d=0;d<b.length;d++)!0===b[d][a]&&c++;return c}})})();(function(){var e=window.AmCharts;e.StackedBullet=e.Class({construct:function(){this.stackDown=!1;this.mastHeight=8;this.shapes=[];this.backgroundColors=[];this.backgroundAlphas=[];this.borderAlphas=[];this.borderColors=[];this.colors=[];this.rollOverColors=[];this.showOnAxiss=[];this.values=[];this.showAts=[];this.textColor="#000000";this.nextY=0;this.size=16},parseConfig:function(){var a=this.bulletConfig;this.eventObjects=a.eventObjects;this.letters=a.letters;this.shapes=a.shapes;this.backgroundColors=
a.backgroundColors;this.backgroundAlphas=a.backgroundAlphas;this.borderColors=a.borderColors;this.borderAlphas=a.borderAlphas;this.colors=a.colors;this.rollOverColors=a.rollOverColors;this.date=a.date;this.showOnAxiss=a.showOnAxis;this.axisCoordinate=a.minCoord;this.showAts=a.showAts;this.values=a.values;this.fontSizes=a.fontSizes;this.showBullets=a.showBullets},write:function(a){this.parseConfig();this.container=a;this.bullets=[];this.fontSize=this.chart.fontSize;if(this.graph){var b=this.graph.fontSize;
b&&(this.fontSize=b)}b=this.letters.length;(this.mastHeight+2*(this.fontSize/2+2))*b>this.availableSpace&&(this.stackDown=!0);this.set=a.set();this.cset=a.set();this.set.push(this.cset);this.set.doNotScale=!0;a=0;var c;for(c=0;c<b;c++){this.shape=this.shapes[c];this.backgroundColor=this.backgroundColors[c];this.backgroundAlpha=this.backgroundAlphas[c];this.borderAlpha=this.borderAlphas[c];this.borderColor=this.borderColors[c];this.rollOverColor=this.rollOverColors[c];this.showOnAxis=this.showOnAxiss[c];
this.showBullet=this.showBullets[c];this.color=this.colors[c];this.value=this.values[c];this.showAt=this.showAts[c];var d=this.fontSizes[c];isNaN(d)||(this.fontSize=d);this.addLetter(this.letters[c],a,c);this.showOnAxis||a++}},addLetter:function(a,b,c){var d=this.container;b=d.set();var k=-1,g=this.stackDown,l=this.graph.valueAxis;this.showOnAxis&&(this.stackDown=l.reversed?!0:!1);this.stackDown&&(k=1);var h=0,n=0,f=0,m,q=this.fontSize,t=this.mastHeight,p=this.shape,y=this.textColor;void 0!==this.color&&
(y=this.color);void 0===a&&(a="");a=e.fixBrakes(a);a=e.text(d,a,y,this.chart.fontFamily,this.fontSize);a.node.style.pointerEvents="none";d=a.getBBox();this.labelWidth=y=d.width;this.labelHeight=d.height;var v,d=0;switch(p){case "sign":v=this.drawSign(b);h=t+4+q/2;d=t+q+4;1==k&&(h-=4);break;case "flag":v=this.drawFlag(b);n=y/2+3;h=t+4+q/2;d=t+q+4;1==k&&(h-=4);break;case "pin":v=this.drawPin(b);h=6+q/2;d=q+8;break;case "triangleUp":v=this.drawTriangleUp(b);h=-q-1;d=q+4;k=-1;break;case "triangleDown":v=
this.drawTriangleDown(b);h=q+1;d=q+4;k=-1;break;case "triangleLeft":v=this.drawTriangleLeft(b);n=q;d=q+4;k=-1;break;case "triangleRight":v=this.drawTriangleRight(b);n=-q;k=-1;d=q+4;break;case "arrowUp":v=this.drawArrowUp(b);a.hide();break;case "arrowDown":v=this.drawArrowDown(b);a.hide();d=q+4;break;case "text":k=-1;v=this.drawTextBackground(b,a);h=this.labelHeight+3;d=q+10;break;case "round":v=this.drawCircle(b)}this.bullets[c]=v;this.showOnAxis?(m=isNaN(this.nextAxisY)?this.axisCoordinate:this.nextY,
f=h*k,this.nextAxisY=m+k*d):this.value?(m=this.value,l.recalculateToPercents&&(m=m/l.recBaseValue*100-100),m=l.getCoordinate(m)-this.bulletY,f=h*k):this.showAt?(v=this.graphDataItem.values,l.recalculateToPercents&&(v=this.graphDataItem.percents),v&&(m=l.getCoordinate(v[this.showAt])-this.bulletY,f=h*k)):(m=this.nextY,f=h*k);a.translate(n,f);b.push(a);b.translate(0,m);this.addEventListeners(b,c);this.nextY=m+k*d;this.stackDown=g},addEventListeners:function(a,b){var c=this;a.click(function(){c.handleClick(b)}).mouseover(function(){c.handleMouseOver(b)}).touchend(function(){c.handleMouseOver(b,
!0);c.handleClick(b);setTimeout(function(){c.handleMouseOut.call(c,b)},200)}).mouseout(function(){c.handleMouseOut(b)}).touchstart(function(){c.handleMouseOver(b)})},drawPin:function(a){var b=-1;this.stackDown&&(b=1);var c=this.fontSize+4;return this.drawRealPolygon(a,[0,c/2,c/2,-c/2,-c/2,0],[0,b*c/4,b*(c+c/4),b*(c+c/4),b*c/4,0])},drawSign:function(a){var b=-1;this.stackDown&&(b=1);var c=this.mastHeight*b,d=this.fontSize/2+2,k=e.line(this.container,[0,0],[0,c],this.borderColor,this.borderAlpha,1),
g=e.circle(this.container,d,this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);g.translate(0,c+d*b);a.push(k);a.push(g);this.cset.push(a);return g},drawFlag:function(a){var b=-1;this.stackDown&&(b=1);var c=this.fontSize+4,d=this.labelWidth+6,k=this.mastHeight,b=1==b?b*k:b*k-c,k=e.line(this.container,[0,0],[0,b],this.borderColor,this.borderAlpha,1),c=e.polygon(this.container,[0,d,d,0],[0,0,c,c],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);
c.translate(0,b);a.push(k);a.push(c);this.cset.push(a);return c},drawTriangleUp:function(a){var b=this.fontSize+7;return this.drawRealPolygon(a,[0,b/2,-b/2,0],[0,b,b,0])},drawArrowUp:function(a){var b=this.size,c=b/2,d=b/4;return this.drawRealPolygon(a,[0,c,d,d,-d,-d,-c,0],[0,c,c,b,b,c,c,0])},drawArrowDown:function(a){var b=this.size,c=b/2,d=b/4;return this.drawRealPolygon(a,[0,c,d,d,-d,-d,-c,0],[0,-c,-c,-b,-b,-c,-c,0])},drawTriangleDown:function(a){var b=this.fontSize+7;return this.drawRealPolygon(a,
[0,b/2,-b/2,0],[0,-b,-b,0])},drawTriangleLeft:function(a){var b=this.fontSize+7;return this.drawRealPolygon(a,[0,b,b,0],[0,-b/2,b/2,0])},drawTriangleRight:function(a){var b=this.fontSize+7;return this.drawRealPolygon(a,[0,-b,-b,0],[0,-b/2,b/2,0])},drawRealPolygon:function(a,b,c){b=e.polygon(this.container,b,c,this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);a.push(b);this.cset.push(a);return b},drawCircle:function(a){var b=e.circle(this.container,this.fontSize/2,this.backgroundColor,
this.backgroundAlpha,1,this.borderColor,this.borderAlpha);a.push(b);this.cset.push(a);return b},drawTextBackground:function(a,b){var c=b.getBBox(),d=-c.width/2-5,e=c.width/2+5,c=-c.height-12;return this.drawRealPolygon(a,[d,-5,0,5,e,e,d,d],[-5,-5,0,-5,-5,c,c,-5])},handleMouseOver:function(a,b){b||this.bullets[a].attr({fill:this.rollOverColors[a]});var c=this.eventObjects[a],d={type:"rollOverStockEvent",eventObject:c,graph:this.graph,date:this.date},k=this.bulletConfig.eventDispatcher;d.chart=k;k.fire(d);
c.url&&this.bullets[a].setAttr("cursor","pointer");d=this.chart;d.showBalloon(e.fixNewLines(c.description),k.stockEventsSettings.balloonColor,!0);c=d.graphs;if(d.chartCursor&&d.chartCursor.valueBalloonsEnabled)for(k=0;k<c.length;k++)c[k].hideBalloon()},handleClick:function(a){a=this.eventObjects[a];var b={type:"clickStockEvent",eventObject:a,graph:this.graph,date:this.date},c=this.bulletConfig.eventDispatcher;b.chart=c;c.fire(b);b=a.urlTarget;b||(b=c.stockEventsSettings.urlTarget);e.getURL(a.url,
b)},handleMouseOut:function(a){this.bullets[a].attr({fill:this.backgroundColors[a]});a={type:"rollOutStockEvent",eventObject:this.eventObjects[a],graph:this.graph,date:this.date};var b=this.bulletConfig.eventDispatcher;a.chart=b;this.chart.hideBalloonReal();b.fire(a)}})})();




AmCharts.translations.export||(AmCharts.translations.export={}),AmCharts.translations.export.en||(AmCharts.translations.export.en={"fallback.save.text":"CTRL + C to copy the data into the clipboard.","fallback.save.image":"Rightclick -> Save picture as... to save the image.","capturing.delayed.menu.label":"{{duration}}","capturing.delayed.menu.title":"Click to cancel","menu.label.print":"Print","menu.label.undo":"Undo","menu.label.redo":"Redo","menu.label.cancel":"Cancel","menu.label.save.image":"Download as ...","menu.label.save.data":"Save as ...","menu.label.draw":"Annotate ...","menu.label.draw.change":"Change ...","menu.label.draw.add":"Add ...","menu.label.draw.shapes":"Shape ...","menu.label.draw.colors":"Color ...","menu.label.draw.widths":"Size ...","menu.label.draw.opacities":"Opacity ...","menu.label.draw.text":"Text","menu.label.draw.modes":"Mode ...","menu.label.draw.modes.pencil":"Pencil","menu.label.draw.modes.line":"Line","menu.label.draw.modes.arrow":"Arrow","label.saved.from":"Saved from: "}),AmCharts.export=function(e,t){var a,i={name:"export",version:"1.4.74",libs:{async:!0,autoLoad:!0,reload:!1,resources:["fabric.js/fabric.min.js","FileSaver.js/FileSaver.min.js",{"jszip/jszip.min.js":["xlsx/xlsx.min.js"],"pdfmake/pdfmake.min.js":["pdfmake/vfs_fonts.js"]}],namespaces:{"pdfmake.min.js":"pdfMake","jszip.min.js":"JSZip","xlsx.min.js":"XLSX","fabric.min.js":"fabric","FileSaver.min.js":"saveAs"},loadTimeout:1e4,unsupportedIE9libs:["pdfmake.min.js","jszip.min.js","xlsx.min.js"]},config:{},setup:{chart:e,hasBlob:!1,wrapper:!1,isIE:!!window.document.documentMode,IEversion:window.document.documentMode,hasTouch:"object"==typeof window.Touch,focusedMenuItem:void 0,hasClasslist:"classList"in document.createElement("_")},drawing:{enabled:!1,undos:[],redos:[],buffer:{position:{x1:0,y1:0,x2:0,y2:0,xD:0,yD:0}},handler:{undo:function(e,t){var a=i.drawing.undos.pop();if(a){a.selectable=!0,i.drawing.redos.push(a),"added"==a.action&&i.setup.fabric.remove(a.target);var r=JSON.parse(a.state);a.target.set(r),a.target instanceof fabric.Group&&i.drawing.handler.change({color:r.cfg.color,width:r.cfg.width,opacity:r.cfg.opacity},!0,a.target),i.setup.fabric.renderAll()}},redo:function(e,t){var a=i.drawing.redos.pop();if(a){a.selectable=!0,i.drawing.undos.push(a),"added"==a.action&&i.setup.fabric.add(a.target);var r=JSON.parse(a.state);a.target.recentState=a.state,a.target.set(r),a.target instanceof fabric.Group&&i.drawing.handler.change({color:r.cfg.color,width:r.cfg.width,opacity:r.cfg.opacity},!0,a.target),i.setup.fabric.renderAll()}},done:function(e){i.drawing.enabled=!1,i.drawing.buffer.enabled=!1,i.drawing.undos=[],i.drawing.redos=[],i.createMenu(i.config.menu),i.setup.fabric.deactivateAll(),i.isElement(i.setup.wrapper)&&i.isElement(i.setup.wrapper.parentNode)&&i.setup.wrapper.parentNode.removeChild&&(i.setup.wrapper.parentNode.removeChild(i.setup.wrapper),i.setup.wrapper=!1)},add:function(e){var t=i.deepMerge({top:i.setup.fabric.height/2,left:i.setup.fabric.width/2},e||{});(-1!=t.url.indexOf(".svg")?fabric.loadSVGFromURL:fabric.Image.fromURL)(t.url,function(e,a){var r=void 0!==a?fabric.util.groupSVGElements(e,a):e,n=!1;(r.height>i.setup.fabric.height||r.width>i.setup.fabric.width)&&(n=i.setup.fabric.height/2/r.height),t.top>i.setup.fabric.height&&(t.top=i.setup.fabric.height/2),t.left>i.setup.fabric.width&&(t.left=i.setup.fabric.width/2),i.drawing.buffer.isDrawing=!0,r.set({originX:"center",originY:"center",top:t.top,left:t.left,width:n?r.width*n:r.width,height:n?r.height*n:r.height,fill:i.drawing.color}),i.setup.fabric.add(r)})},change:function(e,t,a){var r,n,o,s=i.deepMerge({},e||{}),l=a||i.drawing.buffer.target,d=l?l._objects?l._objects:[l]:null;if(s.mode&&(i.drawing.mode=s.mode),s.width&&(i.drawing.width=s.width,i.drawing.fontSize=s.fontSize=3*s.width,1==i.drawing.width&&(i.drawing.fontSize=s.fontSize=i.defaults.fabric.drawing.fontSize)),s.fontSize&&(i.drawing.fontSize=s.fontSize),s.color&&(i.drawing.color=s.color),s.opacity&&(i.drawing.opacity=s.opacity),(o=i.getRGBA(i.drawing.color)).pop(),o.push(i.drawing.opacity),i.drawing.color="rgba("+o.join()+")",i.setup.fabric.freeDrawingBrush.color=i.drawing.color,i.setup.fabric.freeDrawingBrush.width=i.drawing.width,l){for((r=JSON.parse(l.recentState).cfg)&&(s.color=s.color||r.color,s.width=s.width||r.width,s.opacity=s.opacity||r.opacity,s.fontSize=s.fontSize||r.fontSize,(o=i.getRGBA(s.color)).pop(),o.push(s.opacity),s.color="rgba("+o.join()+")"),n=0;n<d.length;n++)d[n]instanceof fabric.Text||d[n]instanceof fabric.PathGroup||d[n]instanceof fabric.Triangle?((s.color||s.opacity)&&d[n].set({fill:s.color}),s.fontSize&&d[n].set({fontSize:s.fontSize})):(d[n]instanceof fabric.Path||d[n]instanceof fabric.Line)&&(l instanceof fabric.Group?(s.color||s.opacity)&&d[n].set({stroke:s.color}):((s.color||s.opacity)&&d[n].set({stroke:s.color}),s.width&&d[n].set({strokeWidth:s.width})));t||(r=JSON.stringify(i.deepMerge(l.saveState()._stateProperties,{cfg:{color:s.color,width:s.width,opacity:s.opacity}})),l.recentState=r,i.drawing.redos=[],i.drawing.undos.push({action:"modified",target:l,state:r})),i.setup.fabric.renderAll()}},text:function(e){var t=i.deepMerge({text:i.i18l("menu.label.draw.text"),top:i.setup.fabric.height/2,left:i.setup.fabric.width/2,fontSize:i.drawing.fontSize,fontFamily:i.setup.chart.fontFamily||"Verdana",fill:i.drawing.color},e||{});t.click=function(){};var a=new fabric.IText(t.text,t);return i.drawing.buffer.isDrawing=!0,i.setup.fabric.add(a),i.setup.fabric.setActiveObject(a),a.selectAll(),a.enterEditing(),a},line:function(e){var t,a,r,n,o=i.deepMerge({x1:i.setup.fabric.width/2-i.setup.fabric.width/10,x2:i.setup.fabric.width/2+i.setup.fabric.width/10,y1:i.setup.fabric.height/2,y2:i.setup.fabric.height/2,angle:90,strokeLineCap:i.drawing.lineCap,arrow:i.drawing.arrow,color:i.drawing.color,width:i.drawing.width,group:[]},e||{}),s=new fabric.Line([o.x1,o.y1,o.x2,o.y2],{stroke:o.color,strokeWidth:o.width,strokeLineCap:o.strokeLineCap});if(o.group.push(s),o.arrow&&(o.angle=o.angle?o.angle:i.getAngle(o.x1,o.y1,o.x2,o.y2),"start"==o.arrow?(r=o.y1+o.width/2,n=o.x1+o.width/2):"middle"==o.arrow?(r=o.y2+o.width/2-(o.y2-o.y1)/2,n=o.x2+o.width/2-(o.x2-o.x1)/2):(r=o.y2+o.width/2,n=o.x2+o.width/2),a=new fabric.Triangle({top:r,left:n,fill:o.color,height:7*o.width,width:7*o.width,angle:o.angle,originX:"center",originY:"bottom"}),o.group.push(a)),i.drawing.buffer.isDrawing=!0,"config"!=o.action){if(o.arrow){var l=new fabric.Group(o.group);return l.set({cfg:o,fill:o.color,action:o.action,selectable:!0,known:"change"==o.action}),"change"==o.action&&i.setup.fabric.setActiveObject(l),i.setup.fabric.add(l),l}return i.setup.fabric.add(s),s}for(t=0;t<o.group.length;t++)o.group[t].ignoreUndo=!0,i.setup.fabric.add(o.group[t]);return o}}},defaults:{position:"top-right",fileName:"amCharts",action:"download",overflow:!0,path:(e.path||"")+"plugins/export/",formats:{JPG:{mimeType:"image/jpg",extension:"jpg",capture:!0},PNG:{mimeType:"image/png",extension:"png",capture:!0},SVG:{mimeType:"text/xml",extension:"svg",capture:!0},PDF:{mimeType:"application/pdf",extension:"pdf",capture:!0},CSV:{mimeType:"text/plain",extension:"csv"},JSON:{mimeType:"text/plain",extension:"json"},XLSX:{mimeType:"application/octet-stream",extension:"xlsx"}},fabric:{backgroundColor:"#FFFFFF",removeImages:!0,forceRemoveImages:!1,selection:!1,loadTimeout:5e3,drawing:{enabled:!0,arrow:"end",lineCap:"butt",mode:"pencil",modes:["pencil","line","arrow"],color:"#000000",colors:["#000000","#FFFFFF","#FF0000","#00FF00","#0000FF"],shapes:["11.svg","14.svg","16.svg","17.svg","20.svg","27.svg"],width:1,fontSize:11,widths:[1,5,10,15],opacity:1,opacities:[1,.8,.6,.4,.2],menu:void 0,autoClose:!0},border:{fill:"",fillOpacity:0,stroke:"#000000",strokeWidth:1,strokeOpacity:1}},pdfMake:{images:{},pageOrientation:"portrait",pageMargins:40,pageOrigin:!0,pageSize:"A4",pageSizes:{"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],EXECUTIVE:[521.86,756],FOLIO:[612,936],LEGAL:[612,1008],LETTER:[612,792],TABLOID:[792,1224]}},menu:void 0,divId:null,menuReviver:null,menuWalker:null,fallback:!0,keyListener:!0,fileListener:!0,compress:!0,debug:!1},listenersToRemove:[],i18l:function(e,t){var a=t||(i.setup.chart.language?i.setup.chart.language:"en");return(AmCharts.translations[i.name][a]||AmCharts.translations[i.name].en)[e]||e},download:function(e,t,a){if(window.saveAs&&i.setup.hasBlob)i.toBlob({data:e,type:t},function(e){saveAs(e,a)});else if(i.config.fallback&&"text/plain"==t){var r=document.createElement("div"),n=document.createElement("div"),o=document.createElement("textarea");n.innerHTML=i.i18l("fallback.save.text"),r.appendChild(n),r.appendChild(o),n.setAttribute("class","amcharts-export-fallback-message"),r.setAttribute("class","amcharts-export-fallback"),i.setup.chart.containerDiv.appendChild(r),o.setAttribute("readonly",""),o.value=e,o.focus(),o.select(),i.createMenu([{class:"export-main export-close",label:"Done",click:function(){i.createMenu(i.config.menu),i.isElement(i.setup.chart.containerDiv)&&i.setup.chart.containerDiv.removeChild(r)}}])}else{if(!i.config.fallback||"image"!=t.split("/")[0])throw new Error("Unable to create file. Ensure saveAs (FileSaver.js) is supported.");var r=document.createElement("div"),n=document.createElement("div"),s=i.toImage({data:e});n.innerHTML=i.i18l("fallback.save.image"),r.appendChild(n),r.appendChild(s),n.setAttribute("class","amcharts-export-fallback-message"),r.setAttribute("class","amcharts-export-fallback"),i.setup.chart.containerDiv.appendChild(r),i.createMenu([{class:"export-main export-close",label:"Done",click:function(){i.createMenu(i.config.menu),i.isElement(i.setup.chart.containerDiv)&&i.setup.chart.containerDiv.removeChild(r)}}])}return e},loadResource:function(e,t){function a(){i.handleLog(["amCharts[export]: Loading error on ",this.src||this.href].join(""))}function r(){if(t)for(n=0;n<t.length;n++)i.loadResource(t[n])}var n,o,s,l=-1!=e.indexOf("//")?e:[i.libs.path,e].join("");for(-1!=e.indexOf(".js")?((s=document.createElement("script")).setAttribute("type","text/javascript"),s.setAttribute("src",l),i.libs.async&&s.setAttribute("async","")):-1!=e.indexOf(".css")&&((s=document.createElement("link")).setAttribute("type","text/css"),s.setAttribute("rel","stylesheet"),s.setAttribute("href",l)),n=0;n<document.head.childNodes.length;n++)if(p=document.head.childNodes[n],c=!!p&&(p.src||p.href),!!p&&p.tagName,p&&c&&-1!=c.indexOf(e)){i.libs.reload&&document.head.removeChild(p),o=!0;break}for(n in i.libs.namespaces){var d=i.libs.namespaces[n],c=e.toLowerCase(),p=n.toLowerCase();if(-1!=c.indexOf(p)){if(i.setup.isIE&&i.setup.IEversion<=9&&i.libs.unsupportedIE9libs&&-1!=i.libs.unsupportedIE9libs.indexOf(p))return;if(void 0!==window[d]){o=!0;break}}}o&&!i.libs.reload||(s.addEventListener("load",r),i.addListenerToRemove("load",s,r),s.addEventListener("error",a),i.addListenerToRemove("error",s,a),document.head.appendChild(s))},addListenerToRemove:function(e,t,a){i.listenersToRemove.push({node:t,method:a,event:e})},loadDependencies:function(){var e,t;if(i.libs.autoLoad)for(e=0;e<i.libs.resources.length;e++)if(i.libs.resources[e]instanceof Object)for(t in i.libs.resources[e])i.loadResource(t,i.libs.resources[e][t]);else i.loadResource(i.libs.resources[e])},pxToNumber:function(e,t){if(e||!t)return Number(String(e).replace("px",""))||0},numberToPx:function(e){return String(e)+"px"},cloneObject:function(e){var t,a,r,n,o;t=Array.isArray(e)?[]:{};for(r in e)n="object"==typeof(a=e[r]),o=a instanceof Date,t[r]=n&&!o?i.cloneObject(a):a;return t},deepMerge:function(e,t,a){var r,n,o=t instanceof Array?"array":"object";if(!(e instanceof Object||e instanceof Array))return e;for(r in t)"array"==o&&isNaN(r)||(n=t[r],(e&&void 0==e[r]||a)&&(n instanceof Array?e[r]=new Array:n instanceof Function?e[r]=function(){}:n instanceof Date?e[r]=new Date:n instanceof Object?e[r]=new Object:n instanceof Number?e[r]=new Number:n instanceof String&&(e[r]=new String)),(n instanceof Object||n instanceof Array)&&!(n instanceof Function||n instanceof Date||i.isElement(n))&&"chart"!=r&&"scope"!=r?i.deepMerge(e[r],n,a):e instanceof Array&&!a?e.push(n):e&&(e[r]=n));return e},isElement:function(e){return e instanceof Object&&e&&1===e.nodeType},isHashbanged:function(e){var t=String(e).replace(/\"/g,"");return"url"==t.slice(0,3)&&t.slice(t.indexOf("#")+1,t.length-1)},isPressed:function(e){return"mousemove"==e.type&&1===e.which||("touchmove"==e.type||1===e.buttons||1===e.button||1===e.which?i.drawing.buffer.isPressed=!0:i.drawing.buffer.isPressed=!1),i.drawing.buffer.isPressed},removeImage:function(e){if(e){if(i.config.fabric.forceRemoveImages)return!0;if(i.config.fabric.removeImages&&i.isTainted(e))return!0;if(i.setup.isIE&&(10==i.setup.IEversion||11==i.setup.IEversion)&&-1!=e.toLowerCase().indexOf(".svg"))return!0}return!1},isTainted:function(e){var t=String(window.location.origin||window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""));if(e){if(-1!=t.indexOf(":\\")||-1!=e.indexOf(":\\")||-1!=t.indexOf("file://")||-1!=e.indexOf("file://"))return!0;if(-1!=e.indexOf("//")&&-1==e.indexOf(t.replace(/.*:/,"")))return!0}return!1},isSupported:function(){return!!i.config.enabled&&!(i.setup.isIE&&i.setup.IEversion<=9&&(!Array.prototype.indexOf||!document.head||!1===i.config.fallback))},getAngle:function(e,t,a,i){var r=a-e,n=i-t;return 180*(0==r?0==n?0:n>0?Math.PI/2:3*Math.PI/2:0==n?r>0?0:Math.PI:r<0?Math.atan(n/r)+Math.PI:n<0?Math.atan(n/r)+2*Math.PI:Math.atan(n/r))/Math.PI},gatherAttribute:function(e,t,a,r){var n,r=r||0,a=a||3;return e&&!(n=e.getAttribute(t))&&r<a?i.gatherAttribute(e.parentNode,t,a,r+1):n},gatherClassName:function(e,t,a,r){var n,r=r||0,a=a||3;if(i.isElement(e)){if(!(n=-1!=(e.getAttribute("class")||"").split(" ").indexOf(t))&&r<a)return i.gatherClassName(e.parentNode,t,a,r+1);n&&(n=e)}return n},gatherElements:function(e,t,a){var r,n;for(r=0;r<e.children.length;r++){var o=e.children[r];if("clipPath"==o.tagName){var s={},l=fabric.parseTransformAttribute(i.gatherAttribute(o,"transform"));for(n=0;n<o.childNodes.length;n++)o.childNodes[n].setAttribute("fill","transparent"),s={x:i.pxToNumber(o.childNodes[n].getAttribute("x")),y:i.pxToNumber(o.childNodes[n].getAttribute("y")),width:i.pxToNumber(o.childNodes[n].getAttribute("width")),height:i.pxToNumber(o.childNodes[n].getAttribute("height"))};e.clippings[o.id]={svg:o,bbox:s,transform:l}}else if("pattern"==o.tagName){var d={node:o,source:o.getAttribute("xlink:href"),width:Number(o.getAttribute("width")),height:Number(o.getAttribute("height")),repeat:"repeat",offsetX:0,offsetY:0};for(n=0;n<o.childNodes.length;n++)"rect"==o.childNodes[n].tagName?d.fill=o.childNodes[n].getAttribute("fill"):"image"==o.childNodes[n].tagName&&(c=fabric.parseAttributes(o.childNodes[n],fabric.SHARED_ATTRIBUTES)).transformMatrix&&(d.offsetX=c.transformMatrix[4],d.offsetY=c.transformMatrix[5]);i.removeImage(d.source)?e.patterns[o.id]=d.fill?d.fill:"transparent":e.patterns[d.node.id]=d}else if("image"==o.tagName)a.included++,fabric.Image.fromURL(o.getAttribute("xlink:href"),function(e){a.loaded++});else{var c=["fill","stroke"];for(n=0;n<c.length;n++){var p=c[n],f=o.getAttribute(p),u=i.getRGBA(f),g=i.isHashbanged(f);!f||u||g||(o.setAttribute(p,"none"),o.setAttribute(p+"-opacity","0"))}}}return e},getRGBA:function(e,t){return!("none"==e||"transparent"==e||i.isHashbanged(e)||!(e=new fabric.Color(e))._source)&&(t?e:e.getSource())},gatherPosition:function(e,t){var a,r=i.drawing.buffer.position,n=fabric.util.invertTransform(i.setup.fabric.viewportTransform);return"touchmove"==e.type&&("touches"in e?e=e.touches[0]:"changedTouches"in e&&(e=e.changedTouches[0])),a=fabric.util.transformPoint(i.setup.fabric.getPointer(e,!0),n),1==t&&(r.x1=a.x,r.y1=a.y),r.x2=a.x,r.y2=a.y,r.xD=r.x1-r.x2<0?-1*(r.x1-r.x2):r.x1-r.x2,r.yD=r.y1-r.y2<0?-1*(r.y1-r.y2):r.y1-r.y2,r},modifyFabric:function(){fabric.ElementsParser.prototype.resolveGradient=function(e,t){var a=e.get(t);if(/^url\(/.test(a)){var r=a.slice(a.indexOf("#")+1,a.length-1);if(fabric.gradientDefs[this.svgUid][r]){var n=fabric.Gradient.fromElement(fabric.gradientDefs[this.svgUid][r],e);n.coords.y1&&"pie"!=i.setup.chart.type&&(n.coords.y2=-1*n.coords.y1,n.coords.y1=0),e.set(t,n)}}},fabric.Text.fromElement=function(e,t){if(!e)return null;var a=fabric.parseAttributes(e,fabric.Text.ATTRIBUTE_NAMES);(t=fabric.util.object.extend(t?fabric.util.object.clone(t):{},a)).top=t.top||0,t.left=t.left||0,"dx"in a&&(t.left+=a.dx),"dy"in a&&(t.top+=a.dy),"fontSize"in t||(t.fontSize=fabric.Text.DEFAULT_SVG_FONT_SIZE),t.originX||(t.originX="left");var i="",r=[];if("textContent"in e)if(e.childNodes)for(var n=0;n<e.childNodes.length;n++)r.push(e.childNodes[n].textContent);else r.push(e.textContent);else"firstChild"in e&&null!==e.firstChild&&"data"in e.firstChild&&null!==e.firstChild.data&&r.push(e.firstChild.data);i=r.join("\n");var o=new fabric.Text(i,t),s=0;return"left"===o.originX&&(s=o.getWidth()/2),"right"===o.originX&&(s=-o.getWidth()/2),r.length>1?o.set({left:o.getLeft()+s,top:o.getTop()+o.fontSize*(r.length-1)*(.18+o._fontSizeFraction),textAlign:t.originX,lineHeight:r.length>1?.965:1.16}):o.set({left:o.getLeft()+s,top:o.getTop()-o.getHeight()/2+o.fontSize*(.18+o._fontSizeFraction)}),o}},capture:function(e,t){var a,r=i.deepMerge(i.deepMerge({},i.config.fabric),e||{}),n=[],o={x:0,y:0,pX:0,pY:0,lX:0,lY:0,width:i.setup.chart.divRealWidth,height:i.setup.chart.divRealHeight},s={loaded:0,included:0},l={items:[],width:0,height:0,maxWidth:0,maxHeight:0};if(!i.handleNamespace("fabric",{scope:this,cb:i.capture,args:arguments}))return!1;i.modifyFabric(),i.handleCallback(r.beforeCapture,r);var d=i.setup.chart.containerDiv.getElementsByTagName("svg");for(a=0;a<d.length;a++)(p={svg:d[a],parent:d[a].parentNode,children:d[a].getElementsByTagName("*"),offset:{x:0,y:0},patterns:{},clippings:{},has:{legend:!1,panel:!1,scrollbar:!1}}).has.legend=i.gatherClassName(p.parent,i.setup.chart.classNamePrefix+"-legend-div",1),p.has.panel=i.gatherClassName(p.parent,i.setup.chart.classNamePrefix+"-stock-panel-div"),p.has.scrollbar=i.gatherClassName(p.parent,i.setup.chart.classNamePrefix+"-scrollbar-chart-div"),p=i.gatherElements(p,r,s),n.push(p);if(i.config.legend){if("stock"==i.setup.chart.type)for(a=0;a<i.setup.chart.panels.length;a++)i.setup.chart.panels[a].stockLegend&&i.setup.chart.panels[a].stockLegend.divId&&l.items.push(i.setup.chart.panels[a].stockLegend);else i.setup.chart.legend&&i.setup.chart.legend.divId&&l.items.push(i.setup.chart.legend);for(a=0;a<l.items.length;a++){var c=l.items[a],p={svg:c.container.container,parent:c.container.container.parentNode,children:c.container.container.getElementsByTagName("*"),offset:{x:0,y:0},legend:{id:a,type:-1!=["top","left"].indexOf(i.config.legend.position)?"unshift":"push",position:i.config.legend.position,width:i.config.legend.width?i.config.legend.width:c.container.div.offsetWidth,height:i.config.legend.height?i.config.legend.height:c.container.div.offsetHeight},patterns:{},clippings:{},has:{legend:!1,panel:!1,scrollbar:!1}};l.width+=p.legend.width,l.height+=p.legend.height,l.maxWidth=p.legend.width>l.maxWidth?p.legend.width:l.maxWidth,l.maxHeight=p.legend.height>l.maxHeight?p.legend.height:l.maxHeight,p=i.gatherElements(p,r,s),n[p.legend.type](p)}-1!=["top","bottom"].indexOf(i.config.legend.position)?(o.width=l.maxWidth>o.width?l.maxWidth:o.width,o.height+=l.height):-1!=["left","right"].indexOf(i.config.legend.position)?(o.width+=l.maxWidth,o.height=l.height>o.height?l.height:o.height):(o.height+=l.height,o.width+=l.maxWidth)}if(i.drawing.enabled=r.drawing.enabled="draw"==r.action,i.drawing.buffer.enabled=i.drawing.enabled,i.setup.wrapper=document.createElement("div"),i.setup.wrapper.setAttribute("class",i.setup.chart.classNamePrefix+"-export-canvas"),i.setup.chart.containerDiv.appendChild(i.setup.wrapper),"stock"==i.setup.chart.type){var f={top:0,right:0,bottom:0,left:0};i.setup.chart.leftContainer&&(o.width-=i.setup.chart.leftContainer.offsetWidth,f.left=i.setup.chart.leftContainer.offsetWidth+2*i.setup.chart.panelsSettings.panelSpacing),i.setup.chart.rightContainer&&(o.width-=i.setup.chart.rightContainer.offsetWidth,f.right=i.setup.chart.rightContainer.offsetWidth+2*i.setup.chart.panelsSettings.panelSpacing),i.setup.chart.periodSelector&&-1!=["top","bottom"].indexOf(i.setup.chart.periodSelector.position)&&(o.height-=i.setup.chart.periodSelector.offsetHeight+i.setup.chart.panelsSettings.panelSpacing,f[i.setup.chart.periodSelector.position]+=i.setup.chart.periodSelector.offsetHeight+i.setup.chart.panelsSettings.panelSpacing),i.setup.chart.dataSetSelector&&-1!=["top","bottom"].indexOf(i.setup.chart.dataSetSelector.position)&&(o.height-=i.setup.chart.dataSetSelector.offsetHeight,f[i.setup.chart.dataSetSelector.position]+=i.setup.chart.dataSetSelector.offsetHeight),i.setup.wrapper.style.paddingTop=i.numberToPx(f.top),i.setup.wrapper.style.paddingRight=i.numberToPx(f.right),i.setup.wrapper.style.paddingBottom=i.numberToPx(f.bottom),i.setup.wrapper.style.paddingLeft=i.numberToPx(f.left)}i.setup.canvas=document.createElement("canvas"),i.setup.wrapper.appendChild(i.setup.canvas);var u=i.removeFunctionsFromObject(i.deepMerge({width:o.width,height:o.height,isDrawingMode:!0},r));for(i.setup.fabric=new fabric.Canvas(i.setup.canvas,u),i.deepMerge(i.setup.fabric,r),i.deepMerge(i.setup.fabric.freeDrawingBrush,r.drawing),i.deepMerge(i.drawing,r.drawing),i.drawing.handler.change(r.drawing),i.setup.fabric.on("mouse:down",function(e){i.gatherPosition(e.e,1);i.drawing.buffer.pressedTS=Number(new Date),i.isPressed(e.e),i.drawing.buffer.isDrawing=!1,i.drawing.buffer.isDrawingTimer=setTimeout(function(){i.drawing.buffer.isSelected||(i.drawing.buffer.isDrawing=!0)},200)}),i.setup.fabric.on("mouse:move",function(e){var t=i.gatherPosition(e.e,2);if(i.isPressed(e.e),i.drawing.buffer.isPressed&&!i.drawing.buffer.isSelected&&(i.drawing.buffer.isDrawing=!0,!i.drawing.buffer.line&&"pencil"!=i.drawing.mode&&(t.xD>5||t.yD>5)&&(i.setup.fabric.isDrawingMode=!1,i.setup.fabric._isCurrentlyDrawing=!1,i.drawing.buffer.ignoreUndoOnMouseUp=!0,i.setup.fabric.freeDrawingBrush.onMouseUp(),i.setup.fabric.remove(i.setup.fabric._objects.pop()),i.drawing.buffer.line=i.drawing.handler.line({x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,arrow:"line"!=i.drawing.mode&&i.drawing.arrow,action:"config"}))),i.drawing.buffer.isSelected&&(i.setup.fabric.isDrawingMode=!1),i.drawing.buffer.line){var r,n,o,s=i.drawing.buffer.line;for(s.x2=t.x2,s.y2=t.y2,a=0;a<s.group.length;a++)(r=s.group[a])instanceof fabric.Line?r.set({x2:s.x2,y2:s.y2}):r instanceof fabric.Triangle&&(s.angle=i.getAngle(s.x1,s.y1,s.x2,s.y2)+90,"start"==s.arrow?(n=s.y1+s.width/2,o=s.x1+s.width/2):"middle"==s.arrow?(n=s.y2+s.width/2-(s.y2-s.y1)/2,o=s.x2+s.width/2-(s.x2-s.x1)/2):(n=s.y2+s.width/2,o=s.x2+s.width/2),r.set({top:n,left:o,angle:s.angle}));i.setup.fabric.renderAll()}}),i.setup.fabric.on("mouse:up",function(e){if(!i.drawing.buffer.isDrawing){var t=i.setup.fabric.findTarget(e.e);t&&t.selectable&&i.setup.fabric.setActiveObject(t)}if(i.drawing.buffer.line){for(a=0;a<i.drawing.buffer.line.group.length;a++)i.drawing.buffer.line.group[a].remove();delete i.drawing.buffer.line.action,delete i.drawing.buffer.line.group,i.drawing.handler.line(i.drawing.buffer.line)}i.drawing.buffer.line=!1,i.drawing.buffer.hasLine=!1,i.drawing.buffer.isPressed=!1,clearTimeout(i.drawing.buffer.isDrawingTimer),i.drawing.buffer.isDrawing=!1}),i.setup.fabric.on("object:selected",function(e){i.drawing.buffer.isSelected=!0,i.drawing.buffer.target=e.target,i.setup.fabric.isDrawingMode=!1}),i.setup.fabric.on("selection:cleared",function(e){i.drawing.buffer.target=!1,i.drawing.buffer.isSelected&&(i.setup.fabric._isCurrentlyDrawing=!1),i.drawing.buffer.isSelected=!1,i.setup.fabric.isDrawingMode=!0}),i.setup.fabric.on("path:created",function(e){var t=e.path;if(!i.drawing.buffer.isDrawing||i.drawing.buffer.hasLine)return i.setup.fabric.remove(t),void i.setup.fabric.renderAll()}),i.setup.fabric.on("object:added",function(e){var t=e.target,a=i.deepMerge(t.saveState()._stateProperties,{cfg:{color:i.drawing.color,width:i.drawing.width,opacity:i.drawing.opacity,fontSize:i.drawing.fontSize}});a=JSON.stringify(a),t.recentState=a,!i.drawing.buffer.ignoreUndoOnMouseUp&&i.drawing.buffer.isDrawing?(!t.selectable||t.known||t.ignoreUndo||(t.isAnnotation=!0,i.drawing.undos.push({action:"added",target:t,state:a}),i.drawing.redos=[]),t.known=!0,i.setup.fabric.isDrawingMode=!0):i.drawing.buffer.ignoreUndoOnMouseUp=!1}),i.setup.fabric.on("object:modified",function(e){var t=e.target,a=JSON.parse(t.recentState),r=i.deepMerge(t.saveState()._stateProperties,{cfg:a.cfg});r=JSON.stringify(r),t.recentState=r,i.drawing.undos.push({action:"modified",target:t,state:r}),i.drawing.redos=[]}),i.setup.fabric.on("text:changed",function(e){var t=e.target;clearTimeout(t.timer),t.timer=setTimeout(function(){var e=JSON.stringify(t.saveState()._stateProperties);t.recentState=e,i.drawing.redos=[],i.drawing.undos.push({action:"modified",target:t,state:e})},250)}),i.drawing.enabled?(i.setup.wrapper.setAttribute("class",i.setup.chart.classNamePrefix+"-export-canvas active"),i.setup.wrapper.style.backgroundColor=r.backgroundColor,i.setup.wrapper.style.display="block"):(i.setup.wrapper.setAttribute("class",i.setup.chart.classNamePrefix+"-export-canvas"),i.setup.wrapper.style.display="none"),a=0;a<n.length;a++){p=n[a];"stock"==i.setup.chart.type&&i.setup.chart.legendSettings.position?-1!=["top","bottom"].indexOf(i.setup.chart.legendSettings.position)?p.parent.style.top&&p.parent.style.left?(p.offset.y=i.pxToNumber(p.parent.style.top),p.offset.x=i.pxToNumber(p.parent.style.left)):(p.offset.x=o.x,p.offset.y=o.y,o.y+=i.pxToNumber(p.parent.style.height),p.has.panel?(o.pY=i.pxToNumber(p.has.panel.style.marginTop),p.offset.y+=o.pY):p.has.scrollbar&&(p.offset.y+=o.pY)):-1!=["left","right"].indexOf(i.setup.chart.legendSettings.position)&&(p.offset.y=i.pxToNumber(p.parent.style.top)+o.pY,p.offset.x=i.pxToNumber(p.parent.style.left)+o.pX,p.has.legend?o.pY+=i.pxToNumber(p.has.panel.style.height)+i.setup.chart.panelsSettings.panelSpacing:p.has.scrollbar&&(p.offset.y-=i.setup.chart.panelsSettings.panelSpacing)):("absolute"==p.parent.style.position?(p.offset.absolute=!0,p.offset.top=i.pxToNumber(p.parent.style.top),p.offset.right=i.pxToNumber(p.parent.style.right,!0),p.offset.bottom=i.pxToNumber(p.parent.style.bottom,!0),p.offset.left=i.pxToNumber(p.parent.style.left),p.offset.width=i.pxToNumber(p.parent.style.width),p.offset.height=i.pxToNumber(p.parent.style.height)):p.parent.style.top&&p.parent.style.left?(p.offset.y=i.pxToNumber(p.parent.style.top),p.offset.x=i.pxToNumber(p.parent.style.left)):p.legend?("left"==p.legend.position?o.x=l.maxWidth:"right"==p.legend.position?p.offset.x=o.width-l.maxWidth:"top"==p.legend.position?o.y+=p.legend.height:"bottom"==p.legend.position&&(p.offset.y=o.height-l.height),p.offset.y+=o.lY,o.lY+=p.legend.height):(p.offset.x=o.x,p.offset.y=o.y+o.pY,o.y+=i.pxToNumber(p.parent.style.height)),p.has.legend&&p.has.panel&&p.has.panel.style.marginTop?(o.y+=i.pxToNumber(p.has.panel.style.marginTop),p.offset.y+=i.pxToNumber(p.has.panel.style.marginTop)):i.setup.chart.legend&&-1!=["left","right"].indexOf(i.setup.chart.legend.position)&&(p.offset.y=i.pxToNumber(p.parent.style.top),p.offset.x=i.pxToNumber(p.parent.style.left))),fabric.parseSVGDocument(p.svg,function(e){return function(a,l){var d,c=fabric.util.groupSVGElements(a,l),p=[],f={selectable:!1,isCoreElement:!0};for(e.offset.absolute?(void 0!==e.offset.bottom?f.top=o.height-e.offset.height-e.offset.bottom:f.top=e.offset.top,void 0!==e.offset.right?f.left=o.width-e.offset.width-e.offset.right:f.left=e.offset.left):(f.top=e.offset.y,f.left=e.offset.x),d=0;d<c.paths.length;d++){var u=null;if(c.paths[d]){if(i.removeImage(c.paths[d]["xlink:href"]))continue;if(c.paths[d].fill instanceof Object)"radial"==c.paths[d].fill.type&&-1==["pie","gauge"].indexOf(i.setup.chart.type)&&(c.paths[d].fill.coords.r2=-1*c.paths[d].fill.coords.r1,c.paths[d].fill.coords.r1=0,c.paths[d].set({opacity:c.paths[d].fillOpacity}));else if((u=i.isHashbanged(c.paths[d].fill))&&e.patterns&&e.patterns[u]){var g=e.patterns[u];s.included++,fabric.Image.fromURL(g.source,function(e,t){return function(a){s.loaded++,a.set({top:e.offsetY,left:e.offsetX,width:e.width,height:e.height}),i.setup.fabric._isRetinaScaling()&&a.set({top:e.offsetY/2,left:e.offsetX/2,scaleX:.5,scaleY:.5});var r=new fabric.StaticCanvas(void 0,{backgroundColor:e.fill,width:a.getWidth(),height:a.getHeight()});r.add(a);var n=new fabric.Pattern({source:r.getElement(),offsetX:c.paths[t].width/2,offsetY:c.paths[t].height/2,repeat:"repeat"});c.paths[t].set({fill:n,opacity:c.paths[t].fillOpacity})}}(g,d))}(u=i.isHashbanged(c.paths[d].clipPath))&&e.clippings&&e.clippings[u]&&(!function(t,a){var i=c.paths[t].toSVG;c.paths[t].toSVG=function(t){return i.apply(this,[function(i){return t(i,e.clippings[a])}])}}(d,u),c.paths[d].set({clipTo:function(t,a){return function(r){var n=e.clippings[a],o=this.transformMatrix||[1,0,0,1,0,0],s={top:n.bbox.y,left:n.bbox.x,width:n.bbox.width,height:n.bbox.height};"map"==i.setup.chart.type&&(s.top+=n.transform[5],s.left+=n.transform[4]),n.bbox.x&&o[4]&&n.bbox.y&&o[5]&&(s.top-=o[5],s.left-=o[4]),void 0!==i.setup.chart.smoothCustomBullets&&this.className==i.setup.chart.classNamePrefix+"-graph-bullet"&&"image"==c.paths[t].svg.tagName?(radius=n.svg.firstChild.rx.baseVal.value/2+2,r.beginPath(),r.moveTo(s.left+radius,s.top),r.lineTo(s.left+s.width-radius,s.top),r.quadraticCurveTo(s.left+s.width,s.top,s.left+s.width,s.top+radius),r.lineTo(s.left+s.width,s.top+s.height-radius),r.quadraticCurveTo(s.left+s.width,s.top+s.height,s.left+s.width-radius,s.top+s.height),r.lineTo(s.left+radius,s.top+s.height),r.quadraticCurveTo(s.left,s.top+s.height,s.left,s.top+s.height-radius),r.lineTo(s.left,s.top+radius),r.quadraticCurveTo(s.left,s.top,s.left+radius,s.top),r.closePath()):r.rect(s.left,s.top,s.width,s.height)}}(d,u)}))}p.push(c.paths[d])}if(c.paths=p,c.set(f),i.setup.fabric.add(c),e.svg.parentNode&&e.svg.parentNode.getElementsByTagName){var h=e.svg.parentNode.getElementsByClassName(i.setup.chart.classNamePrefix+"-balloon-div");for(d=0;d<h.length;d++)if(r.balloonFunction instanceof Function)r.balloonFunction.apply(i,[h[d],e]);else{var m=h[d],b=fabric.parseStyleAttribute(m),v=fabric.parseStyleAttribute(m.childNodes[0]),w=new fabric.Text(m.innerText||m.textContent||m.innerHTML,{selectable:!1,top:i.pxToNumber(b.top)+e.offset.y,left:i.pxToNumber(b.left)+e.offset.x,fill:v.color,fontSize:i.pxToNumber(v.fontSize||v["font-size"]),fontFamily:v.fontFamily||v["font-family"],textAlign:v["text-align"],isCoreElement:!0});i.setup.fabric.add(w)}}if(e.svg.nextSibling&&"A"==e.svg.nextSibling.tagName){var m=e.svg.nextSibling,b=fabric.parseStyleAttribute(m),w=new fabric.Text(m.innerText||m.textContent||m.innerHTML,{selectable:!1,top:i.pxToNumber(b.top)+e.offset.y,left:i.pxToNumber(b.left)+e.offset.x,fill:b.color,fontSize:i.pxToNumber(b.fontSize||b["font-size"]),fontFamily:b.fontFamily||b["font-family"],opacity:b.opacity,isCoreElement:!0});e.has.scrollbar||i.setup.fabric.add(w)}if(n.pop(),!n.length)var y=Number(new Date),x=setInterval(function(){var e=Number(new Date);(s.loaded==s.included||e-y>i.config.fabric.loadTimeout)&&(clearTimeout(x),i.handleBorder(r),i.handleCallback(r.afterCapture,r),i.setup.fabric.renderAll(),i.handleCallback(t,r))},AmCharts.updateRate)}}(p),function(e,t){var a,n=i.gatherAttribute(e,"class"),o=i.gatherAttribute(e,"visibility"),s=i.gatherAttribute(e,"clip-path");t.className=String(n),t.classList=String(n).split(" "),t.clipPath=s,t.svg=e;var l=["fill","stroke"];for(a=0;a<l.length;a++){var d=l[a],c=String(e.getAttribute(d)||"none"),p=Number(e.getAttribute(d+"-opacity")||"1"),f=i.getRGBA(c);"hidden"==o&&(t.opacity=0,p=0),f&&(f.pop(),f.push(p),t[d]="rgba("+f.join()+")",t[d+i.capitalize("opacity")]=p)}i.handleCallback(r.reviver,t,e)})}},toCanvas:function(e,t){var a=i.deepMerge({},e||{}),r=i.setup.canvas;return i.handleCallback(t,r,a),r},toImage:function(e,t){var a=i.deepMerge({format:"png",quality:1,multiplier:i.config.multiplier},e||{}),r=a.data,n=document.createElement("img");return!!i.handleNamespace("fabric",{scope:this,cb:i.toImage,args:arguments})&&(a.data||(r=a.lossless||"svg"==a.format?i.toSVG(i.deepMerge(a,{getBase64:!0})):i.setup.fabric.toDataURL(a)),n.setAttribute("src",r),i.handleCallback(t,n,a),n)},toBlob:function(e,t){var a,r=i.deepMerge({data:"empty",type:"text/plain"},e||{}),n=/^data:.+;base64,(.*)$/.exec(r.data);return n&&(r.data=n[0],r.type=r.data.slice(5,r.data.indexOf(",")-7),r.data=i.toByteArray({data:r.data.slice(r.data.indexOf(",")+1,r.data.length)})),a=r.getByteArray?r.data:new Blob([r.data],{type:r.type}),i.handleCallback(t,a,r),a},toJPG:function(e,t){var a=i.deepMerge({format:"jpeg",quality:1,multiplier:i.config.multiplier},e||{});a.format=a.format.toLowerCase();var r;return/iP(hone|od|ad)/.test(navigator.platform)&&(a.multiplier=1),!!i.handleNamespace("fabric",{scope:this,cb:i.toJPG,args:arguments})&&(r=i.setup.fabric.toDataURL(a),i.handleCallback(t,r,a),r)},toPNG:function(e,t){var a,r=i.deepMerge({format:"png",quality:1,multiplier:i.config.multiplier},e||{});return/iP(hone|od|ad)/.test(navigator.platform)&&(r.multiplier=1),!!i.handleNamespace("fabric",{scope:this,cb:i.toPNG,args:arguments})&&(a=i.setup.fabric.toDataURL(r),i.handleCallback(t,a,r),a)},toSVG:function(e,t){var a,r=[],n=[],o=i.deepMerge({compress:i.config.compress,reviver:function(e,t){var a=new RegExp(/\bstyle=(['"])(.*?)\1/).exec(e)[0].slice(7,-1),o=a.split(";"),s=[];for(i1=0;i1<o.length;i1++)if(o[i1]){var l=o[i1].replace(/\s/g,"").split(":"),d=l[0],c=l[1];if(-1!=["fill","stroke"].indexOf(d))if(c=i.getRGBA(c,!0)){var p="#"+c.toHex(),f=c._source[3];s.push([d,p].join(":")),s.push([d+"-opacity",f].join(":"))}else s.push(o[i1]);else"opactiy"!=d&&s.push(o[i1])}if(e=e.replace(a,s.join(";")),t&&t.svg){var u=t.svg.id,g=2,h=e.slice(-g);"/>"!=h&&(g=3,h=e.slice(-g));var m=e.slice(0,e.length-g),b=' clip-path="url(#'+u+')" ',v=i.gatherAttribute(t.svg,"class");if(v=v?v.split(" "):[],e=-1!=v.indexOf(i.setup.chart.classNamePrefix+"-graph-line")?m+b+h:"<g "+b+">"+e+"</g>",-1==n.indexOf(u)){var w=(new XMLSerializer).serializeToString(t.svg);r.push(w),n.push(u)}}return e}},e||{});if(!i.handleNamespace("fabric",{scope:this,cb:i.toSVG,args:arguments}))return!1;if(a=i.setup.fabric.toSVG(o,o.reviver),r.length){var s=a.slice(0,a.length-6),l=a.slice(-6);a=s+r.join("")+l}return o.compress&&(a=a.replace(/[\t\r\n]+/g,"")),o.getBase64&&(a="data:image/svg+xml;base64,"+btoa(a)),i.handleCallback(t,a,o),a},toPDF:function(e,t){var a,r=i.deepMerge(i.deepMerge({multiplier:i.config.multiplier||2,pageOrigin:void 0===i.config.pageOrigin},i.config.pdfMake),e||{},!0);if(/iP(hone|od|ad)/.test(navigator.platform)&&(r.multiplier=1),!i.handleNamespace("pdfMake",{scope:this,cb:i.toPDF,args:arguments}))return!1;if(r.images.reference=i.toPNG(r),!r.content){var n=[],o=function(e,t){var a=i.defaults.pdfMake.pageSizes[String(e).toUpperCase()].slice();if(!a)throw new Error('The given pageSize "'+e+'" does not exist!');return"landscape"==t&&a.reverse(),a}(r.pageSize,r.pageOrientation),s=function(e){if("number"==typeof e||e instanceof Number)e={left:e,right:e,top:e,bottom:e};else if(e instanceof Array)if(2===e.length)e={left:e[0],top:e[1],right:e[0],bottom:e[1]};else{if(4!==e.length)throw"Invalid pageMargins definition";e={left:e[0],top:e[1],right:e[2],bottom:e[3]}}else e={left:i.defaults.pdfMake.pageMargins,top:i.defaults.pdfMake.pageMargins,right:i.defaults.pdfMake.pageMargins,bottom:i.defaults.pdfMake.pageMargins};return e}(r.pageMargins);o[0]-=s.left+s.right,o[1]-=s.top+s.bottom,r.pageOrigin&&(n.push(i.i18l("label.saved.from")),n.push(window.location.href),o[1]-=28.128),n.push({image:"reference",fit:o}),r.content=n}return a=new pdfMake.createPdf(r),t&&a.getDataUrl(function(e){return function(t){e.apply(i,arguments)}}(t)),a},toPRINT:function(e,t){var a,r=i.deepMerge({delay:1,lossless:!1},e||{}),n=i.toImage(r),o=[],s=document.body.childNodes,l=document.documentElement.scrollTop||document.body.scrollTop;for(n.setAttribute("style","width: 100%; max-height: 100%;"),a=0;a<s.length;a++)i.isElement(s[a])&&(o[a]=s[a].style.display,s[a].style.display="none");return document.body.appendChild(n),r.delay*=1e3,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&r.delay<1e3&&(r.delay=1e3),setTimeout(function(){window.print(),setTimeout(function(){for(a=0;a<s.length;a++)i.isElement(s[a])&&(s[a].style.display=o[a]);document.body.removeChild(n),document.documentElement.scrollTop=document.body.scrollTop=l,i.handleCallback(t,n,r)},r.delay)},r.delay),n},toJSON:function(e,t){var a=i.deepMerge({dateFormat:i.config.dateFormat||"dateObject"},e||{},!0),r={};return!!i.handleNamespace("JSON",{scope:this,cb:i.toJSON,args:arguments})&&(a.data=void 0!==a.data?a.data:i.getChartData(a),r=JSON.stringify(a.data,void 0,"\t"),i.handleCallback(t,r,a),r)},toCSV:function(e,t){var a,r=i.deepMerge({delimiter:",",quotes:!0,escape:!0,withHeader:!0},e||{},!0),n=[],o="";n=i.toArray(r);for(a in n)isNaN(a)||(o+=n[a].join(r.delimiter)+"\n");return i.handleCallback(t,o,r),o},toXLSX:function(e,t){function a(e,t){return t&&(e+=1462),(Date.parse(e)-60*e.getTimezoneOffset()*1e3-new Date(Date.UTC(1899,11,30)))/864e5}var r=i.deepMerge({name:"amCharts",dateFormat:i.config.dateFormat||"dateObject",withHeader:!0,stringify:!1},e||{},!0),n=[],o="",s={SheetNames:[],Sheets:{}};return!!i.handleNamespace("XLSX",{scope:this,cb:i.toXLSX,args:arguments})&&(n=i.toArray(r),s.SheetNames.push(r.name),s.Sheets[r.name]=function(e,t){for(var i={},r={s:{c:1e7,r:1e7},e:{c:0,r:0}},n=0;n!=e.length;++n)for(var o=0;o!=e[n].length;++o){r.s.r>n&&(r.s.r=n),r.s.c>o&&(r.s.c=o),r.e.r<n&&(r.e.r=n),r.e.c<o&&(r.e.c=o);var s={v:e[n][o]};if(null!=s.v){var l=XLSX.utils.encode_cell({c:o,r:n});"number"==typeof s.v?s.t="n":"boolean"==typeof s.v?s.t="b":s.v instanceof Date?(s.t="n",s.z=XLSX.SSF._table[14],s.v=a(s.v)):s.v instanceof Object?(s.t="s",s.v=JSON.stringify(s.v)):s.t="s",i[l]=s}}return r.s.c<1e7&&(i["!ref"]=XLSX.utils.encode_range(r)),i}(n),o=XLSX.write(s,{bookType:"xlsx",bookSST:!0,type:"base64"}),o="data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,"+o,i.handleCallback(t,o,r),o)},toArray:function(e,t){function a(e){return"string"==typeof e&&(n.escape&&(e=e.replace('"','""')),n.quotes&&(e=['"',e,'"'].join(""))),e}var r,n=i.deepMerge({withHeader:!1,stringify:!0,escape:!1,quotes:!1},e||{},!0),o=[],s=[],l=[],d=i.config.processData;if(n.processData=function(e,t){var a=t.exportFields||Object.keys(t.dataFieldsMap);for(c=0;c<a.length;c++){var r=a[c],n=t.dataFieldsTitlesMap[r];s.push(n)}return d?i.handleCallback(d,e,t):e},n.data=void 0!==n.data?i.processData(n):i.getChartData(n),n.withHeader){l=[];for(c in s)isNaN(c)||l.push(a(s[c]));o.push(l)}for(r in n.data)if(l=[],!isNaN(r)){for(c in s)if(!isNaN(c)){var c=s[c],p=n.data[r][c];p=null==p?"":n.stringify?String(p):p,l.push(a(p))}o.push(l)}return i.handleCallback(t,o,n),o},toByteArray:function(e,t){function a(e){var t=e.charCodeAt(0);return t===o?62:t===s?63:t<l?-1:t<l+10?t-l+26+26:t<c+26?t-c:t<d+26?t-d+26:void 0}var r=i.deepMerge({},e||{}),n="undefined"!=typeof Uint8Array?Uint8Array:Array,o="+".charCodeAt(0),s="/".charCodeAt(0),l="0".charCodeAt(0),d="a".charCodeAt(0),c="A".charCodeAt(0),p=function(e){function t(e){d[p++]=e}var i,r,o,s,l,d;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=e.length;l="="===e.charAt(c-2)?2:"="===e.charAt(c-1)?1:0,d=new n(3*e.length/4-l),o=l>0?e.length-4:e.length;var p=0;for(i=0,r=0;i<o;i+=4,r+=3)t((16711680&(s=a(e.charAt(i))<<18|a(e.charAt(i+1))<<12|a(e.charAt(i+2))<<6|a(e.charAt(i+3))))>>16),t((65280&s)>>8),t(255&s);return 2===l?t(255&(s=a(e.charAt(i))<<2|a(e.charAt(i+1))>>4)):1===l&&(t((s=a(e.charAt(i))<<10|a(e.charAt(i+1))<<4|a(e.charAt(i+2))>>2)>>8&255),t(255&s)),d}(r.data);return i.handleCallback(t,p,r),p},removeFunctionsFromObject:function(e){for(var t in e)"function"==typeof e[t]&&delete e[t];return e},handleCallback:function(e){var t,a=Array();if(e&&e instanceof Function){for(t=0;t<arguments.length;t++)t>0&&a.push(arguments[t]);return e.apply(i,a)}},handleLog:function(e){!0===i.config.debug&&console.log(e)},handleNamespace:function(e,t){function a(){var l=Number(new Date);o=!!(e in n),"pdfMake"==e&&o&&(o=n.pdfMake.vfs),o?(clearTimeout(r),t.cb.apply(t.scope,t.args),i.handleLog(['AmCharts [export]: Namespace "',e,'" showed up in: ',String(n)].join(""))):l-s<i.libs.loadTimeout?r=setTimeout(a,250):i.handleLog(['AmCharts [export]: Gave up waiting for "',e,'" in: ',String(n)].join(""))}var r,n=i.config.scope||window,o=!1,s=Number(new Date);return(o=!!(e in n))||(i.handleLog(['AmCharts [export]: Could not find "',e,'" in: ',String(n)].join("")),a()),o},handleBorder:function(e){if(i.config.border instanceof Object){var t=i.deepMerge(i.defaults.fabric.border,e.border||{},!0),a=new fabric.Rect;t.width=i.setup.fabric.width-t.strokeWidth,t.height=i.setup.fabric.height-t.strokeWidth,a.set(t),i.setup.fabric.add(a)}},handleDropbox:function(e){if(i.drawing.enabled)if(e.preventDefault(),e.stopPropagation(),"dragover"==e.type)i.setup.wrapper.setAttribute("class",i.setup.chart.classNamePrefix+"-export-canvas active dropbox");else if(i.setup.wrapper.setAttribute("class",i.setup.chart.classNamePrefix+"-export-canvas active"),"drop"==e.type&&e.dataTransfer.files.length)for(var t=0;t<e.dataTransfer.files.length;t++){var a=new FileReader;a.onloadend=function(t){return function(){i.drawing.handler.add({url:a.result,top:e.layerY-10*t,left:e.layerX-10*t})}}(t),a.readAsDataURL(e.dataTransfer.files[t])}},handleReady:function(e){var t=this,a=Number(new Date);t.handleCallback(e,"data",!1);for(var i in t.libs.namespaces)!function(i){var r=setInterval(function(){var n=Number(new Date);(n-a>t.libs.loadTimeout||i in window)&&(clearTimeout(r),t.handleCallback(e,i,n-a>t.libs.loadTimeout))},AmCharts.updateRate)}(t.libs.namespaces[i])},getChartData:function(e){function t(e,t,a){function r(e,t){return-1!=s.dataFields.indexOf(e)?r([e,".",t].join("")):e}e&&s.exportTitles&&"gantt"!=i.setup.chart.type&&(g=r(e,a),s.dataFieldsMap[g]=e,s.dataFields.push(g),s.titles[g]=t||g)}var a,r,n,o,s=i.deepMerge({data:[],titles:{},dateFields:[],dataFields:[],dataFieldsMap:{},exportTitles:i.config.exportTitles,exportFields:i.config.exportFields,exportSelection:i.config.exportSelection,columnNames:i.config.columnNames},e||{},!0),l=["valueField","openField","closeField","highField","lowField","xField","yField"];if(0==s.data.length)if("stock"==i.setup.chart.type){for(s.data=i.cloneObject(i.setup.chart.mainDataSet.dataProvider),t(i.setup.chart.mainDataSet.categoryField),s.dateFields.push(i.setup.chart.mainDataSet.categoryField),a=0;a<i.setup.chart.mainDataSet.fieldMappings.length;a++){u=i.setup.chart.mainDataSet.fieldMappings[a];for(r=0;r<i.setup.chart.panels.length;r++){var d=i.setup.chart.panels[r];for(n=0;n<d.stockGraphs.length;n++){v=d.stockGraphs[n];for(i4=0;i4<l.length;i4++)v[l[i4]]==u.toField&&t(u.fromField,v.title,l[i4])}}}if(i.setup.chart.comparedGraphs.length){for(o=[],a=0;a<s.data.length;a++)o.push(s.data[a][i.setup.chart.mainDataSet.categoryField]);for(a=0;a<i.setup.chart.comparedGraphs.length;a++){v=i.setup.chart.comparedGraphs[a];for(r=0;r<v.dataSet.dataProvider.length;r++){var c=v.dataSet.categoryField,p=v.dataSet.dataProvider[r][c],f=o.indexOf(p);if(-1!=f)for(n=0;n<v.dataSet.fieldMappings.length;n++){var u=v.dataSet.fieldMappings[n],g=v.dataSet.id+"_"+u.toField;s.data[f][g]=v.dataSet.dataProvider[r][u.fromField],s.titles[g]||t(g,v.dataSet.title)}}}}}else if("gantt"==i.setup.chart.type){t(i.setup.chart.categoryField);var h=i.setup.chart.segmentsField;for(a=0;a<i.setup.chart.dataProvider.length;a++){var m=i.setup.chart.dataProvider[a];if(m[h])for(r=0;r<m[h].length;r++)m[h][r][i.setup.chart.categoryField]=m[i.setup.chart.categoryField],s.data.push(m[h][r])}for(a=0;a<i.setup.chart.graphs.length;a++){v=i.setup.chart.graphs[a];for(r=0;r<l.length;r++){var b=v[w=l[r]];v.title;t(b,v.title,w)}}}else if(-1!=["pie","funnel"].indexOf(i.setup.chart.type))s.data=i.setup.chart.dataProvider,t(i.setup.chart.titleField),s.dateFields.push(i.setup.chart.titleField),t(i.setup.chart.valueField);else if("map"!=i.setup.chart.type)for(s.data=i.setup.chart.dataProvider,i.setup.chart.categoryAxis&&(t(i.setup.chart.categoryField,i.setup.chart.categoryAxis.title),!1!==i.setup.chart.categoryAxis.parseDates&&s.dateFields.push(i.setup.chart.categoryField)),a=0;a<i.setup.chart.graphs.length;a++){var v=i.setup.chart.graphs[a];for(r=0;r<l.length;r++){var w=l[r];t(b=v[w],v.title,w)}}return i.processData(s)},getAnnotations:function(e,t){var a,r=i.deepMerge({},e||{},!0),n=[];for(a=0;a<i.setup.fabric._objects.length;a++)if(!i.setup.fabric._objects[a].isCoreElement){var o=i.setup.fabric._objects[a].toJSON();i.handleCallback(r.reviver,o,a),n.push(o)}return i.handleCallback(t,n),n},setAnnotations:function(e,t){var a=i.deepMerge({data:[]},e||{},!0);return fabric.util.enlivenObjects(a.data,function(e){e.forEach(function(e,t){i.handleCallback(a.reviver,e,t),i.setup.fabric.add(e)}),i.handleCallback(t,a)}),a.data},processData:function(t){var a,r,n=i.deepMerge({data:[],titles:{},dateFields:[],dataFields:[],dataFieldsMap:{},dataFieldsTitlesMap:{},dataDateFormat:i.setup.chart.dataDateFormat,dateFormat:i.config.dateFormat||i.setup.chart.dataDateFormat||"YYYY-MM-DD",exportTitles:i.config.exportTitles,exportFields:i.config.exportFields,exportSelection:i.config.exportSelection,columnNames:i.config.columnNames,processData:i.config.processData},t||{},!0);if(n.data.length){for(a=0;a<n.data.length;a++)for(r in n.data[a])-1==n.dataFields.indexOf(r)&&(n.dataFields.push(r),n.dataFieldsMap[r]=r);void 0!==n.exportFields&&(n.dataFields=n.exportFields.filter(function(e){return-1!=n.dataFields.indexOf(e)}));var o=[];for(a=0;a<n.data.length;a++){var s={},l=!1;for(r=0;r<n.dataFields.length;r++){var d=n.dataFields[r],c=n.dataFieldsMap[d],p=n.columnNames&&n.columnNames[d]||n.titles[d]||d,f=n.data[a][c];null==f&&(f=void 0),n.exportTitles&&"gantt"!=i.setup.chart.type&&p in s&&(p+=["( ",d," )"].join("")),-1!=n.dateFields.indexOf(c)&&(n.dataDateFormat&&(f instanceof String||"string"==typeof f)?f=AmCharts.stringToDate(f,n.dataDateFormat):n.dateFormat&&(f instanceof Number||"number"==typeof f)&&(f=new Date(f)),n.exportSelection&&(f instanceof Date?(f<e.startDate||f>e.endDate)&&(l=!0):(a<e.startIndex||a>e.endIndex)&&(l=!0)),n.dateFormat&&"dateObject"!=n.dateFormat&&f instanceof Date&&(f=AmCharts.formatDate(f,n.dateFormat))),n.dataFieldsTitlesMap[c]=p,s[p]=f}l||o.push(s)}n.data=o}return void 0!==n.processData&&(n.data=i.handleCallback(n.processData,n.data,n)),n.data},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},createMenu:function(t,a){function r(t,a){var o,s,l=document.createElement("ul");for(o=0;o<t.length;o++){var d="string"==typeof t[o]?{format:t[o]}:t[o],c=document.createElement("li"),p=document.createElement("a"),f=document.createElement("img"),u=document.createElement("span"),g=String(d.action?d.action:d.format).toLowerCase();if(d.format=String(d.format).toUpperCase(),c.addEventListener("mouseleave",function(e){this.classList.remove("active")}),p.addEventListener("focus",function(e){if(!i.setup.hasTouch){i.setup.focusedMenuItem=this;var t=this.parentNode;"UL"!=t.tagName&&(t=t.parentNode);var a=t.getElementsByTagName("li");for(o=0;o<a.length;o++)a[o].classList.remove("active");this.parentNode.classList.add("active"),this.parentNode.parentNode.parentNode.classList.add("active")}}),i.config.formats[d.format]?d=i.deepMerge({label:d.icon?"":d.format,format:d.format,mimeType:i.config.formats[d.format].mimeType,extension:i.config.formats[d.format].extension,capture:i.config.formats[d.format].capture,action:i.config.action,fileName:i.config.fileName},d):d.label||(d.label=d.label?d.label:i.i18l("menu.label."+g)),(-1==["CSV","JSON","XLSX"].indexOf(d.format)||-1==["map","gauge"].indexOf(i.setup.chart.type))&&(i.setup.hasBlob||"UNDEFINED"==d.format||!d.mimeType||"image"==d.mimeType.split("/")[0]||"text/plain"==d.mimeType)){if("draw"==d.action)i.config.fabric.drawing.enabled?(d.menu=d.menu?d.menu:i.config.fabric.drawing.menu,d.click=function(e){return function(){this.capture(e,function(){this.createMenu(e.menu)})}}(d)):d.menu=[];else if(!d.populated&&d.action&&-1!=d.action.indexOf("draw.")){var h=d.action.split(".")[1],m=d[h]||i.config.fabric.drawing[h]||[];for(d.menu=[],d.populated=!0,s=0;s<m.length;s++){var b={label:m[s]};if("shapes"==h){var v=-1==m[s].indexOf("//"),w=(v?i.config.path+"shapes/":"")+m[s];b.action="add",b.url=w,b.icon=w,b.ignore=v,b.class="export-drawing-shape"}else"colors"==h?(b.style="background-color: "+m[s],b.action="change",b.color=m[s],b.class="export-drawing-color"):"widths"==h?(b.action="change",b.width=m[s],b.label=document.createElement("span"),b.label.style.width=i.numberToPx(m[s]),b.label.style.height=i.numberToPx(m[s]),b.class="export-drawing-width"):"opacities"==h?(b.style="opacity: "+m[s],b.action="change",b.opacity=m[s],b.label=100*m[s]+"%",b.class="export-drawing-opacity"):"modes"==h&&(b.label=i.i18l("menu.label.draw.modes."+m[s]),b.click=function(e){return function(){i.drawing.mode=e}}(m[s]),b.class="export-drawing-mode");d.menu.push(b)}}else d.click||d.menu||d.items||(i.drawing.handler[g]instanceof Function?(d.action=g,d.click=function(e){return function(){this.drawing.handler[e.action](e),"cancel"!=e.action&&this.createMenu(this.config.fabric.drawing.menu)}}(d)):i.drawing.enabled?d.click=function(e){return function(){this.config.drawing.autoClose&&this.drawing.handler.done(),this["to"+e.format](e,function(t){"download"==e.action&&this.download(t,e.mimeType,[e.fileName,e.extension].join("."))})}}(d):"UNDEFINED"!=d.format&&(d.click=function(e){return function(){if(e.capture||"print"==e.action||"PRINT"==e.format)this.capture(e,function(){this.drawing.handler.done(),this["to"+e.format](e,function(t){"download"==e.action&&this.download(t,e.mimeType,[e.fileName,e.extension].join("."))})});else{if(!this["to"+e.format])throw new Error("Invalid format. Could not determine output type.");this["to"+e.format](e,function(t){this.download(t,e.mimeType,[e.fileName,e.extension].join("."))})}}}(d)));(void 0===d.menu||d.menu.length)&&(p.setAttribute("href","#"),i.setup.hasTouch&&c.classList?(p.addEventListener("touchend",function(e,t){return function(a){a.preventDefault();var r=[a,t];if(("draw"==t.action||"PRINT"==t.format||"UNDEFINED"!=t.format&&t.capture)&&!i.drawing.enabled&&(!isNaN(t.delay)||!isNaN(i.config.delay)))return t.delay=isNaN(t.delay)?i.config.delay:t.delay,void i.delay(t,e);e.apply(i,r)}}(d.click||function(e){e.preventDefault()},d)),p.addEventListener("touchend",function(e){return function(t){function a(e){return e.classList.contains("export-main")||e.classList.contains("export-drawing")}t.preventDefault();var r=e.elements.li,s=function(e){var t=e.parentNode.parentNode,a=t.classList;return!("LI"!=t.tagName||!a.contains("active"))}(r),l=(function(e){var t=e.parentNode.children;for(o=0;o<t.length;o++){var a=t[o],i=a.classList;if(a!==e&&i.contains("active"))return i.remove("active"),!0}}(r),function(e){return e.getElementsByTagName("ul").length>0}(r));if(!a(r)&&l||i.setup.menu.classList.toggle("active"),!s||!l)for(;n.length;){var d=n.pop(),c=d!==r;a(d)?l||d.classList.remove("active"):c&&d.classList.remove("active")}n.push(r),l&&r.classList.toggle("active")}}(d))):p.addEventListener("click",function(e,t){return function(a){a.preventDefault();var r=[a,t];if(("draw"==t.action||"PRINT"==t.format||"UNDEFINED"!=t.format&&t.capture)&&!i.drawing.enabled&&(!isNaN(t.delay)||!isNaN(i.config.delay)))return t.delay=isNaN(t.delay)?i.config.delay:t.delay,void i.delay(t,e);e.apply(i,r)}}(d.click||function(e){e.preventDefault()},d)),c.appendChild(p),i.isElement(d.label)?u.appendChild(d.label):u.innerHTML=d.label,d.class&&(c.className=d.class),d.style&&c.setAttribute("style",d.style),d.icon&&(f.setAttribute("src",(d.ignore||-1!=d.icon.slice(0,10).indexOf("//")?"":e.pathToImages)+d.icon),p.appendChild(f)),d.label&&p.appendChild(u),d.title&&p.setAttribute("title",d.title),i.config.menuReviver&&(c=i.config.menuReviver.apply(i,[d,c])),d.elements={li:c,a:p,img:f,span:u},(d.menu||d.items)&&"draw"!=d.action?r(d.menu||d.items,c).childNodes.length&&l.appendChild(c):l.appendChild(c))}}return l.childNodes.length&&a.appendChild(l),l}var n=[];return a||("string"==typeof i.config.divId?i.config.divId=a=document.getElementById(i.config.divId):a=i.isElement(i.config.divId)?i.config.divId:i.setup.chart.containerDiv),i.isElement(i.setup.menu)?i.setup.menu.innerHTML="":i.setup.menu=document.createElement("div"),i.setup.menu.setAttribute("class",i.setup.chart.classNamePrefix+"-export-menu "+i.setup.chart.classNamePrefix+"-export-menu-"+i.config.position+" amExportButton"),i.config.menuWalker&&(r=i.config.menuWalker),r.apply(this,[t,i.setup.menu]),i.setup.menu.childNodes.length&&a.appendChild(i.setup.menu),i.setup.menu},delay:function(e,t){var a,r,n=i.deepMerge({delay:3,precision:2},e||{}),o=Number(new Date),s=i.createMenu([{label:i.i18l("capturing.delayed.menu.label").replace("{{duration}}",AmCharts.toFixed(n.delay,n.precision)),title:i.i18l("capturing.delayed.menu.title"),class:"export-delayed-capturing",click:function(){clearTimeout(a),clearTimeout(r),i.createMenu(i.config.menu)}}]).getElementsByTagName("a")[0];a=setInterval(function(){var e=n.delay-(Number(new Date)-o)/1e3;e<=0?(clearTimeout(a),"draw"!=n.action&&i.createMenu(i.config.menu)):s&&(s.innerHTML=i.i18l("capturing.delayed.menu.label").replace("{{duration}}",AmCharts.toFixed(e,2)))},AmCharts.updateRate),r=setTimeout(function(){t.apply(i,arguments)},1e3*n.delay)},migrateSetup:function(e){function t(e){var i;for(i in e){var r=e[i];"export"==i.slice(0,6)&&r?a.menu.push(i.slice(6)):"userCFG"==i?t(r):"menuItems"==i?a.menu=r:"libs"==i?a.libs=r:"string"==typeof i&&(a[i]=r)}}var a={enabled:!0,migrated:!0,libs:{autoLoad:!0},menu:[]};return t(e),a},clear:function(){var e,t;for(void 0!==i.setup.fabric&&i.setup.fabric.removeListeners(),e=0;e<i.listenersToRemove.length;e++)(t=i.listenersToRemove[e]).node.removeEventListener(t.event,t.method);i.isElement(i.setup.wrapper)&&i.isElement(i.setup.wrapper.parentNode)&&i.setup.wrapper.parentNode.removeChild&&i.setup.wrapper.parentNode.removeChild(i.setup.wrapper),i.isElement(i.setup.menu)&&i.isElement(i.setup.wrapper.parentNode)&&i.setup.wrapper.parentNode.removeChild&&i.setup.menu.parentNode.removeChild(i.setup.menu),i.listenersToRemove=[],i.setup.chart.AmExport=void 0,i.setup.chart.export=void 0,i.setup=void 0},loadListeners:function(){function e(e){e&&(e.set({top:e.top+10,left:e.left+10}),i.setup.fabric.add(e))}i.config.keyListener&&"attached"!=i.config.keyListener&&(i.docListener=function(t){function a(e,t){for(i1=0;i1<e.length;i1++){var a=e[i1];a.parentNode.classList.remove("active"),0!=i1||t||a.focus()}}function r(e){i.setup.focusedMenuItem&&i.setup.focusedMenuItem.nextSibling&&(i.setup.focusedMenuItem.parentNode.classList.add("active"),a(i.setup.focusedMenuItem.nextSibling.getElementsByTagName("a"),e))}function n(e){i.setup.focusedMenuItem&&i.setup.focusedMenuItem.parentNode.parentNode.parentNode&&(i.setup.focusedMenuItem.parentNode.classList.add("active"),a(i.setup.focusedMenuItem.parentNode.parentNode.parentNode.getElementsByTagName("a"),e))}var o=i.drawing.buffer.target,s=[37,38,39,40,13,9,27],l=(["top-left","bottom-left"].indexOf(i.config.position),-1!=["top-right","bottom-right"].indexOf(i.config.position));if(i.setup.focusedMenuItem&&-1!=s.indexOf(t.keyCode)){if(9==t.keyCode)return void(i.setup.focusedMenuItem.nextSibling?t.shiftKey&&i.setup.focusedMenuItem.parentNode.classList.remove("active"):(i.setup.focusedMenuItem.parentNode.classList.remove("active"),i.setup.focusedMenuItem.parentNode.nextSibling||(i.setup.focusedMenuItem.parentNode.classList.remove("active"),i.setup.focusedMenuItem.parentNode.parentNode.parentNode.classList.remove("active"))));13==t.keyCode&&i.setup.focusedMenuItem.nextSibling&&r(),37==t.keyCode&&(l?r():n()),39==t.keyCode&&(l?n():r()),40==t.keyCode&&function(e){i.setup.focusedMenuItem&&i.setup.focusedMenuItem.parentNode.nextSibling&&(i.setup.focusedMenuItem.parentNode.classList.remove("active"),a(i.setup.focusedMenuItem.parentNode.nextSibling.getElementsByTagName("a"),e))}(),38==t.keyCode&&function(e){i.setup.focusedMenuItem&&i.setup.focusedMenuItem.parentNode.previousSibling&&(i.setup.focusedMenuItem.parentNode.classList.remove("active"),a(i.setup.focusedMenuItem.parentNode.previousSibling.getElementsByTagName("a"),e))}(),27==t.keyCode&&function(){function e(t){if(i.isElement(t)){try{t.blur()}catch(e){}t.parentNode&&t.parentNode.classList.remove("active"),t.classList.contains("amExportButton")||e(t.parentNode)}}i.setup.focusedMenuItem&&(e(i.setup.focusedMenuItem),i.setup.focusedMenuItem=void 0)}()}8!=t.keyCode&&46!=t.keyCode||!o?27==t.keyCode&&i.drawing.enabled?(t.preventDefault(),i.drawing.buffer.isSelected?i.setup.fabric.discardActiveObject():i.drawing.handler.done()):67==t.keyCode&&(t.metaKey||t.ctrlKey)&&o?i.drawing.buffer.copy=o:88==t.keyCode&&(t.metaKey||t.ctrlKey)&&o?(i.drawing.buffer.copy=o,i.setup.fabric.remove(o)):86==t.keyCode&&(t.metaKey||t.ctrlKey)?i.drawing.buffer.copy&&e(i.drawing.buffer.copy.clone(e)):90==t.keyCode&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),t.shiftKey?i.drawing.handler.redo():i.drawing.handler.undo()):(t.preventDefault(),i.setup.fabric.remove(o))},i.config.keyListener="attached",document.addEventListener("keydown",i.docListener),i.addListenerToRemove("keydown",document,i.docListener)),i.config.fileListener&&(i.setup.chart.containerDiv.addEventListener("dragover",i.handleDropbox),i.addListenerToRemove("dragover",i.setup.chart.containerDiv,i.handleDropbox),i.setup.chart.containerDiv.addEventListener("dragleave",i.handleDropbox),i.addListenerToRemove("dragleave",i.setup.chart.containerDiv,i.handleDropbox),i.setup.chart.containerDiv.addEventListener("drop",i.handleDropbox),i.addListenerToRemove("drop",i.setup.chart.containerDiv,i.handleDropbox))},init:function(){clearTimeout(a),a=setInterval(function(){i.setup&&i.setup.chart.containerDiv&&(clearTimeout(a),i.config.enabled&&(i.setup.chart.AmExport=i,i.config.overflow&&(i.setup.chart.div.style.overflow="visible"),i.loadListeners(),i.createMenu(i.config.menu),i.handleReady(i.config.onReady)))},AmCharts.updateRate)},construct:function(){i.drawing.handler.cancel=i.drawing.handler.done;try{i.setup.hasBlob=!!new Blob}catch(e){}window.safari=window.safari?window.safari:{},i.defaults.fabric.drawing.fontSize=i.setup.chart.fontSize||11,i.config.drawing=i.deepMerge(i.defaults.fabric.drawing,i.config.drawing||{},!0),i.config.border&&(i.config.border=i.deepMerge(i.defaults.fabric.border,i.config.border||{},!0)),i.deepMerge(i.defaults.fabric,i.config,!0),i.deepMerge(i.defaults.fabric,i.config.fabric||{},!0),i.deepMerge(i.defaults.pdfMake,i.config,!0),i.deepMerge(i.defaults.pdfMake,i.config.pdfMake||{},!0),i.deepMerge(i.libs,i.config.libs||{},!0),i.config.drawing=i.defaults.fabric.drawing,i.config.fabric=i.defaults.fabric,i.config.pdfMake=i.defaults.pdfMake,i.config=i.deepMerge(i.defaults,i.config,!0),i.config.fabric.drawing.enabled&&void 0===i.config.fabric.drawing.menu&&(i.config.fabric.drawing.menu=[],i.deepMerge(i.config.fabric.drawing.menu,[{class:"export-drawing",menu:[{label:i.i18l("menu.label.draw.add"),menu:[{label:i.i18l("menu.label.draw.shapes"),action:"draw.shapes"},{label:i.i18l("menu.label.draw.text"),action:"text"}]},{label:i.i18l("menu.label.draw.change"),menu:[{label:i.i18l("menu.label.draw.modes"),action:"draw.modes"},{label:i.i18l("menu.label.draw.colors"),action:"draw.colors"},{label:i.i18l("menu.label.draw.widths"),action:"draw.widths"},{label:i.i18l("menu.label.draw.opacities"),action:"draw.opacities"},"UNDO","REDO"]},{label:i.i18l("menu.label.save.image"),menu:["PNG","JPG","SVG","PDF"]},"PRINT","CANCEL"]}])),void 0===i.config.menu&&(i.config.menu=[],i.deepMerge(i.config,{menu:[{class:"export-main",menu:[{label:i.i18l("menu.label.save.image"),menu:["PNG","JPG","SVG","PDF"]},{label:i.i18l("menu.label.save.data"),menu:["CSV","XLSX","JSON"]},{label:i.i18l("menu.label.draw"),action:"draw",menu:i.config.fabric.drawing.menu},{format:"PRINT",label:i.i18l("menu.label.print")}]}]})),i.libs.path||(i.libs.path=i.config.path+"libs/"),i.setup.hasClasslist||i.libs.resources.push("classList.js/classList.min.js"),i.isSupported()&&(i.loadDependencies(i.libs.resources,i.libs.reload),i.setup.chart.addClassNames=!0,i.setup.chart[i.name]=i,i.init())}};if(t)i.config=t;else if(i.setup.chart[i.name])i.config=i.setup.chart[i.name];else{if(!i.setup.chart.amExport&&!i.setup.chart.exportConfig)return;i.config=i.migrateSetup(i.setup.chart.amExport||i.setup.chart.exportConfig)}return i.construct(),i.deepMerge(this,i)},AmCharts.addInitHandler(function(e){new AmCharts.export(e)},["pie","serial","xy","funnel","radar","gauge","stock","map","gantt"]);







var cccchart_type = 'line';
(function() {

var ExchangesByCurrency = GLOBAL_CURRENCY_EXCHANGES[GLOBAL_SYMBOL];
var Currencies = ["USD","EUR","GBP","JPY","RUR"];

Currencies = Currencies.filter((cur) => {
	return ExchangesByCurrency.hasOwnProperty(cur);
});

var CurrenciesSymbols = GLOBAL_CURRENCY_SYMBOLS;

var cccCurrentTheme = {
General: {
background: '#FFF',
borderWidth: '0px',
boxShadow: '0px 0px 10px #ddd',
borderColor: '#e0e6ef',
borderRadius: '0 0 0 0',
textColor: '#000'

},
export : {
enabled : true,
"libs": { "autoLoad": false }
},
Tabs: {
borderColor: '#d7d7d7',
activeBorderColor: '#ffcd04',
},
Chart: {
animation: false,
fillColor: 'rgba(151,187,205,0.2)',
borderColor: '#97BBCD',
},
Conversion: {
background: 'transparent',
lineHeight: '20px',
color: '#000',
}
};

if (typeof cccTheme !== 'undefined') {
for(var key in cccCurrentTheme) {
var group = cccCurrentTheme[key];
for(var prop in group) {
if(!group.hasOwnProperty(prop)) continue;
if(cccTheme.hasOwnProperty(key) && cccTheme[key].hasOwnProperty(prop)) {
cccCurrentTheme[key][prop] = cccTheme[key][prop];
}
}
}
}

if (typeof cccThemeV3Chart !== 'undefined') {
for(var key in cccCurrentTheme) {
var group = cccCurrentTheme[key];
for(var prop in group) {
if(!group.hasOwnProperty(prop)) continue;
if(cccThemeV3Chart.hasOwnProperty(key) && cccThemeV3Chart[key].hasOwnProperty(prop)) {
cccCurrentTheme[key][prop] = cccThemeV3Chart[key][prop];
}
}
}
}

function cccCreateCSSSelector (selector, styleRules) {
var style = document.createElement('style');
style.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(style);
if(!(style.sheet||{}).insertRule){
(style.styleSheet || style.sheet).addRule(selector, styleRules);
}else{
style.sheet.insertRule(selector+"{"+styleRules+"}",0);
}
}

var cccglobal_data = {};
var cccupdating = false;
var cccloading_counter = 0;
var cccfsym = GLOBAL_SYMBOL;
var ccctsym = 'USD';

cccscale = 'histohour';
ccclimit = '168';
cccperiod = '1W';
cccaggregate = '1';
cccminPeriod = 'hh';
cccforceAll = false;

var loadChartByPeriod = null;

var chartBTC ;

var colors = [
'#FABF2C',
'#8F2BFA',
'#006098',
'#F89017',
'#000000',
'#398439',
'#9b59b6',
'#e74c3c',
'#2c3e50',
'#d35400',
'#16a085',
];

document.validateCheckboxes = function (event, target) {
var marketsContainer = document.getElementById('marketsContainer' + ccctsym);
var childs = marketsContainer.childNodes;
var result = false;

for (var i = 0; i < childs.length; i++) {
var checkbox = childs[i].getElementsByTagName("input")[0];

if(checkbox.checked && target !== checkbox) {
result = true;
}
}

if (!result) {
event.preventDefault();
}
}

window.cccUpdateChart = function (externalCCCTsym) {
if(typeof externalCCCTsym != 'undefined'){
ccctsym=externalCCCTsym;
}
if (cccchart_type == 'line') {
var marketsContainer = document.getElementById('marketsContainer' + ccctsym);
} else if (cccchart_type == 'candle' || cccchart_type == 'ohlc') {
var marketsContainer = document.getElementById('marketsContainerCandle' + ccctsym);
}

var childs = marketsContainer.childNodes;
var unloaded_markets = [];
var selected_markets = [];
cccupdating = true;

if (cccglobal_data[ccctsym] === undefined) {
cccglobal_data[ccctsym] = {};
}

if (cccglobal_data[ccctsym][cccperiod] === undefined) {
cccglobal_data[ccctsym][cccperiod] = {};
}

for (var i = 0; i < childs.length; i++) {
var checkbox = childs[i].getElementsByTagName("input")[0];
if(checkbox.checked) {
selected_markets.push({Name: checkbox.value, Color: childs[i].style.color});
if (cccglobal_data[ccctsym][cccperiod][checkbox.value] === undefined) {
unloaded_markets.push(checkbox.value);
} else if (new Date().getTime() - cccglobal_data[ccctsym][cccperiod][checkbox.value].timeout.getTime() > (0)) {

}
unloaded_markets.push(checkbox.value);
}
}

if (unloaded_markets.length > 0) {
for (var i = 0; i < unloaded_markets.length; i++) {
finish = (i == unloaded_markets.length - 1);

loadData(unloaded_markets[i], selected_markets);
}
loading_counter = unloaded_markets.length;
} else if (selected_markets.length > 0) {
cccRedrawChart(selected_markets);
cccupdating = false;
}
}

function cccRedrawChart(selected_markets) {
var dataSets = [];
var fillAlphas = 0.4;
var maxPoints = 400;
for (var i = 0; i < selected_markets.length; i++) {
var newChartData = [];
var data = cccglobal_data[ccctsym][cccperiod][selected_markets[i].Name].data;
for (var k = 0; k < data.length ; k++) {
var point = data[k];
newChartData.push({'date': new Date(point.time), 'weighted': point.weighted,'close': point.close, 'high': point.high, 'low': point.low, 'open': point.open, 'volume': point.volumeto});
}
maxPoints = Math.max(maxPoints,newChartData.length);
if (cccchart_type == 'line') {
dataSets[i] = {
"title": ToSymbolsDisplay[ccctsym],
"color": selected_markets[i].Color,
"fieldMappings": [ {
"fromField": "weighted",
"toField": "weighted"
}, {
"fromField": "volume",
"toField": "volume"
} ],
"dataProvider": newChartData,
"categoryField": "date"
}

if (i > 0) {
dataSets[i].compared = true;
}
} else if (cccchart_type == 'candle' || cccchart_type == 'ohlc') {
dataSets[i] = {
"title": ToSymbolsDisplay[ccctsym],
"color": selected_markets[i].Color,
"fieldMappings": [ {
"fromField": "close",
"toField": "close"
},
{
"fromField": "open",
"toField": "open"
},
{
"fromField": "high",
"toField": "high"
},
{
"fromField": "low",
"toField": "low"
},
{
"fromField": "volume",
"toField": "volume"
} ],
"dataProvider": newChartData,
"categoryField": "date"
}
}
}

if (dataSets.length > 1) {
fillAlphas = 0;
}

var graphs;
if (cccchart_type == 'line') {
graphs = [{
"id": "g1",
"lineThickness": "2",
"fillAlphas": fillAlphas,
"valueField": "weighted",
"comparable": true,
"compareField": "weighted",
"compareGraphLineThickness": 2,
"balloonText": "[[title]] [[weighted]]",
"compareGraphBalloonText": "[[title]] [[weighted]]"
},
{
"id": "g2",
"lineThickness": "2",
"fillAlphas": 1,
"valueField": "weighted",
"hidden": "false",
"visibleInLegend": false
}];
} else if (cccchart_type == 'candle' || cccchart_type == 'ohlc') {
graphs = [{
"type": 'candlestick',
"id": "g1",
"openField": "open",
"closeField": "close",
"highField": "high",
"lowField": "low",
"valueField": "close",
"lineColor": "#5cb85c",
"fillColors": "#5cb85c",
"negativeLineColor": "#A11B0A",
"negativeFillColors": "#A11B0A",
"fillAlphas": 1,
"balloonText": "<b>Open:</b> [[open]] <br /> <b>High:</b> [[high]] <br /> <b>Low:</b> [[low]] <br /> <b>Close:</b> [[close]]",
"useDataSetColors": false,
"proCandlesticks": false
},
{
"id": "g2",
"lineThickness": "2",
"fillAlphas": 1,
"valueField": "close",
"hidden": "true",
"visibleInLegend": false
}
];

if (cccchart_type == 'ohlc') {
graphs[0].type = 'ohlc';
graphs[0].lineThickness = 2;
}
}
var currentChartObject = {
"type": "stock",
"pathToImages" : "https://pricewidgets.cointelegraph.com/images/",
"theme": "light",
"dataSets": dataSets,
"panels": [ {
"title": "Value",
"showCategoryAxis": true,
"recalculateToPercents": "never",
"percentHeight": 150,
"stockGraphs": graphs,
"stockLegend": {
"periodValueTextComparing": "[[value.close]]",
"periodValueTextRegular": "[[value.close]]"
}
}, {
"title": "Volume",
"percentHeight": 100,
"stockGraphs": [ {
"valueField": "volume",
"type": "column",
"showBalloon": true,
"balloonText": "[[date]]",
"legendValueText": "[[date]]",
"balloonFunction" : function(item) {
return `
<div style="text-align:left">
    <table><tr><td style="padding:10px;"><b>Date:</b></td><td>${AmCharts.formatDate(item.category, "DD-MM-YYYY JJ:NN")}</td></tr>
        <tr>
            <td style="padding:10px;">
                <b>Volume: &nbsp;&nbsp;</b>
            </td>
            <td>
                ${item.graph.title} ${AmCharts.formatNumber(item.values.value, {precision:-1, decimalSeparator:'.', thousandsSeparator:','})}
            </td>
        </tr>
    </table>
</div>`
},
"fillAlphas": 1
} ],
"stockLegend": {
"periodValueTextRegular": "[[value.close]]"
}
}
],

"chartScrollbarSettings": {
"enabled": true,
"graph": "g2",
"graphType": "line",
"updateOnReleaseOnly":true,
"oppositeAxis": false,
"backgroundColor": "#444",
"backgroundAlpha": 0.7,
"graphFillAlpha": 0.5,
"graphLineAlpha": 0.5,
"selectedBackgroundColor": "#ffffff",
"selectedBackgroundAlpha": 0.4,
"selectedGraphFillAlpha": 0,
"selectedGraphLineAlpha": 1,
"autoGridCount": true,
"gridAlpha": 0.15,
"height":30
},

"categoryAxesSettings": {
"minPeriod": cccminPeriod,
"maxSeries": maxPoints+50
},
/*"periodSelector": {
"dateFormat": "DD-MM-YYYY",
"inputFieldWidth": 150,
"fromText": "",
"toText": "",
"periodsText": "",
"position": "top",
"selectFromStart" : true,
//"listeners": [{"event":"changed", "method":periodChanged}]
},*/

"export": {
"enabled": true,
"drawing" : {
colors: colors,
shapes: []
},
// "menu": [],
 "libs": {  "path" : "https://pricewidgets.cointelegraph.com/amcharts/plugins/export/libs/" }
},

"chartCursorSettings": {
"valueBalloonsEnabled": true,
"fullWidth": true,
"cursorAlpha": 0.1,
"valueLineBalloonEnabled": true,
"valueLineEnabled": true,
"valueLineAlpha": 0.5
}
};
chartBTC = AmCharts.makeChart('cccChartDiv'+'BTC', currentChartObject );
// date-picker
//var dataProvider = chartBTC.dataSets[0].dataProvider;
//jQuery(".amcharts-start-date-input, .amcharts-end-date-input").datepicker({
//"dateFormat" : "dd-mm-yy",
//"minDate": dataProvider[0].date,
//"maxDate": dataProvider[dataProvider.length - 1].date,
//"onClose": function() {
//jQuery(".amChartsPeriodSelector .amChartsInputField").trigger('blur');
//}
//});
}
function periodChanged() {

}
function loadData (market, selected_markets) {
/*var url = 'https://localhost:8081/data/' + cccscale + '?aggregate=' + cccaggregate + '&e=' + market + '&fsym=' + cccfsym + '&limit=' + ccclimit + '&tsym=' + ccctsym;
if(cccforceAll==true){
url = 'https://localhost:8081/data/' + cccscale + '?aggregate=' + cccaggregate + '&e=' + market + '&fsym=' + cccfsym + '&allData=' + cccforceAll + '&tsym=' + ccctsym;
} */
var url = 'https://api.cointrend.club/data/' + cccscale + '?aggregate=' + cccaggregate + '&e=' + market + '&fsym=' + cccfsym + '&limit=' + ccclimit + '&tsym=' + ccctsym;

//  ByPeriod
if(loadChartByPeriod) {
url = 'https://api.cointrend.club/dataByPeriod/' + cccscale + '?aggregate=' + cccaggregate + '&e=' + market + '&fsym=' + cccfsym  +  '&tsym=' + ccctsym
+ '&from=' + loadChartByPeriod.from + '&to=' + loadChartByPeriod.to;
}



var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
var loader = document.getElementById('loaderccc');
// loader.style.display = 'block';

xhr.open('get', url, true);
xhr.onreadystatechange = function() {
var status;
var data;

if (xhr.readyState == 4) {
status = xhr.status;
if (status == 200) {
data = JSON.parse(xhr.responseText);
loading_counter--;

for (var i = 0; i < data.Data.length; i++) {
data.Data[i].time = data.Data[i].time * 1000;
}

cccglobal_data[ccctsym][cccperiod][market] = {data: data.Data, timeout: new Date()};

if (loading_counter == 0) {
cccupdating = false;
// loader.style.display = 'none';

cccRedrawChart(selected_markets);
}
} else {
// pass
}
}
};
xhr.send();
}
if(cccCurrentTheme.General.showExport){
function openLightBoxExport () {
document.body.appendChild(lightboxBg);
window.getComputedStyle(lightboxBg).opacity;
lightboxBg.classList.add("in");

document.body.appendChild(exportLightBoxContainer);
window.getComputedStyle(exportLightBox).transform;
exportLightBox.classList.add("fade");
}

function removeExportLightBoxContainer () {
document.body.removeChild(exportLightBoxContainer);
exportLightBox.removeEventListener("transitionend", removeExportLightBoxContainer);
}

function removeLightBoxBg () {
document.body.removeChild(lightboxBg);
lightboxBg.removeEventListener("transitionend", removeLightBoxBg);
}

function closeLightBoxExport () {
exportLightBox.classList.remove("fade");
lightboxBg.classList.remove("in");

exportLightBox.addEventListener("transitionend", removeExportLightBoxContainer);
lightboxBg.addEventListener("transitionend", removeLightBoxBg);
}

function exportFinal () {
if (typeof cccSendEmailAddressToServer !== 'undefined') {
var email = document.getElementById('ccc_export_email').value;
var patt = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

if (patt.test(email)) {
chartBTC.export.capture( {}, function() {
this.toPNG({multiplier: 2}, function(data) {
this.download( data, this.defaults.formats.PNG.mimeType, "cointelegraphChart.png" );
});
});
cccSendEmailAddressToServer(email);
} else {
alert('Incorrect email. Please try again!');
}
closeLightBoxExport();
}else{
chartBTC.export.capture( {}, function() {
this.toPNG({multiplier: 2}, function(data) {
this.download( data, this.defaults.formats.PNG.mimeType, "cointelegraphChart.png" );
});
});
}
}

/* Export Lighbox */

cccCreateCSSSelector('.exportLightBoxContainer', 'z-index: 999; max-height: 100%; position: fixed; top: 0; left: 0; bottom: 0; right: 0;');
cccCreateCSSSelector('.exportLightBox', 'min-height: 330px; background: #FFF url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAt4AAABfCAIAAABQhVdcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACdJJREFUeNrs3T1sG+cZwHEeROuTH9biDlVgaCybuqNVoM6QwV2azYCisVw4CcrCkRMXAlpsEF5vkYLagKYykwah9VJq6WAoTDqxgtlFhgSL5MWxKuF65Mk0Q4uv+fHe3fve/X+DECRKYFFff4nP88SwbTsGAACgBoM0AQAApAkAAABpAgAASBPc7O3LVz/+de8fv3L+8g9ra87Lte5LAIiUarV63mzWarWV2/VHf7oTSz4wEl/wsJAm8NHVuX3+N/vk6f7f/50vp5qWMfDPnUBJp1K/yWRSqdRvuy8zmQwPGwDdNbv98arR8UOt5uSIEyUDr7Ny52pr3Xr05c+xhXtG8ovYwu86mTJ7l0ePNIEn7PaL2Om3Tpc4dfLk+dLjZ0uj/7tuoHy2svLrlY7PVq7xqALQtEIEPgSKa/ausXAvlngQW7zHL1RIE8hwdW6f7tivn8YujjufsZaRK92uHt2S8t9eeV8qTrI47ZLuFozTMTzqAPzRzY/G97Vas9sfbpTI+fp252p7s7X2+cXg9y2nTnqZMpPmXUCaYAz2eSV2utt5+V6tHt8oLH/8JI50mffPByVTKQZZAEhR6/aHFxUisPb5/7bWrY8D5drs3U6gJP9oLPw+tnCP9xFpgiEujm2nSM523V+T9JiVxaKZCPaPttaXKU6yMMgCQFAh/6xWW90WcX81EuTXLnGguGbSnUBJPGCQljTBB/bZTmeapP1i4O83LaNoJvcO5tX8Y7uB0j97yyALEB3uFIg6FSLw8P67Qra9cudqpNdmkJY0ibSLY/v1U/t0J3Z1fsMPH/V4vpxyXmr3ZvUPsjB7C4SjQtw13f82Gq8aDfdXI9q9FY++/Hlr3Ro1UFwM0pImUfF+DTj29uWwV9k7mC+aSR+GS/zUP8jC7C2goP4FGa0rRHKg9L7zMUhLmoTQ25dOkbhrwILXKpoJs7IYnUdlYJAlxuwt4G+FTLCmq7tvvrb+8uefUktTfCNjkJY00dsv14AFGiczuVJaxydxPEoWjsgB0+tf041ghQzjdEn2q5+mDRQXg7SkiUY6C8BvvutMuY6gejTrdEnInsSR/9WEI3LAaBXi25ougTKIQVrSREVD1oAFxj3zigEckUPUDKzpUiFTBkoh2/pwRlYiBmlJk8B1fkHy5rv+a2mfJPfMKwZwRA7hqxCV13T1/gln4M69F987GaQlTfwjXAMWfcWpx3OldONkhofQZxyRg5oG1nSpkFAGyjUGaUkTT4ywBiywdzCfL/OMg0I4IocAKyR8a7pay6xeFrLtT5yRlYhBWtJEgtHWgIdR/MwrBn+K4ogcphDxNV2tjXTn3gsM0pImYxh5DVhA3zOvGPy5iiNyoEIIFK8xSEuaDNP5H9ycfjviGrDA/uGc0yVsCIf8CxlH5CKANd2omeaMrMzvvgzSkiYTrAELRO3MKz5OFo7I6cidAqFCoE6gXGOQNmpp0lkAdqJknDVggaZlbBSWeRIHH+OInIIVwpoudAoUF4O0YU6TSdeABTjziglwRM5r7hQIFYIJf6jw4oysRJEcpA1dmnTXgDvTJO0Xcv/DnHmFXByRm6xCWNNFFAPFFZlB2hClyXRrwAJNy8iXU/uHc3z2wgcckYv9ckGGCgGBcvP37/AO0uqfJu4a8NnuZNfSPokzr1DiK2Z4j8ixpgvV+HdGVqJwDdJqnCay1oAF9g7mi2aS4RKo+zVUqyNy/Wu6VAgIFK/oP0irYZpIXQMe+pMcZ16hs8CPyHEsBKEJlEK2/fD+O43fBg0HaXVKE7lrwKKvqiczuVKaDWGEjxdH5AbWdKkQhPATJ9gzshJpMkirQ5p4sAYswJlXRDNZRjkix7EQEChhCJReAag6SKt0mnTmSDxYAxbgzCvQ0x8oVAjQC5RCtpVZvQzbG6bSIK2SaeLZGrBA0zJypdvVo1t84gEAxFQ8IytR0IO0KqVJ91qaEyUerQELcOYVAECg3Mz3QVol0sSHNWABs7JYNBN8jgEAJguUQralxZU2CXwZpA00TS6O7TcV+/VTT9eABTjzCgCYnl5nZGU2hDeDtMGkiW9rwAK1etzpEjaEAQAEigTyBmn9TRN3DfhNJahfk/Rw5hUA4FGgbK1bTqNE+lGYbpDWpzTxfw1YIF9OceYVAOAdje/ce2HMQVqP0ySINWABzrwCAAiUII0wSOtNmgS3BizAmVcAQCCBsr3ZCtMZWYluHKSVnCbBrgELPHm+9PjZEh8EAIBAhO/OvXy9QVo5aXJ1bp/uBLgGLMCZVwAAgaKRadNEhTVggVo9vlFY5kkcAIBSgbK92Qz/GVm/0+Ti2HaK5GxXwV+T9HDmFQCgrKjcufchTZRaAx6maRlFM8mGMACAQAlvmrx9aZ/t2qc7iqwBC3DmFQCgl2++tqJ7RnbsNFFyDViAM68AAB1F/c79KGlyvQaszLW0URTNhFlZ5OMbAECghChNFF4DFuDMKwAgTIFSyLYie0b2Q5oovgYsUD2adbqEJ3EAAGES2Tv3hv3uP+qvAQtw5hUAQKCEKk2u/rWg6R+dM68AgIjIrF4Wsu2InJHVNU1q9XiulG6czPDxCgCIiIjcudcyTfYO5vPlFB+jAAAChTQJGGdeAQCIhfqMrE5pwplXAABCHyjapMn+4ZzTJWwIAwAQ7kDRI0048woAgECYzsiqniZNy9goLPMkDgAAEQkUpdOEM68AAEQtUNRNE7OyWDQTfIQBADABfc/IqpgmTcvIl1P7h3N8YAEAELVAUS5NOPMKAECUA0WtNNk7mC+aSYZLAACQTpczsqqkCWdeAQAgUFRJk8bJTK6UZkMYAADfAqWQbWVWL0mTG3DmFQCAQKh5RjbgNOHMKwAABIoSadK0jFzpdvXoFh8TAACoECiFbEuFK23BpEmtHt8oLPMkDgAA6lDkjGwAacKZVwAACBQl0oQzrwAAaBQoW+tWmNOkVo87XcKGMAAAugjkjKxPacKZVwAACBRV0iRfTnHmFQAA3QNle7PlwxlZb9OEM68AAISJD3fuPUwTzrwCAECgqJImT54vPX62xDsPAIAQB8r2ZlP6GVn5acKZVwAAokP6nXvJaVKrx3OldONkhncVAAAESsBpwplXAACizL3SNuUZWTlp0rSMoplkQxgAgIib/s69hDThzCsAAJAVKNOmCWdeAQDAsEApZFvjnpGdKk2KZsKsLPLQAwCAYca9cz9hmnDmFQAAeBEok6RJ9WjW6RKexAEAAGPJrF4Wsm3xGdmx04QzrwAAYBriO/djpEnTMvLl1P7hHI8pAADwKFBGTRPOvAIAAOke3n9XyLb7z8iOlCZ7B/P5coqHDwAAeKH/zv0n0oQzrwAAwM9A+b8AAwDuGxHxStQtYQAAAABJRU5ErkJggg==\') center bottom no-repeat; padding: 15px; transform: translate(0, 0); transition: transform 0.3s ease-out, opacity 0.15s linear; opacity: 0; width: 570px; position: relative; top: 0; left: 50%; margin-left: -300px; border: 6px solid #ffcd04;');
cccCreateCSSSelector('.exportLightBox.fade', 'transform: translate(0px, 100px); opacity: 1;');
cccCreateCSSSelector('.lightboxBg', 'z-index: 998; max-height: 100%; background: #000; position: fixed; top: 0; left: 0; bottom: 0; right: 0;');
cccCreateCSSSelector('@media (max-width: 767px)', '.exportLightBox { width: auto; margin-left: 10px; margin-right: 10px; left: 0;}');

cccCreateCSSSelector('.fade-bg', 'opacity: 0; transition: opacity 0.15s linear;');
cccCreateCSSSelector('.fade-bg.in', 'opacity: 0.3;');

var exportLightBoxContainer 	= document.createElement("div");
exportLightBoxContainer.className = 'exportLightBoxContainer';
exportLightBoxContainer.onclick = closeLightBoxExport;
var exportLightBox 	= document.createElement("div");
exportLightBox.className = 'exportLightBox';
exportLightBox.onclick = function(event) {
event.stopPropagation();
}

cccCreateCSSSelector('.exportBtnFinal', 'display: block; clear: both; font-size: 18px; height: 40px; color: rgb(255, 205, 4); line-height: 40px; background: #000; width: 120px; text-align: center; border-radius: 20px; float: right; margin-top: 20px;');
cccCreateCSSSelector('.exportBtnFinal:hover', 'cursor: pointer; color: #000; background: rgb(255, 205, 4);');
cccCreateCSSSelector('.exportHeader', 'overflow: auto;');
cccCreateCSSSelector('.exportHeader span', 'padding-bottom: 6px; color: #27282d; font-size: 16px; border-bottom: 2px solid #ffcd04; float: left;');
cccCreateCSSSelector('.exportHeader a.close-icon', 'float: right; font-size: 23px; font-weight: 600; color: #ccc; margin-top: -6px; ');
cccCreateCSSSelector('.exportHeader a.close-icon:hover', 'cursor: pointer; color: #666;');

cccCreateCSSSelector('.exportForm', 'overflow: hidden; padding: 60px 30px; padding-left: 90px; color: #555;');
cccCreateCSSSelector('@media (max-width: 767px)', '.exportForm { padding: 30px; }');
cccCreateCSSSelector('.exportForm label', 'outline: none; font-size: 16px; line-height: 36px; width: 100%; margin-right: 15px;');
cccCreateCSSSelector('.exportForm input', 'float: left; outline: none; padding: 6px 12px; width: 100%; font-size: 16px; color: #939496; border: 1px solid #cccccc; height: 36px; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); margin-bottom: 20px;');
cccCreateCSSSelector('.exportForm select', 'float: left; outline: none; width: 100%; font-size: 16px; color: #939496; 1px solid #cccccc; background: #fff; height: 36px; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);');

var cccBuildFormForExportEmailCaputure = '<div class="exportHeader"><span>History data export</span><a class="close-icon" onclick="closeLightBoxExport()">×</a></div><div class="exportForm">';
    if (typeof cccSendEmailAddressToServer !== 'undefined') {
    cccBuildFormForExportEmailCaputure += '<label for="ccc_export_email">Your Email:</label><input type="text" id="ccc_export_email" class="exportInput" />';
    };
    cccBuildFormForExportEmailCaputure += `<label for="export_format" style="clear:both;">Export as:</label>
    <select id="export_format">
        <option value="PNG">Download PNG image</option>
        <option value="JPG">Download JPEG image</option>
        <option value="SVG">Download SVG Vector image</option>
        <option value="PDF">Download PDF document</option>
        <option value="CSV">Download CSV chart data</option>
    </select>
    <a class="exportBtnFinal" onclick="exportFinal()">Export</a></div>`;

exportLightBox.innerHTML = cccBuildFormForExportEmailCaputure;
var lightboxBg 		= document.createElement("div");
lightboxBg.className = 'lightboxBg fade-bg';

//exportLightBoxContainer.appendChild(exportLightBox);
}

var embedable       = document.createElement("div");
var embedableInfo   = document.createElement("div");

/* Chart Type Tabs */

var chartTypeTabs	= document.createElement("div");
chartTypeTabs.innerHTML = '<div class="chartTypeTabLinks cTypeTabActive" onclick="cccChangeChartType(event, \'line\')">LINE</div><div class="chartTypeTabLinks" onclick="cccChangeChartType(event, \'candle\')">CANDLE</div><div class="chartTypeTabLinks" onclick="cccChangeChartType(event, \'ohlc\')">OHLC</div>';
chartTypeTabs.style.overflow = 'auto';

window.cccChangeChartType = function (event, type){
if (!cccupdating) {
cccchart_type = type;
var i, tablinks;

tablinks = document.getElementsByClassName('chartTypeTabLinks');
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(' cTypeTabActive', '');
}

event.currentTarget.className += ' cTypeTabActive';

if (cccchart_type == 'line') {
document.getElementById('marketsContainer' + ccctsym).style.display = 'flex';
document.getElementById('marketsContainerCandle' + ccctsym).style.display = 'none';
} else if (cccchart_type == 'candle' || cccchart_type == 'ohlc') {
document.getElementById('marketsContainer' + ccctsym).style.display = 'none';
document.getElementById('marketsContainerCandle' + ccctsym).style.display = 'flex';
}

cccUpdateChart();
}
};


cccCreateCSSSelector('.chartTypeTabLinks', 'font-size: 10px; width:120px; height:40px; text-align:center; padding-top:13px; color: black; background-color: #ECEFF1;  margin-right: 1px; font-weight: 600; cursor: pointer; float: left;');
cccCreateCSSSelector('@media (max-width: 767px)', '.chartTypeTabLinks {width:80px;}');

//cccCreateCSSSelector('.chartTypeTabLinks:hover', 'background:' + cccCurrentTheme.Tabs.activeBorderColor);
cccCreateCSSSelector('.cTypeTabActive', 'background-color: #FABF2C; box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);');

embedable.appendChild(chartTypeTabs);

/* Chart Container */

var containerCanvas = document.createElement("div");
containerCanvas.id = 'cccChartDiv'+'BTC';
containerCanvas.style.height = '500px';
containerCanvas.style.marginTop = '10px';

embedable.className					= "ccc-widget ccc-chart-v3";

embedableInfo.style.background		= cccCurrentTheme.General.background;
embedableInfo.style.textAlign		= "left";
embedableInfo.style.border			= cccCurrentTheme.General.borderWidth + ' solid ' + cccCurrentTheme.General.borderColor;
embedableInfo.style.padding 		= "15px";
embedableInfo.style.color			= cccCurrentTheme.General.textColor;
embedableInfo.style.position 		= 'relative';
embedableInfo.style.boxShadow       = cccCurrentTheme.General.boxShadow;
/* Tabs */

//cccCreateCSSSelector('.active', 'border-color: ' + cccCurrentTheme.Tabs.activeBorderColor + ' !important');
//cccCreateCSSSelector('.ccc-chart-v3 .tablinks', 'border: 2px solid ' + cccCurrentTheme.Tabs.borderColor + '; padding: 0 5px; margin: 5px 4px; cursor: pointer; font-size: 18px; font-weight: 600; display: block; float: left;');
//cccCreateCSSSelector('.ccc-chart-v3 .tablinks:hover', 'border-color: ' + cccCurrentTheme.Tabs.activeBorderColor);

var tabsContainer = document.createElement("div");
tabsContainer.style.overflow = 'auto';
tabsContainer.className = 'tabContainer';

// logo = document.createElement('div');
// logo.className = 'price-index-logo';
// logo.innerHTML	= '<img src="https://pricewidgets.cointelegraph.com/logo.svg" height="35" style="float:right" class="visible-sm"/><img src="https://pricewidgets.cointelegraph.com/logo.svg" height="40" class="visible-xs"/><img src="https://pricewidgets.cointelegraph.com/logo.svg" height="40" style="float:right" class="hidden-xs hidden-sm"/>';
// //logo.style.float = 'right';
// tabsContainer.appendChild(logo);

var ToSymbolsDisplay = [];
var tabElements = [];
var tabLinksCointainer = document.createElement("div");
tabLinksCointainer.className = 'tabLinksCointainer';
for(var curIndex=0; curIndex < Currencies.length; curIndex++) {
var currency = Currencies[curIndex];
ToSymbolsDisplay[currency] = CurrenciesSymbols[currency];
tabElements[currency] = document.createElement('a');

tabElements[currency].id = 'tabElem' + currency;
tabElements[currency].className = 'tablinks';

tabElements[currency].className 		= 'tablinks' + (curIndex == 0 ? ' active' : '');

tabElements[currency].innerHTML		= "<div class='tabLinksCointainer__title'>" + currency + "</div>";
tabElements[currency].onclick = function() {
var tabCurrency = currency;
return function(event){

if (!cccupdating) {
ccctsym = tabCurrency;

var i, tabcontent, tablinks;

tabcontent = document.getElementsByClassName('tabcontent');
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = 'none';
}

tablinks = document.getElementsByClassName('tablinks');
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(' active', '');
}

if (cccchart_type == 'line') {
document.getElementById('marketsContainer' + tabCurrency).style.display = 'flex';
} else if (cccchart_type == 'candle' || cccchart_type == 'ohlc') {
document.getElementById('marketsContainerCandle' + tabCurrency).style.display = 'flex';
}

event.currentTarget.className += ' active';

cccUpdateChart();

var summaryTab = document.getElementById('tabElem' + tabCurrency + 'Summary');
if (summaryTab) {
summaryTab.className += ' active';

document.getElementById(tabCurrency + 'Summary').style.display = 'block';
}
}
};
}();

tabLinksCointainer.appendChild(tabElements[currency]);
}
tabsContainer.appendChild(tabLinksCointainer);
embedableInfo.appendChild(tabsContainer);

/*cccCreateCSSSelector('.col-xs-4', 'float: left; width: 33.333333%;');
cccCreateCSSSelector('@media (min-width: 768px)', '.col-sm-6 { float: left; width: 25%; }');
cccCreateCSSSelector('@media (min-width: 1200px)', '.col-lg-4 { float: left; width: 16.66666667%; }');*/

cccCreateCSSSelector('.tabcontent', 'justify-content: flex-start; flex-wrap: wrap; ');

/* Markets Line */

cccCreateCSSSelector('.cccCustomRadioContainer input[type="checkbox"]', 'display: none;');
cccCreateCSSSelector('.cccCustomRadioContainer', 'padding-left: 19px; padding-right: 10px; padding-top: 2px; padding-bottom: 2px; line-height: 16px;');
cccCreateCSSSelector('.cccCustomRadioContainer label', 'position: relative;');
cccCreateCSSSelector('.cccCustomRadioContainer span.checkbox:hover', 'cursor: pointer; ');
cccCreateCSSSelector('.cccCustomRadioContainer span::before', 'content: \'\'; position: absolute; top: 0; bottom: 0; margin: auto;');
cccCreateCSSSelector('.cccCustomRadioContainer span::after', 'content: \'\'; position: absolute; top: 0; bottom: 0; margin: auto;');
cccCreateCSSSelector('.cccCustomRadioContainer span.checkbox::before', 'width: 15px; height: 15px; background-color: #fff; left: -19px; box-sizing: border-box; border: 1px solid #ccc; transition: border-color .2s;');
cccCreateCSSSelector('.cccCustomRadioContainer span.checkbox::after', 'opacity: 0; content: \'\'; position: absolute; width: 7px; height: 3px; background: transparent; top: -1; left: -16px; border: 2px solid #333; border-top: none; border-right: none; -ms-transform: rotate(-45deg); -webkit-transform: rotate(-45deg); transform: rotate(-45deg);');
cccCreateCSSSelector('.cccCustomRadioContainer input[type="checkbox"]:checked + label span.checkbox::after', 'opacity: 1;');

//cccCreateCSSSelector('@media (max-width: 767px)', '.cccCustomRadioContainer { padding-left: 38px; line-height: 32px; }');

//cccCreateCSSSelector('@media (max-width: 767px)', '.cccCustomRadioContainer span.checkbox::before { width: 30px; height: 30px; left: -38px;}');
//cccCreateCSSSelector('@media (max-width: 767px)', '.cccCustomRadioContainer span.checkbox::after { width: 9px; height: 5px; top: -1; left: -28px; }');




/* Markets Candles */

cccCreateCSSSelector('.cccCustomRadioContainer input[type="radio"]', 'display: none;');
cccCreateCSSSelector('.cccCustomRadioContainer', 'padding-left: 19px; padding-right: 10px; padding-top: 2px; padding-bottom: 2px; line-height: 16px;');
cccCreateCSSSelector('.cccCustomRadioContainer label', 'position: relative;');
cccCreateCSSSelector('.cccCustomRadioContainer span::before', 'content: \'\'; position: absolute; top: 0; bottom: 0; margin: auto; outline: none;');
cccCreateCSSSelector('.cccCustomRadioContainer span::after', 'content: \'\'; position: absolute; top: 0; bottom: 0; margin: auto; outline: none;');
cccCreateCSSSelector('.cccCustomRadioContainer span.radio::before', 'width: 15px; height: 15px; border-radius: 7px; background-color: #fff; left: -19px; box-sizing: border-box; border: 1px solid #ccc; transition: border-color .2s;');
cccCreateCSSSelector('.cccCustomRadioContainer span.radio::after', 'opacity: 0; content: \'\'; position: absolute; width: 9px; height: 9px; border-radius: 5px; background: #000; top: 1px; left: -16px;');
cccCreateCSSSelector('.cccCustomRadioContainer input[type="radio"]:checked + label span.radio::after', 'opacity: 1;');

//cccCreateCSSSelector('@media (max-width: 767px)', '.cccCustomRadioContainer {   }');
//cccCreateCSSSelector('@media (max-width: 767px)', '.cccCustomRadioContainer span.radio::before { width: 30px; height: 30px; border-radius: 15px; left: -38px; }');
//cccCreateCSSSelector('@media (max-width: 767px)', '.cccCustomRadioContainer span.radio::after { width: 20px; height: 20px; border-radius: 15px;  top: 0px; left: -33px; }');


var marketsContainers = {};
var marketsCandleContainers = {};
var exchangeIndex;
var exchange;
var marketElemExchange;
var marketElemCandleExchange;
var elementId;
var checked;
for( curIndex=0;curIndex < Currencies.length; curIndex++) {
currency = Currencies[curIndex];
marketsContainers[currency] = document.createElement("div");
marketsContainers[currency].id = 'marketsContainer' + currency;
marketsContainers[currency].className 		= 'tabcontent';

marketsContainers[currency].style.display = (curIndex === 0 ? 'flex':'none');

marketsContainers[currency].style.overflow = 'auto';
marketsContainers[currency].style.margin = '15px 4px';

for( exchangeIndex = 0; exchangeIndex < ExchangesByCurrency[currency].length; exchangeIndex++ ) {
exchange = ExchangesByCurrency[currency][exchangeIndex];
checked = (exchangeIndex === 0) ? 'checked' : '';
elementId = exchange + '_' + currency + '_checkbox';
marketElemExchange = document.createElement("div");
marketElemExchange.innerHTML = '<div class="cccCustomRadioContainer"><input type="checkbox" id="' + elementId+ '" value="' + exchange + '" onchange="cccUpdateChart()" '+checked+' onclick="validateCheckboxes(event, this)"><label for="'+elementId+'"><span class="checkbox">' + exchange + '</span></label></div>';
marketElemExchange.style.color = colors[exchangeIndex];

marketsContainers[currency].appendChild(marketElemExchange);
}
embedableInfo.appendChild(marketsContainers[currency]);



marketsCandleContainers[currency] = document.createElement("div");
marketsCandleContainers[currency].id = 'marketsContainerCandle' + currency;
marketsCandleContainers[currency].className 		= 'tabcontent';
marketsCandleContainers[currency].style.display = 'none';
marketsCandleContainers[currency].style.overflow = 'auto';
marketsCandleContainers[currency].style.margin = '15px 4px';


for( exchangeIndex = 0; exchangeIndex < ExchangesByCurrency[currency].length; exchangeIndex++ ) {
exchange = ExchangesByCurrency[currency][exchangeIndex];
if (exchange !== 'Index') {
checked = (exchangeIndex === 1) ? 'checked' : '';
elementId = exchange + '_' + currency + '_radio';
marketElemCandleExchange = document.createElement("div");
marketElemCandleExchange.innerHTML = '<div class="cccCustomRadioContainer"><input type="radio" id="' + elementId + '" name="'+currency+'_radio" value="'+exchange+'" '+checked+' onchange="cccUpdateChart()"><label for="'+elementId+'"><span class="radio">'+exchange+'</span></label></div>';
marketElemCandleExchange.style.color = colors[exchangeIndex];

marketsCandleContainers[currency].appendChild(marketElemCandleExchange);
}
}
embedableInfo.appendChild(marketsCandleContainers[currency]);



}


/* Tabs Periods*/

var optionsContainer = document.createElement("div");

cccCreateCSSSelector('.tabperiods', 'user-select:none; color:black; text-decoration:none;display: block; float: left; font-size: 12px; text-align: center; margin-right: 5px; line-height: 22px; width: 54px; height: 22px;');
cccCreateCSSSelector('.tabperiods:hover', 'text-decoration:none; color:black');
cccCreateCSSSelector('.tabperiods_active', 'text-decoration:underline; font-weight: 600;');
cccCreateCSSSelector('.tabsPeriodsContainer', 'float:left margin-top: 0px;');
cccCreateCSSSelector('@media (max-width: 767px)', '.tabperiods { font-size:11px; width:25px;}');
cccCreateCSSSelector('@media (max-width: 485px)', '.tabperiods { font-size:9px;width:12px}');


var tabsPeriodsContainer = document.createElement("div");
tabsPeriodsContainer.style.overflow = 'auto';
tabsPeriodsContainer.style.margin = '5px 4px;';
tabsPeriodsContainer.className = 'tabsPeriodsContainer';


tabPeriodElem1D = document.createElement('a');


tabPeriodElem1D.className = 'tabperiods';

tabPeriodElem1D.style.cursor	= 'pointer';
tabPeriodElem1D.innerHTML		= '1D';
tabPeriodElem1D.onclick = function(event){
jQuery(".chart-filter").removeClass('active')
if (!cccupdating) {
cccscale = 'histominute';
ccclimit = '96';
cccperiod = '1D';
cccaggregate = '15';
cccminPeriod = '15mm';
cccforceAll = false;
loadChartByPeriod = null;

var i, tablinks;

tablinks = document.getElementsByClassName('tabperiods');
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(' tabperiods_active', '');
}

event.currentTarget.className += ' tabperiods_active';

cccUpdateChart();
}
};

tabsPeriodsContainer.appendChild(tabPeriodElem1D);

tabPeriodElem1W = document.createElement('a');


tabPeriodElem1W.className = 'tabperiods tabperiods_active';

tabPeriodElem1W.style.cursor	= 'pointer';
tabPeriodElem1W.innerHTML		= '1W';
tabPeriodElem1W.onclick = function(event){
jQuery(".chart-filter").removeClass('active')
if (!cccupdating) {
cccscale = 'histohour';
ccclimit = '168';
cccperiod = '1W';
cccaggregate = '1';
cccminPeriod = 'hh';
cccforceAll = false;
loadChartByPeriod = null;

var i, tablinks;

tablinks = document.getElementsByClassName('tabperiods');
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(' tabperiods_active', '');
}

event.currentTarget.className += ' tabperiods_active';

cccUpdateChart();
}
};

tabsPeriodsContainer.appendChild(tabPeriodElem1W);

tabPeriodElem1M = document.createElement('a');


tabPeriodElem1M.className = 'tabperiods';

tabPeriodElem1M.style.cursor	= 'pointer';
tabPeriodElem1M.innerHTML		= '1M';
tabPeriodElem1M.onclick = function(event){
jQuery(".chart-filter").removeClass('active')
if (!cccupdating) {
cccscale = 'histohour';
ccclimit = '120';
cccperiod = '1M';
cccaggregate = '6';
cccminPeriod = '6hh';
cccforceAll = false;
loadChartByPeriod = null;

var i, tablinks;

tablinks = document.getElementsByClassName('tabperiods');
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(' tabperiods_active', '');
}

event.currentTarget.className += ' tabperiods_active';

cccUpdateChart();
}
};

tabsPeriodsContainer.appendChild(tabPeriodElem1M);

tabPeriodElem3M = document.createElement('a');


tabPeriodElem3M.className = 'tabperiods';

tabPeriodElem3M.style.cursor	= 'pointer';
tabPeriodElem3M.innerHTML		= '3M';
tabPeriodElem3M.onclick = function(event){
jQuery(".chart-filter").removeClass('active')
if (!cccupdating) {
cccscale = 'histoday';
ccclimit = '90';
cccperiod = '3M';
cccaggregate = '1';
cccminPeriod = 'DD';
cccforceAll = false;
loadChartByPeriod = null;

var i, tablinks;

tablinks = document.getElementsByClassName('tabperiods');
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(' tabperiods_active', '');
}

event.currentTarget.className += ' tabperiods_active';

cccUpdateChart();
}
};

tabsPeriodsContainer.appendChild(tabPeriodElem3M);

tabPeriodElem1Y = document.createElement('a');


tabPeriodElem1Y.className = 'tabperiods';

tabPeriodElem1Y.style.cursor	= 'pointer';
tabPeriodElem1Y.innerHTML		= '1Y';
tabPeriodElem1Y.onclick = function(event){
jQuery(".chart-filter").removeClass('active')
if (!cccupdating) {
cccscale = 'histoday';
ccclimit = '365';
cccperiod = '1Y';
cccaggregate = '1';
cccminPeriod = 'DD';
cccforceAll = false;
loadChartByPeriod = null;

var i, tablinks;

tablinks = document.getElementsByClassName('tabperiods');
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(' tabperiods_active', '');
}

event.currentTarget.className += ' tabperiods_active';

cccUpdateChart();
}
};

tabsPeriodsContainer.appendChild(tabPeriodElem1Y);

tabPeriodElemALL = document.createElement('a');


tabPeriodElemALL.className = 'tabperiods';

tabPeriodElemALL.style.cursor	= 'pointer';
tabPeriodElemALL.innerHTML		= 'ALL';
tabPeriodElemALL.onclick = function(event){
jQuery(".chart-filter").removeClass('active')
if (!cccupdating) {
cccscale = 'histoday';
ccclimit = '2000';
cccperiod = 'ALL';
cccaggregate = '1';
cccminPeriod = 'DD';
cccforceAll = true;
loadChartByPeriod = null;

var i, tablinks;

tablinks = document.getElementsByClassName('tabperiods');
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(' tabperiods_active', '');
}

event.currentTarget.className += ' tabperiods_active';

cccUpdateChart();
}
};

tabsPeriodsContainer.appendChild(tabPeriodElemALL);

// date range container
var dateRangeContainer = document.createElement("div");
dateRangeContainer.innerHTML = `
<style type="text/css">
    .ui-datepicker {
        width: 17em;
        padding: .2em .2em 0;
        display: none;
        background: white;
        font-weight:100;
        box-shadow: 0px 0px 10px #ddd;
    }
    .ui-datepicker .ui-datepicker-header {
        position: relative;
        padding: .2em 0;
        background: rgba(245, 166, 35, 0.1);
    }
    .ui-datepicker .ui-datepicker-prev,
    .ui-datepicker .ui-datepicker-next {
        position: absolute;
        top: 2px;
        width: 1.8em;
        height: 1.8em;
        cursor: pointer;
    }
    .ui-datepicker .ui-datepicker-prev-hover,
    .ui-datepicker .ui-datepicker-next-hover {
        opacity:0.7;
    }
    .ui-datepicker .ui-datepicker-prev {
        left: 2px;
    }
    .ui-datepicker .ui-datepicker-next {
        right:2px;
    }
    .ui-datepicker .ui-datepicker-prev-hover {

    }
    .ui-datepicker .ui-datepicker-next-hover {

    }
    .ui-datepicker .ui-datepicker-prev span,
    .ui-datepicker .ui-datepicker-next span {
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -8px;
        top: 50%;
        margin-top: -7px;
    }
    .ui-datepicker .ui-datepicker-prev span {
        background-position: -95px 0px;
    }
    .ui-datepicker .ui-datepicker-next span {
        background-position: -30px 0px;
    }


    .ui-datepicker .ui-datepicker-title {
        margin: 0 2.3em;
        line-height: 1.8em;
        text-align: center;

    }
    .ui-datepicker .ui-datepicker-title select {
        font-size: 1em;
        margin: 1px 0;
    }
    .ui-datepicker select.ui-datepicker-month,
    .ui-datepicker select.ui-datepicker-year {
        width: 45%;
    }
    .ui-datepicker table {
        width: 100%;
        font-size: .9em;
        border-collapse: collapse;
        margin: 0 0 .4em;
    }
    .ui-datepicker th {
        padding: .7em .3em;
        text-align: center;
        font-weight: bold;
        border: 0;
    }
    .ui-datepicker td {
        border: 0;
        padding: 1px;
    }
    .ui-datepicker td span,
    .ui-datepicker td a {
        display: block;
        padding: .2em;
        text-align: center;
        text-decoration: none;
        color:#253137;
    }
    .ui-datepicker .ui-datepicker-buttonpane {
        background-image: none;
        margin: .7em 0 0 0;
        padding: 0 .2em;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
    }
    .ui-datepicker .ui-datepicker-buttonpane button {
        float: right;
        margin: .5em .2em .4em;
        cursor: pointer;
        padding: .2em .6em .3em .6em;
        width: auto;
        overflow: visible;
    }
    .ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {
        float: left;
    }

    /* with multiple calendars */
    .ui-datepicker.ui-datepicker-multi {
        width: auto;
    }
    .ui-datepicker-multi .ui-datepicker-group {
        float: left;
    }
    .ui-datepicker-multi .ui-datepicker-group table {
        width: 95%;
        margin: 0 auto .4em;
    }
    .ui-datepicker-multi-2 .ui-datepicker-group {
        width: 50%;
    }
    .ui-datepicker-multi-3 .ui-datepicker-group {
        width: 33.3%;
    }
    .ui-datepicker-multi-4 .ui-datepicker-group {
        width: 25%;
    }
    .ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,
    .ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {
        border-left-width: 0;
    }
    .ui-datepicker-multi .ui-datepicker-buttonpane {
        clear: left;
    }
    .ui-datepicker-row-break {
        clear: both;
        width: 100%;
        font-size: 0;
    }

    /* RTL support */
    .ui-datepicker-rtl {
        direction: rtl;
    }
    .ui-datepicker-rtl .ui-datepicker-prev {
        right: 2px;
        left: auto;
    }
    .ui-datepicker-rtl .ui-datepicker-next {
        left: 2px;
        right: auto;
    }
    .ui-datepicker-rtl .ui-datepicker-prev:hover {
        right: 1px;
        left: auto;
    }
    .ui-datepicker-rtl .ui-datepicker-next:hover {
        left: 1px;
        right: auto;
    }
    .ui-datepicker-rtl .ui-datepicker-buttonpane {
        clear: right;
    }
    .ui-datepicker-rtl .ui-datepicker-buttonpane button {
        float: left;
    }
    .ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,
    .ui-datepicker-rtl .ui-datepicker-group {
        float: right;
    }
    .ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,
    .ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {
        border-right-width: 0;
        border-left-width: 1px;
    }

    /* Icons */
    .ui-datepicker .ui-icon {
        display: block;
        text-indent: -99999px;
        overflow: hidden;
        background-repeat: no-repeat;
        left: .5em;
        top: .3em;
        background: url(https://pricewidgets.cointelegraph.com/images/calendar/ui-icons.png);
        width: 16px;
        height: 16px;
    }
    .ui-datepicker .ui-state-active {
        background: #fabf2c;
    }
    .ui-datepicker .ui-state-disabled {
        opacity:0.5;
    }

</style>


<style>

    /**
     * Drawing mode
     */
    .amcharts-export-canvas {
        position: absolute;
        display: none;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
    }
    .amcharts-export-canvas.active {
        display: block;
    }

    /**
     * Menu; Rest state
     */
    .amcharts-export-menu {
        position: absolute;
        z-index: 2;
        opacity: 0.5;
        color: #000;

    }
    .amcharts-main-div:hover .amcharts-export-menu, .amcharts-stock-div:hover .amcharts-export-menu, .amcharts-export-menu.active {
        opacity: 1;
    }

    .amcharts-export-menu-top-left > ul > li > ul:after {
        content: "";
        position: absolute;
        top: 13px;
        right: 100%;
        z-index: 1000;
        border-top: 7px solid transparent;
        border-left: 7px solid transparent;
        border-right: 7px solid #fff;
        border-bottom: 7px solid transparent;
    }
    .amcharts-export-menu-top-left > ul > li > ul > li:first-child > a:after {
        content: "";
        position: absolute;
        top: 12px;
        right: 100%;
        z-index: 1001;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid #e2e2e2;
        border-bottom: 8px solid transparent;
    }
    .amcharts-export-menu-top-right > ul > li > ul:after {
        content: "";
        position: absolute;
        top: 13px;
        left: 100%;
        z-index: 1000;
        border-top: 7px solid transparent;
        border-left: 7px solid #fff;
        border-right: 7px solid transparent;
        border-bottom: 7px solid transparent;
    }
    .amcharts-export-menu-top-right > ul > li > ul > li:first-child > a:after {
        content: "";
        position: absolute;
        top: 12px;
        left: 100%;
        z-index: 1001;
        border-top: 8px solid transparent;
        border-left: 8px solid #e2e2e2;
        border-right: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }
    .amcharts-export-menu-bottom-left > ul > li > ul:after {
        content: "";
        position: absolute;
        bottom: 13px;
        right: 100%;
        z-index: 1000;
        border-top: 7px solid transparent;
        border-left: 7px solid transparent;
        border-right: 7px solid #fff;
        border-bottom: 7px solid transparent;
    }
    .amcharts-export-menu-bottom-left > ul > li > ul > li:last-child > a:after {
        content: "";
        position: absolute;
        bottom: 12px;
        right: 100%;
        z-index: 1001;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid #e2e2e2;
        border-bottom: 8px solid transparent;
    }
    .amcharts-export-menu-bottom-right > ul > li > ul:after {
        content: "";
        position: absolute;
        bottom: 13px;
        left: 100%;
        z-index: 1000;
        border-top: 7px solid transparent;
        border-left: 7px solid #fff;
        border-right: 7px solid transparent;
        border-bottom: 7px solid transparent;
    }
    .amcharts-export-menu-bottom-right > ul > li > ul > li:last-child > a:after {
        content: "";
        position: absolute;
        bottom: 12px;
        left: 100%;
        z-index: 1001;
        border-top: 8px solid transparent;
        border-left: 8px solid #e2e2e2;
        border-right: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }
    .amcharts-export-menu ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .amcharts-export-menu li {
        position: relative;
        display: block;
        z-index: 1;
        margin-left: 0 !important;
    }
    .amcharts-export-menu li > ul {
        position: absolute;
        display: none;
        border: 1px solid #e2e2e2;
        margin-top: -1px;
        background: #fff;
    }
    .amcharts-export-menu li > a {
        position: relative;
        display: block;
        color: #000;
        text-decoration: none;
        padding: 12px 12px;
        z-index: 2;
        white-space: nowrap;
        border-bottom: 1px solid #f2f2f2;
    }
    .amcharts-export-menu li:last-child > a {
        border-bottom: none;
    }
    .amcharts-export-menu li > a > img {
        border: none;
    }
    .amcharts-export-menu-top-left {
        top: 0;
        left: 0;
    }
    .amcharts-export-menu-bottom-left {
        bottom: 0;
        left: 0;
    }
    .amcharts-export-menu-top-right {
        top: -86px;
        right: 0;
    }
    .amcharts-export-menu-bottom-right {
        bottom: 0;
        right: 0;
    }

    /**
     * Menu; Hover state
     */
    .amcharts-export-menu li:hover > ul,
    .amcharts-export-menu li.active > ul {
        display: block;
    }
    .amcharts-export-menu li:hover > a,
    .amcharts-export-menu li.active > a {
        color: #fff;
        background-color: #636363;
    }
    .amcharts-export-menu-top-left li:hover > ul,
    .amcharts-export-menu-top-left li.active > ul {
        left: 100%;
        top: 0;
    }
    .amcharts-export-menu-bottom-left li:hover > ul,
    .amcharts-export-menu-bottom-left li.active > ul {
        left: 100%;
        bottom: 0;
    }
    .amcharts-export-menu-top-right li:hover > ul,
    .amcharts-export-menu-top-right li.active > ul {
        top: 0;
        right: 100%;
    }
    .amcharts-export-menu-bottom-right li:hover > ul,
    .amcharts-export-menu-bottom-right li.active > ul {
        bottom: 0;
        right: 100%;
    }

    /**
     * Menu; custom class
     */
    .amcharts-export-menu .export-main > a, .amcharts-export-menu .export-drawing > a, .amcharts-export-menu .export-delayed-capturing > a {
        display: block;
        overflow: hidden;
        text-indent: -13333337px;
        width: 36px;
        height: 36px;
        padding: 0;
        background-repeat: no-repeat;
        background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2211px%22%20height%3D%2214px%22%3E%3Cpath%20d%3D%22M3%2C0%20L8%2C0%20L8%2C5%20L11%2C5%20L5.5%2C10%20L0%2C5%20L3%2C5%20L03%2C0%22%20fill%3D%22%23888%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20fill%3D%22%23888%22%20width%3D%2211%22%20height%3D%222%22%2F%3E%3C%2Fsvg%3E');
        background-color: #fff;
        background-position: center;
        -webkit-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
        box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.5);
        border-radius: 18px;
        margin: 8px 8px 0 10px;
    }
    .amcharts-export-menu .export-drawing > a {
        background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20width%3D%2216px%22%20height%3D%2217px%22%3E%3Crect%20x%3D%220%22%20y%3D%2216%22%20fill%3D%22%23888%22%20width%3D%2214%22%20height%3D%221%22%2F%3E%3Cpath%20transform%3D%22translate(-12%2C-10)%22%20fill%3D%22%23888%22%20d%3D%22M17.098%2C20.305c-0.142%2C0.146%2C0.101%2C0.04%2C0.137%2C0.004c0.027-0.028%2C0.204-0.09%2C0.484-0.09c0.338%2C0%2C0.626%2C0.092%2C0.787%2C0.255%20c0.473%2C0.472%2C0.424%2C0.932%2C0.393%2C1.078l-2.521%2C1.055l-1.577-1.577l1.054-2.52c0.039-0.009%2C0.105-0.018%2C0.188-0.018%20c0.219%2C0%2C0.555%2C0.069%2C0.893%2C0.407c0.378%2C0.378%2C0.246%2C1.188%2C0.166%2C1.271C17.062%2C20.207%2C17.062%2C20.269%2C17.098%2C20.305z%20M26.984%2C14.472c-0.008-0.674-0.61-1.257-1.31-1.933c-0.134-0.129-0.679-0.673-0.809-0.808c-0.679-0.702-1.266-1.31-1.943-1.31%20c-0.37%2C0-0.734%2C0.207-1.114%2C0.587l-6.852%2C6.847c-0.012%2C0.016-2.877%2C7.354-2.877%2C7.354c-0.012%2C0.032%2C0%2C0.063%2C0.022%2C0.091%20c0.021%2C0.021%2C0.044%2C0.029%2C0.067%2C0.029c0.01%2C0%2C0.018-0.003%2C0.028-0.007c0%2C0%2C7.357-2.864%2C7.369-2.877l6.854-6.847%20C26.803%2C15.216%2C26.988%2C14.848%2C26.984%2C14.472z%22%2F%3E%3C%2Fsvg%3E');
    }
    .amcharts-export-menu .export-main:hover, .amcharts-export-menu .export-drawing:hover,
    .amcharts-export-menu .export-main.active, .amcharts-export-menu .export-drawing.active {
        padding-bottom: 100px;
    }
    .amcharts-export-menu.amcharts-export-menu-bottom-left .export-main:hover, .amcharts-export-menu.amcharts-export-menu-bottom-left .export-drawing:hover, .amcharts-export-menu.amcharts-export-menu-bottom-right .export-main:hover, .amcharts-export-menu.amcharts-export-menu-bottom-right .export-drawing:hover,
    .amcharts-export-menu.amcharts-export-menu-bottom-left .export-main.active, .amcharts-export-menu.amcharts-export-menu-bottom-left .export-drawing.active, .amcharts-export-menu.amcharts-export-menu-bottom-right .export-main.active, .amcharts-export-menu.amcharts-export-menu-bottom-right .export-drawing.active {
        padding-bottom: 0;
        padding-top: 100px;
    }
    .amcharts-export-menu .export-main:hover > a,
    .amcharts-export-menu .export-main.active > a {
        background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2211px%22%20height%3D%2214px%22%3E%3Cpath%20d%3D%22M3%2C0%20L8%2C0%20L8%2C5%20L11%2C5%20L5.5%2C10%20L0%2C5%20L3%2C5%20L03%2C0%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20fill%3D%22%23fff%22%20width%3D%2211%22%20height%3D%222%22%2F%3E%3C%2Fsvg%3E');
    }
    .amcharts-export-menu .export-drawing:hover > a,
    .amcharts-export-menu .export-drawing.active > a {
        background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20width%3D%2216px%22%20height%3D%2217px%22%3E%3Crect%20x%3D%220%22%20y%3D%2216%22%20fill%3D%22%23FFF%22%20width%3D%2214%22%20height%3D%221%22%2F%3E%3Cpath%20transform%3D%22translate(-12%2C-10)%22%20fill%3D%22%23FFF%22%20d%3D%22M17.098%2C20.305c-0.142%2C0.146%2C0.101%2C0.04%2C0.137%2C0.004c0.027-0.028%2C0.204-0.09%2C0.484-0.09c0.338%2C0%2C0.626%2C0.092%2C0.787%2C0.255%20c0.473%2C0.472%2C0.424%2C0.932%2C0.393%2C1.078l-2.521%2C1.055l-1.577-1.577l1.054-2.52c0.039-0.009%2C0.105-0.018%2C0.188-0.018%20c0.219%2C0%2C0.555%2C0.069%2C0.893%2C0.407c0.378%2C0.378%2C0.246%2C1.188%2C0.166%2C1.271C17.062%2C20.207%2C17.062%2C20.269%2C17.098%2C20.305z%20M26.984%2C14.472c-0.008-0.674-0.61-1.257-1.31-1.933c-0.134-0.129-0.679-0.673-0.809-0.808c-0.679-0.702-1.266-1.31-1.943-1.31%20c-0.37%2C0-0.734%2C0.207-1.114%2C0.587l-6.852%2C6.847c-0.012%2C0.016-2.877%2C7.354-2.877%2C7.354c-0.012%2C0.032%2C0%2C0.063%2C0.022%2C0.091%20c0.021%2C0.021%2C0.044%2C0.029%2C0.067%2C0.029c0.01%2C0%2C0.018-0.003%2C0.028-0.007c0%2C0%2C7.357-2.864%2C7.369-2.877l6.854-6.847%20C26.803%2C15.216%2C26.988%2C14.848%2C26.984%2C14.472z%22%2F%3E%3C%2Fsvg%3E');
    }
    .amcharts-export-menu .export-close > a,
    .amcharts-export-menu .export-close:hover > a,
    .amcharts-export-menu .export-close.active > a {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAACXBIWXMAAAsTAAALEwEAmpwYAABBsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo4M2Q5NDllYS1lMjE3LTQ3Y2QtYTU1Ni04MTQ3NmRjNWEwYWQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZhMTQ5MTc1LTNiODItMTE3OC05ZjZmLWY0MWMwNTYyYzQxYTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpkZGFhNTJkMi1mZDRiLTRkMmMtODEzOC01ZTEzNmQ4NGFjMDE8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6MDdhZmI1Y2UtYzQ1OS00YzQxLWJkMjItMTllMDJlMGE5YzVjPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjA3YWZiNWNlLWM0NTktNGM0MS1iZDIyLTE5ZTAyZTBhOWM1Yzwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjgzZDk0OWVhLWUyMTctNDdjZC1hNTU2LTgxNDc2ZGM1YTBhZDwvc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YmY3ZmRlNGYtZDk2MS00Njk4LWI0ZjAtMDJlYjEwOWE4OTA4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTA1LTE1VDEzOjE3OjQ5KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAyMSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+ZGVyaXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5jb252ZXJ0ZWQgZnJvbSBpbWFnZS9wbmcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcDwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MDdhZmI1Y2UtYzQ1OS00YzQxLWJkMjItMTllMDJlMGE5YzVjPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTA1LTE1VDEzOjE3OjQ5KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAyMSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmRkYWE1MmQyLWZkNGItNGQyYy04MTM4LTVlMTM2ZDg0YWMwMTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0wNS0xNVQxMzoyMToyMSswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMjEgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNS0wNS0xNVQxMzoxMzoxNyswMjowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE1LTA1LTE1VDEzOjIxOjIxKzAyOjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNS0wNS0xNVQxMzoyMToyMSswMjowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJOYW1lPlg8L3Bob3Rvc2hvcDpMYXllck5hbWU+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJUZXh0Plg8L3Bob3Rvc2hvcDpMYXllclRleHQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOlRleHRMYXllcnM+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+HyMp+AAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAA3UlEQVR42rSSXZECQQyEPygMrIVFAidhkQASQEIjYVsCSOAksBJAAlhAwvKSWcJBUQVVl6fM5Ke7k4z6vudTG/OFTQAktcAs/ja2TyVBUgVsgQq42F5PItYBCn8PTFNjAYvw5wM92x3gCNSSFCh1araLvAdNBi53VgMtgCuweRqE7RyogAPQxHsdcQBGf0cuaZ80APzaXn468urtniQ1CaXoayStct5AL4QfgToKfoBzIF2BadGVkVZRkIU7UdQDkqRZoDwJl3ROzea2u4LUvtpHOavkty9H/m9XfhsA0l9VuzQDWrIAAAAASUVORK5CYII=);
    }

    /**
     * Menu; Color picker
     */

    .amcharts-export-menu .export-drawing-color {
        background: #000;
        width: 35px;
    }
    .amcharts-export-menu .export-drawing-color > a {
        display: block;
        overflow: hidden;
        text-indent: -13333337px;
    }
    .amcharts-export-menu .export-drawing-color-red {
        background: #f00;
    }
    .amcharts-export-menu .export-drawing-color-green {
        background: #0f0;
    }
    .amcharts-export-menu .export-drawing-color-blue {
        background: #00f;
    }
    .amcharts-export-menu .export-drawing-color-white {
        background: #fff;
    }

    /*
    ** Fallback
    */
    .amcharts-export-fallback {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
    }
    .amcharts-export-fallback textarea {
        border: none;
        outline: none;
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
        padding: 20px;
    }
    .amcharts-export-fallback-message {
        position: absolute;
        z-index: 1;
        padding: 20px;
        width: 100%;
        background-color: #fff;
    }

    /*
    ** DELAYED CAPTURING
    */
    .amcharts-export-menu .export-delayed-capturing > a {
        text-indent: 0px;
        line-height: 36px;
        vertical-align: middle;
        text-align: center;
        background-image: none;
    }

    /*
    ** TRANSITION; OPACITY
    */
    .amcharts-export-menu,
    .amcharts-export-canvas .canvas-container {
        -webkit-transition: opacity 0.5s ease-out;
        -moz-transition: opacity 0.5s ease-out;
        -ms-transition: opacity 0.5s ease-out;
        -o-transition: opacity 0.5s ease-out;
        transition: opacity 0.5s ease-out;
    }
    .amcharts-export-canvas.dropbox .canvas-container {
        opacity: 0.5;
    }


    /*
    ** SHAPE
    */
    .amcharts-export-menu .export-drawing-shape a {
        font: 0/0 a;
        text-shadow: none;
        color: transparent;
    }
    .amcharts-export-menu li img {
        height: 20px;
    }


    /*
    ** BRUSH
    */
    .amcharts-export-menu .export-drawing-width a {
        text-align: center;
    }
    .amcharts-export-menu .export-drawing-width span {
        display: block;
        margin: 0 auto;
    }
    .amcharts-export-menu .export-drawing-width span > span {
        display: block;
        background: #000;
        border-radius: 100%;
    }
    .amcharts-export-menu .export-drawing-shape a:hover img,
    .amcharts-export-menu .export-drawing-shape.active a img {
        -webkit-filter: invert(100%);
        filter: invert(100%);
    }

    .dateRangeChart {
        cursor:pointer;
        float:left;
        user-select: none;
        margin-right:11px;
        height:60px;
        margin-left:4px;

    }
    .dateRangeChart__title:hover, .dateRange__icon:hover {
        opacity: 0.6;
    }
    .dateRangeChart__icon {
        width:16px;
        height:16px;
        background: url(https://pricewidgets.cointelegraph.com/images/calendar/small-calendar@2x.svg);

        display: inline-block;
        vertical-align: -2px;
    }
    .dateRangeChart__title {
        display: inline-block;
        margin-left:2px;
        color:#010101;
        font-weight:100;
    }
    .chart-filter {
        display: none;
        font-weight:100;

        outline: none;
        position: absolute;
        margin-top: 32px;
        margin-left:4px;
    }
    .chart-filter__title {
        opacity: 0.8;
    }
    .chart-filter input {
        outline: none;
        width:100px;
    }
    .chart-filter__inputContainer {
        display: inline-block;
    }
    .chart-filter.active {
        display: block;
    }
</style>
<div class="dateRangeChart">
    <div class="dateRangeChart__icon"></div>
    <div class="dateRangeChart__title">Date Range</div>
</div>
<div class="chart-filter">
    <div class="chart-filter__inputContainer"><span class="chart-filter__title">From</span> <input type="text" class="chart-filter__from"/>&nbsp;&nbsp;</div>
    <div class="chart-filter__inputContainer"><span class="chart-filter__title">To</span> <input type="text" class="chart-filter__to"/></div>
</div>
`;

optionsContainer.appendChild(dateRangeContainer);





optionsContainer.appendChild(tabsPeriodsContainer);

var separatorDivToGiveDivSize = document.createElement("div");
separatorDivToGiveDivSize.style.height="0px";
separatorDivToGiveDivSize.style.clear="both";

if(cccCurrentTheme.General.showExport){
/* Export Top */

var exportBtnTop = document.createElement("div");
exportBtnTop.className = 'exportBtnTop';
exportBtnTop.innerText = 'Export';
exportBtnTop.onclick = openLightBoxExport;
cccCreateCSSSelector('.exportBtnTop', 'display: block; float: right; font-size: 18px; height: 40px; line-height: 40px; background: rgb(255, 205, 4); width: 120px; text-align: center; border-radius: 20px;');
cccCreateCSSSelector('.exportBtnTop:hover', 'cursor: pointer; color: rgb(255, 205, 4); background: #000');
cccCreateCSSSelector('@media (max-width: 767px)', '.exportBtnTop { display: none; }');

//optionsContainer.appendChild(exportBtnTop);
optionsContainer.appendChild(separatorDivToGiveDivSize);

/* Main append */

embedableInfo.appendChild(optionsContainer);

embedableInfo.appendChild(containerCanvas);

/* Export Bottom */

var exportBtnBottom = document.createElement("div");
exportBtnBottom.className = 'exportBtnBottom';
exportBtnBottom.innerText = 'Export';
exportBtnBottom.onclick = openLightBoxExport;

cccCreateCSSSelector('.exportBtnBottom', 'margin: 15px auto; margin-bottom: 0px; display: none; font-size: 18px; height: 40px; line-height: 40px; background: rgb(255, 205, 4); width: 120px; text-align: center; border-radius: 20px;');
cccCreateCSSSelector('.exportBtnBottom:hover', 'cursor: pointer; color: rgb(255, 205, 4); background: #000');
//cccCreateCSSSelector('@media (max-width: 767px)', '.exportBtnBottom { display: block; }');

embedableInfo.appendChild(exportBtnBottom);
}else{
optionsContainer.appendChild(separatorDivToGiveDivSize);
embedableInfo.appendChild(optionsContainer);
embedableInfo.appendChild(containerCanvas);
}
/* Loading */

cccCreateCSSSelector('.loader-ccc', 'display: none; position: absolute; width: 120px; height: 120px; top: 50%; left: 50%; margin-left: -60px; margin-top: -60px;');
cccCreateCSSSelector('.loader-ccc-logo', 'position: absolute; background: #FFF url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAABmJLR0QA/wD/AP+gvaeTAAAI1klEQVRo3t1aCWwUVRh+FVQQFfACEVHa6VZZ2c7OuDOzBWKNUeRSFAkqigqeJOABXuCBIoqCGlFEIGiwiojKEU2l3QU0HiiHgiJG8EYkIigC5SjQ9fvfvOlut9PdN9ttaZjkz+wc++Z97//ffzOW5eMcwzjZpxlX5AfN8UrQnJuvGV/lq+ZPuN7mC5r/0Flcr+bP8Z5PNfr7/eGTWFM8fIXhM5SgdT8HEjQPgWIZEP1vdb5q3FsQ7NbhsIPKU8NFmNAi0MGESe4FRfI1ayzoStC5nbp2b5tMdJ8/D1oPgaL5QWNfwhgHFc1cALIaH1Tg/PN8mrk0YTKVELmFJI4dw+GWmYzZQdePwzgDxGJVxse2ohDfLg0O6uzi4hb5qvV0wsf/Bj3e+TyzXVa/Ewq1VzRrAsbe7iweAD6pKL2ObRBgil6Ux/eEEBsohef9/uLjG3IxFdM8EXv5RWcfA+DKgoDRObsfKTQvweA7BLCNUCBGY24DJWiE8d2fxff/9QVDF2VHE6rGDY4Y4vfbtJqHQ3mdraptMIf3BMD9UDbX1XPFzKEYqEoMOB63cg6zgs6B4npKzKdKUa3BmXKsf1zFWyObkl0F1+5yOOhZREn14o8VfBNDazVJxyFoTKzeg6FQrry90axvnT3WBESxThFN2IOryUzJaKZnhdr9oaCg2wmsCR+5ut6atDcHCPub8uUCzQzgxQO01/I0U/fwnaPyCs0L6QMQl8+wML+SkwzagrHW4rqUfE+fHj6nAfxaQ9jBypSeDF5YxsVRM6fKDFxcXNxcUc3hBIYMrKIaj8K4X0x7gBPA+HSzO6lt0AyM/QuU0wolGL4gywpmBueeZpa5r4Bm9BDyu4Mc23QDdg4WnYV3v6YBlcKQX2oWAwc2wyJcbxtk602pfSLDPV0/BYu601aALs42iU6CPUsn653w3mYKT9K9G5vHjolFWW4iLZ7SplAv0j+wemgl+0pZXvJzKYrVVHTV2lO13nfjAsntHlqFdBPGe8sRu90ns6qYSN9YhFXi/E9WKMJ2xsrZptrM6XGqCLcOKQGzYyLXHrFVv1mSVr5Vq5g0KSkRSXATQC9la38B2M0AOLuORZ8jTNiYxJtr6GaeFr40PTgoDc18RnoyERYFuMFZAxdlJRjzJldwmtHXsXu2SCIWE/7jLl3Xj04rkqo5HRx+UGoi49hRXIywR7LIuU2xMuYa9vj9/mOEZ1XFtxdE7CqBNiKrdimxI7nKXQBuS9aALWYKxvwlpeYUGQLKCjDHy/Zp1jgPNqUyVzXzJVb5RoD7HCutu9Iy1sYTuAgbCno9jbJ73NaaxhM02QXcPqjGQA/gvgP3vklnDzGR0VjpVa4UYVXEWRduD06hKfcSwNQOtXm1kMR3Cek6G2lIlQYH+yZ8UM9ROe3ry/v4h2OSfyXbKrEgK0lhxD5gbWvRMtYR1Dxl8gpuowC3lgn/L0ZJGXlw5qu2fFuD8N8/KPMFwH3IA0mTD7mDzMiAy/xLAeBtF671wP3fEwFwUOXsfjxbgmetZXKoAtxm4txuuggEAq08iOVuJ+NFqTzyL4U5IU31JYVKpFXB3ZkkHiKEqiDvAfFhv0NR9homO9wF3DwAeID/Xsr8+D2da1sS4XImFZRSJGNLormTOdF2qlV3AbeZtBKp3mQvQUQHN5Lo4gOjKVVB/l7i4mGyP4K6JimfDsJsDALNx+8duPcKzp+AZsmKPTnzgnMHCNwuupBN03FwcL2II5j4pzVcHRmNt4Sd5bbfuCcTYTGc1+A8BKLZAucrQRuhWVvJjk/iL8D9R+D+pItzdf10WXA8JAKnyZhT4tSnWs9Rejxt5Kxb5phbc18mztQAtoodjXszAaSnA1rstU2y4lg9Pyy2APdHZtoSlRqH01S0EB75JtD3oLfIdlJwyosjtt15lz5GDveiiaeUAsQICZu2APSc51R/orZ08hBkHzyAozT6nKT8So6iWxqUyDACRIA5aBRESKs62pjvtygLpPFsrgbH1sVKmef0OaX7hFMyLyMPRXCknLgkq2UFsE6gbW72rfodsmURtpU8mExctJoeikffEu89DHrBdlKNKba4WSNk4sDN81oMw8QX1gkMoPG8DFx7MuOoPNG3pIqmCFT3yoT9pNbJFDhmgGScRIDbS9X8hCeJVOsWcucglkMotsKzWZRnmTzqzI8x8VFJ3Cwm4y3MwfW4Xk+aMhNgogy2n8wbpd89x3PCf1tIXHNRwQN46Ukz3iDAHDQPkYwxVKisXJyzAZMPxj5nLQHkTvzeINR/GCYij/uPi1lh5okiq1+NeM6O0WBwnU0ocfDKKNeM1jSZGFDspfbc8Y2y+3D+7YtpJ66fdPeZU/k926aVgcazehxx5Wjdk+yPHZTNodBBhX2I2hL8Zz2tWDoPhzTgoXJWWfJYu4+0ovNXkCat+LBZb+6BRNlInFekc4pTJ5OrcygHatls7JX5stmvGlUXu2CyHGK6FWBnQyRvo+IEtzcw2ljFXhDjUX17B+b6Q8bPvLwskrMA9ZhwtbbXRxyTagfvuFR1QiEveUv34ok1kpJMpLEAYhXPPlPhHtVRsnXJ4wpPvxI0Nkt5yyqlMBysa4KlXjLO9UoZUD4zwvYA4MeUa8lKxhnNAnVvSGqfsKuoXmsF3sGVMRPgdtU3eRSvFRj70qY+kLab1BhVHrJ3Mj6mbJWHPK20f6Dg07F7wjTkNBC421O5YTKVpQQluFq67kDspXhIcHByg4ArZfVqHKBWEc+V1fgmNXrGm2msh1gTOpz0f0Y18QTbMaS6mwF7kTWFbgYKjOvbzRC3fwl9KNiDh6sPRSiPeB9KfYFVi0FSB1Fjd9Px7kC7RzNml6Oz1EFUDZB6v+x+St4byXMpkn5oxqACRadRuBRv9LFWZL33yzlqde2Ry4O9KJtckj0oLyMy2rsbpWuvRkSgh7secf2Wrnuhrk5Z3gFrXEP7k2roTq6FznTNI3rVuNZOWzShTlm3/PwR1+NcVxBbqzvdzmnuESAqxHWDd6f/DzW5Mt6OtEPbAAAAAElFTkSuQmCC\') center no-repeat; left: 20px; right: 20px; top: 20px; bottom: 20px; border-radius: 50%; z-index: 5; border: 1px solid #FFBB00;');
cccCreateCSSSelector('.loader-ccc-sides', 'position: relative; width: 120px; height: 120px; animation: loader-ccc-sides 1.5s infinite linear; border-radius: 50%;');
cccCreateCSSSelector('.loader-ccc-sides:after', 'position: absolute; width: 120px; height: 120px; border-top: 10px solid #FFBB00; border-bottom: 10px solid #FFBB00; border-left: 10px solid transparent; border-right: 10px solid transparent; border-radius: 50%; content: \'\'; top: 0; left: 0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; ');
cccCreateCSSSelector('@keyframes loader-ccc-sides', '0% {transform: rotate(0deg);} 50% {transform: rotate(180deg);} 100% {transform: rotate(360deg);}');


var loaderccc = document.createElement("div");
var loaderccclogo = document.createElement("div");
var loadercccsides = document.createElement("div");

loaderccc.id = 'loaderccc';
loaderccc.className = 'loader-ccc';
loaderccclogo.className = 'loader-ccc-logo';
loadercccsides.className = 'loader-ccc-sides';

loaderccc.appendChild(loaderccclogo);
loaderccc.appendChild(loadercccsides);

embedableInfo.appendChild(loaderccc);

embedable.appendChild(embedableInfo);



var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
Date.prototype.monthDayHourMinute = function() {
var month = monthShort[this.getMonth()];
var dd = this.getDate().toString();
var hh = this.getHours().toString();
var minute = this.getMinutes().toString();

return month + " " + (dd[1] ? dd : "0" + dd[0]) + " , " + (hh[1] ? hh : "0" + hh[0]) + ":" + (minute[1] ? minute : "0" + minute[0]);
};

Date.prototype.monthDayYear = function() {
var month = monthShort[this.getMonth()];
var dd = this.getDate().toString();
var yyyy = this.getFullYear().toString();

return month + " " + (dd[1] ? dd : "0" + dd[0]) + " , " + yyyy;
};

Date.prototype.yearMonthDay = function() {
var month = monthShort[this.getMonth()];
var dd = this.getDate().toString();
var yyyy = this.getFullYear().toString();

return yyyy + "-" + month + "-" + (dd[1] ? dd : "0" + dd[0]);
};

document.currentScript.parentNode.appendChild(embedable);


jQuery(".dateRangeChart").click(function() {
if(jQuery(".chart-filter").hasClass("active")) {
jQuery(".chart-filter").removeClass('active')
} else {
jQuery(".chart-filter").addClass('active')
}
})

jQuery(".chart-filter__from").datepicker({
dateFormat: "M d, yy",
maxDate: new Date(),
firstDay : 1,
onSelect : function() {
    loadChartByPeriod = setDates();
    cccUpdateChart();
    updateChartForDateRange();
}
});
jQuery(".chart-filter__from").datepicker("setDate", "-30d")


jQuery(".chart-filter__to").datepicker({
maxDate: new Date(),
dateFormat: "M d, yy",
firstDay : 1,
onSelect() {
    loadChartByPeriod = setDates();
    updateChartForDateRange();

}
});

function updateChartForDateRange() {

if(loadChartByPeriod.numberOfDays >=0 && loadChartByPeriod.numberOfDays <=1) {

cccscale = 'histominute';
cccperiod = '1D';
cccaggregate = '15';
cccminPeriod = '15mm';
cccforceAll = false;

} else if(loadChartByPeriod.numberOfDays >=2 && loadChartByPeriod.numberOfDays <=31) {

cccscale = 'histominute';
cccperiod = '1D';
cccaggregate = '15';
cccminPeriod = '15mm';
cccforceAll = false;



} else if(loadChartByPeriod.numberOfDays >=32) {
cccscale = 'histoday';
cccperiod = '3M';
cccaggregate = '1';
cccminPeriod = 'DD';
cccforceAll = false;
}

cccUpdateChart();
}

function setDates() {
    jQuery(".tabperiods").removeClass("tabperiods_active");

    let timeStart = jQuery.datepicker.formatDate("@", jQuery(".chart-filter__from").datepicker("getDate"));
    let timeEnd = jQuery.datepicker.formatDate("@", jQuery(".chart-filter__to").datepicker("getDate"));

    if(timeStart > timeEnd) {
    jQuery(".chart-filter__from").datepicker("setDate", "-30d").blur();
    jQuery(".chart-filter__to").datepicker("setDate", timeStart).blur();
    }
    return {
        from : jQuery.datepicker.formatDate("yy-mm-dd", jQuery(".chart-filter__from").datepicker("getDate")),
        to   : jQuery.datepicker.formatDate("yy-mm-dd", jQuery(".chart-filter__to").datepicker("getDate")),
        numberOfDays : Math.abs((timeEnd - timeStart)/86400000)
    };
}

jQuery(".chart-filter__to").datepicker("setDate", new Date());





cccglobal_data[ccctsym] = {};
cccglobal_data[ccctsym][cccperiod] = {}
cccUpdateChart();
// select chart
function readCookie(n){return(n=new RegExp('(?:^|;\\s*)'+(''+n).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&')+'=([^;]*)').exec(document.cookie))&&n[1];}

var cookieSymbol = readCookie('cccHeaderV2Symbol');
if (cookieSymbol !== 'null' && cookieSymbol) {
var tabElemToSelect = document.getElementById('tabElem' + cookieSymbol + 'Summary');
setTimeout(function() {
tabElemToSelect.click();
},100);
}
})();