(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{256:function(e,t,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(65).default)("d88c4e80",content,!0,{sourceMap:!1})},257:function(e,t,o){"use strict";o.r(t);var n={props:{resetstyles:{type:Boolean,default:!1},title:{type:String,default:""},images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},caption:{type:Boolean,default:!0}},data:function(){return{currentImage:null,overlayActive:!1}},mounted:function(){var e=this;window.addEventListener("keydown",(function(t){return e.handleGlobalKeyDown(t)}))},methods:{clickImage:function(e){this.currentImage=e,this.overlayActive=!0},nextImage:function(){this.currentImage===this.images.length-1?this.loop&&(this.currentImage=0):this.currentImage+=1},prevImage:function(){0===this.currentImage?this.loop&&(this.currentImage=this.images.length-1):this.currentImage-=1},closeOverlay:function(){this.overlayActive=!1},handleGlobalKeyDown:function(e){switch(e.keyCode){case 37:this.prevImage();break;case 39:this.nextImage();break;case 27:this.closeOverlay()}}}},r=(o(260),o(48)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:{"vue-lightbox":!e.resetstyles}},[e.title?o("h1",[e._v("\n    "+e._s(e.title)+"\n  ")]):e._e(),e._v(" "),e.images?o("ul",e._l(e.images,(function(image,t){return o("li",{key:image.src},[o("img",{attrs:{src:image.thumb||image.src,alt:image.caption},on:{click:function(o){return e.clickImage(t)}}})])})),0):e._e(),e._v(" "),e.overlayActive?o("div",{staticClass:"lightbox-overlay",on:{click:function(t){return t.target!==t.currentTarget?null:e.closeOverlay.apply(null,arguments)}}},[o("div",{staticClass:"holder"},[e.images[e.currentImage].thumb?o("div",{staticStyle:{padding:"56.25% 0 0 0"}},[o("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:e.images[e.currentImage].src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):e._e(),e._v(" "),e.images[e.currentImage].thumb?e._e():o("img",{attrs:{src:e.images[e.currentImage].src}}),e._v(" "),e.nav?o("div",{staticClass:"nav"},[o("a",{staticClass:"close",attrs:{nohref:""},on:{click:e.closeOverlay}},[o("span",[e._v("×")])]),e._v(" "),o("a",{staticClass:"prev",attrs:{nohref:""},on:{click:e.prevImage}},[o("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev","data-v-2a183b29":""},slot:"button-prev"})]),e._v(" "),o("a",{staticClass:"next",attrs:{nohref:""},on:{click:e.nextImage}},[o("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next","data-v-2a183b29":""},slot:"button-next"})])]):e._e(),e._v(" "),e.caption&&e.images[e.currentImage].caption?o("p",[e._v("\n        "+e._s(e.images[e.currentImage].caption)+"\n      ")]):e._e()])]):e._e()])}),[],!1,null,"a3b74986",null);t.default=component.exports},259:function(e,t){var o=function(e,t,n){for(t||(t=o._amount),n||(n=o._character),t<1&&(t=1),t-=(e=""+e).length;t-- >0;)e=n+e;return e};o._amount=2,o._character="0",o.amount=function(e){return e?(o._amount=e,o):o._amount},o.character=function(e){return e?(o._character=e,o):o._character},e.exports=o},260:function(e,t,o){"use strict";o(256)},261:function(e,t,o){var n=o(64)(!1);n.push([e.i,".vue-lightbox ul[data-v-a3b74986]{list-style:none;margin:0 auto;padding:0;display:block;text-align:center}.vue-lightbox ul li[data-v-a3b74986]{display:inline-block;padding:5px;background:#f8f8ff;margin:10px}.vue-lightbox ul li img[data-v-a3b74986]{display:block;width:182px;cursor:pointer}.lightbox-overlay[data-v-a3b74986]{width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,.9);text-align:center;padding:20px;box-sizing:border-box;z-index:31}.lightbox-overlay .holder[data-v-a3b74986]{max-width:600px;margin:0 auto;position:relative;max-height:100vh}.lightbox-overlay .holder img[data-v-a3b74986]{width:100%;max-width:600px;cursor:pointer;box-sizing:border-box;display:block;max-height:100vh}.lightbox-overlay .holder p[data-v-a3b74986]{color:#fff;margin:0;background-color:rgba(0,0,0,.4);position:absolute;bottom:0;left:0;right:0;box-sizing:border-box;padding:10px}.lightbox-overlay .holder .nav[data-v-a3b74986]{max-width:600px;margin:0 auto;font-size:14px}.lightbox-overlay .holder .nav a[data-v-a3b74986]{color:#fff!important;opacity:.3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.lightbox-overlay .holder .nav a[data-v-a3b74986]:hover{opacity:1}.lightbox-overlay .holder .nav .next[data-v-a3b74986],.lightbox-overlay .holder .nav .prev[data-v-a3b74986]{position:absolute;top:120px;bottom:120px;padding:10px;width:20%;box-sizing:border-box;font-size:40px;display:flex;align-items:center}.lightbox-overlay .holder .nav .next[data-v-a3b74986]{right:0;justify-content:flex-end}.lightbox-overlay .holder .nav .prev[data-v-a3b74986]{left:0;justify-content:flex-start}.lightbox-overlay .holder .nav .close[data-v-a3b74986]{right:10px;top:0;font-size:30px;opacity:.6;z-index:1;position:absolute;text-align:left;box-sizing:border-box}.lightbox-overlay .holder .nav .close[data-v-a3b74986]:hover{opacity:1}",""]),e.exports=n},265:function(e,t,o){"use strict";o.r(t);var n={props:{title:{type:String,default:""},date:{type:String,default:""}}},r=o(48),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"container"},[o("h1",{staticClass:"is-size-1 has-text-centered"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),o("article",{staticClass:"content"},[o("p",{staticClass:"\n        is-size-7 is-italic\n        has-text-centered-mobile has-text-right-desktop\n      "},[e._v("\n      — "+e._s(e.date)+" —\n    ")]),e._v(" "),e._t("default",(function(){return[e._v("Here goes the article.")]}))],2)])}),[],!1,null,null,null);t.default=component.exports},279:function(e,t,o){"use strict";o.r(t);var n=o(8),r=(o(101),o(43),o(42),o(21),o(12),o(26),o(53),o(17),o(41),o(259)),l=o.n(r),c=o(265),d=o(257),h="blog/matrimoniobohochic",v={decorations:17,bouquet:7,dress:9,cake:10,location:7},m={components:{Post:c.default,Lightbox:d.default},data:function(){return{title:"Matrimonio Boho Chic",description:"Scopri tutti i segreti per organizzare un matrimonio bohemien, con foto boho chic e vintage polaroid e location adatte ai bohemian wedding.",url:"https://www.giadajoeycazzola.com/".concat(h,"/"),image:"https://www.giadajoeycazzola.com/images/".concat(h,"/01.jpg"),type:"website",date:"2 febbraio 2018",images:Object.entries(v).reduce((function(e,t){var o=Object(n.a)(t,2),section=o[0],r=o[1];return e[section]=Array.from(Array(r).keys()).map((function(e){return{id:e+1,src:"/images/".concat(h,"/").concat(section,"/").concat(l()(e+1),".jpg")}})),e}),{})}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}}},f=o(48),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("post",{attrs:{title:e.title,description:e.description,url:e.url,image:e.image,type:e.type,date:e.date}},[o("p",{staticClass:"is-size-7 has-text-centered-mobile"},[e._v("\n    fiori & bouquet:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.facebook.com/ilpoderelerocche/",target:"_blank"}},[e._v("Ilpoderelerocche")]),e._v(" "),o("br"),e._v("abito da sposa:\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.celiadragouni.com/",target:"_blank"}},[e._v("Celia Dragouni")]),e._v("\n    -\n    "),o("a",{staticClass:"has-text-weight-bold",attrs:{href:"http://www.whitelesposetorino.com/",target:"_blank"}},[e._v("White Le Spose")])]),e._v(" "),o("p",[e._v("\n    Se stai pensando di organizzare un matrimonio in stile bohemien, questa è\n    la guida che fa per te.\n    "),o("br"),e._v("“Boho wedding” è una delle ricerche più frequenti su\n    Google. "),o("br"),e._v("Ma cosa rende un matrimonio come questo diverso dagli altri?\n  ")]),e._v(" "),o("h3",{staticClass:"title is-4 has-text-centered has-text-weight-bold"},[e._v("\n    Decorazioni e dettagli\n  ")]),e._v(" "),o("p",[e._v("\n    Un mix eclettico di dettagli vintage immersi nel verde della natura.\n    Nastri, lanterne e lucine che fanno capolino dagli alberi, vecchie\n    macchine da scrivere, piccoli scrigni di vetro in cui un letto d’erba\n    accoglie le fedi, coni fatti con fogli di giornale per contenere il riso\n    da lanciare dopo la cerimonia, una vecchia altalena artigianale legata a\n    un ramo, cuscini e coperte sull’erba fresca che accolgono gli invitati per\n    un momento di relax.\n  ")]),e._v(" "),o("p",[e._v("\n    E per dare un tocco retrò anche al servizio fotografico, il polaroid\n    photobooth: a disposizione dei tuoi ospiti ci sarà una polaroid con cui\n    possono divertirsi scattandosi istantanee da appendere a dei fili\n    posizionati tra gli alberi o da inserire in un diario con una dedica per\n    voi sposi.\n  ")]),e._v(" "),o("lightbox",{staticClass:"lightbox-small",attrs:{images:e.images.decorations}}),e._v(" "),o("h3",{staticClass:"title is-4 has-text-centered has-text-weight-bold"},[e._v("Bouquet")]),e._v(" "),o("p",[e._v("\n    La parola d’ordine è “selvaggio”. Il bouquet deve essere\n    bello, grande e chic nel suo...disordine! Colorato o a tinta unita,\n    l’importante è che esprima la sua natura quindi via libera a fiori\n    di campo, girasoli, baccelli, cardi, il tutto arricchito con elementi\n    naturali come bacche, erbe profumate e felci.\n  ")]),e._v(" "),o("lightbox",{attrs:{images:e.images.bouquet}}),e._v(" "),o("h3",{staticClass:"title is-4 has-text-centered has-text-weight-bold"},[e._v("\n    Abito da sposa, capelli e scarpe\n  ")]),e._v(" "),o("p",[e._v("\n    L’abito da sposa bohemien deve essere adatto al contesto in cui lo\n    si indossa, per cui bando a strascichi lunghi e gonne ampie. Semplice ma\n    raffinata, la sposa boho chic può scegliere un abito vintage oppure dalle\n    linee morbide tipiche dello stile anni ‘70. I tessuti sono leggeri e\n    decorati da pizzi, merletti e frange.\n  ")]),e._v(" "),o("p",[e._v("\n    Il richiamo hippie suggerisce un sandalo basso e informale, per non\n    rinunciare alla femminilità e a qualche punto luce ti suggerisco un tacco\n    basso ma impreziosito di strass che danno personalità al look.\n  ")]),e._v(" "),o("p",[e._v("\n    L’acconciatura ideale vuole i capelli sciolti ma è perfetto anche un\n    raccolto morbido con qualche ciocca che incornicia il viso; via libera a\n    fiori e merletti tra i capelli e coroncine da portare sulla fronte.\n  ")]),e._v(" "),o("lightbox",{attrs:{images:e.images.dress}}),e._v(" "),o("h3",{staticClass:"title is-4 has-text-centered has-text-weight-bold"},[e._v("\n    Torta nuziale, tableau mariage e bomboniere\n  ")]),e._v(" "),o("p",[e._v("\n    Il tableau mariage può essere creato con le erbe aromatiche o con fogli di\n    carta grezza appesi a vecchie persiane posate sull’erba, la torta\n    nuziale ideale è a piani e impreziosita di fiori mentre le bomboniere\n    hanno il compito di lasciare agli invitati un ricordo dell’essenza\n    della festa e quindi perché non affidarsi alle bomboniere\n    enogastronomiche, come vasetti di vetro o di bambù che contengono\n    marmellate artigianali, piccoli sacchetti di juta con all’interno\n    legumi o cereali e cosa ne dite delle spezie? Pepe di Penja, sale rosa,\n    curcuma da distribuire in simpatici barattolini personalizzati. Oppure\n    scatoline che contengono germogli da piantare.\n  ")]),e._v(" "),o("lightbox",{attrs:{images:e.images.cake}}),e._v(" "),o("h3",{staticClass:"title is-4 has-text-centered has-text-weight-bold"},[e._v("Location")]),e._v(" "),o("p",[e._v("\n    L’ambientazione deve essere bucolica e probabilmente il luogo ideale\n    per celebrare un matrimonio boho è il bosco, in cui alberi e natura\n    selvaggia la fanno da padroni. Non tutti sono disposti tuttavia a essere\n    così “wild”, e ci si può affidare a una soluzione più comoda\n    in cui poter ricreare un ambiente rurale ma allo stesso tempo accessibile\n    a tutti.\n  ")]),e._v(" "),o("p",[e._v("\n    Una location che si presta perfettamente per questo tipo di wedding è\n    Tenuta Tamburnin, a Castelnuovo Don Bosco. Immersa nei vigneti del Basso\n    Monferrato Astigiano, questa struttura vanta 20 ettari di terreno di cui 9\n    di vigneto, 2 di noccioleto, prati, boschi e una pregiata cantina, tutti\n    luoghi in cui è possibile ricreare l’atmosfera del matrimonio\n    bohemien senza rinunciare alla presenza di una cucina, un’ampia sala\n    in cui consumare il pasto e un luogo coperto in cui ballare anche in caso\n    di pioggia. (Per saperne di più visita il sito\n    "),o("a",{attrs:{href:"http://tamburnin.it/"}},[e._v("tamburnin.it")]),e._v(").\n  ")]),e._v(" "),o("lightbox",{attrs:{images:e.images.location}}),e._v(" "),o("p",[e._v("\n    Guarda\n    "),o("nuxt-link",{staticClass:"has-text-weight-bold",attrs:{to:e.localePath("stories-martinasalvador")}},[e._v("\n      qui ")]),e._v("le foto scattate durante il matrimonio boho chic celebrato alla Tenuta\n    Tamburnin.\n  ")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Lightbox:o(257).default,Post:o(265).default})}}]);