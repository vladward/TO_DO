(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{73:function(t,e,n){},74:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n.n(i),a=n(9),r=n.n(a),o=(n(73),n(74),n(16)),s=n(124),l=n(113),d=n(114),u=n(5),j=c.a.memo((function(t){var e=Object(i.useState)(""),n=Object(o.a)(e,2),c=n[0],a=n[1],r=Object(i.useState)(!1),j=Object(o.a)(r,2),O=j[0],b=j[1];console.log("AddItemForm");var f=function(){""!==c.trim()?t.addItem(c.trim()):b(!0),a("")};return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,{label:O?"Error":t.initValue?t.initValue:"Enter title",size:"small",variant:"outlined",error:O,helperText:O?"Title is required":"",onChange:function(t){t.currentTarget.value&&b(!1),a(t.currentTarget.value)},value:c,onKeyPress:function(t){"Enter"===t.key&&f()}}),Object(u.jsx)(l.a,{"aria-label":"delete",onClick:f,style:{color:"green"},disabled:!c,children:Object(u.jsx)(d.a,{fontSize:"small"})})]})})),O=n(119),b=n(84),f=n(120),m=n(121),T=n(116),h=n(118),I=n(123),p=n(122),x=n(12),v=n(19),D=n(125),S=[],k=function(t,e){return{type:"CHANGE-TODOLIST-FILTER",filter:t,todolistId:e}},E=n(21),L=c.a.memo((function(t){var e=t.title,n=t.setNewTitle,c=Object(i.useState)(!1),a=Object(o.a)(c,2),r=a[0],l=a[1],d=Object(i.useState)(e),j=Object(o.a)(d,2),O=j[0],b=j[1],f=function(){l(!1),n(O)};return r?Object(u.jsx)(s.a,{onBlur:f,value:O,onKeyPress:function(t){"Enter"===t.key&&f()},onChange:function(t){b(t.currentTarget.value)},autoFocus:!0,style:{width:"200px"}}):Object(u.jsx)("span",{onDoubleClick:function(){l(!0)},children:e})})),y=n(117),A=n(2),C=n(61),g=n(59),w=n(11),N={},K=n(115),G=n(126),V=n(60),z=n.n(V),H=c.a.memo((function(t){var e=t.todolistId,n=t.taskId,c=Object(E.b)(),a=Object(E.c)((function(t){return t.tasks[e].filter((function(t){return t.id===n}))[0]})),r=Object(i.useCallback)((function(){return c(function(t,e){return{type:"REMOVE-TASKS",taskId:t,todoListID:e}}(n,e))}),[n,e]),o=Object(i.useCallback)((function(t){return c(function(t,e,n){return{type:"CHANGE-TASKS-STATUS",taskId:t,todoListID:e,status:n}}(n,e,t.currentTarget.checked))}),[n,e]),s=Object(i.useCallback)((function(t){return c(function(t,e,n){return{type:"CHANGE-TASKS-TITLE",taskId:t,todoListID:e,newTitle:n}}(n,e,t))}),[n,e]);return Object(u.jsxs)(K.a,{className:a.isDone?"done-task":"",disableGutters:!0,style:{padding:"0",display:"flex",justifyContent:"space-between",maxWidth:"260px"},divider:!0,children:[Object(u.jsx)(G.a,{edge:"start",size:"small",checked:a.isDone,onChange:o}),Object(u.jsx)(L,{title:a.title,setNewTitle:s}),Object(u.jsx)(l.a,{size:"small",onClick:r,"aria-label":"delete",children:Object(u.jsx)(z.a,{})})]},n)})),R=c.a.memo((function(t){var e=t.todolistId,n=Object(E.c)((function(t){return t.todolists.filter((function(t){return t.id===e}))[0]})),c=Object(E.c)((function(t){return t.tasks[e]})),a=Object(E.b)(),r=Object(i.useCallback)((function(t){a(function(t,e){return{type:"ADD-TASKS",todoListID:t,title:e}}(e,t))}),[a,e]),o=Object(i.useCallback)((function(t){a(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",title:t,id:e}}(t,e))}),[e]),s=c;return"active"===n.filter&&(s=c.filter((function(t){return!t.isDone}))),"completed"===n.filter&&(s=c.filter((function(t){return t.isDone}))),Object(u.jsxs)("div",{className:"todolist",children:[Object(u.jsxs)(T.a,{variant:"h5",align:"center",children:[Object(u.jsx)(L,{title:n.title,setNewTitle:o}),Object(u.jsx)(l.a,{"aria-label":"delete",onClick:function(){return a(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e))},children:Object(u.jsx)(y.a,{fontSize:"medium"})})]}),Object(u.jsx)(j,{addItem:r,initValue:"Enter task title"}),s.map((function(t){return Object(u.jsx)(H,{taskId:t.id,todolistId:e},t.id)})),Object(u.jsxs)("div",{className:"filterButtons",children:[Object(u.jsx)(h.a,{variant:"contained",size:"small",color:"all"===n.filter?"primary":"default",onClick:function(){a(k("all",e))},children:"All"}),Object(u.jsx)(h.a,{variant:"contained",size:"small",color:"active"===n.filter?"primary":"default",onClick:function(){a(k("active",e))},children:"Active"}),Object(u.jsx)(h.a,{variant:"contained",size:"small",color:"completed"===n.filter?"primary":"default",onClick:function(){a(k("completed",e))},children:"Completed"})]})]})}));var M=function(){var t=Object(E.c)((function(t){return t.todolists})),e=Object(E.b)(),n=Object(i.useCallback)((function(t){e(function(t){return{type:"ADD-TODOLIST",title:t,todolistId:Object(D.a)()}}(t))}),[e]),c=t.map((function(t){return Object(u.jsx)(O.a,{item:!0,children:Object(u.jsx)(b.a,{elevation:3,className:"paper",children:Object(u.jsx)(R,{todolistId:t.id},t.id)})},t.id)}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f.a,{position:"sticky",children:Object(u.jsxs)(m.a,{style:{justifyContent:"space-between"},children:[Object(u.jsx)(l.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(u.jsx)(p.a,{})}),Object(u.jsx)(T.a,{variant:"h6",children:"Todolists"}),Object(u.jsx)(h.a,{color:"inherit",variant:"outlined",children:"Login"})]})}),Object(u.jsxs)(I.a,{fixed:!0,children:[Object(u.jsx)(O.a,{container:!0,style:{padding:"20px 0"},children:Object(u.jsx)(j,{addItem:n,initValue:"Enter todolist name"})}),Object(u.jsx)(O.a,{container:!0,spacing:2,children:c})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(51),F=Object(B.a)({todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[].concat(Object(v.a)(t),[{id:e.todolistId,title:e.title,filter:"all"}]);case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(x.a)(Object(x.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.todolistId?Object(x.a)(Object(x.a)({},t),{},{filter:e.filter}):t}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASKS":return Object(x.a)(Object(x.a)({},t),{},Object(w.a)({},e.todoListID,t[e.todoListID].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASKS":var n={id:Object(D.a)(),title:e.title,isDone:!1};return Object(x.a)(Object(x.a)({},t),{},Object(w.a)({},e.todoListID,[n].concat(Object(v.a)(t[e.todoListID]))));case"CHANGE-TASKS-STATUS":return Object(x.a)(Object(x.a)({},t),{},Object(w.a)({},e.todoListID,t[e.todoListID].map((function(t){return t.id===e.taskId?Object(x.a)(Object(x.a)({},t),{},{isDone:e.status}):t}))));case"CHANGE-TASKS-TITLE":return Object(x.a)(Object(x.a)({},t),{},Object(w.a)({},e.todoListID,t[e.todoListID].map((function(t){return t.id===e.taskId?Object(x.a)(Object(x.a)({},t),{},{title:e.newTitle}):t}))));case"ADD-TODOLIST":return Object(x.a)(Object(x.a)({},t),{},Object(w.a)({},e.todolistId,[]));case"REMOVE-TODOLIST":var i=Object(x.a)({},t),c=e.id,a=(Object(g.a)(i[c]),Object(A.a)(i,[c].map(C.a)));return a;default:return t}}}),W=Object(B.b)(F);r.a.render(Object(u.jsx)(E.a,{store:W,children:Object(u.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[82,1,2]]]);
//# sourceMappingURL=main.dd270b0c.chunk.js.map