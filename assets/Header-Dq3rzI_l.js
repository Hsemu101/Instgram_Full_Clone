import{r as a,u as o,F as c,A as x,j as s,L as n,D as u,b as d,S as m}from"./index-BTiCnd9Y.js";import{e as f}from"./FirebaseFunctions-DcLi1uG_.js";import{L as h}from"./logo-DKVccEgK.js";function p(r){const[t,e]=a.useState(null);return a.useEffect(()=>{if(!r){e(null);return}async function l(){try{const[i]=await f(r);e(i||{})}catch(i){console.error("Error fetching user info:",i),e(null)}}l()},[r]),{user:t}}const g="/Instgram_Full_Clone/assets/default-BZ1KqjQz.png";a.createContext(null);function w(){o();const{firebase:r}=a.useContext(c),{UserDetail:t}=a.useContext(x),{user:e}=p(t==null?void 0:t.uid);return console.log("user",e||"Fetching..."),s.jsx(s.Fragment,{children:s.jsxs("div",{className:" mt-7 flex flex-wrap  w-full items-center justify-between px-11 ",children:[s.jsx("div",{children:s.jsx(n,{to:u,children:s.jsx("img",{className:" ",src:h,alt:""})})}),t?s.jsx("div",{className:"  flex items-center space-x-4  min-w-[31%] flex-wrap ",children:s.jsxs("div",{className:"flex gap-5 items-center flex-wrap",children:[s.jsx(n,{to:`/p/${e==null?void 0:e.username}`,children:s.jsx("img",{className:"rounded-full w-8 h-8 ",src:`/images/avatars${e==null?void 0:e.username}.jpg`,alt:"",onError:l=>l.target.src=g})}),s.jsx(n,{to:`/p/${e==null?void 0:e.username}`,children:s.jsx("h1",{className:"w-full ",children:e==null?void 0:e.username})}),s.jsx(n,{to:void 0,onClick:()=>r.auth().signOut(),className:"  bg-[#2563eb] px-3 py-1 rounded-full text-white ",children:"Logout"})]})}):s.jsx("div",{className:"flex items-center min-h-[3rem] text-[19px]",children:s.jsxs("div",{className:"flex gap-4 ",children:[s.jsx(n,{to:d,className:" hover:bg-blue-800 hover:text-white transition duration-500 Font-[black] bg-[#2563eb] px-4 rounded-full text-white py-2 items-center flex-row  ",children:"Login"}),s.jsxs(n,{to:m,className:" hover:text-black transition duration-500 Font-[black] font-bold text-[#2563eb] px-2 rounded-full  pt-[5px]",children:[" ","Signup"]})]})})]})})}export{g as D,w as H,p as L};