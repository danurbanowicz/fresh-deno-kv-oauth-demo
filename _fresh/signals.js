import{T,d}from"./chunk-GNASLP7N.js";var c,o,H,b,v=0,x=[],p=[],g=d.__b,A=d.__r,C=d.diffed,F=d.__c,q=d.unmount;function l(_2,n2){d.__h&&d.__h(o,_2,v||n2),v=0;var u2=o.__H||(o.__H={__:[],__h:[]});return _2>=u2.__.length&&u2.__.push({__V:p}),u2.__[_2]}function T2(_2,n2){var u2=l(c++,7);return y(u2.__H,n2)?(u2.__V=_2(),u2.i=n2,u2.__h=_2,u2.__V):u2.__}function R(){for(var _2;_2=x.shift();)if(_2.__P&&_2.__H)try{_2.__H.__h.forEach(d2),_2.__H.__h.forEach(E),_2.__H.__h=[]}catch(n2){_2.__H.__h=[],d.__e(n2,_2.__v)}}d.__b=function(_2){o=null,g&&g(_2)},d.__r=function(_2){A&&A(_2),c=0;var n2=(o=_2.__c).__H;n2&&(H===o?(n2.__h=[],o.__h=[],n2.__.forEach(function(u2){u2.__N&&(u2.__=u2.__N),u2.__V=p,u2.__N=u2.i=void 0})):(n2.__h.forEach(d2),n2.__h.forEach(E),n2.__h=[],c=0)),H=o},d.diffed=function(_2){C&&C(_2);var n2=_2.__c;n2&&n2.__H&&(n2.__H.__h.length&&(x.push(n2)!==1&&b===d.requestAnimationFrame||((b=d.requestAnimationFrame)||S)(R)),n2.__H.__.forEach(function(u2){u2.i&&(u2.__H=u2.i),u2.__V!==p&&(u2.__=u2.__V),u2.i=void 0,u2.__V=p})),H=o=null},d.__c=function(_2,n2){n2.some(function(u2){try{u2.__h.forEach(d2),u2.__h=u2.__h.filter(function(t){return!t.__||E(t)})}catch(t){n2.some(function(i){i.__h&&(i.__h=[])}),n2=[],d.__e(t,u2.__v)}}),F&&F(_2,n2)},d.unmount=function(_2){q&&q(_2);var n2,u2=_2.__c;u2&&u2.__H&&(u2.__H.__.forEach(function(t){try{d2(t)}catch(i){n2=i}}),u2.__H=void 0,n2&&d.__e(n2,u2.__v))};var D=typeof requestAnimationFrame=="function";function S(_2){var n2,u2=function(){clearTimeout(t),D&&cancelAnimationFrame(n2),setTimeout(_2)},t=setTimeout(u2,100);D&&(n2=requestAnimationFrame(u2))}function d2(_2){var n2=o,u2=_2.__c;typeof u2=="function"&&(_2.__c=void 0,u2()),o=n2}function E(_2){var n2=o;_2.__c=_2.__(),o=n2}function y(_2,n2){return!_2||_2.length!==n2.length||n2.some(function(u2,t){return u2!==_2[t]})}function v2(){throw new Error("Cycle detected")}function d3(){if(h>1){h--;return}let i,t=!1;for(;e!==void 0;){let o2=e;for(e=void 0,p2++;o2!==void 0;){let f=o2.o;if(o2.o=void 0,o2.f&=-3,!(8&o2.f)&&a(o2))try{o2.c()}catch(b2){t||(i=b2,t=!0)}o2=f}}if(p2=0,h--,t)throw i}var s,e,h=0,p2=0,u=0;function y2(i){if(s===void 0)return;let t=i.n;if(t===void 0||t.t!==s)return t={i:0,S:i,p:s.s,n:void 0,t:s,e:void 0,x:void 0,r:t},s.s!==void 0&&(s.s.n=t),s.s=t,i.n=t,32&s.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=s.s,t.n=void 0,s.s.n=t,s.s=t),t}function n(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}n.prototype.h=function(){return!0};n.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)};n.prototype.U=function(i){if(this.t!==void 0){let t=i.e,o2=i.x;t!==void 0&&(t.x=o2,i.e=void 0),o2!==void 0&&(o2.e=t,i.x=void 0),i===this.t&&(this.t=o2)}};n.prototype.subscribe=function(i){let t=this;return U(function(){let o2=t.value,f=32&this.f;this.f&=-33;try{i(o2)}finally{this.f|=f}})};n.prototype.valueOf=function(){return this.value};n.prototype.toString=function(){return this.value+""};n.prototype.peek=function(){return this.v};Object.defineProperty(n.prototype,"value",{get(){let i=y2(this);return i!==void 0&&(i.i=this.i),this.v},set(i){if(i!==this.v){p2>100&&v2(),this.v=i,this.i++,u++,h++;try{for(let t=this.t;t!==void 0;t=t.x)t.t.N()}finally{d3()}}}});function O(i){return new n(i)}function a(i){for(let t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function S2(i){for(let t=i.s;t!==void 0;t=t.n){let o2=t.S.n;if(o2!==void 0&&(t.r=o2),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function w(i){let t,o2=i.s;for(;o2!==void 0;){let f=o2.p;o2.i===-1?(o2.S.U(o2),f!==void 0&&(f.n=o2.n),o2.n!==void 0&&(o2.n.p=f)):t=o2,o2.S.n=o2.r,o2.r!==void 0&&(o2.r=void 0),o2=f}i.s=t}function r(i){n.call(this,void 0),this.x=i,this.s=void 0,this.g=u-1,this.f=4}(r.prototype=new n).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===u))return!0;if(this.g=u,this.f|=1,this.i>0&&!a(this))return this.f&=-2,!0;let i=s;try{S2(this),s=this;let t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return s=i,w(this),this.f&=-2,!0};r.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(let t=this.s;t!==void 0;t=t.n)t.S.S(t)}n.prototype.S.call(this,i)};r.prototype.U=function(i){if(this.t!==void 0&&(n.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(let t=this.s;t!==void 0;t=t.n)t.S.U(t)}};r.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(let i=this.t;i!==void 0;i=i.x)i.t.N()}};r.prototype.peek=function(){if(this.h()||v2(),16&this.f)throw this.v;return this.v};Object.defineProperty(r.prototype,"value",{get(){1&this.f&&v2();let i=y2(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function k(i){return new r(i)}function x2(i){let t=i.u;if(i.u=void 0,typeof t=="function"){h++;let o2=s;s=void 0;try{t()}catch(f){throw i.f&=-2,i.f|=8,l2(i),f}finally{s=o2,d3()}}}function l2(i){for(let t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,x2(i)}function g2(i){if(s!==this)throw new Error("Out-of-order effect");w(this),s=i,this.f&=-2,8&this.f&&l2(this),d3()}function c2(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}c2.prototype.c=function(){let i=this.S();try{!(8&this.f)&&this.x!==void 0&&(this.u=this.x())}finally{i()}};c2.prototype.S=function(){1&this.f&&v2(),this.f|=1,this.f&=-9,x2(this),S2(this),h++;let i=s;return s=this,g2.bind(this,i)};c2.prototype.N=function(){2&this.f||(this.f|=2,this.o=e,e=this)};c2.prototype.d=function(){this.f|=8,1&this.f||l2(this)};function U(i){let t=new c2(i);try{t.c()}catch(o2){throw t.d(),o2}return t.d.bind(t)}function s2(n2,t){d[n2]=t.bind(null,d[n2]||(()=>{}))}var l3,c3;function _(n2){c3&&c3(),c3=n2&&n2.S()}function $({data:n2}){let t=k2(n2);t.value=n2;let i=T2(()=>{let e2=this.__v;for(;e2=e2.__;)if(e2.__c){e2.__c.__$f|=4;break}return this.__$u.c=()=>{this.base.data=i.peek()},k(()=>{let r2=t.value.value;return r2===0?0:r2===!0?"":r2||""})},[]);return i.value}$.displayName="_st";Object.defineProperties(n.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:$},props:{configurable:!0,get(){return{data:this}}},__b:{configurable:!0,value:1}});s2("__b",(n2,t)=>{if(typeof t.type=="string"){let i,e2=t.props;for(let r2 in e2){if(r2==="children")continue;let o2=e2[r2];o2 instanceof n&&(i||(t.__np=i={}),i[r2]=o2,e2[r2]=o2.peek())}}n2(t)});s2("__r",(n2,t)=>{_();let i,e2=t.__c;e2&&(e2.__$f&=-2,i=e2.__$u,i===void 0&&(e2.__$u=i=function(r2){let o2;return U(function(){o2=this}),o2.c=()=>{e2.__$f|=1,e2.setState({})},o2}())),l3=e2,_(i),n2(t)});s2("__e",(n2,t,i,e2)=>{_(),l3=void 0,n2(t,i,e2)});s2("diffed",(n2,t)=>{_(),l3=void 0;let i;if(typeof t.type=="string"&&(i=t.__e)){let e2=t.__np,r2=t.props;if(e2){let o2=i.U;if(o2)for(let f in o2){let u2=o2[f];u2!==void 0&&!(f in e2)&&(u2.d(),o2[f]=void 0)}else o2={},i.U=o2;for(let f in e2){let u2=o2[f],d4=e2[f];u2===void 0?(u2=U2(i,f,d4,r2),o2[f]=u2):u2.o(d4,r2)}}}n2(t)});function U2(n2,t,i,e2){let r2=t in n2&&n2.ownerSVGElement===void 0,o2=O(i);return{o:(f,u2)=>{o2.value=f,e2=u2},d:U(()=>{let f=o2.value.value;e2[t]!==f&&(e2[t]=f,r2?n2[t]=f:f?n2.setAttribute(t,f):n2.removeAttribute(t))})}}s2("unmount",(n2,t)=>{if(typeof t.type=="string"){let i=t.__e;if(i){let e2=i.U;if(e2){i.U=void 0;for(let r2 in e2){let o2=e2[r2];o2&&o2.d()}}}}else{let i=t.__c;if(i){let e2=i.__$u;e2&&(i.__$u=void 0,e2.d())}}n2(t)});s2("__h",(n2,t,i,e2)=>{e2<3&&(t.__$f|=2),n2(t,i,e2)});T.prototype.shouldComponentUpdate=function(n2,t){let i=this.__$u;if(!(i&&i.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(let e2 in t)return!0;for(let e2 in n2)if(e2!=="__source"&&n2[e2]!==this.props[e2])return!0;for(let e2 in this.props)if(!(e2 in n2))return!0;return!1};function k2(n2){return T2(()=>O(n2),[])}export{O as signal};
//# sourceMappingURL=signals.js.map
