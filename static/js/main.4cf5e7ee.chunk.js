(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{21:function(e,t,s){},24:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(15),i=s.n(c),n=(s(21),s(6)),r=s(7),o=s(9),l=s(8),j=s(13),d=s(16),h=s.n(d),b=(s(24),s(25),s(11)),p=s.n(b),m=s(1),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.data?Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#works",children:"Works"})})]})]}):null}}]),s}(a.Component),u=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(p.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9 Zhengyang Wang "}),Object(m.jsx)("li",{children:"Credits to Styleshout"})]})]})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#about",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.phone,c=this.props.data.email;return Object(m.jsx)("section",{id:"about",children:Object(m.jsx)(p.a,{duration:1e3,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:t,alt:"Zhengyang Wang Profile Pic"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:s}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:a}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"mailto:randallzywang@gmail.com",children:c})]})]})})]})]})})})}}]),s}(a.Component),f=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(!this.props.data)return null;this.props.data.projects.map((function(e){var t=e.image.map((function(t){var s="images/portfolio/"+t;return Object(m.jsx)("div",{className:"column",children:Object(m.jsx)("img",{alt:e.title,src:s})})}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"shadow row",children:Object(m.jsx)("a",{href:e.url,children:t})}),Object(m.jsxs)("div",{className:"project-textbox",children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date"})]}),Object(m.jsx)("p",{children:e.description})]})]},e.title)}));return Object(m.jsxs)("section",{id:"works",children:[Object(m.jsx)(p.a,{left:!0,duration:1300,children:Object(m.jsx)("div",{className:"row education",children:Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"My Projects"})})})})}),Object(m.jsx)(p.a,{left:!0,duration:1300,children:Object(m.jsx)("div",{className:"row work",children:Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"shadow row",children:Object(m.jsx)("a",{href:"http://ss.0nut.com/",children:Object(m.jsx)("img",{alt:"Starside",src:"images/portfolio/2.jfif"})})}),Object(m.jsxs)("div",{className:"project-textbox",children:[Object(m.jsx)("h3",{children:"Starside"}),Object(m.jsx)("p",{className:"info",children:"Technical Designer"}),Object(m.jsx)("p",{children:"Starside is a fantasy, action, role playing mobile game. In an apocalyptic world, you will use the power bestowed by fate to save the future of the world in intertwined reincarnations."}),Object(m.jsx)("p",{children:"Libraries and tools: Unity"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://www.bilibili.com/video/BV16f4y1q7do/?spm_id_from=333.337.search-card.all.click&vd_source=4b7824b762efbd95ceed7b0a98b521c4",children:"Game Promotion Video"})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://www.bilibili.com/video/BV1yq4y1T7Dz/?spm_id_from=333.999.0.0&vd_source=4b7824b762efbd95ceed7b0a98b521c4",children:"Gameplay demo"})})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"shadow row",children:Object(m.jsx)("a",{href:"https://www.lokisloop.org/",children:Object(m.jsx)("img",{alt:"The Euphorigen Investigation",src:"images/portfolio/1.jpg"})})}),Object(m.jsxs)("div",{className:"project-textbox",children:[Object(m.jsx)("h3",{children:"The Euphorigen Investigation"}),Object(m.jsx)("p",{className:"info",children:"Developer | Researcher"}),Object(m.jsx)("p",{children:"Explore the depths of misinformation with fun and collaborative games. Players learn to identify misinformation through a series of challenges and stop the spread of misinformation as part of the story. Research project by Center for an Informed Public at University of Washington."}),Object(m.jsx)("p",{children:"Libraries and tools: React.js, Node.js, MongoDB, AWS"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"shadow row",children:Object(m.jsx)("a",{href:"http://pawdy.herokuapp.com/",children:Object(m.jsx)("img",{alt:"Pawdy",src:"images/portfolio/3.jpg"})})}),Object(m.jsxs)("div",{className:"project-textbox",children:[Object(m.jsx)("h3",{children:"Pawdy"}),Object(m.jsx)("p",{className:"info",children:"Lead Developer"}),Object(m.jsx)("p",{children:"Pawdy is a web platform created for student pet owners to find affordable pet sitting services and connect with other pet owners to form an online community. University of Washington class of 2022 information school Capstone Project."}),Object(m.jsx)("p",{children:"Libraries and tools: Node.js, React.js, MongoDB, Heroku"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"shadow row",children:Object(m.jsx)("a",{href:"images/portfolio/SauvOS.pdf",children:Object(m.jsx)("img",{alt:"SauvOS",src:"images/portfolio/5.png"})})}),Object(m.jsxs)("div",{className:"project-textbox",children:[Object(m.jsx)("h3",{children:"SauvOS"}),Object(m.jsx)("p",{className:"info",children:"UI/UX Designer"}),Object(m.jsx)("p",{children:"An innovative mobile operating system prototype designed to promote productivity for young adults. Me and my team prototyped 10+ applications with over 100 wireframes in Figma."})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"shadow row",children:Object(m.jsx)("a",{href:"images/portfolio/esports-infographic.pdf",children:Object(m.jsx)("img",{alt:"Esports Infographic",src:"images/portfolio/4.png"})})}),Object(m.jsxs)("div",{className:"project-textbox",children:[Object(m.jsx)("h3",{children:"Esports Infographic"}),Object(m.jsx)("p",{className:"info",children:"Graphic Design"}),Object(m.jsx)("p",{children:"An infographic capturing the key information and data about the history, development, and influence of Esports. Made with Adobe Illustrator."})]})]})]})})})]})}}]),s}(a.Component),v=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{data:this.state.resumeData.main}),Object(m.jsx)(x,{data:this.state.resumeData.main}),Object(m.jsx)(f,{data:this.state.resumeData.resume}),Object(m.jsx)(u,{data:this.state.resumeData.main})]})}}]),s}(a.Component),g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};i.a.render(Object(m.jsx)(v,{}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.4cf5e7ee.chunk.js.map