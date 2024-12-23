import{R as j,r,j as e,L as g,A as b,F as k}from"./index-BTiCnd9Y.js";import{L as I,D as M,H as R}from"./Header-Dq3rzI_l.js";import{G as _,U as H,a as O,b as Z}from"./FirebaseFunctions-DcLi1uG_.js";import"./logo-DKVccEgK.js";const G=j.createContext({}),D=!0;function z({baseColor:t,highlightColor:n,width:s,height:a,borderRadius:l,circle:i,direction:m,duration:f,enableAnimation:d=D,customHighlightBackground:o}){const c={};return m==="rtl"&&(c["--animation-direction"]="reverse"),typeof f=="number"&&(c["--animation-duration"]=`${f}s`),d||(c["--pseudo-element-display"]="none"),(typeof s=="string"||typeof s=="number")&&(c.width=s),(typeof a=="string"||typeof a=="number")&&(c.height=a),(typeof l=="string"||typeof l=="number")&&(c.borderRadius=l),i&&(c.borderRadius="50%"),typeof t<"u"&&(c["--base-color"]=t),typeof n<"u"&&(c["--highlight-color"]=n),typeof o=="string"&&(c["--custom-highlight-background"]=o),c}function P({count:t=1,wrapper:n,className:s,containerClassName:a,containerTestId:l,circle:i=!1,style:m,...f}){var d,o,c;const p=j.useContext(G),w={...f};for(const[x,h]of Object.entries(f))typeof h>"u"&&delete w[x];const u={...p,...w,circle:i},y={...m,...z(u)};let S="react-loading-skeleton";s&&(S+=` ${s}`);const T=(d=u.inline)!==null&&d!==void 0?d:!1,v=[],N=Math.ceil(t);for(let x=0;x<N;x++){let h=y;if(N>t&&x===N-1){const C=(o=h.width)!==null&&o!==void 0?o:"100%",F=t%1,E=typeof C=="number"?C*F:`calc(${C} * ${F})`;h={...h,width:E}}const $=j.createElement("span",{className:S,style:h,key:x},"‌");T?v.push($):v.push(j.createElement(j.Fragment,{key:x},$,j.createElement("br",null)))}return j.createElement("span",{className:a,"data-testid":l,"aria-live":"polite","aria-busy":(c=u.enableAnimation)!==null&&c!==void 0?c:D},n?v.map((x,h)=>j.createElement(n,{key:h},x)):v)}function V(t){const[n,s]=r.useState(null);return r.useEffect(()=>{async function a(){if(!(t!=null&&t.userId)||!(t!=null&&t.following)){s(null);return}const l=await _(t==null?void 0:t.userId,t==null?void 0:t.following);s(l)}a()},[t==null?void 0:t.userId,t==null?void 0:t.following]),{PictureFiles:n}}function W({Name:t}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-2 bg-white justify-start flex w-full py-4",children:e.jsxs("div",{className:"bg-white pl-4 text-lg flex gap-3",children:[e.jsxs(g,{to:`p/${t}`,children:[" ",e.jsx("img",{className:"rounded-full w-8 h-8",src:`/Instgram_Full_Clone//images/avatars/${t}.jpg`})]}),e.jsx(g,{to:`p/${t}`,children:t}),e.jsx("h1",{})]})})})}function B({src:t,ClickLikeTrigger:n}){return e.jsxs("div",{className:"bg-white justify-center flex",children:[" ",e.jsx("img",{onDoubleClick:n,className:"w-[505px]",src:t,alt:""})]})}function q({DocID:t,likes:n,Isliked:s,ClickLikeTrigger:a,SetToggler:l,handleRef:i}){return r.useEffect(()=>{l(s)},[s]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex w-full bg-white px-2",children:e.jsxs("div",{className:"flex  items-center py-[1rem]  gap-2 ",children:[e.jsx("div",{className:"bg-re",children:e.jsx("svg",{onClick:a,xmlns:"http://www.w3.org/2000/svg",fill:`${s?"#FF3040":"none"}`,viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-7 transition-all duration-500 ease-in-out ",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})})}),e.jsx(g,{children:e.jsx("div",{children:e.jsx("svg",{onClick:i,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-7",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})})})})]})}),e.jsx("div",{className:"w-full bg-white",children:e.jsx("p",{className:"lg:pl-4 lg:mb-1 sm:pl-4",children:n===1?`${n} like`:n===0?"":`${n} likes`})})]})}function A({DocID:t,SetComments:n,comments:s,FocusComment:a}){const{UserDetail:l}=r.useContext(b),{user:i}=I(l==null?void 0:l.uid),m=i==null?void 0:i.username,{firebase:f,fieldValue:d}=r.useContext(k),[o,c]=r.useState(""),p=o.trim().length===0;function w(u){u.preventDefault();const y={displayName:m,comment:o};n([...s,y]),c(""),f.firestore().collection("photos").doc(t).update({comments:d.arrayUnion(y)})}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full",children:e.jsxs("form",{className:"mt-5 px-4  pb-5 flex gap-4 w-full  ",action:"post",onSubmit:u=>o.length<=0?u.preventDefault():w(u),children:[e.jsx("input",{className:"text-[15px] py-2 flex items-center bg-white w-full ml-2 AddComment-pl pl-4 text-black font-medium ",type:"text",placeholder:"Add a comment...",onChange:u=>c(u.target.value),value:o,ref:a}),e.jsx("button",{className:`font-bold  flex  transition-opacity duration-700 ${p?"opacity-0":"opacity-100"}  text-[#35aaf8]`,type:"button",onClick:u=>{o.trim().length>0?w(u):console.log("empty comments not permitted")},children:"post"})]})})})}function J({AllComments:t,TimePosted:n,DocID:s,FocusComment:a}){const[l,i]=r.useState(t),[m,f]=r.useState(3);function d(){f(m+8)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full bg-white",children:[e.jsx("div",{className:"pl-4",children:l.slice(0,m).map((o,c)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("p",{children:`${o.displayName}:`}),e.jsx("p",{className:"font-normal",children:o.comment})]},`${o.displayName}-${o.comment}`))}),l.length>=3&&m<l.length&&e.jsx("div",{className:"pl-4",children:e.jsx("button",{onClick:d,children:`view all ${l.length} comments`})}),e.jsx(A,{DocID:s,SetComments:i,comments:l,FocusComment:a})]})})}function K({Captions:t,Name:n}){return console.log(t),e.jsxs("div",{className:"lg:w-full bg-white lg:pl-4 pb-2 flex lg:gap-2 sm:pl-4 sm:gap-2 ",children:[e.jsx("div",{children:n}),e.jsx("div",{className:"font-serif font-extralight",children:t})]})}function Q({AllPictureFiles:t}){const n=r.useRef(null),s=()=>{n.current.focus()},{UserDetail:a}=r.useContext(b),{firebase:l,fieldValue:i}=r.useContext(k),[m,f]=r.useState(t.likes.length),[d,o]=r.useState(t.IsLiked),c=async()=>{o(p=>!p),await l.firestore().collection("photos").doc(t.docId).update({likes:d?i.arrayRemove(a.uid):i.arrayUnion(a.uid)}),f(p=>d?p-1:p+1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:" lg:flex flex-col lg:flex-wrap lg:items-center font-bold lg:mb-4 sm:ml-8 ",children:[e.jsx(W,{Name:t.username}),e.jsx(B,{src:`/Instgram_Full_Clone/${t.imageSrc}`,DocID:t.docId,likes:m,Isliked:d,ClickLikeTrigger:c}),e.jsx(q,{DocID:t.docId,likes:m,Isliked:d,handleRef:s,src:t.imageSrc,ClickLikeTrigger:c,SetToggler:o}),e.jsx(K,{Captions:t.caption,Name:t.username}),e.jsx(J,{AllComments:t.comments,TimePosted:t.dateCreated,DocID:t.docId,FocusComment:n})]})})}function X(){const{UserDetail:t}=r.useContext(b),{user:n}=I(t==null?void 0:t.uid),{PictureFiles:s}=V(n);return console.log("This are the pictureFIles",s),e.jsx(e.Fragment,{children:e.jsx("div",{className:" lg:flex lg:flex-col lg:flex-wrap lg:items-end pr-[5rem] container col-span-2 mt-5   ",children:(n==null?void 0:n.following)==0?e.jsx("div",{children:"Please start following users to see your timeline"}):s?s.map((a,l)=>e.jsx(Q,{AllPictureFiles:a},`This is the key ${a.docId}`)):null})})}function Y({TargetDocId:t,TargetUsername:n,targetId:s,MyUserId:a,MyDocId:l,index:i}){const[m,f]=r.useState(!1);async function d(){f(!0),await H(s,l,!1),await O(t,a,!1)}return m?null:e.jsx(e.Fragment,{children:e.jsxs("div",{className:" flex flex-wrap gap-1 justify-between ",children:[e.jsxs("div",{className:"flex gap-3 flex-wrap items-center ",children:[e.jsx(g,{to:`/p/${n}`,children:e.jsx("img",{className:"h-[34px] rounded-full w-8 h-8",src:`/Instgram_Full_Clone/images/avatars/${n}.jpg`,alt:"",onError:o=>o.target.src=M})}),e.jsx(g,{to:`/p/${n}`,children:e.jsx("h1",{className:"",children:n})})]}),e.jsx("div",{className:" flex flex-wrap items-center   min-w-[67%]",children:e.jsx("button",{type:"button",onClick:d,className:"text-[#3072ff] font-bold hover:text-[#0b006a] transition duration-200",children:"Follow"})})]})})}function L({userid:t,following:n,docid:s}){const[a,l]=r.useState(null);return r.useEffect(()=>{t||l(null)},[t]),r.useEffect(()=>{async function i(){let m;t&&(m=await Z(t,n),l(m))}i()},[t]),t?a?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col w-[100%] mt-5",children:[e.jsx("div",{className:"flex items-center align-items  mb-2 ",children:a.length==0?null:e.jsx("h1",{className:"font-medium",children:"Suggestions for you"})}),e.jsx("div",{className:"  mt-4 flex flex-col gap-5",children:a.map(i=>e.jsx(Y,{TargetDocId:i.docId,TargetUsername:i.username,following:i.following,targetId:i.userId,MyUserId:t,MyDocId:s},i.docId))})]})}):e.jsx("div",{className:"flex justify-end mt-9 pr-[28vh]",children:e.jsx("div",{className:"min-w-[25%] ",children:e.jsx(P,{count:1,height:190})})}):null}function U(){r.useContext(k);const{UserDetail:t}=r.useContext(b),{user:n}=I(t==null?void 0:t.uid);return console.log("IndexUser",n),e.jsx(e.Fragment,{children:e.jsx(L,{userid:n==null?void 0:n.userId,following:n==null?void 0:n.following,docid:n==null?void 0:n.docId})})}function le(){return e.jsxs("div",{children:[e.jsx(R,{}),e.jsxs("div",{className:"grid grid-cols-3 gap-4  ",children:[e.jsx(X,{className:""}),e.jsx(U,{className:""})]})]})}export{le as default};
