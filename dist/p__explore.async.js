(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{NMBK:function(e,a,t){"use strict";t.r(a);var c=t("zAuD"),r=t.n(c),n=t("mK77"),s=t.n(n),l=t("cO38"),o=t.n(l),i=t("ZZRV"),d=t.n(i),m=t("svyS"),_=t("m1fy"),u=t("tiGM"),p=t.n(u),v=e=>{var a=e.onClick;return d.a.createElement("div",{className:p.a["search"],onClick:a},d.a.createElement(_["a"],{className:p.a["icon"]}),d.a.createElement("div",{className:p.a["placeholder"]},"\u8bf7\u8f93\u5165\u5546\u54c1\u540d\u79f0"))},b=t("228k"),h=t.n(b),E=t("Xzaa"),f=t.n(E),g=h.a.bind(f.a),N=e=>{var a=e.selected,t=e.list,c=e.onSelect,r=Object(i["useMemo"])(()=>{return t.findIndex(e=>e.id===a)},[t,a]);return d.a.createElement("div",{className:f.a["cates"]},t.map((e,t)=>{var n=e.id,s=e.name;return d.a.createElement("div",{key:n,className:g("cate",{selected:n===a,prev:r>-1&&t===r-1,next:r>-1&&t===r+1}),onClick:()=>{c&&c(n)}},s)}),d.a.createElement("div",{className:g("placeholder",{next:r>-1&&r===t.length-1})}))},x=t("T4Ol"),k=t.n(x),C=e=>{var a=e.title,t=e.children;return d.a.createElement("div",{className:k.a["section"]},d.a.createElement("div",{className:k.a["title"]},a),d.a.createElement("div",null,t))},y=t("vj2g"),O=t.n(y),j=e=>{e.id;var a=e.logo,t=e.name,c=e.desc,r=e.onClick;return d.a.createElement("div",{className:O.a["product"],onClick:r},d.a.createElement("img",{className:O.a["logo"],src:a}),d.a.createElement("div",{className:O.a["name"]},t),d.a.createElement("div",{className:O.a["desc"]},c))},M=t("sLaG"),w=t.n(M),T={id:-1,name:"\u5168\u90e8",products:[]};a["default"]=Object(m["c"])(e=>({explore:e.explore}))(e=>{var a=e.history,t=e.dispatch,c=e.explore,n=Object(i["useState"])(T.id),l=o()(n,2),m=l[0],_=l[1],u=Object(i["useRef"])(),p=Object(i["useMemo"])(()=>c.hot,[c]),b=Object(i["useMemo"])(()=>c.categories,[c]),h=Object(i["useMemo"])(()=>{return(b||[]).reduce((e,a)=>{return[...e,{id:a.category,name:a.categoryName,products:a.baseProductInfoDtoList.map(e=>{return{id:e.id,logo:e.image,name:e.abbr,desc:e.bottomCornerMark}})}]},[s()({},T,{products:(p||[]).map(e=>{return{id:e.bannerItem.id,logo:e.bannerCoverUrl,name:e.bannerItem.abbr,desc:e.bannerItem.bottomCornerMark}})})])},[p,b]),E=Object(i["useCallback"])(()=>{t({type:"explore/getCategories",payload:{status:2}})},[t]);Object(i["useEffect"])(()=>{E()},[E]);var f=Object(i["useCallback"])(e=>{_(e);var a=e=>{var a=document.querySelector(".z_layout_cont");a.scrollTo?a.scrollTo({top:e,behavior:"smooth"}):a.scrollTop=e};if(e===T.id)a(0);else{var t=document.querySelector("#section-".concat(e));a(t.offsetTop-u.current.offsetTop)}},[]);return d.a.createElement("div",{className:w.a["page"]},d.a.createElement("div",{className:w.a["search"]},d.a.createElement(v,{onClick:()=>a.push("/search")})),d.a.createElement("div",{className:w.a["cates"],ref:u},d.a.createElement(N,{selected:m,list:h,onSelect:f})),d.a.createElement("div",{style:{height:"80px",background:"white"}}),h.filter(e=>e.id!==T.id).map(e=>{var t=e.id,c=e.name,n=e.products;return d.a.createElement("div",{key:t,id:"section-".concat(t),className:w.a["section"]},d.a.createElement(C,{title:c},d.a.createElement("div",{className:w.a["product-list"]},n.map((e,t)=>{return d.a.createElement("div",{key:e.id,className:w.a["product-item"]},d.a.createElement(j,r()({},e,{onClick:()=>{a.push("/topup?id=".concat(e.id))}})))}))))}))})},T4Ol:function(e,a,t){e.exports={section:"section___3GyEz",title:"title___1xDCt"}},Xzaa:function(e,a,t){e.exports={cates:"cates___znuaK",cate:"cate___39lqN",selected:"selected___SiVel",placeholder:"placeholder___1wP_l",prev:"prev___2Jxx-",next:"next___1Cx5u"}},sLaG:function(e,a,t){e.exports={page:"page___1CVw8",search:"search___CuHyY",cates:"cates___1H7dM",section:"section___3hjfz","product-list":"product-list___2tbHp","product-item":"product-item___2R3i6"}},tiGM:function(e,a,t){e.exports={search:"search___rMfvJ",icon:"icon___3wuot",placeholder:"placeholder___39bIa"}},vj2g:function(e,a,t){e.exports={product:"product___34Itk",logo:"logo___10O28",name:"name___3x2KT",desc:"desc___23l3T"}}}]);