import{S as e,i as s,s as a,e as t,t as c,k as r,c as l,a as o,g as i,d as n,n as p,b as d,D as h,f,E as v,F as u,G as $,H as g,I as m,z as E,J as k,j as y,m as A,o as z,K as w,v as I,r as b,w as x}from"../chunks/vendor-db46b043.js";import{p as L}from"../chunks/stores-8aa79d53.js";function O(e){let s,a,m,E,k,y,A,z,w,I,b,x,L,O,j,D;return{c(){s=t("header"),a=t("nav"),m=t("ul"),E=t("li"),k=t("a"),y=c("Accueil"),A=r(),z=t("li"),w=t("a"),I=c("Indicateur"),b=r(),x=t("li"),L=t("a"),O=c("À propos"),this.h()},l(e){s=l(e,"HEADER",{class:!0});var t=o(s);a=l(t,"NAV",{class:!0});var c=o(a);m=l(c,"UL",{class:!0});var r=o(m);E=l(r,"LI",{class:!0});var d=o(E);k=l(d,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var h=o(k);y=i(h,"Accueil"),h.forEach(n),d.forEach(n),A=p(r),z=l(r,"LI",{class:!0});var f=o(z);w=l(f,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var v=o(w);I=i(v,"Indicateur"),v.forEach(n),f.forEach(n),b=p(r),x=l(r,"LI",{class:!0});var u=o(x);L=l(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var $=o(L);O=i($,"À propos"),$.forEach(n),u.forEach(n),r.forEach(n),c.forEach(n),t.forEach(n),this.h()},h(){d(k,"sveltekit:prefetch",""),d(k,"href","/"),d(k,"class","svelte-1z0yp4d"),d(E,"class","svelte-1z0yp4d"),h(E,"active","/"===e[1].path),h(E,"selected","/"===e[0]?"selected":""),d(w,"sveltekit:prefetch",""),d(w,"href","/indicateur"),d(w,"class","svelte-1z0yp4d"),d(z,"class","svelte-1z0yp4d"),h(z,"active","/indicateur"===e[1].path),h(z,"selected","/indicateur"===e[0]?"selected":""),d(L,"sveltekit:prefetch",""),d(L,"href","/a-propos"),d(L,"class","svelte-1z0yp4d"),d(x,"class","svelte-1z0yp4d"),h(x,"active","/a-propos"===e[1].path),h(x,"selected","/a-propos"===e[0]?"selected":""),d(m,"class","svelte-1z0yp4d"),d(a,"class","svelte-1z0yp4d"),d(s,"class","svelte-1z0yp4d")},m(t,c){f(t,s,c),v(s,a),v(a,m),v(m,E),v(E,k),v(k,y),v(m,A),v(m,z),v(z,w),v(w,I),v(m,b),v(m,x),v(x,L),v(L,O),j||(D=[u(E,"click",e[2]),u(z,"click",e[3]),u(x,"click",e[4])],j=!0)},p(e,[s]){2&s&&h(E,"active","/"===e[1].path),1&s&&h(E,"selected","/"===e[0]?"selected":""),2&s&&h(z,"active","/indicateur"===e[1].path),1&s&&h(z,"selected","/indicateur"===e[0]?"selected":""),2&s&&h(x,"active","/a-propos"===e[1].path),1&s&&h(x,"selected","/a-propos"===e[0]?"selected":"")},i:$,o:$,d(e){e&&n(s),j=!1,g(D)}}}function j(e,s,a){let t;m(e,L,(e=>a(1,t=e)));let c=t.path;E((async()=>{let e=window.pageYOffset;window.onscroll=function(){let s=window.pageYOffset;document.querySelector("nav").style.top=e>s|0==s?"0":"-50px",e=s}}));return[c,t,()=>a(0,c="/"),()=>a(0,c="/indicateur"),()=>a(0,c="/a-propos")]}class D extends e{constructor(e){super(),s(this,e,j,O,a,{})}}function N(e){let s,a,c,r,i;return{c(){s=t("footer"),a=t("div"),c=t("a"),r=t("img"),this.h()},l(e){s=l(e,"FOOTER",{class:!0});var t=o(s);a=l(t,"DIV",{class:!0});var i=o(a);c=l(i,"A",{href:!0});var p=o(c);r=l(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(n),i.forEach(n),t.forEach(n),this.h()},h(){r.src!==(i="../static/img/logo-anct.svg")&&d(r,"src","../static/img/logo-anct.svg"),d(r,"alt","ANCT - Agence nationale de la cohésion des territoires"),d(r,"class","svelte-gbpidt"),d(c,"href","https://agence-cohesion-territoires.gouv.fr/"),d(a,"class","svelte-gbpidt"),d(s,"class","svelte-gbpidt")},m(e,t){f(e,s,t),v(s,a),v(a,c),v(c,r)},p:$,i:$,o:$,d(e){e&&n(s)}}}class F extends e{constructor(e){super(),s(this,e,null,N,a,{})}}function G(e){let s,a,c,i,d,h;s=new D({});const v=e[1].default,u=k(v,e,e[0],null);return d=new F({}),{c(){y(s.$$.fragment),a=r(),c=t("main"),u&&u.c(),i=r(),y(d.$$.fragment)},l(e){A(s.$$.fragment,e),a=p(e),c=l(e,"MAIN",{});var t=o(c);u&&u.l(t),t.forEach(n),i=p(e),A(d.$$.fragment,e)},m(e,t){z(s,e,t),f(e,a,t),f(e,c,t),u&&u.m(c,null),f(e,i,t),z(d,e,t),h=!0},p(e,[s]){u&&u.p&&(!h||1&s)&&w(u,v,e,e[0],s,null,null)},i(e){h||(I(s.$$.fragment,e),I(u,e),I(d.$$.fragment,e),h=!0)},o(e){b(s.$$.fragment,e),b(u,e),b(d.$$.fragment,e),h=!1},d(e){x(s,e),e&&n(a),e&&n(c),u&&u.d(e),e&&n(i),x(d,e)}}}function H(e,s,a){let{$$slots:t={},$$scope:c}=s;return e.$$set=e=>{"$$scope"in e&&a(0,c=e.$$scope)},[c,t]}export default class extends e{constructor(e){super(),s(this,e,H,G,a,{})}}
