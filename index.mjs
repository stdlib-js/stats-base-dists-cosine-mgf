// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinh@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi-squared@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function d(t,r,d){var m,a;return s(t)||s(r)||s(d)||d<=0?NaN:(m=i*e(a=d*t),m/=a*(i+a*a),m*=n(r*t))}function m(t,d){return s(t)||s(d)||d<=0?r(NaN):function(r){var m,a;if(s(r))return NaN;return m=i*e(a=d*r),m/=a*(i+a*a),m*=n(t*r)}}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
