(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"6l3h":function(e,a,t){e.exports={seckillContainer:"seckillContainer___2ZqMr",topupOther:"topupOther___1M3Mv"}},DdHb:function(e,a,t){e.exports={product:"product___33Vc_",main:"main___1cZco","main-inner":"main-inner___opE6m",price:"price___1uRDY","price-container":"price-container___3GUuK","price-inner":"price-inner___3t11K","price-content":"price-content___1Cx4o","price-discount":"price-discount___1rhXG","price-current":"price-current___2CZgJ","price-current-value":"price-current-value___3hbbA","price-original":"price-original___v-zvb",name:"name___2Vko7",gift:"gift___3YijO",stock:"stock___23Ryo","stock-value":"stock-value___3pmG3","stock-progress":"stock-progress___2FtB0"}},GmQi:function(e,a,t){e.exports={box:"box___2lcfy",desc:"desc___18evj"}},N1Q1:function(e,a,t){"use strict";t.r(a);var c=t("q1tI"),r=t.n(c),n=t("/MKj"),i=t("6l3h"),l=t.n(i),s=t("/LDh"),m=t("4smB"),o=t("qlp5"),u=t("6Moy"),_=t("lmeG"),d=t("qRYI"),p=t.n(d),E=e=>{var a=e.value;return r.a.createElement("span",{className:p.a["unit"]},Object(_["a"])(2,a.toString(),"0"))},v=()=>{return r.a.createElement("span",{className:p.a["separator"]},":")},N=e=>{var a=e.hours,t=e.minutes,c=e.seconds;return r.a.createElement("div",{className:p.a["countdown"]},r.a.createElement(E,{value:a}),r.a.createElement(v,null),r.a.createElement(E,{value:t}),r.a.createElement(v,null),r.a.createElement(E,{value:c}))},b=e=>{var a=e.date;return r.a.createElement(u["a"],{date:a,renderer:N})},k=t("gqNH"),f=t.n(k),h=e=>{var a=e.title,t=e.timeDesc,c=e.time,n=e.children;return r.a.createElement("div",{className:f.a["activity"]},r.a.createElement("div",{className:f.a["header"]},r.a.createElement("div",{className:f.a["title"]},a),r.a.createElement("div",{className:f.a["time"]},r.a.createElement("span",{className:f.a["label"]},t),r.a.createElement(b,{date:c}))),r.a.createElement("div",{className:f.a["body"]},n))},y=t("DdHb"),g=t.n(y),O=e=>{var a=e.info,t=Object(c["useMemo"])(()=>{return a.stock/a.quantity},[a]);return r.a.createElement("div",{className:g.a["product"]},r.a.createElement("div",{className:g.a["price"]},r.a.createElement("div",{className:g.a["price-container"]},r.a.createElement("div",{className:g.a["price-inner"]},r.a.createElement("div",{className:g.a["price-content"]},r.a.createElement("div",{className:g.a["price-current"]},"\uffe5",r.a.createElement("span",{className:g.a["price-current-value"]},a.discountPrice)),r.a.createElement("div",{className:g.a["price-original"]},"\u539f\u4ef7\uffe5",r.a.createElement("span",null,a.originPrice))))),r.a.createElement("div",{className:g.a["price-discount"]},10*a.discount,"\u6298")),r.a.createElement("div",{className:g.a["main"]},r.a.createElement("div",{className:g.a["main-inner"]},r.a.createElement("div",{className:g.a["name"]},a.productName,a.itemName),r.a.createElement("div",{className:g.a["gift"]},"\u6682\u65e0"),r.a.createElement("div",{className:g.a["stock"]},r.a.createElement("div",{className:g.a["stock-value"]},"\u5269\u4f59",a.stock,"\u4ef6"),r.a.createElement("div",{className:g.a["stock-progress"],style:{width:"".concat(100*t,"%")}})))))},j=t("Nz2C"),w=t.n(j),D=e=>{var a=e.children,t=e.onClick;return r.a.createElement("div",{className:w.a["btn"],onClick:t},a)},x=t("GmQi"),C=t.n(x),M=e=>{var a=e.info,t=Object(c["useMemo"])(()=>{return[1,3,4].indexOf(a.currStatus)>-1},[a]),n=Object(c["useMemo"])(()=>{return 0===a.stock},[a]),i=Object(c["useMemo"])(()=>{return!1},[]),l=Object(c["useMemo"])(()=>{return 1===a.currStatus?Date.now()+a.endTimestamp-a.currTimestamp:2===a.currStatus?Date.now()+a.beginTimestamp-a.currTimestamp:Date.now()},[a]);return t?n?r.a.createElement(h,{title:a.productName},r.a.createElement(O,{info:a}),r.a.createElement("div",{className:C.a["box"]},r.a.createElement("div",{className:C.a["desc"]},"\u79d2\u6740\u6d3b\u52a8\u5df2\u552e\u7f44\uff0c\u6bcf\u5929\u65e9\u4e0a10 : 00\u5f00\u62a2"),r.a.createElement(D,null,"\u67e5\u770b\u8be5\u5546\u54c1\u66f4\u591a\u6298\u6263"))):i?r.a.createElement(h,{title:a.productName},r.a.createElement(O,{info:a}),r.a.createElement("div",{className:C.a["box"]},r.a.createElement("div",{className:C.a["desc"]},"\u60a8\u5df2\u8fbe\u5230\u4eca\u65e5\u8d2d\u4e70\u4e0a\u9650"),r.a.createElement(D,null,"\u67e5\u770b\u8be5\u5546\u54c1\u66f4\u591a\u6298\u6263"))):r.a.createElement(h,{title:a.productName,timeDesc:"\u8ddd\u6d3b\u52a8\u7ed3\u675f",time:l},r.a.createElement(O,{info:a})):r.a.createElement(h,{title:a.productName,timeDesc:"\u8ddd\u6d3b\u52a8\u5f00\u59cb",time:l},r.a.createElement(O,{info:a}))},q=t("tOtk");a["default"]=Object(n["c"])(e=>({seckill:e.seckill}))(e=>{var a=e.dispatch,t=e.location.query,n=e.seckill.info,i=Object(c["useCallback"])(()=>{a({type:"seckill/getSeckillDetail",payload:{id:t.id}})},[a,t.id]);return Object(c["useEffect"])(()=>{i()},[i]),Object(c["useEffect"])(()=>{a({type:"prePay/setState",payload:{main:n,type:"seckill"}})},[n.id]),r.a.createElement("div",{className:l.a.seckillContainer},r.a.createElement(s["a"],{corner:n.cornerMark,title:n.productName,desc:n.eventName,imgUrl:"#"}),n&&r.a.createElement(M,{info:n}),n&&r.a.createElement("div",{className:l.a.topupOther},r.a.createElement(m["a"],{nodes:n.productDesc||""})),r.a.createElement(o["a"],null),r.a.createElement(q["a"],{onValidate:()=>!0}))})},Nz2C:function(e,a,t){e.exports={btn:"btn___1KhR-"}},gqNH:function(e,a,t){e.exports={activity:"activity___1-cyI",header:"header___n3fej",body:"body___2dh8u",title:"title___2hkC-",time:"time___3saNN",label:"label____zWJg"}},qRYI:function(e,a,t){e.exports={countdown:"countdown___2TSDL",unit:"unit___2bYAb",separator:"separator___2CKYQ"}}}]);