(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{255:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("ba97a48e",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";n.r(e);var r={props:{resetstyles:{type:Boolean,default:!1},title:{type:String,default:""},images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},caption:{type:Boolean,default:!0}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},o=(n(259),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.images?n("ul",t._l(t.images,(function(image,e){return n("li",{key:image.src},[n("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(n){return t.clickImage(e)}}})])})),0):t._e(),t._v(" "),t.overlayActive?n("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay.apply(null,arguments)}}},[n("div",{staticClass:"holder"},[t.images[t.currentImage].thumb?n("div",{staticStyle:{padding:"56.25% 0 0 0"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():n("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.nav?n("div",{staticClass:"nav"},[n("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[n("span",[t._v("×")])]),t._v(" "),n("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[n("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev","data-v-2a183b29":""},slot:"button-prev"})]),t._v(" "),n("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):t._e(),t._v(" "),t.caption&&t.images[t.currentImage].caption?n("p",[t._v("\n        "+t._s(t.images[t.currentImage].caption)+"\n      ")]):t._e()])]):t._e()])}),[],!1,null,"0bf9ead4",null);e.default=component.exports},257:function(t,e,n){"use strict";n.r(e);n(261),n(42),n(41),n(21),n(12),n(26),n(51),n(33),n(32),n(63);var r=n(258),o=n.n(r),l={components:{Lightbox:n(256).default},props:{title:{type:String,default:""},basePath:{type:String,default:""},imageCount:{type:Number,default:0},video:{type:String,default:""}},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(o()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=n(48),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?n("section",{staticClass:"content has-text-centered"},[n("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),n("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lightbox:n(256).default})},258:function(t,e){var n=function(t,e,r){for(e||(e=n._amount),r||(r=n._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=r+t;return t};n._amount=2,n._character="0",n.amount=function(t){return t?(n._amount=t,n):n._amount},n.character=function(t){return t?(n._character=t,n):n._character},t.exports=n},259:function(t,e,n){"use strict";n(255)},260:function(t,e,n){var r=n(64)(!1);r.push([t.i,".vue-lightbox ul[data-v-0bf9ead4]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-0bf9ead4]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-0bf9ead4]{display:block;width:160px;cursor:pointer}.lightbox-overlay[data-v-0bf9ead4]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;box-sizing:border-box;z-index:31;display:flex;justify-content:center;align-items:center}.lightbox-overlay .holder[data-v-0bf9ead4]{max-width:600px;margin:0 auto;position:relative;max-height:100vh;transform:none}.lightbox-overlay .holder img[data-v-0bf9ead4]{width:100%;max-width:600px;cursor:pointer;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-0bf9ead4]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-0bf9ead4]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-0bf9ead4]{color:#fff!important;opacity:.3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-0bf9ead4]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-0bf9ead4],.lightbox-overlay .holder .nav .prev[data-v-0bf9ead4]{position:absolute;top:120px;bottom:120px;padding:10px;width:20%;box-sizing:border-box;font-size:40px;display:flex;align-items:center}.lightbox-overlay .holder .nav .next[data-v-0bf9ead4]{right:0;justify-content:flex-end}.lightbox-overlay .holder .nav .prev[data-v-0bf9ead4]{left:0;justify-content:flex-start}.lightbox-overlay .holder .nav .close[data-v-0bf9ead4]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1;position:absolute;text-align:left;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-0bf9ead4]:hover{opacity:1}",""]),t.exports=r},261:function(t,e,n){"use strict";var r=n(14),o=n(5),l=n(81),c=n(22),d=n(15),f=n(57),h=n(136),v=n(80),m=n(179),x=n(6),y=n(52),_=n(66).f,w=n(49).f,I=n(16).f,k=n(262).trim,C="Number",N=o.Number,E=N.prototype,A=f(y(E))==C,S=function(t){if(v(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,l,c,d,code,f=m(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(C,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var z,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(A?x((function(){E.valueOf.call(n)})):f(n)!=C)?h(new N(S(e)),n,O):S(e)},T=r?_(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;T.length>M;M++)d(N,z=T[M])&&!d(O,z)&&I(O,z,w(N,z));O.prototype=E,E.constructor=O,c(o,C,O)}},262:function(t,e,n){var r=n(29),o=n(13),l="["+n(263)+"]",c=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},263:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);