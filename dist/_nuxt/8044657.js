(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{329:function(t,e,c){"use strict";c.r(e);c(28),c(38);var n={data:function(){return{title:this.$i18n.t("contacts.seo.title"),description:this.$i18n.t("contacts.seo.description"),url:"https://giadajoeycazzola.com/contacts/",image:"https://giadajoeycazzola.com/images/about_me.jpg",privacyAccepted:!1}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:url",property:"og:url",content:this.url},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:type",property:"og:type",content:"website"}],link:[{hid:"canonical",rel:"canonical",href:this.url}]}},methods:{onClick:function(t){this.privacyAccepted?this.$refs.form.submit():alert("Per favore, accetta la privacy policy prima di continuare")}}},o=c(52),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container"},[e("h1",{staticClass:"is-size-1 has-text-centered"},[t._v("\n    "+t._s(t.$t("contacts.title"))+"\n  ")]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"column has-vertically-aligned-content"},[e("div",{domProps:{innerHTML:t._s(t.$t("contacts.body"))}}),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"box"},[e("form",{ref:"form",attrs:{action:"https://formspree.io/f/giada.cazzola93@gmail.com",method:"POST"}},[e("div",{staticClass:"field"},[e("input",{staticClass:"input",attrs:{name:"name",placeholder:t.$t("contacts.name")}})]),t._v(" "),e("div",{staticClass:"field"},[e("input",{staticClass:"input",attrs:{name:"name",placeholder:t.$t("contacts.address")}})]),t._v(" "),e("div",{staticClass:"field"},[e("input",{staticClass:"input",attrs:{type:"email",name:"email",placeholder:t.$t("contacts.email")}})]),t._v(" "),e("div",{staticClass:"field"},[e("input",{staticClass:"input",attrs:{name:"name",placeholder:t.$t("contacts.instagram")}})]),t._v(" "),e("div",{staticClass:"field"},[e("input",{staticClass:"input",attrs:{name:"phone",placeholder:t.$t("contacts.phone")}})]),t._v(" "),e("div",{staticClass:"field"},[e("textarea",{staticClass:"textarea",attrs:{name:"message",placeholder:t.$t("contacts.message")}})]),t._v(" "),e("div",{staticClass:"field"},[e("b-switch",{model:{value:t.privacyAccepted,callback:function(e){t.privacyAccepted=e},expression:"privacyAccepted"}},[t._v("\n              "+t._s(t.$t("contacts.privacy-policy"))+"\n              "),e("a",{staticClass:"has-text-weight-bold",attrs:{href:"https://www.iubenda.com/privacy-policy/10318033",target:"_blank"}},[t._v(t._s(t.$t("contacts.privacy-policy.link")))])])],1),t._v(" "),e("input",{attrs:{type:"hidden",name:"subject",value:"Richiesta di contatto dal sito giadajoeycazzola.com"}}),t._v(" "),e("button",{staticClass:"button",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v("\n            "+t._s(t.$t("contacts.send"))+"\n          ")])])])])])])}),[function(){var t=this,e=t._self._c;return e("p",[e("a",{staticClass:"has-text-weight-bold",attrs:{href:"mailto:giada.cazzola93@gmail.com"}},[t._v("giada.cazzola93@gmail.com")]),t._v("\n        //\n        "),e("a",{staticClass:"has-text-weight-bold",attrs:{href:"tel:+393475045548"}},[t._v("+39 347 5045548")])])}],!1,null,null,null);e.default=component.exports}}]);