(window.webpackJsonp=window.webpackJsonp||[]).push([[27,2,4],{272:function(t,e,r){var content=r(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("0c0797d7",content,!0,{sourceMap:!1})},273:function(t,e,r){"use strict";r.r(e);var n={props:{resetstyles:{type:Boolean,default:!1},title:{type:String,default:""},images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},caption:{type:Boolean,default:!0}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},o=(r(276),r(50)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?r("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.images?r("ul",t._l(t.images,(function(image,e){return r("li",{key:image.src},[r("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(r){return t.clickImage(e)}}})])})),0):t._e(),t._v(" "),t.overlayActive?r("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay.apply(null,arguments)}}},[r("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[t._v(" × ")]),t._v(" "),r("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[r("div",{staticClass:"swiper-button-prev swiper-button-white"})]),t._v(" "),r("div",{staticClass:"main"},[t.images[t.currentImage].thumb?r("div",[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():r("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.caption&&t.images[t.currentImage].caption?r("p",[t._v("\n        "+t._s(t.images[t.currentImage].caption)+"\n      ")]):t._e()]),t._v(" "),r("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[r("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):t._e()])}),[],!1,null,"6822cae8",null);e.default=component.exports},274:function(t,e,r){"use strict";r.r(e);r(278),r(45),r(36),r(26),r(13),r(27),r(51),r(37),r(19),r(70);var n=r(275),o=r.n(n),l={components:{Lightbox:r(273).default},props:{title:{type:String,default:""},basePath:{type:String,default:""},imageCount:{type:Number,default:0},video:{type:String,default:""}},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(o()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=r(50),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?r("section",{staticClass:"content has-text-centered"},[r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),r("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lightbox:r(273).default})},275:function(t,e){var r=function(t,e,n){for(e||(e=r._amount),n||(n=r._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=n+t;return t};r._amount=2,r._character="0",r.amount=function(t){return t?(r._amount=t,r):r._amount},r.character=function(t){return t?(r._character=t,r):r._character},t.exports=r},276:function(t,e,r){"use strict";r(272)},277:function(t,e,r){var n=r(71)(!1);n.push([t.i,'.vue-lightbox ul[data-v-6822cae8]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-6822cae8]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-6822cae8]{display:block;width:160px;cursor:pointer}.lightbox-overlay[data-v-6822cae8]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.9);z-index:31;display:grid;grid-template-rows:auto 1fr;grid-template-columns:auto 1fr auto;grid-template-areas:". . close" "prev main next"}.lightbox-overlay .close[data-v-6822cae8],.lightbox-overlay .next[data-v-6822cae8],.lightbox-overlay .prev[data-v-6822cae8]{z-index:1;color:#fff!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:4rem;line-height:1;opacity:.6;display:flex;justify-content:center;align-items:center}.lightbox-overlay .close[data-v-6822cae8]:hover,.lightbox-overlay .next[data-v-6822cae8]:hover,.lightbox-overlay .prev[data-v-6822cae8]:hover{opacity:1}.lightbox-overlay .close[data-v-6822cae8]{grid-area:close;font-size:4rem}.lightbox-overlay .next>div[data-v-6822cae8],.lightbox-overlay .prev>div[data-v-6822cae8]{position:static}.lightbox-overlay .prev[data-v-6822cae8]{grid-area:prev}.lightbox-overlay .next[data-v-6822cae8]{grid-area:next}.lightbox-overlay .main[data-v-6822cae8]{grid-area:main;display:flex;justify-content:center;align-items:center}.lightbox-overlay .main>*[data-v-6822cae8]{position:absolute;max-height:calc(100vh - 4rem)}.lightbox-overlay .main>div[data-v-6822cae8]{width:100%;height:100%}',""]),t.exports=n},278:function(t,e,r){"use strict";var n=r(14),o=r(1),l=r(4),c=r(88),h=r(28),d=r(17),m=r(149),v=r(56),f=r(115),y=r(193),_=r(5),x=r(73).f,w=r(52).f,I=r(18).f,k=r(279),C=r(280).trim,E="Number",N=o.Number,A=N.prototype,S=o.TypeError,z=l("".slice),L=l("".charCodeAt),O=function(t){var e=y(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,n,o,l,c,h,code,d=y(t,"number");if(f(d))throw S("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=C(d),43===(e=L(d,0))||45===e){if(88===(r=L(d,2))||120===r)return NaN}else if(48===e){switch(L(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=z(d,2)).length,h=0;h<c;h++)if((code=L(l,h))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(c(E,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var T,M=function(t){var e=arguments.length<1?0:N(O(t)),r=this;return v(A,r)&&_((function(){k(r)}))?m(Object(e),r,M):e},F=n?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),G=0;F.length>G;G++)d(N,T=F[G])&&!d(M,T)&&I(M,T,w(N,T));M.prototype=A,A.constructor=M,h(o,E,M)}},279:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},280:function(t,e,r){var n=r(4),o=r(32),l=r(15),c=r(281),h=n("".replace),d="["+c+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),f=function(t){return function(e){var r=l(o(e));return 1&t&&(r=h(r,m,"")),2&t&&(r=h(r,v,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},281:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},312:function(t,e,r){"use strict";r.r(e);r(19),r(70),r(25),r(35);var n=r(274),o="stories/lauraeldar/mobile",l={components:{Story:n.default},data:function(){return{title:"Laura & Eldar",description:{en:"An intimate ceremony immersed in a heavenly atmosphere with a Caribbean touch while being in the heart of the Langhe.",it:"Una cerimonia intima immersi in un’atmosfera paradisiaca e dal tocco caraibico pur essendo nel cuore delle Langhe."},image:"https://www.giadajoeycazzola.com/images/".concat(o,"/01.jpg"),url:"https://www.giadajoeycazzola.com/".concat(o.replace(/\/mobile/g,""),"/"),basePath:o,imageCount:83}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description[this.$i18n.locale]},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description[this.$i18n.locale]},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}}},c=r(50),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("story",{attrs:{title:t.title,"base-path":t.basePath,"image-count":t.imageCount}},[r("p",{staticClass:"is-size-7"},[t._v("\n    concept and planning:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://casettawedding.com/",target:"_blank"}},[t._v("Casetta Wedding")]),r("br"),t._v("\n    venue:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://realcastello.com/",target:"_blank"}},[t._v("Real Castello di Verduno")]),r("br"),t._v("\n    florist:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://ilgermogliobra.it/",target:"_blank"}},[t._v("Il Germoglio")]),r("br"),t._v("\n    furniture:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://antichitaalessio.com/",target:"_blank"}},[t._v("Alessio Antichità & Home Decor")]),r("br"),t._v("\n    stationery:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.behance.net/mariangelaiacobellis",target:"_blank"}},[t._v("Mariangela Iacobellis")]),r("br"),t._v("\n    bride dress:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://loretree.it/",target:"_blank"}},[t._v("Lore Tree")]),r("br"),t._v("\n    groom suite:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.atelierglamour.it/",target:"_blank"}},[t._v("Atelier Glamour")]),r("br"),t._v("\n    hair and makeup artist:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://rosannacurcimakeup.wordpress.com/",target:"_blank"}},[t._v("Rosanna Curci")]),r("br"),t._v("\n    cake:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.torteriatasti.it/",target:"_blank"}},[t._v("t.asti Food Lab")]),r("br"),t._v("\n    bridal headpieces:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://cristinasignorina.it/",target:"_blank"}},[t._v("Cristina Signorina")]),r("br")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Story:r(274).default})}}]);