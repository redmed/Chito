!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Chito",[],e):"object"==typeof exports?exports.Chito=e():t.Chito=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=9)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(2),l=r(s),c=n(7),f=r(c),h=n(5),p=r(h),_=n(1),d=function(t){function e(t,n){i(this,e);var r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r._options={},r._attr={},r._startAt=0,r._stopped=!0,r._paused=!1,r._startTime=0,r._pauseStart=0,r._pauseTime=0,r._reversed=!1,r._chainClips=[],r._tracks=[],r._interpolation=p.default.Linear,r._options=t||{},r._attr=n,r._initOption(t),r._tracks=r._transform(n),r}return u(e,t),o(e,null,[{key:"registerPlugin",value:function(t){var e=t.type,n=this._plugins;n&&n[e]||(this._plugins=n||{},this._plugins[e]=t)}}]),o(e,[{key:"_initOption",value:function(t){var e=t[_.Attr.EASING]||_.Easing.LINEAR;this._easing=f.default[e]?f.default[e]:e,this._delay=t[_.Attr.DELAY]||0;var n=t[_.Attr.DURATION];this._duration=void 0===n?1e3:n,this._repeat_0=this._repeat=t[_.Attr.REPEAT]||1,this._interval=t[_.Attr.INTERVAL]||0,this._yoyo=t[_.Attr.YOYO]||!1,this._startAt=t[_.Attr.START]||0}},{key:"_transform",value:function(t){var e=this.constructor._plugins,n=[];for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];for(var a in e){var u=e[a];if(u.test(i,r)){i=u.parse(i,r),i.__type__=u.type;break}}n.push({key:r,value:i})}return n}},{key:"_getOption",value:function(){return{options:this._options,attr:this._attr}}},{key:"start",value:function(t){var e=window.performance.now();if(this._paused)this._pauseTime+=e-this._pauseStart,this._paused=!1;else{if(!t&&!this._stopped)return this;this._stopped=!1,this._startTime=e+this._delay}return this.emit(_.Ev.START,this._getOption()),this}},{key:"stop",value:function(t){return this._stopped||(this._stopped=!0,this._paused=!1,this._pauseTime=0,this._pauseStart=0,this.emit(_.Ev.STOP,this._getOption()),this.stopChain()),t&&(this._repeat=this._repeat_0),this}},{key:"pause",value:function(){return this._stopped||this._paused?this:(this._paused=!0,this._pauseStart=window.performance.now(),this.emit(_.Ev.PAUSE,this._getOption()),this)}},{key:"update",value:function(t){if(this._stopped)return!0;if(this._paused||t&&t<this._startTime)return!0;var e=t-this._pauseTime,n=this._getProgress(e),r=n.progress,i=n.elapsed,a=this._updateAttr(r,i);return this.emit(_.Ev.UPDATE,r,a,this._getOption()),this._afterUpdate(e,i)}},{key:"_getProgress",value:function(t){var e=(t-this._startTime)/this._duration;return e+=this._startAt,e=Math.min(e,1),{progress:this._easing(this._reversed?1-e:e),elapsed:e}}},{key:"_updateAttr",value:function(t,e){for(var n=this._tracks,r={},i=0,a=n.length;i<a;){var u=n[i++],o=u.key,s=u.value,l=s.__type__;if(l){s=this.constructor._plugins[l].valueOf(s,t,e,o)}else s=this._interpolation(s,t);r[o]=s}return r}},{key:"_afterUpdate",value:function(t,e){if(1==e){var n=this._repeat;if(n>1)return isFinite(n)&&n--,this._startTime=t+this._interval,this._startAt=0,this._yoyo&&(this._reversed=!this._reversed),this.emit(_.Ev.REPEAT_COMPLETE,n,this._getOption()),this._repeat=n,!0;this.emit(_.Ev.COMPLETE,this._getOption());for(var r=-1,i=this._chainClips,a=i.length;++r<a;){var u=i[r],o=this._animation;o&&o.addClip(u),u.start()}return this._stopped=!0,this._pauseTime=0,this._pauseStart=0,this._repeat=this._repeat_0,!1}return!0}},{key:"chain",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this._chainClips=e,this}},{key:"stopChain",value:function(){for(var t=-1,e=this._chainClips,n=e.length;++t<n;){e[t].stop()}return this}},{key:"destroy",value:function(){this._stopped=!0,this._paused=!1,this._startTime=0,this._pauseTime=0,this._pauseStart=0,this._chainClips=[];var t=this._animation;t&&t.removeClip(this),this._animation=null,this.off()}}]),e}(l.default);d.Event=_.Ev,d.Attr=_.Attr,d.Easing=_.Easing,e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={UPDATE:"update",START:"start",REPEAT_COMPLETE:"repeatComplete",AFTER_UPDATE:"afterUpdate",COMPLETE:"complete",PAUSE:"pause",STOP:"stop",RESET:"reset"},i={DURATION:"duration",REPEAT:"repeat",DELAY:"delay",EASING:"easing",INTERVAL:"interval",YOYO:"yoyo",START:"startAt"},a={LINEAR:"Linear",QUADRATIC_IN:"QuadraticIn",QUADRATIC_OUT:"QuadraticOut",QUADRATIC_IN_OUT:"QuadraticInOut",CUBIC_IN:"CubicIn",CUBIC_OUT:"CubicOut",CUBIC_IN_OUT:"CubicInOut",QUARTIC_IN:"QuarticIn",QUARTIC_OUT:"QuarticOut",QUARTIC_IN_OUT:"QuarticInOut",QUINTIC_IN:"QuinticIn",QUINTIC_OUT:"QuinticOut",QUINTIC_IN_OUT:"QuinticInOut",SINUSOIDAL_IN:"SinusoidalIn",SINUSOIDAL_OUT:"SinusoidalOut",SINUSOIDAL_IN_OUT:"SinusoidalInOut",EXPONENTIAL_IN:"ExponentialIn",EXPONENTIAL_OUT:"ExponentialOut",EXPONENTIAL_IN_OUT:"ExponentialInOut",CIRCULAR_IN:"CircularIn",CIRCULAR_OUT:"CircularOut",CIRCULAR_IN_OUT:"CircularInOut",ELASTIC_IN:"ElasticIn",ELASTIC_OUT:"ElasticOut",ELASTIC_IN_OUT:"ElasticInOut",BACK_IN:"BackIn",BACK_OUT:"BackOut",BACK_IN_OUT:"BackInOut",BOUNCE_IN:"BounceIn",BOUNCE_OUT:"BounceOut",BOUNCE_IN_OUT:"BounceInOut"};e.Ev=r,e.Attr=i,e.Easing=a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(){r(this,t),this.__events__={},this.__id__=Math.random()*Date.now()}return i(t,[{key:"on",value:function(t,e){var n=this.__events__;return n[t]=n[t]||[],n[t].push(e),this}},{key:"once",value:function(t,e){var n=this,r=function r(){for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];n.off(t,r),e.apply(n,a)};return r.listener=e,this.on(t,r)}},{key:"off",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.__events__;if(!t)return this.__events__={},this;if(!e)return delete n[t],this;var r=n[t];if(r)for(var i=r.length-1;i>=0;){var a=r[i];a!==e&&a!=a.listener||r.splice(i,1),i--}return this}},{key:"emit",value:function(t){var e=this.__events__[t];if(e){for(var n=0,r=e.length,i=arguments.length,a=Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];for(;n<r;){e[n++].apply(this,a)}}return this}},{key:"events",get:function(){return this.__events__}}]),t}();e.default=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(2),l=r(s),c=n(8),f=r(c),h=n(6),p=n(1),_=function(t){function e(t){i(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n._options={},n._savedClips=[],n._clips=[],n._options=t||{},n}return u(e,t),o(e,[{key:"_startAni",value:function(){var t=this,e=function e(n){t._timer=(0,h.requestAnimationFrame)(e),t._update(n)};this._timer=(0,h.requestAnimationFrame)(e)}},{key:"_stopAni",value:function(){var t=this._timer;return!!t&&((0,h.cancelAnimationFrame)(t),this._timer=null,!0)}},{key:"_update",value:function(t){var e=this._clips;this.emit(p.Ev.UPDATE,e);for(var n=0;n<e.length;){var r=e[n];r.update(t)?n++:(r._animation=null,e.splice(n,1))}this._clips=e,this.emit(p.Ev.AFTER_UPDATE,e),0==e.length&&(this._stopAni(),this.emit(p.Ev.COMPLETE))}},{key:"start",value:function(){var t=this._clips,e=t.length;if(this._timer||0==e)return this;for(var n=-1;++n<e;){t[n].start()}return this.emit(p.Ev.START),this._startAni(),this}},{key:"stop",value:function(){return this._stop(!1),this}},{key:"pause",value:function(){return this._stop(!0),this}},{key:"reset",value:function(){for(var t=-1,e=this._savedClips,n=e.length;++t<n;){e[t].stop(!0)}return this._clips=e.slice(),this.emit(p.Ev.RESET),this}},{key:"_stop",value:function(t,e){this._stopAni();var n=this._clips,r=n.length;if(r){for(var i=-1;++i<r;){var a=n[i];t?a.pause():a.stop(e)}this.emit(t?p.Ev.PAUSE:p.Ev.STOP)}}},{key:"addClip",value:function(t){Array.isArray(t)||(t=[t]);for(var e=-1,n=t.length;++e<n;){var r=t[e];r._animation=this,this._clips.push(r),this._savedClips.push(r)}return this}},{key:"removeClip",value:function(t){var e=this._clips,n=this._savedClips;if(t)f.default.remove(e,function(e){return e===t}),f.default.remove(n,function(e){return e===t}),t._animation=null;else{for(var r=-1,i=n.length;++r<i;){n[r]._animation=null}this._clips=[],this._savedClips=[]}return this}},{key:"getClips",value:function(){return this._clips}},{key:"destroy",value:function(){this._stopAni(),this.removeClip(),this.off()}}]),e}(l.default);_.Event=p.Ev,e.default=_},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=r(i),u=n(10),o=r(u),s={type:"color",test:function(t,e){return o.default.isColor(t)},parse:function(t,e){return o.default.toNormalArray(t)},valueOf:function(t,e,n,r){var i=o.default.linearGradient(t,e);return i=o.default.toRGBA(i)}};a.default.registerPlugin(s),e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={Linear:function(t,e){var n=t.length-1,i=n*e,a=Math.floor(i),u=r.Utils.Linear;return e<0?u(t[0],t[1],i):e>1?u(t[n],t[n-1],n-i):u(t[a],t[a+1>n?n:a+1],i-a)},Bezier:function(t,e){for(var n=0,i=t.length-1,a=Math.pow,u=r.Utils.Bernstein,o=0;o<=i;o++)n+=a(1-e,i-o)*a(e,o)*t[o]*u(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,a=Math.floor(i),u=r.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(a=Math.floor(i=n*(1+e))),u(t[(a-1+n)%n],t[a],t[(a+1)%n],t[(a+2)%n],i-a)):e<0?t[0]-(u(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(u(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):u(t[a?a-1:0],t[a],t[n<a+1?n:a+1],t[n<a+2?n:a+2],i-a)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=r.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var r=e;r>1;r--)n*=r;return t[e]=n,n}}(),CatmullRom:function(t,e,n,r,i){var a=.5*(n-t),u=.5*(r-e),o=i*i;return(2*e-2*n+a+u)*(i*o)+(-3*e+3*n-2*a-u)*o+a*i+e}}};e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(){if("performance"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var t=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-t}}}();var r=function(){return"undefined"!=typeof window&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)}}(),i=function(){return"undefined"!=typeof window&&(window.cancelAnimationFrame||window.msCancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame)||function(t){clearTimeout(t)}}();e.requestAnimationFrame=r,e.cancelAnimationFrame=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={Linear:function(t){return t},QuadraticIn:function(t){return t*t},QuadraticOut:function(t){return t*(2-t)},QuadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},CubicIn:function(t){return t*t*t},CubicOut:function(t){return--t*t*t+1},CubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},QuarticIn:function(t){return t*t*t*t},QuarticOut:function(t){return 1- --t*t*t*t},QuarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},QuinticIn:function(t){return t*t*t*t*t},QuinticOut:function(t){return--t*t*t*t*t+1},QuinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},SinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},SinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},SinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},ExponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},ExponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},ExponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},CircularIn:function(t){return 1-Math.sqrt(1-t*t)},CircularOut:function(t){return Math.sqrt(1- --t*t)},CircularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},ElasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},ElasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},ElasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},BackIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},BackOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},BackInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},BounceIn:function(t){return 1-r.BounceOut(1-t)},BounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},BounceInOut:function(t){return t<.5?.5*r.BounceIn(2*t):.5*r.BounceOut(2*t-1)+.5}};e.default=r},function(t,e,n){"use strict";function r(t,e){var n=t?e.length:0;if(n>0)for(;n--;){var r=e[n];Array.prototype.splice.call(t,r,1)}return t}function i(t,e){var n=[];if(!t||!t.length)return n;if("function"==typeof e){for(var i=-1,a=[],u=t.length;++i<u;){var o=t[i];e(o,i,t)&&(n.push(o),a.push(i))}r(t,a)}return n}function a(t){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default={remove:i,clone:a}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ShaderClip=e.Clip=e.Animation=void 0;var i=n(3),a=r(i),u=n(0),o=r(u);n(4);var s=o.default;e.default={Animation:a.default,Clip:o.default,ShaderClip:s},e.Animation=a.default,e.Clip=o.default,e.ShaderClip=s},function(t,e,n){"use strict";function r(t){return t=Math.round(t),t<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&o.return&&o.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=n(11),o=function(t){return t&&t.__esModule?t:{default:t}}(u),s=o.default.parseCSSColor,l={isColor:function(t){if("string"==typeof t)return!!(0,o.default)(t);if(Array.isArray(t)){for(var e=0,n=t.length;e<n;){var r=t[e++];if("string"!=typeof r)return!1;if(!s(r))return!1}return!0}return!1},isColorIncrease:function(t){return!!Array.isArray(color)&&color.length>0},toColorIncrease:function(t){return[t[0]||0,t[1]||0,t[2]||0,t[3]||0]},toNormal:function(t){if(Array.isArray(t)){for(var e=[],n=0,r=t.length;n<r;){var i=t[n++];if("string"!=typeof i)return null;var a=s(i);if(!a)return null;e.push(a)}return e}return"string"==typeof t?s(t):null},toNormalArray:function(t){if(Array.isArray(t)){for(var e=[],n=0,r=t.length;n<r;){var i=t[n++];if("string"!=typeof i)return null;var a=s(i);if(!a)return null;e.push(a)}return e}return"string"==typeof t?[s(t)]:null},linearGradient:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.Utils.Linear,r=t.length-1,i=r*e,u=i>>0,o=n,s=t[u],c=t[u+1>r?r:u+1],f=i-u;return function(t,e,n){var r=a(t,4),i=r[0],u=r[1],s=r[2],l=r[3],c=a(e,4),f=c[0],h=c[1],p=c[2],_=c[3];return[o(i,f,n)>>0,o(u,h,n)>>0,o(s,p,n)>>0,o(l,_,n)]}(s,c,f)},mixColors:function(t,e){var n=this.toNormal(t);if(Array.isArray(e)&&n){var a=[r(n[0]+e[0]||0),r(n[1]+e[1]||0),r(n[2]+e[2]||0),i(n[3]+e[3]||0)];return"rgba("+[a[0],a[1],a[2],a[3]].join(",")+")"}return t},toRGBA:function(t){if(t&&t.length>=3){var e=void 0===t[3]?1:t[3];return"rgba("+r(t[0])+","+r(t[1])+","+r(t[2])+","+i(e)+")"}return"transparent"},Utils:{Linear:function(t,e,n){return(e-t)*n+t}}};e.default=l},function(t,e){function n(t){return t=Math.round(t),t<0?0:t>255?255:t}function r(t){return t<0?0:t>1?1:t}function i(t){return n("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function a(t){return r("%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))}function u(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function o(t){var e=t.replace(/ /g,"").toLowerCase();if(e in s)return s[e].slice();if("#"===e[0]){if(4===e.length){var r=parseInt(e.substr(1),16);return r>=0&&r<=4095?[(3840&r)>>4|(3840&r)>>8,240&r|(240&r)>>4,15&r|(15&r)<<4,1]:null}if(7===e.length){var r=parseInt(e.substr(1),16);return r>=0&&r<=16777215?[(16711680&r)>>16,(65280&r)>>8,255&r,1]:null}return null}var o=e.indexOf("("),l=e.indexOf(")");if(-1!==o&&l+1===e.length){var c=e.substr(0,o),f=e.substr(o+1,l-(o+1)).split(","),h=1;switch(c){case"rgba":if(4!==f.length)return null;h=a(f.pop());case"rgb":return 3!==f.length?null:[i(f[0]),i(f[1]),i(f[2]),h];case"hsla":if(4!==f.length)return null;h=a(f.pop());case"hsl":if(3!==f.length)return null;var p=(parseFloat(f[0])%360+360)%360/360,_=a(f[1]),d=a(f[2]),v=d<=.5?d*(_+1):d+_-d*_,y=2*d-v;return[n(255*u(y,v,p+1/3)),n(255*u(y,v,p)),n(255*u(y,v,p-1/3)),h];default:return null}}return null}var s={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};try{e.parseCSSColor=o}catch(t){}}])});