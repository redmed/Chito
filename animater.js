!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Animater",[],e):"object"==typeof exports?exports.Animater=e():t.Animater=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(1),s=r(l),c=n(8),f=r(c);!function(){if("performance"in window==0&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==0){var t=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-t}}}();var h={UPDATE:"update",START:"start",REPEAT_COMPLETE:"repeatComplete",COMPLETE:"complete",STOP:"stop"},p={DURATION:"duration",REPEAT:"repeat",DELAY:"delay",EASING:"easing",INTERVAL:"interval",YOYO:"yoyo",START:"startAt"},d={LINEAR:"Linear",QUADRATIC_IN:"QuadraticIn",QUADRATIC_OUT:"QuadraticOut",QUADRATIC_IN_OUT:"QuadraticInOut",CUBIC_IN:"CubicIn",CUBIC_OUT:"CubicOut",CUBIC_IN_OUT:"CubicInOut",QUARTIC_IN:"QuarticIn",QUARTIC_OUT:"QuarticOut",QUARTIC_IN_OUT:"QuarticInOut",QUINTIC_IN:"QuinticIn",QUINTIC_OUT:"QuinticOut",QUINTIC_IN_OUT:"QuinticInOut",SINUSOIDAL_IN:"SinusoidalIn",SINUSOIDAL_OUT:"SinusoidalOut",SINUSOIDAL_IN_OUT:"SinusoidalInOut",EXPONENTIAL_IN:"ExponentialIn",EXPONENTIAL_OUT:"ExponentialOut",EXPONENTIAL_IN_OUT:"ExponentialInOut",CIRCULAR_IN:"CircularIn",CIRCULAR_OUT:"CircularOut",CIRCULAR_IN_OUT:"CircularInOut",ELASTIC_IN:"ElasticIn",ELASTIC_OUT:"ElasticOut",ELASTIC_IN_OUT:"ElasticInOut",BACK_IN:"BackIn",BACK_OUT:"BackOut",BACK_IN_OUT:"BackInOut",BOUNCE_IN:"BounceIn",BOUNCE_OUT:"BounceOut",BOUNCE_IN_OUT:"BounceInOut"},_=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n._options={},n._attr={},n._startAt=0,n._isPlaying=!1,n._reversed=!1,n.Event=h,n.initialize(t),n}return a(e,t),u(e,[{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];this._options=this._initOption(t),this._attr=e}},{key:"_initOption",value:function(t){var e=t[p.EASING]||d.LINEAR;return this._easing=f.default[e]?f.default[e]:e,this._delay=t[p.DELAY]||0,this._duration=t[p.DURATION]||1e3,this._repeat=t[p.REPEAT]||0,this._interval=t[p.INTERVAL]||0,this._yoyo=t[p.YOYO]||!1,this._startAt=t[p.START]||0,t}},{key:"getOpt",value:function(){return{options:this._options,attr:this._attr}}},{key:"start",value:function(t){if(t||!this._isPlaying)return this._isPlaying=!0,this._startTime=window.performance.now()+this._delay,this.emit(h.START,this.getOpt()),this}},{key:"stop",value:function(){if(this._isPlaying)return this._isPlaying=!1,this.emit(h.STOP,this.getOpt()),this}},{key:"update",value:function(t){if(this._isPlaying&&t&&t<this._startTime)return!0;var e=(t-this._startTime)/this._duration;e+=this._startAt,e=Math.min(e,1);var n=this._easing(this._reversed?1-e:e);return this.emit(h.UPDATE,n,this.getOpt()),1!=e||(this._repeat>1?(isFinite(this._repeat)&&this._repeat--,this._startTime=t+this._interval,this._startAt=0,this._yoyo&&(this._reversed=!this._reversed),this.emit(h.REPEAT_COMPLETE,this._repeat,this.getOpt()),!0):(this.emit(h.COMPLETE,this.getOpt()),!1))}},{key:"destroy",value:function(){this._isPlaying=!1,this.off()}}]),e}(s.default);_.Event=h,_.Attr=p,_.Easing=d,e.default=_},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(){r(this,t),this.__events__={},this.__id__=Math.random()*Date.now()}return i(t,[{key:"on",value:function(t,e){var n=this.__events__;return n[t]=n[t]||[],n[t].push(e),this}},{key:"once",value:function(t,e){var n=this,r=function r(){for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];n.off(t,r),e.apply(n,o)};return r.listener=e,this.on(t,r)}},{key:"off",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.__events__;return null==t?(this.__events__={},this):null==e?(delete n[t],this):(n[t].some(function(t,n,r){if(t===e||t===t.listener)return r.splice(n,1),!0}),this)}},{key:"emit",value:function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=this.__events__[t];return o&&o.forEach(function(t){t.apply(e,r)}),this}},{key:"events",get:function(){return this.__events__}}]),t}();e.default=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(1),s=r(l),c=n(9),f=r(c),h=n(5),p={START:"start",STOP:"stop",UPDATE:"update",AFTER_UPDATE:"afterUpdate",COMPLETE:"complete"},d=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n._options={},n._clips=[],n._options=t,n}return a(e,t),u(e,[{key:"_startAni",value:function(){var t=this,e=function e(n){t._timer=(0,h.requestAnimationFrame)(e),t._update(n)};this._timer=(0,h.requestAnimationFrame)(e)}},{key:"_update",value:function(t){var e=this._clips;this.emit(p.UPDATE,t,e);for(var n=0;n<e.length;)e[n].update(t)?n++:e.splice(n,1);this._clips=e,this.emit(p.AFTER_UPDATE,t,e),0===e.length&&(this.stop(),this.emit(p.COMPLETE))}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._clips;this._timer||0===e.length||(t&&e.forEach(function(t){t.start()}),this.emit(p.START),this._startAni())}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._timer;e&&((0,h.cancelAnimationFrame)(e),this._timer=null,t&&this._clips.forEach(function(t){t.stop()}),this.emit(p.STOP))}},{key:"addClip",value:function(t){return Array.isArray(t)||(t=[t]),this._clips=this._clips.concat(t),this}},{key:"removeClip",value:function(t){return t?f.default.remove(this._clips,function(e){return e===t}):this._clips=[],this}},{key:"getClips",value:function(){return this._clips}},{key:"destroy",value:function(){this.stop(),this._clips=[],this.off()}}]),e}(s.default);d.Event=p,e.default=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){return t in y}function l(t){var e={};for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];v.default.isColor(r)&&(r=v.default.toNormalArray(r)),e[n]=r}return e}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0},f=n(0),h=r(f),p=n(4),d=r(p),_=n(6),v=r(_),y={color:1,backgroundColor:1,borderColor:1,lineColor:1,shadowColor:1},g=function(t){function e(){i(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._tracks={},t._interpolation=d.default.Linear,t.initialize.apply(t,arguments),t}return a(e,t),s(e,[{key:"initialize",value:function(t,n){c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initialize",this).call(this,t),this._tracks=l(n)}},{key:"when",value:function(t){var e=this._tracks;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];e[n]||(e[n]=[]),e[n].push(r)}return this}},{key:"update",value:function(t){if(this._isPlaying&&t&&t<this._startTime)return!0;var e=(t-this._startTime)/this._duration;e+=this._startAt,e=Math.min(e,1);var n=this._easing(this._reversed?1-e:e),r=this._tracks,i={};for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];Array.isArray(a)&&(u(o)&&Array.isArray(a[0])?(a=v.default.linearGradient(a,n),a=v.default.toRGBA(a)):a=this._interpolation(a,n)),i[o]=a}return this.emit(this.Event.UPDATE,n,i,this.getOpt()),1!=e||(this._repeat>1?(isFinite(this._repeat)&&this._repeat--,this._startTime=t+this._interval,this._startAt=0,this._yoyo&&(this._reversed=!this._reversed),this.emit(this.Event.REPEAT_COMPLETE,this._repeat,this.getOpt()),!0):(this.emit(this.Event.COMPLETE,this.getOpt()),!1))}}]),e}(h.default);e.default=g},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={Linear:function(t,e){var n=t.length-1,i=n*e,o=Math.floor(i),a=r.Utils.Linear;return e<0?a(t[0],t[1],i):e>1?a(t[n],t[n-1],n-i):a(t[o],t[o+1>n?n:o+1],i-o)},Bezier:function(t,e){for(var n=0,i=t.length-1,o=Math.pow,a=r.Utils.Bernstein,u=0;u<=i;u++)n+=o(1-e,i-u)*o(e,u)*t[u]*a(i,u);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,o=Math.floor(i),a=r.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(o=Math.floor(i=n*(1+e))),a(t[(o-1+n)%n],t[o],t[(o+1)%n],t[(o+2)%n],i-o)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(a(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):a(t[o?o-1:0],t[o],t[n<o+1?n:o+1],t[n<o+2?n:o+2],i-o)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=r.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var r=e;r>1;r--)n*=r;return t[e]=n,n}}(),CatmullRom:function(t,e,n,r,i){var o=.5*(n-t),a=.5*(r-e),u=i*i;return(2*e-2*n+o+a)*(i*u)+(-3*e+3*n-2*o-a)*u+o*i+e}}};e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return"undefined"!=typeof window&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)}}(),i=function(){return"undefined"!=typeof window&&(window.cancelAnimationFrame||window.msCancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame)||function(t){clearTimeout(t)}}();e.requestAnimationFrame=r,e.cancelAnimationFrame=i},function(t,e,n){"use strict";function r(t){return t=Math.round(t),t<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=n(7),u=function(t){return t&&t.__esModule?t:{default:t}}(a),l={isColor:function(t){if("string"==typeof t)return!!(0,u.default)(t);if(Array.isArray(t)){for(var e=0,n=t.length;e<n;){var r=t[e++];if("string"!=typeof r)return!1;if(!(0,u.default)(r))return!1}return!0}return!1},isColorIncrease:function(t){return!!Array.isArray(color)&&color.length>0},toColorIncrease:function(t){return[t[0]||0,t[1]||0,t[2]||0,t[3]||0]},toNormal:function(t){if(Array.isArray(t)){for(var e=[],n=0,r=t.length;n<r;){var i=t[n++];if("string"!=typeof i)return null;var o=(0,u.default)(i);if(!o)return null;e.push(o)}return e}return"string"==typeof t?(0,u.default)(t):null},toNormalArray:function(t){if(Array.isArray(t)){for(var e=[],n=0,r=t.length;n<r;){var i=t[n++];if("string"!=typeof i)return null;var o=(0,u.default)(i);if(!o)return null;e.push(o)}return e}return"string"==typeof t?[(0,u.default)(t)]:null},linearGradient:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.Utils.Linear,r=t.length-1,i=r*e,a=i>>0,u=n,s=t[a],c=t[a+1>r?r:a+1],f=i-a;return function(t,e,n){var r=o(t,4),i=r[0],a=r[1],l=r[2],s=r[3],c=o(e,4),f=c[0],h=c[1],p=c[2],d=c[3];return[u(i,f,n)>>0,u(a,h,n)>>0,u(l,p,n)>>0,u(s,d,n)]}(s,c,f)},mixColors:function(t,e){var n=this.toNormal(t);if(Array.isArray(e)&&n){var o=[r(n[0]+e[0]||0),r(n[1]+e[1]||0),r(n[2]+e[2]||0),i(n[3]+e[3]||0)];return"rgba("+[o[0],o[1],o[2],o[3]].join(",")+")"}return t},toRGBA:function(t){if(t&&t.length>=3){var e=void 0===t[3]?1:t[3];return"rgba("+r(t[0])+","+r(t[1])+","+r(t[2])+","+i(e)+")"}return"transparent"},Utils:{Linear:function(t,e,n){return(e-t)*n+t}}};e.default=l},function(t,e,n){"use strict";function r(t){return t=Math.round(t),t<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}function o(t){return r("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function a(t){return i("%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))}function u(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function l(t){var e=t.replace(/ /g,"").toLowerCase();if(e in s)return s[e].slice();if("#"===e[0]){if(4===e.length){var n=parseInt(e.substr(1),16);return n>=0&&n<=4095?[(3840&n)>>4|(3840&n)>>8,240&n|(240&n)>>4,15&n|(15&n)<<4,1]:null}if(7===e.length){var n=parseInt(e.substr(1),16);return n>=0&&n<=16777215?[(16711680&n)>>16,(65280&n)>>8,255&n,1]:null}return null}var i=e.indexOf("("),l=e.indexOf(")");if(-1!==i&&l+1===e.length){var c=e.substr(0,i),f=e.substr(i+1,l-(i+1)).split(","),h=1;switch(c){case"rgba":if(4!==f.length)return null;h=a(f.pop());case"rgb":return 3!==f.length?null:[o(f[0]),o(f[1]),o(f[2]),h];case"hsla":if(4!==f.length)return null;h=a(f.pop());case"hsl":if(3!==f.length)return null;var p=(parseFloat(f[0])%360+360)%360/360,d=a(f[1]),_=a(f[2]),v=_<=.5?_*(d+1):_+d-_*d,y=2*_-v;return[r(255*u(y,v,p+1/3)),r(255*u(y,v,p)),r(255*u(y,v,p-1/3)),h];default:return null}}return null}Object.defineProperty(e,"__esModule",{value:!0});var s={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={Linear:function(t){return t},QuadraticIn:function(t){return t*t},QuadraticOut:function(t){return t*(2-t)},QuadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},CubicIn:function(t){return t*t*t},CubicOut:function(t){return--t*t*t+1},CubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},QuarticIn:function(t){return t*t*t*t},QuarticOut:function(t){return 1- --t*t*t*t},QuarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},QuinticIn:function(t){return t*t*t*t*t},QuinticOut:function(t){return--t*t*t*t*t+1},QuinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},SinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},SinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},SinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},ExponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},ExponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},ExponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},CircularIn:function(t){return 1-Math.sqrt(1-t*t)},CircularOut:function(t){return Math.sqrt(1- --t*t)},CircularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},ElasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},ElasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},ElasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},BackIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},BackOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},BackInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},BounceIn:function(t){return 1-r.BounceOut(1-t)},BounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},BounceInOut:function(t){return t<.5?.5*r.BounceIn(2*t):.5*r.BounceOut(2*t-1)+.5}};e.default=r},function(t,e,n){"use strict";function r(t,e){var n=t?e.length:0;if(n>0)for(;n--;){var r=e[n];Array.prototype.splice.call(t,r,1)}return t}function i(t,e){var n=[];if(!t||!t.length)return n;if("function"==typeof e){for(var i=-1,o=[],a=t.length;++i<a;){var u=t[i];e(u,i,t)&&(n.push(u),o.push(i))}r(t,o)}return n}function o(t){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default={remove:i,clone:o}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ShaderClip=e.Clip=e.Animation=void 0;var i=n(2),o=r(i),a=n(0),u=r(a),l=n(3),s=r(l);e.Animation=o.default,e.Clip=u.default,e.ShaderClip=s.default}])});