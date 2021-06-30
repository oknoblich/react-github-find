(this["webpackJsonpreact-github-find"]=this["webpackJsonpreact-github-find"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(22),a=c.n(n),r=c(9),l=c.n(r),i=c(23),j=c.n(i),d=c(24),b=c.n(d),o=(c(31),c(25)),h=c(18),u=c(10),x=c.n(u),O=c(13),m=c(7),g=c(8),p=c(2),f=c(0),v=function(){return Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4",children:Object(f.jsxs)("div",{className:"bo-card",children:[Object(f.jsx)("div",{className:"bo-card-head",children:Object(f.jsx)("h2",{className:"text-center",children:"Stack"})}),Object(f.jsxs)("div",{className:"bo-card-body",children:[Object(f.jsx)("p",{className:"mb-3",children:"This test project is build with:"}),Object(f.jsx)("ul",{className:"text-list",children:["React","Router","Day.js","GitHub API"].map((function(e,t){return Object(f.jsx)("li",{children:e},t)}))})]})]})})})},N=function(e){var t=e.getUser,c=e.getUserRepos,n=e.user,a=e.repos,r=e.languages,i=e.loading,j=e.repoLoading,d=e.match;return Object(s.useEffect)((function(){t(d.params.username),c(d.params.username)}),[]),i?Object(f.jsx)("div",{children:"Loading..."}):Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(g.b,{to:"/",className:"text-clickable",children:"Back to Search"})}),Object(f.jsx)("div",{className:"col-12 col-lg-4",children:Object(f.jsxs)("div",{className:"bo-card",children:[Object(f.jsx)("div",{className:"bo-card-head bg-gray-4",children:Object(f.jsx)("img",{src:n.avatar_url,className:"bo-photo"})}),Object(f.jsx)("div",{className:"bo-card-body",children:Object(f.jsx)("table",{className:"table",style:{whiteSpace:"unset"},children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Username"}),Object(f.jsx)("td",{children:n.login})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Name"}),Object(f.jsx)("td",{children:n.name})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Location"}),Object(f.jsx)("td",{children:n.location})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Bio"}),Object(f.jsx)("td",{children:n.bio})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Blog"}),Object(f.jsx)("td",{children:n.blog})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Link"}),Object(f.jsx)("td",{children:Object(f.jsx)("a",{href:n.html_url,className:"text-clickable",children:"Open on GitHub"})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Followers"}),Object(f.jsx)("td",{children:n.followers})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Following"}),Object(f.jsx)("td",{children:n.following})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Repos"}),Object(f.jsx)("td",{children:n.public_repos})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Gists"}),Object(f.jsx)("td",{children:n.public_gists})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Hireable"}),Object(f.jsx)("td",{children:n.hireable?"Yes":"No"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Since"}),Object(f.jsx)("td",{children:l()(n.created_at).format("DD.MM.YYYY")})]})]})})})]})}),Object(f.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(f.jsxs)("h2",{className:"mb-4",children:["Languages in ",a.length," recently updated repos"]}),0!==Object.entries(r.percentages).length?Object.entries(r.percentages).map((function(e,t){var c=Object(m.a)(e,2),s=c[0],n=c[1];return Object(f.jsxs)("div",{className:"bo-progress text-medium",children:[s,": ",n," %",Object(f.jsx)("div",{className:"bo-progress-bar",children:Object(f.jsx)("div",{className:"bo-progress-bar-inner",style:{width:"".concat(n,"%")}})})]},t)})):Object(f.jsx)("div",{className:"text-danger",children:"Language percentages not calculated."}),Object(f.jsxs)("h2",{className:"my-4",children:[a.length," recently updated repos"]}),j&&Object(f.jsx)("div",{children:"Repo loading..."}),Object(f.jsx)("div",{className:"row",children:a.map((function(e,t){return Object(f.jsx)("div",{className:"col-12",children:Object(f.jsxs)("div",{className:"bo-card",children:[Object(f.jsx)("div",{className:"bo-card-head bg-gray-4",children:Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("h3",{children:e.name}),Object(f.jsx)("p",{className:"mt-2",children:e.description||"No description"})]})}),Object(f.jsx)("div",{className:"bo-card-body",children:Object(f.jsx)("table",{className:"table",style:{whiteSpace:"unset"},children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Link"}),Object(f.jsx)("td",{children:Object(f.jsx)("a",{href:e.html_url,className:"text-clickable",children:"Open on GitHub"})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Languages"}),Object(f.jsx)("td",{children:e.languages_fetched?Object.keys(e.languages_fetched).map((function(e,t){return(0!==t?", ":"")+e})):Object(f.jsx)("div",{className:"text-danger",children:"Languages not fetched."})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Created"}),Object(f.jsx)("td",{children:l()(e.created_at).format("DD.MM.YYYY")})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Updated"}),Object(f.jsx)("td",{children:l()(e.updated_at).format("DD.MM.YYYY")})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Stars"}),Object(f.jsx)("td",{children:e.stargazers_count})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Forks"}),Object(f.jsx)("td",{children:e.forks_count})]})]})})})]})},t)}))})]})]})},y=c(14),w=function(e){var t=e.getUsers,c=e.clearUsers,n=e.showClear,a=Object(s.useState)({query:"facebook"}),r=Object(m.a)(a,2),l=r[0],i=r[1];return Object(s.useEffect)((function(){t("facebook")}),[]),Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==l.query?t(l.query):alert("Input is empty")},className:"mb-5",children:Object(f.jsxs)("div",{className:"row align-items-center",children:[Object(f.jsx)("div",{className:"col-12 col-lg",children:Object(f.jsx)(U,{value:l.query,onChange:function(e,t){return function(e,t){return i(Object(y.a)({},e,t))}(e,t)},label:"Username",name:"query"})}),Object(f.jsx)("div",{className:"col-12 col-lg-auto",children:Object(f.jsx)("button",{className:"bo-button",children:"Fetch Users"})}),n?Object(f.jsx)("div",{className:"col-12 col-lg-auto",children:Object(f.jsx)("button",{onClick:function(){i({query:""}),c()},className:"bo-button is-secondary",children:"Clear Users"})}):null]})})},_=function(){return Object(f.jsx)("div",{className:"bo-tabs",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(g.c,{exact:!0,to:"/",activeClassName:"is-active",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(g.c,{exact:!0,to:"/about",activeClassName:"is-active",children:"About"})})]})})},k=function(e){var t=e.user,c=t.login,s=t.avatar_url;return Object(f.jsx)("div",{className:"col-12 col-lg-3",children:Object(f.jsxs)("div",{className:"bo-card",children:[Object(f.jsx)("div",{className:"bo-card-head bg-gray-4",children:Object(f.jsx)("img",{src:s,className:"bo-photo"})}),Object(f.jsx)("div",{className:"bo-card-body",children:Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("h3",{className:"mb-2",children:c}),Object(f.jsx)(g.b,{to:"/user/".concat(c),className:"bo-button is-small",children:"Open Profile"})]})})]})})},S=function(e){var t=e.users;return e.loading?Object(f.jsx)("div",{children:"Loading..."}):Object(f.jsx)("div",{className:"row",children:t.map((function(e){return Object(f.jsx)(k,{user:e},e.id)}))})},U=function(e){var t=e.value,c=e.onChange,s=e.label,n=e.name;return Object(f.jsxs)("div",{className:"input",children:[Object(f.jsx)("input",{value:t,onChange:function(e){return c(n,e.target.value)},type:"text",placeholder:" "}),Object(f.jsx)("label",{children:s})]})},Y=(c(39),"2e6cadfa0bad3a9e3b4e"),L="33967e273d64b7199f91f4298959dccfa0544bbe",C=function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)({}),r=Object(m.a)(a,2),l=r[0],i=r[1],j=Object(s.useState)([]),d=Object(m.a)(j,2),b=d[0],u=d[1],y=Object(s.useState)({langs:{},percentages:{},total:0}),k=Object(m.a)(y,2),U=k[0],C=k[1],D=Object(s.useState)(!1),q=Object(m.a)(D,2),M=q[0],F=q[1],R=Object(s.useState)(!1),H=Object(m.a)(R,2),B=H[0],E=H[1],G=function(){var e=Object(O.a)(x.a.mark((function e(t){var c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,fetch("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(Y,"&client_secret=").concat(L));case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,n(s.items),F(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(O.a)(x.a.mark((function e(t){var c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,fetch("https://api.github.com/users/".concat(t,"?client_id=").concat(Y,"&client_secret=").concat(L));case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,i(s),F(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(x.a.mark((function e(t){var c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),3,"pushed","desc",e.next=6,fetch("https://api.github.com/users/".concat(t,"/repos?per_page=").concat(3,"&sort=").concat("pushed","&direction=").concat("desc","&client_id=").concat(Y,"&client_secret=").concat(L));case 6:return c=e.sent,e.next=9,c.json();case 9:return s=e.sent,e.next=12,A(s);case 12:u(s),E(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(O.a)(x.a.mark((function e(t){var c,s,n,a,r,l,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=Object(h.a)({},U),s=Object(o.a)(t),e.prev=2,s.s();case 4:if((n=s.n()).done){e.next=16;break}return a=n.value,e.next=8,fetch("".concat(a.languages_url,"?client_id=").concat(Y,"&client_secret=").concat(L));case 8:return r=e.sent,e.next=11,r.json();case 11:l=e.sent,a.languages_fetched=l,Object.entries(a.languages_fetched).forEach((function(e){var t=e[0],s=e[1];c.langs.hasOwnProperty(t)?c.langs[t]+=s:c.langs[t]=s,c.total+=s}));case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),s.e(e.t0);case 21:return e.prev=21,s.f(),e.finish(21);case 24:for(i in c.langs)c.langs.hasOwnProperty(i)&&(c.percentages[i]=Math.abs(c.langs[i]/c.total*100).toFixed(2));C(c);case 26:case"end":return e.stop()}}),e,null,[[2,18,21,24]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){n([]),F(!1)};return Object(f.jsxs)(g.a,{children:[Object(f.jsx)(_,{}),Object(f.jsx)("div",{className:"container mt-5",children:Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{getUsers:G,clearUsers:J,showClear:c.length>0}),Object(f.jsx)(S,{users:c,loading:M})]})}}),Object(f.jsx)(p.a,{exact:!0,path:"/user/:username",render:function(e){return Object(f.jsx)(N,Object(h.a)({getUser:P,getUserRepos:I,user:l,repos:b,languages:U,loading:M,repoLoading:B},e))}}),Object(f.jsx)(p.a,{exact:!0,path:"/about",render:v})]})})]})};l.a.extend(j.a),l.a.extend(b.a),l.a.locale("de"),a.a.render(Object(f.jsx)(C,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d0cb34b3.chunk.js.map