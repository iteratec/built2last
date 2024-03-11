import{g as Ye}from"./ammo.js-BpglqV0R.js";var Qt={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(_t){(function(u,yt,jt,l){var Pt=["","webkit","Moz","MS","ms","o"],Kt=yt.createElement("div"),$t="function",x=Math.round,S=Math.abs,at=Date.now;function ot(t,e,i){return setTimeout(ht(t,i),e)}function L(t,e,i){return Array.isArray(t)?(P(t,i[e],i),!0):!1}function P(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==l)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function Nt(t,e,i){var r="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var n=new Error("get-stack-trace"),s=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",a=u.console&&(u.console.warn||u.console.log);return a&&a.call(u.console,r,s),t.apply(this,arguments)}}var g;typeof Object.assign!="function"?g=function(e){if(e===l||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(n!==l&&n!==null)for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s])}return i}:g=Object.assign;var Ot=Nt(function(e,i,r){for(var n=Object.keys(i),s=0;s<n.length;)(!r||r&&e[n[s]]===l)&&(e[n[s]]=i[n[s]]),s++;return e},"extend","Use `assign`."),te=Nt(function(e,i){return Ot(e,i,!0)},"merge","Use `assign`.");function T(t,e,i){var r=e.prototype,n;n=t.prototype=Object.create(r),n.constructor=t,n._super=r,i&&g(n,i)}function ht(t,e){return function(){return t.apply(e,arguments)}}function lt(t,e){return typeof t==$t?t.apply(e&&e[0]||l,e):t}function At(t,e){return t===l?e:t}function k(t,e,i){P(Z(e),function(r){t.addEventListener(r,i,!1)})}function z(t,e,i){P(Z(e),function(r){t.removeEventListener(r,i,!1)})}function Ct(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function D(t,e){return t.indexOf(e)>-1}function Z(t){return t.trim().split(/\s+/g)}function H(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var r=0;r<t.length;){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}function B(t){return Array.prototype.slice.call(t,0)}function St(t,e,i){for(var r=[],n=[],s=0;s<t.length;){var a=e?t[s][e]:t[s];H(n,a)<0&&r.push(t[s]),n[s]=a,s++}return i&&(e?r=r.sort(function(c,v){return c[e]>v[e]}):r=r.sort()),r}function J(t,e){for(var i,r,n=e[0].toUpperCase()+e.slice(1),s=0;s<Pt.length;){if(i=Pt[s],r=i?i+n:e,r in t)return r;s++}return l}var ee=1;function ie(){return ee++}function Dt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||u}var re=/mobile|tablet|ip(ad|hone|od)|android/i,Mt="ontouchstart"in u,ne=J(u,"PointerEvent")!==l,se=Mt&&re.test(navigator.userAgent),b="touch",ae="pen",ct="mouse",oe="kinect",he=25,f=1,M=2,o=4,p=8,Q=1,F=2,X=4,V=8,W=16,I=F|X,U=V|W,Ut=I|U,Rt=["x","y"],j=["clientX","clientY"];function m(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){lt(t.options.enable,[t])&&i.handler(r)},this.init()}m.prototype={handler:function(){},init:function(){this.evEl&&k(this.element,this.evEl,this.domHandler),this.evTarget&&k(this.target,this.evTarget,this.domHandler),this.evWin&&k(Dt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&z(this.element,this.evEl,this.domHandler),this.evTarget&&z(this.target,this.evTarget,this.domHandler),this.evWin&&z(Dt(this.element),this.evWin,this.domHandler)}};function le(t){var e,i=t.options.inputClass;return i?e=i:ne?e=ft:se?e=tt:Mt?e=vt:e=$,new e(t,ce)}function ce(t,e,i){var r=i.pointers.length,n=i.changedPointers.length,s=e&f&&r-n===0,a=e&(o|p)&&r-n===0;i.isFirst=!!s,i.isFinal=!!a,s&&(t.session={}),i.eventType=e,ue(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function ue(t,e){var i=t.session,r=e.pointers,n=r.length;i.firstInput||(i.firstInput=xt(e)),n>1&&!i.firstMultiple?i.firstMultiple=xt(e):n===1&&(i.firstMultiple=!1);var s=i.firstInput,a=i.firstMultiple,h=a?a.center:s.center,c=e.center=Lt(r);e.timeStamp=at(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=ut(h,c),e.distance=K(h,c),fe(i,e),e.offsetDirection=Yt(e.deltaX,e.deltaY);var v=Ht(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=v.x,e.overallVelocityY=v.y,e.overallVelocity=S(v.x)>S(v.y)?v.x:v.y,e.scale=a?Te(a.pointers,r):1,e.rotation=a?pe(a.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,ve(i,e);var y=t.element;Ct(e.srcEvent.target,y)&&(y=e.srcEvent.target),e.target=y}function fe(t,e){var i=e.center,r=t.offsetDelta||{},n=t.prevDelta||{},s=t.prevInput||{};(e.eventType===f||s.eventType===o)&&(n=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},r=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-r.x),e.deltaY=n.y+(i.y-r.y)}function ve(t,e){var i=t.lastInterval||e,r=e.timeStamp-i.timeStamp,n,s,a,h;if(e.eventType!=p&&(r>he||i.velocity===l)){var c=e.deltaX-i.deltaX,v=e.deltaY-i.deltaY,y=Ht(r,c,v);s=y.x,a=y.y,n=S(y.x)>S(y.y)?y.x:y.y,h=Yt(c,v),t.lastInterval=e}else n=i.velocity,s=i.velocityX,a=i.velocityY,h=i.direction;e.velocity=n,e.velocityX=s,e.velocityY=a,e.direction=h}function xt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:x(t.pointers[i].clientX),clientY:x(t.pointers[i].clientY)},i++;return{timeStamp:at(),pointers:e,center:Lt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Lt(t){var e=t.length;if(e===1)return{x:x(t[0].clientX),y:x(t[0].clientY)};for(var i=0,r=0,n=0;n<e;)i+=t[n].clientX,r+=t[n].clientY,n++;return{x:x(i/e),y:x(r/e)}}function Ht(t,e,i){return{x:e/t||0,y:i/t||0}}function Yt(t,e){return t===e?Q:S(t)>=S(e)?t<0?F:X:e<0?V:W}function K(t,e,i){i||(i=Rt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(r*r+n*n)}function ut(t,e,i){i||(i=Rt);var r=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.atan2(n,r)*180/Math.PI}function pe(t,e){return ut(e[1],e[0],j)+ut(t[1],t[0],j)}function Te(t,e){return K(e[0],e[1],j)/K(t[0],t[1],j)}var me={mousedown:f,mousemove:M,mouseup:o},de="mousedown",Ee="mousemove mouseup";function $(){this.evEl=de,this.evWin=Ee,this.pressed=!1,m.apply(this,arguments)}T($,m,{handler:function(e){var i=me[e.type];i&f&&e.button===0&&(this.pressed=!0),i&M&&e.which!==1&&(i=o),this.pressed&&(i&o&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:ct,srcEvent:e}))}});var ge={pointerdown:f,pointermove:M,pointerup:o,pointercancel:p,pointerout:p},Ie={2:b,3:ae,4:ct,5:oe},bt="pointerdown",Ft="pointermove pointerup pointercancel";u.MSPointerEvent&&!u.PointerEvent&&(bt="MSPointerDown",Ft="MSPointerMove MSPointerUp MSPointerCancel");function ft(){this.evEl=bt,this.evWin=Ft,m.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}T(ft,m,{handler:function(e){var i=this.store,r=!1,n=e.type.toLowerCase().replace("ms",""),s=ge[n],a=Ie[e.pointerType]||e.pointerType,h=a==b,c=H(i,e.pointerId,"pointerId");s&f&&(e.button===0||h)?c<0&&(i.push(e),c=i.length-1):s&(o|p)&&(r=!0),!(c<0)&&(i[c]=e,this.callback(this.manager,s,{pointers:i,changedPointers:[e],pointerType:a,srcEvent:e}),r&&i.splice(c,1))}});var _e={touchstart:f,touchmove:M,touchend:o,touchcancel:p},ye="touchstart",Pe="touchstart touchmove touchend touchcancel";function Xt(){this.evTarget=ye,this.evWin=Pe,this.started=!1,m.apply(this,arguments)}T(Xt,m,{handler:function(e){var i=_e[e.type];if(i===f&&(this.started=!0),!!this.started){var r=Ne.call(this,e,i);i&(o|p)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:b,srcEvent:e})}}});function Ne(t,e){var i=B(t.touches),r=B(t.changedTouches);return e&(o|p)&&(i=St(i.concat(r),"identifier",!0)),[i,r]}var Oe={touchstart:f,touchmove:M,touchend:o,touchcancel:p},Ae="touchstart touchmove touchend touchcancel";function tt(){this.evTarget=Ae,this.targetIds={},m.apply(this,arguments)}T(tt,m,{handler:function(e){var i=Oe[e.type],r=Ce.call(this,e,i);r&&this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:b,srcEvent:e})}});function Ce(t,e){var i=B(t.touches),r=this.targetIds;if(e&(f|M)&&i.length===1)return r[i[0].identifier]=!0,[i,i];var n,s,a=B(t.changedTouches),h=[],c=this.target;if(s=i.filter(function(v){return Ct(v.target,c)}),e===f)for(n=0;n<s.length;)r[s[n].identifier]=!0,n++;for(n=0;n<a.length;)r[a[n].identifier]&&h.push(a[n]),e&(o|p)&&delete r[a[n].identifier],n++;if(h.length)return[St(s.concat(h),"identifier",!0),h]}var Se=2500,Vt=25;function vt(){m.apply(this,arguments);var t=ht(this.handler,this);this.touch=new tt(this.manager,t),this.mouse=new $(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}T(vt,m,{handler:function(e,i,r){var n=r.pointerType==b,s=r.pointerType==ct;if(!(s&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(n)De.call(this,i,r);else if(s&&Me.call(this,r))return;this.callback(e,i,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function De(t,e){t&f?(this.primaryTouch=e.changedPointers[0].identifier,Wt.call(this,e)):t&(o|p)&&Wt.call(this,e)}function Wt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var r=this.lastTouches,n=function(){var s=r.indexOf(i);s>-1&&r.splice(s,1)};setTimeout(n,Se)}}function Me(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var n=this.lastTouches[r],s=Math.abs(e-n.x),a=Math.abs(i-n.y);if(s<=Vt&&a<=Vt)return!0}return!1}var qt=J(Kt.style,"touchAction"),wt=qt!==l,Gt="compute",kt="auto",pt="manipulation",R="none",q="pan-x",w="pan-y",et=Re();function Tt(t,e){this.manager=t,this.set(e)}Tt.prototype={set:function(t){t==Gt&&(t=this.compute()),wt&&this.manager.element.style&&et[t]&&(this.manager.element.style[qt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return P(this.manager.recognizers,function(e){lt(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Ue(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,n=D(r,R)&&!et[R],s=D(r,w)&&!et[w],a=D(r,q)&&!et[q];if(n){var h=t.pointers.length===1,c=t.distance<2,v=t.deltaTime<250;if(h&&c&&v)return}if(!(a&&s)&&(n||s&&i&I||a&&i&U))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Ue(t){if(D(t,R))return R;var e=D(t,q),i=D(t,w);return e&&i?R:e||i?e?q:w:D(t,pt)?pt:kt}function Re(){if(!wt)return!1;var t={},e=u.CSS&&u.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?u.CSS.supports("touch-action",i):!0}),t}var it=1,d=2,Y=4,C=8,N=C,G=16,_=32;function O(t){this.options=g({},this.defaults,t||{}),this.id=ie(),this.manager=null,this.options.enable=At(this.options.enable,!0),this.state=it,this.simultaneous={},this.requireFail=[]}O.prototype={defaults:{},set:function(t){return g(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(L(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=rt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return L(t,"dropRecognizeWith",this)?this:(t=rt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(L(t,"requireFailure",this))return this;var e=this.requireFail;return t=rt(t,this),H(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(L(t,"dropRequireFailure",this))return this;t=rt(t,this);var e=H(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function r(n){e.manager.emit(n,t)}i<C&&r(e.options.event+zt(i)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),i>=C&&r(e.options.event+zt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=_},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(_|it)))return!1;t++}return!0},recognize:function(t){var e=g({},t);if(!lt(this.options.enable,[this,e])){this.reset(),this.state=_;return}this.state&(N|G|_)&&(this.state=it),this.state=this.process(e),this.state&(d|Y|C|G)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function zt(t){return t&G?"cancel":t&C?"end":t&Y?"move":t&d?"start":""}function Zt(t){return t==W?"down":t==V?"up":t==F?"left":t==X?"right":""}function rt(t,e){var i=e.manager;return i?i.get(t):t}function E(){O.apply(this,arguments)}T(E,O,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,r=e&(d|Y),n=this.attrTest(t);return r&&(i&p||!n)?e|G:r||n?i&o?e|C:e&d?e|Y:d:_}});function nt(){E.apply(this,arguments),this.pX=null,this.pY=null}T(nt,E,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ut},getTouchAction:function(){var t=this.options.direction,e=[];return t&I&&e.push(w),t&U&&e.push(q),e},directionTest:function(t){var e=this.options,i=!0,r=t.distance,n=t.direction,s=t.deltaX,a=t.deltaY;return n&e.direction||(e.direction&I?(n=s===0?Q:s<0?F:X,i=s!=this.pX,r=Math.abs(t.deltaX)):(n=a===0?Q:a<0?V:W,i=a!=this.pY,r=Math.abs(t.deltaY))),t.direction=n,i&&r>e.threshold&&n&e.direction},attrTest:function(t){return E.prototype.attrTest.call(this,t)&&(this.state&d||!(this.state&d)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Zt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function mt(){E.apply(this,arguments)}T(mt,E,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[R]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&d)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function dt(){O.apply(this,arguments),this._timer=null,this._input=null}T(dt,O,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[kt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!r||!i||t.eventType&(o|p)&&!n)this.reset();else if(t.eventType&f)this.reset(),this._timer=ot(function(){this.state=N,this.tryEmit()},e.time,this);else if(t.eventType&o)return N;return _},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===N&&(t&&t.eventType&o?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=at(),this.manager.emit(this.options.event,this._input)))}});function Et(){E.apply(this,arguments)}T(Et,E,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[R]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&d)}});function gt(){E.apply(this,arguments)}T(gt,E,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:I|U,pointers:1},getTouchAction:function(){return nt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(I|U)?i=t.overallVelocity:e&I?i=t.overallVelocityX:e&U&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&S(i)>this.options.velocity&&t.eventType&o},emit:function(t){var e=Zt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function st(){O.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}T(st,O,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[pt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&f&&this.count===0)return this.failTimeout();if(r&&n&&i){if(t.eventType!=o)return this.failTimeout();var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,a=!this.pCenter||K(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!a||!s?this.count=1:this.count+=1,this._input=t;var h=this.count%e.taps;if(h===0)return this.hasRequireFailures()?(this._timer=ot(function(){this.state=N,this.tryEmit()},e.interval,this),d):N}return _},failTimeout:function(){return this._timer=ot(function(){this.state=_},this.options.interval,this),_},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==N&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function A(t,e){return e=e||{},e.recognizers=At(e.recognizers,A.defaults.preset),new It(t,e)}A.VERSION="2.0.7",A.defaults={domEvents:!1,touchAction:Gt,enable:!0,inputTarget:null,inputClass:null,preset:[[Et,{enable:!1}],[mt,{enable:!1},["rotate"]],[gt,{direction:I}],[nt,{direction:I},["swipe"]],[st],[st,{event:"doubletap",taps:2},["tap"]],[dt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var xe=1,Bt=2;function It(t,e){this.options=g({},A.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=le(this),this.touchAction=new Tt(this,this.options.touchAction),Jt(this,!0),P(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}It.prototype={set:function(t){return g(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Bt:xe},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,r=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&N)&&(n=e.curRecognizer=null);for(var s=0;s<r.length;)i=r[s],e.stopped!==Bt&&(!n||i==n||i.canRecognizeWith(n))?i.recognize(t):i.reset(),!n&&i.state&(d|Y|C)&&(n=e.curRecognizer=i),s++}},get:function(t){if(t instanceof O)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(L(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(L(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=H(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==l&&e!==l){var i=this.handlers;return P(Z(t),function(r){i[r]=i[r]||[],i[r].push(e)}),this}},off:function(t,e){if(t!==l){var i=this.handlers;return P(Z(t),function(r){e?i[r]&&i[r].splice(H(i[r],e),1):delete i[r]}),this}},emit:function(t,e){this.options.domEvents&&Le(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](e),r++}},destroy:function(){this.element&&Jt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Jt(t,e){var i=t.element;if(i.style){var r;P(t.options.cssProps,function(n,s){r=J(i.style,s),e?(t.oldCssProps[r]=i.style[r],i.style[r]=n):i.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function Le(t,e){var i=yt.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}g(A,{INPUT_START:f,INPUT_MOVE:M,INPUT_END:o,INPUT_CANCEL:p,STATE_POSSIBLE:it,STATE_BEGAN:d,STATE_CHANGED:Y,STATE_ENDED:C,STATE_RECOGNIZED:N,STATE_CANCELLED:G,STATE_FAILED:_,DIRECTION_NONE:Q,DIRECTION_LEFT:F,DIRECTION_RIGHT:X,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:I,DIRECTION_VERTICAL:U,DIRECTION_ALL:Ut,Manager:It,Input:m,TouchAction:Tt,TouchInput:tt,MouseInput:$,PointerEventInput:ft,TouchMouseInput:vt,SingleTouchInput:Xt,Recognizer:O,AttrRecognizer:E,Tap:st,Pan:nt,Swipe:gt,Pinch:mt,Rotate:Et,Press:dt,on:k,off:z,each:P,merge:te,extend:Ot,assign:g,inherit:T,bindFn:ht,prefixed:J});var He=typeof u<"u"?u:typeof self<"u"?self:{};He.Hammer=A,typeof l=="function"&&l.amd?l(function(){return A}):_t.exports?_t.exports=A:u[jt]=A})(window,document,"Hammer")})(Qt);var be=Qt.exports;const Xe=Ye(be);export{Xe as H};
