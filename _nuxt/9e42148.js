(window.webpackJsonp=window.webpackJsonp||[]).push([[37,3,5],{305:function(e,t,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(95).default)("3954a8d2",content,!0,{sourceMap:!1})},306:function(e,t,n){"use strict";n.r(t);n(315);var o={components:{VueMasonryWall:n(316).a},props:{resetstyles:{type:Boolean,default:!1},title:{type:String,default:""},images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},caption:{type:Boolean,default:!0}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var e=this;window.addEventListener("keydown",(function(t){return e.handleGlobalKeyDown(t)}))},methods:{clickImage:function(image){this.currentImage=this.images.findIndex((function(e){return e.src===image.src})),this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(e){switch(e.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},r=(n(309),n(52)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:{"vue-lightbox":!e.resetstyles}},[e.title?t("h1",[e._v("\n    "+e._s(e.title)+"\n  ")]):e._e(),e._v(" "),t("vue-masonry-wall",{attrs:{items:e.images,options:{width:600,padding:12}},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.item;return[t("img",{attrs:{src:o.thumb||o.src,alt:o.caption},on:{click:function(t){return e.clickImage(o)}}})]}}])}),e._v(" "),e.overlayActive?t("div",{staticClass:"lightbox-overlay",on:{click:function(t){return t.target!==t.currentTarget?null:e.closeOverlay.apply(null,arguments)}}},[t("a",{staticClass:"close",attrs:{nohref:""},on:{click:e.closeOverlay}},[e._v(" × ")]),e._v(" "),t("div",{staticClass:"content"},[t("a",{staticClass:"prev",attrs:{nohref:""},on:{click:e.prevImage}},[t("div",{staticClass:"swiper-button-prev swiper-button-white"})]),e._v(" "),t("div",{staticClass:"main"},[e.images[e.currentImage].thumb?t("div",[t("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},attrs:{src:e.images[e.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):e._e(),e._v(" "),e.images[e.currentImage].thumb?e._e():t("img",{attrs:{src:e.images[e.currentImage].src}}),e._v(" "),e.caption&&e.images[e.currentImage].caption?t("p",[e._v("\n          "+e._s(e.images[e.currentImage].caption)+"\n        ")]):e._e()]),e._v(" "),t("a",{staticClass:"next",attrs:{nohref:""},on:{click:e.nextImage}},[t("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])])]):e._e()],1)}),[],!1,null,"79882314",null);t.default=component.exports},307:function(e,t,n){"use strict";n.r(t);n(311),n(47),n(39),n(29),n(13),n(30),n(53),n(33),n(25),n(76);var o=n(308),r=n.n(o),l={components:{Lightbox:n(306).default},props:{title:{type:String,default:""},basePath:{type:String,default:""},imageCount:{type:Number,default:0},type:{type:String,default:"jpg"},video:{type:String,default:""}},data:function(){var e=this;return{images:Array.from(Array(this.imageCount).keys()).map((function(t){return{id:t+1,src:"/images/".concat(e.basePath,"/").concat(r()(t+1),".").concat(e.type)}}))}},mounted:function(){window.matchMedia("(min-width: 1024px)").matches&&this.images.forEach((function(image){return image.src=image.src.replace(/\/mobile/g,"")}))}},c=n(52),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"container is-fluid"},[t("h1",{staticClass:"is-size-1 has-text-centered"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),t("section",{staticClass:"content has-text-centered-mobile"},[e._t("default")],2),e._v(" "),e.video?t("section",{staticClass:"content has-text-centered"},[t("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[t("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:e.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):e._e(),e._v(" "),t("lightbox",{attrs:{images:e.images,type:e.type}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Lightbox:n(306).default})},308:function(e,t){var n=function(e,t,o){for(t||(t=n._amount),o||(o=n._character),t<1&&(t=1),t-=(e=""+e).length;t-- >0;)e=o+e;return e};n._amount=2,n._character="0",n.amount=function(e){return e?(n._amount=e,n):n._amount},n.character=function(e){return e?(n._character=e,n):n._character},e.exports=n},309:function(e,t,n){"use strict";n(305)},310:function(e,t,n){var o=n(94)(!1);o.push([e.i,".vue-lightbox ul[data-v-79882314]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-79882314]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-79882314]{display:block;width:160px;cursor:pointer}.lightbox-overlay[data-v-79882314]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.9);z-index:31;display:flex;flex-direction:column}.lightbox-overlay .close[data-v-79882314],.lightbox-overlay .next[data-v-79882314],.lightbox-overlay .prev[data-v-79882314]{z-index:1;color:#fff!important;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4rem;height:4rem;opacity:.6;display:flex;justify-content:center;align-items:center}.lightbox-overlay .close[data-v-79882314]:hover,.lightbox-overlay .next[data-v-79882314]:hover,.lightbox-overlay .prev[data-v-79882314]:hover{opacity:1}.lightbox-overlay .close[data-v-79882314]{align-self:flex-end;font-size:4rem}.lightbox-overlay .content[data-v-79882314]{flex-grow:1;display:flex}.lightbox-overlay .next[data-v-79882314],.lightbox-overlay .prev[data-v-79882314]{align-self:center}.lightbox-overlay .next>div[data-v-79882314],.lightbox-overlay .prev>div[data-v-79882314]{position:static}.lightbox-overlay .main[data-v-79882314]{flex-grow:1;display:flex;justify-content:center;align-items:center}.lightbox-overlay .main>*[data-v-79882314]{position:absolute;max-height:calc(100vh - 4rem)}.lightbox-overlay .main>div[data-v-79882314]{width:100%;height:100%}",""]),e.exports=o},311:function(e,t,n){"use strict";var o=n(12),r=n(7),l=n(6),c=n(97),d=n(21),h=n(14),m=n(156),f=n(59),v=n(96),y=n(208),x=n(3),w=n(77).f,_=n(54).f,I=n(18).f,k=n(312),S=n(313).trim,C="Number",z=r.Number,A=z.prototype,N=r.TypeError,E=l("".slice),O=l("".charCodeAt),T=function(e){var t=y(e,"number");return"bigint"==typeof t?t:M(t)},M=function(e){var t,n,o,r,l,c,d,code,h=y(e,"number");if(v(h))throw N("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=S(h),43===(t=O(h,0))||45===t){if(88===(n=O(h,2))||120===n)return NaN}else if(48===t){switch(O(h,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(c=(l=E(h,2)).length,d=0;d<c;d++)if((code=O(l,d))<48||code>r)return NaN;return parseInt(l,o)}return+h};if(c(C,!z(" 0o1")||!z("0b1")||z("+0x1"))){for(var D,j=function(e){var t=arguments.length<1?0:z(T(e)),n=this;return f(A,n)&&x((function(){k(n)}))?m(Object(t),n,j):t},F=o?w(z):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;F.length>L;L++)h(z,D=F[L])&&!h(j,D)&&I(j,D,_(z,D));j.prototype=A,A.constructor=j,d(r,C,j,{constructor:!0})}},312:function(e,t,n){var o=n(6);e.exports=o(1..valueOf)},313:function(e,t,n){var o=n(6),r=n(34),l=n(16),c=n(314),d=o("".replace),h="["+c+"]",m=RegExp("^"+h+h+"*"),f=RegExp(h+h+"*$"),v=function(e){return function(t){var n=l(r(t));return 1&e&&(n=d(n,m,"")),2&e&&(n=d(n,f,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},314:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},359:function(e,t,n){"use strict";n.r(t);n(25),n(76),n(28),n(38);var o=n(307),r="stories/sunheederek/mobile",l={components:{Story:o.default},data:function(){return{title:"Sunhee & Derek",description:{en:"What's the biggest craziest thing you've ever done? Make a marriage proposal and, in less than 24 hours, take a plane and fly from Texas to the Dolomites for a romantic elopement and to celebrate your love in a small mountain chapel!",it:"Qual è la pazzia più grande che tu abbia mai fatto? Fare una proposta di matrimonio e, in meno di 24 ore, prendere un aereo e volare dal Texas alle Dolomiti per una romantica fuga d'amore e per celebrare in una piccola cappella di montagna le proprie nozze!"},body:{en:'<p>"Hi Giada, we are leaving from Texas and the day after tomorrow we will be in the Dolomites\nto get married! ALONE!"</p>\n<p>This was the message I got from Sunhee and Derek!</p>\n<p>Shocked and excited, I immediately gave my availability and ran to Alta Badia, near Ortisei.</p>\n<p>The intimate and delicate ceremony, their sincere and unsettling tears, the hands that\nintertwined like those of two actors in a classic film made me fall in love with this couple.</p>\n<p>After the ceremony celebrated in a chapel inside the Freudenstein Castle, we headed to\nOrtisei to take the helicopter that took us on a tour of the marvelous mountain range whose\nbeating heart is Monte Seceda.</p>\n<p>Flying in a helicopter is fantastic, it was my first time and I was very excited but I couldn\'t\nstop taking pictures! We had a privileged view over the whole valley, it felt like we could\ntouch the mountains with a finger! I thank Elikos for the professionalism with which he\naccompanied us.</p>\n<p>And here is the Seceda, who was looking at us and waiting for us!</p>\n<p>We landed right there, next to Baita Sofie, the restaurant at the highest point of Val Gardena\nand started a wonderful couple photo session, accompanied by a champagne toast at 2500\nmeters! What unforgettable moments.</p>\n<p>I always thank my work for making me live similar experiences.</p>',it:"<p>\"Ciao Giada, noi stiamo partendo dal Texas e dopodomani saremo sulle Dolomiti per\nsposarci! DA SOLI!\"</p>\n<p>Questo è stato il messaggio che ho ricevuto da Sunhee e Derek!</p>\n<p>Io sconvolta ed eccitata, ho subito dato la mia disponibilità e sono corsa in Alta Badia, vicino\nad Ortisei.</p>\n<p>La cerimonia intima e delicata, le loro lacrime sincere e spiazzanti, le mani che si\nintrecciavano come quelle di due attori in un classico del cinema mi hanno fatto innamorare\ndi questa coppia.</p>\n<p>Dopo la cerimonia celebrata in una cappella all'interno del Castello Freudenstein, ci siamo\ndiretti a Ortisei per prendere l'elicottero che ci ha fatto fare un giro sulla meravigliosa catena\nmontuosa che ha come cuore pulsante il Monte Seceda.</p>\n<p>Volare in elicottero è fantastico, per me era la prima volta ed ero molto emozionata ma non\nriuscivo a smettere di scattare fotografie! Avevamo una vista privilegiata su tutta la valle,\nsembrava di poter toccare le montagne con un dito! Ringrazio Elikos per la professionalità\ncon cui ci ha accompagnati.</p>\n<p>Ed ecco il Seceda, che imponente ci osservava e ci aspettava!</p>\n<p>Siamo atterrati proprio lì, accanto alla Baita Sofie, il ristorante nel punto più alto della Val\nGardena e abbiamo iniziato una magnifica sessione fotografica di coppia, accompagnata da\nun brindisi con champagne a 2500 metri! Che momenti indimenticabili.</p>\n<p>Ringrazio sempre il mio lavoro per farmi vivere esperienze simili.</p>"},image:"https://giadajoeycazzola.com/images/".concat(r,"/49.jpg"),url:"https://giadajoeycazzola.com/".concat(r.replace(/\/mobile/g,""),"/"),basePath:r,imageCount:69}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description[this.$i18n.locale]},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description[this.$i18n.locale]},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}}},c=n(52),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("story",{attrs:{title:e.title,"base-path":e.basePath,"image-count":e.imageCount}},[t("div",{domProps:{innerHTML:e._s(e.body[e.$i18n.locale])}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Story:n(307).default})}}]);