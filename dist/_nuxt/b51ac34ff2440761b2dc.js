(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{158:function(t,e,o){var content=o(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("731b33e3",content,!0,{sourceMap:!1})},159:function(t,e){var o=function(t,e,n){for(e||(e=o._amount),n||(n=o._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=n+t;return t};o._amount=2,o._character="0",o.amount=function(t){return t?(o._amount=t,o):o._amount},o.character=function(t){return t?(o._character=t,o):o._character},t.exports=o},160:function(t,e,o){"use strict";var n=o(158);o.n(n).a},161:function(t,e,o){(e=o(32)(!1)).push([t.i,".vue-lightbox ul[data-v-2251bbea]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-2251bbea]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-2251bbea]{display:block;width:182px}.lightbox-overlay[data-v-2251bbea]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;box-sizing:border-box;z-index:3}.lightbox-overlay .holder[data-v-2251bbea]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-2251bbea]{width:100%;max-width:600px;cursor:pointer;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-2251bbea]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-2251bbea]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-2251bbea]{color:#fff!important;opacity:.3;-webkit-user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-2251bbea]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-2251bbea],.lightbox-overlay .holder .nav .prev[data-v-2251bbea]{position:absolute;top:120px;bottom:120px;padding:10px;width:20%;box-sizing:border-box;font-size:40px;display:flex;align-items:center}.lightbox-overlay .holder .nav .next[data-v-2251bbea]{right:0;justify-content:flex-end}.lightbox-overlay .holder .nav .prev[data-v-2251bbea]{left:0;justify-content:flex-start}.lightbox-overlay .holder .nav .close[data-v-2251bbea]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1;position:absolute;text-align:left;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-2251bbea]:hover{opacity:1}",""]),t.exports=e},162:function(t,e,o){"use strict";var n={props:{resetstyles:{default:!1,type:Boolean},title:{type:String},images:{type:Array},loop:{default:!0,type:Boolean},nav:{default:!0,type:Boolean},caption:{deftault:!0,type:Boolean}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},r=(o(160),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?o("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.images?o("ul",t._l(t.images,(function(image,e){return o("li",{key:image.src},[o("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(o){return t.clickImage(e)}}})])})),0):t._e(),t._v(" "),t.overlayActive?o("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay(e)}}},[o("div",{staticClass:"holder"},[t.images[t.currentImage].thumb?o("div",{staticStyle:{padding:"56.25% 0 0 0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():o("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.nav?o("div",{staticClass:"nav"},[o("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[o("span",[t._v("×")])]),t._v(" "),o("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[o("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev","data-v-2a183b29":""},slot:"button-prev"})]),t._v(" "),o("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[o("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):t._e(),t._v(" "),t.caption&&t.images[t.currentImage].caption?o("p",[t._v(t._s(t.images[t.currentImage].caption))]):t._e()])]):t._e()])}),[],!1,null,"2251bbea",null);e.a=component.exports},163:function(t,e,o){"use strict";o(75),o(20),o(12),o(45),o(44);var n=o(159),r=o.n(n),l={props:["title","description","type","basePath","imageCount","video"],components:{Lightbox:o(162).a},data:function(){var t=this;return{url:"https://www.giadajoeycazzola.com/".concat(this.basePath,"/"),image:"https://www.giadajoeycazzola.com/images/".concat(this.basePath,"/01.jpg"),images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(r()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile\//g,"/")}))}},c=o(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("h1",{staticClass:"is-size-1 has-text-centered"},[t._v(t._s(t.title))]),t._v(" "),o("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?o("section",{staticClass:"content has-text-centered"},[o("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),o("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.a=component.exports},185:function(t,e,o){"use strict";o.r(e);var n=o(163),r={components:{Story:n.a},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:this.type}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}},data:function(){return{title:"Irene & Davide",description:"Fotografare Irene e Davide è stato un privilegio: mi sono divertita tantissimo! Sono una coppia genuina e l'empatia tra di noi era davvero molto forte. Location e allestimenti eccezionali hanno fatto il resto.",type:"website",basePath:"stories/irenedavide/mobile",imageCount:99}}},l=o(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("story",{attrs:{title:t.title,description:t.description,type:t.type,"base-path":t.basePath,"image-count":t.imageCount}},[o("p",{staticClass:"is-size-7"},[t._v("\n    location:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.lafederica.it/",target:"_blank"}},[t._v("La Federica")]),t._v(" "),o("br"),t._v("abito da sposa:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.whitelesposetorino.com/",target:"_blank"}},[t._v("White Le Spose Torino")]),t._v(" "),o("br"),t._v("abito da sposo:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.carlopignatelli.com/",target:"_blank"}},[t._v("Carlo Pignatelli")]),t._v(" "),o("br"),t._v("musica:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.ambaradanpartyband.it/",target:"_blank"}},[t._v("Ambaradan Party Band")])])])}),[],!1,null,null,null);e.default=component.exports}}]);