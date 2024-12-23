import{R as j,r,j as e,L as y,A as g,F as k}from"./index-Bm2Ggpdo.js";import{L as I,D as M,H as R}from"./Header-YkJBkGj4.js";import{G as H,U as O,a as Z,b as G}from"./FirebaseFunctions-p2g6duGG.js";import"./logo-DKVccEgK.js";const _=j.createContext({}),T=!0;function z({baseColor:t,highlightColor:n,width:s,height:i,borderRadius:l,circle:a,direction:m,duration:f,enableAnimation:d=T,customHighlightBackground:o}){const c={};return m==="rtl"&&(c["--animation-direction"]="reverse"),typeof f=="number"&&(c["--animation-duration"]=`${f}s`),d||(c["--pseudo-element-display"]="none"),(typeof s=="string"||typeof s=="number")&&(c.width=s),(typeof i=="string"||typeof i=="number")&&(c.height=i),(typeof l=="string"||typeof l=="number")&&(c.borderRadius=l),a&&(c.borderRadius="50%"),typeof t<"u"&&(c["--base-color"]=t),typeof n<"u"&&(c["--highlight-color"]=n),typeof o=="string"&&(c["--custom-highlight-background"]=o),c}function P({count:t=1,wrapper:n,className:s,containerClassName:i,containerTestId:l,circle:a=!1,style:m,...f}){var d,o,c;const h=j.useContext(_),w={...f};for(const[x,p]of Object.entries(f))typeof p>"u"&&delete w[x];const u={...h,...w,circle:a},v={...m,...z(u)};let S="react-loading-skeleton";s&&(S+=` ${s}`);const E=(d=u.inline)!==null&&d!==void 0?d:!1,b=[],N=Math.ceil(t);for(let x=0;x<N;x++){let p=v;if(N>t&&x===N-1){const C=(o=p.width)!==null&&o!==void 0?o:"100%",D=t%1,F=typeof C=="number"?C*D:`calc(${C} * ${D})`;p={...p,width:F}}const $=j.createElement("span",{className:S,style:p,key:x},"‌");E?b.push($):b.push(j.createElement(j.Fragment,{key:x},$,j.createElement("br",null)))}return j.createElement("span",{className:i,"data-testid":l,"aria-live":"polite","aria-busy":(c=u.enableAnimation)!==null&&c!==void 0?c:T},n?b.map((x,p)=>j.createElement(n,{key:p},x)):b)}function V(t){const[n,s]=r.useState(null);return r.useEffect(()=>{async function i(){if(!(t!=null&&t.userId)||!(t!=null&&t.following)){s(null);return}const l=await H(t==null?void 0:t.userId,t==null?void 0:t.following);s(l)}i()},[t==null?void 0:t.userId,t==null?void 0:t.following]),{PictureFiles:n}}function W({Name:t}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-2 bg-white justify-start flex w-full py-4",children:e.jsxs("div",{className:"bg-white pl-4 text-lg flex gap-3",children:[e.jsxs(y,{to:`p/${t}`,children:[" ",e.jsx("img",{className:"rounded-full w-8 h-8",src:`/images/avatars/${t}.jpg`})]}),e.jsx(y,{to:`p/${t}`,children:t}),e.jsx("h1",{})]})})})}function B({src:t,ClickLikeTrigger:n}){return e.jsxs("div",{className:"bg-white justify-center flex",children:[" ",e.jsx("img",{onDoubleClick:n,className:"w-[505px]",src:t,alt:""})]})}function q({DocID:t,likes:n,Isliked:s,ClickLikeTrigger:i,SetToggler:l,handleRef:a}){return r.useEffect(()=>{l(s)},[s]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex w-full bg-white px-2",children:e.jsxs("div",{className:"flex  items-center py-[1rem]  gap-2 ",children:[e.jsx("div",{className:"bg-re",children:e.jsx("svg",{onClick:i,xmlns:"http://www.w3.org/2000/svg",fill:`${s?"#FF3040":"none"}`,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-7 transition-all duration-500 ease-in-out ",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})})}),e.jsx(y,{children:e.jsx("div",{children:e.jsx("svg",{onClick:a,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-7",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})})})})]})}),e.jsx("div",{className:"w-full bg-white",children:e.jsx("p",{className:"pl-4 mb-1",children:n===1?`${n} like`:n===0?"":`${n} likes`})})]})}function A({DocID:t,SetComments:n,comments:s,FocusComment:i}){const{UserDetail:l}=r.useContext(g),{user:a}=I(l==null?void 0:l.uid),m=a==null?void 0:a.username,{firebase:f,fieldValue:d}=r.useContext(k),[o,c]=r.useState(""),h=o.trim().length===0;function w(u){u.preventDefault();const v={displayName:m,comment:o};n([...s,v]),c(""),f.firestore().collection("photos").doc(t).update({comments:d.arrayUnion(v)})}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full",children:e.jsxs("form",{className:"mt-5 px-4  pb-5 flex gap-4 w-full  ",action:"post",onSubmit:u=>o.length<=0?u.preventDefault():w(u),children:[e.jsx("input",{className:"text-[15px] py-2 flex items-center bg-white w-full ml-2 AddComment-pl pl-4 text-black font-medium ",type:"text",placeholder:"Add a comment...",onChange:u=>c(u.target.value),value:o,ref:i}),e.jsx("button",{className:`font-bold  flex  transition-opacity duration-700 ${h?"opacity-0":"opacity-100"}  text-[#35aaf8]`,type:"button",onClick:u=>{o.trim().length>0?w(u):console.log("empty comments not permitted")},children:"post"})]})})})}function J({AllComments:t,TimePosted:n,DocID:s,FocusComment:i}){const[l,a]=r.useState(t),[m,f]=r.useState(3);function d(){f(m+8)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full bg-white",children:[e.jsx("div",{className:"pl-4",children:l.slice(0,m).map((o,c)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("p",{children:`${o.displayName}:`}),e.jsx("p",{className:"font-normal",children:o.comment})]},`${o.displayName}-${o.comment}`))}),l.length>=3&&m<l.length&&e.jsx("div",{className:"pl-4",children:e.jsx("button",{onClick:d,children:`view all ${l.length} comments`})}),e.jsx(A,{DocID:s,SetComments:a,comments:l,FocusComment:i})]})})}function K({Captions:t,Name:n}){return console.log(t),e.jsxs("div",{className:"w-full bg-white pl-4 pb-2 flex gap-2 ",children:[e.jsx("div",{children:n}),e.jsx("div",{className:"font-serif font-extralight",children:t})]})}function Q({AllPictureFiles:t}){const n=r.useRef(null),s=()=>{n.current.focus()},{UserDetail:i}=r.useContext(g),{firebase:l,fieldValue:a}=r.useContext(k),[m,f]=r.useState(t.likes.length),[d,o]=r.useState(t.IsLiked),c=async()=>{o(h=>!h),await l.firestore().collection("photos").doc(t.docId).update({likes:d?a.arrayRemove(i.uid):a.arrayUnion(i.uid)}),f(h=>d?h-1:h+1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:" lg:flex flex-col lg:flex-wrap lg:items-center font-bold lg:mb-4 sm:ml-8 ",children:[e.jsx(W,{Name:t.username}),e.jsx(B,{src:t.imageSrc,DocID:t.docId,likes:m,Isliked:d,ClickLikeTrigger:c}),e.jsx(q,{DocID:t.docId,likes:m,Isliked:d,handleRef:s,src:t.imageSrc,ClickLikeTrigger:c,SetToggler:o}),e.jsx(K,{Captions:t.caption,Name:t.username}),e.jsx(J,{AllComments:t.comments,TimePosted:t.dateCreated,DocID:t.docId,FocusComment:n})]})})}function X(){const{UserDetail:t}=r.useContext(g),{user:n}=I(t==null?void 0:t.uid),{PictureFiles:s}=V(n);return console.log("This are the pictureFIles",s),e.jsx(e.Fragment,{children:e.jsx("div",{className:" lg:flex lg:flex-col lg:flex-wrap lg:items-end pr-[5rem] container col-span-2 mt-5   ",children:(n==null?void 0:n.following)==0?e.jsx("div",{children:"Please start following users to see your timeline"}):s?s.map((i,l)=>e.jsx(Q,{AllPictureFiles:i},`This is the key ${i.docId}`)):null})})}function Y({TargetDocId:t,TargetUsername:n,targetId:s,MyUserId:i,MyDocId:l,index:a}){const[m,f]=r.useState(!1);async function d(){f(!0),await O(s,l,!1),await Z(t,i,!1)}return m?null:e.jsx(e.Fragment,{children:e.jsxs("div",{className:" flex flex-wrap gap-1 justify-between ",children:[e.jsxs("div",{className:"flex gap-3 flex-wrap items-center ",children:[e.jsx(y,{to:`/p/${n}`,children:e.jsx("img",{className:"h-[34px] rounded-full w-8 h-8",src:`/images/avatars/${n}.jpg`,alt:"",onError:o=>o.target.src=M})}),e.jsx(y,{to:`/p/${n}`,children:e.jsx("h1",{className:"",children:n})})]}),e.jsx("div",{className:" flex flex-wrap items-center   min-w-[67%]",children:e.jsx("button",{type:"button",onClick:d,className:"text-[#3072ff] font-bold hover:text-[#0b006a] transition duration-200",children:"Follow"})})]})})}function L({userid:t,following:n,docid:s}){const[i,l]=r.useState(null);return r.useEffect(()=>{t||l(null)},[t]),r.useEffect(()=>{async function a(){let m;t&&(m=await G(t,n),l(m))}a()},[t]),t?i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col w-[100%] mt-5",children:[e.jsx("div",{className:"flex items-center align-items  mb-2 ",children:i.length==0?null:e.jsx("h1",{className:"font-medium",children:"Suggestions for you"})}),e.jsx("div",{className:"  mt-4 flex flex-col gap-5",children:i.map(a=>e.jsx(Y,{TargetDocId:a.docId,TargetUsername:a.username,following:a.following,targetId:a.userId,MyUserId:t,MyDocId:s},a.docId))})]})}):e.jsx("div",{className:"flex justify-end mt-9 pr-[28vh]",children:e.jsx("div",{className:"min-w-[25%] ",children:e.jsx(P,{count:1,height:190})})}):null}function U(){r.useContext(k);const{UserDetail:t}=r.useContext(g),{user:n}=I(t==null?void 0:t.uid);return console.log("IndexUser",n),e.jsx(e.Fragment,{children:e.jsx(L,{userid:n==null?void 0:n.userId,following:n==null?void 0:n.following,docid:n==null?void 0:n.docId})})}function le(){return e.jsxs("div",{children:[e.jsx(R,{}),e.jsxs("div",{className:"grid grid-cols-3 gap-4  ",children:[e.jsx(X,{className:""}),e.jsx(U,{className:""})]})]})}export{le as default};