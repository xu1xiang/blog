import{U as F,V as R,W as z,_ as S,e as D,I as j,f as C,H as P,X as Q,r as T,o as s,c as n,i as e,s as U,x as m,a as p,F as x,E as A,y as B,Y as W,t as h,h as f,d as O,k as N,Q as X,j as I,G,w as Y,O as Z,C as q,L as J,M as K,Z as ee,l as te,z as w}from"./app.7e7194b6.js";import{f as ae}from"./resolveTime.bbe121e0.js";const se=i=>!F(i)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null,ne={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},re=({docsRepo:i,editLinkPattern:c})=>{if(c)return c;const u=se(i);return u!==null?ne[u]:null},oe=({docsRepo:i,docsBranch:c,docsDir:u,filePathRelative:t,editLinkPattern:d})=>{if(!t)return null;const _=re({docsRepo:i,editLinkPattern:d});return _?_.replace(/:repo/,F(i)?i:`https://github.com/${i}`).replace(/:branch/,c).replace(/:path/,R(`${z(u)}/${t}`)):null},ie={class:"article-header-content"},le={key:0,class:"article-tags"},ce=["onClick"],ue={class:"article-title"},de={key:1,class:"article-subtitle"},me={class:"article-icons"},he={key:0,class:"article-icon"},pe={key:1,class:"article-icon"},_e={key:2,class:"article-icon"},ge={key:1,class:"article-image-credit"},ve=["href"],fe={key:1},ke=D({name:"ArticleHeader",props:{currentTag:{type:String,default:""}},setup(i){const c=j(),u=C(),t=P(),d=N(),_=Q(),b=o=>{c.currentRoute.value.path!==_.value.map[o].path&&c.push({path:_.value.map[o].path})},g=()=>{const o={};return t.value.layout==="Post"&&t.value.useHeaderImage&&t.value.headerImage&&(o.backgroundImage=`url(${X(t.value.headerImage)})`),o},a=u.value.personalInfo;return(o,v)=>{const k=T("VIcon");return s(),n("div",{class:B(["article-header",{"use-image":e(t).useHeaderImage}]),style:U(g())},[e(t).useHeaderImage&&e(t).headerMask?(s(),n("div",{key:0,class:"article-header-mask",style:U({background:e(t).headerMask})},null,4)):m("",!0),p("div",ie,[e(t).tags?(s(),n("div",le,[(s(!0),n(x,null,A(e(t).tags,(r,l)=>(s(),n("span",{key:l,class:B(["article-tag",{active:i.currentTag==r}]),onClick:W(L=>b(r),["stop"])},h(r),11,ce))),128))])):m("",!0),p("h1",ue,h(e(t).title),1),e(t).subtitle?(s(),n("p",de,h(e(t).subtitle),1)):m("",!0),p("div",me,[e(t).author||e(a).name?(s(),n("div",he,[f(k,{name:"fa-regular-user",scale:"0.9"}),p("span",null,h(e(t).author||e(a).name),1)])):m("",!0),e(t).date?(s(),n("div",pe,[f(k,{name:"fa-regular-calendar",scale:"0.9"}),p("span",null,h(e(ae)(e(t).date)),1)])):m("",!0),e(d).readingTime?(s(),n("div",_e,[f(k,{name:"ri-timer-line",scale:"0.9"}),p("span",null,h(e(d).readingTime.minutes)+" min",1)])):m("",!0)])]),e(t).useHeaderImage&&e(t).headerImageCredit?(s(),n("div",ge,[O(h(e(u).headerImageCredit)+" ",1),e(t).headerImageCreditLink?(s(),n("a",{key:0,href:e(t).headerImageCreditLink,target:"_blank",rel:"noopener noreferrer"},h(e(t).headerImageCredit),9,ve)):(s(),n("span",fe,h(e(t).headerImageCredit),1))])):m("",!0)],6)}}});var Re=S(ke,[["__file","ArticleHeader.vue"]]);const be={class:"page-meta"},Le={key:0,class:"meta-item edit-link"},ye={key:1,class:"meta-item last-updated"},$e={class:"meta-item-label"},Ce={class:"meta-item-info"},Ie={key:2,class:"meta-item contributors"},Pe={class:"meta-item-label"},Te={class:"meta-item-info"},we=["title"],xe=O(", "),Ne=D({name:"PageMeta",setup(i){const c=()=>{const a=C(),o=N(),v=P();return I(()=>{var M,E,V;if(!((E=(M=v.value.editLink)!=null?M:a.value.editLink)!=null?E:!0))return null;const{repo:r,docsRepo:l=r,docsBranch:L="main",docsDir:y="",editLinkText:$}=a.value;if(!l)return null;const H=oe({docsRepo:l,docsBranch:L,docsDir:y,filePathRelative:o.value.filePathRelative,editLinkPattern:(V=v.value.editLinkPattern)!=null?V:a.value.editLinkPattern});return H?{text:$!=null?$:"Edit this page",link:H}:null})},u=()=>{const a=C(),o=N(),v=P();return I(()=>{var l,L,y,$;return!((L=(l=v.value.lastUpdated)!=null?l:a.value.lastUpdated)!=null?L:!0)||!((y=o.value.git)!=null&&y.updatedTime)?null:new Date(($=o.value.git)==null?void 0:$.updatedTime).toLocaleString()})},t=()=>{const a=C(),o=N(),v=P();return I(()=>{var r,l,L,y;return((l=(r=v.value.contributors)!=null?r:a.value.contributors)!=null?l:!0)&&(y=(L=o.value.git)==null?void 0:L.contributors)!=null?y:null})},d=C(),_=c(),b=u(),g=t();return(a,o)=>{const v=T("VIcon"),k=T("ClientOnly");return s(),n("footer",be,[e(_)?(s(),n("div",Le,[f(v,{name:"fa-pencil-alt",scale:"0.9"}),f(G,{class:"meta-item-label",item:e(_)},null,8,["item"])])):m("",!0),e(b)?(s(),n("div",ye,[p("span",$e,h(e(d).lastUpdatedText)+": ",1),f(k,null,{default:Y(()=>[p("span",Ce,h(e(b)),1)]),_:1})])):m("",!0),e(g)&&e(g).length?(s(),n("div",Ie,[p("span",Pe,h(e(d).contributorsText)+": ",1),p("span",Te,[(s(!0),n(x,null,A(e(g),(r,l)=>(s(),n(x,{key:l},[p("span",{class:"contributor",title:`email: ${r.email}`},h(r.name),9,we),l!==e(g).length-1?(s(),n(x,{key:0},[xe],64)):m("",!0)],64))),128))])])):m("",!0)])}}});var Se=S(Ne,[["__file","PageMeta.vue"]]);const De={key:0,class:"page-nav"},Ge={class:"inner"},He={key:0,class:"prev"},Me={key:1,class:"next"},Ee=D({name:"PageNav",setup(i){const c=a=>a===!1?null:J(a)?K(a):ee(a)?a:!1,u=(a,o,v)=>{const k=a.findIndex(r=>r.link===o);if(k!==-1){const r=a[k+v];return r!=null&&r.link?r:null}for(const r of a)if(r.children){const l=u(r.children,o,v);if(l)return l}return null},t=P(),d=Z(),_=q(),b=I(()=>{const a=c(t.value.prev);return a!==!1?a:u(d.value,_.path,-1)}),g=I(()=>{const a=c(t.value.next);return a!==!1?a:u(d.value,_.path,1)});return(a,o)=>e(b)||e(g)?(s(),n("nav",De,[p("p",Ge,[e(b)?(s(),n("span",He,[f(G,{item:e(b)},null,8,["item"])])):m("",!0),e(g)?(s(),n("span",Me,[f(G,{item:e(g)},null,8,["item"])])):m("",!0)])])):m("",!0)}});var Ve=S(Ee,[["__file","PageNav.vue"]]);const Ue={class:"page"},Be={class:"theme-gungnir-content"},Fe=D({name:"Page",setup(i){const c=C(),{isDarkMode:u}=te(),t=I(()=>u.value?c.value.giscusDarkTheme:c.value.giscusLightTheme);return(d,_)=>{const b=T("Content"),g=T("GungnirGiscus");return s(),n("main",Ue,[w(d.$slots,"top"),p("div",Be,[w(d.$slots,"content-top"),f(b),w(d.$slots,"content-bottom")]),f(Se),f(Ve),w(d.$slots,"bottom"),f(g,{theme:e(t)},null,8,["theme"])])}}});var ze=S(Fe,[["__file","Page.vue"]]);export{Re as A,ze as P};
