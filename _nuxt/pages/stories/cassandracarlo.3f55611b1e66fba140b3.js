webpackJsonp([3],{"2nPS":function(t,e,i){"use strict";var a=i("c/Tr"),o=i.n(a),r=i("J3bR"),n=i.n(r),s=i("pLMs");e.a={props:["title","description","type","basePath","imageCount"],components:{Lightbox:s.a},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:this.type}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}},data:function(){var t=this;return{url:"https://www.giadajoeycazzola.com/"+this.basePath+"/",image:"https://www.giadajoeycazzola.com/images/"+this.basePath+"/01.jpg",images:o()(Array(this.imageCount).keys()).map(function(e){return{id:e+1,src:"/images/"+t.basePath+"/"+n()(e+1)+".jpg"}})}}}},"3zdW":function(t,e,i){"use strict";var a=i("tJgb");e.a={components:{Story:a.a},data:function(){return{title:"Cassandra & Carlo",description:"Amici, amanti e innamoratissimi. Cassandra e Carlo hanno scelto l'atmosfera incantevole che si respira al castello di Oviglio per promettersi amore eterno.",type:"website",basePath:"stories/cassandracarlo",imageCount:73}}}},"5zde":function(t,e,i){i("zQR9"),i("qyJz"),t.exports=i("FeBl").Array.from},KaXL:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("h1",{staticClass:"is-size-1 has-text-centered"},[this._v(this._s(this.title))]),e("section",{staticClass:"has-text-centered-mobile"},[this._t("default")],2),e("lightbox",{attrs:{images:this.images}})],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},OcyS:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".vue-lightbox ul[data-v-d3662260]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-d3662260]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-d3662260]{display:block;width:182px}.lightbox-overlay[data-v-d3662260]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.lightbox-overlay .holder[data-v-d3662260]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-d3662260]{width:100%;max-width:600px;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-d3662260]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-d3662260]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-d3662260]{color:#fff;opacity:.3;-webkit-user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-d3662260]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-d3662260],.lightbox-overlay .holder .nav .prev[data-v-d3662260]{position:absolute;top:0;bottom:0;padding:10px;width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:40px}.lightbox-overlay .holder .nav .next span[data-v-d3662260],.lightbox-overlay .holder .nav .prev span[data-v-d3662260]{top:50%;-webkit-transform:translateY(50%);transform:translateY(50%);position:relative}.lightbox-overlay .holder .nav .next[data-v-d3662260]{right:0;text-align:right}.lightbox-overlay .holder .nav .prev[data-v-d3662260]{left:0;text-align:left}.lightbox-overlay .holder .nav .close[data-v-d3662260]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1000000;position:absolute;text-align:left;-webkit-box-sizing:border-box;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-d3662260]:hover{opacity:1}",""])},TE3J:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("3zdW"),o=i("i8yx"),r=i("VU/8")(a.a,o.a,!1,null,null,null);r.options.__file="pages/stories/cassandracarlo.vue",e.default=r.exports},"c/Tr":function(t,e,i){t.exports={default:i("5zde"),__esModule:!0}},duZh:function(t,e,i){"use strict";e.a={props:{resetstyles:{default:!1,type:Boolean},title:{type:String},images:{type:Array},loop:{default:!0,type:Boolean},nav:{default:!0,type:Boolean},caption:{deftault:!0,type:Boolean}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",function(e){return t.handleGlobalKeyDown(e)})},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}}},fBQ2:function(t,e,i){"use strict";var a=i("evD5"),o=i("X8DO");t.exports=function(t,e,i){e in t?a.f(t,e,o(0,i)):t[e]=i}},i8yx:function(t,e,i){"use strict";var a=function(){var t=this.$createElement;return(this._self._c||t)("story",{attrs:{title:this.title,description:this.description,type:this.type,"base-path":this.basePath,"image-count":this.imageCount}})};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},kCq5:function(t,e,i){var a=i("OcyS");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("7fbdb294",a,!1,{sourceMap:!1})},limt:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?i("h1",[t._v(t._s(t.title))]):t._e(),i("ul",t._l(t.images,function(e,a){return i("li",[i("img",{attrs:{src:e.src,alt:e.caption},on:{click:function(e){t.clickImage(a)}}})])})),t.overlayActive?i("div",{staticClass:"lightbox-overlay",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.closeOverlay(e)}}},[i("div",{staticClass:"holder"},[i("img",{attrs:{src:t.images[t.currentImage].src}}),t.nav?i("div",{staticClass:"nav"},[i("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[i("span",[t._v("×")])]),i("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[i("span",[t._v("←")])]),i("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[i("span",[t._v("→")])])]):t._e(),t.caption&&t.images[t.currentImage].caption?i("p",[t._v(t._s(t.images[t.currentImage].caption))]):t._e()])]):t._e()])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},pLMs:function(t,e,i){"use strict";var a=i("duZh"),o=i("limt"),r=!1;var n=function(t){r||i("kCq5")},s=i("VU/8")(a.a,o.a,!1,n,"data-v-d3662260",null);s.options.__file="components/Lightbox.vue",e.a=s.exports},qyJz:function(t,e,i){"use strict";var a=i("+ZMJ"),o=i("kM2E"),r=i("sB3e"),n=i("msXi"),s=i("Mhyx"),l=i("QRG4"),c=i("fBQ2"),d=i("3fs2");o(o.S+o.F*!i("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,o,h,p=r(t),u="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,b=void 0!==v,f=0,x=d(p);if(b&&(v=a(v,g>2?arguments[2]:void 0,2)),void 0==x||u==Array&&s(x))for(i=new u(e=l(p.length));e>f;f++)c(i,f,b?v(p[f],f):p[f]);else for(h=x.call(p),i=new u;!(o=h.next()).done;f++)c(i,f,b?n(h,v,[o.value,f],!0):o.value);return i.length=f,i}})},tJgb:function(t,e,i){"use strict";var a=i("2nPS"),o=i("KaXL"),r=i("VU/8")(a.a,o.a,!1,null,null,null);r.options.__file="components/Story.vue",e.a=r.exports}});