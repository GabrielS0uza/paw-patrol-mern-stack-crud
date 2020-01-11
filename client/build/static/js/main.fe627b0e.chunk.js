(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),l=a.n(s),c=(a(95),a(11)),i=a(12),o=a(14),d=a(13),u=a(15),m=a(4),h=a(50),p=a(35),g=a(7),b=a.n(g),f=a(10);function v(e){var t,a;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)},n.next=3,b.a.awrap(fetch("/api/dogs",t));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}))}function E(e,t){var a,n;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a={method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},r.next=3,b.a.awrap(fetch("/api/dogs/".concat(e),a));case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}))}function O(e){var t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(fetch("/api/dogs/".concat(e),{method:"DELETE"}));case 2:return t=a.sent,a.abrupt("return",t);case 4:case"end":return a.stop()}}))}function j(){var e,t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(fetch("/api/dogs"));case 2:return e=a.sent,a.next=5,b.a.awrap(e.json());case 5:return t=a.sent,a.abrupt("return",t);case 7:case"end":return a.stop()}}))}function C(e){var t,a;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(fetch("/api/dogs/".concat(e)));case 2:return t=n.sent,n.next=5,b.a.awrap(t.json());case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}))}var y=a(143),x=a(136),S=a(76),V=a.n(S),k=a(137),N=a(149),w=a(139),D=a(138),L=a(22),H=a(18),P=a(58),I=a(135),z=a(146),T=a(74),q=a.n(T),M=a(40),F=a.n(M),W=a(38),A=a.n(W),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).createDog=function(){var e,t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(v(a.state.dog));case 2:return e=n.sent,n.next=5,b.a.awrap(e.json());case 5:return t=n.sent,e.ok&&(a.props.closeNewDogModal(),a.props.setHomePageStateHandler()),n.abrupt("return",t);case 8:case"end":return n.stop()}}))},a.handleVaccineChange=function(e){return function(t){var n=Object(P.a)(a.state.dog.listVaccines);n[e]=t.target.value,a.setState({dog:Object(H.a)({},a.state.dog,{listVaccines:n})}),""===t.target.value.trim()?a.setState({errorsListVaccines:Object(H.a)({},a.state.errorsListVaccines,Object(L.a)({},t.target.name,!0))}):a.setState({errorsListVaccines:Object(H.a)({},a.state.errorsListVaccines,Object(L.a)({},t.target.name,!1))})}},a.handleVaccineDelete=function(e){return function(t){var n=a.state.dog.listVaccines;n.splice(e,1),a.setState({dog:Object(H.a)({},a.state.dog,{listVaccines:n})});var r={};n.forEach((function(e,t){""===e.trim()?r["vaccine".concat(t+1)]=!0:r["vaccine".concat(t+1)]=!1})),a.setState({errorsListVaccines:r})}},a.addVaccine=function(e){var t=a.state.dog.listVaccines.concat([""]);a.setState({dog:Object(H.a)({},a.state.dog,{listVaccines:t})})},a.state={dog:{name:"",breed:"",age:"",listVaccines:[""]},errors:{name:!1,breed:!1,age:!1},errorsListVaccines:{},isLoading:!1},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({dog:Object(H.a)({},this.state.dog,Object(L.a)({},e.target.name,e.target.value))}),""===e.target.value.trim()?this.setState({hasErrors:!0,errors:Object(H.a)({},this.state.errors,Object(L.a)({},e.target.name,!0))}):this.setState({hasErrors:!1,errors:Object(H.a)({},this.state.errors,Object(L.a)({},e.target.name,!1))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.createDog()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement("form",{id:"form-new-dog",noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement(z.a,{required:!0,error:this.state.errors.name,helperText:!!this.state.errors.name&&"Required field.",id:"outlined-required",label:"Name",name:"name",className:t.textField,margin:"normal",variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},value:this.state.dog.name,onChange:this.handleChange,onBlur:this.handleChange}),r.a.createElement(z.a,{required:!0,error:this.state.errors.breed,helperText:!!this.state.errors.breed&&"Required field.",id:"outlined-required",label:"Breed",name:"breed",className:t.textField,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},value:this.state.dog.breed,onChange:this.handleChange,onBlur:this.handleChange}),r.a.createElement(z.a,{required:!0,error:this.state.errors.age,helperText:!!this.state.errors.age&&"Required field.",id:"outlined-required",label:"Age",name:"age",className:t.textField,type:"number",margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{min:"0"},value:this.state.dog.age,onChange:this.handleChange,onBlur:this.handleChange}),r.a.createElement(I.a,{className:"divider",variant:"middle"}),r.a.createElement("h3",null,"List of Vaccines"),this.state.dog.listVaccines.map((function(a,n){return r.a.createElement("div",{className:t.vaccineFieldWrap,key:n},r.a.createElement(z.a,{required:!0,error:e.state.errorsListVaccines["vaccine".concat(n+1)],helperText:!!e.state.errorsListVaccines["vaccine".concat(n+1)]&&"Required field.",id:"outlined-required",label:"Vaccine ".concat(n+1),name:"vaccine".concat(n+1),className:t.textField,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},value:a,onChange:e.handleVaccineChange(n),onBlur:e.handleVaccineChange(n)}),e.state.dog.listVaccines.length>1?r.a.createElement(x.a,{onClick:e.handleVaccineDelete(n),className:"".concat(t.btnDeleteVaccine," btn-delete-circle"),size:"small","aria-label":"delete"},r.a.createElement(A.a,{fontSize:"small"})):null)})),r.a.createElement(x.a,{className:"".concat(t.btnAddVaccine," btn"),onClick:this.addVaccine,disabled:!this.state.dog.listVaccines.every((function(e){return""!==e.trim()})),size:"small","aria-label":"add"},r.a.createElement(F.a,null))),r.a.createElement("div",{className:t.modalActionsForm},r.a.createElement(k.a,{className:"btn-cancel btn",onClick:this.props.closeNewDogModal,size:"large"},"Cancel"),r.a.createElement(k.a,{disabled:!(Object.values(this.state.errors).every((function(e){return!1===e}))&&Object.values(this.state.errorsListVaccines).every((function(e){return!1===e}))&&Object.values(this.state.dog).every((function(e){return""!==e}))&&this.state.dog.listVaccines.every((function(e){return""!==e}))),variant:"contained",size:"large",type:"submit",className:"".concat(t.btnSaveDog," btn"),startIcon:r.a.createElement(q.a,null),form:"form-new-dog"},"Save")))}}]),t}(n.Component),R=Object(m.a)({textField:{width:"100%","& label.Mui-focused:not(.Mui-error)":{color:"sienna"},"& .MuiOutlinedInput-root.Mui-focused:not(.Mui-error) fieldset":{borderColor:"sienna"}},vaccineFieldWrap:{position:"relative"},btnAddVaccine:{background:"sienna",color:"#fff","&:hover":{backgroundColor:"sienna"},"&:disabled":{cursor:"not-allowed",pointerEvents:"all"}},btnDeleteVaccine:{position:"absolute",top:"-3px",right:"-16px",width:"35px",height:"35px",minHeight:"35px"},modalActionsForm:{flex:"0 0 auto",display:"flex",padding:"16px 0 4px",alignItems:"center",justifyContent:"flex-end"},btnSaveDog:{background:"rgb(76, 175, 80)",color:"#fff","&:hover":{backgroundColor:"rgb(76, 175, 80)"}}})(B),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={open:!1},a.handleOpen=a.handleOpen.bind(Object(f.a)(a)),a.handleClose=a.handleClose.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"contained",size:"large",type:"submit",className:"".concat(e.btnNewDog," btn"),startIcon:r.a.createElement(F.a,null),onClick:this.handleOpen},"Add New Dog"),r.a.createElement(N.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"new-dog-form-dialog"},r.a.createElement(D.a,null,"New Dog"),r.a.createElement(w.a,null,r.a.createElement(R,{closeNewDogModal:this.handleClose,setHomePageStateHandler:this.props.setHomePageStateHandler}))))}}]),t}(n.Component),_=Object(m.a)({btnNewDog:{background:"rgb(76, 175, 80)",color:"#fff","&:hover":{backgroundColor:"rgb(76, 175, 80)"}}})(J),$=a(140),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).deleteDog=function(){var e,t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(O(a.state.idDog));case 2:return e=n.sent,n.next=5,b.a.awrap(e.json());case 5:return t=n.sent,e.ok&&(a.handleClose(),a.props.setHomePageStateHandler()),n.abrupt("return",t);case 8:case"end":return n.stop()}}))},a.state={idDog:a.props.dog._id,open:!1},a.handleOpen=a.handleOpen.bind(Object(f.a)(a)),a.handleClose=a.handleClose.bind(Object(f.a)(a)),a.handleDelete=a.handleDelete.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleDelete",value:function(){this.deleteDog()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(x.a,{onClick:this.handleOpen,className:"btn-delete-circle btn",size:"small","aria-label":"delete"},r.a.createElement(A.a,{fontSize:"small"})),r.a.createElement(N.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"delete-dog-form-dialog"},r.a.createElement(D.a,null,"Delete ",this.props.dog.name),r.a.createElement(w.a,null,r.a.createElement($.a,{id:"alert-dialog-description"},"Do you really want to delete this dog? This process cannot be undone."),r.a.createElement("div",{className:e.modalActionsForm},r.a.createElement(k.a,{className:"btn-cancel btn",onClick:this.handleClose,size:"large"},"Cancel"),r.a.createElement(k.a,{className:"".concat(e.btnDeleteDog," btn"),onClick:this.handleDelete,variant:"contained",size:"large",startIcon:r.a.createElement(A.a,null)},"Delete")))))}}]),t}(n.Component),K=Object(m.a)({modalActionsForm:{flex:"0 0 auto",display:"flex",padding:"16px 0 4px",alignItems:"center",justifyContent:"flex-end"},btnDeleteDog:{background:"rgb(244, 67, 54)",color:"#fff","&:hover":{backgroundColor:"rgb(244, 67, 54)"}}})(G),Q=a(57),U=a.n(Q),X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).editDog=function(){var e,t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(E(a.props.dog._id,a.state.dog));case 2:return e=n.sent,n.next=5,b.a.awrap(e.json());case 5:return t=n.sent,e.ok&&(a.setState({success:!0}),a.props.closeEditDogModal(),a.props.setHomePageStateHandler()),n.abrupt("return",t);case 8:case"end":return n.stop()}}))},a.handleVaccineChange=function(e){return function(t){var n=Object(P.a)(a.state.dog.listVaccines);n[e]=t.target.value,a.setState({dog:Object(H.a)({},a.state.dog,{listVaccines:n})}),""===t.target.value.trim()?a.setState({errorsListVaccines:Object(H.a)({},a.state.errorsListVaccines,Object(L.a)({},t.target.name,!0))}):a.setState({errorsListVaccines:Object(H.a)({},a.state.errorsListVaccines,Object(L.a)({},t.target.name,!1))})}},a.handleVaccineDelete=function(e){return function(t){var n=a.state.dog.listVaccines;n.splice(e,1),a.setState({dog:Object(H.a)({},a.state.dog,{listVaccines:n})});var r={};n.forEach((function(e,t){""===e.trim()?r["vaccine".concat(t+1)]=!0:r["vaccine".concat(t+1)]=!1})),a.setState({errorsListVaccines:r})}},a.addVaccine=function(e){var t=a.state.dog.listVaccines.concat([""]);a.setState({dog:Object(H.a)({},a.state.dog,{listVaccines:t})})},a.state={dog:{name:a.props.dog.name,breed:a.props.dog.breed,age:a.props.dog.age,listVaccines:a.props.dog.listVaccines},errors:{name:!1,breed:!1,age:!1},errorsListVaccines:{},isLoading:!1},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({dog:Object(H.a)({},this.state.dog,Object(L.a)({},e.target.name,e.target.value))}),""===e.target.value.trim()?this.setState({hasErrors:!0,errors:Object(H.a)({},this.state.errors,Object(L.a)({},e.target.name,!0))}):this.setState({hasErrors:!1,errors:Object(H.a)({},this.state.errors,Object(L.a)({},e.target.name,!1))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.editDog()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement("form",{id:"form-edit-dog",className:t.container,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement(z.a,{required:!0,error:this.state.errors.name,helperText:!!this.state.errors.name&&"Required field.",id:"outlined-required",label:"Name",name:"name",className:t.textField,margin:"normal",variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},value:this.state.dog.name,onChange:this.handleChange,onBlur:this.handleChange}),r.a.createElement(z.a,{required:!0,error:this.state.errors.breed,helperText:!!this.state.errors.breed&&"Required field.",id:"outlined-required",label:"Breed",name:"breed",className:t.textField,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},value:this.state.dog.breed,onChange:this.handleChange,onBlur:this.handleChange}),r.a.createElement(z.a,{required:!0,error:this.state.errors.age,helperText:!!this.state.errors.age&&"Required field.",id:"outlined-required",label:"Age",name:"age",className:t.textField,type:"number",margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{min:"0"},value:this.state.dog.age,onChange:this.handleChange,onBlur:this.handleChange}),r.a.createElement(I.a,{className:"divider",variant:"middle"}),r.a.createElement("h3",null,"List of Vaccines"),this.state.dog.listVaccines.map((function(a,n){return r.a.createElement("div",{className:t.vaccineFieldWrap,key:n},r.a.createElement(z.a,{required:!0,error:e.state.errorsListVaccines["vaccine".concat(n+1)],helperText:!!e.state.errorsListVaccines["vaccine".concat(n+1)]&&"Required field.",id:"outlined-required",label:"Vaccine ".concat(n+1),name:"vaccine".concat(n+1),className:t.textField,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},value:a,onChange:e.handleVaccineChange(n),onBlur:e.handleVaccineChange(n)}),e.state.dog.listVaccines.length>1?r.a.createElement(x.a,{onClick:e.handleVaccineDelete(n),className:"".concat(t.btnDeleteVaccine," btn-delete-circle btn"),size:"small","aria-label":"delete"},r.a.createElement(A.a,{fontSize:"small"})):null)})),r.a.createElement(x.a,{className:"".concat(t.btnAddVaccine," btn"),onClick:this.addVaccine,disabled:!this.state.dog.listVaccines.every((function(e){return""!==e.trim()})),size:"small",color:"primary","aria-label":"add"},r.a.createElement(F.a,null))),r.a.createElement("div",{className:t.modalActionsForm},r.a.createElement(k.a,{className:"btn-cancel btn",onClick:this.props.closeEditDogModal,size:"large"},"Cancel"),r.a.createElement(k.a,{disabled:!(Object.values(this.state.errors).every((function(e){return!1===e}))&&Object.values(this.state.errorsListVaccines).every((function(e){return!1===e}))&&Object.values(this.state.dog).every((function(e){return""!==e}))&&this.state.dog.listVaccines.every((function(e){return""!==e}))),variant:"contained",size:"large",type:"submit",className:"".concat(t.btnEditDog," btn"),startIcon:r.a.createElement(U.a,null),form:"form-edit-dog"},"Edit")))}}]),t}(n.Component),Y=Object(m.a)({textField:{width:"100%","& label.Mui-focused:not(.Mui-error)":{color:"sienna"},"& .MuiOutlinedInput-root.Mui-focused:not(.Mui-error) fieldset":{borderColor:"sienna"}},vaccineFieldWrap:{position:"relative"},btnAddVaccine:{background:"sienna",color:"#fff","&:hover":{backgroundColor:"sienna"},"&:disabled":{cursor:"not-allowed",pointerEvents:"all"}},btnDeleteVaccine:{position:"absolute",top:"-3px",right:"-16px",width:"35px",height:"35px",minHeight:"35px"},btnEditDog:{background:"rgb(76, 175, 80)",color:"#fff","&:hover":{backgroundColor:"rgb(76, 175, 80)"}},modalActionsForm:{flex:"0 0 auto",display:"flex",padding:"16px 0 4px",alignItems:"center",justifyContent:"flex-end"}})(X),Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={open:!1},a.handleOpen=a.handleOpen.bind(Object(f.a)(a)),a.handleClose=a.handleClose.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,{onClick:this.handleOpen,className:"btn-edit-circle btn",size:"small","aria-label":"edit"},r.a.createElement(U.a,{fontSize:"small"})),r.a.createElement(N.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"edit-dog-form-dialog"},r.a.createElement(D.a,null,"Edit ",this.props.dog.name),r.a.createElement(w.a,null,r.a.createElement(Y,{dog:this.props.dog,closeEditDogModal:this.handleClose,setHomePageStateHandler:this.props.setHomePageStateHandler,setHomePageSuccess:this.props.setHomePageSuccess}))))}}]),t}(n.Component),ee=a(134),te=a(141),ae=a(142),ne=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={vaccines:a.props.vaccines,open:!1},a.handleOpen=a.handleOpen.bind(Object(f.a)(a)),a.handleClose=a.handleClose.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"outlined",className:"btn-outlined",onClick:this.handleOpen},"View"),r.a.createElement(N.a,{PaperProps:{style:{width:"100%"}},open:this.state.open,onClose:this.handleClose,"aria-labelledby":"dog-vaccines-dialog"},r.a.createElement(D.a,null,"List of Vaccines"),r.a.createElement(w.a,null,r.a.createElement(ee.a,{component:"nav","aria-labelledby":"nested-list-subheader"},this.props.vaccines.map((function(t,a){return r.a.createElement(te.a,{key:a,button:!0},r.a.createElement("span",{className:e.listNumber},a+1),r.a.createElement(ae.a,{primary:t}))}))))))}}]),t}(n.Component),re=Object(m.a)({listNumber:{marginRight:"25px",opacity:"0.8"}})(ne),se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).loadDogs=function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({isLoading:!0}),t.next=3,b.a.awrap(j());case 3:e=t.sent,a.setState({dogs:e,isLoading:!1});case 5:case"end":return t.stop()}}))},a.state={dogs:[],isLoading:!1},a.setHomePageStateHandler=a.setHomePageStateHandler.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"setHomePageStateHandler",value:function(){this.setState({dogs:this.loadDogs()})}},{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.loadDogs()}},{key:"renderTableData",value:function(){var e=this,t=this.props.classes;if(!this.state.isLoading)return this.state.dogs.map((function(a,n){var s=a._id,l=a.name,c=a.breed,i=a.age,o=a.listVaccines;return r.a.createElement("tr",{key:s},r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,0===i?"Less than a year old":i+" years old"),r.a.createElement("td",null,r.a.createElement(re,{vaccines:o})),r.a.createElement("td",null,r.a.createElement("span",{className:t.actionButtonWrap},r.a.createElement(h.b,{to:"/dog/".concat(s)},r.a.createElement(x.a,{className:"btn-view-circle btn",size:"small","aria-label":"view"},r.a.createElement(V.a,{fontSize:"small"})))),r.a.createElement("span",{className:t.actionButtonWrap},r.a.createElement(Z,{dog:a,setHomePageStateHandler:e.setHomePageStateHandler,setHomePageSuccess:e.setHomePageSuccess})),r.a.createElement("span",{className:t.actionButtonWrap},r.a.createElement(K,{dog:a,setHomePageStateHandler:e.setHomePageStateHandler}))))}))}},{key:"render",value:function(){var e,t=this.props.classes;return e=this.state.isLoading?r.a.createElement("div",{className:t.loaderWrap},r.a.createElement(y.a,{className:t.loader})):0===this.state.dogs.length?r.a.createElement("div",{className:t.noDogsFound},r.a.createElement("p",null,"No dogs found")):r.a.createElement("table",{className:"dogs-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Breed"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Vaccines List"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.renderTableData())),r.a.createElement("div",{className:"dogs-table-wrap"},r.a.createElement("div",{className:"dogs-table-title"},r.a.createElement("h1",null,"Manage Dogs"),r.a.createElement(_,{setHomePageStateHandler:this.setHomePageStateHandler})),e)}}]),t}(n.Component),le=Object(m.a)({actionButtonWrap:{display:"inline-block",marginRight:"8px","&:last-child":{marginRight:"0px"}},noDogsFound:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-55px",height:"100%","& p":{fontSize:"25px"}},loaderWrap:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-55px",height:"100%"},loader:{color:"sienna"}})(se),ce=a(144),ie=a(77),oe=a.n(ie),de=a(78),ue=a.n(de),me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).loadDog=function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(C(a.props.match.params.id));case 2:e=t.sent,a.setState({dog:e,isLoading:!1});case 4:case"end":return t.stop()}}))},a.state={dog:{},isLoading:!1,open:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"componentWillMount",value:function(){this.setState({isLoading:!0}),this.loadDog()}},{key:"listVaccines",value:function(){var e=this.props.classes,t=this.state,a=t.dog;if(!t.isLoading)return a.listVaccines.map((function(t,a){return r.a.createElement(te.a,{className:e.listItem,button:!0,key:a},r.a.createElement("span",{className:e.itemText},a+1,":"),r.a.createElement(ae.a,{primary:t}))}))}},{key:"render",value:function(){var e,t=this.props.classes,a=this.state.isLoading,n=this.state.dog,s=n.name,l=n.breed,c=n.age;return e=a?r.a.createElement("div",{className:t.loaderWrap},r.a.createElement(y.a,{className:t.loader})):r.a.createElement(ee.a,{component:"nav",className:t.listVaccines},r.a.createElement(te.a,{className:t.listItem,button:!0},r.a.createElement("span",{className:t.itemText},"Name:"),r.a.createElement(ae.a,{primary:s})),r.a.createElement(te.a,{className:t.listItem,button:!0},r.a.createElement("span",{className:t.itemText},"Breed:"),r.a.createElement(ae.a,{primary:l})),r.a.createElement(te.a,{className:t.listItem,button:!0},r.a.createElement("span",{className:t.itemText},"Age:"),r.a.createElement(ae.a,{primary:0===c?"Less than a year old":c+" years old"})),r.a.createElement(te.a,{className:t.listItem,button:!0,onClick:this.handleClick.bind(this)},r.a.createElement("span",{className:t.itemText},"List of Vaccines:"),r.a.createElement(ae.a,{primary:""}),this.state.open?r.a.createElement(oe.a,null):r.a.createElement(ue.a,null)),r.a.createElement(ce.a,{in:this.state.open,timeout:"auto",unmountOnExit:!0},r.a.createElement(ee.a,{component:"div",disablePadding:!0},this.listVaccines()))),r.a.createElement("div",{className:"dog"},r.a.createElement("div",{className:"dog-title"},r.a.createElement("h1",null,"Dog")),e)}}]),t}(n.Component),he=Object(m.a)({listVaccines:{width:"100%",maxHeight:"calc(100% - 60px)",overflow:"auto",borderRadius:"6px",boxShadow:"0 0 40px 0 rgba(0,0,0,.15)"},listItem:{padding:"25px",fontSize:"18px !important",color:"rgb(160,160,160)"},itemText:{marginRight:"25px",color:"sienna"},loaderWrap:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-55px",height:"100%"},loader:{color:"sienna"}})(me),pe=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("svg",{version:"1",viewBox:"0 0 390.126 390.125"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M132.64,177.859c31.162,0,56.508-34.014,56.508-75.834c0-41.817-25.347-75.841-56.508-75.841\r c-31.153,0-56.502,34.023-56.502,75.841C76.138,143.845,101.487,177.859,132.64,177.859z"}),r.a.createElement("path",{d:"M300.246,251.628c-1.159-1.579-2.27-3.068-2.864-4.348c-12.635-27.046-47.27-58.931-103.382-59.724l-2.159-0.012\r c-55.25,0-89.627,30.197-103.381,58.469c-0.475,0.967-1.52,2.222-2.627,3.549c-1.31,1.555-2.606,3.146-3.714,4.875\r c-11.619,18.075-17.543,38.426-16.669,57.299c0.916,20.037,9.305,36.131,23.581,45.312c5.768,3.705,11.992,5.572,18.522,5.572\r c13.465,0,25.793-7.584,40.079-16.368c9.083-5.598,18.465-11.374,28.886-15.697c1.168-0.385,5.954-0.973,13.781-0.973\r c9.307,0,15.991,0.828,17.419,1.321c10.173,4.491,19.107,10.382,27.748,16.068c13.247,8.731,25.755,16.97,39.326,16.97\r c5.824,0,11.469-1.537,16.795-4.563c29.382-16.693,34.979-62.492,12.484-102.088C302.942,255.303,301.597,253.448,300.246,251.628\r z"}),r.a.createElement("path",{d:"M252.796,177.859c31.147,0,56.499-34.014,56.499-75.834c0-41.817-25.352-75.841-56.499-75.841\r c-31.165,0-56.511,34.023-56.511,75.841C196.285,143.845,221.631,177.859,252.796,177.859z"}),r.a.createElement("path",{d:"M345.595,138.918c-24.975,0-44.521,25.901-44.521,58.967c0,33.051,19.558,58.955,44.521,58.955\r c24.961,0,44.531-25.904,44.531-58.955C390.126,164.82,370.568,138.918,345.595,138.918z"}),r.a.createElement("path",{d:"M89.048,197.885c0-33.065-19.558-58.967-44.522-58.967C19.561,138.918,0,164.82,0,197.885\r c0,33.051,19.561,58.955,44.526,58.955C69.491,256.84,89.048,230.936,89.048,197.885z"}))),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null))}}]),t}(n.Component),ge=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"error-404"},r.a.createElement("h1",null,"404 - Not found"))}}]),t}(n.Component),be=a(150),fe=a(145),ve=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(h.a,null,r.a.createElement(be.a,null),r.a.createElement(fe.a,{maxWidth:"xl",className:"container"},r.a.createElement("h1",null,r.a.createElement(h.b,{to:"/"},r.a.createElement("div",{className:e.logoWrapper},r.a.createElement(pe,null),r.a.createElement("span",null,"Paw Patrol")))),r.a.createElement("div",{className:"content"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:le}),r.a.createElement(p.a,{exact:!0,path:"/dog/:id",component:he}),r.a.createElement(p.a,{component:ge})))))}}]),t}(n.Component),Ee=Object(m.a)({logoWrapper:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:"15px",color:"sienna","& span":{fontSize:"26px"},"&:hover":{"& svg":{fill:"#633200"},"& span":{color:"#633200"}},"& svg":{width:"65px",fill:"sienna"}}})(ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,t,a){e.exports=a(103)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.fe627b0e.chunk.js.map