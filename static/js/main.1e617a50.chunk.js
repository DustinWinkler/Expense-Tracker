(this["webpackJsonpdustinwinker-leandata-frontend-take-home"]=this["webpackJsonpdustinwinker-leandata-frontend-take-home"]||[]).push([[0],{26:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c,s=n(1),r=n(10),a=n.n(r),i=n(4),o=(n(26),n(14)),l=n.n(o),u=n(16),d=n(3),j=n(5);!function(e){e.Food="Food",e.Travel="Travel",e.Health="Health",e.Supplies="Supplies"}(c||(c={}));var b=[{user:{firstName:"Jersey",lastName:"Mike",id:"Mike1234",budget:1e4},category:c.Food,cost:1e3,description:"Delicious sandwich party",holderID:"Mike1234",id:"Food1235"},{user:{firstName:"Dustin",lastName:"Winkler",id:"Dustin1234",budget:1e3},category:c.Travel,cost:12,description:"Trip to Amsterdam",holderID:"Dustin1234",id:"Food1234"}],O=Object(j.b)({name:"expenses",initialState:b,reducers:{addExpense:function(e,t){var n=t.payload;e.push(n)},updateExpense:function(e,t){var n=t.payload;console.log("payload",n);var c=e.filter((function(e){return e.id!==n.id}));return console.log(c),c.push(n),c},deleteExpense:function(e,t){var n=t.payload;return e.filter((function(e){return console.log(e.id!==n.id),e.id!==n.id}))}}}),h=O.actions,f=h.addExpense,p=h.updateExpense,x=h.deleteExpense,v=O.reducer,m=Object(j.b)({name:"SelectedCategory",initialState:{category:null},reducers:{setSelectedCategory:function(e,t){e.category===t.payload&&(e.category=null),e.category=t.payload}}}),g=m.actions.setSelectedCategory,N=m.reducer,E=Object(j.b)({name:"SelectedUser",initialState:{user:null},reducers:{setSelectedUser:function(e,t){var n,c;(null===(n=e.user)||void 0===n?void 0:n.id)===(null===(c=t.payload)||void 0===c?void 0:c.id)?e.user=null:e.user=t.payload}}}),S=E.actions.setSelectedUser,y=E.reducer,T=n(8),C=n(7),U=(n(31),n(0)),k=function(e){var t=e.handleEditMode,n=Object(i.b)(),c=Object(i.c)((function(e){return e.expenses})),r=Object(i.c)((function(e){return e.selectedUser})),a=Object(i.c)((function(e){return e.selectedCategory})),o=Object(s.useState)([]),l=Object(d.a)(o,2),u=l[0],j=l[1],b=Object(s.useState)([]),O=Object(d.a)(b,2),h=O[0],f=O[1];return Object(s.useEffect)((function(){var e=c;r.user&&(e=e.filter((function(e){var t;return e.holderID===(null===(t=r.user)||void 0===t?void 0:t.id)}))),a.category&&(e=e.filter((function(e){return e.category===a.category}))),j(e)}),[c,r,a]),Object(s.useEffect)((function(){if(u){var e=u.map((function(e,c){return Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{children:"".concat(e.user.firstName," ").concat(e.user.lastName)}),Object(U.jsx)("td",{children:e.category}),Object(U.jsx)("td",{children:e.description}),Object(U.jsxs)("td",{children:["$",e.cost]}),Object(U.jsxs)("td",{className:"table-change",children:[Object(U.jsx)("div",{onClick:function(){t(e)},children:Object(U.jsx)(C.a,{className:"icon-button edit",icon:T.a})}),Object(U.jsx)("div",{onClick:function(){n(x(e))},children:Object(U.jsx)(C.a,{className:"icon-button trash",icon:T.b})})]})]},c)}));f(e)}}),[u,t,n]),Object(U.jsx)("div",{className:"table-container",children:Object(U.jsxs)("table",{className:"expenses-table",children:[Object(U.jsxs)("thead",{children:[Object(U.jsx)("tr",{children:Object(U.jsx)("th",{className:"table-header",colSpan:5,children:"Expenses"})}),Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{children:"Name"}),Object(U.jsx)("th",{children:"Category"}),Object(U.jsx)("th",{children:"Description"}),Object(U.jsx)("th",{children:"Cost"}),Object(U.jsx)("th",{children:"Update"})]})]}),Object(U.jsx)("tbody",{children:h.map((function(e){return e}))})]})})},M=(n(33),function(e){var t,n,c=e.pingErrorMessage,r=Object(i.c)((function(e){return e.expenses})),a=Object(i.c)((function(e){return e.selectedUser})),o=Object(i.c)((function(e){return e.selectedCategory})),j=Object(i.b)(),b=Object(s.useState)(0),O=Object(d.a)(b,2),h=O[0],x=O[1],v=Object(s.useState)(0),m=Object(d.a)(v,2),N=m[0],E=m[1],y=Object(s.useState)(0),T=Object(d.a)(y,2),C=T[0],M=T[1],D=Object(s.useState)(!1),w=Object(d.a)(D,2),F=w[0],I=w[1],L=Object(s.useState)("Food"),A=Object(d.a)(L,2),H=A[0],_=A[1],P=Object(s.useState)(""),R=Object(d.a)(P,2),X=R[0],$=R[1],B=Object(s.useState)(0),J=Object(d.a)(B,2),W=J[0],Y=J[1],G=Object(s.useState)(!1),V=Object(d.a)(G,2),q=V[0],z=V[1],K=Object(s.useState)(!1),Q=Object(d.a)(K,2),Z=Q[0],ee=Q[1],te=Object(s.useState)(null),ne=Object(d.a)(te,2),ce=ne[0],se=ne[1];function re(){a.user&&(I((function(e){return!e})),Z&&(ee(!1),_("Food"),$(""),Y(0)))}function ae(){return(ae=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(null===(n=a.user)||void 0===n?void 0:n.id)!==t.user.id&&j(S(t.user)),e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:se(t.id),_(t.category),$(t.description),Y(t.cost),ee(!0),I(!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){var e=0;r.length>0?r.forEach((function(t){e+=t.cost})):e=0,x(e)}),[r]),Object(s.useEffect)((function(){var e=0;r.length>0&&a?r.filter((function(e){var t;return e.holderID===(null===(t=a.user)||void 0===t?void 0:t.id)})).forEach((function(t){e+=t.cost})):e=0;E(e)}),[r,a]),Object(s.useEffect)((function(){var e=0;r.length>0&&o?r.filter((function(e){return e.category===o.category})).forEach((function(t){e+=t.cost})):e=h;M(e)}),[o,r,h]),Object(s.useEffect)((function(){I(!1)}),[a]),Object(U.jsxs)("div",{className:"expenses-header-container",children:[Object(U.jsxs)("div",{className:"expense-totals",children:[Object(U.jsxs)("div",{className:"expenses-totals-container",children:[Object(U.jsxs)("p",{className:"expenses-header-money",children:["$",h]}),Object(U.jsx)("p",{className:"expenses-header-description",children:"TOTAL COMPANY EXPENSES"})]}),Object(U.jsxs)("div",{className:"expenses-totals-container",children:[Object(U.jsxs)("p",{className:"expenses-header-money",children:["$",N]}),Object(U.jsx)("p",{className:"expenses-header-description",children:a.user?"TOTAL EXPENSES FOR: ".concat(null===(t=a.user)||void 0===t?void 0:t.firstName):"SELECT A USER TO SEE THEIR TOTAL"})]}),Object(U.jsxs)("div",{className:"expenses-totals-container",children:[Object(U.jsxs)("p",{className:"expenses-header-money",children:["$",C]}),Object(U.jsxs)("span",{className:"expenses-header-description",children:["FILTER BY: ",Object(U.jsx)("form",{className:"filter-category-form",children:Object(U.jsxs)("select",{onChange:function(e){var t=e.currentTarget.value;j(g("None"===t?null:t))},children:[Object(U.jsx)("option",{value:"",children:"None"}),Object(U.jsx)("option",{value:"Food",children:"Food"}),Object(U.jsx)("option",{value:"Travel",children:"Travel"}),Object(U.jsx)("option",{value:"Health",children:"Health"}),Object(U.jsx)("option",{value:"Supplies",children:"Supplies"})]})}),"TOTAL EXPENSES"]})]})]}),Object(U.jsxs)("button",{onClick:re,className:"",children:[" ",a.user?"Add Expense for ".concat(null===(n=a.user)||void 0===n?void 0:n.firstName," "):"Select a User to add an Expense for them ",Object(U.jsx)("span",{className:"plus-button "+(F?" rotated":""),children:" +"})]}),Object(U.jsxs)("form",{className:"expense-form "+(F?"form-on":""),children:[Object(U.jsx)("label",{children:"Description"}),Object(U.jsx)("input",{value:X,onChange:function(e){var t=e.currentTarget.value;$(t)}}),Object(U.jsx)("label",{children:"Cost"}),Object(U.jsx)("input",{className:q?"error":"",value:W,onChange:function(e){var t,n,s=+e.currentTarget.value;Y(s);var r=(null===(t=a.user)||void 0===t?void 0:t.budget)||0;console.log(null===(n=a.user)||void 0===n?void 0:n.budget,N+s),!s||N+s>r?(z(!0),c(s?"That would put them over budget":"The cost must be a valid number")):z(!1)}}),Object(U.jsx)("label",{children:"Category"}),Object(U.jsxs)("select",{onChange:function(e){var t=e.currentTarget.value;_(t)},children:[Object(U.jsx)("option",{value:"Food",children:"Food"}),Object(U.jsx)("option",{value:"Travel",children:"Travel"}),Object(U.jsx)("option",{value:"Health",children:"Health"}),Object(U.jsx)("option",{value:"Supplies",children:"Supplies"})]}),Object(U.jsxs)("button",{onClick:function(e){var t,n;e.preventDefault(),q||(Z?(j(p({user:a.user,category:H,cost:W,description:X,holderID:null===(t=a.user)||void 0===t?void 0:t.id,id:ce})),re()):(j(f({user:a.user,category:H,cost:W,description:X,holderID:null===(n=a.user)||void 0===n?void 0:n.id,id:Math.floor(1e4*Math.random())+1})),_("Food"),$(""),Y(0),re()))},children:[Z?"Update":"Create"," Expense"]})]}),Object(U.jsx)(k,{handleEditMode:function(e){return ae.apply(this,arguments)}})]})});n(34);var D=function(){var e=Object(i.c)((function(e){return e.errorMessage}));return Object(U.jsxs)("div",{children:[Object(U.jsx)("div",{className:"error-message "+(e.message?"shown":""),children:e.message&&e.message}),Object(U.jsx)("h1",{className:"main-header",children:"Expense Tracker"})]})},w=Object(j.b)({name:"users",initialState:[{firstName:"Jersey",lastName:"Mike",id:"Mike1234",budget:1e4},{firstName:"Dustin",lastName:"Winkler",id:"Dustin1234",budget:1e3}],reducers:{addUser:function(e,t){var n=t.payload;e.push(n)},updateUser:function(e,t){var n=t.payload,c=e.filter((function(e){return e.id!==n.id}));return c.push(n),c},deleteUser:function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n.id}))}}}),F=w.actions,I=F.addUser,L=F.updateUser,A=F.deleteUser,H=w.reducer,_=(n(35),function(e){var t=e.pingErrorMessage,n=e.deleteUser,c=Object(i.c)((function(e){return e.users})),r=Object(i.c)((function(e){return e.selectedUser})),a=Object(i.b)(),o=Object(s.useState)(!1),l=Object(d.a)(o,2),u=l[0],j=l[1],b=Object(s.useState)(""),O=Object(d.a)(b,2),h=O[0],f=O[1],p=Object(s.useState)(""),x=Object(d.a)(p,2),v=x[0],m=x[1],g=Object(s.useState)(0),N=Object(d.a)(g,2),E=N[0],y=N[1],k=Object(s.useState)(!1),M=Object(d.a)(k,2),D=M[0],w=M[1],F=Object(s.useState)(!1),A=Object(d.a)(F,2),H=A[0],_=A[1],P=Object(s.useState)(""),R=Object(d.a)(P,2),X=R[0],$=R[1],B=Object(s.useState)(c),J=Object(d.a)(B,2),W=J[0],Y=J[1];function G(){j((function(e){return!e})),H&&(_(!1),f(""),m(""),y(0))}return Object(s.useEffect)((function(){Y(""===X?c:function(e){return e.filter((function(e){return e.firstName.toLowerCase().includes(X)||e.lastName.toLowerCase().includes(X)}))})}),[X,c]),Object(U.jsxs)("div",{className:"users-container",children:[Object(U.jsx)("h1",{children:"Users"}),Object(U.jsxs)("h4",{children:["Click a name to select them",Object(U.jsx)("br",{}),"This will filter to their expenses as well."]}),Object(U.jsxs)("button",{className:"toggle-user-form",onClick:G,children:["Add User ",Object(U.jsx)("span",{className:"plus-button "+(u?"rotated":""),children:"+"})]}),Object(U.jsxs)("form",{className:"user-form "+(u?"form-on":""),children:[Object(U.jsx)("label",{children:"First Name"}),Object(U.jsx)("input",{value:h,onChange:function(e){var t=e.currentTarget.value;f(t)}}),Object(U.jsx)("label",{children:"Last Name"}),Object(U.jsx)("input",{value:v,onChange:function(e){var t=e.currentTarget.value;m(t)}}),Object(U.jsx)("label",{children:"Budget"}),Object(U.jsx)("input",{className:D?"error":"",value:E,onChange:function(e){var n=+e.currentTarget.value;y(n),n?w(!1):(w(!0),t("The budget must be a valid number"))}}),Object(U.jsxs)("button",{onClick:function(e){if(e.preventDefault(),!D)if(H){if(console.log("this"),!r.user)return;a(L({firstName:h,lastName:v,budget:E,id:r.user.id})),a(S({firstName:h,lastName:v,budget:E,id:r.user.id})),G()}else a(I({firstName:h,lastName:v,budget:E,id:Math.floor(1e4*Math.random())+1})),f(""),m(""),G()},children:[H?"Update ":"Create "," User"]})]}),Object(U.jsx)("input",{className:"user-search",value:X,onChange:function(e){var t=e.currentTarget.value;$(t.toLowerCase())},placeholder:"Search Users"}),W.map((function(e,t){var c;return Object(U.jsxs)("div",{className:"user-container "+((null===(c=r.user)||void 0===c?void 0:c.id)===e.id?"selected":""),children:[Object(U.jsxs)("div",{className:"user-container-header",children:[Object(U.jsx)("h2",{onClick:function(){a(S(e))},children:"".concat(e.firstName," ").concat(e.lastName)}),Object(U.jsxs)("div",{children:[Object(U.jsx)(C.a,{onClick:function(){!function(e){var t;f(e.firstName),m(e.lastName),y(e.budget),_(!0),j(!0),(null===(t=r.user)||void 0===t?void 0:t.id)!==e.id&&a(S(e))}(e)},className:"icon-button edit",icon:T.a}),Object(U.jsx)(C.a,{onClick:function(){n(e)},className:"icon-button trash",icon:T.b})]})]}),Object(U.jsxs)("p",{children:["BUDGET: $",e.budget]})]},t)}))]})}),P=Object(j.b)({name:"error",initialState:{message:null},reducers:{setErrorMessage:function(e,t){e.message=t.payload}}}),R=P.actions.setErrorMessage,X=P.reducer;var $=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.expenses})),n=Object(i.c)((function(e){return e.selectedUser}));function c(t){clearTimeout(),e(R(t)),setTimeout((function(){e(R(null))}),5e3)}return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(D,{}),Object(U.jsxs)("div",{className:"main-container",children:[Object(U.jsx)(_,{deleteUser:function(c){var s;t.forEach((function(t){t.holderID===c.id&&e(x(t))})),e(A(c)),n&&(null===(s=n.user)||void 0===s?void 0:s.id)===c.id&&e(S(null))},pingErrorMessage:c}),Object(U.jsx)("div",{className:"expenses-container",children:Object(U.jsx)(M,{pingErrorMessage:c})})]})]})},B=(n(36),n(6)),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.c,W=Object(j.a)({reducer:{users:H,expenses:v,errorMessage:X,selectedUser:y,selectedCategory:N},devTools:J});a.a.render(Object(U.jsx)(i.a,{store:W,children:Object(U.jsx)($,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1e617a50.chunk.js.map