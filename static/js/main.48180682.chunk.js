(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(3),l=t(1);t(10);var r=t(2),s=t.n(r),o=t(0),j=function(e){for(var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,i=Math.ceil(a/t),l=[],r=function(e){l.push(Object(o.jsx)("li",{className:s()("page-item",{active:c===e}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(a){a.preventDefault(),n(e)},children:e})},e))},j=1;j<=i;j+=1)r(j);return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===c}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c?"true":"false",onClick:function(e){e.preventDefault(),1!==c&&n(c-1)},children:"\xab"})}),l,Object(o.jsx)("li",{className:s()("page-item",{disabled:c===i}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===i?"true":"false",onClick:function(e){e.preventDefault(),c!==i&&n(c+1)},children:"\xbb"})})]})},d=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(l.useState)(42),a=Object(i.a)(e,1)[0],t=Object(l.useState)(5),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(l.useState)(1),u=Object(i.a)(s,2),p=u[0],b=u[1],h=(p-1)*n+1,m=Math.min(p*n,a),f=d.slice(h-1,m),g="Page ".concat(p," (items ").concat(h," - ").concat(m," of ").concat(a,")");return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:g}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){var a=parseInt(e.target.value,10);r(a),b(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{selected:!0,value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:a,perPage:n,currentPage:p,onPageChange:function(e){b(e)}}),Object(o.jsx)("ul",{children:f.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:"".concat(e)},e)}))})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.48180682.chunk.js.map