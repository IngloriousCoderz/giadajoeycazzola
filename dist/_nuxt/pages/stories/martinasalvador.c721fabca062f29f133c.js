webpackJsonp([0],{"2lur":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container"},[a("lightbox",{attrs:{title:t.title,images:t.images}})],1)},o=[],r={render:i,staticRenderFns:o};e.a=r},"5oXT":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("h4+t"),o=a("2lur"),r=a("K60R"),n=r(i.a,o.a,!1,null,null,null);e.default=n.exports},"5zde":function(t,e,a){a("zQR9"),a("qyJz"),t.exports=a("FeBl").Array.from},M4vT:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?a("h1",[t._v(t._s(t.title))]):t._e(),a("ul",t._l(t.images,function(e,i){return a("li",[a("img",{attrs:{src:e.src,alt:e.caption},on:{click:function(e){t.clickImage(i)}}})])})),t.overlayActive?a("div",{staticClass:"lightbox-overlay",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.closeOverlay(e)}}},[a("div",{staticClass:"holder"},[a("img",{attrs:{src:t.images[t.currentImage].src}}),t.nav?a("div",{staticClass:"nav"},[a("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[a("span",[t._v("×")])]),a("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[a("span",[t._v("←")])]),a("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[a("span",[t._v("→")])])]):t._e(),t.caption&&t.images[t.currentImage].caption?a("p",[t._v(t._s(t.images[t.currentImage].caption))]):t._e()])]):t._e()])},o=[],r={render:i,staticRenderFns:o};e.a=r},QTrb:function(t,e,a){var i=a("sq03");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("7a7ee7fe",i,!0)},UmD5:function(t,e,a){"use strict";e.a={props:{resetstyles:{default:!1,type:Boolean},title:{type:String},images:{type:Array},loop:{default:!0,type:Boolean},nav:{default:!0,type:Boolean},caption:{deftault:!0,type:Boolean}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",function(e){return t.handleGlobalKeyDown(e)})},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}}},"c/Tr":function(t,e,a){t.exports={default:a("5zde"),__esModule:!0}},fBQ2:function(t,e,a){"use strict";var i=a("evD5"),o=a("X8DO");t.exports=function(t,e,a){e in t?i.f(t,e,o(0,a)):t[e]=a}},"h4+t":function(t,e,a){"use strict";var i=a("c/Tr"),o=a.n(i),r=a("J3bR"),n=a.n(r),l=a("pLMs");e.a={scrollToTop:!0,components:{Lightbox:l.a},head:function(){return{title:"Martina & Salvador",meta:[{hid:"description",name:"description",content:"Magico matrimonio tra i vigneti dell'astigiano. Panorama mozzafiato e allestimenti suggestivi fanno da cornice all'amore di Martina e Salvador."}]}},data:function(){return{title:"Martina & Salvador",images:o()(Array(92).keys()).map(function(t){return{id:t+1,src:"/images/stories/martinasalvador/"+n()(t+1)+".jpg"}})}}}},pLMs:function(t,e,a){"use strict";function i(t){a("QTrb")}var o=a("UmD5"),r=a("M4vT"),n=a("K60R"),l=i,s=n(o.a,r.a,!1,l,"data-v-4186bd6e",null);e.a=s.exports},qyJz:function(t,e,a){"use strict";var i=a("+ZMJ"),o=a("kM2E"),r=a("sB3e"),n=a("msXi"),l=a("Mhyx"),s=a("QRG4"),c=a("fBQ2"),d=a("3fs2");o(o.S+o.F*!a("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,o,v,g=r(t),u="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,p=void 0!==h,x=0,f=d(g);if(p&&(h=i(h,b>2?arguments[2]:void 0,2)),void 0==f||u==Array&&l(f))for(e=s(g.length),a=new u(e);e>x;x++)c(a,x,p?h(g[x],x):g[x]);else for(v=f.call(g),a=new u;!(o=v.next()).done;x++)c(a,x,p?n(v,h,[o.value,x],!0):o.value);return a.length=x,a}})},sq03:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".vue-lightbox ul[data-v-4186bd6e]{list-style:none;margin:0 auto;padding:0;display:block;max-width:780px;text-align:center}.vue-lightbox ul li[data-v-4186bd6e]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-4186bd6e]{display:block;width:200px}.lightbox-overlay[data-v-4186bd6e]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.lightbox-overlay .holder[data-v-4186bd6e]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-4186bd6e]{width:100%;max-width:600px;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-4186bd6e]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-4186bd6e]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-4186bd6e]{color:#fff;opacity:.3;-webkit-user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-4186bd6e]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-4186bd6e],.lightbox-overlay .holder .nav .prev[data-v-4186bd6e]{position:absolute;top:0;bottom:0;padding:10px;width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:40px}.lightbox-overlay .holder .nav .next span[data-v-4186bd6e],.lightbox-overlay .holder .nav .prev span[data-v-4186bd6e]{top:50%;-webkit-transform:translateY(50%);transform:translateY(50%);position:relative}.lightbox-overlay .holder .nav .next[data-v-4186bd6e]{right:0;text-align:right}.lightbox-overlay .holder .nav .prev[data-v-4186bd6e]{left:0;text-align:left}.lightbox-overlay .holder .nav .close[data-v-4186bd6e]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1000000;position:absolute;text-align:left;-webkit-box-sizing:border-box;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-4186bd6e]:hover{opacity:1}",""])}});
//# sourceMappingURL=martinasalvador.c721fabca062f29f133c.js.map