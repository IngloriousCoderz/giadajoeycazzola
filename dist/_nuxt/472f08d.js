(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,4],{256:function(t,e,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("027ed504",content,!0,{sourceMap:!1})},257:function(t,e,o){"use strict";o.r(e);var n={props:{resetstyles:{default:!1,type:Boolean},title:{type:String},images:{type:Array},loop:{default:!0,type:Boolean},nav:{default:!0,type:Boolean},caption:{deftault:!0,type:Boolean}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},r=(o(260),o(48)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?o("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.images?o("ul",t._l(t.images,(function(image,e){return o("li",{key:image.src},[o("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(o){return t.clickImage(e)}}})])})),0):t._e(),t._v(" "),t.overlayActive?o("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay.apply(null,arguments)}}},[o("div",{staticClass:"holder"},[t.images[t.currentImage].thumb?o("div",{staticStyle:{padding:"56.25% 0 0 0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():o("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.nav?o("div",{staticClass:"nav"},[o("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[o("span",[t._v("×")])]),t._v(" "),o("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[o("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev","data-v-2a183b29":""},slot:"button-prev"})]),t._v(" "),o("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[o("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):t._e(),t._v(" "),t.caption&&t.images[t.currentImage].caption?o("p",[t._v("\n        "+t._s(t.images[t.currentImage].caption)+"\n      ")]):t._e()])]):t._e()])}),[],!1,null,"1b79ab0b",null);e.default=component.exports},258:function(t,e,o){"use strict";o.r(e);o(262),o(43),o(42),o(21),o(12),o(26),o(53),o(29),o(35),o(63);var n=o(259),r=o.n(n),l={components:{Lightbox:o(257).default},props:{title:String,basePath:String,imageCount:Number,video:String},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(r()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=o(48),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),o("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?o("section",{staticClass:"content has-text-centered"},[o("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),o("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lightbox:o(257).default})},259:function(t,e){var o=function(t,e,n){for(e||(e=o._amount),n||(n=o._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=n+t;return t};o._amount=2,o._character="0",o.amount=function(t){return t?(o._amount=t,o):o._amount},o.character=function(t){return t?(o._character=t,o):o._character},t.exports=o},260:function(t,e,o){"use strict";o(256)},261:function(t,e,o){var n=o(64)(!1);n.push([t.i,".vue-lightbox ul[data-v-1b79ab0b]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-1b79ab0b]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-1b79ab0b]{display:block;width:182px}.lightbox-overlay[data-v-1b79ab0b]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;box-sizing:border-box;z-index:31}.lightbox-overlay .holder[data-v-1b79ab0b]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-1b79ab0b]{width:100%;max-width:600px;cursor:pointer;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-1b79ab0b]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-1b79ab0b]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-1b79ab0b]{color:#fff!important;opacity:.3;-webkit-user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-1b79ab0b]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-1b79ab0b],.lightbox-overlay .holder .nav .prev[data-v-1b79ab0b]{position:absolute;top:120px;bottom:120px;padding:10px;width:20%;box-sizing:border-box;font-size:40px;display:flex;align-items:center}.lightbox-overlay .holder .nav .next[data-v-1b79ab0b]{right:0;justify-content:flex-end}.lightbox-overlay .holder .nav .prev[data-v-1b79ab0b]{left:0;justify-content:flex-start}.lightbox-overlay .holder .nav .close[data-v-1b79ab0b]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1;position:absolute;text-align:left;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-1b79ab0b]:hover{opacity:1}",""]),t.exports=n},262:function(t,e,o){"use strict";var n=o(14),r=o(5),l=o(81),c=o(22),h=o(16),d=o(57),v=o(136),f=o(80),m=o(180),x=o(6),y=o(54),w=o(66).f,_=o(49).f,I=o(18).f,k=o(263).trim,C="Number",A=r.Number,N=A.prototype,E=d(y(N))==C,z=function(t){if(f(t))throw TypeError("Cannot convert a Symbol value to a number");var e,o,n,r,l,c,h,code,d=m(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(o=d.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+d}for(c=(l=d.slice(2)).length,h=0;h<c;h++)if((code=l.charCodeAt(h))<48||code>r)return NaN;return parseInt(l,n)}return+d};if(l(C,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var S,O=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof O&&(E?x((function(){N.valueOf.call(o)})):d(o)!=C)?v(new A(z(e)),o,O):z(e)},j=n?w(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;j.length>L;L++)h(A,S=j[L])&&!h(O,S)&&I(O,S,_(A,S));O.prototype=N,N.constructor=O,c(r,C,O)}},263:function(t,e,o){var n=o(30),r=o(13),l="["+o(264)+"]",c=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),d=function(t){return function(e){var o=r(n(e));return 1&t&&(o=o.replace(c,"")),2&t&&(o=o.replace(h,"")),o}};t.exports={start:d(1),end:d(2),trim:d(3)}},264:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},292:function(t,e,o){"use strict";o.r(e);o(35),o(63),o(17),o(41);var n=o(258),r="stories/irenedavide/mobile",l={components:{Story:n.default},data:function(){return{title:"Irene & Davide",description:{en:"A genuine, nice, spontaneous couple. A pure reportage in a very charming rural location!",it:"Fotografare Irene e Davide è stato un privilegio: mi sono divertita tantissimo! Sono una coppia genuina e l'empatia tra di noi era davvero molto forte. Location e allestimenti eccezionali hanno fatto il resto."},image:"https://www.giadajoeycazzola.com/images/".concat(r,"/96.jpg"),url:"https://www.giadajoeycazzola.com/".concat(r.replace(/\/mobile/g,""),"/"),basePath:r,imageCount:99}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description[this.$i18n.locale]},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description[this.$i18n.locale]},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}}},c=o(48),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("story",{attrs:{title:t.title,"base-path":t.basePath,"image-count":t.imageCount}},[o("p",{staticClass:"is-size-7"},[t._v("\n    location:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.lafederica.it/",target:"_blank"}},[t._v("La Federica")]),t._v(" "),o("br"),t._v("abito da sposa:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.whitelesposetorino.com/",target:"_blank"}},[t._v("White Le Spose Torino")]),t._v(" "),o("br"),t._v("abito da sposo:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.carlopignatelli.com/",target:"_blank"}},[t._v("Carlo Pignatelli")]),t._v(" "),o("br"),t._v("musica:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.ambaradanpartyband.it/",target:"_blank"}},[t._v("Ambaradan Party Band")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Story:o(258).default})}}]);