var Ye=Object.defineProperty;var He=(A,a,m)=>a in A?Ye(A,a,{enumerable:!0,configurable:!0,writable:!0,value:m}):A[a]=m;var u=(A,a,m)=>(He(A,typeof a!="symbol"?a+"":a,m),m);import{a as Be,M as Xe,m as ke,b as P,d as v,v as Ve}from"./mqtt-KeEEffnT.js";var se={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(A){(function(a,m,_,l){var F=["","webkit","Moz","MS","ms","o"],Y=m.createElement("div"),pt="function",H=Math.round,w=Math.abs,vt=Date.now;function mt(t,e,i){return setTimeout(Tt(t,i),e)}function B(t,e,i){return Array.isArray(t)?(b(t,i[e],i),!0):!1}function b(t,e,i){var s;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==l)for(s=0;s<t.length;)e.call(i,t[s],s,t),s++;else for(s in t)t.hasOwnProperty(s)&&e.call(i,t[s],s,t)}function Dt(t,e,i){var s="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var n=new Error("get-stack-trace"),r=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=a.console&&(a.console.warn||a.console.log);return o&&o.call(a.console,s,r),t.apply(this,arguments)}}var S;typeof Object.assign!="function"?S=function(e){if(e===l||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),s=1;s<arguments.length;s++){var n=arguments[s];if(n!==l&&n!==null)for(var r in n)n.hasOwnProperty(r)&&(i[r]=n[r])}return i}:S=Object.assign;var Mt=Dt(function(e,i,s){for(var n=Object.keys(i),r=0;r<n.length;)(!s||s&&e[n[r]]===l)&&(e[n[r]]=i[n[r]]),r++;return e},"extend","Use `assign`."),ne=Dt(function(e,i){return Mt(e,i,!0)},"merge","Use `assign`.");function g(t,e,i){var s=e.prototype,n;n=t.prototype=Object.create(s),n.constructor=t,n._super=s,i&&S(n,i)}function Tt(t,e){return function(){return t.apply(e,arguments)}}function gt(t,e){return typeof t==pt?t.apply(e&&e[0]||l,e):t}function Rt(t,e){return t===l?e:t}function $(t,e,i){b(et(e),function(s){t.addEventListener(s,i,!1)})}function tt(t,e,i){b(et(e),function(s){t.removeEventListener(s,i,!1)})}function Gt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function U(t,e){return t.indexOf(e)>-1}function et(t){return t.trim().split(/\s+/g)}function X(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var s=0;s<t.length;){if(i&&t[s][i]==e||!i&&t[s]===e)return s;s++}return-1}function it(t){return Array.prototype.slice.call(t,0)}function wt(t,e,i){for(var s=[],n=[],r=0;r<t.length;){var o=e?t[r][e]:t[r];X(n,o)<0&&s.push(t[r]),n[r]=o,r++}return i&&(e?s=s.sort(function(f,p){return f[e]>p[e]}):s=s.sort()),s}function st(t,e){for(var i,s,n=e[0].toUpperCase()+e.slice(1),r=0;r<F.length;){if(i=F[r],s=i?i+n:e,s in t)return s;r++}return l}var re=1;function ae(){return re++}function Ut(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||a}var oe=/mobile|tablet|ip(ad|hone|od)|android/i,Lt="ontouchstart"in a,le=st(a,"PointerEvent")!==l,he=Lt&&oe.test(navigator.userAgent),V="touch",ce="pen",Et="mouse",ue="kinect",fe=25,d=1,L=2,h=4,T=8,nt=1,W=2,J=4,z=8,j=16,C=W|J,x=z|j,xt=C|x,qt=["x","y"],rt=["clientX","clientY"];function E(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(s){gt(t.options.enable,[t])&&i.handler(s)},this.init()}E.prototype={handler:function(){},init:function(){this.evEl&&$(this.element,this.evEl,this.domHandler),this.evTarget&&$(this.target,this.evTarget,this.domHandler),this.evWin&&$(Ut(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&tt(this.element,this.evEl,this.domHandler),this.evTarget&&tt(this.target,this.evTarget,this.domHandler),this.evWin&&tt(Ut(this.element),this.evWin,this.domHandler)}};function de(t){var e,i=t.options.inputClass;return i?e=i:le?e=It:he?e=lt:Lt?e=Pt:e=ot,new e(t,pe)}function pe(t,e,i){var s=i.pointers.length,n=i.changedPointers.length,r=e&d&&s-n===0,o=e&(h|T)&&s-n===0;i.isFirst=!!r,i.isFinal=!!o,r&&(t.session={}),i.eventType=e,ve(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function ve(t,e){var i=t.session,s=e.pointers,n=s.length;i.firstInput||(i.firstInput=Ft(e)),n>1&&!i.firstMultiple?i.firstMultiple=Ft(e):n===1&&(i.firstMultiple=!1);var r=i.firstInput,o=i.firstMultiple,c=o?o.center:r.center,f=e.center=Yt(s);e.timeStamp=vt(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=yt(c,f),e.distance=at(c,f),me(i,e),e.offsetDirection=Bt(e.deltaX,e.deltaY);var p=Ht(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=p.x,e.overallVelocityY=p.y,e.overallVelocity=w(p.x)>w(p.y)?p.x:p.y,e.scale=o?Ee(o.pointers,s):1,e.rotation=o?ge(o.pointers,s):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,Te(i,e);var N=t.element;Gt(e.srcEvent.target,N)&&(N=e.srcEvent.target),e.target=N}function me(t,e){var i=e.center,s=t.offsetDelta||{},n=t.prevDelta||{},r=t.prevInput||{};(e.eventType===d||r.eventType===h)&&(n=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},s=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-s.x),e.deltaY=n.y+(i.y-s.y)}function Te(t,e){var i=t.lastInterval||e,s=e.timeStamp-i.timeStamp,n,r,o,c;if(e.eventType!=T&&(s>fe||i.velocity===l)){var f=e.deltaX-i.deltaX,p=e.deltaY-i.deltaY,N=Ht(s,f,p);r=N.x,o=N.y,n=w(N.x)>w(N.y)?N.x:N.y,c=Bt(f,p),t.lastInterval=e}else n=i.velocity,r=i.velocityX,o=i.velocityY,c=i.direction;e.velocity=n,e.velocityX=r,e.velocityY=o,e.direction=c}function Ft(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:H(t.pointers[i].clientX),clientY:H(t.pointers[i].clientY)},i++;return{timeStamp:vt(),pointers:e,center:Yt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Yt(t){var e=t.length;if(e===1)return{x:H(t[0].clientX),y:H(t[0].clientY)};for(var i=0,s=0,n=0;n<e;)i+=t[n].clientX,s+=t[n].clientY,n++;return{x:H(i/e),y:H(s/e)}}function Ht(t,e,i){return{x:e/t||0,y:i/t||0}}function Bt(t,e){return t===e?nt:w(t)>=w(e)?t<0?W:J:e<0?z:j}function at(t,e,i){i||(i=qt);var s=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(s*s+n*n)}function yt(t,e,i){i||(i=qt);var s=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.atan2(n,s)*180/Math.PI}function ge(t,e){return yt(e[1],e[0],rt)+yt(t[1],t[0],rt)}function Ee(t,e){return at(e[0],e[1],rt)/at(t[0],t[1],rt)}var ye={mousedown:d,mousemove:L,mouseup:h},Ie="mousedown",Pe="mousemove mouseup";function ot(){this.evEl=Ie,this.evWin=Pe,this.pressed=!1,E.apply(this,arguments)}g(ot,E,{handler:function(e){var i=ye[e.type];i&d&&e.button===0&&(this.pressed=!0),i&L&&e.which!==1&&(i=h),this.pressed&&(i&h&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:Et,srcEvent:e}))}});var _e={pointerdown:d,pointermove:L,pointerup:h,pointercancel:T,pointerout:T},Se={2:V,3:ce,4:Et,5:ue},Xt="pointerdown",kt="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xt="MSPointerDown",kt="MSPointerMove MSPointerUp MSPointerCancel");function It(){this.evEl=Xt,this.evWin=kt,E.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}g(It,E,{handler:function(e){var i=this.store,s=!1,n=e.type.toLowerCase().replace("ms",""),r=_e[n],o=Se[e.pointerType]||e.pointerType,c=o==V,f=X(i,e.pointerId,"pointerId");r&d&&(e.button===0||c)?f<0&&(i.push(e),f=i.length-1):r&(h|T)&&(s=!0),!(f<0)&&(i[f]=e,this.callback(this.manager,r,{pointers:i,changedPointers:[e],pointerType:o,srcEvent:e}),s&&i.splice(f,1))}});var Ce={touchstart:d,touchmove:L,touchend:h,touchcancel:T},Oe="touchstart",Ne="touchstart touchmove touchend touchcancel";function Vt(){this.evTarget=Oe,this.evWin=Ne,this.started=!1,E.apply(this,arguments)}g(Vt,E,{handler:function(e){var i=Ce[e.type];if(i===d&&(this.started=!0),!!this.started){var s=Ae.call(this,e,i);i&(h|T)&&s[0].length-s[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:s[0],changedPointers:s[1],pointerType:V,srcEvent:e})}}});function Ae(t,e){var i=it(t.touches),s=it(t.changedTouches);return e&(h|T)&&(i=wt(i.concat(s),"identifier",!0)),[i,s]}var be={touchstart:d,touchmove:L,touchend:h,touchcancel:T},De="touchstart touchmove touchend touchcancel";function lt(){this.evTarget=De,this.targetIds={},E.apply(this,arguments)}g(lt,E,{handler:function(e){var i=be[e.type],s=Me.call(this,e,i);s&&this.callback(this.manager,i,{pointers:s[0],changedPointers:s[1],pointerType:V,srcEvent:e})}});function Me(t,e){var i=it(t.touches),s=this.targetIds;if(e&(d|L)&&i.length===1)return s[i[0].identifier]=!0,[i,i];var n,r,o=it(t.changedTouches),c=[],f=this.target;if(r=i.filter(function(p){return Gt(p.target,f)}),e===d)for(n=0;n<r.length;)s[r[n].identifier]=!0,n++;for(n=0;n<o.length;)s[o[n].identifier]&&c.push(o[n]),e&(h|T)&&delete s[o[n].identifier],n++;if(c.length)return[wt(r.concat(c),"identifier",!0),c]}var Re=2500,Wt=25;function Pt(){E.apply(this,arguments);var t=Tt(this.handler,this);this.touch=new lt(this.manager,t),this.mouse=new ot(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}g(Pt,E,{handler:function(e,i,s){var n=s.pointerType==V,r=s.pointerType==Et;if(!(r&&s.sourceCapabilities&&s.sourceCapabilities.firesTouchEvents)){if(n)Ge.call(this,i,s);else if(r&&we.call(this,s))return;this.callback(e,i,s)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Ge(t,e){t&d?(this.primaryTouch=e.changedPointers[0].identifier,Jt.call(this,e)):t&(h|T)&&Jt.call(this,e)}function Jt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var s=this.lastTouches,n=function(){var r=s.indexOf(i);r>-1&&s.splice(r,1)};setTimeout(n,Re)}}function we(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,s=0;s<this.lastTouches.length;s++){var n=this.lastTouches[s],r=Math.abs(e-n.x),o=Math.abs(i-n.y);if(r<=Wt&&o<=Wt)return!0}return!1}var zt=st(Y.style,"touchAction"),jt=zt!==l,Zt="compute",Qt="auto",_t="manipulation",q="none",Z="pan-x",Q="pan-y",ht=Le();function St(t,e){this.manager=t,this.set(e)}St.prototype={set:function(t){t==Zt&&(t=this.compute()),jt&&this.manager.element.style&&ht[t]&&(this.manager.element.style[zt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return b(this.manager.recognizers,function(e){gt(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Ue(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var s=this.actions,n=U(s,q)&&!ht[q],r=U(s,Q)&&!ht[Q],o=U(s,Z)&&!ht[Z];if(n){var c=t.pointers.length===1,f=t.distance<2,p=t.deltaTime<250;if(c&&f&&p)return}if(!(o&&r)&&(n||r&&i&C||o&&i&x))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Ue(t){if(U(t,q))return q;var e=U(t,Z),i=U(t,Q);return e&&i?q:e||i?e?Z:Q:U(t,_t)?_t:Qt}function Le(){if(!jt)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?a.CSS.supports("touch-action",i):!0}),t}var ct=1,y=2,k=4,G=8,D=G,K=16,O=32;function M(t){this.options=S({},this.defaults,t||{}),this.id=ae(),this.manager=null,this.options.enable=Rt(this.options.enable,!0),this.state=ct,this.simultaneous={},this.requireFail=[]}M.prototype={defaults:{},set:function(t){return S(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(B(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=ut(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return B(t,"dropRecognizeWith",this)?this:(t=ut(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(B(t,"requireFailure",this))return this;var e=this.requireFail;return t=ut(t,this),X(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(B(t,"dropRequireFailure",this))return this;t=ut(t,this);var e=X(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function s(n){e.manager.emit(n,t)}i<G&&s(e.options.event+Kt(i)),s(e.options.event),t.additionalEvent&&s(t.additionalEvent),i>=G&&s(e.options.event+Kt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=O},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(O|ct)))return!1;t++}return!0},recognize:function(t){var e=S({},t);if(!gt(this.options.enable,[this,e])){this.reset(),this.state=O;return}this.state&(D|K|O)&&(this.state=ct),this.state=this.process(e),this.state&(y|k|G|K)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function Kt(t){return t&K?"cancel":t&G?"end":t&k?"move":t&y?"start":""}function $t(t){return t==j?"down":t==z?"up":t==W?"left":t==J?"right":""}function ut(t,e){var i=e.manager;return i?i.get(t):t}function I(){M.apply(this,arguments)}g(I,M,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,s=e&(y|k),n=this.attrTest(t);return s&&(i&T||!n)?e|K:s||n?i&h?e|G:e&y?e|k:y:O}});function ft(){I.apply(this,arguments),this.pX=null,this.pY=null}g(ft,I,{defaults:{event:"pan",threshold:10,pointers:1,direction:xt},getTouchAction:function(){var t=this.options.direction,e=[];return t&C&&e.push(Q),t&x&&e.push(Z),e},directionTest:function(t){var e=this.options,i=!0,s=t.distance,n=t.direction,r=t.deltaX,o=t.deltaY;return n&e.direction||(e.direction&C?(n=r===0?nt:r<0?W:J,i=r!=this.pX,s=Math.abs(t.deltaX)):(n=o===0?nt:o<0?z:j,i=o!=this.pY,s=Math.abs(t.deltaY))),t.direction=n,i&&s>e.threshold&&n&e.direction},attrTest:function(t){return I.prototype.attrTest.call(this,t)&&(this.state&y||!(this.state&y)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=$t(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Ct(){I.apply(this,arguments)}g(Ct,I,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[q]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&y)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Ot(){M.apply(this,arguments),this._timer=null,this._input=null}g(Ot,M,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Qt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,s=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!s||!i||t.eventType&(h|T)&&!n)this.reset();else if(t.eventType&d)this.reset(),this._timer=mt(function(){this.state=D,this.tryEmit()},e.time,this);else if(t.eventType&h)return D;return O},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===D&&(t&&t.eventType&h?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=vt(),this.manager.emit(this.options.event,this._input)))}});function Nt(){I.apply(this,arguments)}g(Nt,I,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[q]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&y)}});function At(){I.apply(this,arguments)}g(At,I,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:C|x,pointers:1},getTouchAction:function(){return ft.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(C|x)?i=t.overallVelocity:e&C?i=t.overallVelocityX:e&x&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&w(i)>this.options.velocity&&t.eventType&h},emit:function(t){var e=$t(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function dt(){M.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}g(dt,M,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[_t]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,s=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&d&&this.count===0)return this.failTimeout();if(s&&n&&i){if(t.eventType!=h)return this.failTimeout();var r=this.pTime?t.timeStamp-this.pTime<e.interval:!0,o=!this.pCenter||at(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!o||!r?this.count=1:this.count+=1,this._input=t;var c=this.count%e.taps;if(c===0)return this.hasRequireFailures()?(this._timer=mt(function(){this.state=D,this.tryEmit()},e.interval,this),y):D}return O},failTimeout:function(){return this._timer=mt(function(){this.state=O},this.options.interval,this),O},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==D&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function R(t,e){return e=e||{},e.recognizers=Rt(e.recognizers,R.defaults.preset),new bt(t,e)}R.VERSION="2.0.7",R.defaults={domEvents:!1,touchAction:Zt,enable:!0,inputTarget:null,inputClass:null,preset:[[Nt,{enable:!1}],[Ct,{enable:!1},["rotate"]],[At,{direction:C}],[ft,{direction:C},["swipe"]],[dt],[dt,{event:"doubletap",taps:2},["tap"]],[Ot]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var xe=1,te=2;function bt(t,e){this.options=S({},R.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=de(this),this.touchAction=new St(this,this.options.touchAction),ee(this,!0),b(this.options.recognizers,function(i){var s=this.add(new i[0](i[1]));i[2]&&s.recognizeWith(i[2]),i[3]&&s.requireFailure(i[3])},this)}bt.prototype={set:function(t){return S(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?te:xe},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,s=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&D)&&(n=e.curRecognizer=null);for(var r=0;r<s.length;)i=s[r],e.stopped!==te&&(!n||i==n||i.canRecognizeWith(n))?i.recognize(t):i.reset(),!n&&i.state&(y|k|G)&&(n=e.curRecognizer=i),r++}},get:function(t){if(t instanceof M)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(B(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(B(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=X(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==l&&e!==l){var i=this.handlers;return b(et(t),function(s){i[s]=i[s]||[],i[s].push(e)}),this}},off:function(t,e){if(t!==l){var i=this.handlers;return b(et(t),function(s){e?i[s]&&i[s].splice(X(i[s],e),1):delete i[s]}),this}},emit:function(t,e){this.options.domEvents&&qe(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var s=0;s<i.length;)i[s](e),s++}},destroy:function(){this.element&&ee(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ee(t,e){var i=t.element;if(i.style){var s;b(t.options.cssProps,function(n,r){s=st(i.style,r),e?(t.oldCssProps[s]=i.style[s],i.style[s]=n):i.style[s]=t.oldCssProps[s]||""}),e||(t.oldCssProps={})}}function qe(t,e){var i=m.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}S(R,{INPUT_START:d,INPUT_MOVE:L,INPUT_END:h,INPUT_CANCEL:T,STATE_POSSIBLE:ct,STATE_BEGAN:y,STATE_CHANGED:k,STATE_ENDED:G,STATE_RECOGNIZED:D,STATE_CANCELLED:K,STATE_FAILED:O,DIRECTION_NONE:nt,DIRECTION_LEFT:W,DIRECTION_RIGHT:J,DIRECTION_UP:z,DIRECTION_DOWN:j,DIRECTION_HORIZONTAL:C,DIRECTION_VERTICAL:x,DIRECTION_ALL:xt,Manager:bt,Input:E,TouchAction:St,TouchInput:lt,MouseInput:ot,PointerEventInput:It,TouchMouseInput:Pt,SingleTouchInput:Vt,Recognizer:M,AttrRecognizer:I,Tap:dt,Pan:ft,Swipe:At,Pinch:Ct,Rotate:Nt,Press:Ot,on:$,off:tt,each:b,merge:ne,extend:Mt,assign:S,inherit:g,bindFn:Tt,prefixed:st});var Fe=typeof a<"u"?a:typeof self<"u"?self:{};Fe.Hammer=R,typeof l=="function"&&l.amd?l(function(){return R}):A.exports?A.exports=R:a[_]=R})(window,document,"Hammer")})(se);var We=se.exports;const ie=Be(We),Je="8884/mqtt",ze="wss",je="broker.hivemq.com",Ze=30;class Qe{constructor(){u(this,"axisOrientation",-1);u(this,"isOrientationFixed",!1);u(this,"x");u(this,"y");u(this,"clientId");u(this,"isStarted",!1);u(this,"isFinished",!1);u(this,"isJoined",!1);u(this,"joinGameButton",null);u(this,"startGameButton",null);u(this,"resetGameButton",null);u(this,"playerNameInput",null);u(this,"dropButton",null);u(this,"preGameController",null);u(this,"gameController",null);u(this,"mqtt");u(this,"mc");this.x=0,this.y=0,this.clientId=btoa(new Date().getTime().toString()).slice(-9).substring(0,7),this.mqtt=new Xe(ke.connect(`${ze}://${je}:${Je}`),!1),this.mqtt.subscribe(this.mqtt.eventToClientTopic(P.ControllerMessage,v.All,this.clientId)),this.mqtt.subscribe(this.mqtt.eventToClientTopic(P.ControllerMessage,v.All,this.mqtt.broadcast)),setInterval(()=>this.broadcastUpdate(),Ze),this.loadElementsFromDOM()}loadElementsFromDOM(){var m,_,l,F,Y;this.joinGameButton=document.getElementById("join-game-button"),this.startGameButton=document.getElementById("start-game-button"),this.resetGameButton=document.getElementById("reset-game-button"),this.playerNameInput=document.getElementById("player-name"),this.preGameController=document.getElementById("setup-grid"),this.gameController=document.getElementById("game-grid");let a=document.getElementById("swipe-area");if(a!==null){this.mc=new ie.Manager(a);let pt=new ie.Swipe;this.mc.add(pt),this.setSwipeGesturesDependingOnOrientation()}this.dropButton=document.getElementById("drop"),(m=this.dropButton)==null||m.addEventListener("click",()=>this.activatePayload()),(_=this.gameController)==null||_.remove(),(l=this.joinGameButton)==null||l.addEventListener("click",()=>this.checkPermissions()),(F=this.startGameButton)==null||F.addEventListener("click",()=>this.broadcastStartGame()),(Y=this.resetGameButton)==null||Y.addEventListener("click",()=>this.broadcastResetGame()),screen.orientation.addEventListener("change",()=>this.setSwipeGesturesDependingOnOrientation()),window.addEventListener("resize",()=>this.setSwipeGesturesDependingOnOrientation())}setError(a){}clearError(){}setSwipeGesturesDependingOnOrientation(){this.mc!==void 0&&(this.mc.off("swipeup"),this.mc.off("swipedown"),this.mc.off("swipeleft"),this.mc.off("swiperight"),window.matchMedia("(orientation: portrait)").matches&&(this.mc.on("swipedown",()=>this.broadcastRotatePayloadLeft()),this.mc.on("swipeup",()=>this.broadcastRotatePayloadRight()),this.mc.on("swipeleft",()=>this.broadcastScalePayloadUp()),this.mc.on("swiperight",()=>this.broadcastScalePayloadDown())),window.matchMedia("(orientation: landscape)").matches&&(this.mc.on("swipeleft",()=>this.broadcastRotatePayloadLeft()),this.mc.on("swiperight",()=>this.broadcastRotatePayloadRight()),this.mc.on("swipeup",()=>this.broadcastScalePayloadUp()),this.mc.on("swipedown",()=>this.broadcastScalePayloadDown())))}broadcastJoinGame(){let a="anonymous";this.playerNameInput!==null&&this.playerNameInput.value!==""&&(a=this.playerNameInput.value),this.mqtt.publishClientSpecific(P.PlayerAction,v.Init,this.clientId,a),this.mqtt.on("message",(m,_)=>{const l=_.toString(),[F,Y]=this.mqtt.parseTopic(m);switch(Y){case v.ColorResponse:this.acknowledgeGameJoined(),this.setColor(l);break;case v.Start:this.startGame();break;case v.Stop:this.stopGame();break;case v.Reset:this.resetGame();break}})}broadcastStartGame(){!this.isStarted&&this.isJoined&&this.mqtt.publishClientSpecific(P.PlayerAction,v.Start,this.mqtt.broadcast,"")}broadcastUpdate(){!this.isFinished&&this.isJoined&&this.mqtt.publishClientSpecific(P.PlayerAction,v.Movement,this.clientId,Ve(this.y,0,this.x))}broadcastResetGame(){this.isFinished&&this.mqtt.publishClientSpecific(P.PlayerAction,v.Reset,this.clientId,"")}broadcastRotatePayloadLeft(){this.mqtt.publishClientSpecific(P.PlayerAction,v.RotatePayload,this.clientId,"-1")}broadcastRotatePayloadRight(){this.mqtt.publishClientSpecific(P.PlayerAction,v.RotatePayload,this.clientId,"+1")}broadcastScalePayloadUp(){this.mqtt.publishClientSpecific(P.PlayerAction,v.Scale,this.clientId,"+0.1")}broadcastScalePayloadDown(){this.mqtt.publishClientSpecific(P.PlayerAction,v.Scale,this.clientId,"-0.1")}setColor(a){document.body.style.setProperty("--player-color",a)}initEventListener(){window.addEventListener("devicemotion",a=>{a.accelerationIncludingGravity!==null&&a.accelerationIncludingGravity.x!==null&&a.accelerationIncludingGravity.y!==null&&(this.x=this.axisOrientation*a.accelerationIncludingGravity.x,this.y=this.axisOrientation*a.accelerationIncludingGravity.y)},!0)}activatePayload(){this.mqtt.publishClientSpecific(P.PlayerAction,v.Drop,this.clientId,"")}disableJoin(){this.joinGameButton!==null&&this.joinGameButton.classList.add("disabled")}enableJoin(){this.joinGameButton!==null&&this.joinGameButton.classList.remove("disabled")}disableStart(){this.startGameButton!==null&&this.startGameButton.classList.add("disabled")}enableStart(){this.startGameButton!==null&&this.startGameButton.classList.remove("disabled")}disableReset(){this.resetGameButton!==null&&this.resetGameButton.classList.add("disabled")}enableReset(){this.resetGameButton!==null&&this.resetGameButton.classList.remove("disabled")}switchToGameUi(){var a;(a=this.preGameController)==null||a.remove(),this.gameController!==null&&document.body.append(this.gameController)}switchToSetupUi(){var a;(a=this.gameController)==null||a.remove(),this.preGameController!==null&&document.body.append(this.preGameController)}acknowledgeGameJoined(){this.isJoined=!0,this.disableJoin(),this.isStarted?(this.switchToGameUi(),this.disableStart()):this.enableStart()}joinGame(){this.initEventListener(),this.clearError(),this.broadcastJoinGame()}startGame(){this.isStarted=!0,this.isJoined&&(this.switchToGameUi(),this.disableStart())}stopGame(){this.isFinished=!0,this.switchToSetupUi(),this.enableReset(),this.setColor("#ffffff")}resetGame(){this.isStarted=!1,this.isFinished=!1,this.isJoined=!1,this.enableJoin(),this.disableReset()}checkPermissions(){if(!this.isJoined)if(typeof DeviceMotionEvent<"u"){const a=DeviceOrientationEvent.requestPermission;typeof a=="function"?a().then(_=>{_==="granted"?(this.joinGame(),this.isOrientationFixed||(this.axisOrientation*=-1,this.isOrientationFixed=!0)):this.setError("You need to allow the usage of acceleration data!")}).catch(_=>{this.setError(_)}):this.joinGame()}else this.joinGame()}}new Qe;
