(this["webpackJsonpaffiliate-react"]=this["webpackJsonpaffiliate-react"]||[]).push([[0],{356:function(e,t,a){},357:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),i=a.n(c),r=(a(356),a(334)),s=a(335),l=a(339),d=a(338),u=(a(357),a(14));function h(e){var t=e.title;return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"#",children:t}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link active","aria-current":"page",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",children:"Link"})}),Object(u.jsxs)("li",{className:"nav-item dropdown",children:[Object(u.jsx)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown"}),Object(u.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"dropdown-item",children:"Action"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"dropdown-item",children:"Another action"})}),Object(u.jsx)("li",{children:Object(u.jsx)("hr",{className:"dropdown-divider"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"dropdown-item",children:"Something else here"})})]})]}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link disabled",tabindex:"-1","aria-disabled":"true",children:"Disabled"})})]}),Object(u.jsxs)("form",{className:"d-flex",children:[Object(u.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(u.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}var b=a(191),j=a(103),m=a.n(j),f=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),o=t[0],c=t[1],i=Object(n.useState)([]),r=Object(b.a)(i,2),s=r[0],l=r[1],d=Object(n.useState)([]),h=Object(b.a)(d,2),j=h[0],f=h[1];Object(n.useEffect)((function(){(e=a(221))({method:"post",url:"https://eduhomeopathy.com/ReactWebAPI/API/Country/GetCountyList",headers:{},data:""}).then((function(e){c(e.data.Data.AccessToken)})).catch((function(e){console.log(e)})),(e=a(221))({method:"post",url:"https://welcomecure.com/ReactWebApi/API/Affiliate/AffDoctorPatientlist",headers:{UserName:"WelcomeWebApi",Password:"welcomecure123"}}).then((function(e){console.log("Welcome cure site data:--"),console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)})),e({method:"post",url:"http://localhost:58791/Api/Affiliate/AffDoctorPatientlist?=",headers:{UserName:"WelcomeWebApi",Password:"welcomecure123",AccessToken:{tempdata:o},UserId:1147}}).then((function(e){console.log(JSON.stringify(e.data)),l(e.data.Data)})).catch((function(e){console.log(e)}));var e;(e=a(221))({method:"post",url:"https://eduhomeopathy.com/ReactWebAPI/API/Country/GetCountyList",headers:{}}).then((function(e){f(e.data)})).catch((function(e){console.log(e)}))}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m.a,{title:"Doctor Patients List",data:j,columns:[{title:"Country Id",field:"CountryId"},{title:"Country Name",field:"CountryName"}],options:{search:!0,filtering:!0,exportButton:!0}}),Object(u.jsx)(m.a,{title:"Doctor Patients List",data:s,columns:[{title:"Patinet Name",field:"Name"},{title:"Patient Reg No.",field:"PatientNo"},{title:"Email Id",field:"EmailId"},{title:"Mobile No.",field:"MobileNo"}],options:{search:!0,filtering:!0,exportButton:!0}})]})},p=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(m.a,{title:"Patient List",data:[{name:"Pratik",age:22},{name:"john",age:26},{name:"Balaram",age:27}],columns:[{title:"Patient Name",field:"name"},{title:"Age",field:"age"}],options:{search:!0,filtering:!0,exportButton:!0}})})},g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={users:null,Calls:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{title:"Affiliate Header"}),Object(u.jsx)(f,{}),Object(u.jsx)(p,{}),Object(u.jsx)("h1",{className:"text-center",children:"Fetch Data From Get Api Url"})]})}}]),a}(n.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):O(t,e)}))}}()}},[[437,1,3]]]);
//# sourceMappingURL=main.2400206f.chunk.js.map