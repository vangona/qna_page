(this.webpackJsonpanswer_page=this.webpackJsonpanswer_page||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(30),s=n.n(r),i=n(7),o=n(18);n(39),n(51),n(50);o.a.initializeApp({apiKey:"AIzaSyDdKuvipqVEbHicVyXLDjx_frIUA0EHMsw",authDomain:"myowndrawer-98874.firebaseapp.com",projectId:"myowndrawer-98874",storageBucket:"myowndrawer-98874.appspot.com",messagingSenderId:"278557159432",appId:"1:278557159432:web:ef028ac7dec9f98b35e1bd",measurementId:"G-4ZY2ZWVK8V"});o.a;var u=o.a.auth(),j=o.a.firestore(),l=(o.a.storage(),n(22)),b=n(5),d=n(10),h=n.n(d),p=n(33),O=n(15),m=n(32),x={USER_ID:"user_9Yzjv9HczozAI5LPmsW88",SERVICE_ID:"service_wd4vewg",TEMPLATE_ID:"template_8cqpfld"},f=n(1),v=function(){var e=Object(b.h)(),t=e.id,n=e.questionid,c=Object(a.useState)({}),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),d=l[0],v=l[1],w=Object(a.useState)("\uc775\uba85"),g=Object(i.a)(w,2),_=g[0],y=g[1],S=Object(a.useState)("\uc775\uba85"),I=Object(i.a)(S,2),k=I[0],E=I[1],A=Object(a.useState)(!1),N=Object(i.a)(A,2),D=N[0],C=N[1],q=function(){var e=Object(O.a)(h.a.mark((function e(n){var a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=s.answerArray,c={answerContent:d,instaID:_,nickname:k},e.next=5,j.collection("".concat(t)).doc("".concat(s.question)).update({answerArray:[].concat(Object(p.a)(a),[c])}).then((function(){alert("\uc131\uacf5\uc801\uc73c\ub85c \ub2f5\uc7a5\ud588\uc2b5\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4."),m.a.sendForm(x.SERVICE_ID,x.TEMPLATE_ID,n.target,x.USER_ID).then((function(e){console.log("Success",e)})).catch((function(e){console.log("Error",e.text)}))})).catch((function(e){alert("\ubb34\uc5b8\uac00 \ubb38\uc81c\uac00 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. \uc2a4\ud06c\ub9b0\uc0f7\uc744 \ud1b5\ud574 \uc54c\ub824\uc8fc\uc2dc\uba74 \uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4.",e)}));case 5:v(""),y("\uc775\uba85"),E("\uc775\uba85");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=e.target,n=t.name,a=t.value;"answer"===n?v(a):"instagram"===n?y(a):"nickname"===n&&E(a)},F=function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.collection("".concat(t)).where("id","==",n).get().then((function(e){e.forEach((function(e){o(e.data()),C(!0)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){F()}),[]),Object(f.jsx)("div",{className:"answer__container",children:D?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"answer__title",children:s.question}),Object(f.jsxs)("form",{className:"answer__form",onSubmit:q,children:[Object(f.jsx)("textarea",{className:"answer__content",type:"text",placeholder:"\ub300\ub2f5\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.",name:"answer",onChange:L,value:d,required:!0}),Object(f.jsxs)("div",{className:"answer__input-container",children:[Object(f.jsxs)("div",{className:"answer__nickname-container",children:[Object(f.jsx)("label",{className:"answer__nickname-label",htmlFor:"nickname",children:"\uc774\ub984 : "}),Object(f.jsx)("input",{className:"answer__nickname-input",type:"text",name:"nickname",placeholder:"\uc774\ub984",onChange:L,value:k})]}),Object(f.jsxs)("div",{className:"answer__instagram-container",children:[Object(f.jsx)("label",{className:"answer__instagram-label",htmlFor:"instagram",children:"\uc778\uc2a4\ud0c0\uadf8\ub7a8 ID : "}),Object(f.jsx)("input",{className:"answer__instagram-input",type:"text",name:"instagram",placeholder:"\uc778\uc2a4\ud0c0 \uc544\uc774\ub514",onChange:L,value:_})]}),Object(f.jsx)("input",{className:"answer__submit",type:"submit",value:"\ub2f5\uc7a5 \ubcf4\ub0b4\uae30"})]})]})]}):"Loading..."})},w=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],j=s[1],l=Object(a.useState)(!0),b=Object(i.a)(l,2),d=b[0],p=b[1],m=Object(a.useState)(""),x=Object(i.a)(m,2),v=x[0],w=x[1],g=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&j(a)},_=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=7;break}return e.next=5,u.createUserWithEmailAndPassword(n,o);case 5:e.next=9;break;case 7:return e.next=9,u.signInWithEmailAndPassword(n,o);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),"There is no user record corresponding to this identifier. The user may have been deleted."===e.t0.message?w("\uc785\ub825\ud558\uc2e0 \uc544\uc774\ub514\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."):w(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"auth-form__container",children:Object(f.jsxs)("form",{className:"auth-form",onSubmit:_,children:[Object(f.jsx)("input",{className:"input auth__input",name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:g}),Object(f.jsx)("input",{className:"input auth__input",name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:g}),Object(f.jsx)("input",{className:"btn",type:"submit",value:d?"Create Account":"Log In"}),Object(f.jsx)("span",{className:"error",children:v}),Object(f.jsx)("span",{className:"change-btn",onClick:function(){return p((function(e){return!e}))},children:d?"Log In":"Create Account"})]})})})},g=function(){return Object(f.jsx)("div",{children:"Home"})},_=n(34),y=n(53),S=function(e){var t=e.userAuth,n=Object(b.g)(),c=Object(a.useState)(""),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)([]),l=Object(i.a)(u,2),d=l[0],p=l[1],m=Object(a.useState)(""),x=Object(i.a)(m,2),v=x[0],w=x[1],g=Object(a.useState)(!1),S=Object(i.a)(g,2),I=S[0],k=S[1],E=Object(b.h)().id,A=function(){var e=Object(O.a)(h.a.mark((function e(n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={question:s,id:Object(y.a)(),answerArray:[],registered_dttm:Date.now(),updated_dttm:0},e.next=4,j.collection("".concat(t)).doc("".concat(s)).set(a);case 4:o("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.collection("".concat(t)).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(_.a)({id:e.id},e.data())}));p(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(O.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.collection("".concat(t)).get();case 2:n=e.sent,w(n.docs[0].data()),k(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){E!==t&&n.push("/".concat(E,"/a")),D(),N()}),[]),Object(f.jsx)("div",{children:I?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"\ud504\ub85c\ud544(\uc9c8\ubb38 \ub9cc\ub4e4\uae30)"}),Object(f.jsxs)("form",{onSubmit:A,children:[Object(f.jsx)("input",{type:"text",placeholder:"\uc9c8\ubb38",onChange:function(e){var t=e.target.value;o(t)},value:s}),Object(f.jsx)("input",{type:"submit"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h5",{children:"\uc9c8\ubb38 \ubaa9\ub85d"}),Object(f.jsx)("select",{onChange:function(e){var t=e.target.value;d.map((function(e){return e.question===t&&w(e)}))},children:d.map((function(e,t){return Object(f.jsx)("option",{children:e.question},t)}))})," ",Object(f.jsx)("br",{}),Object(f.jsxs)("a",{href:"http://localhost:3000/#/YGuWuFyRnEbojXt1J1SewSpDjkt2/".concat(v.id),children:[v.question," \ub2f5\ubcc0 \ub9c1\ud06c"]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\uae00\uc4f4\uc774"}),Object(f.jsx)("th",{children:"\ub0b4\uc6a9"}),Object(f.jsx)("th",{children:"\uc778\uc2a4\ud0c0 \uc544\uc774\ub514"})]})}),Object(f.jsx)("tbody",{children:v.answerArray.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.nickname}),Object(f.jsx)("td",{children:e.answerContent}),Object(f.jsx)("td",{children:e.instaID})]},t)}))})]})]})]})]}):"Loading..."})},I=function(e){var t=e.isLoggedIn,n=e.userAuth;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{exact:!0,path:"/",children:t?Object(f.jsx)(b.a,{to:{pathname:"/".concat(n)}}):Object(f.jsx)(g,{})}),Object(f.jsx)(b.b,{exact:!0,path:"/auth",children:t?Object(f.jsx)(b.a,{to:{pathname:"/".concat(n)}}):Object(f.jsx)(w,{})}),Object(f.jsx)(b.b,{exact:!0,path:"/:id",children:Object(f.jsx)(S,{userAuth:n})}),Object(f.jsx)(b.b,{exact:!0,path:"/:id/:questionid",children:Object(f.jsx)(v,{userAuth:n})})]})})})},k=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("anonymous"),s=Object(i.a)(r,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){u.onAuthStateChanged((function(e){e&&j(e.uid),c(!0),console.log(o)}))})),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(I,{isLoggedIn:Boolean(o),userAuth:o}):"Loading..."})};n(48);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.4e58f0b3.chunk.js.map