(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(5),s=n.n(r),i=(n(15),n(3)),c=n(6),l=n(7),u=n(1),m=n(8),d=n(2),h=n(9),p=(n(16),function(e){var t=e.type,n=e.id,o=e.placeholder,r=e.value,s=e.done,i=e.readOnly,c=e.style,l=e.onmouseover,u=e.onmouseout;return a.a.createElement("input",{id:n,className:"input",type:t,placeholder:o,value:r,style:{textDecoration:s?"line-through":"none",color:c||""},maxLength:80,readOnly:i,onMouseOver:l,onMouseOut:u})});p.defaultProps={type:"text",placeholder:"What you want to do?",readOnly:!1,onmouseover:null,onmouseout:null};var v=p,f=function(e){var t=e.todoItems,n=e.removeItem,o=e.completeItem,r=e.onmouseover,s=e.onmouseout;return 0!==t.length?t.map((function(e,t){return a.a.createElement("div",{key:t,className:"field"},a.a.createElement("p",{className:"control has-icons-left has-icons-right"},a.a.createElement(v,{value:e.value,id:t,readOnly:!0,done:e.done,style:e.done?"red":"green",onmouseover:r,onmouseout:s}),a.a.createElement("span",{className:"icon is-small is-left",style:{background:"none",border:"none",cursor:"pointer"}},a.a.createElement("i",{id:t,className:e.done?"fas fa-minus-circle":"fas fa-check-circle",style:{color:e.done?"red":"green",pointerEvents:"auto"},onClick:function(e){o(+e.currentTarget.id)}})),a.a.createElement("span",{className:"icon is-small is-right"},a.a.createElement("i",{id:t,className:"delete",onClick:function(e){n(+e.currentTarget.id)}},">"))))})):null};f.defaultProps={todoItems:[]};var y=f,I=[{id:0,value:"Finish this task",done:!1},{id:1,value:"Have a rest",done:!0},{id:2,value:"Go to sleep",done:!0}];var b=function(e){Object(h.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(m.a)(this,n)}}(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={todoItems:I},e.addItem=e.addItem.bind(Object(u.a)(e)),e.removeItem=e.removeItem.bind(Object(u.a)(e)),e.completeItem=e.completeItem.bind(Object(u.a)(e)),e.clearAnimation=e.clearAnimation.bind(Object(u.a)(e)),e.setAnimation=e.setAnimation.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"setAnimation",value:function(e){e.currentTarget.style.opacity="0.8",e.currentTarget.style.transition="0.5s ease-out"}},{key:"clearAnimation",value:function(e){e.currentTarget.style.opacity="1",e.currentTarget.style.transition="0.5s ease-out"}},{key:"addItem",value:function(){var e=document.getElementById("start-input").value;if(e.trim()){var t=this.state.todoItems;t.push({id:t.length,value:e,done:!1}),document.getElementById("start-input").value="",this.setState({todoItems:Object(i.a)(t)})}}},{key:"removeItem",value:function(e){for(var t=this.state.todoItems,n=[],o=0;o<t.length;o++)o!==e&&n.push(t[o]);this.setState({todoItems:[].concat(n)})}},{key:"completeItem",value:function(e){var t=this.state.todoItems,n=[];t.forEach((function(t,o){o===e&&(t.done=!t.done),t.done?n.push(t):n.unshift(t)})),this.setState({todoItems:[].concat(n)})}},{key:"render",value:function(){var e=this.state.todoItems;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",{className:"title is-1",style:{color:"white"}},"To do app"),a.a.createElement("div",{className:"field"},a.a.createElement("div",{className:"control has-icons-left has-icons-right"},a.a.createElement(v,{id:"start-input",readOnly:!1}),a.a.createElement("button",{className:"button is-primary is-smal",onClick:this.addItem},"add item"))),a.a.createElement(y,{removeItem:this.removeItem,todoItems:Object(i.a)(e),completeItem:this.completeItem,onmouseover:this.setAnimation,onmouseout:this.clearAnimation})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0bd3ab5a.chunk.js.map