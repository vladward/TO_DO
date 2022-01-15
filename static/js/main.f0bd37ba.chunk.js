(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{73:function(t,e,n){},74:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var c,a,i=n(0),o=n.n(i),r=n(10),s=n.n(r),l=(n(73),n(74),n(9)),d=n(18),u=n(56),j=n.n(u).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"d2b9a4d9-cefb-4fec-a892-1707fa6823da"}}),O=function(){return j.get("todo-lists")},b=function(t){return j.post("todo-lists",{title:t})},f=function(t){return j.delete("todo-lists/".concat(t))},h=function(t,e){return j.put("todo-lists/".concat(t),{title:e})},T=function(t){return j.get("todo-lists/".concat(t,"/tasks"))},k=function(t,e){return j.delete("todo-lists/".concat(t,"/tasks/").concat(e))},p=function(t,e){return j.post("todo-lists/".concat(t,"/tasks"),{title:e})},v=function(t,e,n){return j.put("todo-lists/".concat(t,"/tasks/").concat(e),n)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(a||(a={}));var g=[],m=n(11),I={},x=function(t,e,n){return function(c,a){var i=a().tasks[t].find((function(t){return t.id===e}));i&&v(t,e,Object(l.a)({title:i.title,description:i.description,status:i.status,priority:i.priority,startDate:i.startDate,deadline:i.deadline},n)).then((function(a){return 0===a.data.resultCode&&c(function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(e,n,t))})).catch((function(t){return console.log("error ",t)}))}},C=n(22),S=n(132),E=n(133),D=n(128),L=n(135),y=n(131),A=n(136),w=n(137),N=n(98),F=n(134),K=n(15),M=n(138),R=n(129),H=n(5),P=o.a.memo((function(t){var e=Object(i.useState)(""),n=Object(K.a)(e,2),c=n[0],a=n[1],o=Object(i.useState)(null),r=Object(K.a)(o,2),s=r[0],l=r[1],d=function(){""!==c.trim()?(t.addItem(c),a("")):l("Title is required")};return Object(H.jsxs)("div",{children:[Object(H.jsx)(M.a,{variant:"outlined",error:!!s,value:c,onChange:function(t){a(t.currentTarget.value)},onKeyPress:function(t){null!==s&&l(null),13===t.charCode&&d()},label:"Title",helperText:s}),Object(H.jsx)(D.a,{color:"primary",onClick:d,children:Object(H.jsx)(R.a,{})})]})})),U=o.a.memo((function(t){var e=Object(i.useState)(!1),n=Object(K.a)(e,2),c=n[0],a=n[1],o=Object(i.useState)(t.value),r=Object(K.a)(o,2),s=r[0],l=r[1];return c?Object(H.jsx)(M.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.onChange(s)}}):Object(H.jsx)("span",{onDoubleClick:function(){a(!0),l(t.value)},children:t.value})})),V=n(130),G=n(139),B=o.a.memo((function(t){var e=Object(i.useCallback)((function(){t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?c.Completed:c.New,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(H.jsxs)("div",{className:t.task.status===c.Completed?"is-done":"",children:[Object(H.jsx)(G.a,{checked:t.task.status===c.Completed,color:"primary",onChange:n}),Object(H.jsx)(U,{value:t.task.title,onChange:a}),Object(H.jsx)(D.a,{onClick:e,children:Object(H.jsx)(V.a,{})})]},t.task.id)})),J=o.a.memo((function(t){var e=Object(C.b)();Object(i.useEffect)((function(){var n;e((n=t.id,function(t){T(n).then((function(e){return!e.data.error&&t(function(t,e){return{type:"SET-TASKS",todoId:t,tasks:e}}(n,e.data.items))})).catch((function(t){return console.log("error ",t)}))}))}),[]);var n=Object(i.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),a=Object(i.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.id,t.changeTodolistTitle]),o=Object(i.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.id,t.changeFilter]),r=Object(i.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.id,t.changeFilter]),s=Object(i.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.id,t.changeFilter]),l=t.tasks;return"active"===t.filter&&(l=t.tasks.filter((function(t){return t.status===c.New}))),"completed"===t.filter&&(l=t.tasks.filter((function(t){return t.status===c.Completed}))),Object(H.jsxs)("div",{children:[Object(H.jsxs)("h3",{children:[Object(H.jsx)(U,{value:t.title,onChange:a}),Object(H.jsx)(D.a,{onClick:function(){t.removeTodolist(t.id)},children:Object(H.jsx)(V.a,{})})]}),Object(H.jsx)(P,{addItem:n}),Object(H.jsx)("div",{children:l.map((function(e){return Object(H.jsx)(B,{task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus},e.id)}))}),Object(H.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(H.jsx)(y.a,{variant:"all"===t.filter?"outlined":"text",onClick:o,color:"inherit",children:"All"}),Object(H.jsx)(y.a,{variant:"active"===t.filter?"outlined":"text",onClick:r,color:"primary",children:"Active"}),Object(H.jsx)(y.a,{variant:"completed"===t.filter?"outlined":"text",onClick:s,color:"secondary",children:"Completed"})]})]})}));var q=function(){var t=Object(C.c)((function(t){return t.todolists})),e=Object(C.c)((function(t){return t.tasks})),n=Object(C.b)();Object(i.useEffect)((function(){n((function(t){O().then((function(e){return t({type:"SET-TODOLISTS",todolists:e.data})})).catch((function(t){return console.log("Error adding a to-do ",t)}))}))}),[]);var c=Object(i.useCallback)((function(t,e){var c,a;n((c=e,a=t,function(t){k(c,a).then((function(e){return 0===e.data.resultCode&&t(function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(a,c))})).catch((function(t){return console.log("error ",t)}))}))}),[]),a=Object(i.useCallback)((function(t,e){n(function(t,e){return function(n){p(t,e).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item;n(function(t){return{type:"ADD-TASK",task:t}}(e))}})).catch((function(t){return console.log("error ",t)}))}}(e,t))}),[]),o=Object(i.useCallback)((function(t,e,c){n(x(c,t,{status:e}))}),[]),r=Object(i.useCallback)((function(t,e,c){n(x(c,t,{title:e}))}),[]),s=Object(i.useCallback)((function(t,e){n({type:"CHANGE-TODOLIST-FILTER",id:e,filter:t})}),[]),l=Object(i.useCallback)((function(t){n(function(t){return function(e){f(t).then((function(n){return 0===n.data.resultCode&&e({type:"REMOVE-TODOLIST",todolistId:t})})).catch((function(t){return console.log("To-do has not been removed ",t)}))}}(t))}),[]),d=Object(i.useCallback)((function(t,e){n(function(t,e){return function(n){h(t,e).then((function(c){return 0===c.data.resultCode&&n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))})).catch((function(t){return console.log("To-do title not updated ",t)}))}}(t,e))}),[]),u=Object(i.useCallback)((function(t){n(function(t){return function(e){b(t).then((function(t){return 0===t.data.resultCode&&e({type:"ADD-TODOLIST",todolist:t.data.data.item})})).catch((function(t){return console.log("To-do wasn't added ",t)}))}}(t))}),[n]);return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(S.a,{position:"static",children:Object(H.jsxs)(E.a,{children:[Object(H.jsx)(D.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(H.jsx)(F.a,{})}),Object(H.jsx)(L.a,{variant:"h6",children:"News"}),Object(H.jsx)(y.a,{color:"inherit",children:"Login"})]})}),Object(H.jsxs)(A.a,{fixed:!0,children:[Object(H.jsx)(w.a,{container:!0,style:{padding:"20px"},children:Object(H.jsx)(P,{addItem:u})}),Object(H.jsx)(w.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(H.jsx)(w.a,{item:!0,children:Object(H.jsx)(N.a,{style:{padding:"10px"},children:Object(H.jsx)(J,{id:t.id,title:t.title,tasks:n,removeTask:c,changeFilter:s,addTask:a,changeTaskStatus:o,filter:t.filter,removeTodolist:l,changeTaskTitle:r,changeTodolistTitle:d})})},t.id)}))})]})]})},Y=n(40),z=n(60),Q=Object(Y.b)({todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.todolistId}));case"ADD-TODOLIST":return[Object(l.a)(Object(l.a)({},e.todolist),{},{filter:"all"})].concat(Object(d.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{filter:e.filter}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{filter:"all"})}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(l.a)(Object(l.a)({},t),{},Object(m.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(l.a)(Object(l.a)({},t),{},Object(m.a)({},e.task.todoListId,[e.task].concat(Object(d.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(l.a)(Object(l.a)({},t),{},Object(m.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(l.a)(Object(l.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(l.a)(Object(l.a)({},t),{},Object(m.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":return Object(l.a)(Object(l.a)({},t),{},Object(m.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.todolistId}))));case"SET-TODOLISTS":var n=Object(l.a)({},t);return e.todolists.forEach((function(t){n[t.id]=[]})),n;case"SET-TASKS":return Object(l.a)(Object(l.a)({},t),{},Object(m.a)({},e.todoId,e.tasks));default:return t}}}),W=Object(Y.c)(Q,Object(Y.a)(z.a));window.store=W,s.a.render(Object(H.jsx)(o.a.StrictMode,{children:Object(H.jsx)(C.a,{store:W,children:Object(H.jsx)(q,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.f0bd37ba.chunk.js.map