(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{158:function(t,e,r){var content=r(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("6f7c5256",content,!0,{sourceMap:!1})},159:function(t,e){var r=function(t,e,o){for(e||(e=r._amount),o||(o=r._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=o+t;return t};r._amount=2,r._character="0",r.amount=function(t){return t?(r._amount=t,r):r._amount},r.character=function(t){return t?(r._character=t,r):r._character},t.exports=r},160:function(t,e,r){"use strict";var o=r(158);r.n(o).a},161:function(t,e,r){(e=r(32)(!1)).push([t.i,".vue-lightbox ul[data-v-1b79ab0b]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-1b79ab0b]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-1b79ab0b]{display:block;width:182px}.lightbox-overlay[data-v-1b79ab0b]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;box-sizing:border-box;z-index:31}.lightbox-overlay .holder[data-v-1b79ab0b]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-1b79ab0b]{width:100%;max-width:600px;cursor:pointer;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-1b79ab0b]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-1b79ab0b]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-1b79ab0b]{color:#fff!important;opacity:.3;-webkit-user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-1b79ab0b]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-1b79ab0b],.lightbox-overlay .holder .nav .prev[data-v-1b79ab0b]{position:absolute;top:120px;bottom:120px;padding:10px;width:20%;box-sizing:border-box;font-size:40px;display:flex;align-items:center}.lightbox-overlay .holder .nav .next[data-v-1b79ab0b]{right:0;justify-content:flex-end}.lightbox-overlay .holder .nav .prev[data-v-1b79ab0b]{left:0;justify-content:flex-start}.lightbox-overlay .holder .nav .close[data-v-1b79ab0b]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1;position:absolute;text-align:left;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-1b79ab0b]:hover{opacity:1}",""]),t.exports=e},162:function(t,e,r){"use strict";var o={props:{resetstyles:{default:!1,type:Boolean},title:{type:String},images:{type:Array},loop:{default:!0,type:Boolean},nav:{default:!0,type:Boolean},caption:{deftault:!0,type:Boolean}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},n=(r(160),r(14)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?r("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.images?r("ul",t._l(t.images,(function(image,e){return r("li",{key:image.src},[r("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(r){return t.clickImage(e)}}})])})),0):t._e(),t._v(" "),t.overlayActive?r("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay(e)}}},[r("div",{staticClass:"holder"},[t.images[t.currentImage].thumb?r("div",{staticStyle:{padding:"56.25% 0 0 0"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():r("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.nav?r("div",{staticClass:"nav"},[r("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[r("span",[t._v("×")])]),t._v(" "),r("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[r("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev","data-v-2a183b29":""},slot:"button-prev"})]),t._v(" "),r("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[r("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):t._e(),t._v(" "),t.caption&&t.images[t.currentImage].caption?r("p",[t._v("\n        "+t._s(t.images[t.currentImage].caption)+"\n      ")]):t._e()])]):t._e()])}),[],!1,null,"1b79ab0b",null);e.a=component.exports},163:function(t,e,r){"use strict";var o=r(4),n=r(17),l=r(21),c=r(105),h=r(61),v=r(9),d=r(46).f,m=r(62).f,f=r(8).f,x=r(164).trim,_=o.Number,y=_,w=_.prototype,I="Number"==l(r(76)(w)),k="trim"in String.prototype,C=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var r,o,n,l=(e=k?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+e}for(var code,c=e.slice(2),i=0,v=c.length;i<v;i++)if((code=c.charCodeAt(i))<48||code>n)return NaN;return parseInt(c,o)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(I?v((function(){w.valueOf.call(r)})):"Number"!=l(r))?c(new y(C(e)),r,_):C(e)};for(var N,z=r(7)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;z.length>E;E++)n(y,N=z[E])&&!n(_,N)&&f(_,N,m(y,N));_.prototype=w,w.constructor=_,r(10)(o,"Number",_)}},164:function(t,e,r){var o=r(6),n=r(22),l=r(9),c=r(165),h="["+c+"]",v=RegExp("^"+h+h+"*"),d=RegExp(h+h+"*$"),m=function(t,e,r){var n={},h=l((function(){return!!c[t]()||"​"!="​"[t]()})),v=n[t]=h?e(f):c[t];r&&(n[r]=v),o(o.P+o.F*h,"String",n)},f=m.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},165:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},166:function(t,e,r){"use strict";r(75),r(20),r(12),r(45),r(44),r(163);var o=r(159),n=r.n(o),l={components:{Lightbox:r(162).a},props:{title:String,basePath:String,imageCount:Number,video:String},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(n()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=r(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?r("section",{staticClass:"content has-text-centered"},[r("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[r("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),r("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.a=component.exports},188:function(t,e,r){"use strict";r.r(e);var o=r(166),n="stories/elisajacopo/mobile",l={components:{Story:o.a},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}},data:function(){return{title:"Elisa & Jacopo",description:"Cose da fare almeno una volta nella vita: perdersi tra le vie di Trastevere, proseguire verso piazza San Pietro e respirare bellezza.",image:"https://www.giadajoeycazzola.com/images/".concat(n,"/31.jpg"),url:"https://www.giadajoeycazzola.com/".concat(n.replace(/\/mobile/g,""),"/"),basePath:n,imageCount:41}}},c=r(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("story",{attrs:{title:t.title,description:t.description,type:t.type,"base-path":t.basePath,"image-count":t.imageCount}},[r("p",{staticClass:"is-size-7"},[t._v("\n    floral designer:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://carolinacarbone.it/",target:"_blank"}},[t._v("Carolina Carbone")]),t._v(" "),r("br"),t._v("dress:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://linktr.ee/moreabitidasposa",target:"_blank"}},[t._v("MORE")]),t._v(" "),r("br"),t._v("atelier:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.merrymeroma.com/",target:"_blank"}},[t._v("Merry Me Roma")]),t._v(" "),r("br"),t._v("hair accessory:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.guineverevines.com/",target:"_blank"}},[t._v("Guinevere Vines")]),t._v(" "),r("br"),t._v("makeup artist:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.divasmakeup.it/",target:"_blank"}},[t._v("DivaS' MakeUp")]),t._v(" "),r("br"),t._v("shoes:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.annielshop.com/",target:"_blank"}},[t._v("Anniel")]),t._v(" "),r("br"),t._v("video:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.913art.com/",target:"_blank"}},[t._v("913Art")]),t._v(" "),r("br"),t._v("model:\n    "),r("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.instagram.com/elisaablasi/",target:"_blank"}},[t._v("Elisa Blasi")])])])}),[],!1,null,null,null);e.default=component.exports}}]);