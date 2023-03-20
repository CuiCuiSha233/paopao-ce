import{c as me,a as _e,f as j,e as q,d as T,u as ve,x as ie,bP as Te,y as L,A as Ee,h as z,ab as ee,n as Se,J as ke,q as Oe,t as Ce,L as we,K as W,B as Ue,N as Ne,bH as je,aR as Me,b as be,bQ as Ve,r as k,p as qe,aT as Le,aV as He,aN as Ke,aW as We,w as xe,W as u,Y as g,Z as C,bR as Je,ai as te,a7 as $,a4 as a,a5 as l,a9 as E,bS as Qe,_ as Ye,$ as le,am as he,aa as D,a6 as R,a3 as e,bT as Ze,af as ue,al as Be,an as Ge,ac as ne,a8 as J,bU as Xe,ae as fe,a0 as et,a2 as ge,bV as tt,ag as st,bW as ot,bX as nt,bY as at,bZ as it,b_ as lt,b$ as ut,c0 as rt,c1 as ct,c2 as pt,c3 as dt,ao as _t,c4 as mt,bA as vt,ah as ht,S as ft,c5 as gt,c6 as yt,aj as kt,c7 as Ct}from"./index.083ec6de.js";import{_ as wt}from"./InputGroup.7c57c7d0.js";import{f as ae}from"./formatTime.e07969bb.js";import{p as ye,a as Fe,H as bt,C as xt,B as $t,_ as Et,b as Bt,c as Ft}from"./content.91fb0c4f.js";import{_ as Pe}from"./Thing.2da2b8ce.js";import{_ as Pt}from"./post-skeleton.57669f76.js";import{l as Dt,I as At,_ as Rt,V as X}from"./IEnum.51ecb9f5.js";import{_ as zt,a as It,b as Tt,c as St}from"./Upload.c8083f9b.js";import{M as Ot}from"./MoreHorizFilled.b64cd0f3.js";import{_ as Ut}from"./main-nav.5bb9b19f.js";import{_ as Nt}from"./List.79cdd3a1.js";import{a as jt,_ as Mt}from"./Skeleton.ae0af7f1.js";var Vt=me("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[_e("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[_e("no-title",`
 display: flex;
 align-items: center;
 `)]),j("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),q("title-position-left",[j("line",[q("left",{width:"28px"})])]),q("title-position-right",[j("line",[q("right",{width:"28px"})])]),q("dashed",[j("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),q("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),j("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),_e("dashed",[j("line",{backgroundColor:"var(--n-color)"})]),q("dashed",[j("line",{borderColor:"var(--n-color)"})]),q("vertical",{backgroundColor:"var(--n-color)"})]);const qt=Object.assign(Object.assign({},ie.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var Lt=T({name:"Divider",props:qt,setup(c){const{mergedClsPrefixRef:d,inlineThemeDisabled:n}=ve(c),i=ie("Divider","-divider",Vt,Te,c,d),f=L(()=>{const{common:{cubicBezierEaseInOut:r},self:{color:_,textColor:o,fontWeight:w}}=i.value;return{"--n-bezier":r,"--n-color":_,"--n-text-color":o,"--n-font-weight":w}}),p=n?Ee("divider",void 0,f,c):void 0;return{mergedClsPrefix:d,cssVars:n?void 0:f,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){var c;const{$slots:d,titlePlacement:n,vertical:i,dashed:f,cssVars:p,mergedClsPrefix:r}=this;return(c=this.onRender)===null||c===void 0||c.call(this),z("div",{role:"separator",class:[`${r}-divider`,this.themeClass,{[`${r}-divider--vertical`]:i,[`${r}-divider--no-title`]:!d.default,[`${r}-divider--dashed`]:f,[`${r}-divider--title-position-${n}`]:d.default&&n}],style:p},i?null:z("div",{class:`${r}-divider__line ${r}-divider__line--left`}),!i&&d.default?z(ee,null,z("div",{class:`${r}-divider__title`},this.$slots),z("div",{class:`${r}-divider__line ${r}-divider__line--right`})):null)}});const De=Se("n-popconfirm"),Ae={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},$e=Me(Ae);var Ht=T({name:"NPopconfirmPanel",props:Ae,setup(c){const{localeRef:d}=ke("Popconfirm"),{inlineThemeDisabled:n}=ve(),{mergedClsPrefixRef:i,mergedThemeRef:f,props:p}=Oe(De),r=L(()=>{const{common:{cubicBezierEaseInOut:o},self:{fontSize:w,iconSize:h,iconColor:v}}=f.value;return{"--n-bezier":o,"--n-font-size":w,"--n-icon-size":h,"--n-icon-color":v}}),_=n?Ee("popconfirm-panel",void 0,r,p):void 0;return Object.assign(Object.assign({},ke("Popconfirm")),{mergedClsPrefix:i,cssVars:n?void 0:r,localizedPositiveText:L(()=>c.positiveText||d.value.positiveText),localizedNegativeText:L(()=>c.negativeText||d.value.negativeText),positiveButtonProps:Ce(p,"positiveButtonProps"),negativeButtonProps:Ce(p,"negativeButtonProps"),handlePositiveClick(o){c.onPositiveClick(o)},handleNegativeClick(o){c.onNegativeClick(o)},themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender})},render(){var c;const{mergedClsPrefix:d,showIcon:n,$slots:i}=this,f=we(i.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&z(W,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&z(W,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(c=this.onRender)===null||c===void 0||c.call(this),z("div",{class:[`${d}-popconfirm__panel`,this.themeClass],style:this.cssVars},Ue(i.default,p=>n||p?z("div",{class:`${d}-popconfirm__body`},n?z("div",{class:`${d}-popconfirm__icon`},we(i.icon,()=>[z(Ne,{clsPrefix:d},{default:()=>z(je,null)})])):null,p):null),f?z("div",{class:[`${d}-popconfirm__action`]},f):null)}}),Kt=me("popconfirm",[j("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[j("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),j("action",`
 display: flex;
 justify-content: flex-end;
 `,[be("&:not(:first-child)","margin-top: 8px"),me("button",[be("&:not(:last-child)","margin-right: 8px;")])])]);const Wt=Object.assign(Object.assign(Object.assign({},ie.props),We),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function});var Re=T({name:"Popconfirm",props:Wt,__popover__:!0,setup(c){const{mergedClsPrefixRef:d}=ve(),n=ie("Popconfirm","-popconfirm",Kt,Ve,c,d),i=k(null);function f(_){const{onPositiveClick:o,"onUpdate:show":w}=c;Promise.resolve(o?o(_):!0).then(h=>{var v;h!==!1&&((v=i.value)===null||v===void 0||v.setShow(!1),w&&xe(w,!1))})}function p(_){const{onNegativeClick:o,"onUpdate:show":w}=c;Promise.resolve(o?o(_):!0).then(h=>{var v;h!==!1&&((v=i.value)===null||v===void 0||v.setShow(!1),w&&xe(w,!1))})}return qe(De,{mergedThemeRef:n,mergedClsPrefixRef:d,props:c}),Object.assign(Object.assign({},{setShow(_){var o;(o=i.value)===null||o===void 0||o.setShow(_)},syncPosition(){var _;(_=i.value)===null||_===void 0||_.syncPosition()}}),{mergedTheme:n,popoverInstRef:i,handlePositiveClick:f,handleNegativeClick:p})},render(){const{$slots:c,$props:d,mergedTheme:n}=this;return z(Ke,He(d,$e,{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:c.activator||c.trigger,default:()=>{const i=Le(d,$e);return z(Ht,Object.assign(Object.assign({},i),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),c)}})}});const Jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Qt=C("path",{d:"M400 480a16 16 0 0 1-10.63-4L256 357.41L122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16z",fill:"currentColor"},null,-1),Yt=[Qt];var Zt=T({name:"Bookmark",render:function(d,n){return u(),g("svg",Jt,Yt)}});const Gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Xt=C("path",{d:"M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z",fill:"currentColor"},null,-1),es=[Xt];var ts=T({name:"Heart",render:function(d,n){return u(),g("svg",Gt,es)}});const ss={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},os=Je('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g>',1),ns=[os];var ze=T({name:"Trash",render:function(d,n){return u(),g("svg",ss,ns)}});const as={class:"reply-compose-wrap"},is={class:"reply-switch"},ls={key:0,class:"reply-input-wrap"},us=T({__name:"compose-reply",props:{commentId:{default:0},atUserid:{default:0},atUsername:{default:""}},emits:["reload","reset"],setup(c,{expose:d,emit:n}){const i=c,f=k(),p=k(!1),r=k(""),_=k(!1),o=h=>{p.value=h,h?setTimeout(()=>{var v;(v=f.value)==null||v.focus()},10):(_.value=!1,r.value="",n("reset"))},w=()=>{_.value=!0,Qe({comment_id:i.commentId,at_user_id:i.atUserid,content:r.value}).then(h=>{o(!1),window.$message.success("\u8BC4\u8BBA\u6210\u529F"),n("reload")}).catch(h=>{_.value=!1})};return d({switchReply:o}),(h,v)=>{const A=Ye,t=W,B=wt;return u(),g("div",as,[C("div",is,[p.value?$("",!0):(u(),g("span",{key:0,class:"show",onClick:v[0]||(v[0]=x=>o(!0))}," \u56DE\u590D ")),p.value?(u(),g("span",{key:1,class:"hide",onClick:v[1]||(v[1]=x=>o(!1))}," \u53D6\u6D88 ")):$("",!0)]),p.value?(u(),g("div",ls,[a(B,null,{default:l(()=>[a(A,{ref_key:"inputInstRef",ref:f,size:"small",placeholder:i.atUsername?"@"+i.atUsername:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9..",maxlength:"100",value:r.value,"onUpdate:value":v[2]||(v[2]=x=>r.value=x),"show-count":"",clearable:""},null,8,["placeholder","value"]),a(t,{type:"primary",size:"small",ghost:"",loading:_.value,onClick:w},{default:l(()=>[E(" \u56DE\u590D ")]),_:1},8,["loading"])]),_:1})])):$("",!0)])}}});var rs=te(us,[["__scopeId","data-v-3616e66c"]]);const cs={class:"reply-item"},ps={class:"header-wrap"},ds={class:"username"},_s={class:"reply-name"},ms={class:"timestamp"},vs={class:"base-wrap"},hs={class:"content"},fs={key:0,class:"reply-switch"},gs=T({__name:"reply-item",props:{reply:null},emits:["focusReply","reload"],setup(c,{emit:d}){const n=c,i=le(),f=()=>{d("focusReply",n.reply)},p=()=>{Ze({id:n.reply.id}).then(r=>{window.$message.success("\u5220\u9664\u6210\u529F"),setTimeout(()=>{d("reload")},50)}).catch(r=>{console.log(r)})};return(r,_)=>{const o=he("router-link"),w=ue,h=W,v=Re;return u(),g("div",cs,[C("div",ps,[C("div",ds,[a(o,{class:"user-link",to:{name:"user",query:{username:n.reply.user.username}}},{default:l(()=>[E(D(n.reply.user.username),1)]),_:1},8,["to"]),C("span",_s,D(n.reply.at_user_id>0?"\u56DE\u590D":":"),1),n.reply.at_user_id>0?(u(),R(o,{key:0,class:"user-link",to:{name:"user",query:{username:n.reply.at_user.username}}},{default:l(()=>[E(D(n.reply.at_user.username),1)]),_:1},8,["to"])):$("",!0)]),C("div",ms,[E(D(n.reply.ip_loc?n.reply.ip_loc+" \xB7 ":n.reply.ip_loc)+" "+D(e(ae)(n.reply.created_on))+" ",1),e(i).state.userInfo.is_admin||e(i).state.userInfo.id===n.reply.user.id?(u(),R(v,{key:0,"negative-text":"\u53D6\u6D88","positive-text":"\u786E\u8BA4",onPositiveClick:p},{trigger:l(()=>[a(h,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:l(()=>[a(w,null,{default:l(()=>[a(e(ze))]),_:1})]),_:1})]),default:l(()=>[E(" \u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F ")]),_:1})):$("",!0)])]),C("div",vs,[C("div",hs,D(n.reply.content),1),e(i).state.userInfo.id>0?(u(),g("div",fs,[C("span",{class:"show",onClick:f}," \u56DE\u590D ")])):$("",!0)])])}}});var ys=te(gs,[["__scopeId","data-v-1e3df20d"]]);const ks={class:"comment-item"},Cs={class:"nickname-wrap"},ws={class:"username-wrap"},bs={class:"opt-wrap"},xs={class:"timestamp"},$s=["innerHTML"],Es={class:"reply-wrap"},Bs=T({__name:"comment-item",props:{comment:null},emits:["reload"],setup(c,{emit:d}){const n=c,i=le(),f=Be(),p=k(0),r=k(""),_=k(),o=L(()=>{let B=Object.assign({texts:[],imgs:[]},n.comment);return B.contents.map(x=>{(+x.type==1||+x.type==2)&&B.texts.push(x),+x.type==3&&B.imgs.push(x)}),B}),w=(B,x)=>{let I=B.target;if(I.dataset.detail){const S=I.dataset.detail.split(":");S.length===2&&(i.commit("refresh"),S[0]==="tag"?window.$message.warning("\u8BC4\u8BBA\u5185\u7684\u65E0\u6548\u8BDD\u9898"):f.push({name:"user",query:{username:S[1]}}))}},h=B=>{var x,I;p.value=B.user_id,r.value=((x=B.user)==null?void 0:x.username)||"",(I=_.value)==null||I.switchReply(!0)},v=()=>{d("reload")},A=()=>{p.value=0,r.value=""},t=()=>{Xe({id:o.value.id}).then(B=>{window.$message.success("\u5220\u9664\u6210\u529F"),setTimeout(()=>{v()},50)}).catch(B=>{})};return(B,x)=>{const I=fe,S=he("router-link"),H=ue,K=W,M=Re,Q=Fe,Y=ys,Z=rs,s=Pe;return u(),g("div",ks,[a(s,{"content-indented":""},Ge({avatar:l(()=>[a(I,{round:"",size:30,src:e(o).user.avatar},null,8,["src"])]),header:l(()=>[C("span",Cs,[a(S,{onClick:x[0]||(x[0]=J(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e(o).user.username}}},{default:l(()=>[E(D(e(o).user.nickname),1)]),_:1},8,["to"])]),C("span",ws," @"+D(e(o).user.username),1)]),"header-extra":l(()=>[C("div",bs,[C("span",xs,D(e(o).ip_loc?e(o).ip_loc+" \xB7 ":e(o).ip_loc)+" "+D(e(ae)(e(o).created_on)),1),e(i).state.userInfo.is_admin||e(i).state.userInfo.id===e(o).user.id?(u(),R(M,{key:0,"negative-text":"\u53D6\u6D88","positive-text":"\u786E\u8BA4",onPositiveClick:t},{trigger:l(()=>[a(K,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:l(()=>[a(H,null,{default:l(()=>[a(e(ze))]),_:1})]),_:1})]),default:l(()=>[E(" \u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F ")]),_:1})):$("",!0)])]),footer:l(()=>[e(o).imgs.length>0?(u(),R(Q,{key:0,imgs:e(o).imgs},null,8,["imgs"])):$("",!0),C("div",Es,[(u(!0),g(ee,null,ne(e(o).replies,m=>(u(),R(Y,{key:m.id,reply:m,onFocusReply:h,onReload:v},null,8,["reply"]))),128))]),e(i).state.userInfo.id>0?(u(),R(Z,{key:1,ref_key:"replyComposeRef",ref:_,"comment-id":e(o).id,"at-userid":p.value,"at-username":r.value,onReload:v,onReset:A},null,8,["comment-id","at-userid","at-username"])):$("",!0)]),_:2},[e(o).texts.length>0?{name:"description",fn:l(()=>[(u(!0),g(ee,null,ne(e(o).texts,m=>(u(),g("span",{key:m.id,class:"comment-text",onClick:x[1]||(x[1]=J(U=>w(U,e(o).id),["stop"])),innerHTML:e(ye)(m.content).content},null,8,$s))),128))]),key:"0"}:void 0]),1024)])}}});var Fs=te(Bs,[["__scopeId","data-v-6b2cb186"]]);const Ps=c=>(ot("data-v-b1d2e9fe"),c=c(),nt(),c),Ds={key:0,class:"compose-wrap"},As={class:"compose-line"},Rs={class:"compose-user"},zs={class:"compose-line compose-options"},Is={class:"attachment"},Ts={class:"submit-wrap"},Ss={class:"attachment-list-wrap"},Os={key:1,class:"compose-wrap"},Us=Ps(()=>C("div",{class:"login-wrap"},[C("span",{class:"login-banner"}," \u767B\u5F55\u540E\uFF0C\u7CBE\u5F69\u66F4\u591A")],-1)),Ns={class:"login-wrap"},js=T({__name:"compose-comment",props:{lock:{default:0},postId:{default:0}},emits:["post-success"],setup(c,{emit:d}){const n=c,i=le(),f=k([]),p=k(!1),r=k(!1),_=k(!1),o=k(""),w=k(),h=k("public/image"),v=k([]),A=k([]),t="/v1/attachment",B=k(),x=Dt.exports.debounce(y=>{et({k:y}).then(b=>{let F=[];b.suggest.map(P=>{F.push({label:P,value:P})}),f.value=F,r.value=!1}).catch(b=>{r.value=!1})},200),I=(y,b)=>{r.value||(r.value=!0,b==="@"&&x(y))},S=y=>{y.length>200||(o.value=y)},H=y=>{h.value=y},K=y=>{v.value=y},M=async y=>{var b,F;return h.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((b=y.file.file)==null?void 0:b.type)?(window.$message.warning("\u56FE\u7247\u4EC5\u5141\u8BB8 png/jpg/gif \u683C\u5F0F"),!1):h.value==="image"&&((F=y.file.file)==null?void 0:F.size)>10485760?(window.$message.warning("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710MB"),!1):!0},Q=({file:y,event:b})=>{var F;try{let P=JSON.parse((F=b.target)==null?void 0:F.response);P.code===0&&h.value==="public/image"&&A.value.push({id:y.id,content:P.data.content})}catch{window.$message.error("\u4E0A\u4F20\u5931\u8D25")}},Y=({file:y,event:b})=>{var F;try{let P=JSON.parse((F=b.target)==null?void 0:F.response);if(P.code!==0){let V=P.msg||"\u4E0A\u4F20\u5931\u8D25";P.details&&P.details.length>0&&P.details.map(N=>{V+=":"+N}),window.$message.error(V)}}catch{window.$message.error("\u4E0A\u4F20\u5931\u8D25")}},Z=({file:y})=>{let b=A.value.findIndex(F=>F.id===y.id);b>-1&&A.value.splice(b,1)},s=()=>{p.value=!0},m=()=>{var y;p.value=!1,(y=w.value)==null||y.clear(),v.value=[],o.value="",A.value=[]},U=()=>{if(o.value.trim().length===0){window.$message.warning("\u8BF7\u8F93\u5165\u5185\u5BB9\u54E6");return}let{users:y}=ye(o.value);const b=[];let F=100;b.push({content:o.value,type:2,sort:F}),A.value.map(P=>{F++,b.push({content:P.content,type:3,sort:F})}),_.value=!0,tt({contents:b,post_id:n.postId,users:Array.from(new Set(y))}).then(P=>{window.$message.success("\u53D1\u5E03\u6210\u529F"),_.value=!1,d("post-success"),m()}).catch(P=>{_.value=!1})},se=y=>{i.commit("triggerAuth",!0),i.commit("triggerAuthKey",y)};return ge(()=>{B.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(y,b)=>{const F=fe,P=Rt,V=ue,N=W,re=zt,ce=It,pe=st,oe=Tt,de=St;return u(),g("div",null,[e(i).state.userInfo.id>0?(u(),g("div",Ds,[C("div",As,[C("div",Rs,[a(F,{round:"",size:30,src:e(i).state.userInfo.avatar},null,8,["src"])]),a(P,{type:"textarea",size:"large",autosize:"",bordered:!1,options:f.value,prefix:["@"],loading:r.value,value:o.value,disabled:n.lock===1,"onUpdate:value":S,onSearch:I,onFocus:s,placeholder:n.lock===1?"\u6CE1\u6CE1\u5DF2\u88AB\u9501\u5B9A\uFF0C\u56DE\u590D\u529F\u80FD\u5DF2\u5173\u95ED":"\u5FEB\u6765\u8BC4\u8BBA\u4E24\u53E5\u5427..."},null,8,["options","loading","value","disabled","placeholder"])]),p.value?(u(),R(de,{key:0,ref_key:"uploadRef",ref:w,abstract:"","list-type":"image",multiple:!0,max:9,action:t,headers:{Authorization:B.value},data:{type:h.value},onBeforeUpload:M,onFinish:Q,onError:Y,onRemove:Z,"onUpdate:fileList":K},{default:l(()=>[C("div",zs,[C("div",Is,[a(re,{abstract:""},{default:l(({handleClick:G})=>[a(N,{disabled:v.value.length>0&&h.value==="public/video"||v.value.length===9,onClick:()=>{H("public/image"),G()},quaternary:"",circle:"",type:"primary"},{icon:l(()=>[a(V,{size:"20",color:"var(--primary-color)"},{default:l(()=>[a(e(At))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),a(pe,{trigger:"hover",placement:"bottom"},{trigger:l(()=>[a(ce,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:o.value.length/200*100},null,8,["percentage"])]),default:l(()=>[E(" "+D(o.value.length)+" / 200 ",1)]),_:1})]),C("div",Ts,[a(N,{quaternary:"",round:"",type:"tertiary",class:"cancel-btn",size:"small",onClick:m},{default:l(()=>[E(" \u53D6\u6D88 ")]),_:1}),a(N,{loading:_.value,onClick:U,type:"primary",secondary:"",size:"small",round:""},{default:l(()=>[E(" \u53D1\u5E03 ")]),_:1},8,["loading"])])]),C("div",Ss,[a(oe)])]),_:1},8,["headers","data"])):$("",!0)])):(u(),g("div",Os,[Us,C("div",Ns,[a(N,{strong:"",secondary:"",round:"",type:"primary",onClick:b[0]||(b[0]=G=>se("signin"))},{default:l(()=>[E(" \u767B\u5F55 ")]),_:1}),a(N,{strong:"",secondary:"",round:"",type:"info",onClick:b[1]||(b[1]=G=>se("signup"))},{default:l(()=>[E(" \u6CE8\u518C ")]),_:1})])]))])}}});var Ms=te(js,[["__scopeId","data-v-b1d2e9fe"]]);const Vs={class:"username-wrap"},qs={key:0,class:"options"},Ls={key:0},Hs=["innerHTML"],Ks={class:"timestamp"},Ws={key:0},Js={key:1},Qs={class:"opts-wrap"},Ys=["onClick"],Zs={class:"opt-item"},Gs=["onClick"],Xs=T({__name:"post-detail",props:{post:null},emits:["reload"],setup(c,{emit:d}){const n=c,i=le(),f=Be(),p=k(!1),r=k(!1),_=k(!1),o=k(!1),w=k(!1),h=k(!1),v=k(!1),A=k(X.PUBLIC),t=L({get:()=>{let s=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},n.post);return s.contents.map(m=>{(+m.type==1||+m.type==2)&&s.texts.push(m),+m.type==3&&s.imgs.push(m),+m.type==4&&s.videos.push(m),+m.type==6&&s.links.push(m),+m.type==7&&s.attachments.push(m),+m.type==8&&s.charge_attachments.push(m)}),s},set:s=>{n.post.upvote_count=s.upvote_count,n.post.comment_count=s.comment_count,n.post.collection_count=s.collection_count}}),B=L(()=>{let s=[{label:"\u5220\u9664",key:"delete"}];return t.value.is_lock===0?s.push({label:"\u9501\u5B9A",key:"lock"}):s.push({label:"\u89E3\u9501",key:"unlock"}),i.state.userInfo.is_admin&&(t.value.is_top===0?s.push({label:"\u7F6E\u9876",key:"stick"}):s.push({label:"\u53D6\u6D88\u7F6E\u9876",key:"unstick"})),t.value.visibility===X.PUBLIC?s.push({label:"\u516C\u5F00",key:"vpublic",children:[{label:"\u79C1\u5BC6",key:"vprivate"},{label:"\u597D\u53CB\u53EF\u89C1",key:"vfriend"}]}):t.value.visibility===X.PRIVATE?s.push({label:"\u79C1\u5BC6",key:"vprivate",children:[{label:"\u516C\u5F00",key:"vpublic"},{label:"\u597D\u53CB\u53EF\u89C1",key:"vfriend"}]}):s.push({label:"\u597D\u53CB\u53EF\u89C1",key:"vfriend",children:[{label:"\u516C\u5F00",key:"vpublic"},{label:"\u79C1\u5BC6",key:"vprivate"}]}),s}),x=s=>{f.push({name:"post",query:{id:s}})},I=(s,m)=>{if(s.target.dataset.detail){const U=s.target.dataset.detail.split(":");if(U.length===2){i.commit("refresh"),U[0]==="tag"?f.push({name:"home",query:{q:U[1],t:"tag"}}):f.push({name:"user",query:{username:U[1]}});return}}x(m)},S=s=>{switch(s){case"delete":_.value=!0;break;case"lock":case"unlock":o.value=!0;break;case"stick":case"unstick":w.value=!0;break;case"vpublic":A.value=0,h.value=!0;break;case"vprivate":A.value=1,h.value=!0;break;case"vfriend":A.value=2,h.value=!0;break}},H=()=>{lt({id:t.value.id}).then(s=>{window.$message.success("\u5220\u9664\u6210\u529F"),f.replace("/"),setTimeout(()=>{i.commit("refresh")},50)}).catch(s=>{v.value=!1})},K=()=>{ut({id:t.value.id}).then(s=>{d("reload"),s.lock_status===1?window.$message.success("\u9501\u5B9A\u6210\u529F"):window.$message.success("\u89E3\u9501\u6210\u529F")}).catch(s=>{v.value=!1})},M=()=>{rt({id:t.value.id}).then(s=>{d("reload"),s.top_status===1?window.$message.success("\u7F6E\u9876\u6210\u529F"):window.$message.success("\u53D6\u6D88\u7F6E\u9876\u6210\u529F")}).catch(s=>{v.value=!1})},Q=()=>{ct({id:t.value.id,visibility:A.value}).then(s=>{d("reload"),window.$message.success("\u4FEE\u6539\u53EF\u89C1\u6027\u6210\u529F")}).catch(s=>{v.value=!1})},Y=()=>{pt({id:t.value.id}).then(s=>{p.value=s.status,s.status?t.value={...t.value,upvote_count:t.value.upvote_count+1}:t.value={...t.value,upvote_count:t.value.upvote_count-1}}).catch(s=>{console.log(s)})},Z=()=>{dt({id:t.value.id}).then(s=>{r.value=s.status,s.status?t.value={...t.value,collection_count:t.value.collection_count+1}:t.value={...t.value,collection_count:t.value.collection_count-1}}).catch(s=>{console.log(s)})};return ge(()=>{i.state.userInfo.id>0&&(at({id:t.value.id}).then(s=>{p.value=s.status}).catch(s=>{console.log(s)}),it({id:t.value.id}).then(s=>{r.value=s.status}).catch(s=>{console.log(s)}))}),(s,m)=>{const U=fe,se=he("router-link"),y=_t,b=ue,F=W,P=mt,V=vt,N=Et,re=Fe,ce=Bt,pe=Ft,oe=Lt,de=ht,G=Pe;return u(),g("div",{class:"detail-item",onClick:m[6]||(m[6]=O=>x(e(t).id))},[a(G,null,{avatar:l(()=>[a(U,{round:"",size:30,src:e(t).user.avatar},null,8,["src"])]),header:l(()=>[a(se,{onClick:m[0]||(m[0]=J(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e(t).user.username}}},{default:l(()=>[E(D(e(t).user.nickname),1)]),_:1},8,["to"]),C("span",Vs," @"+D(e(t).user.username),1),e(t).is_top?(u(),R(y,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:l(()=>[E(" \u7F6E\u9876 ")]),_:1})):$("",!0),e(t).visibility==e(X).PRIVATE?(u(),R(y,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:l(()=>[E(" \u79C1\u5BC6 ")]),_:1})):$("",!0),e(t).visibility==e(X).FRIEND?(u(),R(y,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:l(()=>[E(" \u597D\u53CB\u53EF\u89C1 ")]),_:1})):$("",!0)]),"header-extra":l(()=>[e(i).state.userInfo.is_admin||e(i).state.userInfo.id===e(t).user.id?(u(),g("div",qs,[a(P,{placement:"bottom-end",trigger:"click",size:"small",options:e(B),onSelect:S},{default:l(()=>[a(F,{quaternary:"",circle:""},{icon:l(()=>[a(b,null,{default:l(()=>[a(e(Ot))]),_:1})]),_:1})]),_:1},8,["options"])])):$("",!0),a(V,{show:_.value,"onUpdate:show":m[1]||(m[1]=O=>_.value=O),"mask-closable":!1,preset:"dialog",title:"\u63D0\u793A",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u6CE1\u6CE1\u52A8\u6001\u5417\uFF1F","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:H},null,8,["show"]),a(V,{show:o.value,"onUpdate:show":m[2]||(m[2]=O=>o.value=O),"mask-closable":!1,preset:"dialog",title:"\u63D0\u793A",content:"\u786E\u5B9A"+(e(t).is_lock?"\u89E3\u9501":"\u9501\u5B9A")+"\u8BE5\u6CE1\u6CE1\u52A8\u6001\u5417\uFF1F","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:K},null,8,["show","content"]),a(V,{show:w.value,"onUpdate:show":m[3]||(m[3]=O=>w.value=O),"mask-closable":!1,preset:"dialog",title:"\u63D0\u793A",content:"\u786E\u5B9A"+(e(t).is_top?"\u53D6\u6D88\u7F6E\u9876":"\u7F6E\u9876")+"\u8BE5\u6CE1\u6CE1\u52A8\u6001\u5417\uFF1F","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:M},null,8,["show","content"]),a(V,{show:h.value,"onUpdate:show":m[4]||(m[4]=O=>h.value=O),"mask-closable":!1,preset:"dialog",title:"\u63D0\u793A",content:"\u786E\u5B9A\u5C06\u8BE5\u6CE1\u6CE1\u52A8\u6001\u53EF\u89C1\u5EA6\u4FEE\u6539\u4E3A"+(A.value==0?"\u516C\u5F00":A.value==1?"\u79C1\u5BC6":"\u597D\u53CB\u53EF\u89C1")+"\u5417\uFF1F","positive-text":"\u786E\u8BA4","negative-text":"\u53D6\u6D88",onPositiveClick:Q},null,8,["show","content"])]),footer:l(()=>[a(N,{attachments:e(t).attachments},null,8,["attachments"]),a(N,{attachments:e(t).charge_attachments,price:e(t).attachment_price},null,8,["attachments","price"]),a(re,{imgs:e(t).imgs},null,8,["imgs"]),a(ce,{videos:e(t).videos,full:!0},null,8,["videos"]),a(pe,{links:e(t).links},null,8,["links"]),C("div",Ks,[E(" \u53D1\u5E03\u4E8E "+D(e(ae)(e(t).created_on))+" ",1),e(t).ip_loc?(u(),g("span",Ws,[a(oe,{vertical:""}),E(" "+D(e(t).ip_loc),1)])):$("",!0),e(t).created_on!=e(t).latest_replied_on?(u(),g("span",Js,[a(oe,{vertical:""}),E(" \u6700\u540E\u56DE\u590D "+D(e(ae)(e(t).latest_replied_on)),1)])):$("",!0)])]),action:l(()=>[C("div",Qs,[a(de,{justify:"space-between"},{default:l(()=>[C("div",{class:"opt-item hover",onClick:J(Y,["stop"])},[a(b,{size:"20",class:"opt-item-icon"},{default:l(()=>[p.value?$("",!0):(u(),R(e(bt),{key:0})),p.value?(u(),R(e(ts),{key:1,color:"red"})):$("",!0)]),_:1}),E(" "+D(e(t).upvote_count),1)],8,Ys),C("div",Zs,[a(b,{size:"20",class:"opt-item-icon"},{default:l(()=>[a(e(xt))]),_:1}),E(" "+D(e(t).comment_count),1)]),C("div",{class:"opt-item hover",onClick:J(Z,["stop"])},[a(b,{size:"20",class:"opt-item-icon"},{default:l(()=>[r.value?$("",!0):(u(),R(e($t),{key:0})),r.value?(u(),R(e(Zt),{key:1,color:"#ff7600"})):$("",!0)]),_:1}),E(" "+D(e(t).collection_count),1)],8,Gs)]),_:1})])]),default:l(()=>[e(t).texts.length>0?(u(),g("div",Ls,[(u(!0),g(ee,null,ne(e(t).texts,O=>(u(),g("span",{key:O.id,class:"post-text",onClick:m[5]||(m[5]=J(Ie=>I(Ie,e(t).id),["stop"])),innerHTML:e(ye)(O.content).content},null,8,Hs))),128))])):$("",!0)]),_:1})])}}});const eo={key:0,class:"detail-wrap"},to={key:1,class:"empty-wrap"},so={key:1},oo={key:0,class:"skeleton-wrap"},no={key:1},ao={key:0,class:"empty-wrap"},io=T({__name:"Post",setup(c){const d=kt(),n=k({}),i=k(!1),f=k(!1),p=k([]),r=L(()=>+d.query.id),_=()=>{n.value={id:0},i.value=!0,gt({id:r.value}).then(w=>{i.value=!1,n.value=w,o()}).catch(w=>{i.value=!1})},o=(w=!1)=>{p.value.length===0&&(f.value=!0),yt({id:n.value.id}).then(h=>{p.value=h.list,f.value=!1,w&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(h=>{f.value=!1})};return ge(()=>{_()}),ft(r,()=>{r.value>0&&d.name==="post"&&_()}),(w,h)=>{const v=Ut,A=Xs,t=jt,B=Ct,x=Mt,I=Ms,S=Pt,H=Fs,K=Nt;return u(),g("div",null,[a(v,{title:"\u6CE1\u6CE1\u8BE6\u60C5",back:!0}),a(K,{class:"main-content-wrap",bordered:""},{default:l(()=>[a(x,null,{default:l(()=>[a(B,{show:i.value},{default:l(()=>[n.value.id>1?(u(),g("div",eo,[a(A,{post:n.value,onReload:_},null,8,["post"])])):(u(),g("div",to,[a(t,{size:"large",description:"\u6682\u65E0\u6570\u636E"})]))]),_:1},8,["show"])]),_:1}),n.value.id>0?(u(),R(x,{key:0},{default:l(()=>[a(I,{lock:n.value.is_lock,"post-id":n.value.id,onPostSuccess:h[0]||(h[0]=M=>o(!0))},null,8,["lock","post-id"])]),_:1})):$("",!0),n.value.id>0?(u(),g("div",so,[f.value?(u(),g("div",oo,[a(S,{num:5})])):(u(),g("div",no,[p.value.length===0?(u(),g("div",ao,[a(t,{size:"large",description:"\u6682\u65E0\u8BC4\u8BBA\uFF0C\u5FEB\u6765\u62A2\u6C99\u53D1"})])):$("",!0),(u(!0),g(ee,null,ne(p.value,M=>(u(),R(x,{key:M.id},{default:l(()=>[a(H,{comment:M,onReload:o},null,8,["comment"])]),_:2},1024))),128))]))])):$("",!0)]),_:1})])}}});var ko=te(io,[["__scopeId","data-v-41747510"]]);export{ko as default};
