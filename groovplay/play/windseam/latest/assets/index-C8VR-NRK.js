(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ue=(i,t)=>t.map(([e,n])=>({kind:i,x:e,z:n})),hi=(i,t,e,n,s,r)=>({title:i,name:t,subtitle:e,tip:e,spawns:n,types:n.map(a=>a.kind),terrain:s,color:r}),wn=[hi("01 · 잠든 뜰","첫 실을 잇다","E로 엮고 Q로 당기세요. 장력 60에서 R — 100이 되기 전에 끊어내세요.",Ue("knot",[[-4,0],[0,-2],[4,0],[-3,-7],[3,-7]]),[{x:0,z:-5,radius:1.1,kind:"root"}],10796464),hi("02 · 종의 회랑","사선을 끊다","기둥으로 울림탄을 막으세요. 청록색 실은 연결, 붉은 실은 과부하 경고입니다.",[...Ue("knot",[[-7,2],[7,2],[-6,-5],[6,-5],[0,-2],[1,-7]]),...Ue("chime",[[-8,-8],[8,-8]])],[{x:-4,z:-2,radius:1.3,kind:"pillar"},{x:4,z:-2,radius:1.3,kind:"pillar"},{x:0,z:-7,radius:1.2,kind:"root"}],10267573),hi("03 · 닫힌 손","방패의 뒤편","방패는 뒤의 적도 지킵니다. 3타·공격 직전 E로 균형을 무너뜨리세요.",[...Ue("guard",[[-3,-1],[3,-1]]),...Ue("chime",[[-4,-7],[4,-7]]),...Ue("knot",[[-9,2],[9,2],[-7,-5],[7,-5],[0,-4],[0,-9]])],[{x:-7,z:-1,radius:1.15,kind:"pillar"},{x:7,z:-1,radius:1.15,kind:"pillar"},{x:0,z:-1,radius:1.2,kind:"root"}],11252635),hi("04 · 갈라진 목소리","남길 것과 끊을 것","울림꾼의 연주는 주변 적을 강화합니다. 무리를 붙잡을지 연주부터 끊을지 선택하세요.",[...Ue("guard",[[-7,-2],[7,-2]]),...Ue("chime",[[-9,-6],[9,-6],[0,-10]]),...Ue("knot",[[-3,2],[3,2],[-5,-4],[5,-4],[-1,-6],[1,-6],[-8,6],[8,6]])],[{x:0,z:0,radius:1.8,kind:"pillar"},{x:-5,z:-6,radius:1,kind:"root"},{x:5,z:-6,radius:1,kind:"root"}],11642805),hi("05 · 절단자의 문","되돌아오는 칼날","절단자의 돌진은 두 번입니다. 첫 공격을 피한 뒤 돌아오는 칼날을 읽으세요.",[...Ue("elite",[[0,-7]]),...Ue("guard",[[-6,-4],[6,-4]]),...Ue("chime",[[-9,-8],[9,-8],[0,-11]]),...Ue("knot",Array.from({length:14},(i,t)=>[Math.sin(t*2.4)*(6+t%4),Math.cos(t*2.4)*(6+t%4)]))],[{x:-5,z:1,radius:1.1,kind:"pillar"},{x:5,z:1,radius:1.1,kind:"pillar"},{x:0,z:-3,radius:1.25,kind:"root"}],8625323),hi("06 · 품 안의 폭풍","세 매듭을 풀어라","청록 울림에 Q → 드러난 심장을 E → 장력 60 이상 R. 세 봉인을 풀어 소리에게 가세요.",[...Ue("boss",[[0,-4]]),...Ue("knot",[[-6,0],[6,0],[-4,-8],[4,-8]])],[{x:-9,z:-1,radius:1.2,kind:"pillar"},{x:9,z:-1,radius:1.2,kind:"pillar"}],7442077)],Bo=[{speaker:"이음",line:"소리야. 우리 함께 이 풍경을 울리기로 했지. 네가 남긴 실부터 찾아갈게."},{speaker:"소리",line:"방금 꽃이 된 뿌리, 기억나? 우리가 숨던 자리야. 이번에는 내가 네 길을 비출게."},{speaker:"소리",line:"내 목소리를 지키겠다던 손이, 다른 마음까지 가리고 있어. 닫힌 손의 균형을 풀어 줘."},{speaker:"이음",line:"모든 실을 오래 붙잡을수록 더 아프구나. 돌아오게 하려면, 놓아야 할 순간도 있겠지."},{speaker:"소리",line:"돌아오는 칼날 뒤에 잠깐의 틈이 있어. 나는 여기 있어. 네 발소리를 듣고 있어."},{speaker:"이음",line:"세 매듭을 풀고 네게 갈게. 이번에는 네 손을 잡고, 함께 풍경을 울리자."}],wr={garden:{name:"정원사의 손",role:"앵커 · 장력 유지 · 복원",steps:["당기기 앵커가 3초간 남아 무리를 붙잡습니다. 강한 해방은 치유 샘을 만듭니다.","앵커 안에서는 과부하가 늦어집니다. 당기기 범위가 넓어지고 뿌리 복원 시 회복합니다.","앵커의 적에게 강한 해방 피해 +25%. 치유 샘에 머물면 표식이 오래 유지됩니다."]},trail:{name:"길잡이의 발",role:"회피 궤적 · 추적 · 반격",steps:["회피한 경로에 실이 남아 적을 엮습니다. 기본 3타도 표식을 새깁니다.","완벽 회피 뒤 다음 베기는 즉시 3타. 실 경로를 지나는 적의 균형이 무너집니다.","연결된 적 사이의 파열 전파 거리가 늘어납니다. 완벽 회피 뒤 강한 해방 피해 +25%."]}},sr=[{duration:.34,hit:.11,lockStart:0,lockEnd:0,move:.7,reach:2.7,arc:1.35,damage:25,push:.8},{duration:.41,hit:.16,lockStart:0,lockEnd:0,move:.6,reach:2.9,arc:1.5,damage:32,push:1.1},{duration:.68,hit:.34,lockStart:.23,lockEnd:.4,move:.22,reach:3.3,arc:.85,damage:58,push:3.8}],ko={gather:{duration:.55,hit:.19,lockStart:0,lockEnd:0,move:.55,reach:8,arc:Math.PI,damage:8,push:0},weave:{duration:.48,hit:.16,lockStart:0,lockEnd:0,move:.65,reach:5.6,arc:Math.PI,damage:16,push:0},bloom:{duration:.9,hit:.48,lockStart:.32,lockEnd:.56,move:.18,reach:6.5,arc:Math.PI,damage:0,push:5},dodge:{duration:.29,hit:0,lockStart:0,lockEnd:0,move:0,reach:0,arc:0,damage:0,push:0}},ce={speed:7.2,dodgeSpeed:22,dodgeInvuln:.19,buffer:.32,arena:15.3,cooldowns:{attack:0,gather:5.2,weave:4.6,bloom:4.8,dodge:1.3},hp:{knot:110,chime:135,guard:235,elite:440,boss:900},radius:{knot:.65,chime:.65,guard:1,elite:1.1,boss:2},posture:{knot:45,chime:38,guard:95,elite:120,boss:180},linkRange:4.6,markTime:8},ae=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),da=(i,t,e)=>Math.max(t,Math.min(e,i)),Be=(i,t)=>Math.atan2(t.x-i.x,t.z-i.z),Ji=(i,t,e,n,s)=>ae(i,e)<n&&Math.cos(Be(i,e)-t)>Math.cos(s),Ki=(i,t,e)=>{const n=e.x-t.x,s=e.z-t.z,r=da(((i.x-t.x)*n+(i.z-t.z)*s)/(n*n+s*s||1),0,1);return Math.hypot(i.x-t.x-n*r,i.z-t.z-s*r)};function ah(i){if(!i||typeof i!="object")return null;const t=i;if(t.version!==1||!Number.isInteger(t.stage)||t.stage<0||t.stage>5||!Array.isArray(t.builds)||t.builds.length>3||t.builds.some(n=>n!=="garden"&&n!=="trail")||!["hub","rest","choice","finale","won"].includes(t.phase)||!Number.isInteger(t.rescued)||t.rescued<0||!Number.isInteger(t.clears)||t.clears<0||t.phase==="choice"&&![1,3,4].includes(t.stage)||["won","finale"].includes(t.phase)&&t.stage!==5||t.phase==="hub"&&t.stage!==0||t.phase==="rest"&&t.stage===0)return null;const e=["won","finale"].includes(t.phase)?3:[0,0,1,1,2,3][t.stage];return t.builds.length!==e?null:{...t,builds:[...t.builds]}}class oh{stage=0;builds=[];rescued=0;clears=0;phase="hub";time=0;elapsed=0;player={x:0,z:9,angle:Math.PI,hp:140,max:140,invuln:0,hit:0,vx:0,vz:0,counter:0};enemies=[];events=[];flowers=[];obstacles=[];hazards=[];threads=[];chains=[];anchor=null;sanctuaries=[];action=null;buffer=null;cooldowns={attack:0,gather:0,weave:0,bloom:0,dodge:0};combo=0;comboUntil=-1;serial=0;enemyId=0;spawnGrace=0;bossPhase=0;seals=0;stageRescued=0;clearTimer=1.2;hitstop=0;bestChain=0;hits=0;dodges=0;perfects=0;tension=0;overloads=0;strongReleases=0;lastRelease=0;rejection="";targetId=0;restoredRoots=0;dodgePerfect=!1;releaseQueue=new Set;input={x:0,z:0,aim:null,attack:!1};onSave=null;get garden(){return this.builds.filter(t=>t==="garden").length}get trail(){return this.builds.filter(t=>t==="trail").length}get marked(){return this.enemies.filter(t=>t.hp>0&&t.mark>0)}get timeline(){return this.action?this.action.kind==="attack"?sr[this.action.combo]:ko[this.action.kind]:null}get committed(){const t=this.action,e=this.timeline;return!!(t&&e&&t.t>=e.lockStart&&t.t<e.lockEnd)}constructor(t){t?this.restore(t):this.prepareTerrain()}prepareTerrain(){this.obstacles=wn[this.stage].terrain.map((t,e)=>({...t,id:e,restored:this.phase==="won"||this.phase==="finale"}))}restore(t){this.stage=t.stage,this.builds=[...t.builds],this.rescued=t.rescued,this.clears=t.clears,this.phase=t.phase,this.resetCombat(),this.populateFlowers(),this.prepareTerrain(),["finale","won"].includes(t.phase)&&(this.seals=3)}snapshot(){return{version:1,stage:this.stage,builds:[...this.builds],rescued:this.rescued,phase:this.phase==="won"?"won":this.phase==="finale"?"finale":this.phase==="choice"?"choice":this.stage===0?"hub":"rest",clears:this.clears}}save(){this.onSave?.(this.snapshot())}resetCombat(){this.enemies=[],this.events=[],this.hazards=[],this.threads=[],this.chains=[],this.releaseQueue.clear(),this.action=null,this.buffer=null,this.anchor=null,this.cooldowns={attack:0,gather:0,weave:0,bloom:0,dodge:0},this.player={x:0,z:9,angle:Math.PI,hp:140+this.garden*12,max:140+this.garden*12,invuln:0,hit:0,vx:0,vz:0,counter:0},this.clearInput(),this.combo=0,this.comboUntil=-1,this.stageRescued=0,this.clearTimer=1.2,this.bossPhase=0,this.seals=0,this.tension=0,this.hitstop=0,this.sanctuaries=[],this.prepareTerrain()}clearInput(){this.input={x:0,z:0,aim:null,attack:!1},this.buffer=null}newRun(){const t=this.clears;this.restore({version:1,stage:0,builds:[],rescued:0,phase:"hub",clears:t}),this.elapsed=0,this.bestChain=0,this.hits=0,this.dodges=0,this.perfects=0,this.overloads=0,this.strongReleases=0,this.restoredRoots=0,this.save()}start(){if(!["hub","rest"].includes(this.phase))return!1;this.resetCombat(),this.phase="fight",this.spawnGrace=1.4;for(const t of wn[this.stage].spawns)this.spawn(t.kind,t.x,t.z);return this.emit("begin"),!0}retry(){this.phase==="dead"&&(this.phase=this.stage===0?"hub":"rest",this.populateFlowers(),this.start())}spawn(t,e,n){const s=ce.hp[t],r={id:++this.enemyId,kind:t,x:e,z:n,hp:s,max:s,angle:0,state:"chase",timer:.6+this.enemyId%5*.2,mark:0,hit:0,deadTime:0,target:{x:0,z:0},pattern:0,staggerLock:0,posture:ce.posture[t],broken:0,rage:0,vx:0,vz:0,pull:null,pullTime:0,buffed:!1,attackOrigin:{x:e,z:n},attackAngle:0,strikeHit:!1,serial:0};return this.enemies.push(r),this.move(r,0,0),r}choose(t){return this.phase!=="choice"?!1:(this.builds.push(t),this.stage++,this.phase="rest",this.resetCombat(),this.save(),!0)}next(){return this.start()}populateFlowers(){this.flowers=Array.from({length:Math.min(this.rescued,120)},(t,e)=>({x:Math.sin(e*2.399)*(e%11+2),z:Math.cos(e*2.399)*(e%11+2)}))}emit(t,e=this.player.x,n=this.player.z,s={}){this.events.push({type:t,x:e,z:n,...s})}reject(t){return this.rejection=t,"rejected"}request(t){return this.phase==="finale"&&t==="gather"?ae(this.player,{x:0,z:-10})>3?this.reject("소리의 빛 가까이 다가가세요"):(this.phase="won",this.clears++,this.clearInput(),this.save(),this.emit("reunion",0,-10),"accepted"):this.phase!=="fight"||this.player.hp<=0?this.reject("전투 중에 사용할 수 있어요"):this.cooldowns[t]>.02?this.reject("아직 준비 중"):t==="bloom"&&this.marked.length===0?this.reject("먼저 적을 엮으세요"):this.player.hit>.14?this.reject("자세를 회복하는 중"):t==="dodge"&&!this.committed?(this.begin(t),"accepted"):this.action?(this.buffer={kind:t,expires:this.time+ce.buffer},"queued"):(this.begin(t),"accepted")}selectTarget(){const t=this.player,e=this.input.aim,n=Math.hypot(this.input.x,this.input.z)>.2;let s,r=1/0;for(const a of this.enemies){if(a.hp<=0)continue;const o=ae(a,t);if(o>12)continue;const l=e?ae(a,e)*.8:n?(1-Math.cos(Be(t,a)-Math.atan2(this.input.x,this.input.z)))*3:0,c=o+l-(a.id===this.targetId?.7:0);c<r&&(r=c,s=a)}return this.targetId=s?.id||0,s}begin(t){t==="attack"&&(this.combo=this.time<=this.comboUntil?(this.combo+1)%3:0,this.trail>=2&&this.player.counter>0&&(this.combo=2),this.comboUntil=this.time+1.1);const e=this.selectTarget();let n=this.player.angle;t==="dodge"?(Math.hypot(this.input.x,this.input.z)>.1&&(n=Math.atan2(this.input.x,this.input.z)),this.player.invuln=ce.dodgeInvuln,this.dodges++,this.dodgePerfect=!1,this.emit("dodge",this.player.x,this.player.z,{angle:n})):this.input.aim&&ae(this.player,this.input.aim)>.2?n=Be(this.player,this.input.aim):e&&(n=Be(this.player,e)),this.player.angle=n;const s=t==="attack"?sr[this.combo]:ko[t];this.action={kind:t,t:0,duration:s.duration,serial:++this.serial,combo:this.combo,fired:new Set,start:{x:this.player.x,z:this.player.z},angle:n},this.cooldowns[t]=ce.cooldowns[t],this.buffer=null,this.rejection="",this.emit("action",this.player.x,this.player.z,{text:t,angle:n,value:this.combo})}update(t){if(t=Math.min(t,.05),["hub","rest","finale"].includes(this.phase)){this.time+=t,this.move(this.player,this.input.x*ce.speed*t,this.input.z*ce.speed*t),Math.hypot(this.input.x,this.input.z)>.1&&(this.player.angle=Math.atan2(this.input.x,this.input.z));return}if(this.phase!=="fight")return;if(this.hitstop>0){this.hitstop=Math.max(0,this.hitstop-t);return}this.time+=t,this.elapsed+=t,this.spawnGrace=Math.max(0,this.spawnGrace-t);for(const c of Object.keys(this.cooldowns))this.cooldowns[c]=Math.max(0,this.cooldowns[c]-t);const e=this.player;e.invuln=Math.max(0,e.invuln-t),e.hit=Math.max(0,e.hit-t),e.counter=Math.max(0,e.counter-t);for(const c of this.sanctuaries)if(c.life-=t,c.tick+=t,c.tick>=.5&&(c.tick=0,ae(c,e)<3&&(e.hp=Math.min(e.max,e.hp+3),this.garden>=3)))for(const h of this.marked)ae(h,c)<4&&(h.mark=Math.max(h.mark,3));if(this.sanctuaries=this.sanctuaries.filter(c=>c.life>0),this.anchor){if(this.anchor.life-=t,this.anchor.life<=0)this.anchor=null;else if(this.garden)for(const c of this.enemies)c.hp>0&&c.kind!=="boss"&&!(c.kind==="guard"&&c.broken<=0)&&ae(c,this.anchor)<4&&(c.pull={x:this.anchor.x,z:this.anchor.z},c.pullTime=.08)}for(const c of this.threads){c.life-=t;for(const h of this.enemies)h.hp>0&&!c.hit.has(h.id)&&Ki(h,c,c.end)<.85&&(c.hit.add(h.id),h.mark=ce.markTime,this.addTension(7),this.trail>=2&&this.breakPosture(h,35),this.damage(h,18,"trail"))}if(this.threads=this.threads.filter(c=>c.life>0),this.buffer&&this.buffer.expires<this.time&&(this.buffer=null),this.action&&this.buffer?.kind==="dodge"&&!this.committed&&this.action.kind!=="dodge"&&(this.buffer=null,this.request("dodge")),!this.action&&this.buffer){const c=this.buffer.kind;this.buffer=null,this.request(c)}!this.action&&this.input.attack&&e.hit<=.14&&this.request("attack");const n=this.action,s=this.timeline;let r=1;if(n&&s){if(n.t+=t,r=s.move,n.kind==="dodge"){const c={x:e.x,z:e.z};this.move(e,Math.sin(n.angle)*ce.dodgeSpeed*t,Math.cos(n.angle)*ce.dodgeSpeed*t),this.trail&&this.threads.length<32&&this.threads.push({...c,end:{x:e.x,z:e.z},life:1.6,hit:n.fired})}else n.t>=s.hit&&!n.fired.has(0)&&(n.fired.add(0),this.resolve(n.kind,n.combo,0));n.t>=n.duration&&(this.action=null)}const a=Math.max(1,Math.hypot(this.input.x,this.input.z));e.hit>.14&&(r=.15),this.move(e,(this.input.x/a*ce.speed*r+e.vx)*t,(this.input.z/a*ce.speed*r+e.vz)*t),e.vx*=Math.exp(-t*12),e.vz*=Math.exp(-t*12),!n&&a>1&&(this.player.angle=Math.atan2(this.input.x,this.input.z));for(const c of[...this.enemies])this.enemyUpdate(c,t);this.updateHazards(t),this.updateChains(t),this.separate();const o=this.marked.length;if(o>=3){const c=this.garden>=2&&this.anchor;this.addTension(t*(c?3:7+o*.5))}else o===0&&(this.tension=Math.max(0,this.tension-t*12));this.tension>=100&&this.overload();const l=this.enemies.filter(c=>c.hp>0);if(this.phase==="fight"&&l.length===0&&this.chains.length===0){if(this.clearTimer-=t,this.clearTimer>0)return;this.rescued+=this.stageRescued,this.stageRescued=0,this.player.hp=this.player.max,this.clearInput(),this.action=null,this.hazards=[],this.stage===5?(this.phase="finale",this.seals=3,this.emit("message",0,0,{text:"이제 소리에게 · 빛 가까이에서 Q로 풍경 울리기"})):[1,3,4].includes(this.stage)?this.phase="choice":(this.stage++,this.phase="rest",this.prepareTerrain()),this.save(),this.emit("clear")}}addTension(t){this.tension=da(this.tension+t,0,100)}overload(){this.tension=0,this.overloads++;for(const t of this.marked)t.mark=0,t.rage=5,t.kind!=="boss"&&(t.state="recover",t.timer=.45),this.hazards.push({id:++this.serial,kind:"burst",x:t.x,z:t.z,vx:0,vz:0,radius:2,life:1.2,delay:.8,damage:18,hit:!1});this.emit("overload"),this.emit("message",this.player.x,this.player.z,{text:"실이 끊어진다! 붉은 파열에서 벗어나세요"})}move(t,e,n){t.x+=e,t.z+=n;const s=t===this.player?.45:"kind"in t?ce.radius[t.kind]*.7:.1;for(const a of this.obstacles){if(a.restored)continue;let o=ae(t,a),l=a.radius+s;if(o<l){const c=o>.001?Be(a,t):0;t.x=a.x+Math.sin(c)*l,t.z=a.z+Math.cos(c)*l}}const r=Math.hypot(t.x,t.z);r>ce.arena&&(t.x*=ce.arena/r,t.z*=ce.arena/r)}clearLine(t,e){return!this.obstacles.some(n=>!n.restored&&Ki(n,t,e)<n.radius*.95)}separate(){const t=this.enemies.filter(e=>e.hp>0);for(let e=0;e<t.length;e++){const n=t[e];for(let s=e+1;s<t.length;s++){const r=t[s],a=ae(n,r),o=(ce.radius[n.kind]+ce.radius[r.kind])*.8;if(a<o&&a>.001){const l=(o-a)*.5,c=(n.x-r.x)/a*l,h=(n.z-r.z)/a*l;n.kind!=="boss"&&this.move(n,c,h),r.kind!=="boss"&&this.move(r,-c,-h)}}if(this.action?.kind!=="dodge"){const s=ae(n,this.player),r=ce.radius[n.kind]+.35;if(s<r&&s>.001){const a=Be(n,this.player);this.move(this.player,Math.sin(a)*(r-s)*.6,Math.cos(a)*(r-s)*.6)}}}}resolve(t,e,n){const s=this.player,r=this.action?.angle??s.angle;if(t==="attack"){const a=sr[e];this.move(s,Math.sin(r)*(e===2?.7:.2),Math.cos(r)*(e===2?.7:.2)),this.emit("slash",s.x,s.z,{radius:a.reach,angle:r,value:e,power:e===2?1:.3});for(const o of this.enemies)o.hp>0&&Ji(s,r,o,a.reach+ce.radius[o.kind]*.4,a.arc)&&this.clearLine(s,o)&&(this.damage(o,a.damage+(this.player.counter>0?16:0),"attack",a.push,e===2?1:.3),this.breakPosture(o,e===2?55:12),e===2&&this.trail&&(o.mark=ce.markTime),o.mark>0&&this.addTension(e===2?9:3))}if(t==="gather"){const a={x:s.x+Math.sin(r)*3.5,z:s.z+Math.cos(r)*3.5};this.move(a,0,0),this.anchor={...a,life:this.garden?3:.6};let o=0;for(const l of this.enemies)if(!(l.hp<=0||ae(s,l)>8+this.garden*.6||!this.clearLine(s,l))){if(l.kind==="boss"){l.state==="tell"&&l.pattern===2&&(l.state="stagger",l.timer=4.2,l.broken=4.2,l.mark=6,this.addTension(42),this.emit("break",l.x,l.z,{power:1.2}),this.emit("message",l.x,l.z,{text:"심장 노출 · 장력 60 이상으로 끊어내세요"}));continue}if(l.kind==="guard"&&l.broken<=0){this.emit("blocked",l.x,l.z);continue}l.pull={...a},l.pullTime=.6,this.damage(l,8,"gather"),l.mark>0&&this.addTension(5),o++}this.emit("gather",s.x,s.z,{radius:8,end:a,value:o})}if(t==="weave"){let a=0;for(const o of this.enemies)o.hp<=0||ae(s,o)>5.6||!this.clearLine(s,o)||(a++,o.mark=ce.markTime,this.damage(o,16,"weave"),o.kind!=="boss"&&o.state==="tell"&&(this.breakPosture(o,140),this.emit("counter",o.x,o.z)),o.kind==="boss"&&o.broken>0&&this.addTension(25));this.addTension(Math.min(24,a*7)),this.emit("weave",s.x,s.z,{radius:5.6,value:a})}t==="bloom"&&this.release()}release(){const t=this.tension,e=this.marked.filter(a=>ae(a,this.player)<6.5&&this.clearLine(this.player,a));if(!e.length){this.emit("message",this.player.x,this.player.z,{text:"엮인 적에게 더 가까이"});return}const n=this.marked,s=new Set,r=e.map(a=>({e:a,step:0,from:{x:this.player.x,z:this.player.z}}));for(;r.length;){const{e:a,step:o,from:l}=r.shift();if(s.has(a.id))continue;s.add(a.id),this.releaseQueue.add(a.id);const c=this.garden>=3&&this.anchor&&ae(a,this.anchor)<4||this.trail>=3&&this.player.counter>0?1.25:1;this.chains.push({x:a.x,z:a.z,id:a.id,timer:o*.065,damage:(32+t*1.25)*c,power:t,from:l});for(const h of n)!s.has(h.id)&&ae(a,h)<ce.linkRange+(this.trail>=3?2:0)&&this.clearLine(a,h)&&r.push({e:h,step:o+1,from:{x:a.x,z:a.z}})}this.bestChain=Math.max(this.bestChain,s.size),this.lastRelease=t,this.tension=0,t>=60&&this.strongReleases++,this.emit("bloom",this.player.x,this.player.z,{radius:6.5,value:s.size,power:t/60}),this.emit("message",this.player.x,this.player.z,{text:t>=60?`${s.size}연쇄 · 매듭 붕괴`:`${s.size}연쇄 · 안전한 해방`}),t>=60&&this.garden&&(this.sanctuaries.push({x:this.player.x,z:this.player.z,life:5,tick:0}),this.emit("sanctuary",this.player.x,this.player.z,{radius:3}))}updateChains(t){for(const e of this.chains){if(e.timer-=t,e.timer>0)continue;const n=this.enemies.find(s=>s.id===e.id);if(n&&n.hp>0){n.mark=0;const s=e.power>=60;if(n.kind==="boss"&&n.broken>0&&s&&n.staggerLock<=0&&(this.seals++,this.bossPhase=this.seals,n.staggerLock=5,n.hp=Math.min(n.hp,n.max*(1-this.seals/3)),n.broken=0,this.emit("seal",n.x,n.z,{value:this.seals,power:1.8}),this.emit("message",n.x,n.z,{text:this.seals===3?"마지막 매듭이 풀렸다 · 소리에게 가세요":`${this.seals} / 3 봉인 해방 · 정원의 기억이 돌아온다`}),this.seals<3)){n.state="recover",n.timer=2;for(let r=0;r<3;r++)this.spawn(r===0?"chime":"knot",(r-1)*7,-8+this.seals)}if(this.damage(n,e.damage,"bloom",s?6:2,s?1.4:.55),s&&this.breakPosture(n,120),this.emit("chain",n.x,n.z,{power:s?1.3:.5,end:e.from}),s)for(const r of this.obstacles)r.kind==="root"&&!r.restored&&ae(n,r)<4&&(r.restored=!0,this.restoredRoots++,this.sanctuaries.push({...r,life:30,tick:0}),this.emit("restore",r.x,r.z,{radius:3,power:1}),this.player.hp=Math.min(this.player.max,this.player.hp+12+this.garden*4))}e.timer=-999,this.releaseQueue.delete(e.id)}this.chains=this.chains.filter(e=>e.timer!==-999)}protected(t){return this.enemies.some(e=>e.kind==="guard"&&e.hp>0&&e.broken<=0&&e.id!==t.id&&ae(e,t)<4&&Ji(e,e.angle,this.player,12,1.5)&&Ki(e,this.player,t)<1.7)}damage(t,e,n,s=0,r=.4){if(t.hp<=0&&!(t.kind==="boss"&&this.seals>=3&&t.state!=="dead"))return;const a=t.kind==="guard"&&t.broken<=0&&Ji(t,t.angle,this.player,30,1.4),o=this.protected(t);if((a||o)&&!(n==="bloom"&&r>=1)&&(e*=.25),t.kind==="boss"&&t.broken<=0&&this.seals<3&&(e*=.28),t.hp-=e,t.kind==="boss"&&this.seals<3&&(t.hp=Math.max(t.max*(1-this.seals/3)-t.max*.27,t.hp)),t.hit=.2,this.hits++,["attack","bloom","trail"].includes(n)&&(this.hitstop=Math.max(this.hitstop,n==="bloom"?r>=1?.08:.035:r>=1?.065:.025)),this.emit("hit",t.x,t.z,{value:Math.round(e),text:a||o?"막힘":n,id:t.id,power:r,angle:Be(this.player,t)}),s&&t.kind!=="boss"&&!a){const l=Be(this.player,t);t.vx+=Math.sin(l)*s*4,t.vz+=Math.cos(l)*s*4}t.hp<=0&&(t.hp=0,t.state="dead",t.deadTime=.8,this.stageRescued++,this.flowers.length<140&&this.flowers.push({x:t.x,z:t.z}),this.player.hp=Math.min(this.player.max,this.player.hp+(n==="bloom"?3:0)),this.emit("release",t.x,t.z,{id:t.id,text:t.kind,power:r}))}breakPosture(t,e){t.hp<=0||t.kind==="boss"||t.broken>0||(t.posture-=e,t.posture<=0&&(t.broken=t.kind==="guard"?4:2,t.state="stagger",t.timer=1.05,t.posture=0,this.emit("break",t.x,t.z,{power:1}),this.addTension(8)))}stagger(t,e){t.hp<=0||t.kind==="boss"||t.staggerLock>0||(t.state="stagger",t.timer=e,t.staggerLock=e+.8)}radial(t,e,n){for(const s of this.enemies)s.hp>0&&ae(s,this.player)<t&&this.damage(s,e,n)}hurt(t,e){if(this.phase!=="fight")return!1;if(this.player.invuln>0)return this.action?.kind==="dodge"&&!this.dodgePerfect&&(this.dodgePerfect=!0,this.perfects++,this.player.counter=2,this.addTension(24),this.cooldowns.weave=0,this.emit("perfect"),this.emit("message",this.player.x,this.player.z,{text:"찰나 회피 · E 반격 가능"})),!1;if(this.player.hp=Math.max(0,this.player.hp-t),this.player.invuln=.55,this.player.hit=.32,this.action=null,this.buffer=null,e){const n=Be(e,this.player);this.player.vx=Math.sin(n)*9,this.player.vz=Math.cos(n)*9}return this.emit("hurt",this.player.x,this.player.z,{power:1}),this.player.hp<=0&&(this.phase="dead",this.clearInput(),this.emit("death")),!0}tell(t,e,n){t.state="tell",t.pattern=e,t.timer=n,t.target={x:this.player.x,z:this.player.z},t.angle=Be(t,this.player),t.attackAngle=t.angle,t.attackOrigin={x:t.x,z:t.z},t.strikeHit=!1,t.serial++,this.emit("tell",t.x,t.z,{id:t.id,text:t.kind,value:e})}enemyUpdate(t,e){if(t.hit=Math.max(0,t.hit-e),t.mark=Math.max(0,t.mark-e),t.staggerLock=Math.max(0,t.staggerLock-e),t.rage=Math.max(0,t.rage-e),t.hp<=0){t.deadTime=Math.max(0,t.deadTime-e);return}if(t.broken>0&&(t.broken=Math.max(0,t.broken-e),t.broken===0&&(t.posture=ce.posture[t.kind])),this.move(t,t.vx*e,t.vz*e),t.vx*=Math.exp(-e*10),t.vz*=Math.exp(-e*10),t.pull&&t.pullTime>0){t.pullTime-=e;const h=Be(t,t.pull),u=Math.min(ae(t,t.pull),e*14);this.move(t,Math.sin(h)*u,Math.cos(h)*u)}if(t.timer-=e,t.state==="tell"){t.timer<=0&&(t.state="strike",t.timer=t.kind==="elite"?.36:t.kind==="knot"?.25:.16,["knot","elite"].includes(t.kind)||this.enemyStrike(t));return}if(t.state==="strike"){(t.kind==="knot"||t.kind==="elite")&&(this.move(t,Math.sin(t.attackAngle)*e*(t.kind==="elite"?23:16),Math.cos(t.attackAngle)*e*(t.kind==="elite"?23:16)),!t.strikeHit&&ae(t,this.player)<(t.kind==="elite"?2:1.2)&&(this.hurt(t.kind==="elite"?26:17,t),t.strikeHit=!0)),t.timer<=0&&(t.kind==="elite"&&t.pattern===0?this.tell(t,1,.65):(t.state="recover",t.timer=t.kind==="boss"?1.25:t.kind==="elite"?1.4:.85));return}if(t.state==="recover"||t.state==="stagger"){t.timer<=0&&(t.state="chase",t.timer=.3);return}const n=this.player,s=ae(t,n),r=this.enemies.some(h=>h.kind==="chime"&&h.hp>0&&h.state==="tell"&&ae(h,t)<6);t.buffed=r&&t.kind!=="chime";const a=Be(t,n),o=Math.atan2(Math.sin(a-t.angle),Math.cos(a-t.angle));t.angle+=da(o,-e*(t.kind==="guard"?1.5:7),e*(t.kind==="guard"?1.5:7));const l=t.kind==="chime"?11:t.kind==="boss"?10:t.kind==="elite"?9:t.kind==="guard"?3:5;if(s>l*.73){const h=t.kind==="knot"?Math.sin(t.id*2.4)*.42:0;this.walkToward(t,a+h,(t.kind==="guard"?2:t.kind==="boss"?2.2:t.kind==="elite"?3.6:3.1)*(t.buffed||t.rage>0?1.25:1),e)}if(t.kind==="chime"&&s<6&&this.walkToward(t,a+Math.PI,2.8,e),!(t.timer>0||this.spawnGrace>0||s>l||this.enemies.filter(h=>h.state==="tell"||h.state==="strike").length>=(this.stage<2?2:4)))if(t.kind==="boss"){const u=[[0,1,2],[1,3,2,0],[3,1,0,2]][Math.min(2,this.seals)];this.tell(t,u[t.serial%u.length],u[t.serial%u.length]===2?2:1.1)}else this.tell(t,0,(t.kind==="chime"?1.2:t.kind==="guard"||t.kind==="elite"?.9:.7)*(t.rage>0?.75:1))}walkToward(t,e,n,s){const r={x:t.x+Math.sin(e)*1.5,z:t.z+Math.cos(e)*1.5};if(!this.clearLine(t,r)){const a=this.obstacles.find(o=>!o.restored&&ae(t,o)<o.radius+2.5);if(a){const o=Math.sin(Be(t,this.player)-Be(t,a))>=0?1:-1;e+=o*1.2}}this.move(t,Math.sin(e)*n*s,Math.cos(e)*n*s)}enemyStrike(t){const e=this.player;if(t.attackOrigin={x:t.x,z:t.z},t.kind==="chime"){for(const n of[-.16,0,.16]){const s=t.attackAngle+n;this.hazards.push({id:++this.serial,kind:"bolt",x:t.x,z:t.z,vx:Math.sin(s)*7,vz:Math.cos(s)*7,radius:.42,life:3,delay:0,damage:16,hit:!1})}this.emit("shot",t.x,t.z);return}if(t.kind==="boss"){if(t.pattern===0&&(Ji(t,t.attackAngle,e,7,1.2)&&this.hurt(30,t),this.emit("enemySlash",t.x,t.z,{radius:7,angle:t.attackAngle,value:0,power:1.3})),t.pattern===1){const n={x:t.x+Math.sin(t.attackAngle)*15,z:t.z+Math.cos(t.attackAngle)*15};Ki(e,t,n)<1.5&&this.hurt(32,t),this.emit("lane",t.x,t.z,{end:n,power:1.4})}if(t.pattern===2&&(this.hazards.push({id:++this.serial,kind:"wave",x:t.x,z:t.z,vx:0,vz:0,radius:1,life:2.5,delay:0,damage:28,hit:!1}),this.emit("pulse",t.x,t.z,{radius:13,power:1})),t.pattern===3){for(let n=0;n<3;n++)this.hazards.push({id:++this.serial,kind:"burst",x:t.target.x+(n-1)*3.5,z:t.target.z,radius:2.7,vx:0,vz:0,life:1.65,delay:.8+n*.15,damage:24,hit:!1});this.emit("shot",t.x,t.z)}}else Ji(t,t.attackAngle,e,3.6,1.25)&&this.hurt(24,t),this.emit("enemySlash",t.x,t.z,{radius:3.6,angle:t.attackAngle})}updateHazards(t){for(const e of this.hazards){if(e.life-=t,e.delay-=t,e.kind==="bolt"){const n={x:e.x,z:e.z};e.x+=e.vx*t,e.z+=e.vz*t,this.clearLine(n,e)?!e.hit&&Ki(this.player,n,e)<e.radius+.4&&(this.hurt(e.damage,e),e.hit=!0,e.life=0):(e.life=0,this.emit("blocked",e.x,e.z))}e.kind==="wave"&&(e.radius+=t*6,!e.hit&&Math.abs(ae(e,this.player)-e.radius)<.5&&(this.hurt(e.damage,e),e.hit=!0)),e.kind==="burst"&&e.delay<=0&&!e.hit&&(e.hit=!0,ae(e,this.player)<e.radius&&this.hurt(e.damage,e),this.emit("danger",e.x,e.z,{radius:e.radius}))}this.hazards=this.hazards.filter(e=>e.life>0).slice(-90)}}const oo="180",lh=0,Ho=1,ch=2,oc=1,lc=2,Sn=3,kn=0,He=1,ke=2,zn=0,Pi=1,Vo=2,Go=3,Wo=4,hh=5,ei=100,uh=101,dh=102,fh=103,ph=104,mh=200,gh=201,_h=202,vh=203,fa=204,pa=205,xh=206,Mh=207,yh=208,Sh=209,Eh=210,bh=211,Th=212,wh=213,Ah=214,ma=0,ga=1,_a=2,Di=3,va=4,xa=5,Ma=6,ya=7,cc=0,Rh=1,Ch=2,Bn=0,Ph=1,Lh=2,Dh=3,hc=4,Ih=5,Uh=6,Nh=7,uc=300,Ii=301,Ui=302,Sa=303,Ea=304,Mr=306,ba=1e3,ni=1001,Ta=1002,Je=1003,Fh=1004,ws=1005,cn=1006,Ar=1007,ii=1008,dn=1009,dc=1010,fc=1011,fs=1012,lo=1013,ri=1014,hn=1015,Ss=1016,co=1017,ho=1018,ps=1020,pc=35902,mc=35899,gc=1021,_c=1022,an=1023,ms=1026,gs=1027,uo=1028,fo=1029,vc=1030,po=1031,mo=1033,rr=33776,ar=33777,or=33778,lr=33779,wa=35840,Aa=35841,Ra=35842,Ca=35843,Pa=36196,La=37492,Da=37496,Ia=37808,Ua=37809,Na=37810,Fa=37811,Oa=37812,za=37813,Ba=37814,ka=37815,Ha=37816,Va=37817,Ga=37818,Wa=37819,Xa=37820,qa=37821,Ya=36492,$a=36494,Ja=36495,Ka=36283,Za=36284,ja=36285,Qa=36286,Oh=3200,zh=3201,xc=0,Bh=1,Nn="",$e="srgb",Ni="srgb-linear",dr="linear",oe="srgb",ui=7680,Xo=519,kh=512,Hh=513,Vh=514,Mc=515,Gh=516,Wh=517,Xh=518,qh=519,qo=35044,Yo="300 es",un=2e3,fr=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cr=Math.PI/180,to=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Yh(i,t){return(i%t+t)%t}function Rr(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),w=Math.atan2(A,p*S);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const x=o*S;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($o.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($o.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cr.copy(this).projectOnVector(t),this.sub(Cr)}reflect(t){return this.sub(Cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new C,$o=new Es;class Xt{constructor(t,e,n,s,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],M=s[4],x=s[7],A=s[2],w=s[5],P=s[8];return r[0]=a*_+o*S+l*A,r[3]=a*m+o*M+l*w,r[6]=a*p+o*x+l*P,r[1]=c*_+h*S+u*A,r[4]=c*m+h*M+u*w,r[7]=c*p+h*x+u*P,r[2]=d*_+f*S+g*A,r[5]=d*m+f*M+g*w,r[8]=d*p+f*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Xt;function yc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $h(){const i=pr("canvas");return i.style.display="block",i}const Jo={};function _s(i){i in Jo||(Jo[i]=!0)}function Jh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ko=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zo=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kh(){const i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:t,whitePoint:n,transfer:dr,toXYZ:Ko,fromXYZ:Zo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Ko,fromXYZ:Zo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}const te=Kh();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Zh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{di===void 0&&(di=pr("canvas")),di.width=t.width,di.height=t.height;const s=di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return t}}let jh=0;class go{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lr(s[a].image)):r.push(Lr(s[a]))}else r=Lr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:{}}let Qh=0;const Dr=new C;class Fe extends Hi{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=ni,s=ni,r=cn,a=ii,o=an,l=dn,c=Fe.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Vi(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dr).x}get height(){return this.source.getSize(Dr).y}get depth(){return this.source.getSize(Dr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0)continue;const s=this[e];s!==void 0&&(s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n)}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=uc;Fe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(f+1)/2,A=(p+1)/2,w=(h+d)/4,P=(u+_)/4,D=(g+m)/4;return M>x&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=P/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends Hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Fe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new go(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends tu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sc extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eu extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Rs.subVectors(this.max,ji),fi.subVectors(t.a,ji),pi.subVectors(t.b,ji),mi.subVectors(t.c,ji),Rn.subVectors(pi,fi),Cn.subVectors(mi,pi),qn.subVectors(fi,mi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-qn.z,qn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,qn.z,0,-qn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-qn.y,qn.x,0];return!Ir(e,fi,pi,mi,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Ir(e,fi,pi,mi,Rs))?!1:(Cs.crossVectors(Rn,Cn),e=[Cs.x,Cs.y,Cs.z],Ir(e,fi,pi,mi,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const gn=[new C,new C,new C,new C,new C,new C,new C,new C],en=new C,As=new li,fi=new C,pi=new C,mi=new C,Rn=new C,Cn=new C,qn=new C,ji=new C,Rs=new C,Cs=new C,Yn=new C;function Ir(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);const o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const nu=new li,Qi=new C,Ur=new C;class Gi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Ur)),this.expandByPoint(Qi.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const _n=new C,Nr=new C,Ps=new C,Pn=new C,Fr=new C,Ls=new C,Or=new C;class _o{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Nr.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Nr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ps),o=Pn.dot(this.direction),l=-Pn.dot(Ps),c=Pn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nr).addScaledVector(Ps,d),f}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){Fr.subVectors(e,t),Ls.subVectors(n,t),Or.crossVectors(Fr,Ls);let a=this.direction.dot(Or),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(Ls.crossVectors(Pn,Ls));if(l<0)return null;const c=o*this.direction.dot(Fr.cross(Pn));if(c<0||l+c>a)return null;const h=-o*Pn.dot(Or);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),a=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iu,t,su)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Ln.crossVectors(n,Xe),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Ln.crossVectors(n,Xe)),Ln.normalize(),Ds.crossVectors(Xe,Ln),s[0]=Ln.x,s[4]=Ds.x,s[8]=Xe.x,s[1]=Ln.y,s[5]=Ds.y,s[9]=Xe.y,s[2]=Ln.z,s[6]=Ds.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],M=n[7],x=n[11],A=n[15],w=s[0],P=s[4],D=s[8],b=s[12],y=s[1],L=s[5],F=s[9],k=s[13],W=s[2],q=s[6],G=s[10],nt=s[14],V=s[3],ft=s[7],Mt=s[11],bt=s[15];return r[0]=a*w+o*y+l*W+c*V,r[4]=a*P+o*L+l*q+c*ft,r[8]=a*D+o*F+l*G+c*Mt,r[12]=a*b+o*k+l*nt+c*bt,r[1]=h*w+u*y+d*W+f*V,r[5]=h*P+u*L+d*q+f*ft,r[9]=h*D+u*F+d*G+f*Mt,r[13]=h*b+u*k+d*nt+f*bt,r[2]=g*w+_*y+m*W+p*V,r[6]=g*P+_*L+m*q+p*ft,r[10]=g*D+_*F+m*G+p*Mt,r[14]=g*b+_*k+m*nt+p*bt,r[3]=S*w+M*y+x*W+A*V,r[7]=S*P+M*L+x*q+A*ft,r[11]=S*D+M*F+x*G+A*Mt,r[15]=S*b+M*k+x*nt+A*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,M=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,A=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,w=e*S+n*M+s*x+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return t[0]=S*P,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*P,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*P,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*P,t[4]=M*P,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*P,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*P,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*P,t[8]=x*P,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*P,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*P,t[12]=A*P,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*P,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,S=l*c,M=l*h,x=l*u,A=n.x,w=n.y,P=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+x)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+M)*P,s[9]=(m-S)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=gi.set(s[0],s[1],s[2]).length();const a=gi.set(s[4],s[5],s[6]).length(),o=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=un,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===un)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===fr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===un)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===fr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new C,nn=new he,iu=new C(0,0,0),su=new C(1,1,1),Ln=new C,Ds=new C,Xe=new C,jo=new he,Qo=new Es;class fn{constructor(t=0,e=0,n=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ru=0;const tl=new C,_i=new Es,vn=new he,Is=new C,ts=new C,au=new C,ou=new Es,el=new C(1,0,0),nl=new C(0,1,0),il=new C(0,0,1),sl={type:"added"},lu={type:"removed"},vi={type:"childadded",child:null},zr={type:"childremoved",child:null};class Me extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new C,e=new fn,n=new Es,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Xt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ts,Is,this.up):vn.lookAt(Is,ts,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(vn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?this:(t&&t.isObject3D&&(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sl),vi.child=t,this.dispatchEvent(vi),vi.child=null),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lu),zr.child=t,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sl),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new C(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new C,xn=new C,Br=new C,Mn=new C,xi=new C,Mi=new C,rl=new C,kr=new C,Hr=new C,Vr=new C,Gr=new xe,Wr=new xe,Xr=new xe;class tn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),xn.subVectors(n,e),Br.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(xn),l=sn.dot(Br),c=xn.dot(xn),h=xn.dot(Br),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Gr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Gr.fromBufferAttribute(t,e),Wr.fromBufferAttribute(t,n),Xr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Gr,r.x),a.addScaledVector(Wr,r.y),a.addScaledVector(Xr,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),xn.subVectors(t,e),sn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),sn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;xi.subVectors(s,n),Mi.subVectors(r,n),kr.subVectors(t,n);const l=xi.dot(kr),c=Mi.dot(kr);if(l<=0&&c<=0)return e.copy(n);Hr.subVectors(t,s);const h=xi.dot(Hr),u=Mi.dot(Hr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xi,a);Vr.subVectors(t,r);const f=xi.dot(Vr),g=Mi.dot(Vr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Mi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return rl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(rl,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(xi,a).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Yh(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qr(a,r,t+1/3),this.g=qr(a,r,t),this.b=qr(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Ec[t.toLowerCase()];return n!==void 0&&this.setHex(n,e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return te.workingToColorSpace(Le.copy(this),t),Math.round($t(Le.r*255,0,255))*65536+Math.round($t(Le.g*255,0,255))*256+Math.round($t(Le.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=$e){te.workingToColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Us);const n=Rr(Dn.h,Us.h,e),s=Rr(Dn.s,Us.s,e),r=Rr(Dn.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Yt;Yt.NAMES=Ec;let cu=0;class Wi extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Pi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0)continue;const s=this[e];s!==void 0&&(s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n)}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ye extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new C,Ns=new mt;let hu=0;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qo,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qo&&(t.usage=this.usage),t}}class bc extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tc extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let uu=0;const je=new he,Yr=new Me,yi=new C,qe=new li,es=new li,we=new C;class Te extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yc(t)?Tc:bc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count,e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(qe.min,es.min),qe.expandByPoint(we),we.addVectors(qe.max,es.max),qe.expandByPoint(we)):(qe.expandByPoint(es.min),qe.expandByPoint(es.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(t,c),we.add(yi)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return;const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new C,l[D]=new C;const c=new C,h=new C,u=new C,d=new mt,f=new mt,g=new mt,_=new C,m=new C;function p(D,b,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(_),o[b].add(_),o[y].add(_),l[D].add(m),l[b].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,b=S.length;D<b;++D){const y=S[D],L=y.start,F=y.count;for(let k=L,W=L+F;k<W;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new C,x=new C,A=new C,w=new C;function P(D){A.fromBufferAttribute(s,D),w.copy(A);const b=o[D];M.copy(b),M.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(w,b);const L=x.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,L)}for(let D=0,b=S.length;D<b;++D){const y=S[D],L=y.start,F=y.count;for(let k=L,W=L+F;k<W;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ve(d,h,u)}if(this.index===null)return this;const e=new Te,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new he,$n=new _o,Fs=new Gi,ol=new C,Os=new C,zs=new C,Bs=new C,$r=new C,ks=new C,ll=new C,Hs=new C;class Ht extends Me{constructor(t=new Te,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&($r.fromBufferAttribute(u,t),a?ks.addScaledVector($r,h):ks.addScaledVector($r.sub(e),h))}e.add(ks)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Fs.containsPoint($n.origin)===!1&&($n.intersectSphere(Fs,ol)===null||$n.origin.distanceToSquared(ol)>(t.far-t.near)**2))&&(al.copy(r).invert(),$n.copy(t.ray).applyMatrix4(al),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,A=M;x<A;x+=3){const w=o.getX(x),P=o.getX(x+1),D=o.getX(x+2);s=Vs(this,p,t,n,c,h,u,w,P,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=Vs(this,a,t,n,c,h,u,S,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,A=M;x<A;x+=3){const w=x,P=x+1,D=x+2;s=Vs(this,p,t,n,c,h,u,w,P,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,M=m+1,x=m+2;s=Vs(this,a,t,n,c,h,u,S,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function du(i,t,e,n,s,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===kn,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:i}}function Vs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Os),i.getVertexPosition(l,zs),i.getVertexPosition(c,Bs);const h=du(i,t,e,n,Os,zs,Bs,ll);if(h){const u=new C;tn.getBarycoord(ll,Os,zs,Bs,u),s&&(h.uv=tn.getInterpolatedAttribute(s,o,l,c,u,new mt)),r&&(h.uv1=tn.getInterpolatedAttribute(r,o,l,c,u,new mt)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};tn.getNormal(Os,zs,Bs,d.normal),h.face=d,h.barycoord=u}return h}class Xi extends Te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,m,p,S,M,x,A,w,P,D,b){const y=x/P,L=A/D,F=x/2,k=A/2,W=w/2,q=P+1,G=D+1;let nt=0,V=0;const ft=new C;for(let Mt=0;Mt<G;Mt++){const bt=Mt*L-k;for(let Vt=0;Vt<q;Vt++){const Zt=Vt*y-F;ft[_]=Zt*S,ft[m]=bt*M,ft[p]=W,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=w>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(Vt/P),u.push(1-Mt/D),nt+=1}}for(let Mt=0;Mt<D;Mt++)for(let bt=0;bt<P;bt++){const Vt=d+bt+q*Mt,Zt=d+bt+q*(Mt+1),se=d+(bt+1)+q*(Mt+1),jt=d+(bt+1)+q*Mt;l.push(Vt,Zt,jt),l.push(Zt,se,jt),V+=6}o.addGroup(f,V,b),f+=V,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?t[e][n]=null:t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Fi(i[e]);for(const s in n)t[s]=n[s]}return t}function fu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const pu={clone:Fi,merge:Ne};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ac extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new C,cl=new mt,hl=new mt;class rn extends Ac{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,cl,hl),e.subVectors(hl,cl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Si=-90,Ei=1;class _u extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Si,Ei,t,e);s.layers=this.layers,this.add(s);const r=new rn(Si,Ei,t,e);r.layers=this.layers,this.add(r);const a=new rn(Si,Ei,t,e);a.layers=this.layers,this.add(a);const o=new rn(Si,Ei,t,e);o.layers=this.layers,this.add(o);const l=new rn(Si,Ei,t,e);l.layers=this.layers,this.add(l);const c=new rn(Si,Ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rc extends Fe{constructor(t=[],e=Ii,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vu extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xi(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:zn});r.uniforms.tEquirect.value=e;const a=new Ht(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=cn),new _u(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class fe extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xu={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mu extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yu extends Fe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Je,h=Je,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new he,dl=new he,Gs=[],fl=new li,Su=new he,ns=new Ht,is=new Gi;class wi extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Su)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),fl.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(fl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),is.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),dl.multiplyMatrices(n,bi),ns.matrixWorld=dl,ns.raycast(t,Gs);for(let a=0,o=Gs.length;a<o;a++){const l=Gs[a];l.instanceId=r,l.object=this,e.push(l)}Gs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yu(new Float32Array(s*this.count),s,this.count,uo,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kr=new C,Eu=new C,bu=new Xt;class Un{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Kr.subVectors(n,e).cross(Eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bu.getNormalMatrix(t),s=this.coplanarPoint(Kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Gi,Tu=new mt(.5,.5),Ws=new C;class Mo{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],M=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-g,A-S).normalize(),s[1].setComponents(c+a,f+h,p+g,A+S).normalize(),s[2].setComponents(c+o,f+u,p+_,A+M).normalize(),s[3].setComponents(c-o,f-u,p-_,A-M).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,A-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,A-x).normalize(),e===un)s[5].setComponents(c+l,f+d,p+m,A+x).normalize();else if(e===fr)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){Jn.center.set(0,0,0);const e=Tu.distanceTo(t.center);return Jn.radius=.7071067811865476+e,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ws.x=s.normal.x>0?t.max.x:t.min.x,Ws.y=s.normal.y>0?t.max.y:t.min.y,Ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mr extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gr=new C,_r=new C,pl=new he,ss=new _o,Xs=new Gi,Zr=new C,ml=new C;class as extends Me{constructor(t=new Te,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gr.distanceTo(_r);t.setAttribute("lineDistance",new ie(n,1))}return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;pl.copy(s).invert(),ss.copy(t.ray).applyMatrix4(pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),M=qs(this,t,ss,l,p,S,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=qs(this,t,ss,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=qs(this,t,ss,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=qs(this,t,ss,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qs(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(gr.fromBufferAttribute(o,s),_r.fromBufferAttribute(o,r),e.distanceSqToSegment(gr,_r,Zr,ml)>n)return;Zr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zr);if(!(c<t.near||c>t.far))return{distance:c,point:ml.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const gl=new C,_l=new C;class Cc extends as{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gl.fromBufferAttribute(e,s),_l.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gl.distanceTo(_l);t.setAttribute("lineDistance",new ie(n,1))}return this}}class Pc extends Fe{constructor(t,e,n=ri,s,r,a,o=Je,l=Je,c,h=ms,u=1){if(h!==ms&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Lc extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cs extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class De extends Te{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function S(){const x=new C,A=new C;let w=0;const P=(e-t)/n;for(let D=0;D<=r;D++){const b=[],y=D/r,L=y*(e-t)+t;for(let F=0;F<=s;F++){const k=F/s,W=k*l+o,q=Math.sin(W),G=Math.cos(W);A.x=L*q,A.y=-y*n+m,A.z=L*G,u.push(A.x,A.y,A.z),x.set(q,P,G).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-y),b.push(g++)}_.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){const y=_[b][D],L=_[b+1][D],F=_[b+1][D+1],k=_[b][D+1];(t>0||b!==0)&&(h.push(y,L,k),w+=3),(e>0||b!==r-1)&&(h.push(L,F,k),w+=3)}c.addGroup(p,w,0),p+=w}function M(x){const A=g,w=new mt,P=new C;let D=0;const b=x===!0?t:e,y=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const W=F/s*l+o,q=Math.cos(W),G=Math.sin(W);P.x=b*G,P.y=m*y,P.z=b*q,u.push(P.x,P.y,P.z),d.push(0,y,0),w.x=q*.5+.5,w.y=G*.5*y+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){const k=A+F,W=L+F;x===!0?h.push(W,W+1,k):h.push(W+1,W,k),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oi extends De{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Oi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yo extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const M=new C,x=new C,A=new C;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],x),f(e[w+2],A),l(M,x,A,S)}function l(S,M,x,A){const w=A+1,P=[];for(let D=0;D<=w;D++){P[D]=[];const b=S.clone().lerp(x,D/w),y=M.clone().lerp(x,D/w),L=w-D;for(let F=0;F<=L;F++)F===0&&D===w?P[D][F]=b:P[D][F]=b.clone().lerp(y,F/L)}for(let D=0;D<w;D++)for(let b=0;b<2*(w-D)-1;b++){const y=Math.floor(b/2);b%2===0?(d(P[D][y+1]),d(P[D+1][y]),d(P[D][y])):(d(P[D][y+1]),d(P[D+1][y+1]),d(P[D+1][y]))}}function c(S){const M=new C;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(S),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const S=new C;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const x=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;a.push(x,1-A)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const M=a[S+0],x=a[S+2],A=a[S+4],w=Math.max(M,x,A),P=Math.min(M,x,A);w>.9&&P<.1&&(M<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,M){const x=S*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const S=new C,M=new C,x=new C,A=new C,w=new mt,P=new mt,D=new mt;for(let b=0,y=0;b<r.length;b+=9,y+=6){S.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),w.set(a[y+0],a[y+1]),P.set(a[y+2],a[y+3]),D.set(a[y+4],a[y+5]),A.copy(S).add(M).add(x).divideScalar(3);const L=m(A);_(w,y+0,S,L),_(P,y+2,M,L),_(D,y+4,x,L)}}function _(S,M,x,A){A<0&&S.x===1&&(a[M]=S.x-1),x.x===0&&x.z===0&&(a[M]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.vertices,t.indices,t.radius,t.details)}}const Ys=new C,$s=new C,jr=new C,Js=new tn;class wu extends Te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(cr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Js;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Js.getNormal(jr),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const M=(S+1)%3,x=u[S],A=u[M],w=Js[h[S]],P=Js[h[M]],D=`${x}_${A}`,b=`${A}_${x}`;b in d&&d[b]?(jr.dot(d[b].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(P.x,P.y,P.z)),d[b]=null):D in d||(d[D]={index0:c[S],index1:c[M],normal:jr.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Ys.fromBufferAttribute(o,_),$s.fromBufferAttribute(o,m),f.push(Ys.x,Ys.y,Ys.z),f.push($s.x,$s.y,$s.z)}this.setAttribute("position",new ie(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new mt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,s=[],r=[],a=[],o=new C,l=new he;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class So extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Au extends So{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Eo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ks=new C,Qr=new Eo,ta=new Eo,ea=new Eo;class Ru extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ks.subVectors(s[0],s[1]).add(s[0]),c=Ks);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ks.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Qr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ta.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ea.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ta.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ea.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Qr.calc(l),ta.calc(l),ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Cu(i,t){const e=1-i;return e*e*t}function Pu(i,t){return 2*(1-i)*i*t}function Lu(i,t){return i*i*t}function hs(i,t,e,n){return Cu(i,t)+Pu(i,e)+Lu(i,n)}function Du(i,t){const e=1-i;return e*e*e*t}function Iu(i,t){const e=1-i;return 3*e*e*i*t}function Uu(i,t){return 3*(1-i)*i*i*t}function Nu(i,t){return i*i*i*t}function us(i,t,e,n,s){return Du(i,t)+Iu(i,e)+Uu(i,n)+Nu(i,s)}class Dc extends pn{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(us(t,s.x,r.x,a.x,o.x),us(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fu extends pn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(us(t,s.x,r.x,a.x,o.x),us(t,s.y,r.y,a.y,o.y),us(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ic extends pn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ou extends pn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uc extends pn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hs(t,s.x,r.x,a.x),hs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zu extends pn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hs(t,s.x,r.x,a.x),hs(t,s.y,r.y,a.y),hs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nc extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vl(o,l.x,c.x,h.x,u.x),vl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var eo=Object.freeze({__proto__:null,ArcCurve:Au,CatmullRomCurve3:Ru,CubicBezierCurve:Dc,CubicBezierCurve3:Fu,EllipseCurve:So,LineCurve:Ic,LineCurve3:Ou,QuadraticBezierCurve:Uc,QuadraticBezierCurve3:zu,SplineCurve:Nc});class Bu extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new eo[s.type]().fromJSON(s))}return this}}class xl extends Bu{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ic(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Uc(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Dc(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Nc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new So(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fc extends xl{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new xl().fromJSON(s))}return this}}function ku(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Oc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Xu(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return vs(r,a,e,o,l,c,0),a}function Oc(i,t,e,n,s){let r;if(s===nd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ml(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ml(a/n|0,i[a],i[a+1],r);return r&&zi(r,r.next)&&(Ms(r),r=r.next),r}function oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zi(e,e.next)||_e(e.prev,e,e.next)===0)){if(Ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ku(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Vu(i,n,s,r):Hu(i)){t.push(l.i,i.i,c.i),Ms(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Gu(oi(i),t),vs(i,t,e,n,s,r,2)):a===2&&Wu(i,t,e,n,s,r):vs(oi(i),t,e,n,s,r,1);break}}}function Hu(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&os(s,o,r,l,a,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vu(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=no(f,g,t,e,n),S=no(_,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&os(o,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&os(o,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&os(o,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&os(o,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Gu(i,t){let e=i;do{const n=e.prev,s=e.next.next;!zi(n,s)&&Bc(n,e,e.next,s)&&xs(n,s)&&xs(s,n)&&(t.push(n.i,e.i,s.i),Ms(e),Ms(e.next),e=i=s),e=e.next}while(e!==i);return oi(e)}function Wu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qu(a,o)){let l=kc(a,o);a=oi(a,a.next),l=oi(l,l.next),vs(a,t,e,n,s,r,0),vs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xu(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Oc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ju(c))}s.sort(qu);for(let r=0;r<s.length;r++)e=Yu(s[r],e);return e}function qu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Yu(i,t){const e=$u(i,t);if(!e)return t;const n=kc(e,i);return oi(n,n.next),oi(e,e.next)}function $u(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(zi(i,e))return e;do{if(zi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);xs(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ju(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ju(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Ku(i,t,e,n){let s=i;do s.z===0&&(s.z=no(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zu(s)}function Zu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function no(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ju(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function os(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&zc(i,t,e,n,s,r,a,o)}function Qu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!td(i,t)&&(xs(i,t)&&xs(t,i)&&ed(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||zi(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zi(i,t){return i.x===t.x&&i.y===t.y}function Bc(i,t,e,n){const s=js(_e(i,t,e)),r=js(_e(i,t,n)),a=js(_e(e,n,i)),o=js(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&Zs(i,e,t)||r===0&&Zs(i,n,t)||a===0&&Zs(e,i,n)||o===0&&Zs(e,t,n))}function Zs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function js(i){return i>0?1:i<0?-1:0}function td(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function ed(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function kc(i,t){const e=io(i.i,i.x,i.y),n=io(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ml(i,t,e,n){const s=io(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function io(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class id{static triangulate(t,e,n=2){return ku(t,e,n)}}class Ai{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ai.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];yl(t),Sl(n,t);let a=t.length;e.forEach(yl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Sl(n,e[l]);const o=id.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function yl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class bo extends Te{constructor(t=new Fc([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:sd;let M,x=!1,A,w,P,D;p&&(M=p.getSpacedPoints(h),x=!0,d=!1,A=p.computeFrenetFrames(h,!1),w=new C,P=new C,D=new C),d||(m=0,f=0,g=0,_=0);const b=o.extractPoints(c);let y=b.shape;const L=b.holes;if(!Ai.isClockWise(y)){y=y.reverse();for(let j=0,K=L.length;j<K;j++){const J=L[j];Ai.isClockWise(J)&&(L[j]=J.reverse())}}function k(j){const J=10000000000000001e-36;let $=j[0];for(let ut=1;ut<=j.length;ut++){const it=ut%j.length,dt=j[it],Bt=dt.x-$.x,zt=dt.y-$.y,T=Bt*Bt+zt*zt,v=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs($.x),Math.abs($.y)),O=J*v*v;if(T<=O){j.splice(it,1),ut--;continue}$=dt}}k(y),L.forEach(k);const W=L.length,q=y;for(let j=0;j<W;j++){const K=L[j];y=y.concat(K)}function G(j,K,J){return j.clone().addScaledVector(K,J)}const nt=y.length;function V(j,K,J){let $,ut,it;const dt=j.x-K.x,Bt=j.y-K.y,zt=J.x-j.x,T=J.y-j.y,v=dt*dt+Bt*Bt,O=dt*T-Bt*zt;if(Math.abs(O)>Number.EPSILON){const H=Math.sqrt(v),tt=Math.sqrt(zt*zt+T*T),X=K.x-Bt/H,Pt=K.y+dt/H,ct=J.x-T/tt,At=J.y+zt/tt,Rt=((ct-X)*T-(At-Pt)*zt)/(dt*T-Bt*zt);$=X+dt*Rt-j.x,ut=Pt+Bt*Rt-j.y;const rt=$*$+ut*ut;if(rt<=2)return new mt($,ut);it=Math.sqrt(rt/2)}else{let H=!1;dt>Number.EPSILON?zt>Number.EPSILON&&(H=!0):dt<-Number.EPSILON?zt<-Number.EPSILON&&(H=!0):Math.sign(Bt)===Math.sign(T)&&(H=!0),H?($=-Bt,ut=dt,it=Math.sqrt(v)):($=dt,ut=Bt,it=Math.sqrt(v/2))}return new mt($/it,ut/it)}const ft=[];for(let j=0,K=q.length,J=K-1,$=j+1;j<K;j++,J++,$++)J===K&&(J=0),$===K&&($=0),ft[j]=V(q[j],q[J],q[$]);const Mt=[];let bt,Vt=ft.concat();for(let j=0,K=W;j<K;j++){const J=L[j];bt=[];for(let $=0,ut=J.length,it=ut-1,dt=$+1;$<ut;$++,it++,dt++)it===ut&&(it=0),dt===ut&&(dt=0),bt[$]=V(J[$],J[it],J[dt]);Mt.push(bt),Vt=Vt.concat(bt)}let Zt;if(m===0)Zt=Ai.triangulateShape(q,L);else{const j=[],K=[];for(let J=0;J<m;J++){const $=J/m,ut=f*Math.cos($*Math.PI/2),it=g*Math.sin($*Math.PI/2)+_;for(let dt=0,Bt=q.length;dt<Bt;dt++){const zt=G(q[dt],ft[dt],it);Dt(zt.x,zt.y,-ut),$===0&&j.push(zt)}for(let dt=0,Bt=W;dt<Bt;dt++){const zt=L[dt];bt=Mt[dt];const T=[];for(let v=0,O=zt.length;v<O;v++){const H=G(zt[v],bt[v],it);Dt(H.x,H.y,-ut),$===0&&T.push(H)}$===0&&K.push(T)}}Zt=Ai.triangulateShape(j,K)}const se=Zt.length,jt=g+_;for(let j=0;j<nt;j++){const K=d?G(y[j],Vt[j],jt):y[j];x?(P.copy(A.normals[0]).multiplyScalar(K.x),w.copy(A.binormals[0]).multiplyScalar(K.y),D.copy(M[0]).add(P).add(w),Dt(D.x,D.y,D.z)):Dt(K.x,K.y,0)}for(let j=1;j<=h;j++)for(let K=0;K<nt;K++){const J=d?G(y[K],Vt[K],jt):y[K];x?(P.copy(A.normals[j]).multiplyScalar(J.x),w.copy(A.binormals[j]).multiplyScalar(J.y),D.copy(M[j]).add(P).add(w),Dt(D.x,D.y,D.z)):Dt(J.x,J.y,u/h*j)}for(let j=m-1;j>=0;j--){const K=j/m,J=f*Math.cos(K*Math.PI/2),$=g*Math.sin(K*Math.PI/2)+_;for(let ut=0,it=q.length;ut<it;ut++){const dt=G(q[ut],ft[ut],$);Dt(dt.x,dt.y,u+J)}for(let ut=0,it=L.length;ut<it;ut++){const dt=L[ut];bt=Mt[ut];for(let Bt=0,zt=dt.length;Bt<zt;Bt++){const T=G(dt[Bt],bt[Bt],$);x?Dt(T.x,T.y+M[h-1].y,M[h-1].x+J):Dt(T.x,T.y,u+J)}}}Y(),Q();function Y(){const j=s.length/3;if(d){let K=0,J=nt*K;for(let $=0;$<se;$++){const ut=Zt[$];wt(ut[2]+J,ut[1]+J,ut[0]+J)}K=h+m*2,J=nt*K;for(let $=0;$<se;$++){const ut=Zt[$];wt(ut[0]+J,ut[1]+J,ut[2]+J)}}else{for(let K=0;K<se;K++){const J=Zt[K];wt(J[2],J[1],J[0])}for(let K=0;K<se;K++){const J=Zt[K];wt(J[0]+nt*h,J[1]+nt*h,J[2]+nt*h)}}n.addGroup(j,s.length/3-j,0)}function Q(){const j=s.length/3;let K=0;St(q,K),K+=q.length;for(let J=0,$=L.length;J<$;J++){const ut=L[J];St(ut,K),K+=ut.length}n.addGroup(j,s.length/3-j,1)}function St(j,K){let J=j.length;for(;--J>=0;){const $=J;let ut=J-1;ut<0&&(ut=j.length-1);for(let it=0,dt=h+m*2;it<dt;it++){const Bt=nt*it,zt=nt*(it+1),T=K+$+Bt,v=K+ut+Bt,O=K+ut+zt,H=K+$+zt;Jt(T,v,O,H)}}}function Dt(j,K,J){l.push(j),l.push(K),l.push(J)}function wt(j,K,J){ue(j),ue(K),ue(J);const $=s.length/3,ut=S.generateTopUV(n,s,$-3,$-2,$-1);R(ut[0]),R(ut[1]),R(ut[2])}function Jt(j,K,J,$){ue(j),ue(K),ue($),ue(K),ue(J),ue($);const ut=s.length/3,it=S.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);R(it[0]),R(it[1]),R(it[3]),R(it[1]),R(it[2]),R(it[3])}function ue(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function R(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new eo[s.type]().fromJSON(s)),new bo(n,t.options)}}const sd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,a),new mt(o,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new mt(a,1-l),new mt(c,1-u),new mt(d,1-g),new mt(_,1-p)]:[new mt(o,1-l),new mt(h,1-u),new mt(f,1-g),new mt(m,1-p)]}};function rd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class On extends yo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new On(t.radius,t.detail)}}class bn extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let M=0;M<c;M++){const x=M*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const M=S+c*p,x=S+c*(p+1),A=S+1+c*(p+1),w=S+1+c*p;f.push(M,x,w),f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bi extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new C,g=new mt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,M=S,x=S+n+1,A=S+n+2,w=S+1;o.push(M,x,w),o.push(x,A,w)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class To extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-M),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const M=h[p][S+1],x=h[p][S],A=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&f.push(M,x,w),(p!==n-1||l<Math.PI)&&f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tn extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fn extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ad extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class od extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hc extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ld extends Hc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new he,El=new C,bl=new C;class cd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;El.setFromMatrixPosition(t.matrixWorld),e.position.copy(El),bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bl),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wo extends Ac{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hd extends cd{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends Hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new hd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dd extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Tl=new he;class fd{constructor(t,e,n=0,s=1/0){this.ray=new _o(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera&&(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e)}setFromXRController(t){return Tl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tl),this}intersectObject(t,e=!0,n=[]){return so(t,this,n,e),n.sort(wl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)so(t[s],this,n,e);return n.sort(wl),n}}function wl(i,t){return i.distance-t.distance}function so(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)so(r[a],t,e,!0)}}function Al(i,t,e,n){const s=pd(n);switch(e){case gc:return i*t;case uo:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case vc:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case _c:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ca:return Math.max(i,16)*Math.max(t,8)/4;case wa:case Ra:return Math.max(i,8)*Math.max(t,8)/2;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ya:case $a:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ka:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pd(i){switch(i){case dn:case dc:return{byteLength:1,components:1};case fs:case fc:case Ss:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case ri:case lo:case hn:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=oo));function Vc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function md(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,up=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:Md,alphatest_pars_fragment:yd,aomap_fragment:Sd,aomap_pars_fragment:Ed,batching_pars_vertex:bd,batching_vertex:Td,begin_vertex:wd,beginnormal_vertex:Ad,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:zd,common:Bd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:Yd,envmap_fragment:$d,envmap_common_pars_fragment:Jd,envmap_pars_fragment:Kd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:cf,envmap_vertex:jd,fog_vertex:Qd,fog_pars_vertex:tf,fog_fragment:ef,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:af,lights_lambert_pars_fragment:of,lights_pars_begin:lf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:_f,lights_fragment_end:vf,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:yf,logdepthbuf_vertex:Sf,map_fragment:Ef,map_pars_fragment:bf,map_particle_fragment:Tf,map_particle_pars_fragment:wf,metalnessmap_fragment:Af,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Cf,morphcolor_vertex:Pf,morphnormal_vertex:Lf,morphtarget_pars_vertex:Df,morphtarget_vertex:If,normal_fragment_begin:Uf,normal_fragment_maps:Nf,normal_pars_fragment:Ff,normal_pars_vertex:Of,normal_vertex:zf,normalmap_pars_fragment:Bf,clearcoat_normal_fragment_begin:kf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Vf,iridescence_pars_fragment:Gf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:Yf,dithering_fragment:$f,dithering_pars_fragment:Jf,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:tp,shadowmask_pars_fragment:ep,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:sp,skinnormal_vertex:rp,specularmap_fragment:ap,specularmap_pars_fragment:op,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:hp,transmission_pars_fragment:up,uv_pars_fragment:dp,uv_pars_vertex:fp,uv_vertex:pp,worldpos_vertex:mp,background_vert:gp,background_frag:_p,backgroundCube_vert:vp,backgroundCube_frag:xp,cube_vert:Mp,cube_frag:yp,depth_vert:Sp,depth_frag:Ep,distanceRGBA_vert:bp,distanceRGBA_frag:Tp,equirect_vert:wp,equirect_frag:Ap,linedashed_vert:Rp,linedashed_frag:Cp,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Dp,meshlambert_frag:Ip,meshmatcap_vert:Up,meshmatcap_frag:Np,meshnormal_vert:Fp,meshnormal_frag:Op,meshphong_vert:zp,meshphong_frag:Bp,meshphysical_vert:kp,meshphysical_frag:Hp,meshtoon_vert:Vp,meshtoon_frag:Gp,points_vert:Wp,points_frag:Xp,shadow_vert:qp,shadow_frag:Yp,sprite_vert:$p,sprite_frag:Jp},gt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ln={basic:{uniforms:Ne([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ne([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ne([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ne([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ne([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ne([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ne([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ne([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ne([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ne([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ne([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ne([gt.common,gt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ne([gt.lights,gt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};ln.physical={uniforms:Ne([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Qs={r:0,b:0,g:0},Kn=new fn,Kp=new he;function Zp(i,t,e,n,s,r,a){const o=new Yt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const A=g(M);A===null?p(o,l):A&&A.isColor&&(p(A,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Mr)?(h===void 0&&(h=new Ht(new Xi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Fi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Kn.copy(x.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(Kn)),h.material.toneMapped=te.getTransfer(A.colorSpace)!==oe,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ht(new bn(2,2),new Hn({name:"BackgroundMaterial",uniforms:Fi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Qs,wc(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,x,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m,dispose:S}}function jp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,L,F,k,W){let q=!1;const G=u(k,F,L);r!==G&&(r=G,c(r.object)),q=f(y,k,F,W),q&&g(y,k,F,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(y,L,F,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,F){const k=F.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let G=q[k];return G===void 0&&(G=d(l()),q[k]=G),G}function d(y){const L=[],F=[],k=[];for(let W=0;W<e;W++)L[W]=0,F[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,L,F,k){const W=r.attributes,q=L.attributes;let G=0;const nt=F.getAttributes();for(const V in nt)if(nt[V].location>=0){const Mt=W[V];let bt=q[V];if(bt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor)),Mt===void 0||Mt.attribute!==bt||bt&&Mt.data!==bt.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(y,L,F,k){const W={},q=L.attributes;let G=0;const nt=F.getAttributes();for(const V in nt)if(nt[V].location>=0){let Mt=q[V];Mt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor));const bt={};bt.attribute=Mt,Mt&&Mt.data&&(bt.data=Mt.data),W[V]=bt,G++}r.attributes=W,r.attributesNum=G,r.index=k}function _(){const y=r.newAttributes;for(let L=0,F=y.length;L<F;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const F=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;F[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),W[y]!==L&&(i.vertexAttribDivisor(y,L),W[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==y[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function M(y,L,F,k,W,q,G){G===!0?i.vertexAttribIPointer(y,L,F,W,q):i.vertexAttribPointer(y,L,F,k,W,q)}function x(y,L,F,k){_();const W=k.attributes,q=F.getAttributes(),G=L.defaultAttributeValues;for(const nt in q){const V=q[nt];if(V.location>=0){let ft=W[nt];if(ft===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),ft!==void 0){const Mt=ft.normalized,bt=ft.itemSize,Vt=t.get(ft);if(Vt===void 0)continue;const Zt=Vt.buffer,se=Vt.type,jt=Vt.bytesPerElement,Y=se===i.INT||se===i.UNSIGNED_INT||ft.gpuType===lo;if(ft.isInterleavedBufferAttribute){const Q=ft.data,St=Q.stride,Dt=ft.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<V.locationSize;wt++)p(V.location+wt,Q.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<V.locationSize;wt++)m(V.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let wt=0;wt<V.locationSize;wt++)M(V.location+wt,bt/V.locationSize,se,Mt,St*jt,(Dt+bt/V.locationSize*wt)*jt,Y)}else{if(ft.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,ft.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Q=0;Q<V.locationSize;Q++)M(V.location+Q,bt/V.locationSize,se,Mt,bt*jt,bt/V.locationSize*Q*jt,Y)}}else if(G!==void 0){const Mt=G[nt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(V.location,Mt);break;case 3:i.vertexAttrib3fv(V.location,Mt);break;case 4:i.vertexAttrib4fv(V.location,Mt);break;default:i.vertexAttrib1fv(V.location,Mt)}}}}S()}function A(){D();for(const y in n){const L=n[y];for(const F in L){const k=L[F];for(const W in k)h(k[W].object),delete k[W];delete L[F]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const F in L){const k=L[F];for(const W in k)h(k[W].object),delete k[W];delete L[F]}delete n[y.id]}function P(y){for(const L in n){const F=n[L];if(F[y.id]===void 0)continue;const k=F[y.id];for(const W in k)h(k[W].object),delete k[W];delete F[y.id]}}function D(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Qp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==an&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const D=P===Ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==dn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==hn&&!D)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function em(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Un,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,M=S*4;let x=p.clippingState||null;l.value=x,x=h(g,d,M,f);for(let A=0;A!==M;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)a.copy(u[M]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function nm(i){let t=new WeakMap;function e(a,o){return o===Sa?a.mapping=Ii:o===Ea&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===Ea)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ri=4,Rl=[.125,.215,.35,.446,.526,.582],Ci=20,ia=new wo,Cl=new Yt;let sa=null,ra=0,aa=0,oa=!1;const ti=(1+Math.sqrt(5))/2,Ti=1/ti,Pl=[new C(-ti,Ti,0),new C(ti,Ti,0),new C(-Ti,0,ti),new C(Ti,0,ti),new C(0,ti,-Ti),new C(0,ti,Ti),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],im=new C;class Ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=im}=r;sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,ra,aa),this._renderer.xr.enabled=oa,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ss,format:an,colorSpace:Ni,depthBuffer:!1},s=Dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(r)),this._blurMaterial=rm(r,t,e)}return s}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s,r){const l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Cl),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Ye({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),m=new Ht(new Xi,_);let p=!1;const S=t.background;S?S.isColor&&(_.color.copy(S),t.background=null,p=!0):(_.color.copy(Cl),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const A=this._cubeSize;tr(s,x*A,M>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ii||t.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pl[(s-r-1)%Pl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial,h=3,u=new Ht(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ci;m>Ci;const p=[];let S=0;for(let P=0;P<Ci;++P){const D=P/_,b=Math.exp(-D*D/2);p.push(b),P===0?S+=b:P<m&&(S+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[s],A=3*x*(s>M-Ri?s-M+Ri:0),w=4*(this._cubeSize-x);tr(e,A,w,3*x,2*x),l.setRenderTarget(e),l.render(u,ia)}}function sm(i){const t=[],e=[],n=[];let s=i;const r=i-Ri+1+Rl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ri?l=Rl[a-i+Ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const P=w%3*2/3-1,D=w>2?0:-1,b=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];S.set(b,_*g*w),M.set(d,m*g*w);const y=[w,w,w,w,w,w];x.set(y,p*g*w)}const A=new Te;A.setAttribute("position",new Ve(S,_)),A.setAttribute("uv",new Ve(M,m)),A.setAttribute("faceIndex",new Ve(x,p)),t.push(A),s>Ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dl(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rm(i,t,e){const n=new Float32Array(Ci),s=new C(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Il(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ul(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function am(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===Ea,h=l===Ii||l===Ui;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ll(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ll(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function om(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lm(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let M=0,x=S.length;M<x;M+=3){const A=S[M+0],w=S[M+1],P=S[M+2];d.push(A,w,w,P,P,A)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const A=M+0,w=M+1,P=M+2;d.push(A,w,w,P,P,A)}}else return;const m=new(yc(d)?Tc:bc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function cm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function um(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=o.attributes.position.count*M,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*A*4*u),P=new Sc(w,x,A,u);P.type=hn,P.needsUpdate=!0;const D=M*4;for(let y=0;y<u;y++){const L=m[y],F=p[y],k=S[y],W=x*A*4*y;for(let q=0;q<L.count;q++){const G=q*D;f===!0&&(s.fromBufferAttribute(L,q),w[W+G+0]=s.x,w[W+G+1]=s.y,w[W+G+2]=s.z,w[W+G+3]=0),g===!0&&(s.fromBufferAttribute(F,q),w[W+G+4]=s.x,w[W+G+5]=s.y,w[W+G+6]=s.z,w[W+G+7]=0),_===!0&&(s.fromBufferAttribute(k,q),w[W+G+8]=s.x,w[W+G+9]=s.y,w[W+G+10]=s.z,w[W+G+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new mt(x,A)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Gc=new Fe,Nl=new Pc(1,1),Wc=new Sc,Xc=new eu,qc=new Rc,Fl=[],Ol=[],zl=new Float32Array(16),Bl=new Float32Array(9),kl=new Float32Array(4);function qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fl[s];if(r===void 0&&(r=new Float32Array(s),Fl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yr(i,t){let e=Ol[t];e===void 0&&(e=new Int32Array(t),Ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;kl.set(n),i.uniformMatrix2fv(this.addr,!1,kl),be(e,n)}}function vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),be(e,n)}}function xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;zl.set(n),i.uniformMatrix4fv(this.addr,!1,zl),be(e,n)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nl.compareFunction=Mc,r=Nl):r=Gc,e.setTexture2D(t||r,s)}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xc,s)}function Pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qc,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wc,s)}function Dm(i){switch(i){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return Mm;case 35667:case 35671:return ym;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return bm;case 36294:return Tm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Im(i,t){i.uniform1fv(this.addr,t)}function Um(i,t){const e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Nm(i,t){const e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Fm(i,t){const e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Om(i,t){const e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zm(i,t){const e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bm(i,t){const e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function Hm(i,t){i.uniform2iv(this.addr,t)}function Vm(i,t){i.uniform3iv(this.addr,t)}function Gm(i,t){i.uniform4iv(this.addr,t)}function Wm(i,t){i.uniform1uiv(this.addr,t)}function Xm(i,t){i.uniform2uiv(this.addr,t)}function qm(i,t){i.uniform3uiv(this.addr,t)}function Ym(i,t){i.uniform4uiv(this.addr,t)}function $m(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Gc,r[a])}function Jm(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xc,r[a])}function Km(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qc,r[a])}function Zm(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wc,r[a])}function jm(i){switch(i){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Zm}}class Qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dm(e.type)}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jm(e.type)}}class e0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Hl(i,t){i.seq.push(t),i.map[t.id]=t}function n0(i,t,e){const n=i.name,s=n.length;for(la.lastIndex=0;;){const r=la.exec(n),a=la.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hl(e,c===void 0?new Qm(o,i,t):new t0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new e0(o),Hl(e,u)),e=u}}}class hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);n0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Vl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i0=37297;let s0=0;function r0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Gl=new Xt;function a0(i){te._getMatrix(Gl,te.workingColorSpace,i);const t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return[t,"LinearTransferOETF"]}}function Wl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+r0(i.getShaderSource(t),o)}else return r}function o0(i,t){const e=a0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function l0(i,t){let e;switch(t){case Ph:e="Linear";break;case Lh:e="Reinhard";break;case Dh:e="Cineon";break;case hc:e="ACESFilmic";break;case Uh:e="AgX";break;case Nh:e="Neutral";break;case Ih:e="Custom";break;default:e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new C;function c0(){te.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function u0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ls(i){return i!==""}function Xl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(i){return i.replace(f0,m0)}const p0=new Map;function m0(i,t){let e=qt[t];if(e===void 0){const n=p0.get(t);if(n!==void 0)e=qt[n];else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(i){return i.replace(g0,_0)}function _0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $l(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function x0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Ui:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ui&&(t="ENVMAP_MODE_REFRACTION"),t}function y0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case Rh:t="ENVMAP_BLENDING_MIX";break;case Ch:t="ENVMAP_BLENDING_ADD";break}return t}function S0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function E0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=v0(e),c=x0(e),h=M0(e),u=y0(e),d=S0(e),f=h0(e),g=u0(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(m=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?l0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),c0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=ro(a),a=Xl(a,e),a=ql(a,e),o=ro(o),o=Xl(o,e),o=ql(o,e),a=Yl(a),o=Yl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+a,x=S+p+o,A=Vl(s,s.VERTEX_SHADER,M),w=Vl(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(w)||"",q=F.trim(),G=k.trim(),nt=W.trim();let V=!0,ft=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{const Mt=Wl(s,A,"vertex"),bt=Wl(s,w,"fragment")}else q!==""||(G===""||nt==="")&&(ft=!1);ft&&(L.diagnostics={runnable:V,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(A),s.deleteShader(w),D=new hr(s,_),b=d0(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,i0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let b0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w0(t),e.set(t,n)),n}}class w0{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}}function A0(i,t,e,n,s,r,a){const o=new vo,l=new T0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,F,k){const W=F.fog,q=k.geometry,G=b.isMeshStandardMaterial?F.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),V=nt&&nt.mapping===Mr?nt.image.height:null,ft=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),b.precision);const Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bt=Mt!==void 0?Mt.length:0;let Vt=0;q.morphAttributes.position!==void 0&&(Vt=1),q.morphAttributes.normal!==void 0&&(Vt=2),q.morphAttributes.color!==void 0&&(Vt=3);let Zt,se,jt,Y;if(ft){const ne=ln[ft];Zt=ne.vertexShader,se=ne.fragmentShader}else Zt=b.vertexShader,se=b.fragmentShader,l.update(b),jt=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);const Q=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,wt=k.isBatchedMesh===!0,Jt=!!b.map,ue=!!b.matcap,R=!!nt,j=!!b.aoMap,K=!!b.lightMap,J=!!b.bumpMap,$=!!b.normalMap,ut=!!b.displacementMap,it=!!b.emissiveMap,dt=!!b.metalnessMap,Bt=!!b.roughnessMap,zt=b.anisotropy>0,T=b.clearcoat>0,v=b.dispersion>0,O=b.iridescence>0,H=b.sheen>0,tt=b.transmission>0,X=zt&&!!b.anisotropyMap,Pt=T&&!!b.clearcoatMap,ct=T&&!!b.clearcoatNormalMap,At=T&&!!b.clearcoatRoughnessMap,Rt=O&&!!b.iridescenceMap,rt=O&&!!b.iridescenceThicknessMap,xt=H&&!!b.sheenColorMap,Ft=H&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,_t=!!b.specularColorMap,Wt=!!b.specularIntensityMap,I=tt&&!!b.transmissionMap,lt=tt&&!!b.thicknessMap,pt=!!b.gradientMap,Et=!!b.alphaMap,at=b.alphaTest>0,Z=!!b.alphaHash,Ct=!!b.extensions;let kt=Bn;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=i.toneMapping);const de={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:Zt,fragmentShader:se,defines:b.defines,customVertexShaderID:jt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:wt,batchingColor:wt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ni,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:ue,envMap:R,envMapMode:R&&nt.mapping,envMapCubeUVHeight:V,aoMap:j,lightMap:K,bumpMap:J,normalMap:$,displacementMap:d&&ut,emissiveMap:it,normalMapObjectSpace:$&&b.normalMapType===Bh,normalMapTangentSpace:$&&b.normalMapType===xc,metalnessMap:dt,roughnessMap:Bt,anisotropy:zt,anisotropyMap:X,clearcoat:T,clearcoatMap:Pt,clearcoatNormalMap:ct,clearcoatRoughnessMap:At,dispersion:v,iridescence:O,iridescenceMap:Rt,iridescenceThicknessMap:rt,sheen:H,sheenColorMap:xt,sheenRoughnessMap:Ft,specularMap:Lt,specularColorMap:_t,specularIntensityMap:Wt,transmission:tt,transmissionMap:I,thicknessMap:lt,gradientMap:pt,opaque:b.transparent===!1&&b.blending===Pi&&b.alphaToCoverage===!1,alphaMap:Et,alphaTest:at,alphaHash:Z,combine:b.combine,mapUv:Jt&&_(b.map.channel),aoMapUv:j&&_(b.aoMap.channel),lightMapUv:K&&_(b.lightMap.channel),bumpMapUv:J&&_(b.bumpMap.channel),normalMapUv:$&&_(b.normalMap.channel),displacementMapUv:ut&&_(b.displacementMap.channel),emissiveMapUv:it&&_(b.emissiveMap.channel),metalnessMapUv:dt&&_(b.metalnessMap.channel),roughnessMapUv:Bt&&_(b.roughnessMap.channel),anisotropyMapUv:X&&_(b.anisotropyMap.channel),clearcoatMapUv:Pt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(b.sheenRoughnessMap.channel),specularMapUv:Lt&&_(b.specularMap.channel),specularColorMapUv:_t&&_(b.specularColorMap.channel),specularIntensityMapUv:Wt&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:lt&&_(b.thicknessMap.channel),alphaMapUv:Et&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($||zt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Jt||Et),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:it&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ke,flipSided:b.side===He,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ct&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&b.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const y=g[b.type];let L;if(y){const F=ln[y];L=pu.clone(F.uniforms)}else L=b.uniforms;return L}function A(b,y){let L;for(let F=0,k=h.length;F<k;F++){const W=h[F];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new E0(i,y,b,r),h.push(L)),L}function w(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function P(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:D}}function R0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||C0),n.length>1&&n.sort(d||Jl),s.length>1&&s.sort(d||Jl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function P0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kl,i.set(n,[a])):s>=r.length?(a=new Kl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function L0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Yt};break;case"SpotLight":e={position:new C,direction:new C,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function D0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I0=0;function U0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N0(i){const t=new L0,e=D0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new he,a=new he;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,M=0,x=0,A=0,w=0,P=0;c.sort(U0);for(let b=0,y=c.length;b<y;b++){const L=c[b],F=L.color,k=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],k);P++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const nt=L.shadow,V=e.get(L);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=G,f++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[_]=G;const nt=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,nt.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=nt.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,x++}_++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const nt=L.shadow,V=e.get(L);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,V.shadowCameraNear=nt.camera.near,V.shadowCameraFar=nt.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(k),G.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==x||D.numSpotMaps!==A||D.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=x,D.numSpotMaps=A,D.numLightProbes=P,n.version=I0++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Zl(i){const t=new N0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function F0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zl(i),t.set(s,[o])):r>=a.length?(o=new Zl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function B0(i,t,e){let n=new Mo;const s=new mt,r=new mt,a=new xe,o=new ad({depthPacking:zh}),l=new od,c={},h=e.maxTextureSize,u={[kn]:He,[He]:kn,[ke]:ke},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:O0,fragmentShader:z0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let p=this.type;this.render=function(w,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==Sn&&this.type===Sn,W=p===Sn&&this.type!==Sn;for(let q=0,G=w.length;q<G;q++){const nt=w[q],V=nt.shadow;if(V===void 0||V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ft=V.getFrameExtents();if(s.multiply(ft),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,V.mapSize.y=r.y)),V.map===null||k===!0||W===!0){const bt=this.type!==Sn?{minFilter:Je,magFilter:Je}:{};V.map!==null&&V.map.dispose(),V.map=new ai(s.x,s.y,bt),V.map.texture.name=nt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Mt=V.getViewportCount();for(let bt=0;bt<Mt;bt++){const Vt=V.getViewport(bt);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),F.viewport(a),V.updateMatrices(nt,bt),n=V.getFrustum(),x(P,D,V.camera,nt,this.type)}V.isPointLightShadow!==!0&&this.type===Sn&&S(V,D),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,L)};function S(w,P){const D=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,D,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,D,f,_,null)}function M(w,P,D,b){let y=null;const L=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=y.uuid,k=P.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let q=W[k];q===void 0&&(q=y.clone(),W[k]=q,P.addEventListener("dispose",A)),y=q}if(y.visible=P.visible,y.wireframe=P.wireframe,b===Sn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=D}return y}function x(w,P,D,b,y){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const k=t.update(w),W=w.material;if(Array.isArray(W)){const q=k.groups;for(let G=0,nt=q.length;G<nt;G++){const V=q[G],ft=W[V.materialIndex];if(ft&&ft.visible){const Mt=M(w,ft,b,y);w.onBeforeShadow(i,w,P,D,k,Mt,V),i.renderBufferDirect(D,null,k,Mt,w,V),w.onAfterShadow(i,w,P,D,k,Mt,V)}}}else if(W.visible){const q=M(w,W,b,y);w.onBeforeShadow(i,w,P,D,k,q,null),i.renderBufferDirect(D,null,k,q,w,null),w.onAfterShadow(i,w,P,D,k,q,null)}}const F=w.children;for(let k=0,W=F.length;k<W;k++)x(F[k],P,D,b,y)}function A(w){w.target.removeEventListener("dispose",A);for(const D in c){const b=c[D],y=w.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const k0={[ma]:ga,[_a]:Ma,[va]:ya,[Di]:xa,[ga]:ma,[Ma]:_a,[ya]:va,[xa]:Di};function H0(i,t){function e(){let I=!1;const lt=new xe;let pt=null;const Et=new xe(0,0,0,0);return{setMask:function(at){pt!==at&&!I&&(i.colorMask(at,at,at,at),pt=at)},setLocked:function(at){I=at},setClear:function(at,Z,Ct,kt,de){de===!0&&(at*=kt,Z*=kt,Ct*=kt),lt.set(at,Z,Ct,kt),Et.equals(lt)===!1&&(i.clearColor(at,Z,Ct,kt),Et.copy(lt))},reset:function(){I=!1,pt=null,Et.set(-1,0,0,0)}}}function n(){let I=!1,lt=!1,pt=null,Et=null,at=null;return{setReversed:function(Z){if(lt!==Z){const Ct=t.get("EXT_clip_control");Z?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),lt=Z;const kt=at;at=null,this.setClear(kt)}},getReversed:function(){return lt},setTest:function(Z){Z?Q(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Z){pt!==Z&&!I&&(i.depthMask(Z),pt=Z)},setFunc:function(Z){if(lt&&(Z=k0[Z]),Et!==Z){switch(Z){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Z}},setLocked:function(Z){I=Z},setClear:function(Z){at!==Z&&(lt&&(Z=1-Z),i.clearDepth(Z),at=Z)},reset:function(){I=!1,pt=null,Et=null,at=null,lt=!1}}}function s(){let I=!1,lt=null,pt=null,Et=null,at=null,Z=null,Ct=null,kt=null,de=null;return{setTest:function(ne){I||(ne?Q(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ne){lt!==ne&&!I&&(i.stencilMask(ne),lt=ne)},setFunc:function(ne,mn,on){(pt!==ne||Et!==mn||at!==on)&&(i.stencilFunc(ne,mn,on),pt=ne,Et=mn,at=on)},setOp:function(ne,mn,on){(Z!==ne||Ct!==mn||kt!==on)&&(i.stencilOp(ne,mn,on),Z=ne,Ct=mn,kt=on)},setLocked:function(ne){I=ne},setClear:function(ne){de!==ne&&(i.clearStencil(ne),de=ne)},reset:function(){I=!1,lt=null,pt=null,Et=null,at=null,Z=null,Ct=null,kt=null,de=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,M=null,x=null,A=null,w=null,P=new Yt(0,0,0),D=0,b=!1,y=null,L=null,F=null,k=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,nt=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=nt>=1):V.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=nt>=2);let ft=null,Mt={};const bt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),Zt=new xe().fromArray(bt),se=new xe().fromArray(Vt);function jt(I,lt,pt,Et){const at=new Uint8Array(4),Z=i.createTexture();i.bindTexture(I,Z),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<pt;Ct++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(lt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Z}const Y={};Y[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Di),J(!1),$(Ho),Q(i.CULL_FACE),j(zn);function Q(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function St(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Dt(I,lt){return u[I]!==lt?(i.bindFramebuffer(I,lt),u[I]=lt,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function wt(I,lt){let pt=f,Et=!1;if(I){pt=d.get(lt),pt===void 0&&(pt=[],d.set(lt,pt));const at=I.textures;if(pt.length!==at.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Ct=at.length;Z<Ct;Z++)pt[Z]=i.COLOR_ATTACHMENT0+Z;pt.length=at.length,Et=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(pt)}function Jt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const ue={[ei]:i.FUNC_ADD,[uh]:i.FUNC_SUBTRACT,[dh]:i.FUNC_REVERSE_SUBTRACT};ue[fh]=i.MIN,ue[ph]=i.MAX;const R={[mh]:i.ZERO,[gh]:i.ONE,[_h]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[Eh]:i.SRC_ALPHA_SATURATE,[yh]:i.DST_COLOR,[xh]:i.DST_ALPHA,[vh]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[Sh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[bh]:i.CONSTANT_COLOR,[Th]:i.ONE_MINUS_CONSTANT_COLOR,[wh]:i.CONSTANT_ALPHA,[Ah]:i.ONE_MINUS_CONSTANT_ALPHA};function j(I,lt,pt,Et,at,Z,Ct,kt,de,ne){if(I===zn){_===!0&&(St(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),I!==hh){if(I!==m||ne!==b){if((p!==ei||x!==ei)&&(i.blendEquation(i.FUNC_ADD),p=ei,x=ei),ne)switch(I){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:break}else switch(I){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Go:break;case Wo:break;default:break}S=null,M=null,A=null,w=null,P.set(0,0,0),D=0,m=I,b=ne}return}at=at||lt,Z=Z||pt,Ct=Ct||Et,(lt!==p||at!==x)&&(i.blendEquationSeparate(ue[lt],ue[at]),p=lt,x=at),(pt!==S||Et!==M||Z!==A||Ct!==w)&&(i.blendFuncSeparate(R[pt],R[Et],R[Z],R[Ct]),S=pt,M=Et,A=Z,w=Ct),(kt.equals(P)===!1||de!==D)&&(i.blendColor(kt.r,kt.g,kt.b,de),P.copy(kt),D=de),m=I,b=!1}function K(I,lt){I.side===ke?St(i.CULL_FACE):Q(i.CULL_FACE);let pt=I.side===He;lt&&(pt=!pt),J(pt),I.blending===Pi&&I.transparent===!1?j(zn):j(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Et=I.stencilWrite;o.setTest(Et),Et&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function $(I){I!==lh?(Q(i.CULL_FACE),I!==L&&(I===Ho?i.cullFace(i.BACK):I===ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),L=I}function ut(I){I!==F&&(G&&i.lineWidth(I),F=I)}function it(I,lt,pt){I?(Q(i.POLYGON_OFFSET_FILL),(k!==lt||W!==pt)&&(i.polygonOffset(lt,pt),k=lt,W=pt)):St(i.POLYGON_OFFSET_FILL)}function dt(I){I?Q(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Bt(I){I===void 0&&(I=i.TEXTURE0+q-1),ft!==I&&(i.activeTexture(I),ft=I)}function zt(I,lt,pt){pt===void 0&&(ft===null?pt=i.TEXTURE0+q-1:pt=ft);let Et=Mt[pt];Et===void 0&&(Et={type:void 0,texture:void 0},Mt[pt]=Et),(Et.type!==I||Et.texture!==lt)&&(ft!==pt&&(i.activeTexture(pt),ft=pt),i.bindTexture(I,lt||Y[I]),Et.type=I,Et.texture=lt)}function T(){const I=Mt[ft];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch{}}function O(){try{i.compressedTexImage3D(...arguments)}catch{}}function H(){try{i.texSubImage2D(...arguments)}catch{}}function tt(){try{i.texSubImage3D(...arguments)}catch{}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch{}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch{}}function ct(){try{i.texStorage2D(...arguments)}catch{}}function At(){try{i.texStorage3D(...arguments)}catch{}}function Rt(){try{i.texImage2D(...arguments)}catch{}}function rt(){try{i.texImage3D(...arguments)}catch{}}function xt(I){Zt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function Ft(I){se.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),se.copy(I))}function Lt(I,lt){let pt=c.get(lt);pt===void 0&&(pt=new WeakMap,c.set(lt,pt));let Et=pt.get(I);Et===void 0&&(Et=i.getUniformBlockIndex(lt,I.name),pt.set(I,Et))}function _t(I,lt){const Et=c.get(lt).get(I);l.get(lt)!==Et&&(i.uniformBlockBinding(lt,Et,I.__bindingPointIndex),l.set(lt,Et))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,Mt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,M=null,x=null,A=null,w=null,P=new Yt(0,0,0),D=0,b=!1,y=null,L=null,F=null,k=null,W=null,Zt.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:St,bindFramebuffer:Dt,drawBuffers:wt,useProgram:Jt,setBlending:j,setMaterial:K,setFlipSided:J,setCullFace:$,setLineWidth:ut,setPolygonOffset:it,setScissorTest:dt,activeTexture:Bt,bindTexture:zt,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Rt,texImage3D:rt,updateUBOMapping:Lt,uniformBlockBinding:_t,texStorage2D:ct,texStorage3D:At,texSubImage2D:H,texSubImage3D:tt,compressedTexSubImage2D:X,compressedTexSubImage3D:Pt,scissor:xt,viewport:Ft,reset:Wt}}function V0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):pr("canvas")}function _(T,v,O){let H=1;const tt=zt(T);if((tt.width>O||tt.height>O)&&(H=O/Math.max(tt.width,tt.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(H*tt.width),Pt=Math.floor(H*tt.height);u===void 0&&(u=g(X,Pt));const ct=v?g(X,Pt):u;return ct.width=X,ct.height=Pt,ct.getContext("2d").drawImage(T,0,0,X,Pt),ct}else return"data"in T,T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,v,O,H,tt=!1){if(T!==null&&i[T]!==void 0)return i[T];let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const Pt=tt?dr:te.getTransfer(H);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=Pt===oe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(T,v){let O;return T?v===null||v===ri||v===ps?O=i.DEPTH24_STENCIL8:v===hn?O=i.DEPTH32F_STENCIL8:v===fs&&(O=i.DEPTH24_STENCIL8):v===null||v===ri||v===ps?O=i.DEPTH_COMPONENT24:v===hn?O=i.DEPTH_COMPONENT32F:v===fs&&(O=i.DEPTH_COMPONENT16),O}function A(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Je&&T.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),D(v),v.isVideoTexture&&h.delete(v)}function P(T){const v=T.target;v.removeEventListener("dispose",P),y(v)}function D(T){const v=n.get(T);if(v.__webglInit===void 0)return;const O=T.source,H=d.get(O);if(H){const tt=H[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(T),Object.keys(H).length===0&&d.delete(O)}n.remove(T)}function b(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const O=T.source,H=d.get(O);delete H[v.__cacheKey],a.memory.textures--}function y(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let tt=0;tt<v.__webglFramebuffer[H].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[H][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)i.deleteFramebuffer(v.__webglFramebuffer[H]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let H=0,tt=O.length;H<tt;H++){const X=n.get(O[H]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[H])}n.remove(T)}let L=0;function F(){L=0}function k(){const T=L;return T>=s.maxTextures,L+=1,T}function W(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function q(T,v){const O=n.get(T);if(T.isVideoTexture&&dt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const H=T.image;if(H!==null){if(H.complete!==!1){Y(O,T,v);return}}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function G(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function nt(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function V(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Q(O,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const ft={[ba]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},Mt={[Je]:i.NEAREST,[Fh]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},bt={[kh]:i.NEVER,[qh]:i.ALWAYS,[Hh]:i.LESS,[Mc]:i.LEQUAL,[Vh]:i.EQUAL,[Xh]:i.GEQUAL,[Gh]:i.GREATER,[Wh]:i.NOTEQUAL};function Vt(T,v){if(v.type===hn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===Ar||v.magFilter===ws||v.magFilter===ii||v.minFilter===cn||v.minFilter===Ar||v.minFilter===ws||v.minFilter),i.texParameteri(T,i.TEXTURE_WRAP_S,ft[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ft[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ft[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Mt[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Mt[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==ws&&v.minFilter!==ii||v.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const H=v.source;let tt=d.get(H);tt===void 0&&(tt={},d.set(H,tt));const X=W(v);if(X!==T.__cacheKey){tt[X]===void 0&&(tt[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[X].usedTimes++;const Pt=tt[T.__cacheKey];Pt!==void 0&&(tt[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(v)),T.__cacheKey=X,T.__webglTexture=tt[X].texture}return O}function se(T,v,O){return Math.floor(Math.floor(T/O)/v)}function jt(T,v,O,H){const X=T.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,H,v.data);else{X.sort((rt,xt)=>rt.start-xt.start);let Pt=0;for(let rt=1;rt<X.length;rt++){const xt=X[Pt],Ft=X[rt],Lt=xt.start+xt.count,_t=se(Ft.start,v.width,4),Wt=se(xt.start,v.width,4);Ft.start<=Lt+1&&_t===Wt&&se(Ft.start+Ft.count-1,v.width,4)===_t?xt.count=Math.max(xt.count,Ft.start+Ft.count-xt.start):(++Pt,X[Pt]=Ft)}X.length=Pt+1;const ct=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let rt=0,xt=X.length;rt<xt;rt++){const Ft=X[rt],Lt=Math.floor(Ft.start/4),_t=Math.ceil(Ft.count/4),Wt=Lt%v.width,I=Math.floor(Lt/v.width),lt=_t,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Wt,I,lt,pt,O,H,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function Y(T,v,O){let H=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=i.TEXTURE_3D);const tt=Zt(T,v),X=v.source;e.bindTexture(H,T.__webglTexture,i.TEXTURE0+O);const Pt=n.get(X);if(X.version!==Pt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const ct=te.getPrimaries(te.workingColorSpace),At=v.colorSpace===Nn?null:te.getPrimaries(v.colorSpace),Rt=v.colorSpace===Nn||ct===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let rt=_(v.image,!1,s.maxTextureSize);rt=Bt(v,rt);const xt=r.convert(v.format,v.colorSpace),Ft=r.convert(v.type);let Lt=M(v.internalFormat,xt,Ft,v.colorSpace,v.isVideoTexture);Vt(H,v);let _t;const Wt=v.mipmaps,I=v.isVideoTexture!==!0,lt=Pt.__version===void 0||tt===!0,pt=X.dataReady,Et=A(v,rt);if(v.isDepthTexture)Lt=x(v.format===gs,v.type),lt&&(I?e.texStorage2D(i.TEXTURE_2D,1,Lt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,rt.width,rt.height,0,xt,Ft,null));else if(v.isDataTexture)if(Wt.length>0){I&&lt&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,Wt[0].width,Wt[0].height);for(let at=0,Z=Wt.length;at<Z;at++)_t=Wt[at],I?pt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,at,Lt,_t.width,_t.height,0,xt,Ft,_t.data);v.generateMipmaps=!1}else I?(lt&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,rt.width,rt.height),pt&&jt(v,rt,xt,Ft)):e.texImage2D(i.TEXTURE_2D,0,Lt,rt.width,rt.height,0,xt,Ft,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Lt,Wt[0].width,Wt[0].height,rt.depth);for(let at=0,Z=Wt.length;at<Z;at++)if(_t=Wt[at],v.format!==an){if(xt!==null)if(I){if(pt)if(v.layerUpdates.size>0){const Ct=Al(_t.width,_t.height,v.format,v.type);for(const kt of v.layerUpdates){const de=_t.data.subarray(kt*Ct/_t.data.BYTES_PER_ELEMENT,(kt+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,kt,_t.width,_t.height,1,xt,de)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,rt.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Lt,_t.width,_t.height,rt.depth,0,_t.data,0,0)}else I?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,rt.depth,xt,Ft,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Lt,_t.width,_t.height,rt.depth,0,xt,Ft,_t.data)}else{I&&lt&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,Wt[0].width,Wt[0].height);for(let at=0,Z=Wt.length;at<Z;at++)_t=Wt[at],v.format!==an?xt!==null&&(I?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Lt,_t.width,_t.height,0,_t.data)):I?pt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,at,Lt,_t.width,_t.height,0,xt,Ft,_t.data)}else if(v.isDataArrayTexture)if(I){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Lt,rt.width,rt.height,rt.depth),pt)if(v.layerUpdates.size>0){const at=Al(rt.width,rt.height,v.format,v.type);for(const Z of v.layerUpdates){const Ct=rt.data.subarray(Z*at/rt.data.BYTES_PER_ELEMENT,(Z+1)*at/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,rt.width,rt.height,1,xt,Ft,Ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Ft,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,rt.width,rt.height,rt.depth,0,xt,Ft,rt.data);else if(v.isData3DTexture)I?(lt&&e.texStorage3D(i.TEXTURE_3D,Et,Lt,rt.width,rt.height,rt.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Ft,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,rt.width,rt.height,rt.depth,0,xt,Ft,rt.data);else if(v.isFramebufferTexture){if(lt)if(I)e.texStorage2D(i.TEXTURE_2D,Et,Lt,rt.width,rt.height);else{let at=rt.width,Z=rt.height;for(let Ct=0;Ct<Et;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Lt,at,Z,0,xt,Ft,null),at>>=1,Z>>=1}}else if(Wt.length>0){if(I&&lt){const at=zt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Lt,at.width,at.height)}for(let at=0,Z=Wt.length;at<Z;at++)_t=Wt[at],I?pt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt,Ft,_t):e.texImage2D(i.TEXTURE_2D,at,Lt,xt,Ft,_t);v.generateMipmaps=!1}else if(I){if(lt){const at=zt(rt);e.texStorage2D(i.TEXTURE_2D,Et,Lt,at.width,at.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ft,rt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,xt,Ft,rt);m(v)&&p(H),Pt.__version=X.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Q(T,v,O){if(v.image.length!==6)return;const H=Zt(T,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const X=n.get(tt);if(tt.version!==X.__version||H===!0){e.activeTexture(i.TEXTURE0+O);const Pt=te.getPrimaries(te.workingColorSpace),ct=v.colorSpace===Nn?null:te.getPrimaries(v.colorSpace),At=v.colorSpace===Nn||Pt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,rt=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let Z=0;Z<6;Z++)!Rt&&!rt?xt[Z]=_(v.image[Z],!0,s.maxCubemapSize):xt[Z]=rt?v.image[Z].image:v.image[Z],xt[Z]=Bt(v,xt[Z]);const Ft=xt[0],Lt=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),Wt=M(v.internalFormat,Lt,_t,v.colorSpace),I=v.isVideoTexture!==!0,lt=X.__version===void 0||H===!0,pt=tt.dataReady;let Et=A(v,Ft);Vt(i.TEXTURE_CUBE_MAP,v);let at;if(Rt){I&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Wt,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){at=xt[Z].mipmaps;for(let Ct=0;Ct<at.length;Ct++){const kt=at[Ct];v.format!==an?Lt!==null&&(I?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct,0,0,kt.width,kt.height,Lt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct,Wt,kt.width,kt.height,0,kt.data)):I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct,0,0,kt.width,kt.height,Lt,_t,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct,Wt,kt.width,kt.height,0,Lt,_t,kt.data)}}}else{if(at=v.mipmaps,I&&lt){at.length>0&&Et++;const Z=zt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(rt){I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xt[Z].width,xt[Z].height,Lt,_t,xt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,xt[Z].width,xt[Z].height,0,Lt,_t,xt[Z].data);for(let Ct=0;Ct<at.length;Ct++){const de=at[Ct].image[Z].image;I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct+1,0,0,de.width,de.height,Lt,_t,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct+1,Wt,de.width,de.height,0,Lt,_t,de.data)}}else{I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,_t,xt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Lt,_t,xt[Z]);for(let Ct=0;Ct<at.length;Ct++){const kt=at[Ct];I?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct+1,0,0,Lt,_t,kt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct+1,Wt,Lt,_t,kt.image[Z])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),X.__version=tt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function St(T,v,O,H,tt,X){const Pt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),At=M(O.internalFormat,Pt,ct,O.colorSpace),Rt=n.get(v),rt=n.get(O);if(rt.__renderTarget=v,!Rt.__hasExternalTextures){const xt=Math.max(1,v.width>>X),Ft=Math.max(1,v.height>>X);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,X,At,xt,Ft,v.depth,0,Pt,ct,null):e.texImage2D(tt,X,At,xt,Ft,0,Pt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),it(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,tt,rt.__webglTexture,0,ut(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,tt,rt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(T,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const H=v.depthTexture,tt=H&&H.isDepthTexture?H.type:null,X=x(v.stencilBuffer,tt),Pt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=ut(v);it(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{const H=v.textures;for(let tt=0;tt<H.length;tt++){const X=H[tt],Pt=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),At=M(X.internalFormat,Pt,ct,X.colorSpace),Rt=ut(v);O&&it(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,At,v.width,v.height):it(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,At,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,At,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(v.depthTexture);H.__renderTarget=v,(!H.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const tt=H.__webglTexture,X=ut(v);if(v.depthTexture.format===ms)it(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===gs)it(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Jt(T){const v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const H=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",tt)};H.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=H}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const H=T.texture.mipmaps;H&&H.length>0?wt(v.__webglFramebuffer[0],T):wt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=i.createRenderbuffer(),Dt(v.__webglDepthbuffer[H],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,X)}}else{const H=T.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Dt(v.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(T,v,O){const H=n.get(T);v!==void 0&&St(H.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Jt(T)}function R(T){const v=T.texture,O=n.get(T),H=n.get(v);T.addEventListener("dispose",P);const tt=T.textures,X=T.isWebGLCubeRenderTarget===!0,Pt=tt.length>1;if(Pt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let At=0;At<v.mipmaps.length;At++)O.__webglFramebuffer[ct][At]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ct=0,At=tt.length;ct<At;ct++){const Rt=n.get(tt[ct]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&it(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const At=tt[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Rt=r.convert(At.format,At.colorSpace),rt=r.convert(At.type),xt=M(At.internalFormat,Rt,rt,At.colorSpace,T.isXRRenderTarget===!0),Ft=ut(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)St(O.__webglFramebuffer[ct][At],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At);else St(O.__webglFramebuffer[ct],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ct=0,At=tt.length;ct<At;ct++){const Rt=tt[ct],rt=n.get(Rt);let xt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,rt.__webglTexture),Vt(xt,Rt),St(O.__webglFramebuffer,T,Rt,i.COLOR_ATTACHMENT0+ct,xt,0),m(Rt)&&p(xt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,H.__webglTexture),Vt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)St(O.__webglFramebuffer[At],T,v,i.COLOR_ATTACHMENT0,ct,At);else St(O.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}T.depthBuffer&&Jt(T)}function j(T){const v=T.textures;for(let O=0,H=v.length;O<H;O++){const tt=v[O];if(m(tt)){const X=S(T),Pt=n.get(tt).__webglTexture;e.bindTexture(X,Pt),p(X),e.unbindTexture()}}}const K=[],J=[];function $(T){if(T.samples>0){if(it(T)===!1){const v=T.textures,O=T.width,H=T.height;let tt=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),ct=v.length>1;if(ct)for(let Rt=0;Rt<v.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const At=T.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<v.length;Rt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const rt=n.get(v[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,tt,i.NEAREST),l===!0&&(K.length=0,J.length=0,K.push(i.COLOR_ATTACHMENT0+Rt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(K.push(X),J.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Rt=0;Rt<v.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const rt=n.get(v[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ut(T){return Math.min(s.maxSamples,T.samples)}function it(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function dt(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Bt(T,v){const O=T.colorSpace,H=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ni&&O!==Nn&&te.getTransfer(O),v}function zt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=V,this.rebindTextures=ue,this.setupRenderTarget=R,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=it}function G0(i,t){function e(n,s=Nn){let r;const a=te.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return i.BYTE;if(n===fc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===Ss)return i.HALF_FLOAT;if(n===gc)return i.ALPHA;if(n===_c)return i.RGB;if(n===an)return i.RGBA;if(n===ms)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===vc)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===lr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===La)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===$a||n===Ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===Za||n===ja||n===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Lc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends Hi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new q0,p={},S=e.getContextAttributes();let M=null,x=null;const A=[],w=[],P=new mt;let D=null;const b=new rn;b.viewport=new xe;const y=new rn;y.viewport=new xe;const L=[b,y],F=new dd;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=A[Y];return Q===void 0&&(Q=new Jr,A[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=A[Y];return Q===void 0&&(Q=new Jr,A[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=A[Y];return Q===void 0&&(Q=new Jr,A[Y]=Q),Q.getHandSpace()};function q(Y){const Q=w.indexOf(Y.inputSource);if(Q===-1)return;const St=A[Q];St!==void 0&&(St.update(Y.inputSource,Y.frame,c||a),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<A.length;Y++){const Q=w[Y];Q!==null&&(w[Y]=null,A[Y].disconnect(Q))}k=null,W=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(M),f=null,d=null,u=null,s=null,x=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Dt=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=S.stencil?gs:ms,Dt=S.stencil?ps:ri);const Jt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ai(d.textureWidth,d.textureHeight,{format:an,type:dn,depthTexture:new Pc(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ai(f.framebufferWidth,f.framebufferHeight,{format:an,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Y){for(let Q=0;Q<Y.removed.length;Q++){const St=Y.removed[Q],Dt=w.indexOf(St);Dt>=0&&(w[Dt]=null,A[Dt].disconnect(St))}for(let Q=0;Q<Y.added.length;Q++){const St=Y.added[Q];let Dt=w.indexOf(St);if(Dt===-1){for(let Jt=0;Jt<A.length;Jt++)if(Jt>=w.length){w.push(St),Dt=Jt;break}else if(w[Jt]===null){w[Jt]=St,Dt=Jt;break}if(Dt===-1)break}const wt=A[Dt];wt&&wt.connect(St)}}const V=new C,ft=new C;function Mt(Y,Q,St){V.setFromMatrixPosition(Q.matrixWorld),ft.setFromMatrixPosition(St.matrixWorld);const Dt=V.distanceTo(ft),wt=Q.projectionMatrix.elements,Jt=St.projectionMatrix.elements,ue=wt[14]/(wt[10]-1),R=wt[14]/(wt[10]+1),j=(wt[9]+1)/wt[5],K=(wt[9]-1)/wt[5],J=(wt[8]-1)/wt[0],$=(Jt[8]+1)/Jt[0],ut=ue*J,it=ue*$,dt=Dt/(-J+$),Bt=dt*-J;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Bt),Y.translateZ(dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const zt=ue+dt,T=R+dt,v=ut-Bt,O=it+(Dt-Bt),H=j*R/T*zt,tt=K*R/T*zt;Y.projectionMatrix.makePerspective(v,O,H,tt,zt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function bt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,St=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(St=m.depthFar)),F.near=y.near=b.near=Q,F.far=y.far=b.far=St,(k!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,W=F.far),F.layers.mask=Y.layers.mask|6,b.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const Dt=Y.parent,wt=F.cameras;bt(F,Dt);for(let Jt=0;Jt<wt.length;Jt++)bt(wt[Jt],Dt);wt.length===2?Mt(F,b,y):F.projectionMatrix.copy(b.projectionMatrix),Vt(Y,F,Dt)};function Vt(Y,Q,St){St===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=to*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let Zt=null;function se(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Dt=!1;St.length!==F.cameras.length&&(F.cameras.length=0,Dt=!0);for(let R=0;R<St.length;R++){const j=St[R];let K=null;if(f!==null)K=f.getViewport(j);else{const $=u.getViewSubImage(d,j);K=$.viewport,R===0&&(t.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(x))}let J=L[R];J===void 0&&(J=new rn,J.layers.enable(R),J.viewport=new xe,L[R]=J),J.matrix.fromArray(j.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(j.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(K.x,K.y,K.width,K.height),R===0&&(F.matrix.copy(J.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Dt===!0&&F.cameras.push(J)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const R=u.getDepthInformation(St[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let R=0;R<St.length;R++){const j=St[R].camera;if(j){let K=p[j];K||(K=new Lc,p[j]=K);const J=u.getCameraImage(j);K.sourceTexture=J}}}}for(let St=0;St<A.length;St++){const Dt=w[St],wt=A[St];Dt!==null&&wt!==void 0&&wt.update(Dt,Q,c||a)}Zt&&Zt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const jt=new Vc;jt.setAnimationLoop(se),this.setAnimationLoop=function(Y){Zt=Y},this.dispose=function(){}}}const Zn=new fn,$0=new he;function J0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,x=S.envMapRotation;M&&(m.envMap.value=M,Zn.copy(x),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(Zn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function K0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function c(S,M){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(S,A);const w=t.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function h(S){const M=u();S.__bindingPointIndex=M;const x=i.createBuffer(),A=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return 0}function d(S){const M=s[S.id],x=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,P=x.length;w<P;w++){const D=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,y=D.length;b<y;b++){const L=D[b];if(f(L,w,b,A)===!0){const F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<k.length;q++){const G=k[q],nt=_(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+W,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,W),W+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,x,A){const w=S.value,P=M+"_"+x;if(A[P]===void 0)return typeof w=="number"||typeof w=="boolean"?A[P]=w:A[P]=w.clone(),!0;{const D=A[P];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[P]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(S){const M=S.uniforms;let x=0;const A=16;for(let P=0,D=M.length;P<D;P++){const b=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,L=b.length;y<L;y++){const F=b[y],k=Array.isArray(F.value)?F.value:[F.value];for(let W=0,q=k.length;W<q;W++){const G=k[W],nt=_(G),V=x%A,ft=V%nt.boundary,Mt=V+ft;x+=ft,Mt!==0&&A-Mt<nt.storage&&(x+=A-Mt),F.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=nt.storage}}}const w=x%A;return w>0&&(x+=A-w),S.__size=x,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture,M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Z0{constructor(t={}){const{canvas:e=$h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=$e;let w=0,P=0,D=null,b=-1,y=null;const L=new xe,F=new xe;let k=null;const W=new Yt(0);let q=0,G=e.width,nt=e.height,V=1,ft=null,Mt=null;const bt=new xe(0,0,G,nt),Vt=new xe(0,0,G,nt);let Zt=!1;const se=new Mo;let jt=!1,Y=!1;const Q=new he,St=new C,Dt=new xe,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function ue(){return D===null?V:1}let R=n;function j(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",at,!1),R===null){const U="webgl2";if(R=j(U,E),R===null)throw j(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E}let K,J,$,ut,it,dt,Bt,zt,T,v,O,H,tt,X,Pt,ct,At,Rt,rt,xt,Ft,Lt,_t,Wt;function I(){K=new om(R),K.init(),Lt=new G0(R,K),J=new tm(R,K,t,Lt),$=new H0(R,K),J.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),ut=new hm(R),it=new R0,dt=new V0(R,K,$,it,J,Lt,ut),Bt=new nm(x),zt=new am(x),T=new md(R),_t=new jp(R,T),v=new lm(R,T,ut,_t),O=new dm(R,v,T,ut),rt=new um(R,J,dt),ct=new em(it),H=new A0(x,Bt,zt,K,J,_t,ct),tt=new J0(x,it),X=new P0,Pt=new F0(K),Rt=new Zp(x,Bt,zt,$,O,f,l),At=new B0(x,O,J),Wt=new K0(R,ut,J,$),xt=new Qp(R,K,ut),Ft=new cm(R,K,ut),ut.programs=H.programs,x.capabilities=J,x.extensions=K,x.properties=it,x.renderLists=X,x.shadowMap=At,x.state=$,x.info=ut}I();const lt=new Y0(x,R);this.xr=lt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,nt,!1))},this.getSize=function(E){return E.set(G,nt)},this.setSize=function(E,U,z=!0){lt.isPresenting||(G=E,nt=U,e.width=Math.floor(E*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U))},this.getDrawingBufferSize=function(E){return E.set(G*V,nt*V).floor()},this.setDrawingBufferSize=function(E,U,z){G=E,nt=U,V=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(bt)},this.setViewport=function(E,U,z,B){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,U,z,B),$.viewport(L.copy(bt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,U,z,B){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,U,z,B),$.scissor(F.copy(Vt).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(E){$.setScissorTest(Zt=E)},this.setOpaqueSort=function(E){ft=E},this.setTransparentSort=function(E){Mt=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,z=!0){let B=0;if(E){let N=!1;if(D!==null){const ot=D.texture.format;N=ot===mo||ot===po||ot===fo}if(N){const ot=D.texture.type,vt=ot===dn||ot===ri||ot===fs||ot===ps||ot===co||ot===ho,Tt=Rt.getClearColor(),yt=Rt.getClearAlpha(),Nt=Tt.r,Ot=Tt.g,It=Tt.b;vt?(g[0]=Nt,g[1]=Ot,g[2]=It,g[3]=yt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Nt,_[1]=Ot,_[2]=It,_[3]=yt,R.clearBufferiv(R.COLOR,0,_))}else B|=R.COLOR_BUFFER_BIT}U&&(B|=R.DEPTH_BUFFER_BIT),z&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Rt.dispose(),X.dispose(),Pt.dispose(),it.dispose(),Bt.dispose(),zt.dispose(),O.dispose(),_t.dispose(),Wt.dispose(),H.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",on),lt.removeEventListener("sessionend",Io),Wn.stop()};function pt(E){E.preventDefault(),A=!0}function Et(){A=!1;const E=ut.autoReset,U=At.enabled,z=At.autoUpdate,B=At.needsUpdate,N=At.type;I(),ut.autoReset=E,At.enabled=U,At.autoUpdate=z,At.needsUpdate=B,At.type=N}function at(E){}function Z(E){const U=E.target;U.removeEventListener("dispose",Z),Ct(U)}function Ct(E){kt(E),it.remove(E)}function kt(E){const U=it.get(E).programs;U!==void 0&&(U.forEach(function(z){H.releaseProgram(z)}),E.isShaderMaterial&&H.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,B,N,ot){U===null&&(U=wt);const vt=N.isMesh&&N.matrixWorld.determinant()<0,Tt=th(E,U,z,B,N);$.setMaterial(B,vt);let yt=z.index,Nt=1;if(B.wireframe===!0){if(yt=v.getWireframeAttribute(z),yt===void 0)return;Nt=2}const Ot=z.drawRange,It=z.attributes.position;let Kt=Ot.start*Nt,re=(Ot.start+Ot.count)*Nt;ot!==null&&(Kt=Math.max(Kt,ot.start*Nt),re=Math.min(re,(ot.start+ot.count)*Nt)),yt!==null?(Kt=Math.max(Kt,0),re=Math.min(re,yt.count)):It!=null&&(Kt=Math.max(Kt,0),re=Math.min(re,It.count));const ve=re-Kt;if(ve<0||ve===1/0)return;_t.setup(N,B,Tt,z,yt);let pe,le=xt;if(yt!==null&&(pe=T.get(yt),le=Ft,le.setIndex(pe)),N.isMesh)B.wireframe===!0?($.setLineWidth(B.wireframeLinewidth*ue()),le.setMode(R.LINES)):le.setMode(R.TRIANGLES);else if(N.isLine){let Ut=B.linewidth;Ut===void 0&&(Ut=1),$.setLineWidth(Ut*ue()),N.isLineSegments?le.setMode(R.LINES):N.isLineLoop?le.setMode(R.LINE_LOOP):le.setMode(R.LINE_STRIP)}else N.isPoints?le.setMode(R.POINTS):N.isSprite&&le.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ut=N._multiDrawStarts,me=N._multiDrawCounts,Qt=N._multiDrawCount,Ge=yt?T.get(yt).bytesPerElement:1,ci=it.get(B).currentProgram.getUniforms();for(let We=0;We<Qt;We++)ci.setValue(R,"_gl_DrawID",We),le.render(Ut[We]/Ge,me[We])}else if(N.isInstancedMesh)le.renderInstances(Kt,ve,N.count);else if(z.isInstancedBufferGeometry){const Ut=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,me=Math.min(z.instanceCount,Ut);le.renderInstances(Kt,ve,me)}else le.render(Kt,ve)};function de(E,U,z){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,Ts(E,U,z),E.side=kn,E.needsUpdate=!0,Ts(E,U,z),E.side=ke):Ts(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),p=Pt.get(z),p.init(U),M.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ot=N.material;if(ot)if(Array.isArray(ot))for(let vt=0;vt<ot.length;vt++){const Tt=ot[vt];de(Tt,z,N),B.add(Tt)}else de(ot,z,N),B.add(ot)}),p=M.pop(),B},this.compileAsync=function(E,U,z=null){const B=this.compile(E,U,z);return new Promise(N=>{function ot(){if(B.forEach(function(vt){it.get(vt).currentProgram.isReady()&&B.delete(vt)}),B.size===0){N(E);return}setTimeout(ot,10)}K.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ne=null;function mn(E){ne&&ne(E)}function on(){Wn.stop()}function Io(){Wn.start()}const Wn=new Vc;Wn.setAnimationLoop(mn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(E){ne=E,lt.setAnimationLoop(E),E===null?Wn.stop():Wn.start()},lt.addEventListener("sessionstart",on),lt.addEventListener("sessionend",Io),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0||A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(U),U=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,D),p=Pt.get(E,M.length),p.init(U),M.push(p),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(Q,un,U.reversedDepth),Y=this.localClippingEnabled,jt=ct.init(this.clippingPlanes,Y),m=X.get(E,S.length),m.init(),S.push(m),lt.enabled===!0&&lt.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&br(ot,U,-1/0,x.sortObjects)}br(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ft,Mt),Jt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Jt&&Rt.addToRenderList(m,E),this.info.render.frame++,jt===!0&&ct.beginShadows();const z=p.state.shadowsArray;At.render(z,E,U),jt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ot=U.cameras;if(N.length>0)for(let vt=0,Tt=ot.length;vt<Tt;vt++){const yt=ot[vt];No(B,N,E,yt)}Jt&&Rt.render(E);for(let vt=0,Tt=ot.length;vt<Tt;vt++){const yt=ot[vt];Uo(m,E,yt,yt.viewport)}}else N.length>0&&No(B,N,E,U),Jt&&Rt.render(E),Uo(m,E,U);D!==null&&P===0&&(dt.updateMultisampleRenderTarget(D),dt.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(x,E,U),_t.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],jt===!0&&ct.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function br(E,U,z,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||se.intersectsSprite(E)){B&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const vt=O.update(E),Tt=E.material;Tt.visible&&m.push(E,vt,Tt,z,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||se.intersectsObject(E))){const vt=O.update(E),Tt=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Dt.copy(vt.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(Tt)){const yt=vt.groups;for(let Nt=0,Ot=yt.length;Nt<Ot;Nt++){const It=yt[Nt],Kt=Tt[It.materialIndex];Kt&&Kt.visible&&m.push(E,vt,Kt,z,Dt.z,It)}}else Tt.visible&&m.push(E,vt,Tt,z,Dt.z,null)}}const ot=E.children;for(let vt=0,Tt=ot.length;vt<Tt;vt++)br(ot[vt],U,z,B)}function Uo(E,U,z,B){const N=E.opaque,ot=E.transmissive,vt=E.transparent;p.setupLightsView(z),jt===!0&&ct.setGlobalState(x.clippingPlanes,z),B&&$.viewport(L.copy(B)),N.length>0&&bs(N,U,z),ot.length>0&&bs(ot,U,z),vt.length>0&&bs(vt,U,z),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function No(E,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new ai(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Ss:dn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ot=p.state.transmissionRenderTarget[B.id],vt=B.viewport||L;ot.setSize(vt.z*x.transmissionResolutionScale,vt.w*x.transmissionResolutionScale);const Tt=x.getRenderTarget(),yt=x.getActiveCubeFace(),Nt=x.getActiveMipmapLevel();x.setRenderTarget(ot),x.getClearColor(W),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&Rt.render(z);const Ot=x.toneMapping;x.toneMapping=Bn;const It=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),jt===!0&&ct.setGlobalState(x.clippingPlanes,B),bs(E,z,B),dt.updateMultisampleRenderTarget(ot),dt.updateRenderTargetMipmap(ot),K.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let re=0,ve=U.length;re<ve;re++){const pe=U[re],le=pe.object,Ut=pe.geometry,me=pe.material,Qt=pe.group;if(me.side===ke&&le.layers.test(B.layers)){const Ge=me.side;me.side=He,me.needsUpdate=!0,Fo(le,z,B,Ut,me,Qt),me.side=Ge,me.needsUpdate=!0,Kt=!0}}Kt===!0&&(dt.updateMultisampleRenderTarget(ot),dt.updateRenderTargetMipmap(ot))}x.setRenderTarget(Tt,yt,Nt),x.setClearColor(W,q),It!==void 0&&(B.viewport=It),x.toneMapping=Ot}function bs(E,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=E.length;N<ot;N++){const vt=E[N],Tt=vt.object,yt=vt.geometry,Nt=vt.group;let Ot=vt.material;Ot.allowOverride===!0&&B!==null&&(Ot=B),Tt.layers.test(z.layers)&&Fo(Tt,U,z,yt,Ot,Nt)}}function Fo(E,U,z,B,N,ot){E.onBeforeRender(x,U,z,B,N,ot),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,z,B,E,ot),N.transparent===!0&&N.side===ke&&N.forceSinglePass===!1?(N.side=He,N.needsUpdate=!0,x.renderBufferDirect(z,U,B,N,E,ot),N.side=kn,N.needsUpdate=!0,x.renderBufferDirect(z,U,B,N,E,ot),N.side=ke):x.renderBufferDirect(z,U,B,N,E,ot),E.onAfterRender(x,U,z,B,N,ot)}function Ts(E,U,z){U.isScene!==!0&&(U=wt);const B=it.get(E),N=p.state.lights,ot=p.state.shadowsArray,vt=N.state.version,Tt=H.getParameters(E,N.state,ot,U,z),yt=H.getProgramCacheKey(Tt);let Nt=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?zt:Bt).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Z),Nt=new Map,B.programs=Nt);let Ot=Nt.get(yt);if(Ot!==void 0){if(B.currentProgram===Ot&&B.lightsStateVersion===vt)return zo(E,Tt),Ot}else Tt.uniforms=H.getUniforms(E),E.onBeforeCompile(Tt,x),Ot=H.acquireProgram(Tt,yt),Nt.set(yt,Ot),B.uniforms=Tt.uniforms;const It=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=ct.uniform),zo(E,Tt),B.needsLights=nh(E),B.lightsStateVersion=vt,B.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ot,B.uniformsList=null,Ot}function Oo(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=hr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function zo(E,U){const z=it.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function th(E,U,z,B,N){U.isScene!==!0&&(U=wt),dt.resetTextureUnits();const ot=U.fog,vt=B.isMeshStandardMaterial?U.environment:null,Tt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ni,yt=(B.isMeshStandardMaterial?zt:Bt).get(B.envMap||vt),Nt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ot=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),It=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let ve=Bn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ve=x.toneMapping);const pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=pe!==void 0?pe.length:0,Ut=it.get(B),me=p.state.lights;if(jt===!0&&(Y===!0||E!==y)){const Ie=E===y&&B.id===b;ct.setState(B,E,Ie)}let Qt=!1;B.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==me.state.version||Ut.outputColorSpace!==Tt||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==yt||B.fog===!0&&Ut.fog!==ot||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ct.numPlanes||Ut.numIntersection!==ct.numIntersection)||Ut.vertexAlphas!==Nt||Ut.vertexTangents!==Ot||Ut.morphTargets!==It||Ut.morphNormals!==Kt||Ut.morphColors!==re||Ut.toneMapping!==ve||Ut.morphTargetsCount!==le)&&(Qt=!0):(Qt=!0,Ut.__version=B.version);let Ge=Ut.currentProgram;Qt===!0&&(Ge=Ts(B,U,N));let ci=!1,We=!1,$i=!1;const ge=Ge.getUniforms(),Ke=Ut.uniforms;if($.useProgram(Ge.program)&&(ci=!0,We=!0,$i=!0),B.id!==b&&(b=B.id,We=!0),ci||y!==E){$.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(R,"projectionMatrix",E.projectionMatrix),ge.setValue(R,"viewMatrix",E.matrixWorldInverse);const Oe=ge.map.cameraPosition;Oe!==void 0&&Oe.setValue(R,St.setFromMatrixPosition(E.matrixWorld)),J.logarithmicDepthBuffer&&ge.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ge.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,We=!0,$i=!0)}if(N.isSkinnedMesh){ge.setOptional(R,N,"bindMatrix"),ge.setOptional(R,N,"bindMatrixInverse");const Ie=N.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ge.setValue(R,"boneTexture",Ie.boneTexture,dt))}N.isBatchedMesh&&(ge.setOptional(R,N,"batchingTexture"),ge.setValue(R,"batchingTexture",N._matricesTexture,dt),ge.setOptional(R,N,"batchingIdTexture"),ge.setValue(R,"batchingIdTexture",N._indirectTexture,dt),ge.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&ge.setValue(R,"batchingColorTexture",N._colorsTexture,dt));const Ze=z.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&rt.update(N,z,Ge),(We||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,ge.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ke.envMap.value=yt,Ke.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Ke.envMapIntensity.value=U.environmentIntensity),We&&(ge.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&eh(Ke,$i),ot&&B.fog===!0&&tt.refreshFogUniforms(Ke,ot),tt.refreshMaterialUniforms(Ke,B,V,nt,p.state.transmissionRenderTarget[E.id]),hr.upload(R,Oo(Ut),Ke,dt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(hr.upload(R,Oo(Ut),Ke,dt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ge.setValue(R,"center",N.center),ge.setValue(R,"modelViewMatrix",N.modelViewMatrix),ge.setValue(R,"normalMatrix",N.normalMatrix),ge.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ie=B.uniformsGroups;for(let Oe=0,Tr=Ie.length;Oe<Tr;Oe++){const Xn=Ie[Oe];Wt.update(Xn,Ge),Wt.bind(Xn,Ge)}}return Ge}function eh(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function nh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,U,z){const B=it.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),it.get(E.texture).__webglTexture=U,it.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const z=it.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const ih=R.createFramebuffer();this.setRenderTarget=function(E,U=0,z=0){D=E,w=U,P=z;let B=!0,N=null,ot=!1,vt=!1;if(E){const yt=it.get(E);if(yt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(yt.__webglFramebuffer===void 0)dt.setupRenderTarget(E);else if(yt.__hasExternalTextures)dt.rebindTextures(E,it.get(E.texture).__webglTexture,it.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const It=E.depthTexture;if(yt.__boundDepthTexture!==It){if(It!==null&&it.has(It)&&(E.width!==It.image.width||E.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const Ot=it.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?N=Ot[U][z]:N=Ot[U],ot=!0):E.samples>0&&dt.useMultisampledRTT(E)===!1?N=it.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[z]:N=Ot,L.copy(E.viewport),F.copy(E.scissor),k=E.scissorTest}else L.copy(bt).multiplyScalar(V).floor(),F.copy(Vt).multiplyScalar(V).floor(),k=Zt;if(z!==0&&(N=ih),$.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&$.drawBuffers(E,N),$.viewport(L),$.scissor(F),$.setScissorTest(k),ot){const yt=it.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,z)}else if(vt){const yt=U;for(let Nt=0;Nt<E.textures.length;Nt++){const Ot=it.get(E.textures[Nt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Nt,Ot.__webglTexture,z,yt)}}else if(E!==null&&z!==0){const yt=it.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,yt.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(E,U,z,B,N,ot,vt,Tt=0){if(!(E&&E.isWebGLRenderTarget))return;let yt=it.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){$.bindFramebuffer(R.FRAMEBUFFER,yt);try{const Nt=E.textures[Tt],Ot=Nt.format,It=Nt.type;if(!J.textureFormatReadable(Ot)||!J.textureTypeReadable(It))return;U>=0&&U<=E.width-B&&z>=0&&z<=E.height-N&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Tt),R.readPixels(U,z,B,N,Lt.convert(Ot),Lt.convert(It),ot))}finally{const Nt=D!==null?it.get(D).__webglFramebuffer:null;$.bindFramebuffer(R.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,B,N,ot,vt,Tt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=it.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt)if(U>=0&&U<=E.width-B&&z>=0&&z<=E.height-N){$.bindFramebuffer(R.FRAMEBUFFER,yt);const Nt=E.textures[Tt],Ot=Nt.format,It=Nt.type;if(!J.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Kt),R.bufferData(R.PIXEL_PACK_BUFFER,ot.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Tt),R.readPixels(U,z,B,N,Lt.convert(Ot),Lt.convert(It),0);const re=D!==null?it.get(D).__webglFramebuffer:null;$.bindFramebuffer(R.FRAMEBUFFER,re);const ve=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Jh(R,ve,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Kt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ot),R.deleteBuffer(Kt),R.deleteSync(ve),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,z=0){const B=Math.pow(2,-z),N=Math.floor(E.image.width*B),ot=Math.floor(E.image.height*B),vt=U!==null?U.x:0,Tt=U!==null?U.y:0;dt.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,vt,Tt,N,ot),$.unbindTexture()};const sh=R.createFramebuffer(),rh=R.createFramebuffer();this.copyTextureToTexture=function(E,U,z=null,B=null,N=0,ot=null){ot===null&&(N!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=N,N=0):ot=0);let vt,Tt,yt,Nt,Ot,It,Kt,re,ve;const pe=E.isCompressedTexture?E.mipmaps[ot]:E.image;if(z!==null)vt=z.max.x-z.min.x,Tt=z.max.y-z.min.y,yt=z.isBox3?z.max.z-z.min.z:1,Nt=z.min.x,Ot=z.min.y,It=z.isBox3?z.min.z:0;else{const Ze=Math.pow(2,-N);vt=Math.floor(pe.width*Ze),Tt=Math.floor(pe.height*Ze),E.isDataArrayTexture?yt=pe.depth:E.isData3DTexture?yt=Math.floor(pe.depth*Ze):yt=1,Nt=0,Ot=0,It=0}B!==null?(Kt=B.x,re=B.y,ve=B.z):(Kt=0,re=0,ve=0);const le=Lt.convert(U.format),Ut=Lt.convert(U.type);let me;U.isData3DTexture?(dt.setTexture3D(U,0),me=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(dt.setTexture2DArray(U,0),me=R.TEXTURE_2D_ARRAY):(dt.setTexture2D(U,0),me=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=R.getParameter(R.UNPACK_ROW_LENGTH),Ge=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ci=R.getParameter(R.UNPACK_SKIP_PIXELS),We=R.getParameter(R.UNPACK_SKIP_ROWS),$i=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,pe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ot),R.pixelStorei(R.UNPACK_SKIP_IMAGES,It);const ge=E.isDataArrayTexture||E.isData3DTexture,Ke=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Ze=it.get(E),Ie=it.get(U),Oe=it.get(Ze.__renderTarget),Tr=it.get(Ie.__renderTarget);$.bindFramebuffer(R.READ_FRAMEBUFFER,Oe.__webglFramebuffer),$.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Xn=0;Xn<yt;Xn++)ge&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,it.get(E).__webglTexture,N,It+Xn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,it.get(U).__webglTexture,ot,ve+Xn)),R.blitFramebuffer(Nt,Ot,vt,Tt,Kt,re,vt,Tt,R.DEPTH_BUFFER_BIT,R.NEAREST);$.bindFramebuffer(R.READ_FRAMEBUFFER,null),$.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||it.has(E)){const Ze=it.get(E),Ie=it.get(U);$.bindFramebuffer(R.READ_FRAMEBUFFER,sh),$.bindFramebuffer(R.DRAW_FRAMEBUFFER,rh);for(let Oe=0;Oe<yt;Oe++)ge?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ze.__webglTexture,N,It+Oe):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ze.__webglTexture,N),Ke?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ie.__webglTexture,ot,ve+Oe):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ie.__webglTexture,ot),N!==0?R.blitFramebuffer(Nt,Ot,vt,Tt,Kt,re,vt,Tt,R.COLOR_BUFFER_BIT,R.NEAREST):Ke?R.copyTexSubImage3D(me,ot,Kt,re,ve+Oe,Nt,Ot,vt,Tt):R.copyTexSubImage2D(me,ot,Kt,re,Nt,Ot,vt,Tt);$.bindFramebuffer(R.READ_FRAMEBUFFER,null),$.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ke?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(me,ot,Kt,re,ve,vt,Tt,yt,le,Ut,pe.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(me,ot,Kt,re,ve,vt,Tt,yt,le,pe.data):R.texSubImage3D(me,ot,Kt,re,ve,vt,Tt,yt,le,Ut,pe):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ot,Kt,re,vt,Tt,le,Ut,pe.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ot,Kt,re,pe.width,pe.height,le,pe.data):R.texSubImage2D(R.TEXTURE_2D,ot,Kt,re,vt,Tt,le,Ut,pe);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ge),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ci),R.pixelStorei(R.UNPACK_SKIP_ROWS,We),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$i),ot===0&&U.generateMipmaps&&R.generateMipmap(me),$.unbindTexture()},this.initRenderTarget=function(E){it.get(E).__webglFramebuffer===void 0&&dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?dt.setTextureCube(E,0):E.isData3DTexture?dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?dt.setTexture2DArray(E,0):dt.setTexture2D(E,0),$.unbindTexture()},this.resetState=function(){w=0,P=0,D=null,$.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const nr=new Bi(.94,1,48).rotateX(-Math.PI/2),jn=(i,t=1)=>new Ye({color:i,transparent:!0,opacity:t,side:ke,depthWrite:!1});class j0{group=new fe;terrain=new fe;stage=-1;terrainRoots=new Map;threads;threadData=new Float32Array(1800);bolts;warnings=[];fields=[];anchor;target;spirit;d=new Me;constructor(t){t.add(this.group),this.group.add(this.terrain);const e=new Te;e.setAttribute("position",new Ve(this.threadData,3)),e.setDrawRange(0,0),this.threads=new Cc(e,new mr({color:10485744,transparent:!0,opacity:.9,depthWrite:!1})),this.threads.frustumCulled=!1,this.group.add(this.threads),this.bolts=new wi(new On(.38,0),jn(16755811),100),this.bolts.count=0,this.group.add(this.bolts);for(let s=0;s<90;s++){const r=new Ht(nr,jn(16084294,.85));r.visible=!1,this.group.add(r),this.warnings.push(r)}for(let s=0;s<16;s++){const r=new Ht(nr,jn(10158038,.7));r.visible=!1,this.group.add(r),this.fields.push(r)}this.anchor=new Ht(nr,jn(11206639)),this.target=new Ht(nr,jn(16770468,.75)),this.group.add(this.anchor,this.target),this.spirit=new fe;const n=new Ht(new On(.23,2),jn(11206637));this.spirit.add(n);for(let s=0;s<3;s++){const r=new Ht(new Tn(.5+s*.12,.017,3,32),jn(14942176,.55));r.rotation.set(s*.8,.6+s,.4),this.spirit.add(r)}this.group.add(this.spirit)}rebuild(t){this.stage=t.stage,this.terrain.traverse(e=>{e instanceof Ht&&(e.geometry.dispose(),e.material.dispose())}),this.terrain.clear(),this.terrainRoots.clear();for(const e of t.obstacles){const n=new fe;n.position.set(e.x,0,e.z),this.terrain.add(n);const s=new fe,r=new fe;n.add(s,r);const a=(o,l,c,h,u,d)=>{const f=new Ht(o,new Fn({color:l,roughness:.62,metalness:.15,flatShading:!0}));return f.position.set(h,u,d),f.receiveShadow=!0,c.add(f),f};if(e.kind==="pillar"){a(new De(e.radius*.85,e.radius,2.9,8),6914442,s,0,1.45,0);for(const o of[.15,2.65])a(new De(e.radius*1.05,e.radius*1.05,.23,8),13220497,s,0,o,0);a(new De(.3,.45,.5,6),14728052,s,0,3.2,0)}else{for(let o=0;o<5;o++){const l=o*1.256;a(new Oi(.3,2.3,5),6638439,s,Math.sin(l)*e.radius*.6,1,Math.cos(l)*e.radius*.6).rotation.set(Math.cos(l)*.35,0,-Math.sin(l)*.35)}a(new On(.55,0),14259598,s,0,1.3,0),a(new De(e.radius*1.2,e.radius*1.2,.08,32),3509891,r,0,.12,0);for(let o=0;o<7;o++){const l=o*.9;a(new On(.25,0),o%2?16765600:12124128,r,Math.sin(l)*.85,.25+Math.sin(o)*.1,Math.cos(l)*.85)}}this.terrainRoots.set(e.id,{dead:s,alive:r})}}update(t,e){t.stage!==this.stage&&this.rebuild(t);for(const h of t.obstacles){const u=this.terrainRoots.get(h.id);u&&(u.dead.visible=!h.restored,u.alive.visible=h.restored)}let n=0;const s=(h,u,d=.9)=>{n+6>this.threadData.length||(this.threadData.set([h.x,d,h.z,u.x,d,u.z],n),n+=6)},r=t.marked;for(let h=0;h<r.length;h++){let u=0;for(let d=h+1;d<r.length&&!(ae(r[h],r[d])<ce.linkRange+(t.trail>=3?2:0)&&t.clearLine(r[h],r[d])&&(s(r[h],r[d]),++u>=3));d++);}for(const h of t.threads)s(h,h.end,.13);if(t.anchor)for(const h of t.enemies)h.pullTime>0&&s(h,t.anchor,.45);for(const h of t.enemies)if(h.kind==="guard"&&h.hp>0&&h.broken<=0)for(const u of t.enemies)u.hp>0&&u.id!==h.id&&ae(h,u)<3&&s(h,u,.25);this.threads.geometry.setDrawRange(0,n/3),this.threads.geometry.attributes.position.needsUpdate=!0,this.threads.material.color.setHex(t.tension>83?16742750:t.tension>=60?16769440:8454114);let a=0,o=0;for(const h of t.hazards)if(h.kind==="bolt"&&a<100)this.d.position.set(h.x,.7,h.z),this.d.rotation.set(e*7,e*4,0),this.d.scale.setScalar(1),this.d.updateMatrix(),this.bolts.setMatrixAt(a++,this.d.matrix);else if(o<this.warnings.length){const u=this.warnings[o++];u.visible=!0,u.position.set(h.x,.12,h.z),u.scale.setScalar(h.radius),u.material.opacity=h.kind==="burst"?Math.min(1,.4+(1-Math.max(0,h.delay))*.6):.9}for(this.bolts.count=a,this.bolts.instanceMatrix.needsUpdate=!0;o<this.warnings.length;o++)this.warnings[o].visible=!1;this.anchor.visible=!!t.anchor,t.anchor&&(this.anchor.position.set(t.anchor.x,.15,t.anchor.z),this.anchor.scale.setScalar(2.1+Math.sin(e*6)*.1));let l=0;for(const h of t.sanctuaries){if(l>=this.fields.length)break;const u=this.fields[l++];u.visible=!0,u.position.set(h.x,.13,h.z),u.scale.setScalar(3)}for(;l<this.fields.length;l++)this.fields[l].visible=!1;const c=t.enemies.find(h=>h.id===t.targetId&&h.hp>0);this.target.visible=!!c&&t.phase==="fight",c&&(this.target.position.set(c.x,.2,c.z),this.target.scale.setScalar(ce.radius[c.kind]+.3)),this.spirit.visible=t.phase!=="fight"&&t.phase!=="dead",this.spirit.position.set(t.phase==="finale"?0:-2,1.4+Math.sin(e*2)*.18,t.phase==="finale"?-10:5),this.spirit.rotation.y=e*.6}}function jl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Te;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return null;for(const f in u.attributes){if(!n.has(f))return null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size||o!==u.morphTargetsRelative)return null;for(const f in u.morphAttributes){if(!s.has(f))return null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Ql(r[h]);if(!u)return null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=Ql(f);if(!g)return null;l.morphAttributes[h].push(g)}}return l}function Ql(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor||(e===void 0&&(e=h.itemSize),e!==h.itemSize)||(n===void 0&&(n=h.normalized),n!==h.normalized)||(s===-1&&(s=h.gpuType),s!==h.gpuType))return null;r+=h.count*e}const a=new t(r),o=new Ve(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const ca={cream:16181707,gold:14465394},ds=new Map,ur=i=>(ds.has(i)||ds.set(i,new Fn({color:i,roughness:.6,metalness:.12,flatShading:!0})),ds.get(i)),Yc=new Fn({vertexColors:!0,roughness:.6,flatShading:!0});ds.set(-1,Yc);const ht={sphere:new On(1,1),box:new Xi(1,1,1),cyl:new De(1,1,1,10),cone:new Oi(1,1,8),torus:new Tn(1,.11,5,32)};function st(i,t,e,n=0,s=0,r=0,a=1,o=a,l=a){const c=new Ht(i,ur(t));return c.position.set(n,s,r),c.scale.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,e.add(c),c}function Qn(i,t,e,n,s){const r=st(ht.cyl,s,i);return r.position.copy(t).add(e).multiplyScalar(.5),r.scale.set(n,t.distanceTo(e),n),r.quaternion.setFromUnitVectors(new C(0,1,0),e.clone().sub(t).normalize()),r}function yn(i,t,e,n=.8){const s=new Ht(new Bi(t-.07,t,64),new Ye({color:e,transparent:!0,opacity:n,side:ke,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.y=.055,i.add(s),s}class Q0{constructor(t){this.canvas=t,this.renderer=new Z0({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lc,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.outputColorSpace=$e,this.renderer.toneMapping=hc,this.renderer.toneMappingExposure=1.12,this.scene.background=new Yt(5467256),this.scene.fog=new xo(5467256,38,105),this.scene.add(new ld(12577260,2570306,1.5)),this.sun=new ud(16767397,3.3),this.sun.position.set(-12,24,15),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-25,right:25,top:25,bottom:-25,far:75}),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun),this.scene.add(this.stage,this.garden),this.environment(),this.hero=this.character("hero"),this.scene.add(this.hero.root),this.sibling=this.character("hero"),this.sibling.root.scale.setScalar(.9),this.sibling.weapon.visible=!1,this.sibling.scarf.material=ur(9622972),this.scene.add(this.sibling.root,this.reunion),this.sibling.root.visible=!1;for(let e=0;e<30;e++){const n=e/30*Math.PI;st(ht.sphere,e%3?15719349:15118234,this.reunion,Math.cos(n)*4.4,5.45+Math.sin(n)*4.4,-14.55,.28,.22,.28)}this.reunion.visible=!1,this.flowerMesh=new wi(new To(.23,6,4).scale(1,.35,1.6),ur(16768704),700),this.flowerMesh.count=0,this.scene.add(this.flowerMesh),this.petals=new wi(new bn(.12,.22),new Ye({color:16773838,side:ke,transparent:!0,opacity:.75}),65),this.scene.add(this.petals),this.bell=new fe,this.bell.position.set(0,5.9,-14.5),st(new De(.6,1.1,1.3,12,1,!0),ca.gold,this.bell),st(ht.sphere,ca.gold,this.bell,0,-.8,0,.18),Qn(this.bell,new C(0,0,0),new C(0,2.2,0),.035,ca.cream),this.scene.add(this.bell),this.shards=new wi(new On(1,0),new Ye({color:16777215}),320),this.shards.count=0,this.shards.setColorAt(0,new Yt(16777215)),this.shards.frustumCulled=!1,this.scene.add(this.shards),this.field=new j0(this.scene),this.resize(),window.addEventListener("resize",()=>this.resize())}canvas;scene=new Mu;camera=new wo;renderer;hero;actors=new Map;actorBatches=new Map;actorParts=new WeakMap;effects=[];field;impulse=0;shards;sparkDummy=new Me;sparks=[];needsRender=!0;stage=new fe;garden=new fe;reunion=new fe;sibling;clock=0;shake=0;quality="high";flowerMesh;flowerCount=-1;petals;bell;sun;pointer=new mt;ray=new fd;ground=new Un(new C(0,1,0),0);target=new C;frameTimes=[];lastStage=-1;lastPhase="";environment(){st(new De(17,14,2,64),9018757,this.stage,0,-1.15,0),st(new De(16.8,16.8,.28,64),10136200,this.stage,0,-.05,0),st(new De(14.8,14.8,.12,64),6783851,this.stage,0,.03,0),yn(this.stage,15.5,15325100,1),yn(this.stage,10.3,13092518,.7),yn(this.stage,4.2,13881264,.85);for(let o=0;o<68;o++){const l=o/68*Math.PI*2,c=st(ht.box,o%3?13947311:11251345,this.stage,Math.sin(l)*16,.12,Math.cos(l)*16,1.2,.23,.95);c.rotation.y=l}for(let o=-5;o<=5;o++)for(let l=-6;l<=6;l++){if(o*o+l*l>39||Math.abs(o)>1&&Math.abs(l)>1)continue;const c=o*2.6+l%2*.18,h=l*2.35,u=st(ht.box,(o+l)%4===0?10792855:12698277,this.stage,c,.1,h,2.42,.08,2.19);u.rotation.y=Math.sin(o*5+l)*.035}for(let o=0;o<20;o++){const l=o*2.399,c=15.9;st(ht.sphere,7834999,this.stage,Math.sin(l)*c,-2.3-o%3,Math.cos(l)*c,1.7,3,1.8)}for(const o of[-1,1]){st(ht.box,14275509,this.stage,o*4.4,2.8,-14.6,1.2,5.6,1.4),st(ht.box,15064772,this.stage,o*4.4,5.6,-14.6,1.65,.5,1.8);for(let l=0;l<4;l++)st(ht.box,9281411,this.stage,o*(4.4+.15*(l%2)),1+l*1.2,-13.87,1.22,.08,.08)}const t=new Tn(4.4,.68,6,32,Math.PI),e=st(t,14670012,this.stage,0,5.45,-14.6);e.rotation.z=0;for(let o=0;o<5;o++)st(ht.box,13288612,this.stage,(o-2)*1.1,.15,-12.8,1,.3,1.4);for(let o=0;o<12;o++){const l=o*Math.PI/6,c=st(ht.sphere,o%2?7902594:14730906,this.stage,Math.sin(l)*2.6,.13,Math.cos(l)*2.6,.28,.045,.75);c.rotation.y=l}for(let o=0;o<48;o++){const l=o*2.3999,c=5.5+o%8*1.1,h=Math.sin(l)*c,u=Math.cos(l)*c;if(!(Math.abs(h)<4||Math.abs(u)<4)){st(ht.sphere,5077091,this.stage,h,.2,u,.5,.27,.6);for(let d=0;d<3;d++){const f=h+Math.sin(d*2.1)*.32,g=u+Math.cos(d*2.1)*.32;st(ht.cyl,4351311,this.stage,f,.34,g,.025,.6,.025),st(ht.sphere,o%3===0?13998466:15524535,this.stage,f,.67,g,.15,.08,.15)}}}for(const o of[-12,12]){Qn(this.stage,new C(o,0,-3),new C(o,4.1,-3),.08,8290658);const l=st(ht.box,13933437,this.stage,o+.4,3.1,-3,.75,1.65,.035);l.rotation.z=.08,st(ht.torus,14995874,this.stage,o+.4,3.2,-2.97,.2)}for(let o=0;o<8;o++){const l=o*.8;st(ht.sphere,10270106,this.stage,Math.sin(l)*15.1,.26,Math.cos(l)*15.1,.9,.4,.8)}for(const o of[-10,10])for(const l of[-8])st(ht.cyl,5598557,this.stage,o,1.5,l,.12,3,.12),st(ht.box,15916721,this.stage,o,3,l,.65,.85,.65),st(ht.cone,4223327,this.stage,o,3.7,l,.6,.6,.6),yn(this.stage,1.2,16573872,.6).position.set(o,.06,l);for(let o=0;o<12;o++){const l=o/12*Math.PI*2+.1,c=Math.sin(l)*18,h=Math.cos(l)*18;h<5&&this.tree(c,h,o)}for(let o=0;o<7;o++){const l=(o-3)*13,c=-30-o%3*6;st(new De(5+o%3,2,3,7),8494728,this.stage,l,-4-o%3,c),this.tree(l,c,o+3,-2)}const n=new Me,s=new wi(new Oi(.075,.42,3),ur(4746328),1e3);for(let o=0;o<1e3;o++){const l=o*2.39996,c=5+o*7919%1100/100,h=Math.sin(l)*c,u=Math.cos(l)*c;n.position.set(h,.18,u),(Math.abs(h)<4||Math.abs(u)<3.6)&&(n.position.y=-1),n.rotation.set(.1,l,.2),n.scale.setScalar(.5+o%7*.12),n.updateMatrix(),s.setMatrixAt(o,n.matrix)}s.receiveShadow=!0,this.scene.add(s),this.stage.updateMatrixWorld(!0);const r=new Map;this.stage.traverse(o=>{if(o instanceof Ht&&o.material instanceof Fn){const l=r.get(o.material)||[],c=o.geometry.clone().applyMatrix4(o.matrixWorld);l.push(c.index?c.toNonIndexed():c),r.set(o.material,l)}});const a=[];this.stage.traverse(o=>{o instanceof Ht&&o.material instanceof Fn&&a.push(o)}),a.forEach(o=>o.removeFromParent());for(const[o,l]of r){const c=jl(l,!1);if(l.forEach(h=>h.dispose()),c){const h=new Ht(c,o);h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h)}}}tree(t,e,n,s=0){const r=new fe;if(r.position.set(t,s,e),this.stage.add(r),st(ht.cyl,7830361,r,0,1.4,0,.26,2.8,.26),n%3===0)for(let a=0;a<3;a++)st(ht.sphere,a%2?14267539:15321504,r,(a-1)*.8,3.3+a%2*.8,0,1.6,1.3,1.4);else for(let a=0;a<3;a++)st(ht.cone,n%2?3501147:4684899,r,0,2.3+a*.85,0,1.5-a*.28,3-a*.5,1.5-a*.28)}character(t){const e=new fe,n=new fe,s=new fe,r=new fe,a=new fe,o=new fe,l=new fe,c=new fe;e.add(n,c),n.add(s,r,a,o),o.add(l);const h=t==="hero",u=t==="boss";e.scale.setScalar(h?1.3:u?2.05:t==="elite"?1.35:1),e.userData.kind=t;let d=st(ht.box,h?14508094:13678210,n,0,1,-.25,.01,.01,.01);if(h){st(new De(.3,.52,.92,8),15655359,n,0,1.07,0),st(ht.box,1587779,n,0,1.3,.27,.48,.55,.13);for(const A of[-1,1]){const w=st(ht.box,2653302,n,A*.26,.75,-.04,.28,.75,.47);w.rotation.z=A*.16,st(ht.sphere,14465138,n,A*.43,1.48,0,.24,.17,.25)}s.position.y=1.86,st(ht.sphere,14990233,s,0,0,.02,.3,.36,.3),st(ht.sphere,1584183,s,0,.15,-.09,.34,.29,.32);for(let A=0;A<4;A++){const w=st(ht.cone,1584183,s,(A-1.5)*.12,.13,.2,.105,.4,.16);w.rotation.z=.6}for(const A of[-.12,.12])st(ht.box,1649715,s,A,.02,.3,.075,.035,.025);st(ht.torus,15121765,s,.32,0,.01,.13).rotation.y=Math.PI/2,r.position.set(-.2,.65,0),a.position.set(.2,.65,0);for(const A of[r,a])st(ht.cyl,1521472,A,0,-.2,0,.13,.52,.13),st(ht.box,2306876,A,0,-.45,.09,.27,.21,.44),st(ht.box,13019765,A,0,-.37,.26,.25,.06,.06);o.position.set(.43,1.43,0),st(ht.cyl,14998209,o,0,-.24,0,.13,.48,.13),st(ht.sphere,13277816,o,0,-.48,.03,.14),l.position.set(0,-.48,.08),st(ht.cyl,4544087,l,0,.1,0,.06,.58,.06),st(ht.box,13940074,l,0,.35,0,.5,.08,.14);const S=new Fc;S.moveTo(-.11,.4),S.lineTo(-.17,1.72),S.lineTo(0,2.25),S.lineTo(.13,1.55),S.lineTo(.1,.4),S.closePath();const M=st(new bo(S,{depth:.045,bevelEnabled:!1}),15073279,l);M.position.z=-.025,st(ht.cyl,6545364,l,0,1.15,.03,.023,1.45,.023);const x=new fe;x.position.set(-.44,1.38,0),n.add(x),st(ht.cyl,15720895,x,0,-.23,0,.14,.45,.14),st(ht.sphere,13213306,x,0,-.46,.06,.13),d.scale.set(.28,.85,.065),d.position.set(-.13,1.17,-.43),st(ht.cyl,14049347,n,0,1.57,0,.34,.15,.34)}else if(t==="knot"){st(ht.sphere,5860224,n,0,.6,-.15,.55,.43,.82),s.position.set(0,.74,.5),st(ht.sphere,14076852,s,0,0,.12,.42,.34,.44),st(ht.box,2504263,s,0,-.12,.47,.49,.16,.32);for(const S of[-1,1]){st(ht.sphere,16746072,s,S*.26,.08,.39,.07);const M=st(ht.cone,10009540,s,S*.33,.34,-.04,.13,.51,.17);M.rotation.x=-.6;for(const x of[-.48,.32]){const A=S<0?r:a;st(ht.cyl,3887207,A,S*.43,.25,x,.13,.48,.15),st(ht.cone,13156004,A,S*.43,.05,x+.12,.14,.2,.3).rotation.x=1.5}}for(let S=0;S<3;S++){const M=st(ht.cone,4217970,n,0,.6+S*.1,-.85-S*.18,.18-S*.04,.4,.2);M.rotation.x=-1.1}st(ht.torus,12751457,n,0,.65,-.1,.54,.46,.67).rotation.x=1.2}else if(t==="chime"){s.position.set(0,1.5,0),st(new De(.28,.69,.9,10,1,!0),12952684,s,0,0,0),st(ht.torus,16112023,s,0,-.43,0,.66).rotation.x=Math.PI/2,st(ht.sphere,6811104,s,0,-.55,0,.21,.31,.21),st(ht.cone,3491934,s,0,.72,0,.55,.8,.55);for(let S=0;S<3;S++){const M=S*2.094;Qn(n,new C(Math.sin(M)*.78,.8,Math.cos(M)*.78),new C(Math.sin(M)*.85,2.5,Math.cos(M)*.85),.045,9926296),st(ht.sphere,14660568,n,Math.sin(M)*.85,2.5,Math.cos(M)*.85,.13)}st(ht.torus,8674201,n,0,.8,0,.76).rotation.x=Math.PI/2}else if(t==="guard"){st(ht.box,4547429,n,0,1,0,1.08,1.45,.7),s.position.set(0,1.95,0),st(ht.box,10532521,s,0,0,0,.75,.5,.6),st(ht.box,1847355,s,0,-.02,.32,.5,.08,.03),st(ht.box,16757855,s,0,-.02,.35,.31,.04,.02);for(const S of[-1,1]){const M=S<0?r:a;st(ht.box,2703178,M,S*.38,.3,0,.4,.6,.52)}o.position.set(.55,1.2,0),st(ht.cyl,5862512,o,0,-.3,0,.2,.8,.2),l.position.set(-.4,-.12,.65),st(ht.box,11712672,l,0,0,0,1.6,1.75,.22),st(ht.box,3362385,l,0,0,.13,1.34,1.48,.05),st(ht.box,12888429,l,0,0,.18,.13,1.55,.06),st(ht.box,12888429,l,0,0,.18,1.4,.13,.06)}else if(t==="elite"){st(ht.cone,4209496,n,0,1.15,0,.62,1.7,.44);for(let M=0;M<4;M++)st(ht.torus,12102049,n,0,.8+M*.22,.07,.43-M*.04,.16,.33);s.position.set(0,2.06,.07),st(ht.cone,15124640,s,0,0,.04,.35,.6,.35).rotation.x=.25,st(ht.box,15366229,s,0,-.02,.27,.28,.07,.07);for(const M of[-1,1]){const x=M<0?r:a;Qn(x,new C(M*.25,.8,0),new C(M*.65,.3,-.1),.1,6575218),Qn(x,new C(M*.65,.3,-.1),new C(M*.6,.02,.4),.09,13087634)}o.position.set(.5,1.6,0),Qn(o,new C,new C(.6,-.3,.1),.12,8810375),l.position.set(.6,-.3,.1),Qn(l,new C(0,-.7,0),new C(0,1.8,0),.055,8813687);const S=st(new Tn(.8,.075,3,18,Math.PI*.85),15262411,l,-.65,1.65,0);S.rotation.z=-.25,st(ht.cone,12355437,n,-.45,1.4,0,.28,1.4,.25).rotation.z=-.8}else{st(new De(.65,1,1.9,6),3493729,n,0,1.35,0),s.position.set(0,2.65,0),st(ht.sphere,14206370,s,0,0,.1,.62,.52,.42),st(ht.box,3426134,s,0,-.05,.49,.68,.12,.06);for(const S of[-1,1]){st(ht.box,4283495,S<0?r:a,S*.55,.3,0,.62,.65,.8);const M=st(ht.sphere,6389381,n,S*1.02,1.9,0,.5,.55,.52);M.rotation.z=S*.2;const x=st(new Tn(1.05,.23,5,22,Math.PI*1.2),11843492,o,S*1.07,1.1,.1);x.rotation.z=S<0?-.7:Math.PI+.7,st(ht.sphere,4218476,o,S*1.3,.8,.5,.45,.55,.4)}st(ht.torus,13806177,n,0,1.5,.74,.58,.75,.3),st(ht.sphere,8060895,n,0,1.5,.73,.35,.5,.15);for(let S=0;S<5;S++){const M=(S-2)*.4,x=st(ht.cone,13085555,s,Math.sin(M)*.8,.65+Math.cos(M)*.15,-.04,.13,.8,.16);x.rotation.z=-M}}const f=yn(e,t==="guard"?1.15:.85,7798750,.95);f.visible=!1;const g=new Ht(new bn(1.25,.09),new Ye({color:15910260,depthTest:!1}));g.position.set(0,u?3.5:t==="knot"?1.7:2.85,0),g.visible=!1,e.add(g);const _=new Ht(new bn(1.25,.045),new Ye({color:10414307,depthTest:!1}));if(_.position.copy(g.position),_.position.y+=.17,_.visible=!1,e.add(_),u){const S=[];for(let M=0;M<3;M++){const x=new Ht(new Tn(.17,.04,4,20),new Ye({color:16765304}));x.position.set((M-1)*.37,2.02,.83),n.add(x),S.push(x)}e.userData.sealMeshes=S}const m=new Ht(new cs(h?.58:t==="guard"?1:.7,20),new Ye({color:1057586,transparent:!0,opacity:.35,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.035,e.add(m);const p=[];e.traverse(S=>{S instanceof fe&&p.push(S)});for(const S of p){const M=S.children.filter(w=>w instanceof Ht&&w.material instanceof Fn&&w!==d);if(M.length<2)continue;const x=[];for(const w of M){w.updateMatrix();const P=w.geometry.clone().applyMatrix4(w.matrix),D=P.index?P.toNonIndexed():P,b=D.attributes.position.count,y=w.material.color,L=new Float32Array(b*3);for(let F=0;F<b;F++)L[F*3]=y.r,L[F*3+1]=y.g,L[F*3+2]=y.b;D.setAttribute("color",new Ve(L,3)),x.push(D),w.removeFromParent(),Object.values(ht).includes(w.geometry)||w.geometry.dispose()}const A=jl(x,!1);if(x.forEach(w=>w.dispose()),A){const w=new Ht(A,Yc);w.receiveShadow=!0,S.add(w)}}return{root:e,body:n,head:s,left:r,right:a,arm:o,weapon:l,scarf:d,tele:c,mark:f,hp:g,posture:_}}batchActors(){const t=new Map;for(const e of this.actorBatches.values())for(const n of e)n.count=0;for(const e of this.actors.values()){const n=e.root.userData.kind;let s=this.actorParts.get(e);if(s||(s=[],e.body.traverse(o=>{o instanceof Ht&&o.material instanceof Fn&&(s.push(o),o.visible=!1)}),this.actorParts.set(e,s)),!e.root.visible)continue;let r=this.actorBatches.get(n);r||(r=s.map(o=>{const l=new wi(o.geometry.clone(),o.material,64);return l.frustumCulled=!1,l.receiveShadow=!0,l.count=0,this.scene.add(l),l}),this.actorBatches.set(n,r));const a=t.get(n)||0;if(!(a>=64)){e.root.updateMatrixWorld(!0);for(let o=0;o<s.length;o++)r[o].setMatrixAt(a,s[o].matrixWorld),r[o].count=a+1,r[o].instanceMatrix.needsUpdate=!0;t.set(n,a+1)}}}resize(){this.needsRender=!0;const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1);const n=t/e,s=n<.8?34:n<1.2?27:innerHeight<500?19:23;this.camera.left=-s*n/2,this.camera.right=s*n/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.near=.1,this.camera.far=180,this.camera.updateProjectionMatrix()}setQuality(t){this.quality=t,this.renderer.setPixelRatio(Math.min(devicePixelRatio,t==="low"?.7:1.25)),this.renderer.shadowMap.enabled=t!=="low",this.renderer.shadowMap.needsUpdate=!0,this.resize()}aim(t,e){this.pointer.set(t/innerWidth*2-1,-e/innerHeight*2+1),this.ray.setFromCamera(this.pointer,this.camera);const n=new C;return this.ray.ray.intersectPlane(this.ground,n)?{x:n.x,z:n.z}:null}fx(t){if(t.type==="hurt"){this.shake=.42;return}if(["action","begin","clear","tell","death","message"].includes(t.type))return;const e=t.power||.4;["hit","bloom","break","seal","perfect","restore"].includes(t.type)&&(this.shake=Math.max(this.shake,Math.min(.65,e*.3)),this.impulse=Math.max(this.impulse,e*.035));const n=new fe;n.position.set(t.x,.2,t.z);let s=.45;const r=a=>new Ye({color:a,transparent:!0,opacity:.95,side:ke,depthWrite:!1});if(["hit","break","chain","blocked","perfect","seal","restore"].includes(t.type)){const a=t.type==="blocked"?15971963:t.type==="break"?16766618:t.type==="perfect"?16777215:12713968,o=t.type==="hit"?5:12;for(let l=0;l<o;l++){const c=l/o*Math.PI*2+(t.angle||0);this.spark(t.x,.9,t.z,Math.sin(c)*(3+e*3),2+l%3,Math.cos(c)*(3+e*3),.12+e*.04,l%3?a:16777215,.35)}if(s=t.type==="hit"?.2:.4,t.end){const l=new as(new Te().setFromPoints([new C(0,.7,0),new C(t.end.x-t.x,.7,t.end.z-t.z)]),new mr({color:15204336,transparent:!0,opacity:.9}));n.add(l)}}else if(t.type==="release"){for(let a=0;a<8;a++)this.spark(t.x,.5,t.z,Math.sin(a)*2,2.8+a*.2,Math.cos(a)*2,.14,a%2?16765856:11206619,.8);s=.6}else if(t.type==="dodge"){for(let a=0;a<3;a++){const o=new Ht(new Oi(.14,1.3,3),r(12713971));o.position.set(Math.sin(a)*.2,.6,Math.cos(a)*.2),o.rotation.x=Math.PI/2,n.add(o)}s=.2}else if(t.type==="lane"&&t.end){const a=Math.hypot(t.end.x-t.x,t.end.z-t.z),o=new Ht(new bn(3,a),r(16295288));o.rotation.x=-Math.PI/2,o.rotation.z=-Math.atan2(t.end.x-t.x,t.end.z-t.z),o.position.set((t.end.x-t.x)/2,.04,(t.end.z-t.z)/2),n.add(o),s=.25}else{const a=["danger","enemySlash","pulse","overload"].includes(t.type)?16351575:t.type==="bloom"?16771002:10158047,o=t.radius||3;if(t.type==="slash"||t.type==="enemySlash"){const l=t.type==="slash"?sr[t.value||0].arc:1.2,c=new Ht(new Bi(o-.35,o,32,1,Math.PI/2-l,l*2),r(a));c.rotation.x=-Math.PI/2,c.rotation.z=-(t.angle||0),n.add(c),s=.2}else{if(yn(n,o,a,.9),t.type==="bloom"){yn(n,o*.85,16777215,.8);for(let l=0;l<24;l++){const c=l/24*Math.PI*2;this.spark(t.x+Math.sin(c)*o*.6,.3,t.z+Math.cos(c)*o*.6,Math.sin(c)*5,3+e*2,Math.cos(c)*5,.14,l%2?12255191:16769952,.7)}s=.65}if(t.type==="gather"){for(let l=0;l<3;l++){const c=new Ht(new Tn(o*(.5+l*.15),.035,3,32,Math.PI*1.5),r(a));c.rotation.x=-Math.PI/2,c.rotation.z=l,n.add(c)}s=.45}t.type==="sanctuary"&&(s=1.2)}}this.scene.add(n),this.effects.push({root:n,life:s,max:s,type:t.type}),this.effects.length>32&&this.removeEffect(this.effects.shift())}spark(t,e,n,s,r,a,o,l,c){this.sparks.length>=320&&this.sparks.shift(),this.sparks.push({position:new C(t,e,n),velocity:new C(s,r,a),size:o,color:new Yt(l),life:c,max:c})}updateSparks(t){this.sparks=this.sparks.filter(n=>n.life>0);let e=0;for(const n of this.sparks)n.life-=t,n.velocity.y-=t*7,n.position.addScaledVector(n.velocity,t),this.sparkDummy.position.copy(n.position),this.sparkDummy.scale.set(n.size*Math.max(.01,n.life/n.max),n.size*3*Math.max(.01,n.life/n.max),n.size),this.sparkDummy.quaternion.setFromUnitVectors(new C(0,1,0),n.velocity.clone().normalize()),this.sparkDummy.updateMatrix(),this.shards.setMatrixAt(e,this.sparkDummy.matrix),this.shards.setColorAt(e,n.color),e++;this.shards.count=e,this.shards.instanceMatrix.needsUpdate=!0,this.shards.instanceColor&&(this.shards.instanceColor.needsUpdate=!0)}removeEffect(t){t.root.removeFromParent(),t.root.traverse(e=>{(e instanceof Ht||e instanceof as)&&(Object.values(ht).includes(e.geometry)||e.geometry.dispose(),[...ds.values()].includes(e.material)||e.material.dispose())})}animateActor(t,e,n,s){const r=!e,a=e||n.player,o=r?Math.hypot(n.input.x,n.input.z)>.1:e.state==="chase",l=this.clock*(o?11:2)+(e?.id||0);if(t.root.position.set(a.x,0,a.z),t.root.rotation.y=a.angle,t.body.position.y=Math.sin(l)*(o?.04:.018),t.body.rotation.set(0,0,0),t.head.rotation.set(0,0,0),t.arm.rotation.set(0,0,0),t.weapon.rotation.set(0,0,0),t.left.rotation.x=o?Math.sin(l)*.42:0,t.right.rotation.x=o?-Math.sin(l)*.42:0,t.scarf.rotation.x=-.4+Math.sin(l)*.15,r&&n.action){const c=n.action,h=n.timeline,u=Math.min(1,c.t/h.hit),d=Math.max(0,(c.t-h.hit)/(h.duration-h.hit)),f=Math.sin(u*Math.PI/2),g=Math.exp(-d*7),_=c.t<h.hit?f:g;c.kind==="attack"?(c.combo===0&&(t.arm.rotation.set(-.9,-1.7*_,1.1),t.body.rotation.y=-.55*_,t.weapon.rotation.z=.6),c.combo===1&&(t.arm.rotation.set(-.6,1.9*_,-.8),t.body.rotation.y=.8*_,t.weapon.rotation.z=-.5),c.combo===2&&(t.arm.rotation.x=c.t<h.hit?-2.7*f:.9-1.2*g,t.body.rotation.x=c.t<h.hit?-.18*f:.55*g,t.body.position.y=c.t<h.hit?.1*f:-.12*g,t.weapon.rotation.z=.15)):c.kind==="dodge"?(t.body.rotation.z=-.75,t.body.rotation.x=.9,t.body.position.y=-.28,t.arm.rotation.x=-1.2):c.kind==="gather"?(t.arm.rotation.x=-1.6*_,t.body.rotation.x=c.t<h.hit?.25*f:-.3*g,t.weapon.rotation.z=-.8):c.kind==="weave"?(t.arm.rotation.set(-1.2,_*2.8,.65),t.body.rotation.y=_*.6):(t.arm.rotation.x=c.t<h.hit?-2.9*f:1.1-2*g,t.body.rotation.x=c.t<h.hit?-.2:.65*g,t.body.position.y=c.t<h.hit?.15*f:-.2*g)}if(r&&n.player.hit>0&&(t.body.rotation.x=-.45,t.body.rotation.z=.25),r&&n.phase==="dead"&&(t.body.rotation.z=1.5,t.body.position.y=-.3),e){if(t.root.visible=e.hp>0||e.deadTime>0&&n.phase==="fight",e.hp<=0){t.body.scale.setScalar(Math.max(.01,e.deadTime/.8)),t.body.rotation.z=(.8-e.deadTime)*2,t.body.position.y=(.8-e.deadTime)*1.5;return}if(t.body.scale.setScalar(1),e.kind==="chime"&&(t.body.position.y=.15+Math.sin(this.clock*3+e.id)*.18,t.body.rotation.y=this.clock*.35,t.left.rotation.x=0,t.right.rotation.x=0),e.kind==="guard"&&(t.left.rotation.x*=.35,t.right.rotation.x*=.35,e.broken>0&&(t.weapon.rotation.z=.9,t.body.rotation.x=.35)),e.kind==="boss"&&(t.body.position.y=Math.sin(this.clock*1.4)*.04,t.arm.rotation.z=Math.sin(this.clock*1.4)*.05,e.broken>0&&(t.body.rotation.x=.35,t.arm.rotation.x=.6)),e.state==="tell"){const c=Math.sin(Math.max(0,1-e.timer)*Math.PI*.5);t.body.rotation.x=e.kind==="knot"?-.3:-.12,t.arm.rotation.x=-1.4-c*.5,t.head.rotation.x=-.12,e.kind==="chime"&&(t.body.position.y+=.25),e.kind==="boss"&&e.pattern===2&&(t.arm.rotation.x=-1.8,t.body.position.y+=.2)}if(e.state==="strike"&&(t.body.rotation.x=.48,t.arm.rotation.x=1.2,e.kind==="elite"&&(t.body.rotation.y=Math.sin(e.timer*12)*1.6)),e.state==="recover"&&(t.arm.rotation.x=.65,t.body.rotation.x=.14),e.hit>0&&(t.body.rotation.z=Math.sin(e.hit*40)*.25),t.mark.visible=e.mark>0,t.mark.rotation.z=this.clock*.7,t.mark.material.color.setHex(n.tension>=83?16742748:n.tension>=60?16770209:7340016),t.hp.visible=e.hp<e.max,t.hp.scale.x=Math.max(.01,e.hp/e.max),t.hp.quaternion.copy(this.camera.quaternion),t.hp.rotation.y-=t.root.rotation.y,t.posture.visible=(e.kind==="guard"||e.kind==="elite")&&e.broken<=0,t.posture.scale.x=Math.max(.01,e.posture/ce.posture[e.kind]),t.posture.quaternion.copy(t.hp.quaternion),e.kind==="boss")for(let c=0;c<3;c++)t.root.userData.sealMeshes[c].visible=c>=n.seals;this.telegraph(t,e)}else t.root.visible=!0}telegraph(t,e){const n=e.state==="tell"?`${e.pattern}`:"none";if(t.tele.userData.key!==n&&(t.tele.traverse(s=>{(s instanceof Ht||s instanceof as)&&(s.geometry.dispose(),s.material.dispose())}),t.tele.clear(),t.tele.userData.key=n,n!=="none")){const s=t.root.scale.x,r=e.kind==="boss"&&e.pattern===2,a=r?5308380:16215622,o=new Ye({color:a,transparent:!0,opacity:.3,side:ke,depthWrite:!1});if(["knot","elite"].includes(e.kind)||e.kind==="boss"&&e.pattern===1){const l=e.kind==="boss"?15:e.kind==="elite"?8.3:e.kind==="chime"?13:4,c=e.kind==="boss"||e.kind==="elite"?3:1.7,h=new Ht(new bn(c/s,l/s),o);h.rotation.x=-Math.PI/2,h.position.set(0,.07,l/2/s),t.tele.add(h);const u=new Cc(new wu(h.geometry),new mr({color:a,transparent:!0,opacity:.9}));u.rotation.copy(h.rotation),u.position.copy(h.position),t.tele.add(u)}else if(e.kind==="chime"){const l=new Ht(new cs(16/s,32,Math.PI/2-.23,.46),o);l.rotation.x=-Math.PI/2,l.position.y=.07,t.tele.add(l)}else if(e.kind==="boss"&&e.pattern===3)for(let l=0;l<3;l++){const c=new C(e.target.x+(l-1)*3.5-e.x,0,e.target.z-e.z).applyAxisAngle(new C(0,1,0),-e.angle);yn(t.tele,2.7/s,a,.95).position.set(c.x/s,.08,c.z/s)}else if(e.kind==="boss"&&e.pattern===2)yn(t.tele,9/s,a,.95);else{const l=(e.kind==="boss"?7:3.6)/s,c=e.kind==="boss"?1.2:1.25,h=new Ht(new cs(l,40,Math.PI/2-c,c*2),o);h.rotation.x=-Math.PI/2,h.position.y=.07,t.tele.add(h);const u=new Ht(new Bi(l-.06,l,40,1,Math.PI/2-c,c*2),o.clone());u.rotation.x=-Math.PI/2,u.position.y=.08,u.material.opacity=1,t.tele.add(u)}}t.tele.visible=e.state==="tell",t.tele.visible&&(t.tele.rotation.y=e.attackAngle-e.angle,t.tele.scale.setScalar(1),t.tele.traverse(s=>{s instanceof Ht&&s.material instanceof Ye&&(s.material.opacity=Math.max(.25,Math.min(.65,1-e.timer*.4)))}))}render(t,e,n=!1,s=!1){t.hitstop>0&&(e=0),n||(this.clock+=e),this.impulse=Math.max(0,this.impulse-e*.22),this.field.update(t,this.clock),this.camera.zoom=1+this.impulse,this.camera.updateProjectionMatrix(),this.shake=Math.max(0,this.shake-e);const r=t.phase==="won",a=t.enemies.find(d=>d.hp>0&&d.kind==="boss")||t.enemies.find(d=>d.id===t.targetId&&d.hp>0),o=innerWidth/innerHeight<.8,l=r?0:t.player.x*.65+(a?.x??t.player.x)*.25,c=t.phase==="won"?-5:o&&a?t.player.z*.4+a.z*.6-1:t.player.z*.65+(a?.z??t.player.z)*.25;this.target.lerp(new C(l,0,c),n?1:Math.min(1,e*4));const h=s?0:this.shake*.38;if(this.camera.position.set(this.target.x+Math.sin(this.clock*70)*h,24,this.target.z+28),this.camera.lookAt(this.target.x,0,this.target.z),this.camera.updateMatrixWorld(),this.animateActor(this.hero,null,t,e),this.reunion.visible=t.phase==="won",this.sibling.root.visible=t.phase==="won",t.phase==="won"&&(this.hero.root.position.set(-1,0,-7),this.hero.root.rotation.y=.4,this.sibling.root.position.set(1,.2+Math.sin(this.clock*2)*.12,-7),this.sibling.root.rotation.y=-.4),t.stage!==this.lastStage||t.phase!==this.lastPhase||this.actors.size!==t.enemies.length||t.enemies.some(d=>!this.actors.has(d.id))){for(const[d,f]of this.actors)t.enemies.some(g=>g.id===d)||(this.removeEffect({root:f.root}),this.actors.delete(d));(t.phase==="hub"||t.phase==="fight"&&this.lastPhase!=="fight")&&(this.effects.forEach(d=>this.removeEffect(d)),this.effects=[],this.sparks=[]),this.lastStage=t.stage,this.lastPhase=t.phase}this.scene.background=new Yt(wn[t.stage].color).multiplyScalar(.72);for(const d of t.enemies){let f=this.actors.get(d.id);f||(f=this.character(d.kind),this.actors.set(d.id,f),this.scene.add(f.root)),this.animateActor(f,d,t,e)}const u=new Me;if(t.flowers.length!==this.flowerCount){this.flowerCount=t.flowers.length;let d=0;for(const f of t.flowers)for(let g=0;g<5;g++)u.position.set(f.x+Math.sin(g*1.26)*.22,.18,f.z+Math.cos(g*1.26)*.22),u.rotation.set(0,g*1.26,0),u.scale.setScalar(.65+g%3*.2),u.updateMatrix(),this.flowerMesh.setMatrixAt(d++,u.matrix);this.flowerMesh.count=d,this.flowerMesh.instanceMatrix.needsUpdate=!0}for(let d=0;d<65;d++)u.position.set(Math.sin(d*5.3+this.clock*.09)*17,1+d%7*.6+Math.sin(this.clock+d)*.3,Math.cos(d*3.8+this.clock*.06)*17),u.rotation.set(this.clock*.3+d,d,Math.sin(this.clock+d)),u.scale.setScalar(1),u.updateMatrix(),this.petals.setMatrixAt(d,u.matrix);if(this.petals.instanceMatrix.needsUpdate=!0,this.bell.rotation.z=Math.sin(this.clock*1.4)*(t.phase==="won"?.18:.035),!n)for(let d=this.effects.length-1;d>=0;d--){const f=this.effects[d];if(f.life-=e,f.life<=0){this.removeEffect(f),this.effects.splice(d,1);continue}const g=1-f.life/f.max;f.root.scale.setScalar(f.type==="gather"?1-g*.7:f.type==="release"?1+g:g*.35+.8),f.root.position.y+=f.type==="release"?e*1.6:0,f.root.traverse(_=>{_.userData.velocity&&(_.position.addScaledVector(_.userData.velocity,e),_.userData.velocity.y-=e*7,_.rotation.x+=e*4),(_ instanceof Ht||_ instanceof as)&&!(_.material instanceof Fn)&&(_.material.opacity=(1-g)*.9)})}this.batchActors(),this.updateSparks(e),this.renderer.render(this.scene,this.camera),this.needsRender=!1}project(t,e,n=2){const s=new C(t,n,e).project(this.camera);return{x:(s.x+1)*innerWidth/2,y:(1-s.y)*innerHeight/2}}}class tg{ctx=null;master=null;music=null;paused=!1;volume=.6;beat=0;clock=0;active=!1;noise=null;compressor=null;lastHit=-1;danger=0;init(){if(this.ctx=window.groovplay.audio.context(),!!this.ctx){if(!this.master){this.master=this.ctx.createGain(),this.music=this.ctx.createGain(),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-16,this.compressor.ratio.value=6,this.compressor.attack.value=.003,this.master.connect(this.compressor),this.music.connect(this.compressor),this.compressor.connect(this.ctx.destination),this.noise=this.ctx.createBuffer(1,this.ctx.sampleRate,this.ctx.sampleRate);const t=this.noise.getChannelData(0);let e=319;for(let n=0;n<t.length;n++)e=e*16807%2147483647,t[n]=e/1073741824-1}this.ctx.resume().catch(()=>{}),this.sync()}}sync(){if(!this.ctx||!this.master||!this.music)return;const t=window.groovplay.settings;this.master.gain.setTargetAtTime(!this.paused&&t.get("sound")?this.volume:0,this.ctx.currentTime,.025),this.music.gain.setTargetAtTime(!this.paused&&t.get("music")?this.volume*.19:0,this.ctx.currentTime,.05)}note(t,e,n=.2,s="sine",r=!1,a=0,o){if(!this.ctx)return;const l=r?this.music:this.master;if(!l)return;const c=this.ctx.currentTime+a,h=this.ctx.createOscillator(),u=this.ctx.createGain();h.type=s,h.frequency.setValueAtTime(t,c),o&&h.frequency.exponentialRampToValueAtTime(o,c+e),u.gain.setValueAtTime(.001,c),u.gain.exponentialRampToValueAtTime(n,c+.004),u.gain.exponentialRampToValueAtTime(.001,c+e),h.connect(u),u.connect(l),h.start(c),h.stop(c+e+.02),h.onended=()=>{h.disconnect(),u.disconnect()}}crack(t,e,n,s=0){if(!this.ctx||!this.noise||!this.master)return;const r=this.ctx,a=r.currentTime+s,o=r.createBufferSource(),l=r.createBiquadFilter(),c=r.createGain();o.buffer=this.noise,l.type="bandpass",l.frequency.value=n,l.Q.value=.6,c.gain.setValueAtTime(e,a),c.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(l),l.connect(c),c.connect(this.master),o.start(a),o.stop(a+t),o.onended=()=>{o.disconnect(),l.disconnect(),c.disconnect()}}effect(t,e=0,n=.5){if(!(this.paused||!this.ctx)){if(t==="hit"){if(this.ctx.currentTime-this.lastHit<.04)return;this.lastHit=this.ctx.currentTime,this.note(120+n*30,.14,.24,"sine",!1,0,38),this.crack(.065,.23,2300),this.note(870+e*3,.12,.065,"triangle"),n>=1&&this.crack(.18,.17,480)}t==="slash"&&this.crack(.12,.1,1200+e*450),t==="gather"&&(this.crack(.22,.12,800),this.note(120,.28,.12,"sawtooth",!1,0,540)),t==="weave"&&(this.note(780,.19,.12,"triangle"),this.note(1170,.28,.08,"sine",!1,.05),this.crack(.08,.1,4e3)),(t==="bloom"||t==="seal")&&(this.note(t==="seal"?72:95,.42,.5,"sine",!1,0,28),this.crack(.12,.38,1300),this.crack(.38,.18,340,.06),[293.66,440,587.33,880].forEach((s,r)=>this.note(s,1.1,.11,"triangle",!1,.06+r*.03)),this.music&&this.music.gain.setTargetAtTime(.02,this.ctx.currentTime,.005),setTimeout(()=>this.sync(),180)),t==="chain"&&(this.crack(.07,.18,1800),this.note(470,.18,.09,"triangle",!1,0,170)),t==="break"&&(this.crack(.21,.32,2400),this.note(170,.23,.23,"triangle",!1,0,62)),t==="blocked"&&(this.note(1650,.13,.08,"triangle"),this.crack(.045,.12,3400)),t==="dodge"&&this.crack(.16,.12,950),t==="perfect"&&(this.note(1100,.4,.17),this.note(2200,.3,.08,"sine",!1,.03)),t==="hurt"&&(this.note(95,.3,.35,"sine",!1,0,30),this.crack(.14,.22,620)),t==="shot"&&this.note(300,.2,.13,"sawtooth",!1,0,90),t==="overload"&&(this.note(130,.7,.17,"sawtooth"),this.note(138,.7,.13,"sawtooth"),this.crack(.35,.2,2200)),["clear","restore","reunion"].includes(t)&&[293.66,369.99,440,587.33].forEach((s,r)=>this.note(s,1.2,.13,"sine",!1,r*.13)),t==="death"&&[196,146.83,98].forEach((s,r)=>this.note(s,.8,.13,"triangle",!1,r*.16))}}update(t,e,n,s=0){if(this.paused||!this.ctx)return;this.clock+=t;const r=n?.25:e?.3:.57;if(this.clock<r)return;this.clock-=r;const a=n?146.83:196,o=this.beat++%32,l=[0,7,12,14,10,7,3,5,12,7,3,2,0,3,7,10];o%2===0&&this.note(a*Math.pow(2,l[o/2|0]/12),.8,.12,"sine",!0),o%8===0&&(this.note(a/2,1.8,.2,"triangle",!0),this.note(a*.75,1.8,.06,"sine",!0)),e&&o%2===1&&this.note(85,.16,.16,"sine",!0,0,32),e&&s>=60&&(this.note(a*(o%2?2:3),.12,.055,"triangle",!0),o%4===0&&this.note(a/4,.5,.13,"sine",!0)),s>=85&&this.note(1800,.04,.035,"square",!0)}}const Gt=window.groovplay,Ae=document.querySelector("#ui"),Vn=document.querySelector("#world"),et=new oh(ah(Gt.storage.get("journey")));et.onSave=i=>{Gt.storage.set("journey",i)};const Se=new tg;let Re,ee="title",Gn=!0,vr=et.phase,Ro="title";const Qe=new Set,si=new Map;let ki=null,ao={x:0,y:0},Sr=!1,Er=0,ha=0,ir=0,ua=0,tc="";const $c=Gt.storage.get("preferences"),ec=Number($c?.volume??.6);Se.volume=Number.isFinite(ec)?Math.max(0,Math.min(1,ec)):.6;const eg=()=>Gt.host.touch||matchMedia("(pointer:coarse)").matches,ng={attack:"╱",gather:"◎",weave:"⌘",bloom:"✳",dodge:"➝"},nc={attack:"J",gather:"Q",weave:"E",bloom:"R",dodge:"␣"},xr={attack:"베기",gather:"당기기",weave:"엮기",bloom:"끊어피우기",dodge:"회피"};let ic=-1e3;function Ce(i,t){const e=document.getElementById(i);e?.addEventListener("pointerup",n=>{n.pointerType!=="mouse"&&(n.preventDefault(),ic=performance.now(),Se.init(),t())}),e?.addEventListener("click",n=>{n.detail!==0&&performance.now()-ic<500||(Se.init(),t())})}function Co(){Qe.clear(),si.clear(),ki=null,Sr=!1,et.clearInput();const i=document.getElementById("stick");i&&(i.style.transform="")}function Yi(){Gn=!0,Co(),Gt.lifecycle.gameplayStop(),Se.paused=!0,Se.sync()}function Jc(){ee="title",Yi(),Ae.innerHTML=`<section class="screen title"><div class="title-content"><div class="eyebrow">WINDSEAM &nbsp; / &nbsp; A GARDEN REMEMBERS</div><h1 class="wordmark">바람실</h1><h2 class="subtitle">돌아오는 정원</h2><div class="title-rule"></div><p class="title-desc">흩어진 마음을 모아,<br>다시 피어나는 세계.<br>바람 끝에서 기다리는 너에게.</p><div class="btn-row"><button class="btn" id="enter">${et.rescued>0||et.builds.length?"이어서 걷기":"정원에 들어가기"} <span>↗</span></button><button class="btn ghost" id="help">조작 안내</button><button class="btn ghost" id="settings">설정</button></div></div><div class="title-footer"><span>3D ACTION RPG &nbsp; · &nbsp; 혼자 떠나는 작은 모험</span><span>모으고, 엮고, 꽃피우다.</span></div></section>`,Ce("enter",()=>ys()),Ce("help",()=>ig()),Ce("settings",()=>Kc())}function ig(){ee="help",Ae.innerHTML='<section class="screen overlay"><div class="modal"><div class="eyebrow">이음의 바람실</div><h1>매듭을 풀면, 꽃이 됩니다.</h1><p><b>E로 엮고 Q로 당겨 장력을 쌓으세요.</b> 60 이상에서 R을 쓰면 강한 연쇄 파열이 일어납니다. 100에 닿으면 적이 실을 끊고 반격합니다.<br>방패는 3타·공격 직전 E로 무너뜨리세요. 공격 직전에 회피하면 E를 바로 다시 쓸 수 있습니다. 3타와 R의 빛나는 타격 직전에는 회피가 예약됩니다.</p><div class="key-grid"><span><b>WASD</b> 이동 · 방향키도 가능</span><span><b>마우스</b> 조준 · 클릭 유지로 베기</span><span><b>J</b> 기본 공격 3연타</span><span><b>Space</b> 회피 · 공격 취소</span><span><b>Q / E</b> 당기기 / 엮기</span><span><b>R</b> 끊어피우기 · 장력 60에서 강력</span></div><p>모바일: 왼쪽 스틱으로 이동하면서 오른쪽 버튼을 함께 누르세요. 이동 방향의 적을 우선 겨눕니다. 가로 화면을 권장합니다.</p><div class="btn-row"><button class="btn" id="help-close">알겠어요</button></div></div></section>',Ce("help-close",()=>Jc())}function ys(){ee="play",Gn=!1,vr=et.phase,Co(),Gt.lifecycle.gameplayStart(),Se.paused=!1,Se.sync(),Er=0,Po(),et.phase==="choice"&&Zc(),(et.phase==="dead"||et.phase==="won")&&Do()}function rs(i){return`<button class="skill ${i}" data-action="${i}" aria-label="${xr[i]} ${nc[i]}"><span class="key">${nc[i]}</span><span class="glyph">${ng[i]}</span><span class="label">${xr[i]}</span><span class="cooldown"></span></button>`}function Po(){Ae.innerHTML=`<div class="hud ${eg()?"touch":""}"><div class="hud-top"><div class="player-panel"><div class="player-name"><b>이음</b><span>바람실 지기</span></div><div class="hp-track"><div class="hp-fill" id="hp"></div></div><div class="hp-meta"><span id="hp-value"></span><span id="rescued"></span></div></div><div class="objective"><div class="chapter">${wn[et.stage].title}</div><strong id="objective">${wn[et.stage].name}</strong></div><div class="top-actions"><button class="icon-btn" id="sound" aria-label="소리 켜기 또는 끄기">${Gt.settings.get("sound")?"♪":"♩"}</button><button class="icon-btn" id="pause" aria-label="일시정지">Ⅱ</button></div></div><div class="boss-bar" id="boss" hidden>정원지기 · 놓지 못한 약속<div class="hp-track"><div class="hp-fill" id="boss-hp"></div></div></div>${et.phase==="fight"?`<div class="tension-panel" id="tension-panel"><div class="tension-caption"><span id="link-count">연결된 실 없음</span><b id="tension-value">0</b></div><div class="tension-track"><i id="tension-fill"></i><span></span></div><small id="tension-hint">E로 실을 잇고 Q·3타로 장력 쌓기</small></div><div class="combat-state" id="combat-state"></div><div class="hit-vignette" id="hit-vignette"></div><div class="hint" id="hint">${wn[et.stage].tip}</div><div class="controls">${rs("gather")}${rs("weave")}${rs("bloom")}${rs("dodge")}${rs("attack")}</div><div id="joystick" role="application" aria-label="이동 스틱"><div id="stick"></div></div><div class="move-legend"><b>W A S D</b> 이동<br>마우스로 조준 · J 베기</div>`:`<div class="story"><div><span class="speaker">${et.phase==="finale"?"소리 · 풍경 앞에서":Bo[et.stage].speaker}</span><p>${et.phase==="finale"?"이제 들려. 여기까지 와서, 우리 함께 풍경을 울리자. 이동해서 빛에 다가온 뒤 Q를 눌러 주세요.":Bo[et.stage].line}</p></div><button class="btn" id="begin">${et.phase==="finale"?"함께 풍경 울리기 Q":et.stage===0?"첫 바람 깨우기":"다음 매듭으로"} ↗</button></div>`}${et.phase!=="fight"?'<div id="joystick" role="application" aria-label="이동 스틱"><div id="stick"></div></div>':""}</div>`,Ce("pause",()=>{Gt.screens.goto("pause")}),Ce("sound",()=>{const t=!Gt.settings.get("sound");Gt.settings.set("sound",t),Gt.settings.set("music",t),document.getElementById("sound").textContent=t?"♪":"♩"}),Ce("begin",()=>{if(et.phase==="finale"){et.request("gather")==="rejected"&&Qc(et.rejection);return}et.start(),Er=0,vr=et.phase,Po()});for(const t of Ae.querySelectorAll("[data-action]"))t.addEventListener("pointerdown",e=>{e.preventDefault(),Se.init();const n=t.dataset.action;t.setPointerCapture(e.pointerId),si.set(e.pointerId,n),n==="attack"?et.input.attack=!0:Lo(n)}),t.addEventListener("pointerup",En),t.addEventListener("pointercancel",En),t.addEventListener("lostpointercapture",En);const i=document.getElementById("joystick");i?.addEventListener("pointerdown",t=>{t.preventDefault(),Se.init(),ki=t.pointerId,i.setPointerCapture(t.pointerId);const e=i.getBoundingClientRect();ao={x:e.x+e.width/2,y:e.y+e.height/2},sc(t)}),i?.addEventListener("pointermove",sc),i?.addEventListener("pointerup",En),i?.addEventListener("pointercancel",En),i?.addEventListener("lostpointercapture",En),jc()}function sc(i){if(i.pointerId!==ki)return;const t=i.clientX-ao.x,e=i.clientY-ao.y,n=Math.hypot(t,e),s=40;et.input.x=t/Math.max(s,n),et.input.z=e/Math.max(s,n);const r=document.getElementById("stick");r&&(r.style.transform=`translate(${t/Math.max(1,n/s)}px,${e/Math.max(1,n/s)}px)`)}function En(i){const t=si.get(i.pointerId)==="attack";if(si.delete(i.pointerId),t&&(et.input.attack=Qe.has("KeyJ")||[...si.values()].includes("attack")),i.pointerId===ki){ki=null,et.input.x=0,et.input.z=0;const e=document.getElementById("stick");e&&(e.style.transform="")}}function Lo(i){if(Gn||ee!=="play")return;const t=et.request(i);if(t==="queued"){const e=Ae.querySelector(`[data-action="${i}"] .label`);e&&(e.textContent="예약됨",setTimeout(()=>{e.textContent=xr[i]},300))}if(t==="rejected"){Qc(et.rejection);const e=Ae.querySelector(`[data-action="${i}"]`);e?.classList.add("flash"),setTimeout(()=>e?.classList.remove("flash"),160)}}function sg(){ee!=="settings"&&(ee="pause",Yi(),Ae.innerHTML=`<section class="screen overlay"><div class="modal"><div class="eyebrow">잠깐, 바람을 고르며</div><h1>정원은 기다리고 있어요.</h1><p>${wn[et.stage].name}<br>전투 사이에서 여정이 자동으로 저장됩니다.</p><div class="key-grid"><span><b>WASD</b> 이동</span><span><b>J / 클릭</b> 베기</span><span><b>E · Q · R</b> 연결 · 장력 · 해방</span><span><b>Space</b> 회피</span></div><div class="btn-row"><button class="btn" id="resume">계속 걷기</button><button class="btn ghost" id="settings">설정</button><button class="btn ghost" id="title">시작 화면</button></div></div></section>`,Ce("resume",ys),Ce("settings",Kc),Ce("title",()=>{Gt.screens.goto("title")}))}function Kc(){Ro=ee==="play"||ee==="pause"?"pause":"title",Yi(),ee="settings",Gt.shell.openSettings()}function Zc(){Yi(),ee="choice";const i=et.builds.length;Ae.innerHTML=`<section class="screen overlay"><div class="modal"><div class="eyebrow">돌아온 기억 / ${i+1}번째 선택</div><h1>어떤 실을 남길까요?</h1><p>성장은 이번 여정에 남습니다. 같은 전장에서 다른 길을 만들 수 있어요.</p><div class="choice-grid">${["garden","trail"].map(t=>`<button class="choice" id="${t}"><span class="symbol">${t==="garden"?"✳":"↝"}</span><strong>${wr[t].name}</strong><p>${wr[t].steps[t==="garden"?et.garden:et.trail]}</p><small>${wr[t].role}</small></button>`).join("")}</div></div></section>`;for(const t of["garden","trail"])Ce(t,()=>{et.choose(t)&&ys()})}function Do(){ee="results",Yi();const i=et.phase==="won",t=et.phase==="dead";Ae.innerHTML=`<section class="screen overlay"><div class="modal"><div class="eyebrow">${i?"약속이 바람이 되는 순간":t?"아직 끝나지 않은 여정":"바람이 머무는 곳"}</div><div class="ending-bloom">${i?"✳ ✧ ✳":"❧"}</div><h1>${i?"이제, 함께 돌아가자.":t?"잠깐 쉬어도 괜찮아.":"정원에 남긴 발자국"}</h1><p>${i?"마지막 매듭이 풀리자, 풍경 안의 소리가 작은 바람이 되어 이음 곁에 내려앉았습니다. 두 사람이 되살린 꽃들이 돌아갈 길을 밝힙니다.<br><br><b>소리:</b> “나, 조금 달라졌지?”<br><b>이음:</b> “그래도 네 손은 알아볼 수 있어.”":t?"소리의 바람이 당신을 안전한 문턱으로 데려왔습니다.<br>선택한 성장은 그대로입니다. 체력을 회복하고 다시 도전하세요.":"매듭을 풀고 정원을 되살리면, 여기에 당신의 이야기가 남습니다."}</p><div class="stat-row"><div><strong>${et.rescued}</strong><span>되돌린 마음</span></div><div><strong>${et.bestChain}</strong><span>최대 꽃연계</span></div><div><strong>${et.builds.length}</strong><span>이어진 기억</span></div></div><div class="btn-row">${t?'<button class="btn" id="retry">이 전투 다시 도전</button>':i?'<button class="btn" id="garden-view">되살아난 정원 보기</button>':""}<button class="btn ghost" id="new">새로운 바람으로</button><button class="btn ghost" id="title">시작 화면</button></div><p class="small">${i?"새 여정에서는 다른 성장으로 당신만의 연계를 찾아보세요.":"안전한 조우 경계에서 자동 저장됩니다."}</p></div></section>`,Ce("retry",()=>{et.retry(),ys()}),Ce("new",()=>{et.newRun(),ys()}),Ce("title",()=>{Gt.screens.goto("title")}),Ce("garden-view",()=>{ee="ending",Gn=!0,Ae.innerHTML=`<div class="hud"><div class="story"><div><span class="speaker">소리 · 이음 곁에서</span><p>들리지? 우리가 되돌려 놓은 바람이야.<br>네가 피운 ${et.rescued}개의 마음, 이제 함께 지켜보자.</p></div><button class="btn" id="ending-back">여정 돌아보기</button></div></div>`,Ce("ending-back",Do),Se.paused=!1,Se.sync()})}function jc(){const i=document.getElementById("hp");if(!i)return;i.style.width=`${et.player.hp/et.player.max*100}%`,document.getElementById("hp-value").textContent=`${Math.ceil(et.player.hp)} / ${et.player.max}`,document.getElementById("rescued").textContent=`✧ ${et.rescued+et.stageRescued}`;const t=et.enemies.filter(r=>r.hp>0);document.getElementById("objective").textContent=et.phase==="fight"?`${wn[et.stage].name} · 남은 매듭 ${t.length}`:wn[et.stage].name;for(const r of Ae.querySelectorAll("[data-action]")){const a=r.dataset.action,o=et.cooldowns[a];r.classList.toggle("busy",o>.05),r.querySelector(".cooldown").textContent=o.toFixed(1),r.classList.toggle("charged",a==="bloom"&&et.tension>=60),r.classList.toggle("unavailable",a==="bloom"&&et.marked.length===0)}const e=t.find(r=>r.kind==="boss");document.getElementById("boss").hidden=!e,e&&(document.getElementById("boss-hp").style.width=`${e.hp/e.max*100}%`);const n=document.getElementById("tension-fill");n&&(n.style.width=`${et.tension}%`,document.getElementById("tension-value").textContent=`${Math.floor(et.tension)}`,document.getElementById("link-count").textContent=`${et.marked.length}개의 연결 · ${et.strongReleases}회 붕괴`,document.getElementById("tension-hint").textContent=et.tension>=85?"과부하 임박 · 지금 끊거나 거리를 벌리세요":et.tension>=60?"강한 해방 준비 · R로 매듭 붕괴":"E로 엮고 Q·3타로 장력 쌓기",document.getElementById("tension-panel").dataset.level=et.tension>=85?"danger":et.tension>=60?"ready":"calm",document.getElementById("combat-state").textContent=et.player.counter>0?"찰나의 틈 · E 반격":et.committed?"타격 확정 · 회피 예약 가능":et.buffer?`${xr[et.buffer.kind]} 예약`:"",document.getElementById("hit-vignette").style.opacity=String(et.player.hit*2)),e&&(document.getElementById("boss").firstChild.textContent=`정원지기 · ${et.seals}/3 봉인 해방 · ${e.broken>0?"심장 노출 — 강한 R":e.state==="tell"&&e.pattern===2?"울림 — Q로 끊기":"청록 울림을 기다리세요"}`);const s=document.getElementById("hint");s&&(s.style.opacity=Er>16?"0":"1")}function Qc(i){const t=Ae.querySelector(".notice");if(t?.textContent===i)return;t?.remove();const e=document.createElement("div");e.className="notice",e.textContent=i,Ae.append(e),setTimeout(()=>e.remove(),2100)}let rc=0;function rg(){for(const i of et.events){if(Re.fx(i),(i.type!=="hit"||et.time-rc>.05)&&(Se.effect(i.type,i.value,i.power),i.type==="hit"&&(rc=et.time)),i.type==="hit"&&Ae.querySelectorAll(".float-text").length<14){const t=Re.project(i.x,i.z),e=document.createElement("div");e.className="float-text"+((i.power||0)>=1?" heavy":""),e.style.left=`${t.x}px`,e.style.top=`${t.y}px`,e.textContent=i.text==="막힘"?`${i.value} 막힘`:String(i.value),Ae.append(e),setTimeout(()=>e.remove(),720)}if(i.type==="message"){Ae.querySelector(".notice")?.remove();const t=document.createElement("div");t.className="notice",t.textContent=i.text||"",Ae.append(t),setTimeout(()=>t.remove(),2600)}}et.events=[]}window.addEventListener("keydown",i=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),i.code==="Escape"){ee==="play"&&Gt.screens.goto("pause");return}if(!(ee!=="play"||Gn)&&(Qe.add(i.code),i.code==="KeyJ"&&(et.input.attack=!0),!i.repeat)){const t={KeyQ:"gather",KeyE:"weave",KeyR:"bloom",Space:"dodge",ShiftLeft:"dodge"}[i.code];t&&Lo(t)}});window.addEventListener("keyup",i=>{Qe.delete(i.code),i.code==="KeyJ"&&(et.input.attack=[...si.values()].includes("attack"))});Vn.addEventListener("pointermove",i=>{i.pointerType==="mouse"&&(Sr=!0,et.input.aim=Re.aim(i.clientX,i.clientY))});Vn.addEventListener("pointerdown",i=>{ee!=="play"||Gn||i.pointerType!=="mouse"||(i.preventDefault(),Se.init(),Vn.setPointerCapture(i.pointerId),i.button===0?(si.set(i.pointerId,"attack"),et.input.attack=!0,Sr=!0,et.input.aim=Re.aim(i.clientX,i.clientY)):i.button===2&&Lo("dodge"))});Vn.addEventListener("pointerup",En);Vn.addEventListener("pointercancel",En);Vn.addEventListener("lostpointercapture",En);Vn.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("blur",()=>{Co(),ee==="play"&&Gt.screens.goto("pause")});document.addEventListener("visibilitychange",()=>{document.hidden&&ee==="play"&&Gt.screens.goto("pause")});Gt.lifecycle.on("pause",()=>{ee==="play"&&Gt.screens.goto("pause")});Gt.lifecycle.on("back",()=>{ee==="play"&&Gt.screens.goto("pause")});Gt.on("settings",()=>Se.sync());Gt.on("screen",({id:i})=>{i==="settings"&&(ee!=="settings"&&(Ro=ee==="pause"||ee==="play"?"pause":"title"),Yi(),ee="settings")});Gt.on("settingsClosed",()=>{ee==="settings"&&Gt.screens.goto(Ro)});Gt.shell.addSettingsSection("바람실",i=>{i.innerHTML=`<div class="check-row"><label for="volume">게임 음량</label><input id="volume" type="range" min="0" max="1" step="0.05" value="${Se.volume}"></div><div class="check-row"><span>그래픽</span><button class="btn ghost" id="quality">${Re?.quality==="low"?"절약":"선명"}</button></div>`,i.querySelector("#volume").addEventListener("input",t=>{Se.volume=Number(t.target.value),Se.sync(),ac()}),i.querySelector("#quality").addEventListener("click",()=>{Re.setQuality(Re.quality==="high"?"low":"high"),i.querySelector("#quality").textContent=Re.quality==="low"?"절약":"선명",ac()})});function ac(){Gt.storage.set("preferences",{quality:Re.quality,volume:Se.volume})}async function ag(){Gt.shell.loading(.15);try{Re=new Q0(Vn),Re.setQuality($c?.quality==="low"?"low":"high");const i=new Image;i.src=new URL(""+new URL("../gameplay-cover.webp",import.meta.url).href,import.meta.url).href,await i.decode().catch(()=>{}),Gt.shell.loading(.9),Gt.screens.register("title",Jc),Gt.screens.register("pause",sg),Gt.screens.register("results",Do),Gt.capture.onFreeze(()=>{Re.clock=0,Re.target.set(0,0,-1),Re.render(et,0,!0,!0)}),Gt.audio.onUnlocked(()=>Se.init()),Gt.shell.loading(null),await Gt.screens.goto("title"),Re.renderer.setAnimationLoop(t=>{const e=ha?Math.max(0,(t-ha)/1e3):0,n=Math.min(.25,e);if(ha=t,!Gt.capture.frozen&&!document.hidden){if(ee==="play"&&!Gn){Er+=n,ki===null&&(et.input.x=(Qe.has("KeyD")||Qe.has("ArrowRight")?1:0)-(Qe.has("KeyA")||Qe.has("ArrowLeft")?1:0),et.input.z=(Qe.has("KeyS")||Qe.has("ArrowDown")?1:0)-(Qe.has("KeyW")||Qe.has("ArrowUp")?1:0)),Sr||(et.input.aim=null),ir+=n;let s=0;for(;ir>=1/60&&s++<15;)et.update(1/60),ir-=1/60;rg(),et.phase!==vr&&(vr=et.phase,et.phase==="choice"?Zc():et.phase==="won"||et.phase==="dead"?Gt.screens.goto("results"):Po())}else ir=0;Se.update(n,et.phase==="fight"&&ee==="play",et.stage===5,et.tension)}(ee==="play"||ee==="ending"||Re.needsRender||tc!==ee)&&(Re.render(et,Gn&&ee!=="ending"?0:n,Gt.capture.frozen,Gt.settings.reducedMotion),tc=ee),ua+=n,ua>.08&&(jc(),ua=0)})}catch{Gt.shell.loading(null),Ae.innerHTML='<section class="screen overlay"><div class="modal"><h1>정원을 열 수 없어요.</h1><p>이 게임에는 WebGL 2를 지원하는 브라우저가 필요합니다. 브라우저의 하드웨어 가속을 켜고 다시 열어 주세요.</p><button class="btn" id="home">GROOVPLAY로 돌아가기</button></div></section>',Ce("home",()=>Gt.host.goHome())}}ag();
