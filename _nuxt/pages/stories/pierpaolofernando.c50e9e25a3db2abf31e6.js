webpackJsonp([2],{"2oeh":function(t,e,i){var a=i("5AUZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("06bb9e54",a,!1,{sourceMap:!1})},"5AUZ":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".vue-lightbox ul[data-v-d3662260]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-d3662260]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-d3662260]{display:block;width:182px}.lightbox-overlay[data-v-d3662260]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;box-sizing:border-box;z-index:3}.lightbox-overlay .holder[data-v-d3662260]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-d3662260]{width:100%;max-width:600px;cursor:pointer;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-d3662260]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-d3662260]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-d3662260]{color:#fff!important;opacity:.3;-webkit-user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-d3662260]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-d3662260],.lightbox-overlay .holder .nav .prev[data-v-d3662260]{position:absolute;top:120px;bottom:120px;padding:10px;width:20%;box-sizing:border-box;font-size:40px;display:flex;align-items:center}.lightbox-overlay .holder .nav .next[data-v-d3662260]{right:0;justify-content:flex-end}.lightbox-overlay .holder .nav .prev[data-v-d3662260]{left:0;justify-content:flex-start}.lightbox-overlay .holder .nav .close[data-v-d3662260]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1;position:absolute;text-align:left;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-d3662260]:hover{opacity:1}",""])},"5zde":function(t,e,i){i("zQR9"),i("qyJz"),t.exports=i("FeBl").Array.from},"Bok+":function(t,e,i){"use strict";var a=i("tJgb");e.a={components:{Story:a.a},data:function(){return{title:"Pierpaolo & Fernando",description:"Una caotica ma affascinante Torino fa da sfondo al matrimonio di Pierpaolo e Fernando: una coppia bellissima e molto complice che ha emozionato tutti con la forza della loro unione.",type:"website",basePath:"stories/pierpaolofernando",imageCount:41,video:"https://player.vimeo.com/video/273849529?portrait=0"}}}},KaXL:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container"},[i("h1",{staticClass:"is-size-1 has-text-centered"},[t._v(t._s(t.title))]),i("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t.video?i("section",{staticClass:"content has-text-centered"},[i("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[i("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),i("lightbox",{attrs:{images:t.images}})],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},UODa:function(t,e,i){"use strict";e.a={props:{resetstyles:{default:!1,type:Boolean},title:{type:String},images:{type:Array},loop:{default:!0,type:Boolean},nav:{default:!0,type:Boolean},caption:{deftault:!0,type:Boolean}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",function(e){return t.handleGlobalKeyDown(e)})},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}}},"c/Tr":function(t,e,i){t.exports={default:i("5zde"),__esModule:!0}},fBQ2:function(t,e,i){"use strict";var a=i("evD5"),o=i("X8DO");t.exports=function(t,e,i){e in t?a.f(t,e,o(0,i)):t[e]=i}},fwDc:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("story",{attrs:{title:t.title,description:t.description,type:t.type,"base-path":t.basePath,"image-count":t.imageCount,video:t.video}},[i("p",{staticClass:"is-size-7"},[t._v("location:\n    "),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.facebook.com/principidipiemontetorino/",target:"_blank"}},[t._v("Principi di Piemonte")]),i("br"),t._v("abiti:\n    "),i("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.carlopignatelli.com/",target:"_blank"}},[t._v("Carlo Pignatelli")])])])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},limt:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?i("h1",[t._v(t._s(t.title))]):t._e(),t.images?i("ul",t._l(t.images,function(e,a){return i("li",{key:e.src},[i("img",{attrs:{src:e.thumb||e.src,alt:e.caption},on:{click:function(e){return t.clickImage(a)}}})])}),0):t._e(),t.overlayActive?i("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay(e)}}},[i("div",{staticClass:"holder"},[t.images[t.currentImage].thumb?i("div",{staticStyle:{padding:"56.25% 0 0 0"}},[i("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t.images[t.currentImage].thumb?t._e():i("img",{attrs:{src:t.images[t.currentImage].src}}),t.nav?i("div",{staticClass:"nav"},[i("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[i("span",[t._v("×")])]),i("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[i("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev","data-v-2a183b29":""},slot:"button-prev"})]),i("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[i("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):t._e(),t.caption&&t.images[t.currentImage].caption?i("p",[t._v(t._s(t.images[t.currentImage].caption))]):t._e()])]):t._e()])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},n58O:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Bok+"),o=i("fwDc"),n=i("VU/8")(a.a,o.a,!1,null,null,null);n.options.__file="pages/stories/pierpaolofernando.vue",e.default=n.exports},pLMs:function(t,e,i){"use strict";var a=i("UODa"),o=i("limt"),n=!1;var r=function(t){n||i("2oeh")},s=i("VU/8")(a.a,o.a,!1,r,"data-v-d3662260",null);s.options.__file="components/Lightbox.vue",e.a=s.exports},qyJz:function(t,e,i){"use strict";var a=i("+ZMJ"),o=i("kM2E"),n=i("sB3e"),r=i("msXi"),s=i("Mhyx"),l=i("QRG4"),c=i("fBQ2"),d=i("3fs2");o(o.S+o.F*!i("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,o,p,u=n(t),h="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,f=void 0!==v,m=0,b=d(u);if(f&&(v=a(v,g>2?arguments[2]:void 0,2)),void 0==b||h==Array&&s(b))for(i=new h(e=l(u.length));e>m;m++)c(i,m,f?v(u[m],m):u[m]);else for(p=b.call(u),i=new h;!(o=p.next()).done;m++)c(i,m,f?r(p,v,[o.value,m],!0):o.value);return i.length=m,i}})},tJgb:function(t,e,i){"use strict";var a=i("zJod"),o=i("KaXL"),n=i("VU/8")(a.a,o.a,!1,null,null,null);n.options.__file="components/Story.vue",e.a=n.exports},zJod:function(t,e,i){"use strict";var a=i("c/Tr"),o=i.n(a),n=i("J3bR"),r=i.n(n),s=i("pLMs");e.a={props:["title","description","type","basePath","imageCount","video"],components:{Lightbox:s.a},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:this.type}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}},data:function(){var t=this;return{url:"https://www.giadajoeycazzola.com/"+this.basePath+"/",image:"https://www.giadajoeycazzola.com/images/"+this.basePath+"/01.jpg",images:o()(Array(this.imageCount).keys()).map(function(e){return{id:e+1,src:"/images/"+t.basePath+"/"+r()(e+1)+".jpg"}})}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach(function(t){return t.src=t.src.replace(/\/mobile\//g,"/")})}}}});