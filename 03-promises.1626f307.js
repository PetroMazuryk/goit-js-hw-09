!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i={form:document.querySelector(".form"),btn:document.querySelector("button"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};i.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.delay.value),o=Number(i.step.value),t=Number(i.amount.value),r=1;r<=t;r+=1)l(r,n),n+=o}));function l(n,o){return new Promise((function(t,r){var i=Math.random()>.3;setTimeout((function(){i?e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")):e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}),o)}))}console.log({})}();
//# sourceMappingURL=03-promises.1626f307.js.map
