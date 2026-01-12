"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var c=o(function(S,q){
var n=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-sinh/dist'),R=require('@stdlib/math-base-special-exp/dist'),s=require('@stdlib/constants-float64-pi-squared/dist');function g(a,r,t){var i,e;return n(a)||n(r)||n(t)||t<=0?NaN:(e=t*a,i=s*y(e),i/=e*(s+e*e),i*=R(r*a),i)}q.exports=g
});var p=o(function(U,N){
var h=require('@stdlib/utils-constant-function/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-special-sinh/dist'),D=require('@stdlib/math-base-special-exp/dist'),f=require('@stdlib/constants-float64-pi-squared/dist');function E(a,r){if(v(a)||v(r)||r<=0)return h(NaN);return t;function t(i){var e,u;return v(i)?NaN:(u=r*i,e=f*A(u),e/=u*(f+u*u),e*=D(a*i),e)}}N.exports=E
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=c(),P=p();I(x,"factory",P);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
