(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,4],{256:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("027ed504",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n.r(e);var r={props:{resetstyles:{default:!1,type:Boolean},title:{type:String},images:{type:Array},loop:{default:!0,type:Boolean},nav:{default:!0,type:Boolean},caption:{deftault:!0,type:Boolean}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){return t.handleGlobalKeyDown(e)}))},methods:{clickImage:function(t){this.currentImage=t,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(t){switch(t.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},o=(n(260),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"vue-lightbox":!t.resetstyles}},[t.title?n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.images?n("ul",t._l(t.images,(function(image,e){return n("li",{key:image.src},[n("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(n){return t.clickImage(e)}}})])})),0):t._e(),t._v(" "),t.overlayActive?n("div",{staticClass:"lightbox-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeOverlay.apply(null,arguments)}}},[n("div",{staticClass:"holder"},[t.images[t.currentImage].thumb?n("div",{staticStyle:{padding:"56.25% 0 0 0"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.images[t.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):t._e(),t._v(" "),t.images[t.currentImage].thumb?t._e():n("img",{attrs:{src:t.images[t.currentImage].src}}),t._v(" "),t.nav?n("div",{staticClass:"nav"},[n("a",{staticClass:"close",attrs:{nohref:""},on:{click:t.closeOverlay}},[n("span",[t._v("×")])]),t._v(" "),n("a",{staticClass:"prev",attrs:{nohref:""},on:{click:t.prevImage}},[n("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev","data-v-2a183b29":""},slot:"button-prev"})]),t._v(" "),n("a",{staticClass:"next",attrs:{nohref:""},on:{click:t.nextImage}},[n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):t._e(),t._v(" "),t.caption&&t.images[t.currentImage].caption?n("p",[t._v("\n        "+t._s(t.images[t.currentImage].caption)+"\n      ")]):t._e()])]):t._e()])}),[],!1,null,"1b79ab0b",null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);n(262),n(43),n(42),n(21),n(12),n(26),n(53),n(29),n(35),n(63);var r=n(259),o=n.n(r),l={components:{Lightbox:n(257).default},props:{title:String,basePath:String,imageCount:Number,video:String},data:function(){var t=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(e){return{id:e+1,src:"/images/".concat(t.basePath,"/").concat(o()(e+1),".jpg")}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=n(48),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("section",{staticClass:"content has-text-centered-mobile"},[t._t("default")],2),t._v(" "),t.video?n("section",{staticClass:"content has-text-centered"},[n("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),n("lightbox",{attrs:{images:t.images}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Lightbox:n(257).default})},259:function(t,e){var n=function(t,e,r){for(e||(e=n._amount),r||(r=n._character),e<1&&(e=1),e-=(t=""+t).length;e-- >0;)t=r+t;return t};n._amount=2,n._character="0",n.amount=function(t){return t?(n._amount=t,n):n._amount},n.character=function(t){return t?(n._character=t,n):n._character},t.exports=n},260:function(t,e,n){"use strict";n(256)},261:function(t,e,n){var r=n(64)(!1);r.push([t.i,".vue-lightbox ul[data-v-1b79ab0b]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-1b79ab0b]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-1b79ab0b]{display:block;width:182px}.lightbox-overlay[data-v-1b79ab0b]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;box-sizing:border-box;z-index:31}.lightbox-overlay .holder[data-v-1b79ab0b]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-1b79ab0b]{width:100%;max-width:600px;cursor:pointer;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-1b79ab0b]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-1b79ab0b]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-1b79ab0b]{color:#fff!important;opacity:.3;-webkit-user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-1b79ab0b]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-1b79ab0b],.lightbox-overlay .holder .nav .prev[data-v-1b79ab0b]{position:absolute;top:120px;bottom:120px;padding:10px;width:20%;box-sizing:border-box;font-size:40px;display:flex;align-items:center}.lightbox-overlay .holder .nav .next[data-v-1b79ab0b]{right:0;justify-content:flex-end}.lightbox-overlay .holder .nav .prev[data-v-1b79ab0b]{left:0;justify-content:flex-start}.lightbox-overlay .holder .nav .close[data-v-1b79ab0b]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1;position:absolute;text-align:left;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-1b79ab0b]:hover{opacity:1}",""]),t.exports=r},262:function(t,e,n){"use strict";var r=n(14),o=n(5),l=n(81),c=n(22),h=n(16),d=n(57),v=n(136),f=n(80),m=n(180),x=n(6),w=n(54),y=n(66).f,_=n(49).f,I=n(18).f,k=n(263).trim,C="Number",A=o.Number,E=A.prototype,N=d(w(E))==C,z=function(t){if(f(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,l,c,h,code,d=m(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,h=0;h<c;h++)if((code=l.charCodeAt(h))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(l(C,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var S,M=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof M&&(N?x((function(){E.valueOf.call(n)})):d(n)!=C)?v(new A(z(e)),n,M):z(e)},O=r?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;O.length>j;j++)h(A,S=O[j])&&!h(M,S)&&I(M,S,_(A,S));M.prototype=E,E.constructor=M,c(o,C,M)}},263:function(t,e,n){var r=n(30),o=n(13),l="["+n(264)+"]",c=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),d=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(h,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},264:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},283:function(t,e,n){"use strict";n.r(e);n(35),n(63),n(17),n(41);var r=n(258),o="stories/annamatteo/mobile",l={components:{Story:r.default},data:function(){return{title:"Anna & Matteo",description:{en:"A fiveteenth-century residence on the outskirts of Milan. A very sweet couple and authentic emotions.",it:"Una dimora cinquecentesca a due passi da Milano, una coppia dolcissima e tante emozioni autentiche. Cosa volere di più?"},image:"https://www.giadajoeycazzola.com/images/".concat(o,"/39.jpg"),url:"https://www.giadajoeycazzola.com/".concat(o.replace(/\/mobile/g,""),"/"),basePath:o,imageCount:99}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description[this.$i18n.locale]},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description[this.$i18n.locale]},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}}},c=n(48),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("story",{attrs:{title:t.title,"base-path":t.basePath,"image-count":t.imageCount}},[n("p",{staticClass:"is-size-7"},[t._v("\n    location:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.villascheibler.it/",target:"_blank"}},[t._v("Villa Scheibler")]),n("br"),t._v("\n    dress:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.pronovias.com/it/abiti-sposa-milano",target:"_blank"}},[t._v("Pronovias Milano")]),n("br"),t._v("\n    catering:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.topparties.it/",target:"_blank"}},[t._v("Top Parties")]),n("br"),t._v("\n    floral designer:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.fagnanifiori.it/",target:"_blank"}},[t._v("Fagnani Fiori")]),n("br"),t._v("\n    accessories:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://stylishbrideaccs.com/",target:"_blank"}},[t._v("Stylish bride accs")]),n("br"),t._v("\n    entertainment:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.instagram.com/ondasonora_events/",target:"_blank"}},[t._v("Ondasonora Events")]),n("br"),t._v("\n    makeup artist:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.instagram.com/lbs.anna/",target:"_blank"}},[t._v("Anna Poliakova")]),n("br"),t._v("\n    jewelry:\n    "),n("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.oreficeriamollica.it/",target:"_blank"}},[t._v("Oreficeria Mollica")]),n("br")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Story:n(258).default})}}]);