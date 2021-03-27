(function(t){function e(e){for(var r,n,o=e[0],l=e[1],u=e[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=s[0]))}return t}var r={},i={app:0},a=[];function n(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=r,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/travel-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"00f7":function(t,e,s){},"01fc":function(t,e,s){},"0b0a":function(t,e,s){"use strict";s("36e0")},"11dd":function(t,e,s){"use strict";s("01fc")},2107:function(t,e,s){},"2b4f":function(t,e,s){},"2def":function(t,e,s){"use strict";s("597f")},"36e0":function(t,e,s){},"3cc4":function(t,e,s){},"51ec":function(t,e,s){"use strict";s("2107")},"51f4":function(t,e,s){"use strict";s("3cc4")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center",attrs:{id:"app"}},[t.isAuthorized?s("the-header"):s("div"),t.isLoaded?s("router-view"):t._e(),t.isAuthorized?s("the-footer"):s("div")],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("p",{staticClass:"footer__p"},[t._v("Copyright © 2021 Zaboronkin Maxim. All rights reserved.")]),s("base-logo")],1)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{staticClass:"logo",attrs:{src:s("cf05"),alt:"Logo"}})},u=[],c={name:"BaseLogo"},d=c,p=(s("11dd"),s("2877")),f=Object(p["a"])(d,l,u,!1,null,null,null),m=f.exports,_={components:{BaseLogo:m},name:"TheFooter"},h=_,v=(s("2def"),Object(p["a"])(h,n,o,!1,null,null,null)),g=v.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"header__left"},[s("router-link",{staticClass:"header__profile",attrs:{to:"/profile"}},[s("img",{staticClass:"header__img",attrs:{src:t.user.image,alt:"avatar"}}),s("h1",{staticClass:"header__name",attrs:{href:""}},[t._v(t._s(this.user.name))])])],1),s("header-search"),s("router-link",{staticClass:"header__link",attrs:{to:"/"}},[s("base-logo")],1)],1)},y=[],C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"header__form",attrs:{action:""}},[s("label",{attrs:{for:"search"}},[s("input",{staticClass:"header__input",attrs:{id:"search",type:"text"}}),s("span",{staticClass:"material-icons header__search"},[t._v(" search ")])])])])}],x={name:"HeaderSearch",mounted:function(){var t,e=this,s=document.querySelector("#search");s.addEventListener("input",(function(s){clearTimeout(t),t=setTimeout((function(){e.$store.commit("updateFilter",s.target.value)}),500)}))}},P=x,O=(s("e2d4"),Object(p["a"])(P,C,E,!1,null,null,null)),S=O.exports,$={name:"TheHeader",components:{HeaderSearch:S,BaseLogo:m},computed:{user:function(){return this.$store.state.user}}},w=$,j=(s("0b0a"),Object(p["a"])(w,b,y,!1,null,null,null)),L=j.exports,I={components:{TheHeader:L,TheFooter:g},computed:{isLoaded:function(){return this.$store.state.isLoaded},isAuthorized:function(){return this.$store.getters.isAuthorized}},mounted:function(){if(null!==sessionStorage.getItem("posts")&&null!==sessionStorage.getItem("users")){var t=JSON.parse(sessionStorage.getItem("posts")),e=JSON.parse(sessionStorage.getItem("users"));this.$store.commit("setPosts",t),this.$store.commit("setUsers",e),this.$store.commit("hasLoaded")}else this.$store.dispatch("fetchData");if(null!==sessionStorage.getItem("user")){var s=JSON.parse(sessionStorage.getItem("user"));this.$store.commit("authorize",s)}}},q=I,D=(s("5c0b"),Object(p["a"])(q,i,a,!1,null,null,null)),A=D.exports,N=(s("b0c0"),s("8c4f")),T=s("5530"),z=(s("c740"),s("159b"),s("d3b7"),s("3ca3"),s("ddb0"),s("2f62")),k=s("bc3a"),M=s.n(k);r["a"].use(z["a"],M.a);var F="https://jsonplaceholder.typicode.com",J=new z["a"].Store({state:{posts:[],authors:[],filterText:"",isLoaded:!1,user:{name:"",email:""}},getters:{isAuthorized:function(t){return null!==sessionStorage.getItem("user")||""!==t.user.name}},mutations:{setPosts:function(t,e){var s=e;function r(t,e){return new Date(t.getTime()+Math.random()*(e.getTime()-t.getTime()))}for(var i=0;i<s.length;i+=1)null===s[i].date||void 0===s[i].date?s[i].date=r(new Date(2012,0,1),new Date):s[i].date=new Date(s[i].date);t.posts=s},setUsers:function(t,e){t.authors=e},updateFilter:function(t,e){t.filterText=e},hasLoaded:function(t){t.isLoaded=!0},addPost:function(t,e){t.posts.push(e),sessionStorage.setItem("posts",JSON.stringify(t.posts))},updatePost:function(t,e){var s=e.id,r=t.posts.findIndex((function(t){return t.id===s}))[0];t.posts[r]=Object(T["a"])({},e),sessionStorage.setItem("posts",JSON.stringify(t.posts))},authorize:function(t,e){t.user=Object(T["a"])(Object(T["a"])({},t.user),e),t.authors.forEach((function(s,r){s.id===e.id&&(t.authors[r].name=e.name)}))}},actions:{fetchData:function(t){var e=t.commit,s=M.a.get("".concat(F,"/posts")).then((function(t){e("setPosts",t.data),sessionStorage.setItem("posts",JSON.stringify(t.data))})).catch((function(t){throw new Error(t)})),r=M.a.get("".concat(F,"/users")).then((function(t){e("setUsers",t.data),sessionStorage.setItem("users",JSON.stringify(t.data))})).catch((function(t){throw new Error(t)}));Promise.all([s,r]).then((function(){e("hasLoaded")}))}},modules:{}}),Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("posts-wrapper")],1)},U=[],H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"posts"},[s("h1",{staticClass:"posts__h1"},[t._v("Posts")]),t.isEmpty?s("h2",{staticClass:"posts__h2"},[t._v("Nothing mathes")]):t._e(),t._l(t.filteredPosts,(function(e){var r=e.userId,i=e.id,a=e.date,n=e.title,o=e.body;return s("post-card",{key:i,attrs:{userName:t.userName(r),postId:i,date:a,title:n,text:o}})}))],2)},B=[],R=s("2909"),V=(s("4de4"),s("caad"),s("2532"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post"},[s("img",{staticClass:"post__image",attrs:{src:"https://picsum.photos/250",alt:"Image"}}),s("router-link",{staticClass:"post__link",attrs:{to:{name:"article",params:{id:this.postId}}}},[s("h2",{staticClass:"post__title"},[t._v(t._s(this.title))])]),s("p",{staticClass:"post__text"},[t._v(" "+t._s(this.cutText)),t.isLong?s("span",[t._v("...")]):t._e()]),s("p",{staticClass:"post__author"},[t._v("—"+t._s(this.userName)+", "),s("span",[t._v(t._s(this.localDate))])])],1)}),W=[],G=(s("a9e3"),s("fb6a"),{name:"BasePost",props:{postId:{type:Number,required:!0},userName:{type:String,required:!0},date:{type:Date,required:!0},title:{type:String,required:!0},text:{type:String,required:!0}},computed:{cutText:function(){return this.text.slice(0,25)},isLong:function(){return this.text.length>25},localDate:function(){return this.date.toLocaleDateString("ru")}}}),K=G,Q=(s("6038"),Object(p["a"])(K,V,W,!1,null,null,null)),X=Q.exports,Y={name:"PostsWrapper",components:{PostCard:X},computed:Object(T["a"])(Object(T["a"])({},Object(z["b"])(["posts","authors"])),{},{filteredPosts:function(){var t=this,e=this.sortPosts(this.posts);return e.filter((function(e){return e.title.includes(t.filterText)}))},isEmpty:function(){return 0===this.filteredPosts.length},filterText:function(){return this.$store.state.filterText}}),methods:{userName:function(t){return this.authors.filter((function(e){return e.id===t}))[0]?this.authors.filter((function(e){return e.id===t}))[0].name:""},sortPosts:function(t){var e=Object(R["a"])(t);return e.sort((function(t,e){return t.date<e.date?1:e.date<t.date?-1:e.date===t.date&&t.title>e.title?1:-1}))}}},tt=Y,et=(s("51ec"),Object(p["a"])(tt,H,B,!1,null,null,null)),st=et.exports,rt={name:"HomeView",components:{PostsWrapper:st}},it=rt,at=Object(p["a"])(it,Z,U,!1,null,null,null),nt=at.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"form__wrapper"},[s("form",{staticClass:"form",attrs:{id:"sign-in-form"}},[s("label",{attrs:{for:"name"}},[t._v("Name: "),t.errors.name?s("span",{staticClass:"form__error"},[t._v("* Must be not less than 3 and no more than 15 chars ")]):t._e()]),s("input",{staticClass:"form__input",attrs:{id:"sign-in-name",name:"name",type:"text",required:""}}),s("label",{attrs:{for:"email"}},[t._v("Email: "),t.errors.email?s("span",{staticClass:"form__error"},[t._v("* Wrong format of email ")]):t._e()]),s("input",{staticClass:"form__input",attrs:{id:"sign-in-email",name:"email",type:"email",required:""}}),s("label",{attrs:{for:"pass"}},[t._v("Password: "),t.errors.pass?s("span",{staticClass:"form__error"},[t._v("* Must starts from capital letter, includ at least one digit, "),s("br"),t._v("at least 8 characters ")]):t._e()]),s("input",{staticClass:"form__input",attrs:{id:"sign-in-pass",name:"pass",type:"password",required:""}}),s("input-file-drop"),s("button",{staticClass:"form__submit",attrs:{id:"sign-in-btn",type:"submit"}},[t._v(" Sign In ")])],1)])},lt=[],ut=(s("b64b"),s("2b3d"),s("07ac"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"input-file",attrs:{for:"file"}},[s("input",{staticClass:"hidden",attrs:{id:"file",name:"file",type:"file",accept:".svg,.png,.jpg",required:""}}),s("div",{staticClass:"input-file__dropzone"},[t._v(" Select avatar ")])])}],dt=(s("a630"),{name:"InputFileDrop",mounted:function(){var t=document.querySelector(".input-file input"),e=document.querySelector(".input-file__dropzone");e.addEventListener("dragover",(function(t){t.preventDefault()})),e.addEventListener("dragenter",(function(t){t.stopPropagation(),t.target.classList.add("input-file__dropzone--droppable")})),e.addEventListener("dragleave",(function(t){t.stopPropagation(),t.target.classList.remove("input-file__dropzone--droppable")})),e.addEventListener("drop",(function(e){e.preventDefault(),e.target.classList.remove("input-file__dropzone--droppable");var s=e.dataTransfer.files;if(!t.multiple&&s.length>1){var r=new DataTransfer;r.items.add(s[0]),s=r.files}t.files=s,t.focus(),t.dispatchEvent(new Event("change"))})),t.addEventListener("change",(function(t){var s=Array.from(t.target.files);e.innerText=s[0].name}))}}),pt=dt,ft=(s("8d9d"),Object(p["a"])(pt,ut,ct,!1,null,null,null)),mt=ft.exports,_t={name:"SignInView",components:{InputFileDrop:mt},data:function(){return{errors:{name:!1,email:!1,pass:!1}}},mounted:function(){var t=this,e=document.querySelector("#sign-in-form");e.addEventListener("submit",(function(e){e.preventDefault(),Object.keys(t.errors).forEach((function(e){t.errors[e]=!1}));var s=e.target;if(t.checkForm(s),!t.hasErrors()){var r={name:s.name.value,email:s.email.value,pass:s.pass.vluae,image:URL.createObjectURL(s.file.files[0]),id:2};sessionStorage.setItem("user",JSON.stringify(r)),t.$store.commit("authorize",r),t.$router.push("/")}}))},methods:{checkForm:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,s=/^[A-Z](?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;(t.name.value.length<3||t.name.value.length>15)&&(this.errors.name=!0),e.test(t.email.value)||(this.errors.email=!0),s.test(t.pass.value)||(this.errors.pass=!0)},hasErrors:function(){return Object.values(this.errors).some((function(t){return t}))}}},ht=_t,vt=(s("adaa"),Object(p["a"])(ht,ot,lt,!1,null,null,null)),gt=vt.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"article"},[s("post-article")],1)},yt=[],Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoaded?s("div",[s("img",{staticClass:"article__img",attrs:{src:"https://picsum.photos/300",alt:"article-image"}}),s("h1",{staticClass:"article__title"},[t._v(t._s(this.post.title))]),s("p",{staticClass:"article__text"},[t._v(t._s(this.post.body)+" ")]),s("div",{staticClass:"article__bottom"},[s("span",[t._v("― "+t._s(this.author)+", "),s("span",[t._v(t._s(this.localDate))])]),t._m(0)]),t.editOpen?s("post-article-edit",{attrs:{textProp:t.post.body,titleProp:t.post.title,dateProp:t.post.date,idProp:t.post.id},on:{submit:t.updatePost,close:t.closeModal}}):t._e()],1):t._e()},Et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"article__edit-btn"},[s("span",{staticClass:"article__edit-icon material-icons"},[t._v("edit")]),t._v(" Edit ")])}],xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-edit__wrapper"},[s("form",{staticClass:"post-edit",attrs:{id:"post-edit"}},[s("label",{attrs:{for:"text-edit"}},[t._v("Text")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"post-edit__textarea",attrs:{id:"text-edit",name:"text",required:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"title-edit"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"post-edit__input",attrs:{id:"title-edit",name:"title",type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("label",{attrs:{for:"date-edit"}},[t._v("Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"post-edit__input",attrs:{id:"date-edit",name:"date",type:"date",required:""},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),s("button",{staticClass:"post-edit__btn",attrs:{id:"post-edit-submit",type:"submit"}},[t._v("Save")]),s("button",{staticClass:"post-edit__btn post-edit__btn--close",attrs:{id:"post-edit-cancel",type:"button"}},[t._v("Cancel")])])])},Pt=[],Ot={name:"PostArticleEdit",props:{idProp:{type:Number,required:!0},textProp:{type:String,required:!0},titleProp:{type:String,required:!0},dateProp:{type:Date,required:!0}},data:function(){return{text:"",date:"",title:""}},mounted:function(){var t=this,e=document.querySelector("#post-edit-cancel"),s=document.querySelector("#post-edit");s.addEventListener("submit",(function(e){var s;e.preventDefault();var r=e.target,i=null!==(s=t.$store.state.posts.filter((function(e){return e.id===t.idProp}))[0])&&void 0!==s?s:{};i.id=t.idProp,i.title=r.title.value,i.body=r.text.value,i.date=new Date(r.date.value),t.$emit("submit",i),t.$emit("close")})),e.addEventListener("click",(function(){t.$emit("close")})),this.updateData()},methods:{updateData:function(){this.date=this.dateProp.toISOString().substr(0,10),this.text=this.textProp,this.title=this.titleProp}}},St=Ot,$t=(s("666e"),Object(p["a"])(St,xt,Pt,!1,null,null,null)),wt=$t.exports,jt={components:{PostArticleEdit:wt},name:"PostArticle",data:function(){return{editOpen:!1}},computed:{isLoaded:function(){return this.$store.state.isLoaded},post:function(){var t=this.$route.params.id;return this.$store.state.posts.filter((function(e){return e.id===t}))[0]},localDate:function(){return this.post.date.toLocaleDateString("ru")},author:function(){var t=this.post.userId;return this.$store.state.authors.filter((function(e){return e.id===t}))[0].name}},mounted:function(){var t=this,e=document.querySelector(".article__edit-btn");null!==e&&e.addEventListener("click",(function(){t.editOpen=!0}))},methods:{closeModal:function(){this.editOpen=!1},updatePost:function(t){this.$store.commit("updatePost",t)}}},Lt=jt,It=(s("8e5c"),Object(p["a"])(Lt,Ct,Et,!1,null,null,null)),qt=It.exports,Dt={components:{PostArticle:qt},name:"ArticleView"},At=Dt,Nt=(s("51f4"),Object(p["a"])(At,bt,yt,!1,null,null,null)),Tt=Nt.exports,zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"profile"},[s("img",{staticClass:"profile__img",attrs:{src:t.user.image,alt:""}}),s("div",{staticClass:"profile__body"},[s("h1",{staticClass:"profile__name"},[t._v(t._s(this.user.name))]),s("p",[t._v("Email: "+t._s(this.user.email))]),t._m(0),s("ul",{staticClass:"profile__ul"},[t._v("Posts "),t._l(t.posts,(function(e){return s("li",{key:e.id},[t._v("Title: "+t._s(e.title))])}))],2),s("button",{staticClass:"profile__add-btn",attrs:{type:"button"}},[t._v("Add post")])]),t.profileEditOpen?s("profile-edit",{on:{close:t.closeProfileEdit}}):t._e(),t.articleEditOpen?s("post-article-edit",{attrs:{textProp:"",titleProp:"",dateProp:new Date,idProp:t.getNewId()},on:{submit:t.createPost,close:t.closeArticleEdit}}):t._e()],1)},kt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"profile__edit-btn"},[s("span",{staticClass:"profile__edit-icon material-icons"},[t._v("edit")]),t._v(" Edit ")])}],Mt=(s("13d5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-edit__wrapper"},[s("form",{staticClass:"profile-edit",attrs:{id:"profile-edit"}},[s("label",{attrs:{for:"profile-name-edit"}},[t._v("Name: "),t.errors.name?s("span",{staticClass:"profile-edit__error"},[t._v("* Must be not less than 3 and no more than 15 chars ")]):t._e()]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"profile-edit__input",attrs:{id:"profile-name-edit",name:"name",type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s("label",{attrs:{for:"profile-email-edit"}},[t._v("Email: "),t.errors.email?s("span",{staticClass:"profile-edit__error"},[t._v("* Wrong format of email ")]):t._e()]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"profile-edit__input",attrs:{id:"profile-email-edit",name:"email",type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("input-file-drop"),s("button",{staticClass:"profile-edit__btn",attrs:{id:"profile-edit-submit",type:"submit"}},[t._v("Save")]),s("button",{staticClass:"profile-edit__btn profile-edit__btn--close",attrs:{id:"profile-edit-cancel",type:"button"}},[t._v("Cancel")])],1)])}),Ft=[],Jt={components:{InputFileDrop:mt},name:"ProfileEdit",data:function(){return{name:"",email:"",errors:{name:!1,email:!1}}},computed:{user:function(){return this.$store.state.user}},mounted:function(){var t=this;this.name=this.user.name,this.email=this.user.email;var e=document.querySelector("#profile-edit-cancel"),s=document.querySelector("#profile-edit");s.addEventListener("submit",(function(e){e.preventDefault(),Object.keys(t.errors).forEach((function(e){t.errors[e]=!1}));var s=e.target;if(t.checkForm(s),!t.hasErrors()){var r={name:s.name.value,email:s.email.value,image:URL.createObjectURL(s.file.files[0])};sessionStorage.setItem("user",JSON.stringify(r)),t.$store.commit("authorize",r),t.$emit("close")}})),e.addEventListener("click",(function(){t.$emit("close")}))},methods:{checkForm:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;(t.name.value.length<3||t.name.value.length>15)&&(this.errors.name=!0),e.test(t.email.value)||(this.errors.email=!0)},hasErrors:function(){return Object.values(this.errors).some((function(t){return t}))}}},Zt=Jt,Ut=(s("adab"),Object(p["a"])(Zt,Mt,Ft,!1,null,null,null)),Ht=Ut.exports,Bt={components:{ProfileEdit:Ht,PostArticleEdit:wt},name:"ProfileView",data:function(){return{profileEditOpen:!1,articleEditOpen:!1,post:{}}},computed:{user:function(){return this.$store.state.user},posts:function(){var t=this;return this.$store.state.posts.filter((function(e){return e.userId===t.user.id}))}},mounted:function(){var t=this,e=document.querySelector(".profile__edit-btn"),s=document.querySelector(".profile__add-btn");null!==e&&e.addEventListener("click",(function(){t.profileEditOpen=!0})),null!==s&&s.addEventListener("click",(function(){t.articleEditOpen=!0}))},methods:{closeProfileEdit:function(){this.profileEditOpen=!1},closeArticleEdit:function(){this.articleEditOpen=!1},getNewId:function(){var t=this.$store.state.posts,e=t.reduce((function(t,e){return Math.max(t,e.id)}),0)+1;return e},createPost:function(t){var e=Object(T["a"])({},t);e.userId=this.user.id,this.$store.commit("addPost",e)}}},Rt=Bt,Vt=(s("ceb0"),Object(p["a"])(Rt,zt,kt,!1,null,null,null)),Wt=Vt.exports;r["a"].use(N["a"]);var Gt=[{path:"/",name:"home",component:nt},{path:"/signin",name:"signin",component:gt},{path:"/article/:id",name:"article",component:Tt},{path:"/profile",name:"profile",component:Wt}],Kt=new N["a"]({mode:"history",base:"/travel-app/",routes:Gt});Kt.beforeEach((function(t,e,s){"signin"===t.name||J.getters.isAuthorized?"signin"===t.name&&J.getters.isAuthorized?s("/"):s():s("/signin")}));var Qt=Kt;r["a"].config.productionTip=!1,new r["a"]({router:Qt,store:J,render:function(t){return t(A)}}).$mount("#app")},"597f":function(t,e,s){},"5c0b":function(t,e,s){"use strict";s("9c0c")},6038:function(t,e,s){"use strict";s("f4d7")},"666e":function(t,e,s){"use strict";s("de7a")},"8d44":function(t,e,s){},"8d9d":function(t,e,s){"use strict";s("f5ce")},"8e5c":function(t,e,s){"use strict";s("00f7")},"9c0c":function(t,e,s){},a62a:function(t,e,s){},adaa:function(t,e,s){"use strict";s("a62a")},adab:function(t,e,s){"use strict";s("2b4f")},ceb0:function(t,e,s){"use strict";s("e46b")},cf05:function(t,e,s){t.exports=s.p+"img/logo.2669af65.png"},de7a:function(t,e,s){},e2d4:function(t,e,s){"use strict";s("8d44")},e46b:function(t,e,s){},f4d7:function(t,e,s){},f5ce:function(t,e,s){}});
//# sourceMappingURL=app.eea07377.js.map