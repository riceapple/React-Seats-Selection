(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{l7ir:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),c=t.n(r),o=t("/MKj"),d=t("3a4m"),n=t.n(d),i=t("mVOW"),p=t.n(i),m=t("MXX2"),s=e=>{var a=e.user.userId,t=e.card,o=t.data,d=(t.total,t.historyCards);Object(r["useEffect"])(()=>{a&&(e.dispatch({type:"card/getCard",payload:{pageNo:1,pageSize:100,isHistoryFlag:!1}}),e.dispatch({type:"card/getHistoryCard",payload:{pageNo:1,pageSize:100,isHistoryFlag:!0}}))},[a]);var i=e=>{n.a.push("/history")},s=()=>{a&&e.dispatch({type:"card/getCard",payload:{pageNo:1,pageSize:100}})};return c.a.createElement("div",{className:p.a.card},c.a.createElement("div",null,o.map((e,a,t)=>{var r="",o={title:e.couponTitle,retitle:e.productName,time:e.endDate,name:"",cardNo:"",paytime:"",remark:"",account:"",codeNo:"",status:e.viewStatus||0};return 7===e.viewStatus||(4===e.viewStatus?1===e.category?(r="change",o.name=e.productName,o.cardNo=e.couponCode,o.paytime=e.endDate,o.remark=e.couponRemark):r="jump":e.hasDetail&&(1===e.category?(r="change",o.name=e.productName,o.cardNo=e.couponCode,o.paytime=e.endDate,o.remark=e.couponRemark):2===e.category?1!==e.rechargeStatus&&(r="member",o.name=e.productName,o.account=e.rechargeAccount,o.paytime=e.rechargeDate):3===e.category&&(r="copy",o.name=e.productName,o.cardNo=e.cardNo,o.codeNo=e.cardSecret,o.remark=e.cardRemark))),c.a.createElement(m["a"],{key:a.toString(),border:!0,btnTitle:"member"===r&&3===o.status?"\u8054\u7cfb\u5ba2\u670d":null,clickHandler:s,data:o,step:r})})),c.a.createElement("div",null,c.a.createElement("div",{className:p.a.historyCard,onClick:e=>i(e)},"\u5386\u53f2\u5361\u5238(",(d||[]).length,")")))};a["default"]=Object(o["c"])(e=>({card:e.card,user:e.user}))(s)}}]);