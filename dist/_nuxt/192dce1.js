(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,4],{272:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("14fc7cb4",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n.r(e);var r={props:{resetstyles:{type:Boolean,default:!1},title:{type:String,default:""},images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},caption:{type:Boolean,default:!0}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},o=(n(276),n(50)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.images?n("ul",t._l(t.images,(function(image,e){return n("li",{key:image.src},[n("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(n){return t.clickImage(e)}}})])})),0):t._e(),t._v(" "),t.overlayActive?n("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay.apply(null,arguments)}}},[n("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[t._v(" × ")]),t._v(" "),n("div",{staticClass:"content"},[n("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[n("div",{staticClass:"swiper-button-prev swiper-button-white"})]),t._v(" "),n("div",{staticClass:"main"},[t.images[t.currentImage].thumb?n("div",[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():n("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.caption&&t.images[t.currentImage].caption?n("p",[t._v("\n          "+t._s(t.images[t.currentImage].caption)+"\n        ")]):t._e()]),t._v(" "),n("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])])]):t._e()])}),[],!1,null,"08445f63",null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);n(278),n(45),n(36),n(26),n(13),n(27),n(51),n(37),n(19),n(70);var r=n(275),o=n.n(r),l={components:{Lightbox:n(273).default},props:{title:{type:String,default:""},basePath:{type:String,default:""},imageCount:{type:Number,default:0},video:{type:String,default:""}},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(o()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=n(50),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?n("section",{staticClass:"content has-text-centered"},[n("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),n("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lightbox:n(273).default})},275:function(t,e){var n=function(t,e,r){for(e||(e=n._amount),r||(r=n._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=r+t;return t};n._amount=2,n._character="0",n.amount=function(t){return t?(n._amount=t,n):n._amount},n.character=function(t){return t?(n._character=t,n):n._character},t.exports=n},276:function(t,e,n){"use strict";n(272)},277:function(t,e,n){var r=n(71)(!1);r.push([t.i,".vue-lightbox ul[data-v-08445f63]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-08445f63]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-08445f63]{display:block;width:160px;cursor:pointer}.lightbox-overlay[data-v-08445f63]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.9);z-index:31;display:flex;flex-direction:column}.lightbox-overlay .close[data-v-08445f63],.lightbox-overlay .next[data-v-08445f63],.lightbox-overlay .prev[data-v-08445f63]{z-index:1;color:#fff!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:4rem;height:4rem;opacity:.6;display:flex;justify-content:center;align-items:center}.lightbox-overlay .close[data-v-08445f63]:hover,.lightbox-overlay .next[data-v-08445f63]:hover,.lightbox-overlay .prev[data-v-08445f63]:hover{opacity:1}.lightbox-overlay .close[data-v-08445f63]{align-self:flex-end;font-size:4rem}.lightbox-overlay .content[data-v-08445f63]{flex-grow:1;display:flex}.lightbox-overlay .next[data-v-08445f63],.lightbox-overlay .prev[data-v-08445f63]{align-self:center}.lightbox-overlay .next>div[data-v-08445f63],.lightbox-overlay .prev>div[data-v-08445f63]{position:static}.lightbox-overlay .main[data-v-08445f63]{flex-grow:1;display:flex;justify-content:center;align-items:center}.lightbox-overlay .main>*[data-v-08445f63]{position:absolute;max-height:calc(100vh - 4rem)}.lightbox-overlay .main>div[data-v-08445f63]{width:100%;height:100%}",""]),t.exports=r},278:function(t,e,n){"use strict";var r=n(14),o=n(1),l=n(4),c=n(88),h=n(28),f=n(17),v=n(149),d=n(56),m=n(115),y=n(193),w=n(5),x=n(73).f,_=n(52).f,I=n(18).f,k=n(279),C=n(280).trim,E="Number",N=o.Number,A=N.prototype,S=o.TypeError,z=l("".slice),O=l("".charCodeAt),M=function(t){var e=y(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,l,c,h,code,f=y(t,"number");if(m(f))throw S("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(e=O(f,0))||45===e){if(88===(n=O(f,2))||120===n)return NaN}else if(48===e){switch(O(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=z(f,2)).length,h=0;h<c;h++)if((code=O(l,h))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(E,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var P,T=function(t){var e=arguments.length<1?0:N(M(t)),n=this;return d(A,n)&&w((function(){k(n)}))?v(Object(e),n,T):e},F=r?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;F.length>L;L++)f(N,P=F[L])&&!f(T,P)&&I(T,P,_(N,P));T.prototype=A,A.constructor=T,h(o,E,T)}},279:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},280:function(t,e,n){var r=n(4),o=n(32),l=n(15),c=n(281),h=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t){return function(e){var n=l(o(e));return 1&t&&(n=h(n,v,"")),2&t&&(n=h(n,d,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},281:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},300:function(t,e,n){"use strict";n.r(e);n(19),n(70),n(25),n(35);var r=n(274),o="stories/annamatteo/mobile",l={components:{Story:r.default},data:function(){return{title:"Anna & Matteo",description:{en:"A fiveteenth-century residence on the outskirts of Milan. A very sweet couple and authentic emotions.",it:"Una dimora cinquecentesca a due passi da Milano, una coppia dolcissima e tante emozioni autentiche. Cosa volere di più?"},image:"https://www.giadajoeycazzola.com/images/".concat(o,"/39.jpg"),url:"https://www.giadajoeycazzola.com/".concat(o.replace(/\/mobile/g,""),"/"),basePath:o,imageCount:99}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description[this.$i18n.locale]},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description[this.$i18n.locale]},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}}},c=n(50),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("story",{attrs:{title:t.title,"base-path":t.basePath,"image-count":t.imageCount}},[n("p",{staticClass:"is-size-7"},[t._v("\n    location:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.villascheibler.it/",target:"_blank"}},[t._v("Villa Scheibler")]),n("br"),t._v("\n    dress:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.pronovias.com/it/abiti-sposa-milano",target:"_blank"}},[t._v("Pronovias Milano")]),n("br"),t._v("\n    catering:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.topparties.it/",target:"_blank"}},[t._v("Top Parties")]),n("br"),t._v("\n    florist:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.fagnanifiori.it/",target:"_blank"}},[t._v("Fagnani Fiori")]),n("br"),t._v("\n    accessories:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://stylishbrideaccs.com/",target:"_blank"}},[t._v("Stylish bride accs")]),n("br"),t._v("\n    entertainment:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.instagram.com/ondasonora_events/",target:"_blank"}},[t._v("Ondasonora Events")]),n("br"),t._v("\n    makeup artist:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.instagram.com/lbs.anna/",target:"_blank"}},[t._v("Anna Poliakova")]),n("br"),t._v("\n    jewelry:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.oreficeriamollica.it/",target:"_blank"}},[t._v("Oreficeria Mollica")]),n("br")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Story:n(274).default})}}]);