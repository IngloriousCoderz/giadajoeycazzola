(window.webpackJsonp=window.webpackJsonp||[]).push([[30,3,5],{304:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("3954a8d2",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";n.r(e);n(314);var r={components:{VueMasonryWall:n(315).a},props:{resetstyles:{type:Boolean,default:!1},title:{type:String,default:""},images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},caption:{type:Boolean,default:!0}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(image){this.currentImage=this.images.findIndex((function(t){return t.src===image.src})),this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},o=(n(308),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),e("vue-masonry-wall",{attrs:{items:t.images,options:{width:600,padding:12}},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.item;return[e("img",{attrs:{src:r.thumb||r.src,alt:r.caption},on:{click:function(e){return t.clickImage(r)}}})]}}])}),t._v(" "),t.overlayActive?e("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay.apply(null,arguments)}}},[e("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[t._v(" × ")]),t._v(" "),e("div",{staticClass:"content"},[e("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[e("div",{staticClass:"swiper-button-prev swiper-button-white"})]),t._v(" "),e("div",{staticClass:"main"},[t.images[t.currentImage].thumb?e("div",[e("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():e("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.caption&&t.images[t.currentImage].caption?e("p",[t._v("\n          "+t._s(t.images[t.currentImage].caption)+"\n        ")]):t._e()]),t._v(" "),e("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[e("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])])]):t._e()],1)}),[],!1,null,"79882314",null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);n(310),n(47),n(39),n(29),n(13),n(30),n(53),n(33),n(25),n(76);var r=n(307),o=n.n(r),l={components:{Lightbox:n(305).default},props:{title:{type:String,default:""},basePath:{type:String,default:""},imageCount:{type:Number,default:0},type:{type:String,default:"jpg"},video:{type:String,default:""}},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(o()(e+1),".").concat(t.type)}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=n(52),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container is-fluid"},[e("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?e("section",{staticClass:"content has-text-centered"},[e("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),e("lightbox",{attrs:{images:t.images,type:t.type}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lightbox:n(305).default})},307:function(t,e){var n=function(t,e,r){for(e||(e=n._amount),r||(r=n._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=r+t;return t};n._amount=2,n._character="0",n.amount=function(t){return t?(n._amount=t,n):n._amount},n.character=function(t){return t?(n._character=t,n):n._character},t.exports=n},308:function(t,e,n){"use strict";n(304)},309:function(t,e,n){var r=n(94)(!1);r.push([t.i,".vue-lightbox ul[data-v-79882314]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-79882314]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-79882314]{display:block;width:160px;cursor:pointer}.lightbox-overlay[data-v-79882314]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.9);z-index:31;display:flex;flex-direction:column}.lightbox-overlay .close[data-v-79882314],.lightbox-overlay .next[data-v-79882314],.lightbox-overlay .prev[data-v-79882314]{z-index:1;color:#fff!important;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4rem;height:4rem;opacity:.6;display:flex;justify-content:center;align-items:center}.lightbox-overlay .close[data-v-79882314]:hover,.lightbox-overlay .next[data-v-79882314]:hover,.lightbox-overlay .prev[data-v-79882314]:hover{opacity:1}.lightbox-overlay .close[data-v-79882314]{align-self:flex-end;font-size:4rem}.lightbox-overlay .content[data-v-79882314]{flex-grow:1;display:flex}.lightbox-overlay .next[data-v-79882314],.lightbox-overlay .prev[data-v-79882314]{align-self:center}.lightbox-overlay .next>div[data-v-79882314],.lightbox-overlay .prev>div[data-v-79882314]{position:static}.lightbox-overlay .main[data-v-79882314]{flex-grow:1;display:flex;justify-content:center;align-items:center}.lightbox-overlay .main>*[data-v-79882314]{position:absolute;max-height:calc(100vh - 4rem)}.lightbox-overlay .main>div[data-v-79882314]{width:100%;height:100%}",""]),t.exports=r},310:function(t,e,n){"use strict";var r=n(12),o=n(7),l=n(6),c=n(97),h=n(21),d=n(14),f=n(155),v=n(59),m=n(96),y=n(207),x=n(3),w=n(77).f,_=n(54).f,I=n(18).f,k=n(311),C=n(312).trim,S="Number",N=o.Number,E=N.prototype,z=o.TypeError,A=l("".slice),M=l("".charCodeAt),O=function(t){var e=y(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,l,c,h,code,d=y(t,"number");if(m(d))throw z("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=C(d),43===(e=M(d,0))||45===e){if(88===(n=M(d,2))||120===n)return NaN}else if(48===e){switch(M(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=A(d,2)).length,h=0;h<c;h++)if((code=M(l,h))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(c(S,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var T,L=function(t){var e=arguments.length<1?0:N(O(t)),n=this;return v(E,n)&&x((function(){k(n)}))?f(Object(e),n,L):e},P=r?w(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;P.length>F;F++)d(N,T=P[F])&&!d(L,T)&&I(L,T,_(N,T));L.prototype=E,E.constructor=L,h(o,S,L,{constructor:!0})}},311:function(t,e,n){var r=n(6);t.exports=r(1..valueOf)},312:function(t,e,n){var r=n(6),o=n(34),l=n(16),c=n(313),h=r("".replace),d="["+c+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(t){return function(e){var n=l(o(e));return 1&t&&(n=h(n,f,"")),2&t&&(n=h(n,v,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},313:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},351:function(t,e,n){"use strict";n.r(e);n(25),n(76),n(28),n(38);var r=n(306),o="stories/martinasalvador/mobile",l={components:{Story:r.default},data:function(){return{title:"Martina & Salvador",description:{en:"Magical marriage in the vineyards of the Asti area. Breathtaking views and suggestive settings are the setting for the love of Martina and Salvador.",it:"Magico matrimonio tra i vigneti dell’astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all’amore di Martina e Salvador."},image:"https://www.giadajoeycazzola.com/images/".concat(o,"/01.jpg"),url:"https://www.giadajoeycazzola.com/".concat(o.replace(/\/mobile/g,""),"/"),basePath:o,imageCount:92}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description[this.$i18n.locale]},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description[this.$i18n.locale]},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}}},c=n(52),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("story",{attrs:{title:t.title,"base-path":t.basePath,"image-count":t.imageCount}},[e("p",{staticClass:"is-size-7"},[t._v("\n    fiori & bouquet:\n    "),e("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.facebook.com/ilpoderelerocche/",target:"_blank"}},[t._v("Ilpoderelerocche")]),e("br"),t._v("\n    catering:\n    "),e("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.ristorantespazio7.it/",target:"_blank"}},[t._v("Spazio7")]),e("br"),t._v("\n    dress:\n    "),e("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.celiadragouni.com/",target:"_blank"}},[t._v("Celia Dragouni")]),t._v("\n    -\n    "),e("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.whitelesposetorino.com/",target:"_blank"}},[t._v("White Le Spose")]),e("br"),t._v("\n    location:\n    "),e("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://tamburnin.it/",target:"_blank"}},[t._v("Tenuta Tamburnin")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Story:n(306).default})}}]);