// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.1-esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function a(u){var f,c,g,v,b;if(arguments.length>0){if(!o(u))throw new TypeError(h("0pr2V,FD",u));if(f=i({},u),m(f,"iter")){if(!d(f.iter))throw new TypeError(h("0pr2t,G9","iter",f.iter))}else f.iter=l;g=p(f),void 0===f.prng&&!1!==f.copy&&(f.state=g.state)}else g=p(),f={iter:l,state:g.state};return b=0,t(c={},"next",x),t(c,"return",y),f&&f.prng?(t(c,"seed",null),t(c,"seedLength",null),s(c,"state",n(null),r),t(c,"stateLength",null),t(c,"byteLength",null)):(e(c,"seed",L),e(c,"seedLength",N),s(c,"state",w,E),e(c,"stateLength",P),e(c,"byteLength",R)),t(c,"PRNG",g.PRNG),j&&t(c,j,G),c;function x(){return b+=1,v||b>f.iter?{done:!0}:{value:g(),done:!1}}function y(t){return v=!0,arguments.length?{value:t,done:!0}:{done:!0}}function G(){return a(f)}function L(){return g.PRNG.seed}function N(){return g.PRNG.seedLength}function P(){return g.PRNG.stateLength}function R(){return g.PRNG.byteLength}function w(){return g.PRNG.state}function E(t){g.PRNG.state=t}}export{a as default};
//# sourceMappingURL=index.mjs.map
