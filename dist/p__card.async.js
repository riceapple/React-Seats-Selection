(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{l7ir:function(a,e,t){"use strict";t.r(e);var r=t("ZZRV"),c=t.n(r),n=t("svyS"),d=t("Sr5h"),s=t.n(d),u=t("mVOW"),o=t.n(u),p=t("MXX2"),h=a=>{var e=a.user.userId,t=a.card.data;Object(r["useEffect"])(()=>{e&&a.dispatch({type:"card/getCard",payload:{pageNo:1,pageSize:100}})},[e]);var n=a=>{s.a.push("/history")},d=()=>{e&&a.dispatch({type:"card/getCard",payload:{pageNo:1,pageSize:100}})};return c.a.createElement("div",{className:o.a.card},c.a.createElement("div",null,t.map((a,e,t)=>{var r="",n=a.couponType,s=a.exchangeData.productType,u=a.status,o=a.exchangeData.thirdRechargeStatus;return r=6===n?"change":2===s?"copy":1===s&&2===u?"jump":1===s&&3===u&&1===o?"":"member",c.a.createElement(p["a"],{key:e.toString(),border:!0,btnTitle:3===a.status&&3===a.exchangeData.thirdRechargeStatus?"\u8054\u7cfb\u5ba2\u670d":null,closeHandler:d,data:{title:a.couponTitle,retitle:a.packageName,time:a.couponEndDate,state:a.status,thirdStatus:a.exchangeData.thirdRechargeStatus,name:a.exchangeData.productName,account:a.exchangeData.rechargeAccount,paytime:a.exchangeData.rechargeDate,codeNo:a.exchangeData.cardSecret,cardNo:a.exchangeData.cardNO,remark:a.exchangeData.cardRemark},step:r})})),c.a.createElement("div",null,c.a.createElement("div",{className:o.a.historyCard,onClick:a=>n(a)},"\u5386\u53f2\u5361\u5238(10)")))};e["default"]=Object(n["c"])(a=>({card:a.card,user:a.user}))(h)}}]);