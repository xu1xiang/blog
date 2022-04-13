var we=Object.defineProperty,ye=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var re=(l,e,t)=>e in l?we(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,ie=(l,e)=>{for(var t in e||(e={}))Te.call(e,t)&&re(l,t,e[t]);if(le)for(var t of le(e))Ie.call(e,t)&&re(l,t,e[t]);return l},ue=(l,e)=>ye(l,Se(e));import{i as S,a as O,p as q,_ as L,d as x,o,j as p,e as d,h as a,k as Le,r as M,l as D,v as P,f,m as xe,n as X,q as de,t as H,s as ve,x as C,y as R,b as B,w as E,z as I,T as Ce,A as pe,B as T,C as J,D as ge,F as W,E as Y,G as j,H as Q,I as G,u as he,J as Be,K as Ne,L as Ve,M as Oe,g as Me,N as me,O as Ee}from"./app.505f1525.js";const ce=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Re=(l,e)=>{if(e.hash===l)return!0;const t=ce(e.path),r=ce(l);return t===r},be=(l,e)=>l.link&&Re(l.link,e)?!0:l.children?l.children.some(t=>be(t,e)):!1,De=()=>{const l=O();return S(()=>q.value.frontmatter.layout==="Post"&&q.value.frontmatter.catalog!==!1&&(l.value.catalog||q.value.frontmatter.catalog)&&q.value.headers.length>0)},Pe={class:"footer"},He=["innerHTML"],Fe=x({setup(l){const t=O().value.footer;return(r,s)=>(o(),p("footer",Pe,[d("span",{innerHTML:a(t)},null,8,He)]))}});var Ae=L(Fe,[["__file","Footer.vue"]]);const qe=["title"],We=x({setup(l){const e=["light","dark","auto"],t=O(),{currentMode:r}=Le(),s=()=>{const _=(e.indexOf(r.value)+1)%e.length;r.value=e[_]};return(h,_)=>{const m=M("VIcon");return o(),p("div",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:s},[D(f(m,{name:"fa-sun"},null,512),[[P,a(r)==="light"]]),D(f(m,{name:"fa-moon"},null,512),[[P,a(r)==="dark"]]),D(f(m,{name:"fa-magic"},null,512),[[P,a(r)==="auto"]])],8,qe)}}});var Ke=L(We,[["__file","ToggleDarkModeButton.vue"]]);const ze=["title"],je=x({emits:["toggle"],setup(l){const e=O();return(t,r)=>{const s=M("VIcon");return o(),p("div",{class:"toggle-sidebar-button",title:a(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:r[0]||(r[0]=h=>t.$emit("toggle"))},[f(s,{name:"bi-layout-sidebar-inset"})],8,ze)}}});var Ye=L(je,[["__file","ToggleSidebarButton.vue"]]);const Ge={class:"menu-btn-wrapper"},Ue={class:"menu-btn-icon"},Xe=d("span",null,null,-1),Je=d("span",null,null,-1),Qe=d("span",null,null,-1),Ze=[Xe,Je,Qe],et={class:"menu-progress"},tt={class:"menu-btn-child-wrapper"},nt=x({emits:["toggle-sidebar","toggle-catalog"],setup(l){const e=xe({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});X(()=>{window.addEventListener("scroll",t)}),de(()=>{window.removeEventListener("scroll",t)});const t=()=>{const u=window.pageYOffset,i=_(),$=document.documentElement.clientHeight;let n=u/(i-$)*100;n>100&&(n=100),isNaN(n)||Math.round(n)<=0?(n=0,e.isTextVisible=!1,e.isBtnIconVisible=!0):(e.isTextVisible=!0,e.menuText=Math.round(n)+"%",e.isBtnIconVisible=!1),e.borderLen=3.1415926*(n||0)+"% 314.15926%"},r=()=>{e.isMenuOpen=!e.isMenuOpen},s=()=>{window.scrollTo({top:0,behavior:"smooth"})},h=()=>{window.scrollTo({top:_(),behavior:"smooth"})},_=()=>{const u=document.querySelector(".theme-container");return u?u.offsetHeight:0},m=De();return(u,i)=>{const $=M("VIcon");return o(),p("div",{class:R(["menu-btn-container",{open:a(e).isMenuOpen}])},[d("div",Ge,[d("div",{class:"menu-btn",onClick:r},[D(d("div",Ue,Ze,512),[[P,a(e).isBtnIconVisible]]),D(d("div",{class:"menu-text"},H(a(e).menuText),513),[[P,a(e).isTextVisible]]),(o(),p("svg",et,[d("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:ve({"stroke-dasharray":a(e).borderLen})},null,4)]))]),d("div",tt,[f(Ke,{class:"menu-btn-child"}),d("div",{class:"menu-btn-child",onClick:h},[f($,{name:"fa-chevron-down",scale:"1.5"})]),d("div",{class:"menu-btn-child",onClick:s},[f($,{name:"fa-chevron-up"})]),a(m)?(o(),p("div",{key:0,class:"menu-btn-child menu-toc-btn",onClick:i[0]||(i[0]=n=>u.$emit("toggle-catalog"))},[f($,{name:"fa-list-ul"})])):C("",!0),f(Ye,{class:"menu-btn-child menu-btn-sidebar",onToggle:i[1]||(i[1]=n=>u.$emit("toggle-sidebar"))})])])],2)}}});var at=L(nt,[["__file","Menu.vue"]]);const st=x({setup(l){const e=r=>{r.style.height=r.scrollHeight+"px"},t=r=>{r.style.height=""};return(r,s)=>(o(),B(Ce,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:E(()=>[I(r.$slots,"default")]),_:3}))}});var fe=L(st,[["__file","DropdownTransition.vue"]]);const ot=["aria-label"],lt={class:"title"},rt={key:0,class:"nav-icon"},it=d("span",{class:"arrow down"},null,-1),ut=["aria-label"],ct={class:"title"},dt={key:0,class:"nav-icon"},vt={class:"navbar-dropdown"},pt={class:"navbar-dropdown-subtitle"},gt={key:1},ht={class:"navbar-navbar-dropdown-subitem-wrapper"},mt=x({props:{item:{type:Object,required:!0}},setup(l){const e=l,{item:t}=pe(e),r=S(()=>t.value.ariaLabel||t.value.text),s=T(!1),h=J();ge(()=>h.path,()=>{s.value=!1});const _=u=>{u.detail===0?s.value=!s.value:s.value=!1},m=(u,i)=>i[i.length-1]===u;return(u,i)=>{const $=M("VIcon");return o(),p("div",{class:R(["navbar-dropdown-wrapper",{open:s.value}])},[d("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(r),onClick:_},[d("span",lt,[a(t).icon?(o(),p("span",rt,[f($,{name:a(t).icon},null,8,["name"])])):C("",!0),d("span",null,H(a(t).text),1)]),it],8,ot),d("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(r),onClick:i[0]||(i[0]=n=>s.value=!s.value)},[d("span",ct,[a(t).icon?(o(),p("span",dt,[f($,{name:a(t).icon},null,8,["name"])])):C("",!0),d("span",null,H(a(t).text),1)]),d("span",{class:R(["arrow",s.value?"down":"right"])},null,2)],8,ut),f(fe,null,{default:E(()=>[D(d("ul",vt,[(o(!0),p(W,null,Y(a(t).children,n=>(o(),p("li",{key:n.text,class:"navbar-dropdown-item"},[n.children?(o(),p(W,{key:0},[d("h4",pt,[n.link?(o(),B(j,{key:0,item:n,onFocusout:k=>m(n,a(t).children)&&n.children.length===0&&(s.value=!1)},null,8,["item","onFocusout"])):(o(),p("span",gt,H(n.text),1))]),d("ul",ht,[(o(!0),p(W,null,Y(n.children,k=>(o(),p("li",{key:k.link,class:"navbar-dropdown-subitem"},[f(j,{item:k,onFocusout:w=>m(k,n.children)&&m(n,a(t).children)&&(s.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),B(j,{key:1,item:n,onFocusout:k=>m(n,a(t).children)&&(s.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[P,s.value]])]),_:1})],2)}}});var bt=L(mt,[["__file","NavbarDropdown.vue"]]);const ft={key:0,class:"navbar-items"},_t={key:0,class:"navbar-item"},kt={key:0,class:"nav-icon"},$t=x({emits:["toggle-search"],setup(l){const e=()=>{const n=G(),k=he(),w=Be(),g=O();return S(()=>{var c,v;const N=Object.keys(w.value.locales);if(N.length<2)return[];const F=n.currentRoute.value.path,A=n.currentRoute.value.fullPath;return[{text:(c=g.value.selectLanguageText)!=null?c:"unknown language",ariaLabel:(v=g.value.selectLanguageAriaLabel)!=null?v:"unknown language",icon:g.value.langIcon,children:N.map(y=>{var Z,ee,te,ne,ae,se;const V=(ee=(Z=w.value.locales)==null?void 0:Z[y])!=null?ee:{},K=(ne=(te=g.value.locales)==null?void 0:te[y])!=null?ne:{},z=`${V.lang}`,ke=(ae=K.selectLanguageName)!=null?ae:z;let U;if(z===w.value.lang)U=A;else{const oe=F.replace(k.value,y);n.getRoutes().some($e=>$e.path===oe)?U=oe:U=(se=K.home)!=null?se:y}return{text:ke,link:U}})}]})},t=n=>Ne(n)?Ve(n):n.children?ue(ie({},n),{children:n.children.map(t)}):n,s=(()=>{const n=O();return S(()=>(n.value.navbar||[]).map(t))})(),h=e(),_=S(()=>[...s.value,...u.value?h.value:[]]),m=Q(),u=S(()=>{const k=G().currentRoute.value.path;return m.value.layout===void 0&&k.indexOf("/page/")===-1&&q.value.path!==""}),i=O(),$=S(()=>i.value.search&&m.value.search!==!1);return(n,k)=>{const w=M("VIcon");return a(_).length?(o(),p("nav",ft,[(o(!0),p(W,null,Y(a(_),g=>(o(),p("div",{key:g.text,class:"navbar-item"},[g.children?(o(),B(bt,{key:0,item:g},null,8,["item"])):(o(),B(j,{key:1,item:g},null,8,["item"]))]))),128)),a($)?(o(),p("div",_t,[d("a",{style:{cursor:"pointer"},onClick:k[0]||(k[0]=g=>n.$emit("toggle-search"))},[a(i).searchIcon?(o(),p("span",kt,[f(w,{name:a(i).searchIcon},null,8,["name"])])):C("",!0),d("span",null,H(a(i).searchText),1)])])):C("",!0)])):C("",!0)}}});var _e=L($t,[["__file","NavbarItems.vue"]]);const wt={class:"site-name"},yt=x({props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(l){he();const e=O(),t=Q(),r=G(),s=T(null),h=T(null),_=S(()=>e.value.home||"/"),m=S(()=>e.value.navbarTitle),u=T(0),i=S(()=>u.value?{maxWidth:u.value+"px"}:{}),$=T(0),n=T(!1),k=T(!1),w=T(!0),g=()=>{const b=window.pageYOffset;b<$.value?b>0&&n.value?k.value=!0:(k.value=!1,n.value=!1):(k.value=!1,s.value&&b>s.value.offsetHeight&&(n.value=!0)),$.value=b},N=()=>{let b=!1;t.value.layout==="HomePage"&&(b=!0),t.value.layout==="Post"&&t.value.useHeaderImage&&(b=!0),t.value.layout==="Tags"&&e.value.pages&&e.value.pages.tags&&e.value.pages.tags.bgImage&&(b=!0),t.value.layout==="Links"&&e.value.pages&&e.value.pages.links&&e.value.pages.links.bgImage&&(b=!0),w.value=b};let F;X(()=>{const c=A(s.value,"paddingLeft")+A(s.value,"paddingRight"),v=()=>{var y;window.innerWidth<=719||!s.value?u.value=0:u.value=s.value.offsetWidth-c-(((y=h.value)==null?void 0:y.offsetWidth)||0)};v(),window.addEventListener("resize",v,!1),window.addEventListener("orientationchange",v,!1),N(),F=r.afterEach(()=>{N()}),window.addEventListener("scroll",g)}),de(()=>{window.removeEventListener("scroll",g),F()});function A(b,c){var V,K,z;const v=(z=(K=(V=b==null?void 0:b.ownerDocument)==null?void 0:V.defaultView)==null?void 0:K.getComputedStyle(b,null))==null?void 0:z[c],y=Number.parseInt(v,10);return Number.isNaN(y)?0:y}return(b,c)=>{const v=M("RouterLink"),y=M("NavbarSearch");return o(),p("header",{ref_key:"navbar",ref:s,class:R(["navbar",{"is-fixed":n.value||l.isSidebar,"is-visible":k.value||l.isSidebar,invert:w.value}])},[d("span",{ref_key:"navbarBrand",ref:h},[f(v,{to:a(_)},{default:E(()=>[d("span",wt,H(a(m)),1)]),_:1},8,["to"])],512),d("div",{class:"navbar-items-wrapper",style:ve(a(i))},[I(b.$slots,"before"),f(_e,{class:"can-hide",onToggleSearch:c[0]||(c[0]=V=>b.$emit("toggle-search"))}),I(b.$slots,"after"),f(y)],4)],2)}}});var St=L(yt,[["__file","Navbar.vue"]]);const Tt={class:"sidebar-item-children"},It=x({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const e=l,{item:t,depth:r}=pe(e),s=J(),h=G(),_=S(()=>be(t.value,s)),m=S(()=>({"sidebar-item":!0,"sidebar-heading":r.value===0,active:_.value,collapsible:t.value.collapsible})),u=T(!0),i=T(void 0);return t.value.collapsible&&(u.value=_.value,i.value=()=>{u.value=!u.value},h.afterEach(()=>{u.value=_.value})),($,n)=>{var w;const k=M("SidebarItem",!0);return o(),p("li",null,[a(t).link?(o(),B(j,{key:0,class:R(a(m)),item:a(t)},null,8,["class","item"])):(o(),p("p",{key:1,tabindex:"0",class:R(a(m)),onClick:n[0]||(n[0]=(...g)=>i.value&&i.value(...g)),onKeydown:n[1]||(n[1]=Oe((...g)=>i.value&&i.value(...g),["enter"]))},[Me(H(a(t).text)+" ",1),a(t).collapsible?(o(),p("span",{key:0,class:R(["arrow",u.value?"down":"right"])},null,2)):C("",!0)],34)),(w=a(t).children)!=null&&w.length?(o(),B(fe,{key:2},{default:E(()=>[D(d("ul",Tt,[(o(!0),p(W,null,Y(a(t).children,g=>(o(),B(k,{key:`${a(r)}${g.text}${g.link}`,item:g,depth:a(r)+1},null,8,["item","depth"]))),128))],512),[[P,u.value]])]),_:1})):C("",!0)])}}});var Lt=L(It,[["__file","SidebarItem.vue"]]);const xt={key:0,class:"sidebar-items"},Ct=x({setup(l){const e=J(),t=me();return ge(()=>e.hash,r=>{const s=document.querySelector(".sidebar");if(!s)return;const h=document.querySelector(`.sidebar a.sidebar-item[href="${e.path}${r}"]`);if(!h)return;const _=s.getBoundingClientRect().top,m=s.getBoundingClientRect().height,u=h.getBoundingClientRect().top,i=h.getBoundingClientRect().height;u<_?h.scrollIntoView(!0):u+i>_+m&&h.scrollIntoView(!1)}),(r,s)=>a(t).length?(o(),p("ul",xt,[(o(!0),p(W,null,Y(a(t),h=>(o(),B(Lt,{key:h.link||h.text,item:h},null,8,["item"]))),128))])):C("",!0)}});var Bt=L(Ct,[["__file","SidebarItems.vue"]]);const Nt={class:"sidebar"},Vt=x({emits:["toggle-search"],setup(l){return(e,t)=>(o(),p("aside",Nt,[f(_e,{onToggleSearch:t[0]||(t[0]=r=>e.$emit("toggle-search"))}),I(e.$slots,"top"),f(Bt),I(e.$slots,"bottom")]))}});var Ot=L(Vt,[["__file","Sidebar.vue"]]);const Mt={class:"page-content"},Et=x({setup(l){const e=Q(),t=O(),r=G(),s=S(()=>e.value.navbar!==!1&&t.value.navbar!==!1),h=S(()=>q.value.path===""),_=me(),m=S(()=>_.value.length>0&&!h.value),u=T(!1),i=c=>{u.value=typeof c=="boolean"?c:!u.value},$={x:0,y:0},n=c=>{$.x=c.changedTouches[0].clientX,$.y=c.changedTouches[0].clientY},k=c=>{const v=c.changedTouches[0].clientX-$.x,y=c.changedTouches[0].clientY-$.y;Math.abs(v)>Math.abs(y)&&Math.abs(v)>40&&(v>0&&$.x<=80?i(!0):i(!1))},w=T(!1),g=c=>{w.value=typeof c=="boolean"?c:!w.value;const v=document.querySelector("html");w.value?v==null||v.classList.add("fixed"):v==null||v.classList.remove("fixed"),w.value&&setTimeout(function(){document.querySelector(".search-page input").focus()},400)},N=T(!1),F=c=>{N.value=typeof c=="boolean"?c:!N.value},A=S(()=>[{"no-navbar":!s.value,"no-sidebar":!m.value,"sidebar-open":u.value,"catalog-open":N.value,"search-open":w.value},e.value.pageClass]);let b;return X(()=>{b=r.afterEach(()=>{i(!1),g(!1)})}),Ee(()=>{b()}),(c,v)=>{const y=M("GungnirSearchPage");return o(),p("div",{class:R(["theme-container",a(A)]),onTouchstart:n,onTouchend:k},[I(c.$slots,"navbar",{},()=>[a(s)?(o(),B(St,{key:0,"is-sidebar":a(m),onToggleSearch:v[0]||(v[0]=V=>g(!0))},{before:E(()=>[I(c.$slots,"navbar-before")]),after:E(()=>[I(c.$slots,"navbar-after")]),_:3},8,["is-sidebar"])):C("",!0)]),d("div",{class:"sidebar-mask",onClick:v[1]||(v[1]=V=>i(!1))}),I(c.$slots,"sidebar",{},()=>[f(Ot,{onToggleSearch:v[2]||(v[2]=V=>g(!0))},{top:E(()=>[I(c.$slots,"sidebar-top")]),bottom:E(()=>[I(c.$slots,"sidebar-bottom")]),_:3})]),d("div",Mt,[I(c.$slots,"page")]),f(y,{onToggleSearch:v[3]||(v[3]=V=>g(!1))}),f(at,{onToggleSidebar:i,onToggleCatalog:F}),a(m)?C("",!0):(o(),B(Ae,{key:0}))],34)}}});var Pt=L(Et,[["__file","Common.vue"]]);export{Pt as C,De as u};
