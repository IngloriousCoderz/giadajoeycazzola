(window.webpackJsonp=window.webpackJsonp||[]).push([[35,2,4],{306:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("53e26232",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n.r(e);var r={props:{resetstyles:{type:Boolean,default:!1},title:{type:String,default:""},images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},caption:{type:Boolean,default:!0}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},o=(n(310),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.images?e("ul",t._l(t.images,(function(image,n){return e("li",{key:image.src},[e("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(e){return t.clickImage(n)}}})])})),0):t._e(),t._v(" "),t.overlayActive?e("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay.apply(null,arguments)}}},[e("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[t._v(" × ")]),t._v(" "),e("div",{staticClass:"content"},[e("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[e("div",{staticClass:"swiper-button-prev swiper-button-white"})]),t._v(" "),e("div",{staticClass:"main"},[t.images[t.currentImage].thumb?e("div",[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():e("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.caption&&t.images[t.currentImage].caption?e("p",[t._v("\n          "+t._s(t.images[t.currentImage].caption)+"\n        ")]):t._e()]),t._v(" "),e("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[e("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])])]):t._e()])}),[],!1,null,"08445f63",null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);n(312),n(47),n(39),n(29),n(13),n(30),n(53),n(33),n(25),n(76);var r=n(309),o=n.n(r),l={components:{Lightbox:n(307).default},props:{title:{type:String,default:""},basePath:{type:String,default:""},imageCount:{type:Number,default:0},video:{type:String,default:""}},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(o()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=n(52),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container"},[e("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?e("section",{staticClass:"content has-text-centered"},[e("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),e("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lightbox:n(307).default})},309:function(t,e){var n=function(t,e,r){for(e||(e=n._amount),r||(r=n._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=r+t;return t};n._amount=2,n._character="0",n.amount=function(t){return t?(n._amount=t,n):n._amount},n.character=function(t){return t?(n._character=t,n):n._character},t.exports=n},310:function(t,e,n){"use strict";n(306)},311:function(t,e,n){var r=n(77)(!1);r.push([t.i,".vue-lightbox ul[data-v-08445f63]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-08445f63]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-08445f63]{display:block;width:160px;cursor:pointer}.lightbox-overlay[data-v-08445f63]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.9);z-index:31;display:flex;flex-direction:column}.lightbox-overlay .close[data-v-08445f63],.lightbox-overlay .next[data-v-08445f63],.lightbox-overlay .prev[data-v-08445f63]{z-index:1;color:#fff!important;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4rem;height:4rem;opacity:.6;display:flex;justify-content:center;align-items:center}.lightbox-overlay .close[data-v-08445f63]:hover,.lightbox-overlay .next[data-v-08445f63]:hover,.lightbox-overlay .prev[data-v-08445f63]:hover{opacity:1}.lightbox-overlay .close[data-v-08445f63]{align-self:flex-end;font-size:4rem}.lightbox-overlay .content[data-v-08445f63]{flex-grow:1;display:flex}.lightbox-overlay .next[data-v-08445f63],.lightbox-overlay .prev[data-v-08445f63]{align-self:center}.lightbox-overlay .next>div[data-v-08445f63],.lightbox-overlay .prev>div[data-v-08445f63]{position:static}.lightbox-overlay .main[data-v-08445f63]{flex-grow:1;display:flex;justify-content:center;align-items:center}.lightbox-overlay .main>*[data-v-08445f63]{position:absolute;max-height:calc(100vh - 4rem)}.lightbox-overlay .main>div[data-v-08445f63]{width:100%;height:100%}",""]),t.exports=r},312:function(t,e,n){"use strict";var r=n(12),o=n(7),l=n(6),c=n(97),f=n(21),h=n(14),d=n(155),m=n(59),v=n(96),y=n(207),x=n(3),_=n(79).f,w=n(54).f,I=n(18).f,k=n(313),C=n(314).trim,N="Number",E=o.Number,S=E.prototype,z=o.TypeError,A=l("".slice),O=l("".charCodeAt),j=function(t){var e=y(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,n,r,o,l,c,f,code,h=y(t,"number");if(v(h))throw z("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=C(h),43===(e=O(h,0))||45===e){if(88===(n=O(h,2))||120===n)return NaN}else if(48===e){switch(O(h,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(c=(l=A(h,2)).length,f=0;f<c;f++)if((code=O(l,f))<48||code>o)return NaN;return parseInt(l,r)}return+h};if(c(N,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var M,F=function(t){var e=arguments.length<1?0:E(j(t)),n=this;return m(S,n)&&x((function(){k(n)}))?d(Object(e),n,F):e},L=r?_(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;L.length>P;P++)h(E,M=L[P])&&!h(F,M)&&I(F,M,w(E,M));F.prototype=S,S.constructor=F,f(o,N,F,{constructor:!0})}},313:function(t,e,n){var r=n(6);t.exports=r(1..valueOf)},314:function(t,e,n){var r=n(6),o=n(34),l=n(16),c=n(315),f=r("".replace),h="["+c+"]",d=RegExp("^"+h+h+"*"),m=RegExp(h+h+"*$"),v=function(t){return function(e){var n=l(o(e));return 1&t&&(n=f(n,d,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},315:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},354:function(t,e,n){"use strict";n.r(e);n(25),n(76),n(28),n(38);var r=n(308),o="stories/sunheederek/mobile",l={components:{Story:r.default},data:function(){return{title:"Sunhee & Derek",description:{en:"What's the biggest craziest thing you've ever done? Make a marriage proposal and, in less than 24 hours, take a plane and fly from Texas to the Dolomites for a romantic elopement and to celebrate your love in a small mountain chapel!",it:"Qual è la pazzia più grande che tu abbia mai fatto? Fare una proposta di matrimonio e, in meno di 24 ore, prendere un aereo e volare dal Texas alle Dolomiti per una romantica fuga d'amore e per celebrare in una piccola cappella di montagna le proprie nozze!"},image:"https://www.giadajoeycazzola.com/images/".concat(o,"/49.jpg"),url:"https://www.giadajoeycazzola.com/".concat(o.replace(/\/mobile/g,""),"/"),basePath:o,imageCount:69}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description[this.$i18n.locale]},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description[this.$i18n.locale]},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}}},c=n(52),component=Object(c.a)(l,(function(){var t=this;return(0,t._self._c)("story",{attrs:{title:t.title,"base-path":t.basePath,"image-count":t.imageCount}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Story:n(308).default})}}]);