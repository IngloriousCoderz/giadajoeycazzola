webpackJsonp([6],{"/TYz":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("kEWl"),s=e("rGQh"),o=!1;var n=function(t){o||e("PwSy")},r=e("VU/8")(a.a,s.a,!1,n,"data-v-2a183b29",null);r.options.__file="pages/index.vue",i.default=r.exports},"5zde":function(t,i,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},PwSy:function(t,i,e){var a=e("X/W/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("d3cc7316",a,!1,{sourceMap:!1})},"X/W/":function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".navbar-brand[data-v-2a183b29],.navbar-menu[data-v-2a183b29],.navbar.is-mobile[data-v-2a183b29]{background-color:#504c49}.swiper-container[data-v-2a183b29]{height:100vh;overflow:hidden}@media (max-width:1024px){.swiper-container[data-v-2a183b29]{height:720px}}@media (max-width:768px){.swiper-container[data-v-2a183b29]{height:480px}}@media (max-width:480px){.swiper-container[data-v-2a183b29]{height:240px}}.swiper-slide[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.swiper-slide>.is-overlay.dark[data-v-2a183b29]{background:rgba(0,0,0,.5)}.navbar.level.container[data-v-2a183b29]{position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:1;background:transparent;text-shadow:0 0 .5em #000}",""])},"c/Tr":function(t,i,e){t.exports={default:e("5zde"),__esModule:!0}},fBQ2:function(t,i,e){"use strict";var a=e("evD5"),s=e("X8DO");t.exports=function(t,i,e){i in t?a.f(t,i,s(0,e)):t[i]=e}},kEWl:function(t,i,e){"use strict";var a=e("c/Tr"),s=e.n(a),o=e("J3bR"),n=e.n(o);i.a={layout:"home",head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}},data:function(){return{title:"Giada Joey Cazzola - Fotografa matrimonio Torino",description:"Fotografa di matrimonio a Torino, lago di Como, lago Maggiore, Toscana, Roma, Puglia e in tutta Europa. Specializzata in reportage foto e video spontanei.",url:"https://www.giadajoeycazzola.com/",image:"https://www.giadajoeycazzola.com/images/slides/01.jpg",burgerActive:!1,slides:s()(Array(13).keys()).map(function(t){return{id:t+1,src:"/images/slides/"+n()(t+1)+".jpg"}}),swiperOptions:{loop:!0,speed:3e3,lazy:{loadOnTransitionStart:!0},keyboard:{enabled:!0},autoplay:{delay:3e3,disableOnInteraction:!0}}}},mounted:function(){window.wpShowRatedv2("159658")},methods:{onClickBurger:function(){this.burgerActive=!this.burgerActive},onClickPrev:function(){this.mySwiper.slidePrev(500)},onClickNext:function(){this.mySwiper.slideNext(500)}}}},qyJz:function(t,i,e){"use strict";var a=e("+ZMJ"),s=e("kM2E"),o=e("sB3e"),n=e("msXi"),r=e("Mhyx"),l=e("QRG4"),c=e("fBQ2"),d=e("3fs2");s(s.S+s.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var i,e,s,v,p=o(t),m="function"==typeof this?this:Array,u=arguments.length,h=u>1?arguments[1]:void 0,g=void 0!==h,b=0,f=d(p);if(g&&(h=a(h,u>2?arguments[2]:void 0,2)),void 0==f||m==Array&&r(f))for(e=new m(i=l(p.length));i>b;b++)c(e,b,g?h(p[b],b):p[b]);else for(v=f.call(p),e=new m;!(s=v.next()).done;b++)c(e,b,g?n(v,h,[s.value,b],!0):s.value);return e.length=b,e}})},rGQh:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("nav",{staticClass:"navbar is-hidden-desktop",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[e("nuxt-link",{staticClass:"navbar-item has-text-white",attrs:{to:{name:"index"}}},[e("h2",{staticClass:"has-text-weight-bold is-marginless"},[t._v("GJC")])]),e("button",{staticClass:"button navbar-burger",class:{"is-active":t.burgerActive},on:{click:t.onClickBurger}},[e("span"),e("span"),e("span")])],1),e("div",{staticClass:"navbar-menu",class:{"is-active":t.burgerActive}},[e("nuxt-link",{staticClass:"navbar-item has-text-white",attrs:{to:{name:"index"}}},[t._v("Home")]),e("nuxt-link",{staticClass:"navbar-item has-text-white",attrs:{to:{name:"about"}}},[t._v("About")]),e("nuxt-link",{staticClass:"navbar-item has-text-white",attrs:{to:{name:"portfolio"}}},[t._v("Portfolio")]),e("nuxt-link",{staticClass:"navbar-item has-text-white",attrs:{to:{name:"stories"}}},[t._v("Stories")]),e("nuxt-link",{staticClass:"navbar-item has-text-white",attrs:{to:{name:"blog"}}},[t._v("Blog")]),e("nuxt-link",{staticClass:"navbar-item has-text-white",attrs:{to:{name:"contacts"}}},[t._v("Contacts")])],1)]),e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOptions,expression:"swiperOptions",arg:"mySwiper"}],staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.slides,function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("div",{staticClass:"is-overlay has-clipped-background swiper-lazy",attrs:{"data-background":t.src}}),e("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-white"})])})),e("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},on:{click:t.onClickPrev},slot:"button-prev"}),e("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},on:{click:t.onClickNext},slot:"button-next"})]),e("nav",{staticClass:"navbar level container has-text-centered is-uppercase is-hidden-touch"},[e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"index"}}},[t._v("Home")])],1),e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"about"}}},[t._v("About")])],1),e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"portfolio"}}},[t._v("Portfolio")])],1),e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"index"}}},[e("h2",{staticClass:"is-size-2 has-text-weight-bold is-marginless"},[t._v("GJC")])])],1),e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"stories"}}},[t._v("Stories")])],1),e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"blog"}}},[t._v("Blog")])],1),e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"contacts"}}},[t._v("Contacts")])],1)]),t._m(0)])};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"is-size-1-desktop is-size-3-mobile has-text-centered"},[t._v("GiadaJoeyCazzola")]),e("div",{staticClass:"content has-text-centered"},[e("p",[t._v("\n            Sono Giada e sono una fotografa specializzata in reportage di matrimonio.\n          ")]),e("p",[t._v("\n            Descriverei il mio lavoro come una ricerca della perfezione nell'imperfezione.\n            "),e("br"),t._v(" Il racconto dettagliato del giorno più bello per una coppia, realizzato con ricchezza di particolari ma anche con discrezione.\n            "),e("br"),t._v(" Il miglior complimento che mi fanno gli sposi dopo aver visto le foto è che sembra loro di rivivere attraverso i miei scatti il giorno del matrimonio con dettagli che nemmeno loro ricordavano.\n          ")]),e("p",[t._v("\n            Il mio successo, e il motivo per cui vi invito a scegliermi, è proprio questo: racconterò la "),e("em",[t._v("vostra")]),t._v(" storia, il "),e("em",[t._v("vostro")]),t._v(" giorno speciale, il "),e("em",[t._v("vostro")]),t._v(" amore con un approccio fresco, giovane, spontaneo e il più naturale\n            possibile. Per me non esistono foto impostate, sorrisi di circostanza, pose plastiche. Per me esistete voi, con i vostri pregi e i vostri difetti che vi rendono unici e che sono sicura siano quelli che hanno permesso alla vostra metà di innamorarsi\n            di voi. Mi interessano i vostri sguardi, i sorrisi imbarazzati quando vi guardate dopo aver pronunciato quel \"sì\" all'altare, i baci e le mani che si incrociano mentre camminate uno di fianco all'altra. In una parola mi interessate voi, e\n            io e la mia macchina fotografica faremo tutto quello che è in nostro potere per restituirvi le immagini perfette per descrivere quello che siete.\n          ")])])]),e("div",{staticClass:"has-text-centered",attrs:{id:"wp-rated"}},[e("a",{attrs:{href:"https://www.matrimonio.com/fotografo-matrimonio/giada-joey-cazzola--e159658",title:"Consigliato in matrimonio.com",target:"_blank"}},[e("img",{attrs:{alt:"Consigliato da Matrimonio.com",id:"wp-rated-img",src:"https://cdn1.matrimonio.com/img/badges/2017/badge-gold_it_IT.jpg"}})])])])])}]};i.a=s}});