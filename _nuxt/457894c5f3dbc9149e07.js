(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(t,e,n){var content=n(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("6f7c5256",content,!0,{sourceMap:!1})},159:function(t,e){var n=function(t,e,o){for(e||(e=n._amount),o||(o=n._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=o+t;return t};n._amount=2,n._character="0",n.amount=function(t){return t?(n._amount=t,n):n._amount},n.character=function(t){return t?(n._character=t,n):n._character},t.exports=n},160:function(t,e,n){"use strict";var o=n(158);n.n(o).a},161:function(t,e,n){(e=n(32)(!1)).push([t.i,".vue-lightbox ul[data-v-1b79ab0b]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-1b79ab0b]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-1b79ab0b]{display:block;width:182px}.lightbox-overlay[data-v-1b79ab0b]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;box-sizing:border-box;z-index:31}.lightbox-overlay .holder[data-v-1b79ab0b]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-1b79ab0b]{width:100%;max-width:600px;cursor:pointer;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-1b79ab0b]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-1b79ab0b]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-1b79ab0b]{color:#fff!important;opacity:.3;-webkit-user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-1b79ab0b]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-1b79ab0b],.lightbox-overlay .holder .nav .prev[data-v-1b79ab0b]{position:absolute;top:120px;bottom:120px;padding:10px;width:20%;box-sizing:border-box;font-size:40px;display:flex;align-items:center}.lightbox-overlay .holder .nav .next[data-v-1b79ab0b]{right:0;justify-content:flex-end}.lightbox-overlay .holder .nav .prev[data-v-1b79ab0b]{left:0;justify-content:flex-start}.lightbox-overlay .holder .nav .close[data-v-1b79ab0b]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1;position:absolute;text-align:left;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-1b79ab0b]:hover{opacity:1}",""]),t.exports=e},162:function(t,e,n){"use strict";var o={props:{resetstyles:{default:!1,type:Boolean},title:{type:String},images:{type:Array},loop:{default:!0,type:Boolean},nav:{default:!0,type:Boolean},caption:{deftault:!0,type:Boolean}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},r=(n(160),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.images?n("ul",t._l(t.images,(function(image,e){return n("li",{key:image.src},[n("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(n){return t.clickImage(e)}}})])})),0):t._e(),t._v(" "),t.overlayActive?n("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay(e)}}},[n("div",{staticClass:"holder"},[t.images[t.currentImage].thumb?n("div",{staticStyle:{padding:"56.25% 0 0 0"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():n("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.nav?n("div",{staticClass:"nav"},[n("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[n("span",[t._v("×")])]),t._v(" "),n("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[n("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev","data-v-2a183b29":""},slot:"button-prev"})]),t._v(" "),n("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):t._e(),t._v(" "),t.caption&&t.images[t.currentImage].caption?n("p",[t._v("\n        "+t._s(t.images[t.currentImage].caption)+"\n      ")]):t._e()])]):t._e()])}),[],!1,null,"1b79ab0b",null);e.a=component.exports},163:function(t,e,n){"use strict";var o=n(4),r=n(17),l=n(21),c=n(105),h=n(61),d=n(9),v=n(46).f,m=n(62).f,f=n(8).f,x=n(164).trim,y=o.Number,w=y,_=y.prototype,I="Number"==l(n(76)(_)),k="trim"in String.prototype,C=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,l=(e=k?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(I?d((function(){_.valueOf.call(n)})):"Number"!=l(n))?c(new w(C(e)),n,y):C(e)};for(var z,N=n(7)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;N.length>E;E++)r(w,z=N[E])&&!r(y,z)&&f(y,z,m(w,z));y.prototype=_,_.constructor=y,n(10)(o,"Number",y)}},164:function(t,e,n){var o=n(6),r=n(22),l=n(9),c=n(165),h="["+c+"]",d=RegExp("^"+h+h+"*"),v=RegExp(h+h+"*$"),m=function(t,e,n){var r={},h=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=r[t]=h?e(f):c[t];n&&(r[n]=d),o(o.P+o.F*h,"String",r)},f=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},165:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},166:function(t,e,n){"use strict";n(75),n(20),n(12),n(45),n(44),n(163);var o=n(159),r=n.n(o),l={components:{Lightbox:n(162).a},props:{title:String,basePath:String,imageCount:Number,video:String},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(r()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=n(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?n("section",{staticClass:"content has-text-centered"},[n("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),n("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.a=component.exports},191:function(t,e,n){"use strict";n.r(e);var o=n(166),r="stories/vittorialuigi",l={components:{Story:o.a},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}},data:function(){return{title:"Vittoria & Luigi",description:"La bellezza e l’eleganza di questa coppia ha reso senza dubbio questo matrimonio una vera favola. Vittoria e Luigi, questa è la loro storia. Le parole non servono, lascio parlare le immagini.",image:"https://www.giadajoeycazzola.com/images/".concat(r,"/01.jpg"),url:"https://www.giadajoeycazzola.com/".concat(r.replace(/\/mobile/g,""),"/"),basePath:r,imageCount:99}}},c=n(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("story",{attrs:{title:t.title,description:t.description,type:t.type,"base-path":t.basePath,"image-count":t.imageCount}},[n("p",{staticClass:"is-size-7"},[t._v("\n    location:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.cantineluzi.com/",target:"_blank"}},[t._v("Cantine Luzi Donadei")]),t._v(" "),n("br"),t._v("wedding planner:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.matrimonio.com/wedding-planner/manuela-mantovani-weddings-&-special-events--e167814",target:"_blank"}},[t._v("Manuela Mantovani")]),t._v("\n    &\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.matrimonio.com/wedding-planner/martina-filomena--e167432",target:"_blank"}},[t._v("Martina Filomena")]),t._v(" "),n("br"),t._v("fiori:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.maisondesfleurs.it/",target:"_blank"}},[t._v("Maison des fleurs")]),t._v(" "),n("br"),t._v("abito da sposa:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.matrimonio.com/abiti-da-sposa/stefania-e-le-sue-spose--e152389",target:"_blank"}},[t._v("Stefania e le sue spose")])])])}),[],!1,null,null,null);e.default=component.exports}}]);