(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/EXAME/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4a0c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],i=r("2877"),o={},c=Object(i["a"])(o,s,n,!1,null,null,null),l=c.exports,u=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"wrapper"}},[r("body",[r("section",{staticClass:"banner-area relative",attrs:{id:"home"}},[r("div",{staticClass:"overlay overlay-bg"}),r("div",{staticClass:"container"},[r("div",{staticClass:"row fullscreen d-flex justify-content-center align-items-center"},[r("div",{staticClass:"banner-content col-lg-10 col-md-12 justify-content-center"},[r("h6",{staticClass:"text-uppercase"},[e._v("Whenever we bake, bake with our heart")]),r("h1",[e._v(" Love with baking items ")]),r("p",{staticClass:"text-white mx-auto"},[e._v(" Since Americans in the South began roasting pigs publicly, Barbecues have been a staple of North American living. For many, grilling becomes a routine mealtime activity. ")]),r("router-link",{staticClass:"primary-btn squire text-uppercase mt-10",attrs:{to:"/menu"}},[e._v("Check Our Menu")])],1)])])])])])},p=[],m={components:{},mounted:function(){}},f=m,g=(r("eba1"),Object(i["a"])(f,d,p,!1,null,"fdc2caa2",null)),v=g.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("body",[e._m(0),r("section",{staticClass:"menu-list-area section-gap"},[r("div",{staticClass:"container"},[e._m(1),r("div",{staticClass:"tab-content absolute",attrs:{id:"pills-tabContent"}},[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"pizza",role:"tabpanel","aria-labelledby":"pizza-tab"}},e._l(e.pizzaProducts,(function(t){return r("div",{key:t.id,staticClass:"single-menu-list row justify-content-between align-items-center"},[r("div",{staticClass:"col-lg-9"},[r("a",{attrs:{href:"#"}},[r("h4",[e._v(e._s(t.name))])]),r("p",[e._v(" "+e._s(t.description)+" ")])]),r("div",{staticClass:"col-lg-3 flex-row d-flex price-size"},[r("div",{staticClass:"s-price col"},[r("span",[e._v("$"+e._s(t.price))]),e._v(" "),r("br"),e.userLoggedIn?r("button",{staticClass:"genric-btn info-border circle arrow",on:{click:function(r){return e.addOrder(t)}}},[e._v("Order"),r("span",{staticClass:"lnr lnr-arrow-right"})]):e._e()])])])})),0),r("div",{staticClass:"tab-pane fade show ",attrs:{id:"pills-bread",role:"tabpanel","aria-labelledby":"pills-bread-tab"}},e._l(e.breadProducts,(function(t){return r("div",{key:t.id,staticClass:"single-menu-list row justify-content-between align-items-center"},[r("div",{staticClass:"col-lg-9"},[r("a",{attrs:{href:"#"}},[r("h4",[e._v(e._s(t.name))])]),r("p",[e._v(" "+e._s(t.description)+" ")])]),r("div",{staticClass:"col-lg-3 flex-row d-flex price-size"},[r("div",{staticClass:"s-price col"},[r("span",[e._v("$"+e._s(t.price))]),e._v(" "),r("br"),e.userLoggedIn?r("button",{staticClass:"genric-btn info-border circle arrow",on:{click:function(r){return e.addOrder(t)}}},[e._v("Order"),r("span",{staticClass:"lnr lnr-arrow-right"})]):e._e()])])])})),0),r("div",{staticClass:"tab-pane fade show ",attrs:{id:"pills-burger",role:"tabpanel","aria-labelledby":"pills-burger-tab"}},e._l(e.burgerProducts,(function(t){return r("div",{key:t.id,staticClass:"single-menu-list row justify-content-between align-items-center"},[r("div",{staticClass:"col-lg-9"},[r("a",{attrs:{href:"#"}},[r("h4",[e._v(e._s(t.name))])]),r("p",[e._v(" "+e._s(t.description)+" ")])]),r("div",{staticClass:"col-lg-3 flex-row d-flex price-size"},[r("div",{staticClass:"s-price col"},[r("span",[e._v("$"+e._s(t.price))]),e._v(" "),r("br"),e.userLoggedIn?r("button",{staticClass:"genric-btn info-border circle arrow",on:{click:function(r){return e.addOrder(t)}}},[e._v("Order"),r("span",{staticClass:"lnr lnr-arrow-right"})]):e._e()])])])})),0),r("div",{staticClass:"tab-pane fade show ",attrs:{id:"pills-chicken",role:"tabpanel","aria-labelledby":"pills-chicken-tab"}},e._l(e.chickenProducts,(function(t){return r("div",{key:t.id,staticClass:"single-menu-list row justify-content-between align-items-center"},[r("div",{staticClass:"col-lg-9"},[r("a",{attrs:{href:"#"}},[r("h4",[e._v(e._s(t.name))])]),r("p",[e._v(" "+e._s(t.description)+" ")])]),r("div",{staticClass:"col-lg-3 flex-row d-flex price-size"},[r("div",{staticClass:"s-price col"},[r("span",[e._v("$"+e._s(t.price))]),e._v(" "),r("br"),e.userLoggedIn?r("button",{staticClass:"genric-btn info-border circle arrow",on:{click:function(r){return e.addOrder(t)}}},[e._v("Order"),r("span",{staticClass:"lnr lnr-arrow-right"})]):e._e()])])])})),0)])])])]),r("Footer")],1)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"banner-area relative about-banner",attrs:{id:"home"}},[r("div",{staticClass:"overlay overlay-bg"}),r("div",{staticClass:"container"},[r("div",{staticClass:"row d-flex align-items-center justify-content-center"},[r("div",{staticClass:"about-content col-lg-12"},[r("h1",{staticClass:"text-white"},[e._v(" Menu List ")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"menu-cat mx-auto"},[r("ul",{staticClass:"nav nav-pills",attrs:{id:"pills-tab",role:"tablist"}},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{id:"pizza-tab","data-toggle":"pill",href:"#pizza",role:"tab","aria-controls":"pizza","aria-selected":"true"}},[e._v("Pizza")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"pills-bread-tab","data-toggle":"pill",href:"#pills-bread",role:"tab","aria-controls":"pills-bread","aria-selected":"false"}},[e._v("Breads")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"pills-burger-tab","data-toggle":"pill",href:"#pills-burger",role:"tab","aria-controls":"pills-burger","aria-selected":"false"}},[e._v("Burgers")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"pills-chicken-tab","data-toggle":"pill",href:"#pills-chicken",role:"tab","aria-controls":"pills-chicken","aria-selected":"false"}},[e._v("Chicken")])])])])])}],C=r("1da1"),w=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer-area section-gap"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[e._m(0),e._m(1),e._m(2),r("div",{staticClass:"col-lg-12"},[r("p",{staticClass:"footer-text"},[e._v(" Copyright ©"+e._s(e.year)+" All rights reserved | This template is made with "),r("i",{staticClass:"fa fa-heart-o",attrs:{"aria-hidden":"true"}}),e._v(" by "),r("a",{attrs:{href:"https://colorlib.com",target:"_blank"}},[e._v("Colorlib")])])])])])])}),_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-5 col-md-6 col-sm-6"},[r("div",{staticClass:"single-footer-widget"},[r("h6",[e._v("About Us")]),r("p",[e._v(" We are the best bakery in town! ")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-5  col-md-6 col-sm-6"},[r("div",{staticClass:"single-footer-widget"},[r("h6",[e._v("Newsletter")]),r("p",[e._v("Stay update with our latest")]),r("div",{attrs:{id:"mc_embed_signup"}},[r("form",{staticClass:"form-inline",attrs:{target:"_blank",novalidate:"true",action:"https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01",method:"get"}},[r("input",{staticClass:"form-control",attrs:{name:"EMAIL",placeholder:"Email Address",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Email Address'",required:"",type:"email"}}),r("button",{staticClass:"click-btn"},[r("i",{staticClass:"lnr lnr-arrow-right",attrs:{"aria-hidden":"true"}})]),r("div",{staticStyle:{position:"absolute",left:"-5000px"}},[r("input",{attrs:{name:"b_36c4fd991d266f23781ded980_aefe40901a",tabindex:"-1",value:"",type:"text"}})]),r("div",{staticClass:"info"})])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-2 col-md-6 col-sm-6 social-widget"},[r("div",{staticClass:"single-footer-widget"},[r("h6",[e._v("Follow Us")]),r("p",[e._v("Let us be social")]),r("div",{staticClass:"footer-social d-flex align-items-center"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-dribbble"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-behance"})])])])])}],y={computed:{year:function(){return(new Date).getFullYear()}}},x=y,k=Object(i["a"])(x,w,_,!1,null,null,null),$=k.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{id:"header"}},[e._m(0),r("div",{staticClass:"container main-menu"},[r("div",{staticClass:"row align-items-center justify-content-between d-flex"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"img/logo.png",alt:"",title:""}})]),r("nav",{attrs:{id:"nav-menu-container"}},[r("ul",{staticClass:"nav-menu"},[r("router-link",{attrs:{to:"/menu"}},[e._v("Menu")]),e.userLoggedIn?e._e():r("li",[r("a",{attrs:{href:"#"}},[e._v("Welcome Stranger!")])]),e.userLoggedIn?r("li",[r("a",{attrs:{href:"#"}},[e._v("Welcome "+e._s(e.user.name)+"!")])]):e._e(),e.userLoggedIn?r("router-link",{attrs:{to:"/orders"}},[e._v("My Orders")]):e._e(),e.userLoggedIn?e._e():r("router-link",{attrs:{to:"/register"}},[e._v("Register")]),e.userLoggedIn?e._e():r("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e.userLoggedIn?r("router-link",{attrs:{to:"/message/3"}},[e._v("Logout")]):e._e()],1)])],1)])])},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-top"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-lg-6 col-sm-6 col-4 header-top-left no-padding"},[r("div",{staticClass:"menu-social-icons"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-dribbble"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-behance"})])])]),r("div",{staticClass:"col-lg-6 col-sm-6 col-8 header-top-right no-padding"},[r("a",{staticClass:"btns",attrs:{href:"tel:+953 012 3654 896"}},[e._v("+953 012 3654 896")]),r("a",{staticClass:"btns",attrs:{href:"mailto:support@colorlib.com"}},[e._v("support@colorlib.com")]),r("a",{staticClass:"icons",attrs:{href:"tel:+953 012 3654 896"}},[r("span",{staticClass:"lnr lnr-phone-handset"})]),r("a",{staticClass:"icons",attrs:{href:"mailto:support@colorlib.com"}},[r("span",{staticClass:"lnr lnr-envelope"})])])])])])}],j=(r("b0c0"),r("b64b"),{data:function(){var e=this.$store.getters["user/getUser"],t=void 0!=e.id;return{userLoggedIn:t,user:{id:e.id,name:e.name,email:e.email}}},methods:{logout:function(){var e=this.$store.dispatch("user/logoutUser");e&&this.$router.push({path:"/message/3"})}},computed:{userIsEmpty:function(){var e=this.$store.getters["user/getUser"];return 0===Object.keys(e).length},userName:function(){return this.$store.getters["user/getUser"].name}},components:{}}),P=j,z=Object(i["a"])(P,O,E,!1,null,null,null),R=z.exports,U={components:{Footer:$,Header:R},data:function(){var e=this.$store.getters["user/getUser"],t=void 0!=e.id;return{userLoggedIn:t,pizzaProducts:[],breadProducts:[],burgerProducts:[],chickenProducts:[],categories:[]}},created:function(){this.getProducts()},mounted:function(){},methods:{getProducts:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("products/getProductsFromDB");case 2:e.pizzaProducts=e.$store.getters["products/getProductsByCatName"]("Pizza"),e.breadProducts=e.$store.getters["products/getProductsByCatName"]("Breads"),e.burgerProducts=e.$store.getters["products/getProductsByCatName"]("Burgers"),e.chickenProducts=e.$store.getters["products/getProductsByCatName"]("Chicken");case 6:case"end":return t.stop()}}),t)})))()},addOrder:function(e){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={customer_id:t.$store.getters["user/getUser"].id,product_id:e.id,product_price:e.price},r.next=3,t.$store.dispatch("orders/newOrder",a);case 3:t.$router.push({path:"/message/4"});case 4:case"end":return r.stop()}}),r)})))()}},computed:{}},A=U,M=(r("7d44"),Object(i["a"])(A,h,b,!1,null,"23cad82e",null)),L=M.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("body",[e._m(0),r("section",{staticClass:"contact-page-area section-gap"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("form",{staticClass:"form-area contact-form text-right",attrs:{id:"myForm"},on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"common-input mb-20 form-control",attrs:{name:"name",placeholder:"Enter your name",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Enter your name'",required:"",type:"text"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"common-input mb-20 form-control",attrs:{name:"email",placeholder:"Enter email address",pattern:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Enter email address'",required:"",type:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"common-input mb-20 form-control",attrs:{name:"password1",placeholder:"Enter password",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Enter password'",required:"",type:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"common-input mb-20 form-control",attrs:{name:"password2",placeholder:"Repeat password",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Repeat password'",required:"",type:"password"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}})]),e._m(1)])])])])])])]),r("Footer")],1)},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"banner-area relative about-banner",attrs:{id:"home"}},[r("div",{staticClass:"overlay overlay-bg"}),r("div",{staticClass:"container"},[r("div",{staticClass:"row d-flex align-items-center justify-content-center"},[r("div",{staticClass:"about-content col-lg-12"},[r("h1",{staticClass:"text-white"},[e._v(" Register ")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"alert-msg",staticStyle:{"text-align":"left"}}),r("button",{staticClass:"genric-btn primary",staticStyle:{float:"left"},attrs:{type:"submit"}},[e._v("Register")])])}],I=(r("ac1f"),r("466d"),{name:"register",components:{Footer:$,Header:R},data:function(){return{user:{name:"",email:"",password:""},passwordConfirmation:"",submitting:!0,error:!0}},mounted:function(){},methods:{validate:function(){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return this.user.email.match(e)?this.user.password.length<6?(this.error=!0,alert("Password must be at least 6 digits"),!1):this.user.password!==this.passwordConfirmation?(this.error=!0,alert("Password and Repeat Password must match"),!1):(this.error=!1,!0):(this.error=!0,alert("Invalid characters"),!1)},register:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.validate()){t.next=12;break}return t.next=3,e.$store.dispatch("user/userExists",e.user);case 3:if(r=t.sent,r){t.next=10;break}return t.next=7,e.$store.dispatch("user/addUser");case 7:a=t.sent,console.log(a),e.$router.push({path:"/message/1"});case 10:t.next=13;break;case 12:return t.abrupt("return");case 13:case"end":return t.stop()}}),t)})))()}},computed:{}}),B=I,N=Object(i["a"])(B,F,S,!1,null,null,null),D=N.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"banner-area relative about-banner",attrs:{id:"home"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row d-flex align-items-center justify-content-center"},[r("div",{staticClass:"about-content col-lg-12"},[r("h1",{staticClass:"text-white"},[e._v(" "+e._s(e.message)+" ")])])])])])},X=[],Z={data:function(){return{message:""}},mounted:function(){this.setMessage()},methods:{setMessage:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(1==e.$route.params.id&&(e.message="Welcome! You can now login"),2==e.$route.params.id&&(e.message="Welcome back "+e.$store.getters["user/getUser"].name+"!"),3!=e.$route.params.id){t.next=6;break}return t.next=5,e.$store.dispatch("user/logoutUser");case 5:e.message="Logged out, see you soon!";case 6:4==e.$route.params.id&&(e.message="Thank you for your order"),r=2,a=setInterval((function(){r<=0&&(clearInterval(a),e.$router.push("/menu")),r-=1}),1e3);case 9:case"end":return t.stop()}}),t)})))()}}},q=Z,H=Object(i["a"])(q,T,X,!1,null,"f415f6f6",null),W=H.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("body",[e._m(0),r("section",{staticClass:"contact-page-area section-gap"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("form",{staticClass:"form-area contact-form text-right",attrs:{id:"myForm"},on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"common-input mb-20 form-control",attrs:{name:"email",placeholder:"Enter email address",pattern:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Enter email address'",required:"",type:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"common-input mb-20 form-control",attrs:{name:"password",placeholder:"Enter password",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Enter password'",required:"",type:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._m(1)])])])])])])]),r("Footer")],1)},Y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"banner-area relative about-banner",attrs:{id:"home"}},[r("div",{staticClass:"overlay overlay-bg"}),r("div",{staticClass:"container"},[r("div",{staticClass:"row d-flex align-items-center justify-content-center"},[r("div",{staticClass:"about-content col-lg-12"},[r("h1",{staticClass:"text-white"},[e._v(" Login ")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"alert-msg",staticStyle:{"text-align":"left"}}),r("button",{staticClass:"genric-btn primary",staticStyle:{float:"left"},attrs:{type:"submit"}},[e._v("Login")])])}],G={name:"login",components:{Footer:$,Header:R},data:function(){return{user:{email:"",password:""},submitting:!1,error:!1}},mounted:function(){},methods:{login:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.user),t.next=3,e.$store.dispatch("user/loginUser",e.user);case 3:r=t.sent,r?(e.error=!1,console.log(e.$store.getters["user/getUser"]),e.$router.push({path:"/message/2"})):e.error=!0;case 5:case"end":return t.stop()}}),t)})))()}},computed:{}},K=G,Q=Object(i["a"])(K,J,Y,!1,null,null,null),V=Q.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("body",[e._m(0),r("section",{staticClass:"menu-list-area section-gap"},[r("div",{staticClass:"container"},e._l(e.orders,(function(t){return r("div",{key:t.id,staticClass:"single-menu-list row justify-content-between align-items-center"},[r("div",{staticClass:"col-lg-9"},[r("a",{attrs:{href:"#"}},[r("h4",[e._v(e._s(t.product_name))])]),r("p",[e._v(" "+e._s(t.created_at)+" ")])]),r("div",{staticClass:"col-lg-3 flex-row d-flex price-size"},[r("div",{staticClass:"s-price col"},[r("span",[e._v("$"+e._s(t.product_price))])])])])})),0)])]),r("Footer")],1)},te=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"banner-area relative about-banner",attrs:{id:"home"}},[r("div",{staticClass:"overlay overlay-bg"}),r("div",{staticClass:"container"},[r("div",{staticClass:"row d-flex align-items-center justify-content-center"},[r("div",{staticClass:"about-content col-lg-12"},[r("h1",{staticClass:"text-white"},[e._v(" My Orders ")])])])])])}],re={name:"dishes",components:{Footer:$,Header:R},data:function(){return{orders:[]}},created:function(){this.getOrders()},mounted:function(){},methods:{getOrders:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("orders/getMyOrdersFromDB",e.$store.getters["user/getUser"].id);case 2:e.orders=e.$store.getters["orders/getOrders"];case 3:case"end":return t.stop()}}),t)})))()}},computed:{}},ae=re,se=Object(i["a"])(ae,ee,te,!1,null,"2756a048",null),ne=se.exports;a["a"].use(u["a"]);var ie=[{path:"/",component:v},{path:"/menu",component:L},{path:"/register",component:D},{path:"/message/:id",component:W},{path:"/login",component:V},{path:"/orders",component:ne}],oe=new u["a"]({mode:"history",base:"/EXAME/dist/",routes:ie}),ce=oe,le=r("2f62"),ue=(r("4de4"),r("d3b7"),{namespaced:!0,state:{products:[]},getters:{getProducts:function(e){return e.products},getProductsById:function(e){return function(t){var r=e.products.filter((function(e){return e.id==t}));return r}},getProductsByCatName:function(e){return function(t){var r=e.products.filter((function(e){return e.cat_name==t}));return r}}},mutations:{addProducts:function(e,t){e.products=t}},actions:{getProductsFromDB:function(e){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/EXAME/api/products.php");case 4:return a=t.sent,t.next=7,a.json();case 7:s=t.sent,console.log("received data:",s),r("addProducts",s),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),console.log("error: ",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()}},modules:{}}),de=ue,pe={namespaced:!0,state:{categories:[]},getters:{getCategories:function(e){return e.categories}},mutations:{addCategories:function(e,t){e.categories=t}},actions:{getCategoriesFromDB:function(e){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,fetch("http://daw.deei.fct.ualg.pt/~a12345/EXAME/api/categories.php");case 4:return a=t.sent,t.next=7,a.json();case 7:return s=t.sent,console.log("received data:",s),r("addCategories",s),t.abrupt("return",!0);case 13:return t.prev=13,t.t0=t["catch"](1),console.log("error: ",t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})))()}},modules:{}},me=pe,fe=(r("e9c4"),r("99af"),{namespaced:!0,state:{user:{},tmp_user:{}},getters:{getUser:function(e){return e.user}},mutations:{loginUser:function(e,t){e.user=t},logoutUser:function(e){e.user={}},tmpUser:function(e,t){e.tmp_user=t}},actions:{userExists:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/EXAME/api/users.php?email=".concat(t.email),{method:"GET"});case 4:return s=r.sent,r.next=7,s.json();case 7:if(n=r.sent,console.log("userExists",n),null===n){r.next=14;break}return alert("Email already exists"),r.abrupt("return",!0);case 14:return a("tmpUser",t),r.abrupt("return",!1);case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r["catch"](1),console.error(r.t0),alert("Error: Database connection failed in phase 1"),r.abrupt("return",!1);case 23:case"end":return r.stop()}}),r,null,[[1,18]])})))()},addUser:function(e){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,t.prev=1,t.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/EXAME/api/users.php",{method:"POST",body:JSON.stringify(r.tmp_user),headers:{"Content-type":"text/html; charset=UTF-8"}});case 4:return a=t.sent,t.next=7,a.json();case 7:return s=t.sent,console.log("received data:",s),t.abrupt("return",!0);case 12:return t.prev=12,t.t0=t["catch"](1),console.error(t.t0),alert("Error: Database connection failed in phase 2"),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()},loginUser:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/EXAME/api/users.php?email=".concat(t.email,"&password=").concat(t.password));case 4:return s=r.sent,r.next=7,s.json();case 7:if(n=r.sent,null!=n){r.next=13;break}return alert("Error: Wrong credentials"),r.abrupt("return",!1);case 13:return console.log("received data:",n),a("loginUser",n),r.abrupt("return",!0);case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r["catch"](1),console.error(r.t0),alert("Error: Database connection failed"),r.abrupt("return",!1);case 23:case"end":return r.stop()}}),r,null,[[1,18]])})))()},logoutUser:function(e){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,r("logoutUser"),t.abrupt("return",!0);case 6:return t.prev=6,t.t0=t["catch"](1),console.error(t.t0),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()}}}),ge=fe,ve=r("2909"),he={namespaced:!0,state:{orders:[]},getters:{getOrders:function(e){return e.orders}},mutations:{addOrders:function(e,t){e.orders=t},newOrder:function(e,t){e.orders=[t].concat(Object(ve["a"])(e.orders))}},actions:{getMyOrdersFromDB:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/EXAME/api/orders.php?customer_id=".concat(t));case 4:return s=r.sent,r.next=7,s.json();case 7:n=r.sent,console.log("received data:",n),a("addOrders",n),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](1),console.log("error: ",r.t0);case 15:case"end":return r.stop()}}),r,null,[[1,12]])})))()},newOrder:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/EXAME/api/orders.php",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"text/html; charset=UTF-8"}});case 4:return s=r.sent,r.next=7,s.json();case 7:return n=r.sent,console.log("received data:",n),a("newOrder",n),r.abrupt("return",!0);case 13:return r.prev=13,r.t0=r["catch"](1),console.error(r.t0),r.abrupt("return",!1);case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()}},modules:{}},be=he;a["a"].use(le["a"]);var Ce=new le["a"].Store({modules:{products:de,categories:me,user:ge,orders:be}});a["a"].config.productionTip=!1,new a["a"]({router:ce,store:Ce,render:function(e){return e(l)}}).$mount("#app")},"7d44":function(e,t,r){"use strict";r("4a0c")},bdf5:function(e,t,r){},eba1:function(e,t,r){"use strict";r("bdf5")}});
//# sourceMappingURL=app.c4a5da60.js.map