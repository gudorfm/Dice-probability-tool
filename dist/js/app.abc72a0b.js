(function(e){function t(t){for(var s,n,i=t[0],u=t[1],l=t[2],m=0,d=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(s=!1)}s&&(a.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},o={app:0},a=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Dice-probability-tool/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{staticClass:"nav-item",attrs:{to:{name:"home"}}},[r("i",{staticClass:"fas fa-home"}),e._v(" "),e._v(" Home ")]),e.$store.state.token?e._e():r("router-link",{staticClass:"nav-item",attrs:{to:{name:"register"}}},[e._v(" | Register")]),e.$store.state.token?e._e():r("router-link",{staticClass:"nav-item",attrs:{to:{name:"login"}}},[e._v(" | Login ")]),e.$store.state.token?r("router-link",{staticClass:"nav-item",attrs:{to:{name:"logout"}}},[e._v(" | Logout ")]):e._e()],1),r("router-view")],1)},a=[],n={},i=n,u=(r("5c0b"),r("2877")),l=Object(u["a"])(i,o,a,!1,null,null,null),c=l.exports,m=(r("45fc"),r("8c4f")),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Home")]),r("p",[e._v("Does this work?")])])}],f={name:"home"},g=f,v=Object(u["a"])(g,d,p,!1,null,null,null),h=v.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center",attrs:{id:"login"}},[r("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Please Sign In")]),e.invalidCredentials?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Invalid username and password! ")]):e._e(),e.networkError?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Network error! ")]):e._e(),this.$route.query.registration?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" Thank you for registering, please sign in. ")]):e._e(),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("router-link",{attrs:{to:{name:"register"}}},[e._v("Need an account?")])],1),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Sign in")])])])},_=[],b=r("bc3a"),C=r.n(b),y={login:function(e){return C.a.post("/login",e)},register:function(e){return C.a.post("/login/register",e)}},E={name:"login",components:{},data:function(){return{user:{username:"",password:""},invalidCredentials:!1,networkError:!1}},methods:{login:function(){var e=this;y.login(this.user).then((function(t){200==t.status&&(e.$store.commit("SET_AUTH_TOKEN",t.data.token),e.$store.commit("SET_USER",t.data.user),e.$router.push({name:"home"}))}))["catch"]((function(t){var r=t.response;null==r||500===r.status?e.networkError=!0:401===r.status&&(e.invalidCredentials=!0)}))}}},k=E,P=Object(u["a"])(k,w,_,!1,null,null,null),O=P.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Logout")])},$=[],x={created:function(){this.$store.commit("LOGOUT"),this.$router.push({name:"home"})}},T=x,j=Object(u["a"])(T,S,$,!1,null,null,null),q=j.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center",attrs:{id:"register"}},[r("form",{staticClass:"form-register",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Create Account")]),e.registrationErrors?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.registrationErrorMsg)+" ")]):e._e(),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",id:"confirmPassword",placeholder:"Confirm Password",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("router-link",{attrs:{to:{name:"login"}}},[e._v("Have an account?")])],1),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(" Create Account ")])])])},N=[],I={name:"register",data:function(){return{user:{username:"",password:"",confirmPassword:"",role:"user"},registrationErrors:!1,registrationErrorMsg:"There were problems registering this user."}},methods:{register:function(){var e=this;this.user.password!=this.user.confirmPassword?(this.registrationErrors=!0,this.registrationErrorMsg="Password & Confirm Password do not match."):y.register(this.user).then((function(t){201==t.status&&e.$router.push({name:"login",query:{registration:"success"}})}))["catch"]((function(t){var r=t.response;e.registrationErrors=!0,400===r.status&&(e.registrationErrorMsg="Bad Request: Validation Errors")}))},clearErrors:function(){this.registrationErrors=!1,this.registrationErrorMsg="There were problems registering this user."}}},M=I,U=Object(u["a"])(M,A,N,!1,null,null,null),L=U.exports,D=r("2f62");s["a"].use(D["a"]);var H=localStorage.getItem("token"),R=null;localStorage.getItem("user")&&"undefined"!=localStorage.getItem("user")&&(R=JSON.parse(localStorage.getItem("user"))),H&&"undefined"!=H&&(C.a.defaults.headers.common["Authorization"]="Bearer ".concat(H));var J=new D["a"].Store({state:{token:H||"",user:R||{}},mutations:{SET_AUTH_TOKEN:function(e,t){e.token=t,localStorage.setItem("token",t),C.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)},SET_USER:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},LOGOUT:function(e){localStorage.removeItem("token"),localStorage.removeItem("user"),e.token="",e.user={},C.a.defaults.headers.common={}}}});s["a"].use(m["a"]);var B=new m["a"]({mode:"history",base:"/Dice-probability-tool/",routes:[{path:"/",name:"home",component:h,meta:{requiresAuth:!1}},{path:"/login",name:"login",component:O,meta:{requiresAuth:!1}},{path:"/logout",name:"logout",component:q,meta:{requiresAuth:!1}},{path:"/register",name:"register",component:L,meta:{requiresAuth:!1}},{path:"*",redirect:"/"}]});B.beforeEach((function(e,t,r){var s=e.matched.some((function(e){return e.meta.requiresAuth}));s&&""===J.state.token?r("/login"):r()}));var z=B;s["a"].config.productionTip=!1,C.a.defaults.baseURL="https://localhost:44315",new s["a"]({router:z,store:J,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.abc72a0b.js.map