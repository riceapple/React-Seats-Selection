(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{l7ir:function(e,a,t){"use strict";t.r(a);var r=t("p0pE"),c=t.n(r),o=t("q1tI"),d=t.n(o),n=t("/MKj"),s=t("3a4m"),i=t.n(s),m=t("mVOW"),p=t.n(m),u=t("MXX2"),l=e=>{var a=e.user.userId,t=e.card,r=t.data,n=(t.total,t.historyCards);Object(o["useEffect"])(()=>{a&&(e.dispatch({type:"card/getCard",payload:{pageNo:1,pageSize:100,isHistoryFlag:!1}}),e.dispatch({type:"card/getHistoryCard",payload:{pageNo:1,pageSize:100,isHistoryFlag:!0}}))},[a]);var s=e=>{i.a.push("/history")},m=()=>{};return d.a.createElement("div",{className:p.a.card},d.a.createElement("div",null,(r||[]).map((e,a,t)=>{var r="",o=c()({},e,{title:e.couponTitle,retitle:e.productName,time:e.endDate,name:"",cardNo:e.couponCode,paytime:"",remark:"",account:"",codeNo:"",status:e.viewStatus||0});return 7===e.viewStatus||(4===e.viewStatus?1===e.category?(r="change",o.name=e.productName,o.cardNo=e.couponCode,o.paytime=e.endDate,o.remark=e.couponRemark):r="jump":e.hasDetail&&(1===e.category?(r="change",o.name=e.productName,o.cardNo=e.couponCode,o.paytime=e.endDate,o.remark=e.couponRemark):2===e.category?(r="member",o.name=e.productName,o.account=e.rechargeAccount,o.paytime=e.rechargeDate,o.status=e.rechargeStatus):3===e.category&&(r="copy",o.name=e.productName,o.cardNo=e.cardNo,o.codeNo=e.cardSecret,o.remark=e.cardRemark))),d.a.createElement(u["a"],{key:a.toString(),border:!0,btnTitle:"member"===r&&3===o.status?"\u8054\u7cfb\u5ba2\u670d":null,clickHandler:m,data:o,step:r})})),d.a.createElement("div",null,d.a.createElement("div",{className:p.a.historyCard,onClick:e=>s(e)},"\u5386\u53f2\u5361\u5238(",(n||[]).length,")")))};a["default"]=Object(n["c"])(e=>({card:e.card,user:e.user}))(l)}}]);