(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,n){e.exports=n(75)},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),u=n.n(c),i=n(13),o=n(14),l=n(7),s=n.n(l),p=n(11),m=n(3),d=n(2),f=n(1),v=function(e){var t=e.size,n=void 0===t?24:t;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"white"},r.a.createElement("path",{d:"M13 23c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm4.084-.834c0-.483-.393-.875-.875-.875s-.875.392-.875.875.393.875.875.875.875-.392.875-.875zm3.443-2.387c0-.414-.336-.75-.75-.75s-.75.336-.75.75.336.75.75.75.75-.336.75-.75zm2.343-3.568c0-.391-.317-.708-.708-.708s-.708.317-.708.708.317.708.708.708.708-.317.708-.708zm.796-4.209c0-.368-.298-.667-.666-.667s-.666.298-.666.667.298.667.666.667.666-.298.666-.667zm-.879-4.209c0-.345-.28-.625-.625-.625s-.625.28-.625.625.28.625.625.625.625-.279.625-.625zm-2.427-3.568c0-.322-.262-.583-.583-.583s-.583.261-.583.583.262.583.583.583.583-.261.583-.583zm-3.609-2.385c0-.299-.242-.542-.541-.542s-.541.242-.541.542.242.542.541.542.541-.243.541-.542zm-3.751-.84c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-4.21.838c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-3.569 2.385c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-2.384 3.57c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm-.837 4.209c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm.837 4.209c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm2.384 3.569c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm3.571 2.383c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"}))};function b(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: "," 3s infinite;\n"]);return b=function(){return e},e}function g(){var e=Object(d.a)(["\n  from {\n   transform  : rotate(0deg);\n  }to {\n   transform  : rotate(360deg);\n  }\n"]);return g=function(){return e},e}var h=Object(f.keyframes)(g()),E=f.default.div(b(),h),x=function(){return r.a.createElement(E,null,r.a.createElement(v,null))};function j(){var e=Object(d.a)(["\n  padding: 3px 3px;\n  color: rgba(255, 255, 255, 0.6);\n"]);return j=function(){return e},e}function O(){var e=Object(d.a)(["\n  padding: 3px 3px;\n"]);return O=function(){return e},e}function w(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-rows: 8fr 1fr 1fr;\n"]);return w=function(){return e},e}function y(){var e=Object(d.a)(["\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.5;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(d.a)(["\n  background-image: url(",");\n  height: 100%;\n  background-position: center center;\n  background-size: cover;\n"]);return k=function(){return e},e}function S(){var e=Object(d.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return S=function(){return e},e}var z=f.default.div(S()),_=f.default.div(k(),function(e){return e.img}),M=f.default.div(y(),_,z),R=f.default.div(w()),F=f.default.div(O()),T=f.default.div(j()),C=function(e){var t=e.title,n=e.release_date,a=e.vote_average,c=e.poster_path,u=e.id,o=e.isMovie,l=n.split("-");return r.a.createElement(R,null,r.a.createElement(M,null,r.a.createElement(i.b,{to:o?"movie/".concat(u):"tv/".concat(u)},r.a.createElement(_,{img:"https://image.tmdb.org/t/p/original/".concat(c)}),r.a.createElement(z,null,r.a.createElement("span",{role:"img"},"\u2b50\ufe0f")," ",a))),r.a.createElement(F,null,t),r.a.createElement(T,null,l[0]))};function H(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-auto-rows: 250px;\n  margin-bottom: 50px;\n  grid-gap: 20px;\n"]);return H=function(){return e},e}function I(){var e=Object(d.a)(["\n  font-size: 20px;\n  margin-bottom: 30px;\n  font-weight: 600;\n"]);return I=function(){return e},e}function L(){var e=Object(d.a)([""]);return L=function(){return e},e}var N=f.default.div(L()),U=f.default.div(I()),V=f.default.div(H()),A=function(e){var t=e.title,n=e.children,a=e.isMovie,c=void 0===a||a;return r.a.createElement(N,null,r.a.createElement(U,null,t),r.a.createElement(V,null,n&&n.length>0&&n.map(function(e){return r.a.createElement(C,{key:e.id,id:e.id,title:e.title?e.title:e.original_name,release_date:e.release_date?e.release_date:e.first_air_date,poster_path:e.poster_path,vote_average:e.vote_average,isMovie:c})})))},X=n(12);function B(){var e=Object(d.a)(["\n  padding: 30px;\n"]);return B=function(){return e},e}var P=f.default.div(B()),J=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,c=e.loading;e.error;return c?r.a.createElement(x,null):r.a.createElement(P,null,r.a.createElement(X.Helmet,null,r.a.createElement("title",null,"Movies | MANFLEX")),r.a.createElement(A,{title:"nowPlaying",children:t}),r.a.createElement(A,{title:"popular",children:a}),r.a.createElement(A,{title:"upcoming",children:n}))},q=n(18),D=n(10),G=n.n(D),K={baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c58e75391cfe16df20073888e26b1c9c",language:"en-US"}},Q=Object(q.a)({},K,{params:Object(q.a)({},K.params,{append_to_response:"videos"})}),W=function(e){return Object(q.a)({},K,{params:Object(q.a)({},K.params,{query:encodeURIComponent(e)})})},Y=function(){return G.a.get("tv/airing_today",K)},Z=function(){return G.a.get("tv/popular",K)},$=function(){return G.a.get("tv/top_rated",K)},ee=function(e){return G.a.get("tv/".concat(e),Q)},te=function(e){return G.a.get("search/tv",W(e))},ne=function(){return G.a.get("movie/now_playing",K)},ae=function(){return G.a.get("movie/upcoming",K)},re=function(){return G.a.get("movie/popular",K)},ce=function(e){return G.a.get("movie/".concat(e),Q)},ue=function(e){return G.a.get("search/movie",W(e))},ie=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)([]),i=Object(m.a)(u,2),o=i[0],l=i[1],d=Object(a.useState)([]),f=Object(m.a)(d,2),v=f[0],b=f[1],g=Object(a.useState)(!0),h=Object(m.a)(g,2),E=h[0],x=h[1],j=Object(a.useState)(""),O=Object(m.a)(j,2),w=O[0],y=O[1],k=function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r,u,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne();case 3:return t=e.sent,n=t.data.results,e.next=7,ae();case 7:return a=e.sent,r=a.data.results,e.next=11,re();case 11:u=e.sent,i=u.data.results,c(n),l(r),b(i),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),y(e.t0);case 21:return e.prev=21,x(!1),e.finish(21);case 24:case"end":return e.stop()}},e,null,[[0,18,21,24]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){k()},[]),r.a.createElement(J,{nowPlaying:n,upcoming:o,popular:v,loading:E,error:w})};function oe(){var e=Object(d.a)(["\n  padding: 30px;\n"]);return oe=function(){return e},e}var le=f.default.div(oe()),se=function(e){var t=e.airingToday,n=e.topRated,a=e.popular;return e.loading?r.a.createElement(x,null):r.a.createElement(le,null,r.a.createElement(X.Helmet,null,r.a.createElement("title",null,"TV Shows | MANFLEX")),r.a.createElement(A,{title:"airingToday",children:t,isMovie:!1}),r.a.createElement(A,{title:"topRated",children:n,isMovie:!1}),r.a.createElement(A,{title:"popular",children:a,isMovie:!1}))},pe=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)([]),i=Object(m.a)(u,2),o=i[0],l=i[1],d=Object(a.useState)([]),f=Object(m.a)(d,2),v=f[0],b=f[1],g=Object(a.useState)(!0),h=Object(m.a)(g,2),E=h[0],x=h[1],j=Object(a.useState)(""),O=Object(m.a)(j,2),w=O[0],y=O[1],k=function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r,u,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,Y();case 4:return t=e.sent,n=t.data.results,e.next=8,Z();case 8:return a=e.sent,r=a.data.results,e.next=12,$();case 12:u=e.sent,i=u.data.results,c(n),b(r),l(i),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),y(e.t0);case 22:return e.prev=22,x(!1),e.finish(22);case 25:case"end":return e.stop()}},e,null,[[0,19,22,25]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){k()},[]),r.a.createElement(se,{airingToday:n,topRated:o,popular:v,loading:E,error:w})};function me(){var e=Object(d.a)(["\n  font-size: 35px;\n  height: 200px;\n  justify-self: center;\n"]);return me=function(){return e},e}function de(){var e=Object(d.a)(["\n  height: 80px;\n  padding: 3px;\n  font-size: 30px;\n  width: 100%;\n  border: none;\n  background-color: rgba(20, 20, 20, 1);\n  color: white;\n  &:focus {\n    outline: none;\n  }\n"]);return de=function(){return e},e}function fe(){var e=Object(d.a)(["\n  display: grid;\n  padding: 5px 30px;\n"]);return fe=function(){return e},e}var ve=f.default.div(fe()),be=f.default.input(de()),ge=f.default.div(me()),he=function(e){var t=e.SearchInput,n=e.loading,a=e.onSubmit,c=e.movieResults,u=e.tvResults;return console.log(n,c,u),r.a.createElement(ve,null,r.a.createElement(X.Helmet,null,r.a.createElement("title",null,"Search | MANFLEX")),r.a.createElement("form",{onSubmit:a},r.a.createElement(be,{placeholder:"Search Movies or TV Shows",value:t.value,onChange:t.onChange})),n&&r.a.createElement(x,null),!n&&c&&c.length>0&&r.a.createElement(A,{title:"movie results",children:c}),!n&&c&&0===c.length&&r.a.createElement(ge,null,"notFound movie"),!n&&u&&u.length>0&&r.a.createElement(A,{title:"tv results",children:u}),!n&&u&&0===u.length&&r.a.createElement(ge,null,"notFound TV Show"))},Ee=function(e){e.history;var t=function(e){var t=e.type,n=void 0===t?"text":t,r=Object(a.useState)(""),c=Object(m.a)(r,2),u=c[0],i=c[1];return{value:u,onChange:function(e){i(e.target.value)},type:n,setValue:i}}("dfgsgdfg"),n=Object(a.useState)(!1),c=Object(m.a)(n,2),u=c[0],i=c[1],o=Object(a.useState)(null),l=Object(m.a)(o,2),d=l[0],f=l[1],v=Object(a.useState)(null),b=Object(m.a)(v,2),g=b[0],h=b[1],E=Object(a.useState)(""),x=Object(m.a)(E,2),j=x[0],O=x[1],w=function(){var e=Object(p.a)(s.a.mark(function e(n){var a,r,c,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),t.setValue(""),e.next=5,ue(t.value);case 5:return a=e.sent,r=a.data.results,e.next=9,te(t.value);case 9:c=e.sent,u=c.data.results,console.log(r,u),f(r),h(u),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),O(e.t0);case 19:return e.prev=19,i(!1),e.finish(19);case 22:case"end":return e.stop()}},e,null,[[0,16,19,22]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(he,{SearchInput:t,loading:u,error:j,onSubmit:w,movieResults:d,tvResults:g})};function xe(){var e=Object(d.a)(["\n  cursor: pointer;\n  padding: 10px 10px;\n  border-bottom: 2px solid\n    ",";\n  transition: border-bottom 0.3s linear;\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n  &:hover {\n    color: rgba(200, 200, 200, 0.9);\n  }\n"]);return xe=function(){return e},e}function je(){var e=Object(d.a)(["\n  display: flex;\n"]);return je=function(){return e},e}function Oe(){var e=Object(d.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  padding: 0 10px;\n"]);return Oe=function(){return e},e}var we=f.default.header(Oe()),ye=f.default.ul(je()),ke=f.default.li(xe(),function(e){return e.current?"#3498db":"transparent"}),Se=Object(o.g)(function(e){var t=e.location.pathname;return r.a.createElement(we,null,r.a.createElement(ye,null,r.a.createElement(ke,{current:"/"===t},r.a.createElement(i.b,{to:"/movies"},"Movies")),r.a.createElement(ke,{current:"/tv"===t},r.a.createElement(i.b,{to:"/tv"},"Tv")),r.a.createElement(ke,{current:"/search"===t},r.a.createElement(i.b,{to:"/search"},"search"))))});function ze(){var e=Object(d.a)(["\n  margin-bottom: 10px;\n  transition: color 0.2s linear;\n  &:hover {\n    color: rgba(255, 255, 255, 0.6);\n  }\n"]);return ze=function(){return e},e}function _e(){var e=Object(d.a)(["\n  display: grid;\n"]);return _e=function(){return e},e}function Me(){var e=Object(d.a)(["\n  max-width: 40vw;\n  margin-bottom: 20px;\n"]);return Me=function(){return e},e}function Re(){var e=Object(d.a)(["\n  margin-right: 5px;\n"]);return Re=function(){return e},e}function Fe(){var e=Object(d.a)(["\n  display: flex;\n"]);return Fe=function(){return e},e}function Te(){var e=Object(d.a)(["\n  margin-right: 10px;\n"]);return Te=function(){return e},e}function Ce(){var e=Object(d.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return Ce=function(){return e},e}function He(){var e=Object(d.a)(["\n  font-size: 25px;\n  font-weight: bold;\n  margin-bottom: 20px;\n"]);return He=function(){return e},e}function Ie(){var e=Object(d.a)(["\n  /* background-color: black; */\n"]);return Ie=function(){return e},e}function Le(){var e=Object(d.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  border-radius: 5px;\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.6);\n"]);return Le=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - 50px);\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  z-index: -1;\n  filter: blur(5px);\n  opacity: 0.6;\n"]);return Ne=function(){return e},e}function Ue(){var e=Object(d.a)(["\n  position: relative;\n\n  padding: 50px 50px;\n  width: 100%;\n  height: calc(100vh - 50px);\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 3fr 7fr;\n  grid-auto-rows: 80vh;\n  grid-gap: 20px;\n"]);return Ue=function(){return e},e}var Ve=f.default.div(Ue()),Ae=f.default.div(Ne(),function(e){return e.img}),Xe=f.default.div(Le(),function(e){return e.img}),Be=f.default.div(Ie()),Pe=f.default.h1(He()),Je=f.default.ul(Ce()),qe=f.default.li(Te()),De=f.default.ul(Fe()),Ge=f.default.li(Re()),Ke=f.default.div(Me()),Qe=f.default.div(_e()),We=f.default.a(ze()),Ye=function(e){var t=e.detail,n=e.loading;e.error;return console.log(t),n?r.a.createElement(x,null):r.a.createElement(Ve,null,r.a.createElement(X.Helmet,null,r.a.createElement("title",null,"Details | MANFLEX")),r.a.createElement(Ae,{img:"https://image.tmdb.org/t/p/original/".concat(t.backdrop_path)}),r.a.createElement(Xe,{img:"https://image.tmdb.org/t/p/original/".concat(t.poster_path)}),r.a.createElement(Be,null,r.a.createElement(Pe,null,t.title),r.a.createElement(Je,null,r.a.createElement(qe,null,t.release_date),r.a.createElement(qe,null,t.runtime," min"),r.a.createElement(De,null,t.genres.map(function(e){return r.a.createElement(Ge,{key:e.id},e.name,",")}))),r.a.createElement(Ke,null,t.overview),r.a.createElement(Qe,null,t.videos.results.length>0&&t.videos.results.map(function(e){return r.a.createElement(We,{key:e.id,href:"https://www.youtube.com/watch?v=".concat(e.key),target:"_blank"},"\ud83c\udfa5",e.name)}))))},Ze=function(e){var t=e.location.pathname.split("/"),n="movie"===t[1],c=t[2],u=Object(a.useState)(null),i=Object(m.a)(u,2),o=i[0],l=i[1],d=Object(a.useState)(!0),f=Object(m.a)(d,2),v=f[0],b=f[1],g=Object(a.useState)(""),h=Object(m.a)(g,2),E=h[0],x=h[1],j=function(){var e=Object(p.a)(s.a.mark(function e(t,n){var a,r,c,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,n),e.prev=1,!t){e.next=10;break}return e.next=5,ce(n);case 5:a=e.sent,r=a.data,l(r),e.next=15;break;case 10:return e.next=12,ee(n);case 12:c=e.sent,u=c.data,l(u);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),x(e.t0);case 20:return e.prev=20,b(!1),e.finish(20);case 23:case"end":return e.stop()}},e,null,[[1,17,20,23]])}));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){j(n,c)},[]),r.a.createElement(Ye,{detail:o,loading:v,error:E})},$e=function(){return r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,component:ie}),r.a.createElement(o.b,{path:"/tv",exact:!0,component:pe}),r.a.createElement(o.b,{path:"/tv/popular",component:function(){return r.a.createElement("div",null,"popular")}}),r.a.createElement(o.b,{path:"/search",exact:!0,component:Ee}),r.a.createElement(o.b,{path:"/movie/:id",component:Ze}),r.a.createElement(o.b,{path:"/tv/:id",component:Ze}),r.a.createElement(o.a,{from:"*",to:"/"}))))},et=n(41);function tt(){var e=Object(d.a)(["\n    ",";\n    a {\n        text-decoration : none;\n        color : inherit;\n    }\n    *{\n        box-sizing : border-box;\n    }\n    body { \n        background-color : rgba(20,20,20,1);\n        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        color : white;\n    }\n"]);return tt=function(){return e},e}var nt=Object(f.createGlobalStyle)(tt(),et.reset);var at=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null),r.a.createElement($e,null))};u.a.render(r.a.createElement(at,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6ae31488.chunk.js.map