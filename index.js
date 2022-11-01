// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&a&&a.call(t,r,n.set),t};function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(t){return t!=t}var p=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function b(t){return Math.abs(t)}var d=Math.floor,_=Math.ceil;function s(t){return t<0?_(t):d(t)}function A(t){return t===p||t===v}var w,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",j=m&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return h.call(t);n=t[g],i=g,r=null!=(o=t)&&U.call(o,i);try{t[g]=void 0}catch(r){return h.call(t)}return e=h.call(t),r?t[g]=n:delete t[g],e}:function(t){return h.call(t)},N="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(N&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=w,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,r,n;if("function"!=typeof T)return!1;try{r=new T([1,3.14,-3.14,NaN]),n=r,t=(F&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var t,r,n;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,256,257]),n=r,t=(x&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?M:function(){throw new Error("not implemented")};var V,W=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,65536,65537]),n=r,t=(k&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?C:function(){throw new Error("not implemented")};var q,z={uint16:V,uint8:W};(q=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(q.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(t,r){return Q[0]=r,t[0]=R[X],t[1]=R[Z],t}function tt(t,r){return 1===arguments.length?$([0,0],t):$(t,r)}var rt,nt,et=!0===J?1:0,ot=new P(1),it=new E(ot.buffer);function at(t){return ot[0]=t,it[et]}!0===J?(rt=1,nt=0):(rt=0,nt=1);var ut={HIGH:rt,LOW:nt},ft=new P(1),ct=new E(ft.buffer),lt=ut.HIGH,yt=ut.LOW;function pt(t,r){return ct[lt]=t,ct[yt]=r,ft[0]}var vt=[0,0];function bt(t,r,n,e){return y(t)||A(t)?(r[e]=t,r[e+n]=0,r):0!==t&&b(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}l((function(t){return bt(t,[0,0],1,0)}),"assign",bt);var dt=[0,0],_t=[0,0];function st(t,r){var n,e,o,i,a;return 0===r||0===t||y(t)||A(t)?t:(bt(t,dt,1,0),r+=dt[1],r+=function(t){var r=at(t);return(r=(2146435072&r)>>>20)-1023|0}(t=dt[0]),r<-1074?(o=t,tt(vt,0),i=vt[0],i&=2147483647,a=at(o),pt(i|=a&=2147483648,vt[1])):r>1023?t<0?v:p:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,tt(_t,t),n=_t[0],n&=2148532223,e*pt(n|=r+1023<<20,_t[1])))}var At=1.4426950408889634,wt=1/(1<<28);function mt(t){var r;return y(t)||t===p?t:t===v?0:t>709.782712893384?p:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<wt?1+t:function(t,r,n){var e,o,i,a;return st(1-(r-(e=t-r)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),n)}(t-.6931471803691238*(r=s(t<0?At*t-.5:At*t+.5)),1.9082149292705877e-10*r,r)}function ht(t){var r;return 0===t?t:(r=b(t),t>710.4758600739439||t<-709.089565712824?t>0?p:v:r>1?r>=709.0895657128241?(r=mt(.5*r),r*=.5*r,t<0&&(r=-r),r):(r=.5*(r=mt(r))-.5/r,t<0&&(r=-r),r):t+t*(r*=r)*function(t){var r,n;return 0===t?.16666666666666666:((t<0?-t:t)<=1?(r=t*(t*(-.789474443963537*t-163.72585752598383)-11561.443576500522)-351754.9648081514,n=t*(36157.827983443196+t*(1*t-277.7110814206028))-2110529.7888489086):(r=(t=1/t)*(t*(-351754.9648081514*t-11561.443576500522)-163.72585752598383)-.789474443963537,n=1+t*(t*(36157.827983443196+-2110529.7888489086*t)-277.7110814206028)),r/n)}(r))}var Ut=9.869604401089358;function gt(t,r,n){var e,o;return y(t)||y(r)||y(n)||n<=0?NaN:(e=Ut*ht(o=n*t),e/=o*(Ut+o*o),e*=mt(r*t))}function jt(t,r){return y(t)||y(r)||r<=0?(n=NaN,function(){return n}):function(n){var e,o;return y(n)?NaN:(e=Ut*ht(o=r*n),e/=o*(Ut+o*o),e*=mt(t*n))};var n}l(gt,"factory",jt),t.default=gt,t.factory=jt,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).mgf={});
//# sourceMappingURL=index.js.map
