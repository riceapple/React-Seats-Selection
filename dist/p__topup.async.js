(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"3im9":function(e,M,c){"use strict";c.r(M);var a=c("q1tI"),t=c.n(a),n=c("p0pE"),i=c.n(n),r=c("qIgq"),I=c.n(r),N=c("TSYQ"),j=c.n(N),m=c("uJMD");c("mzTX");function u(e){var M=()=>{e.onChange&&e.onChange(e.index)};return t.a.createElement("div",{className:j()("spec-item","u-1of".concat(e.column||2),{active:e.active}),onClick:M},t.a.createElement("div",null,t.a.createElement("div",{className:"spec-item-name"},e.name),t.a.createElement("div",{className:"spec-item-price",dangerouslySetInnerHTML:{__html:Object(m["d"])(e.payPrice,"tag")}}),e.price&&t.a.createElement("div",{className:"spec-item-original"},"\u539f\u4ef7 ",Object(m["d"])(e.price)),e.subText&&t.a.createElement("div",{className:"spec-item-tag"},e.subText),e.active&&t.a.createElement("img",{className:"spec-item-check-ico",src:c("cI+d"),alt:""})))}c("ZL/5");function l(e){var M=[{name:"VIP\u6708\u5361",cornerMark:"5-10\u5143\u53ef\u63d0\u73b0\u7ea2\u5305",price:15,membershipPrice:12},{name:"VIP\u5b63\u5361",cornerMark:"8-10\u5143\u53ef\u63d0\u73b0\u7ea2\u5305",price:45,membershipPrice:36.55},{name:"VIP\u5b63\u5361",cornerMark:null,price:45,membershipPrice:36.55}],c=Object(a["useReducer"])((e,M)=>i()({},e,M),{active:0}),n=I()(c,2),r=n[0],N=n[1];return t.a.createElement("div",{className:"spec-group"},M.map((M,c)=>{var a=M.membershipPrice;return t.a.createElement(u,{key:c,index:c,column:e.column,active:r.active===c,onChange:e=>N({active:e}),name:M.name,payPrice:a,price:M.price,subText:M.cornerMark})}))}function T(){return t.a.createElement("div",null,"CardPage",t.a.createElement(l,null))}function D(){return t.a.createElement("div",null,"DirectPage",t.a.createElement(l,null))}function z(e){var M={type:Math.random()>.5?1:2};return t.a.createElement(a["Fragment"],null,1===M.type&&t.a.createElement(D,null),2===M.type&&t.a.createElement(T,null))}c.d(M,"default",function(){return z})},"ZL/5":function(e,M,c){},"cI+d":function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMjMgMTQiIHdpZHRoPSIyMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iODAuNTA2MjQyJSIgY3k9IjgwLjM4ODg3MSUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLS42NzE2ODEyNSAtLjU0MzIwMjc1IC40MzQ1NjIyIC0uODM5NjAxNTYgLjk5NjQ2NyAxLjkxNjE0NykiIHI9IjEzOC41NzI1ODIlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhNjdjMzgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlYWQxOTUiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Im0xNCAwaDl2MTBjMCAyLjIwOTEzOS0xLjc5MDg2MSA0LTQgNGgtMTljMC03LjczMTk4NjUgNi4yNjgwMTM1LTE0IDE0LTE0eiIgZmlsbD0iIzEyMTgyYiIvPjxwYXRoIGQ9Im0xMS43NTAxMzIyIDExYy0uMjYxNzI2MyAwLS41MTMwMzczLS4wOTM3NDg5LS43MDAwNDgyLS4yNjExNjU2bC0yLjc1MDE3NDM1LTIuNDY0ODU0MDZjLS4zOTQyNzExOC0uMzUzMjQzMy0uNDAwNjc3MTMtLjkzMjQ4MjI4LS4wMTQwMzExNC0xLjI5Mjk4MDY4LjM4NzI1NTYtLjM2MDQ4OTI4IDEuMDIwMTc2MTctLjM2NjYyOTYyIDEuNDE0MTQ3NTQtLjAxMjgzODA3bDEuOTQ5NDA5NzUgMS43NDcyMTk4MyA0LjU2MTAyMTYtNS4zNjIyMDAyN2MuMzM4NzM2Mi0uMzk4NDM2OTUuOTY3Mzc5NS0uNDcwOTg4MDIgMS40MDM0NjQyLS4xNjAxNjA2LjQzNTc3NS4zMDk3MTI2Ni41MTQ1MTUzLjg4NDQ5MjU4LjE3NTQ2OTMgMS4yODI5Mjk1M2wtNS4yNDk3ODY5IDYuMTcxMzU0ODJjLS4xNzUxNjk0LjIwNTkyMDgtLjQzNzkxMzYuMzMzMTUwMi0uNzIyMzM0MS4zNTEwMDQ3LS4wMjI1ODU4LjAwMTEzMy0uMDQ0ODYxNy4wMDE2OTA0LS4wNjcxMzc3LjAwMTY5MDR6IiBmaWxsPSJ1cmwoI2EpIi8+PC9nPjwvc3ZnPg=="},mzTX:function(e,M,c){}}]);