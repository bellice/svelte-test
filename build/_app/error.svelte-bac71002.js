import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f as p,E as l,h as d,k as f,l as i,n as m,G as h}from"./chunks/vendor-db46b043.js";function k(s){let r,a,f=s[1].stack+"";return{c(){r=t("pre"),a=e(f)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,f),t.forEach(u)},m(s,t){p(s,r,t),l(r,a)},p(s,r){2&r&&f!==(f=s[1].stack+"")&&d(a,f)},d(s){s&&u(r)}}}function E(s){let r,a,E,v,g,x,b,P=s[1].message+"",$=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),E=f(),v=t("p"),g=e(P),x=f(),$&&$.c(),b=i()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),E=m(t),v=o(t,"P",{});var p=n(v);g=c(p,P),p.forEach(u),x=m(t),$&&$.l(t),b=i()},m(s,t){p(s,r,t),l(r,a),p(s,E,t),p(s,v,t),l(v,g),p(s,x,t),$&&$.m(s,t),p(s,b,t)},p(s,[r]){1&r&&d(a,s[0]),2&r&&P!==(P=s[1].message+"")&&d(g,P),s[1].stack?$?$.p(s,r):($=k(s),$.c(),$.m(b.parentNode,b)):$&&($.d(1),$=null)},i:h,o:h,d(s){s&&u(r),s&&u(E),s&&u(v),s&&u(x),$&&$.d(s),s&&u(b)}}}function v({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,E,a,{status:0,error:1})}}export{v as load};
