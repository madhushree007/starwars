(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{47:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),i=a(15),s=a.n(i),l=a(5),j=(a(47),a(71)),o=a(73),d=a(14),p=a(12),b=a(21),O=a.n(b),h=a(33),u=a(22),m=a.n(u),x="SET_LOADING",f="SET_PLAYER_CARD_PEOPLE",y="SET_PLAYER_CARD_STARSHIPS",v="SET_PLAYER_CARD_PLANETS",C="SET_COMPUTER_CARD_PEOPLE",S="SET_COMPUTER_CARD_STARSHIPS",g="SET_COMPUTER_CARD_PLANETS",P="SET_FLIPPED",E="SET_GAME_STATE",_="SET_PLAYER_SCORE",T="SET_COMPUTER_SCORE",w="USER_LOGIN",F="USER_LOGOUT",I="SET_PLAY_OPTION",R="https://swapi.dev/api/";function N(e){return{type:x,loading:e}}function A(e){return{type:P,isFlipped:e}}function L(e){return{type:E,playGame:e}}function D(){return{type:_}}function M(){return{type:T}}function k(e){return{type:I,playOption:e}}var G=function(){var e=Object(l.c)((function(e){return e.playOption})),t=Object(l.b)();return Object(r.jsx)(p.a,{children:Object(r.jsx)(d.a,{children:Object(r.jsxs)("h5",{children:[Object(r.jsxs)(o.a,{variant:"people"===e?"primary":"light",onClick:function(){return t(k("people"))},children:["People ",Object(r.jsx)(j.a,{pill:!0,variant:"light",children:"(mass)"})]}),Object(r.jsxs)(o.a,{variant:"planets"===e?"primary":"light",onClick:function(){return t(k("planets"))},children:["Planets ",Object(r.jsx)(j.a,{pill:!0,variant:"light",children:"(diameter)"})]}),Object(r.jsxs)(o.a,{variant:"starships"===e?"primary":"light",onClick:function(){return t(k("starships"))},children:["Starships ",Object(r.jsx)(j.a,{pill:!0,variant:"light",children:"(crew)"})]})]})})})},B=a(8),U=function(){var e=Object(l.b)();return Object(r.jsx)("div",{style:{paddingTop:"20px"},children:Object(r.jsx)(B.a,{bg:"info",text:"white",className:"text-center",children:Object(r.jsxs)(B.a.Body,{children:[Object(r.jsx)("h4",{children:"Isn't it interesting? Let's play again!"}),Object(r.jsx)(o.a,{"aria-label":"play-more",variant:"warning",style:{width:"10rem"},onClick:function(){e(A(!1)),e(L(!0))},children:"Play Again"})]})})})},Y=a(72),W=a(11),z=a.n(W);function H(e){var t=e.info,a=e.isCardFlipped;return Object(r.jsxs)(z.a,{isFlipped:a,flipDirection:"horizontal",children:[Object(r.jsx)("div",{children:Object(r.jsx)(B.a,{border:"info",bg:"info",style:{height:"16rem"}})}),Object(r.jsx)("div",{children:Object(r.jsxs)(B.a,{border:"info",style:{height:"16rem"},children:[Object(r.jsx)(B.a.Title,{}),Object(r.jsx)(B.a.Body,{children:Object(r.jsxs)(Y.a,{variant:"flush",children:[Object(r.jsxs)(Y.a.Item,{children:["Name: ",t&&t.name]}),Object(r.jsxs)(Y.a.Item,{children:["Height: ",t&&t.height]}),Object(r.jsxs)(Y.a.Item,{children:["Gender: ",t&&t.gender]}),Object(r.jsxs)(Y.a.Item,{variant:"info",children:["Mass: ",t&&t.mass]})]})})]})})]})}function J(e){var t=e.info,a=e.isCardFlipped;return Object(r.jsxs)(z.a,{isFlipped:a,flipDirection:"horizontal",children:[Object(r.jsx)("div",{children:Object(r.jsx)(B.a,{border:"info",bg:"info",style:{height:"16rem"}})}),Object(r.jsx)("div",{children:Object(r.jsxs)(B.a,{border:"info",style:{height:"16rem"},children:[Object(r.jsx)(B.a.Title,{}),Object(r.jsx)(B.a.Body,{children:Object(r.jsxs)(Y.a,{variant:"flush",children:[Object(r.jsxs)(Y.a.Item,{children:["Name: ",t&&t.name]}),Object(r.jsxs)(Y.a.Item,{children:["Rotation Period: ",t&&t.rotation_period]}),Object(r.jsxs)(Y.a.Item,{children:["Orbital: ",t&&t.orbital_period]}),Object(r.jsxs)(Y.a.Item,{variant:"info",children:["Diameter: ",t&&t.diameter]})]})})]})})]})}function q(e){var t=e.info,a=e.isCardFlipped;return Object(r.jsxs)(z.a,{isFlipped:a,flipDirection:"horizontal",children:[Object(r.jsx)("div",{children:Object(r.jsx)(B.a,{border:"info",bg:"info",style:{height:"16rem"}})}),Object(r.jsx)("div",{children:Object(r.jsxs)(B.a,{border:"info",style:{height:"16rem"},children:[Object(r.jsx)(B.a.Title,{}),Object(r.jsx)(B.a.Body,{children:Object(r.jsxs)(Y.a,{variant:"flush",children:[Object(r.jsxs)(Y.a.Item,{children:["Name: ",t&&t.name]}),Object(r.jsxs)(Y.a.Item,{children:["Model: ",t&&t.model]}),Object(r.jsxs)(Y.a.Item,{children:["Cost in credits: ",t&&t.cost_in_credits]}),Object(r.jsxs)(Y.a.Item,{variant:"info",children:["Crew: ",t&&t.crew]})]})})]})})]})}a(67);var K=function(){var e=Object(l.c)((function(e){return e.playerCardPeople})),t=Object(l.c)((function(e){return e.playerCardPlanets})),a=Object(l.c)((function(e){return e.playerCardStarShip})),c=Object(l.c)((function(e){return e.computerCardPeople})),n=Object(l.c)((function(e){return e.computerCardPlanets})),i=Object(l.c)((function(e){return e.computerCardStarShip})),s=Object(l.c)((function(e){return e.isFlipped})),b=Object(l.c)((function(e){return e.playGame})),u=Object(l.c)((function(e){return e.playerScore})),x=Object(l.c)((function(e){return e.computerScore})),P=Object(l.c)((function(e){return e.username})),E=Object(l.c)((function(e){return e.playOption})),_=Object(l.b)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"welcome",children:[Object(r.jsxs)("h2",{children:["Welcome ",P,"!"]}),Object(r.jsx)("h6",{onClick:function(){return _({type:F})},children:"Logout"})]}),Object(r.jsxs)("div",{className:"gameRules",children:[Object(r.jsx)("h4",{children:"Let's play card game with computer."}),Object(r.jsx)("p",{children:"To play the game click on PLAY button and it will randomly fetch the data from The Star Wars API. Whichever's card gets more mass value will get one point. In case of equal mass no one gets points"})]}),Object(r.jsx)(G,{}),Object(r.jsxs)(p.a,{children:[Object(r.jsx)(d.a,{children:Object(r.jsxs)("h5",{children:[P,"'s Score ",Object(r.jsx)(j.a,{variant:"primary",children:u})]})}),Object(r.jsx)(d.a,{children:Object(r.jsxs)("h5",{children:["Computer's Score ",Object(r.jsx)(j.a,{variant:"primary",children:x})]})})]}),Object(r.jsxs)("div",{className:"cardContainer",children:[Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(d.a,{children:["people"===E&&Object(r.jsx)(H,{info:e,isCardFlipped:s}),"planets"===E&&Object(r.jsx)(J,{info:t,isCardFlipped:s}),"starships"===E&&Object(r.jsx)(q,{info:a,isCardFlipped:s})]}),Object(r.jsxs)(d.a,{children:["people"===E&&Object(r.jsx)(H,{info:c,isCardFlipped:s}),"planets"===E&&Object(r.jsx)(J,{info:n,isCardFlipped:s}),"starships"===E&&Object(r.jsx)(q,{info:i,isCardFlipped:s})]})]}),Object(r.jsx)(p.a,{className:"playButton",children:!0===b&&Object(r.jsx)(o.a,{variant:"warning",style:{width:"10rem"},onClick:function(){var e;_(A(!0)),console.log(E),E&&_((e=E,function(){var t=Object(h.a)(O.a.mark((function t(a){var r,c,n,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(N(!0)),t.prev=1,r=Math.floor(15*Math.random())+1,t.next=5,m.a.get("".concat(R).concat(e,"/").concat(r,"/"));case 5:return c=t.sent,"people"===e?a((p=c.data,{type:f,playerCardPeople:p})):"planets"===e?a((d=c.data,{type:v,playerCardPlanets:d})):"starships"===e&&a((o=c.data,{type:y,playerCardStarShip:o})),n=Math.floor(15*Math.random())+1,t.next=10,m.a.get("".concat(R).concat(e,"/").concat(n,"/"));case 10:i=t.sent,"people"===e?a((j=i.data,{type:C,computerCardPeople:j})):"planets"===e?a((l=i.data,{type:g,computerCardPlanets:l})):"starships"===e&&a((s=i.data,{type:S,computerCardStarShip:s})),"people"===e&&c&&i&&(c.data.mass>i.data.mass?a(D()):i.data.mass>c.data.mass&&a(M())),"starships"===e&&c&&i&&(c.data.crew>i.data.crew?a(D()):i.data.crew>c.data.crew&&a(M())),"planets"===e&&c&&i&&(c.data.diameter>i.data.diameter?a(D()):i.data.diameter>c.data.diameter&&a(M())),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.log("Error",t.t0);case 20:a(N(!1));case 21:case"end":return t.stop()}var s,l,j,o,d,p}),t,null,[[1,17]])})));return function(e){return t.apply(this,arguments)}}())),_(L(!1))},children:"Play"})})]}),!1===b&&Object(r.jsx)(U,{})]})},Q=a(35);a(68);function V(){var e=Object(c.useState)(""),t=Object(Q.a)(e,2),a=t[0],n=t[1],i=Object(l.b)();return Object(r.jsx)("div",{className:"login",children:Object(r.jsx)("div",{className:"inner",children:Object(r.jsx)(B.a,{className:"text-center",border:"info",bg:"info",text:"white",children:Object(r.jsxs)(B.a.Body,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("h1",{children:["Welcome ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"to"}),Object(r.jsx)("br",{}),"Card Game"]})}),Object(r.jsxs)("form",{className:"formDiv",onSubmit:function(e){e.preventDefault(),i({type:w,username:a})},children:[Object(r.jsx)("label",{htmlFor:"firstName",children:"Please Enter Your Name"}),Object(r.jsx)("input",{name:"firstName",value:a,onChange:function(e){return n(e.target.value)}}),Object(r.jsx)(o.a,{type:"submit",variant:"warning",style:{width:"14rem"},children:"ENTER"})]})]})})})})}var X=function(){var e=Object(l.c)((function(e){return e.username}));return Object(r.jsx)("div",{className:"container",children:e?Object(r.jsx)(K,{}):Object(r.jsx)(V,{})})},Z=(a(69),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),n(e),i(e)}))}),$=a(13),ee=a(34),te=a(4),ae={loading:!1,isFlipped:!1,playGame:!0,playerScore:0,computerScore:0,playOption:"people"},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(te.a)(Object(te.a)({},e),{},{loading:t.loading});case f:return Object(te.a)(Object(te.a)({},e),{},{playerCardPeople:t.playerCardPeople});case C:return Object(te.a)(Object(te.a)({},e),{},{computerCardPeople:t.computerCardPeople});case y:return Object(te.a)(Object(te.a)({},e),{},{playerCardStarShip:t.playerCardStarShip});case S:return Object(te.a)(Object(te.a)({},e),{},{computerCardStarShip:t.computerCardStarShip});case v:return Object(te.a)(Object(te.a)({},e),{},{playerCardPlanets:t.playerCardPlanets});case g:return Object(te.a)(Object(te.a)({},e),{},{computerCardPlanets:t.computerCardPlanets});case P:return Object(te.a)(Object(te.a)({},e),{},{isFlipped:t.isFlipped});case E:return Object(te.a)(Object(te.a)({},e),{},{playGame:t.playGame});case _:return Object(te.a)(Object(te.a)({},e),{},{playerScore:e.playerScore+1});case T:return Object(te.a)(Object(te.a)({},e),{},{computerScore:e.computerScore+1});case w:return Object(te.a)(Object(te.a)({},e),{},{username:t.username});case F:return Object(te.a)(Object(te.a)({},e),{},{username:""});case I:return Object(te.a)(Object(te.a)({},e),{},{playOption:t.playOption});default:return e}},ce=Object($.c)(re,Object($.a)(ee.a));s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(l.a,{store:ce,children:Object(r.jsx)(X,{})})}),document.getElementById("root")),Z()}},[[70,1,2]]]);
//# sourceMappingURL=main.3dc543c8.chunk.js.map