(this["webpackJsonpcomponent-app"]=this["webpackJsonpcomponent-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(3),r=n.n(o),i=(n(12),n.p,n(13),n(4)),a=n(5),u=n(7),d=n(6),j=n(0),m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).addCount=function(){var t=c.state.count;t++,c.setState({count:t})},c.addComment=function(){var t=c.myRef.current.value,e=c.state.commentsUser;e.push(t),c.setState({commentsUser:e}),c.myRef.current.value=""},c.state={count:0,commentsUser:[]},c.myRef=s.a.createRef(),c}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"State"}),Object(j.jsx)("div",{children:this.state.count}),Object(j.jsx)("button",{type:"button",onClick:this.addCount,children:"Add Count"}),Object(j.jsx)("h1",{children:"Comments"}),Object(j.jsx)("textarea",{ref:this.myRef}),Object(j.jsx)("button",{type:"button",onClick:this.addComment,children:" Add Comment"}),Object(j.jsxs)("ul",{children:[" ",this.state.commentsUser.map((function(t,e){return Object(j.jsx)("li",{children:t},e.toString())}))," "]})]})}}]),n}(s.a.Component);var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(m,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.cb6d5893.chunk.js.map