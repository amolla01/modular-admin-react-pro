(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,a,t){e.exports=t(177)},177:function(e,a,t){"use strict";t.r(a);t(148);var n=t(0),r=t.n(n),o=t(13),i=t.n(o),l=t(55),c=t(266),s=t(19),m=t(38),d=t(265),u={navigationType:"hash"},p=t(69),h=t.n(p),b={token:null,init:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).useDemoToken,a=void 0!==e&&e;this.token=a?"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Db8fjZU7MkBZoJDjmjuvv2EeDgG9RSaZ1xKm__qHelw":h.a.get("token")||null},auth:function(e){h.a.set("token",e)},unauth:function(){h.a.remove("token")},isAuthenticated:function(){return!!this.token},getToken:function(){return this.token}},f=t(56),g=t(131),E=t(230),v=Object(g.a)({props:{MuiPaper:{elevation:0},MuiAppBar:{elevation:1},MuiButton:{},MuiMenu:{elevation:1},MuiCard:{elevation:0}},overrides:{MuiButton:{root:{minWidth:0,"&$hover":{backgroundColor:"rgba(0, 0, 0, 0.08)"},"&$focusVisible":{boxShadow:"none",backgroundColor:"rgba(0, 0, 0, 0.06)"}},contained:{boxShadow:"none","&:active":{boxShadow:"none"},"&:focus":{boxShadow:"none"}},containedSecondary:{color:"#fff","&:hover":{backgroundColor:"rgb(118, 195, 21)"}}},MuiButtonGroup:{root:{boxShadow:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"},"&:focus":{boxShadow:"none"}}},MuiListItemIcon:{root:{minWidth:40}}},palette:{secondary:{main:"#8cd136"},primary:{main:E.a[600]}},typography:{h1:{fontSize:"2rem"},h2:{fontSize:"1.8rem"},h3:{fontSize:"1.6rem"},h4:{fontSize:"1.4rem"},h5:{fontSize:"1.2rem"},h6:{fontSize:"1rem"}}}),k={header:{background:"#fff"},sidebar:{width:255,widthCollapsed:v.spacing(7),background:"#4a4d5a;",color:"#fff"}},C=Object(f.a)({},v,k),y=function(){return r.a.createElement("div",{className:"Auth"},"Auth")},w=t(28),N=t(27),O=t(3),I=t(33),S=t(178),j=t(264),x=t(271),M=t(268),D=t(250),A=t(251),z=t(236),L=t(108),T=t.n(L),P=t(270),B=t(235),R=t(101),W=t.n(R),H=t(103),G=t.n(H),F=t(104),J=t.n(F),q=Object(S.a)(function(e){return{demo:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},demoIcon:{},demoName:Object(w.a)({marginLeft:e.spacing(1)},e.breakpoints.down("md"),{display:"none"}),button:Object(w.a)({margin:e.spacing(1)},e.breakpoints.down("md"),{margin:3})}}),U=function(e){var a=q(e);return r.a.createElement("div",{className:a.demo},r.a.createElement(P.a,{title:"View on GitHub"},r.a.createElement(B.a,{size:"small",variant:"outlined",color:"primary",className:a.button,href:"https://github.com/modularcode/modular-material-admin-react"},r.a.createElement(W.a,{className:a.demoIcon}),r.a.createElement("span",{className:a.demoName},"View on GitHub"))),r.a.createElement(P.a,{title:"Help me to keep the project active!"},r.a.createElement(B.a,{component:s.c,size:"small",variant:"outlined",color:"primary",className:a.button,to:"/demo/supporters"},r.a.createElement(G.a,{className:a.demoIcon}),r.a.createElement("span",{className:a.demoName},"Support Me"))),r.a.createElement(P.a,{title:"Star the project on GitHub!"},r.a.createElement(B.a,{size:"small",variant:"outlined",color:"primary",className:a.button,href:"https://github.com/modularcode/modular-material-admin-react/stargazers"},r.a.createElement(J.a,{className:a.demoIcon}),r.a.createElement("span",{className:a.demoName},"Rate"))))},Y=t(267),V=t(237),Z=t(242),$=t(239),Q=t(240),X=t(238),K=t(105),_=t.n(K),ee=Object(S.a)(function(e){return{searchButton:{marginRight:20},scrollPaper:{alignItems:"flex-start"}}}),ae=function(){var e=ee(),a=r.a.useState(!1),t=Object(N.a)(a,2),n=t[0],o=t[1];function i(){o(!1)}return r.a.createElement("div",null,r.a.createElement(z.a,{edge:"start",color:"inherit","aria-label":"Search",className:e.searchButton,onClick:function(){o(!0)}},r.a.createElement(_.a,null)),r.a.createElement(V.a,{fullWidth:!0,open:n,onClose:i,"aria-labelledby":"dashboard-search",classes:{scrollPaper:e.scrollPaper}},r.a.createElement(X.a,{id:"dashboard-search"},"Search..."),r.a.createElement($.a,null,r.a.createElement(Q.a,null,"You may provide some extra search hints here"),r.a.createElement(Y.a,{autoFocus:!0,margin:"dense",id:"name",label:"Search text: e.g. puppies",type:"text",fullWidth:!0})),r.a.createElement(Z.a,null,r.a.createElement(B.a,{onClick:i,color:"primary"},"Cancel"),r.a.createElement(B.a,{onClick:i,color:"primary"},"Search"))))},te=t(243),ne=t(106),re=t.n(ne),oe=t(132),ie=t(241),le=t(180),ce=t(246),se=t(244),me=t(245),de=t(42),ue=[{user:{name:"Remy Sharp",image:"https://material-ui.com/static/images/avatar/1.jpg"},title:"New Order",content:" \u2014 I'll be in your neighborhood doing errands this\u2026"},{user:{name:"Travis Howard",image:"https://material-ui.com//static/images/avatar/2.jpg"},title:"New Signup",content:" \u2014 Wish I could come, but I'm out of town this\u2026"},{user:{name:"Oui Oui",image:"https://material-ui.com//static/images/avatar/3.jpg"},title:"Refund Request",content:"please provide me a refund for my order"}],pe=Object(S.a)(function(e){return{headerNotifications:{marginRight:23},notificationsContainer:{},button:{},badge:{color:"#fff"},notifications:{maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}),he=function(){var e=pe(),a=r.a.useState(null),t=Object(N.a)(a,2),n=t[0],o=t[1];return r.a.createElement("div",{className:e.headerNotifications},r.a.createElement(z.a,{edge:"start",color:"inherit","aria-label":"Search",className:e.button,"aria-controls":"HeaderNotifications","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(te.a,{badgeContent:3,color:"secondary",classes:{badge:e.badge}},r.a.createElement(re.a,null))),r.a.createElement(oe.a,{id:"HeaderNotifications",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){o(null)},elevation:1,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"},classes:{paper:e.notifications}},r.a.createElement(ie.a,{className:e.notifications},ue.map(function(a,t){return r.a.createElement(le.a,{button:!0,alignItems:"flex-start",key:t},r.a.createElement(se.a,null,r.a.createElement(me.a,{alt:a.user.name,src:a.user.image})),r.a.createElement(ce.a,{primary:a.title,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},a.user.name),a.content)}))}))))},be=t(247),fe=t(248),ge=t(249),Ee=t(66),ve=t.n(Ee),ke=t(67),Ce=t.n(ke),ye=t(49),we=t.n(ye),Ne=t(50),Oe=t.n(Ne),Ie=t(107),Se=t.n(Ie),je=Object(S.a)(function(e){return{headerProfile:{display:"inline-flex"},profileButton:{borderRadius:30,fontSize:"1.2rem",padding:8},profileAvatar:{width:35,height:35,marginRight:10},profileName:Object(w.a)({fontWeight:500,marginRight:5},e.breakpoints.down("sm"),{display:"none"}),profileMenu:{marginLeft:"-16px"}}}),xe=function(){var e=je(),a=r.a.useState(null),t=Object(N.a)(a,2),n=t[0],o=t[1];function i(){o(null)}return r.a.createElement("div",{className:Object(O.a)("headerProfile",e.headerProfile)},r.a.createElement(z.a,{edge:"start",color:"inherit","aria-label":"Search",className:e.profileButton,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(me.a,{className:e.profileAvatar,alt:"John Doe",src:"https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"}),r.a.createElement("span",{className:e.profileName},"Gevorg"),r.a.createElement(ve.a,null)),r.a.createElement(oe.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i,elevation:1,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},classes:{paper:e.profileMenu}},r.a.createElement(be.a,{onClick:i,component:s.c,to:"/profile"},r.a.createElement(fe.a,null,r.a.createElement(Ce.a,null)),r.a.createElement(ce.a,{primary:"My Profile"})),r.a.createElement(be.a,{onClick:i,component:s.c,to:"/account"},r.a.createElement(fe.a,null,r.a.createElement(we.a,null)),r.a.createElement(ce.a,{primary:"My Accounts"})),r.a.createElement(be.a,{onClick:i,component:s.c,to:"/settings"},r.a.createElement(fe.a,null,r.a.createElement(Oe.a,null)),r.a.createElement(ce.a,{primary:"Settings"})),r.a.createElement(ge.a,null),r.a.createElement(be.a,{onClick:i,component:s.c,to:"/auth/logout"},r.a.createElement(fe.a,null,r.a.createElement(Se.a,null)),r.a.createElement(ce.a,{primary:"Logout"}))))},Me=Object(S.a)(function(e){return{header:{background:"#fff",color:"#7b7b7b",boxShadow:"none"},toolbar:{},menuButton:{},actions:{marginLeft:"auto",alignItems:"center",display:"flex"},notificationsButton:{marginRight:23},title:{flexGrow:1}}}),De=function(e){var a=e.onToggle,t=Me();return r.a.createElement(D.a,{position:"absolute",className:t.header},r.a.createElement(A.a,{className:t.toolbar},r.a.createElement(z.a,{edge:"start",color:"inherit","aria-label":"Toggle sidebar",onClick:a,className:Object(O.a)(t.menuButton)},r.a.createElement(T.a,null)),r.a.createElement(U,null),r.a.createElement("div",{className:t.actions},r.a.createElement(ae,null),r.a.createElement(he,null),r.a.createElement(xe,null))))},Ae=Object(S.a)(function(e){return{Logo:function(e){return{display:"inline-block",verticalAlign:"text-bottom",width:e.size,height:e.size}},path:{transition:"all .3s ease"},outline:{fill:"currentColor"},letter:{fill:"currentColor"}}}),ze=function(e){var a=Ae(e);return r.a.createElement("svg",{className:Object(O.a)(a.Logo,e.className),"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 563.82 637.44"},r.a.createElement("title",null,"Modular Material Admin + React"),r.a.createElement("g",null,r.a.createElement("path",{className:Object(O.a)(a.path,a.outline),d:"M24.13,334.53c0-17,0-34.08,0-51.12-.06-25.71-.2-51.42-.26-77.13a120.65,120.65,0,0,1,1-18.17c1.91-12.83,9.11-22.06,19.67-28.91C57,151.09,70.21,144.1,83.23,136.85c27.09-15.08,53.71-31,80.57-46.43Q207.86,65,251.94,39.65c11.73-6.73,23.57-13.25,35.38-19.83,8.72-4.86,18-5.06,27.57-3.37,8.95,1.59,16.36,6.57,24,11Q390.07,56.92,441.2,86.49q36.66,21.17,73.34,42.31c16.37,9.4,32.86,18.61,49.21,28.05,10.51,6.07,18.39,14.5,22.07,26.33a42.26,42.26,0,0,1,1.79,12.65q0,43.5,0,87,0,93.58.06,187.16c0,18-7.87,31.43-23.07,40.38-26,15.33-52.32,30.24-78.5,45.33q-44.19,25.47-88.39,50.94C374.2,620.16,350.79,633.89,327,647c-14.79,8.12-29.86,8.05-44.83-.77-27.66-16.31-55.53-32.26-83.32-48.36q-40-23.18-80-46.32c-23.78-13.68-47.67-27.15-71.45-40.82-12.17-7-20.22-17.16-22.87-31.17a33.92,33.92,0,0,1-.29-6.26q0-69.36,0-138.72Zm43.28,2.25c-.19,43.94-.44,87.89.44,131.83.05,2.6,1.08,3.88,3.15,5.09,17.1,9.94,34.1,20.06,51.23,30,31,17.89,62.06,35.63,93.06,53.49C233,567.35,250.78,577.55,268.39,588c11.63,6.89,23.26,13.72,35.43,19.63a3.92,3.92,0,0,0,3.92.07c2.55-1.33,5.18-2.49,7.73-3.83,20.52-10.76,40.13-23.09,60.19-34.64q35.51-20.44,71-40.91c31.62-18.19,63.24-36.39,94.63-55,1.5-.89,2.36-1.78,2.38-3.68.19-14,.67-28.08.74-42.12.39-75.43.6-150.87-.57-226.3,0-.89-.22-1.79-.18-2.68.09-1.83-.83-2.82-2.35-3.76C512.59,177,483,160.56,453.62,143.9c-30-17-59.63-34.66-89.46-52-18.49-10.72-37.27-20.92-56-31.12-1.27-.69-2.52-1.22-3.95-.49-7.22,3.73-14.63,7.14-21.64,11.25-39.54,23.14-79.13,46.22-119,68.84q-46.69,26.51-92.7,54.18c-1.74,1-2.89,2.07-2.9,4.37-.08,10.86-.48,21.71-.5,32.57Q67.34,284.16,67.42,336.77Z",transform:"translate(-23.86 -15.48)"}),r.a.createElement("path",{className:Object(O.a)(a.path,a.letter),d:"M457.14,336c0,26.61,0,53.22.05,79.83a5.16,5.16,0,0,1-3,5.15q-26.17,14.56-52.24,29.3c-2.7,1.52-3,1.35-3.06-2-.11-17.74-.22-35.48-.25-53.22,0-27.21.13-54.42-.08-81.63-.07-9.26-.36-18.52-.48-27.79,0-3.52-.4-3.72-3.48-2-18,9.83-35.24,20.77-52.65,31.5-11.15,6.87-22.36,13.64-33.84,20a4.26,4.26,0,0,1-4.64,0c-16.26-8.4-31.48-18.56-47.06-28.09-12.87-7.87-25.77-15.68-38.86-23.17-3.38-1.94-3.68-1.71-3.79,2.14-1.42,47.73-.19,95.47-.65,143.2-.06,6.48-.17,13-.26,19.43,0,3.08-.16,3.15-2.94,1.72-15.23-7.78-29.71-16.89-44.66-25.16-2.78-1.54-5.53-3.12-8.33-4.61a3.9,3.9,0,0,1-2.27-3.8c-.78-49-.56-98.06-.27-147.1,0-4.88.28-9.76.28-14.64a4.39,4.39,0,0,1,2.32-4.1,659.56,659.56,0,0,1,57.19-33.12c4.65-2.4,8.77-1.63,13,.52,9.06,4.58,17.41,10.34,26,15.62,16.59,10.16,33.08,20.48,50.26,29.64a4.68,4.68,0,0,0,5,0c18.32-9.6,35.55-21,53.18-31.77,9.33-5.7,18.91-10.91,28.65-15.86a4.2,4.2,0,0,1,4.25-.14c20.22,11.23,40.73,22,59.9,35a5.54,5.54,0,0,1,2.79,5.1C457.45,282.58,457.84,309.28,457.14,336Z",transform:"translate(-23.86 -15.48)"})))},Le=t(269),Te=t(253),Pe=t(117),Be=t.n(Pe),Re=t(119),We=t.n(Re),He=t(120),Ge=t.n(He),Fe=t(77),Je=t.n(Fe),qe=t(114),Ue=t.n(qe),Ye=t(112),Ve=t.n(Ye),Ze=t(113),$e=t.n(Ze),Qe=t(121),Xe=t.n(Qe),Ke=t(123),_e=t.n(Ke),ea=t(125),aa=t.n(ea),ta=t(124),na=t.n(ta),ra=t(122),oa=t.n(ra),ia=t(79),la=t.n(ia),ca=t(78),sa=t.n(ca),ma=t(118),da=t.n(ma),ua=t(115),pa=t.n(ua),ha=t(116),ba=t.n(ha),fa=t(252),ga=t(111),Ea=t.n(ga),va=t(110),ka=t.n(va),Ca=t(109),ya=t.n(Ca),wa=Object(n.forwardRef)(function(e,a){return r.a.createElement(s.d,Object.assign({exact:!0},e,{innerRef:a}))}),Na=Object(n.forwardRef)(function(e,a){var t=e.isCollapsed,n=Object(l.a)(e,["isCollapsed"]),o=Oa(),i="string"===typeof e.link?r.a.createElement(le.a,Object.assign({},n,{button:!0,component:wa,to:e.link})):r.a.createElement(le.a,Object.assign({},n,{button:!0}));return r.a.createElement("div",{ref:a,className:Object(O.a)(t&&o.navItemCollapsedWrapper)},i)}),Oa=Object(S.a)(function(e){return Object(Le.a)({navItemWrapper:{position:"relative"},navItemWrapperActive:{},navItemWrapperActiveCollapsed:{background:"rgba(0, 0, 0, 0.08)"},navItem:{position:"relative",transition:"background .23s ease","&.active":{color:e.palette.secondary.main,"& .MuiListItemIcon-root":{color:e.palette.secondary.main}}},navItemChildren:{transition:"background .23s ease"},navItemChildrenActive:{},navItemCollapsed:{whiteSpace:"nowrap",flexWrap:"nowrap",width:e.sidebar.widthCollapsed,"& $iconToggle":{position:"absolute",bottom:-1,fontSize:14,left:"50%",marginLeft:"-0.5em"},"&.active":{background:"rgba(0, 0, 0, 0.08)"}},navItemCollapsedWrapper:{width:e.sidebar.widthCollapsed},navItemIcon:{minWidth:40},iconToggle:{},iconSpacer:{fontSize:13,marginLeft:6}})}),Ia=function e(a){var t=a.name,n=a.link,o=a.Icon,i=a.IconStyles,l=void 0===i?{}:i,c=a.IconClassName,s=void 0===c?"":c,m=a.isCollapsed,d=(a.isNested,a.nestingLevel),u=void 0===d?0:d,p=a.nestingOffset,h=void 0===p?16:p,b=a.className,f=a.items,g=void 0===f?[]:f,E=m,v=Oa(),k=g&&g.length>0;var C=function e(a){return a.reduce(function(a,t){return t.items&&t.items.length?a.concat([t],e(t.items)):a.concat([t])},[])}(g),y=k&&C.filter(function(e){return"#".concat(e.link)===window.location.hash}).length>0,w=y||!1,I=r.a.useState(w),S=Object(N.a)(I,2),j=S[0],x=S[1];var M=!!o&&r.a.createElement(o,null)||m&&r.a.createElement(ya.a,{className:v.iconSpacer})||"",D=m?16:h+16,A=r.a.createElement(Na,{link:n,className:Object(O.a)(v.navItem,m&&v.navItemCollapsed,y&&"active",b),style:{fontSize:"".concat(1-.07*u,"em"),paddingLeft:"".concat(M?h:h+40,"px")},isCollapsed:m,onClick:function(){x(!j)}},!!M&&r.a.createElement(fe.a,{style:l,className:Object(O.a)(v.navItemIcon,s)},M),r.a.createElement(ce.a,{primary:t,disableTypography:!0}),k&&!j&&r.a.createElement(ka.a,{className:v.iconToggle}),k&&j&&r.a.createElement(Ea.a,{className:v.iconToggle})),z=E?r.a.createElement(P.a,{disableFocusListener:!E,disableHoverListener:!E,disableTouchListener:!E,title:t,placement:"right"},A):A,L=k?r.a.createElement("div",{className:Object(O.a)(v.navItemChildren)},r.a.createElement(fa.a,{in:j,timeout:"auto",unmountOnExit:!0},r.a.createElement(ie.a,{component:"div",disablePadding:!0},g.map(function(a){return r.a.createElement(e,Object.assign({},a,{isNested:!0,nestingLevel:u+1,isCollapsed:m,key:a.name||a.link,isOpen:j,nestingOffset:D}))})))):null;return r.a.createElement("div",{className:Object(O.a)(y&&v.navItemWrapperActive,y&&m&&v.navItemWrapperActiveCollapsed)},z,L)},Sa=function(e){var a=e.items,t=void 0===a?[]:a,n=e.isCollapsed,o=void 0!==n&&n,i=e.isNested,l=void 0!==i&&i;return r.a.createElement(r.a.Fragment,null,t.map(function(e,a){return r.a.createElement(Ia,Object.assign({},e,{isCollapsed:o,isNested:l,key:a}))}))},ja=Object(S.a)(function(e){return Object(Le.a)({navList:{width:e.sidebar.width,fontSize:"1.1em",fontWeight:400,lineHeight:1.5,letterSpacing:"0.00938em"},navListHeader:{textAlign:"center"},iconFeatures:{color:"#95de3c"},iconDocs:{color:"#f8cda9"},iconSupporters:{color:"#e3b546"},iconDiscuss:{color:"#ccc"}})}),xa=function(e){var a=e.isCollapsed,t=ja(),n=[{name:"Sales Dashboard",link:"/sales/dashboard",Icon:Je.a},{name:"Orders",link:"/sales/orders",Icon:Ve.a},{name:"Customers",link:"/sales/customers",Icon:$e.a},{name:"Products",Icon:Ue.a,items:[{name:"All Products",link:"/sales/products"},{name:"Add New",link:"/sales/products/new"},{name:"Categories",link:"/sales/products/categories"}]},{name:"Stock",link:"/sales/stock",Icon:pa.a},{name:"Locations",link:"/sales/locations",Icon:ba.a}],o=[{name:"My Profile",link:"/profile",Icon:sa.a},{name:"Profile Settings",link:"/profile/settings",Icon:Oe.a}],i=[{name:"My Organizations",link:"/organizations",Icon:sa.a},{name:"Organization Settings",link:"/organizations/settings",Icon:Oe.a},{name:"Team",link:"/organizations/users",Icon:la.a}],l=[{name:"Admin Dashboard",link:"/admin/dashboard",Icon:Je.a},{name:"All Organizations",link:"/admin/accounts",Icon:we.a},{name:"All Users",link:"/admin/users",Icon:la.a}],c=(Be.a,[{name:"Auth",items:[{name:"Login",link:"/auth/login"},{name:"Signup",link:"/auth/signup"},{name:"Recover",link:"/auth/recover"},{name:"Reset",link:"/auth/reset"}],Icon:da.a},{name:"Profile",items:o,Icon:Ce.a},{name:"Organizations",items:i,Icon:we.a},{name:"Administration",items:l,Icon:We.a},{name:"Misc Pages",items:[{name:"Search",link:"/search"},{name:"Not Found",link:"/notfound"}],Icon:Ge.a}]),s=[{name:"UI Components",link:"/demo/components",Icon:Xe.a}],m=[{name:"Why Modular?",link:"/demo/features",Icon:oa.a,IconClassName:t.iconFeatures},{name:"Docs",link:"/demo/docs",Icon:_e.a,IconClassName:t.iconDocs},{name:"Supporters",link:"/demo/supporters",Icon:na.a,IconClassName:t.iconSupporters},{name:"Discuss",link:"/demo/discuss",Icon:aa.a,IconClassName:t.iconDiscuss}];return r.a.createElement("div",null,r.a.createElement(ie.a,{className:t.navList,disablePadding:!0},!a&&r.a.createElement(Te.a,{disableSticky:!0,className:t.navListHeader},"Applications"),r.a.createElement(Sa,{isCollapsed:a,items:n})),r.a.createElement(ie.a,{className:t.navList,disablePadding:!0},!a&&r.a.createElement(Te.a,{disableSticky:!0,className:t.navListHeader},"Basic Functionality"),r.a.createElement(Sa,{isCollapsed:a,items:c})),r.a.createElement(ie.a,{className:t.navList,disablePadding:!0},!a&&r.a.createElement(Te.a,{inset:!0,disableSticky:!0},"UI & Utils"),r.a.createElement(Sa,{isCollapsed:a,items:s})),r.a.createElement(ie.a,{className:t.navList,disablePadding:!0},!a&&r.a.createElement(Te.a,{disableSticky:!0,className:t.navListHeader},"Misc"),r.a.createElement(Sa,{isCollapsed:a,items:m})))},Ma=Object(S.a)(function(e){return{sidebar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",color:e.sidebar.color,background:e.sidebar.background,overflowX:"hidden",overflowY:"auto"},sidebarHeader:Object(f.a)({display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",padding:"0 8px"},e.mixins.toolbar),sidebarTitleLink:{textDecoration:"none",color:"inherit",display:"flex"},logo:{color:e.palette.primary.main},title:function(e){return{position:"relative",overflow:"visible",marginLeft:"5px",display:e.isDesktop&&e.isSidebarCollapsedDesktop?"none":"block"}},name:{},tagline:{fontSize:8,fontWeight:"bold",position:"absolute",top:"100%",marginTop:-5,background:e.palette.primary.main,color:"#fff",borderRadius:2,padding:"1px 3px",right:0}}}),Da=function(e){var a=e.isDesktop,t=e.isSidebarCollapsedDesktop,n=Ma(e);return r.a.createElement("aside",{className:n.sidebar},r.a.createElement("div",{className:n.sidebarHeader},r.a.createElement(s.c,{to:"/",className:n.sidebarTitleLink},r.a.createElement(ze,{size:30,className:n.logo}),r.a.createElement(de.a,{component:"h2",variant:"h5",color:"inherit",noWrap:!0,className:n.title},r.a.createElement("span",{className:n.name},"Material Admin"),r.a.createElement("span",{className:n.tagline},"ReactJS + MaterialUI")))),r.a.createElement(xa,{isCollapsed:a&&t}))},Aa=t(254),za=Object(S.a)(function(e){return{footer:{display:"flex",background:"#fff",padding:"0.5rem 1rem",justifyContent:"space-between"}}}),La=function(){var e=za();return r.a.createElement("footer",{className:e.footer},r.a.createElement(de.a,{variant:"body2",color:"textSecondary",align:"left"},"Find me on: ",r.a.createElement(Aa.a,{color:"primary",href:"https://github.com/modularcoder"},"GitHub")," | ",r.a.createElement(Aa.a,{color:"primary",href:"https://twitter.com/modularcoder"},"Twitter")," | ",r.a.createElement(Aa.a,{color:"primary",href:"https://www.linkedin.com/in/modularcoder/"},"LinkedIn")),r.a.createElement(de.a,{variant:"body2",color:"textSecondary",align:"right"},"Built with ",r.a.createElement(Aa.a,{color:"primary",href:"https://material-ui.com/"},"Material-UI")," by ",r.a.createElement(Aa.a,{color:"primary",href:"https://twitter.com/modularcoder"},"Gevorg Harutyunyan")))},Ta=t(256),Pa=t(255),Ba=Object(S.a)(function(e){return{container:{flex:1,paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}),Ra=function(e){var a=e.children,t=Ba();return r.a.createElement(Pa.a,{maxWidth:"lg",className:t.container},a)},Wa=Object(S.a)(function(e){return Object(Le.a)({container:{marginBottom:"1.5rem"},titleContainer:{},actionsContainer:{display:"flex",justifyContent:"flex-end"}})}),Ha=function(e){var a=Wa(),t=e.classes||{},n=e.title?r.a.createElement(de.a,{variant:"h3",component:"h1"},e.title):null,o=e.titleComponent,i=e.actions,l=e.actionsComponent;return r.a.createElement(Ta.a,{container:!0,spacing:3,className:Object(O.a)(a.container,t.container)},r.a.createElement(Ta.a,{item:!0,xs:!0,alignItems:"center",container:!0,className:Object(O.a)(a.titleContainer,t.titleContainer)},n&&n,o&&r.a.createElement(o,null)),r.a.createElement(Ta.a,{item:!0,xs:!0,alignItems:"center",container:!0,className:Object(O.a)(a.actionsContainer,t.titleContainer)},i&&i,l&&r.a.createElement(l,null)))},Ga=t(128),Fa=t.n(Ga),Ja=t(127),qa=t.n(Ja),Ua=t(126),Ya=t.n(Ua),Va=Object(S.a)(function(e){return{iconNew:{marginRight:5}}}),Za=function(){var e=Va();return r.a.createElement("div",null,r.a.createElement(P.a,{title:"Date Range"},r.a.createElement(B.a,null,"5 Aug 2019 - 12 Aug 2019 ",r.a.createElement(ve.a,null))),r.a.createElement(P.a,{title:"Create new"},r.a.createElement(B.a,{color:"secondary"},r.a.createElement(Ya.a,{className:e.iconNew}),"New")),r.a.createElement(P.a,{title:"Filter"},r.a.createElement(B.a,{color:"secondary"},r.a.createElement(qa.a,null))),r.a.createElement(P.a,{title:"More actions"},r.a.createElement(B.a,{color:"secondary"},r.a.createElement(Fa.a,null))))},$a=t(257),Qa=t(258),Xa=t(259),Ka=t(263),_a=t(262),et=t(260),at=t(261),tt=function(e){return r.a.createElement(de.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)};function nt(e,a,t,n,r,o){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:o}}var rt=[nt(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),nt(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),nt(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),nt(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),nt(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)],ot=Object(S.a)(function(e){return{seeMore:{marginTop:e.spacing(3)}}}),it=function(){var e=ot();return r.a.createElement($a.a,null,r.a.createElement(Qa.a,null,r.a.createElement(tt,null,"Recent Orders"),r.a.createElement(Xa.a,{size:"small"},r.a.createElement(et.a,null,r.a.createElement(at.a,null,r.a.createElement(_a.a,null,"Date"),r.a.createElement(_a.a,null,"Name"),r.a.createElement(_a.a,null,"Ship To"),r.a.createElement(_a.a,null,"Payment Method"),r.a.createElement(_a.a,{align:"right"},"Sale Amount"))),r.a.createElement(Ka.a,null,rt.map(function(e){return r.a.createElement(at.a,{key:e.id},r.a.createElement(_a.a,null,e.date),r.a.createElement(_a.a,null,e.name),r.a.createElement(_a.a,null,e.shipTo),r.a.createElement(_a.a,null,e.paymentMethod),r.a.createElement(_a.a,{align:"right"},e.amount))}))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(Aa.a,{color:"primary",href:"javascript:;"},"See more orders"))))},lt=t(80),ct=t.n(lt),st=t(129),mt=t(130),dt=t(52),ut=t(51),pt=t.n(ut),ht={getRandomNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(dt.random)(e,a)},getChartData:function(){for(var e=pt()().startOf("day"),a=pt()(e).subtract(15,"days"),t=[],n={type:"bar",label:"Signups",backgroundColor:"#e8e8e8",data:[]},r={type:"line",label:"Number of orders",backgroundColor:"#1e88e5",borderColor:"#1e88e5",fill:!1,data:[]},o={type:"line",label:"Total orders $",backgroundColor:"#95de3c",borderColor:"#95de3c",fill:!1,data:[],yAxisID:"y-axis-2"},i=pt()(a);i.isSameOrBefore(e);i.add(1,"day")){t.push(i.format("MM/DD/YYYY"));var l=Object(dt.random)(10,150),c=Object(dt.random)(0,25),s=Object(dt.random)(10,315);n.data.push(l),r.data.push(c),o.data.push(s)}return{labels:t,datasets:[o,r,n]}},getChartOptions:function(){return{title:{text:"Chart.js Combo Time Scale"},scales:{xAxes:[{type:"time",display:!0,time:{parser:"MM/DD/YYYY"}}],yAxes:[{type:"linear",display:!0,position:"left",id:"y-axis-1"},{type:"linear",display:!0,position:"right",id:"y-axis-2",gridLines:{drawOnChartArea:!1},ticks:{callback:function(e,a,t){return"$"+e}}}]},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}},getChartConfiguration:function(){var e={type:"bar",options:this.getChartOptions(),data:this.getChartData()};return new Promise(function(a){return setTimeout(function(){return a(e)},300)})}},bt=Object(S.a)(function(e){return{content:{},chart:{width:"100%",height:"200px"}}}),ft=function(){var e=Object(n.useRef)(null),a=bt();return Object(n.useEffect)(function(){function a(){return(a=Object(st.a)(ct.a.mark(function a(t){var n;return ct.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,ht.getChartConfiguration();case 4:n=a.sent,new mt.Chart(t,n);case 6:case"end":return a.stop()}},a)}))).apply(this,arguments)}null!==e.current&&function(e){a.apply(this,arguments)}(e.current)},[e]),r.a.createElement($a.a,null,r.a.createElement(Qa.a,{className:a.content},"Order History",r.a.createElement("canvas",{ref:e,className:a.chart})))};function gt(){return r.a.createElement(Ra,null,r.a.createElement(Ha,{title:"Sales Dashboard",actionsComponent:Za}),r.a.createElement(Ta.a,{container:!0,spacing:3},r.a.createElement(Ta.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(ft,null)),r.a.createElement(Ta.a,{item:!0,xs:12},r.a.createElement(it,null))))}var Et=function(e){var a=e.match;return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"".concat(a.url,"/dashboard"),component:gt})))},vt=function(){return r.a.createElement("div",null,"Content")},kt=function(){return r.a.createElement("div",null,"Admin")},Ct=function(){return r.a.createElement("div",null,"Profile")},yt=function(){return r.a.createElement("div",null,"Account")},wt=function(){return r.a.createElement(Ra,null,"Page Not Found!")},Nt=function(){return r.a.createElement("div",null,"Demo")};function Ot(){var e=It(),a=Object(I.a)(),t=Object(j.a)(a.breakpoints.up("md")),n=!t,o=r.a.useState(!1),i=Object(N.a)(o,2),l=i[0],c=i[1],s=r.a.useState(!1),d=Object(N.a)(s,2),u=d[0],p=d[1];return r.a.createElement("div",{className:e.dashboardContainer},r.a.createElement("div",{className:Object(O.a)(e.headerContainer,t&&e.headerContainerDesktop,t&&u&&e.headerContainerDesktopDrawerCollapsed)},r.a.createElement(De,{onToggle:function(){n?c(!l):p(!u)}})),r.a.createElement("div",{className:Object(O.a)(e.sidebarContainer,n&&e.sidebarContainerMobile,t&&e.sidebarContainerDesktop,t&&u&&e.sidebarContainerDesktopDrawerCollapsed)},r.a.createElement(M.a,{mdUp:!0,implementation:"css"},r.a.createElement(x.a,{variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:l,onClose:function(){c(!l)},classes:{paper:Object(O.a)(e.drawer,e.drawerMobile)},ModalProps:{keepMounted:!0}},r.a.createElement(Da,{isDesktop:t,isMobile:n,isSidebarCollapsedDesktop:u,isSidebarOpenMobile:l}))),r.a.createElement(M.a,{smDown:!0,implementation:"css"},r.a.createElement(x.a,{classes:{paper:Object(O.a)(e.drawer,e.drawerDesktop,u&&e.drawerDesktopCollapsed)},variant:"permanent"},r.a.createElement(Da,{isDesktop:t,isMobile:n,isSidebarCollapsedDesktop:u,isSidebarOpenMobile:l})))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.headerSpacer}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,{to:"/sales/dashboard"})}}),r.a.createElement(m.b,{path:"/sales",component:Et}),r.a.createElement(m.b,{path:"/content",component:vt}),r.a.createElement(m.b,{path:"/admin",component:kt}),r.a.createElement(m.b,{path:"/profile",component:Ct}),r.a.createElement(m.b,{path:"/account",component:yt}),r.a.createElement(m.b,{path:"/demo",component:Nt}),r.a.createElement(m.b,{component:wt})),r.a.createElement(La,null)))}var It=Object(S.a)(function(e){var a;return{dashboardContainer:{display:"flex",background:"#f5f5f5"},headerContainer:{top:0,left:0,right:0,position:"absolute",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},headerContainerDesktop:{left:"auto",width:"calc(100% - ".concat(e.sidebar.width,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerContainerDesktopDrawerCollapsed:{width:"calc(100% - ".concat(e.sidebar.widthCollapsed,"px)")},sidebarContainer:(a={position:"relative"},Object(w.a)(a,e.breakpoints.up("md"),{width:e.sidebar.width,flexShrink:0}),Object(w.a)(a,"transition",e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})),a),sidebarContainerMobile:{width:0},sidebarContainerDesktop:{width:e.sidebar.width},sidebarContainerDesktopDrawerCollapsed:Object(w.a)({},e.breakpoints.up("md"),{width:e.sidebar.widthCollapsed}),drawer:{},drawerMobile:{width:e.sidebar.width},drawerDesktop:{width:"100%",position:"absolute"},drawerDesktopCollapsed:{overflowX:"hidden"},headerSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",flexDirection:"column",display:"flex"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}),St=function(e){return r.a.createElement(Ot,null)},jt="history"===u.navigationType?s.a:s.b;b.init({useDemoToken:!0});var xt=function(e){var a=e.component,t=Object(l.a)(e,["component"]);return a?r.a.createElement(m.b,Object.assign({},t,{render:function(e){return b.isAuthenticated()?r.a.createElement(a,e):r.a.createElement(m.a,{to:{pathname:"/auth/login"}})}})):r.a.createElement(m.b,t)},Mt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null),r.a.createElement(c.a,{theme:C},r.a.createElement(jt,null,r.a.createElement(m.b,{path:"/auth",component:y}),r.a.createElement(xt,{path:"/",component:St}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Mt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[147,1,2]]]);
//# sourceMappingURL=main.4bd67662.chunk.js.map