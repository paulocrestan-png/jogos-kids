(function(global){
  "use strict";

  const PLANETS = [
    {
      name:"Mercúrio",order:1,nick:"O pequeno veloz ☄️",size:15,orbit:82,temp:167,rotation:"58,6 dias",year:"88 dias",dist:"58 milhões km",period:87.969,
      color:"radial-gradient(circle at 35% 30%,#d9d3cb,#8f8b85 60%,#5b5955)",
      explain:"Rotação é o giro do planeta em torno de si mesmo. Mercúrio gira devagar: uma volta leva quase 59 dias terrestres.",
      why:"☄️ Por que ele tem tantas crateras? Porque objetos espaciais bateram em sua superfície durante bilhões de anos. Como Mercúrio quase não tem atmosfera, água ou erosão para apagar essas marcas, muitas continuam visíveis.",
      fact:"Mesmo sendo o planeta mais próximo do Sol, Mercúrio não é o mais quente.",
      deep:"Durante o dia a superfície pode ficar extremamente quente e, à noite, extremamente fria. Isso acontece porque quase não existe atmosfera para distribuir e guardar o calor.",
      el:[0.38709927,0.20563593,7.00497902,252.25032350,77.45779628,48.33076593,0.00000037,0.00001906,-0.00594749,149472.67411175,0.16047689,-0.12534081]
    },
    {
      name:"Vênus",order:2,nick:"O planeta-estufa 🔥",size:21,orbit:120,temp:464,rotation:"243 dias",year:"225 dias",dist:"108 milhões km",period:224.701,
      color:"radial-gradient(circle at 35% 30%,#ffe18a,#d98d38 60%,#8c4b24)",
      explain:"Vênus gira extremamente devagar e ainda gira no sentido contrário ao da maioria dos planetas.",
      why:"🔥 Por que é tão quente? Sua atmosfera é muito espessa e rica em dióxido de carbono. Ela prende calor pelo efeito estufa.",
      fact:"Vênus é mais quente que Mercúrio, apesar de estar mais longe do Sol.",
      deep:"A temperatura média é suficiente para derreter chumbo. Além disso, as nuvens de Vênus contêm ácido sulfúrico.",
      el:[0.72333566,0.00677672,3.39467605,181.97909950,131.60246718,76.67984255,0.00000390,-0.00004107,-0.00078890,58517.81538729,0.00268329,-0.27769418]
    },
    {
      name:"Terra",order:3,nick:"Nossa casa azul 💙",size:22,orbit:159,temp:15,rotation:"23 h 56 min",year:"365 dias",dist:"150 milhões km",period:365.256,
      color:"radial-gradient(circle at 35% 30%,#7dd8ff,#2870c7 50%,#173a76)",
      explain:"Na Terra, uma rotação leva quase 24 horas. Quando nossa região está voltada para o Sol é dia; quando gira para o lado oposto é noite.",
      why:"🌍 Por que a Terra é especial? Temos água líquida em abundância, atmosfera e uma faixa de temperaturas que permite a existência da vida como conhecemos.",
      fact:"Clique novamente na Terra para abrir o mapa de rotação, dia/noite, Brasil e Lua.",
      deep:"O eixo da Terra é inclinado cerca de 23,4°. Essa inclinação, junto com a volta ao redor do Sol, é a principal causa das estações do ano.",
      el:[1.00000261,0.01671123,-0.00001531,100.46457166,102.93768193,0.0,0.00000562,-0.00004392,-0.01294668,35999.37244981,0.32327364,0.0]
    },
    {
      name:"Marte",order:4,nick:"O planeta vermelho ❤️",size:18,orbit:199,temp:-65,rotation:"24 h 37 min",year:"687 dias",dist:"228 milhões km",period:686.98,
      color:"radial-gradient(circle at 35% 30%,#f2a37e,#bd5035 60%,#6f2c24)",
      explain:"O dia de Marte é muito parecido com o nosso: cerca de 24 horas e 37 minutos.",
      why:"🕳️ Aqueles 'buracos' são crateras? Sim. Muitas são crateras de impacto, feitas quando asteroides ou fragmentos de cometas atingiram Marte.",
      fact:"Marte preserva muitas crateras porque sua superfície é menos apagada por água, erosão e atividade geológica do que a Terra.",
      deep:"A atmosfera marciana é muito mais fina que a da Terra. Pequenos objetos espaciais que queimariam ou se quebrariam na nossa atmosfera conseguem alcançar o solo de Marte com mais facilidade.",
      el:[1.52371034,0.09339410,1.84969142,-4.55343205,-23.94362959,49.55953891,0.00001847,0.00007882,-0.00813131,19140.30268499,0.44441088,-0.29257343]
    },
    {
      name:"Júpiter",order:5,nick:"O gigante do Sistema Solar 🟠",size:46,orbit:249,temp:-110,rotation:"9 h 56 min",year:"11,86 anos",dist:"778 milhões km",period:4332.59,
      color:"repeating-linear-gradient(0deg,#d8ad78 0 5px,#f2d5a8 5px 10px,#a66d4b 10px 14px)",
      explain:"Júpiter é enorme, mas gira muito rápido. Um dia dura menos de 10 horas.",
      why:"🌀 Por que tem faixas e tempestades? Júpiter é um gigante gasoso. Sua atmosfera gira rapidamente e forma enormes correntes e tempestades.",
      fact:"A Grande Mancha Vermelha é uma tempestade gigantesca observada há séculos.",
      deep:"Júpiter não tem uma superfície sólida como a Terra. Conforme descemos, a pressão aumenta muito.",
      el:[5.20288700,0.04838624,1.30439695,34.39644051,14.72847983,100.47390909,-0.00011607,-0.00013253,-0.00183714,3034.74612775,0.21252668,0.20469106]
    },
    {
      name:"Saturno",order:6,nick:"O senhor dos anéis 💍",size:40,orbit:301,temp:-140,rotation:"≈ 10 h 42 min",year:"29,5 anos",dist:"1,43 bilhão km",period:10759.22,
      color:"radial-gradient(circle at 35% 30%,#ffe6a8,#d9b66e 65%,#8d7044)",
      explain:"Saturno também gira muito rápido. Um dia dura pouco mais de 10 horas.",
      why:"💍 Do que são feitos os anéis? Principalmente de incontáveis pedaços de gelo e rocha.",
      fact:"Os anéis parecem discos sólidos de longe, mas são formados por incontáveis partículas.",
      deep:"Saturno é tão pouco denso que sua densidade média é menor que a da água.",
      el:[9.53667594,0.05386179,2.48599187,49.95424423,92.59887831,113.66242448,-0.00125060,-0.00050991,0.00193609,1222.49362201,-0.41897216,-0.28867794]
    },
    {
      name:"Urano",order:7,nick:"O planeta deitado 🧊",size:31,orbit:350,temp:-195,rotation:"17 h 14 min",year:"84 anos",dist:"2,87 bilhões km",period:30688.5,
      color:"radial-gradient(circle at 35% 30%,#c8fbff,#74d5dc 62%,#3c8f9f)",
      explain:"Urano gira quase de lado. Seu eixo é tão inclinado que parece estar rolando ao redor do Sol.",
      why:"🧊 Por que ele é azul-esverdeado? O metano da atmosfera absorve parte da luz vermelha.",
      fact:"Urano é um dos lugares mais frios entre os planetas.",
      deep:"Sua inclinação extrema faz com que cada polo possa passar décadas recebendo luz e depois décadas no escuro.",
      el:[19.18916464,0.04725744,0.77263783,313.23810451,170.95427630,74.01692503,-0.00196176,-0.00004397,-0.00242939,428.48202785,0.40805281,0.04240589]
    },
    {
      name:"Netuno",order:8,nick:"O gigante azul 🌊",size:30,orbit:400,temp:-200,rotation:"16 h 6 min",year:"164,8 anos",dist:"4,5 bilhões km",period:60182,
      color:"radial-gradient(circle at 35% 30%,#71a9ff,#2f5dcc 60%,#17327d)",
      explain:"Netuno gira em cerca de 16 horas, mesmo estando muito longe do Sol.",
      why:"💨 Por que venta tanto? A atmosfera de Netuno tem tempestades e alguns dos ventos mais rápidos do Sistema Solar.",
      fact:"Netuno leva quase 165 anos terrestres para completar uma volta ao redor do Sol.",
      deep:"Desde sua descoberta em 1846, Netuno completou apenas uma órbita inteira ao redor do Sol em 2011.",
      el:[30.06992276,0.00859048,1.77004347,-55.12002969,44.96476227,131.78422574,0.00026291,0.00005105,0.00035372,218.45945325,-0.32241464,-0.00508664]
    }
  ];

  const QUIZ = [
    {q:"Os 'buracos' que vemos em Marte são principalmente o quê?",a:["Lagos","Crateras de impacto","Cavernas"],ok:1,why:"Isso! Muitos foram formados por impactos de asteroides e fragmentos de cometas."},
    {q:"Qual planeta é o mais quente?",a:["Mercúrio","Vênus","Marte"],ok:1,why:"Vênus. Sua atmosfera prende muito calor."},
    {q:"Qual planeta tem um dia parecido com o da Terra?",a:["Marte","Júpiter","Vênus"],ok:0,why:"Marte: cerca de 24 h e 37 min."},
    {q:"Qual planeta gira quase deitado?",a:["Urano","Saturno","Netuno"],ok:0,why:"Urano!"}
  ];

  function uid(prefix){
    return prefix + Math.random().toString(36).slice(2,10);
  }

  function mount(target, options){
    const host = typeof target === "string" ? document.querySelector(target) : target;
    if(!host) throw new Error("KidsSolarSystem: elemento de montagem não encontrado.");

    const cfg = Object.assign({
      title:"🌞 Sistema Solar Interativo",
      subtitle:"Veja todos os planetas, use o zoom e clique na Terra para entender dia, noite e a Lua.",
      timezone:"America/Sao_Paulo",
      brazilLabel:"Brasil 🇧🇷",
      startPlanet:2,
      autoStart:true
    }, options || {});

    const id = uid("kss-");
    host.classList.add("kss-root");
    host.innerHTML = `
      <section class="kss-shell" data-kss="${id}">
        <div class="kss-header">
          <h2>${cfg.title}</h2>
          <p>${cfg.subtitle}</p>
        </div>

        <div class="kss-toolbar">
          <button class="kss-btn" data-action="fit">🪐 Ver todos</button>
          <button class="kss-btn" data-action="play">⏸ Pausar</button>
          <button class="kss-btn" data-action="now">📍 Posição de agora</button>
          <button class="kss-btn kss-active" data-action="labels">🏷️ Nomes ligados</button>

          <select class="kss-select" data-role="speed">
            <option value=".35">🐢 Devagar</option>
            <option value="1" selected>🚀 Normal</option>
            <option value="3">⚡ Rápido</option>
            <option value="8">🌠 Muito rápido</option>
          </select>

          <div class="kss-zoom-box">
            <button class="kss-btn" data-action="minus">−</button>
            <input data-role="zoom" type="range" min="100" max="350" value="100" step="5">
            <button class="kss-btn" data-action="plus">+</button>
            <span class="kss-zoom-pct" data-role="zoomPct">100%</span>
          </div>
        </div>

        <div class="kss-layout">
          <section class="kss-viewport" data-role="viewport">
            <div class="kss-status" data-role="status">Todos os 8 planetas visíveis</div>
            <div class="kss-zoom-hint">🔎 Mouse: rodinha • Celular: pinça • “Ver todos” volta à visão completa</div>
            <div class="kss-world" data-role="world">
              <div class="kss-sun">SOL</div>
            </div>
          </section>

          <aside class="kss-panel">
            <div class="kss-hero">
              <div class="kss-bigp" data-role="bigp"></div>
              <div>
                <div class="kss-kicker" data-role="order"></div>
                <h3 data-role="name"></h3>
                <div class="kss-nick" data-role="nick"></div>
              </div>
            </div>

            <div class="kss-stats">
              <div class="kss-stat"><small>🌡️ Temperatura média</small><b data-role="temp"></b></div>
              <div class="kss-stat"><small>🌀 Um dia dura</small><b data-role="rot"></b></div>
              <div class="kss-stat"><small>☀️ Um ano dura</small><b data-role="year"></b></div>
              <div class="kss-stat"><small>📍 Distância do Sol</small><b data-role="dist"></b></div>
            </div>

            <div class="kss-explain" data-role="explain"></div>
            <div class="kss-why" data-role="why"></div>
            <div class="kss-fact" data-role="fact"></div>

            <button class="kss-btn kss-deep-btn" data-action="deep">🔍 Quero entender melhor</button>
            <div class="kss-deep" data-role="deep"></div>

            <div class="kss-tempbar"><div class="kss-needle" data-role="needle"></div></div>
            <div class="kss-temp-legend"><span>-220 °C</span><span>0 °C</span><span>+500 °C</span></div>

            <div class="kss-quiz">
              <h4>🎯 Mini desafio</h4>
              <div data-role="question"></div>
              <div class="kss-answers" data-role="answers"></div>
              <div class="kss-feedback" data-role="feedback"></div>
            </div>

            <div class="kss-footnote">
              Tamanhos e distâncias são comprimidos para caber na tela. O modo “Posição de agora” é uma aproximação educativa.
            </div>
          </aside>
        </div>
      </section>

      <div class="kss-modal" data-role="earthModal">
        <div class="kss-earth-card">
          <div class="kss-modal-top">
            <div>
              <div class="kss-kicker">Terra + Lua</div>
              <h3>🌍 Por que existe dia e noite?</h3>
            </div>
            <button class="kss-btn" data-action="closeEarth">✕ Fechar</button>
          </div>

          <div class="kss-earth-grid">
            <div class="kss-earth-scene">
              <div class="kss-sun-arrow">☀️ LUZ DO SOL →</div>
              <div class="kss-globe-wrap">
                <div class="kss-moon-orbit" data-role="moonOrbit"><div class="kss-moon"></div></div>
                <div class="kss-rot-arrow" data-role="rotArrow"></div>
                <div class="kss-earth-globe">
                  <div class="kss-continent kss-sa"></div>
                  <div class="kss-continent kss-af"></div>
                  <div class="kss-night" data-role="night"></div>
                  <div class="kss-brazil"></div>
                  <div class="kss-brazil-label">${cfg.brazilLabel}</div>
                </div>
              </div>
            </div>

            <div class="kss-earth-info">
              <h4>Agora no Brasil</h4>
              <div class="kss-livebox">
                <div data-role="brTime"></div>
                <div class="kss-day-state" data-role="dayState"></div>
                <div data-role="sunExplain"></div>
              </div>

              <div class="kss-lesson"><b>🌀 Rotação</b><br>A Terra gira em torno de si mesma. Uma volta leva aproximadamente 24 horas. O lado voltado para o Sol fica iluminado: é <b>dia</b>. O lado oposto fica no escuro: é <b>noite</b>.</div>
              <div class="kss-lesson"><b>🌙 A Lua</b><br>A Lua gira em torno da Terra em aproximadamente 27,3 dias. As fases aparecem porque vemos diferentes partes da metade da Lua iluminada pelo Sol.</div>
              <div class="kss-lesson"><b>☀️ Translação</b><br>Enquanto gira em torno de si mesma, a Terra também viaja ao redor do Sol. Essa volta leva cerca de 365 dias e forma o nosso ano.</div>

              <div class="kss-earth-btns">
                <button class="kss-btn" data-action="earthSlow">🐢 Rotação lenta</button>
                <button class="kss-btn" data-action="earthFast">⚡ Rotação rápida</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const q = (sel) => host.querySelector(sel);
    const world = q('[data-role="world"]');
    const viewport = q('[data-role="viewport"]');

    let running = !!cfg.autoStart;
    let speed = 1;
    let sim = 0;
    let last = performance.now();
    let showLabels = true;
    let nowMode = false;
    let fitScale = 1;
    let zoomFactor = 1;
    let destroyed = false;
    let rafId = null;
    let quizIndex = 0;
    let pinchStart = null;
    let pinchZoom = null;

    PLANETS.forEach((p,i)=>{
      const o=document.createElement("div");
      o.className="kss-orbit";
      o.style.width=(p.orbit*2)+"px";
      o.style.height=(p.orbit*2)+"px";
      world.appendChild(o);

      const w=document.createElement("div");
      w.className="kss-pwrap";
      w.dataset.i=i;

      const b=document.createElement("button");
      b.className="kss-planet";
      b.title=p.name;
      b.style.width=p.size+"px";
      b.style.height=p.size+"px";
      b.style.left=(p.orbit-p.size/2)+"px";
      b.style.top=(-p.size/2)+"px";
      b.style.background=p.color;
      b.addEventListener("click",()=>selectPlanet(i,true));

      const l=document.createElement("div");
      l.className="kss-plabel";
      l.textContent=p.name;
      l.style.left=p.orbit+"px";
      l.style.top=(p.size/2+5)+"px";

      w.append(b,l);
      world.appendChild(w);
    });

    function calcFit(){
      const padding=28;
      fitScale=Math.min((viewport.clientWidth-padding)/900,(viewport.clientHeight-padding)/900);
      fitScale=Math.max(.28,fitScale);
      applyZoom();
    }

    function applyZoom(){
      world.style.transform=`translate(-50%,-50%) scale(${fitScale*zoomFactor})`;
      q('[data-role="zoomPct"]').textContent=Math.round(zoomFactor*100)+"%";
      q('[data-role="zoom"]').value=Math.round(zoomFactor*100);
    }

    function fitAll(){
      zoomFactor=1;
      applyZoom();
      q('[data-role="status"]').textContent="Todos os 8 planetas visíveis";
    }

    function selectPlanet(i,openEarth){
      const p=PLANETS[i];
      q('[data-role="order"]').textContent=`${p.order}º planeta do Sol`;
      q('[data-role="name"]').textContent=p.name;
      q('[data-role="nick"]').textContent=p.nick;
      q('[data-role="bigp"]').style.background=p.color;
      q('[data-role="temp"]').textContent=p.temp+" °C";
      q('[data-role="rot"]').textContent=p.rotation;
      q('[data-role="year"]').textContent=p.year;
      q('[data-role="dist"]').textContent=p.dist;
      q('[data-role="explain"]').innerHTML="<b>🌀 Rotação:</b> "+p.explain;
      q('[data-role="why"]').textContent=p.why;
      q('[data-role="fact"]').innerHTML="✨ <b>Curiosidade:</b> "+p.fact;
      q('[data-role="deep"]').textContent=p.deep;
      q('[data-role="deep"]').classList.remove("kss-show");
      q('[data-action="deep"]').textContent="🔍 Quero entender melhor";
      const pos=Math.max(0,Math.min(100,((p.temp+220)/720)*100));
      q('[data-role="needle"]').style.left=`calc(${pos}% - 2px)`;
      q('[data-role="status"]').textContent=p.name+" selecionado";

      host.dispatchEvent(new CustomEvent("kss:planetselect",{detail:{planet:p,index:i}}));

      if(i===2 && openEarth) openEarthModal();
    }

    function compressedDuration(days){return 6+Math.log10(days)*5.2}
    function norm360(x){x%=360;if(x<0)x+=360;return x}
    function julianDate(date){return date.getTime()/86400000+2440587.5}

    function currentHelioAngle(p){
      const a=p.el;
      const T=(julianDate(new Date())-2451545.0)/36525;
      const e=a[1]+a[7]*T;
      const L=a[3]+a[9]*T;
      const peri=a[4]+a[10]*T;
      const node=a[5]+a[11]*T;
      let M=norm360(L-peri);
      let Erad=M*Math.PI/180;
      for(let k=0;k<8;k++){
        Erad = Erad-(Erad-e*Math.sin(Erad)-M*Math.PI/180)/(1-e*Math.cos(Erad));
      }
      const xv=Math.cos(Erad)-e;
      const yv=Math.sqrt(1-e*e)*Math.sin(Erad);
      const v=Math.atan2(yv,xv)*180/Math.PI;
      const w=peri-node;
      return norm360(v+w+node);
    }

    function animate(now){
      if(destroyed) return;
      const dt=(now-last)/1000;
      last=now;
      if(running && !nowMode) sim+=dt*speed;

      host.querySelectorAll(".kss-pwrap").forEach((el,i)=>{
        let angle;
        if(nowMode) angle=currentHelioAngle(PLANETS[i]);
        else angle=(sim/compressedDuration(PLANETS[i].period))*360+i*29;

        el.style.transform=`rotate(${angle}deg)`;
        const lab=el.querySelector(".kss-plabel");
        if(lab) lab.style.transform=`translate(-50%,18px) rotate(${-angle}deg)`;
      });

      rafId=requestAnimationFrame(animate);
    }

    function openEarthModal(){
      q('[data-role="earthModal"]').classList.add("kss-open");
      updateEarth();
    }

    function closeEarthModal(){
      q('[data-role="earthModal"]').classList.remove("kss-open");
    }

    function getHourInTimezone(){
      return Number(new Intl.DateTimeFormat("en-US",{
        timeZone:cfg.timezone,
        hour:"2-digit",
        hourCycle:"h23"
      }).format(new Date()));
    }

    function updateEarth(){
      const now=new Date();
      const formatted=new Intl.DateTimeFormat("pt-BR",{
        timeZone:cfg.timezone,
        hour:"2-digit",minute:"2-digit",second:"2-digit",
        day:"2-digit",month:"2-digit",year:"numeric",
        hour12:false
      }).format(now);

      q('[data-role="brTime"]').textContent=formatted;
      const h=getHourInTimezone();

      let state,desc;
      if(h>=6 && h<12){
        state="🌅 Manhã";
        desc="O Brasil está na parte iluminada da Terra e girando em direção ao meio do dia.";
      }else if(h>=12 && h<18){
        state="☀️ Tarde";
        desc="O Brasil continua no lado iluminado da Terra.";
      }else if(h>=18 && h<21){
        state="🌇 Entardecer";
        desc="O Brasil está girando para fora da região diretamente iluminada pelo Sol.";
      }else{
        state="🌙 Noite";
        desc="O Brasil está no lado da Terra que está voltado para longe do Sol.";
      }

      q('[data-role="dayState"]').textContent=state;
      q('[data-role="sunExplain"]').textContent=desc;

      const minute = Number(new Intl.DateTimeFormat("en-US",{
        timeZone:cfg.timezone,
        minute:"2-digit"
      }).format(now));
      const solarAngle=((h+minute/60)-12)*15;
      q('[data-role="night"]').style.transform=`rotate(${solarAngle}deg)`;
    }

    function loadQuiz(){
      const x=QUIZ[quizIndex];
      q('[data-role="question"]').textContent=x.q;
      const box=q('[data-role="answers"]');
      const fb=q('[data-role="feedback"]');
      box.innerHTML="";
      fb.textContent="";

      x.a.forEach((text,i)=>{
        const b=document.createElement("button");
        b.className="kss-btn";
        b.textContent=text;
        b.addEventListener("click",()=>{
          fb.textContent=(i===x.ok?"✅ Acertou! ":"❌ Quase! ")+x.why;
          fb.style.color=i===x.ok?"#8be9a8":"#ff9d9d";
          setTimeout(()=>{
            if(destroyed) return;
            quizIndex=(quizIndex+1)%QUIZ.length;
            loadQuiz();
          },1700);
        });
        box.appendChild(b);
      });
    }

    q('[data-action="fit"]').addEventListener("click",fitAll);
    q('[data-action="play"]').addEventListener("click",()=>{
      running=!running;
      q('[data-action="play"]').textContent=running?"⏸ Pausar":"▶️ Continuar";
      if(!running) q('[data-role="status"]').textContent="Movimento pausado";
    });

    q('[data-action="labels"]').addEventListener("click",()=>{
      showLabels=!showLabels;
      host.querySelectorAll(".kss-plabel").forEach(x=>x.style.display=showLabels?"block":"none");
      const b=q('[data-action="labels"]');
      b.classList.toggle("kss-active",showLabels);
      b.textContent=showLabels?"🏷️ Nomes ligados":"🏷️ Nomes desligados";
    });

    q('[data-role="speed"]').addEventListener("change",e=>speed=Number(e.target.value));
    q('[data-role="zoom"]').addEventListener("input",e=>{
      zoomFactor=Number(e.target.value)/100;
      applyZoom();
    });
    q('[data-action="plus"]').addEventListener("click",()=>{
      zoomFactor=Math.min(3.5,zoomFactor+.15);
      applyZoom();
    });
    q('[data-action="minus"]').addEventListener("click",()=>{
      zoomFactor=Math.max(1,zoomFactor-.15);
      applyZoom();
    });

    q('[data-action="deep"]').addEventListener("click",()=>{
      const d=q('[data-role="deep"]');
      d.classList.toggle("kss-show");
      q('[data-action="deep"]').textContent=d.classList.contains("kss-show")?"▲ Fechar explicação":"🔍 Quero entender melhor";
    });

    q('[data-action="now"]').addEventListener("click",()=>{
      nowMode=!nowMode;
      const b=q('[data-action="now"]');
      b.classList.toggle("kss-active",nowMode);
      b.textContent=nowMode?"📍 Posição de agora ✓":"📍 Posição de agora";

      if(nowMode){
        running=false;
        q('[data-action="play"]').textContent="▶️ Continuar";
        q('[data-role="status"]').textContent="Posição aproximada dos planetas neste momento";
      }else{
        running=true;
        q('[data-action="play"]').textContent="⏸ Pausar";
        q('[data-role="status"]').textContent="Modo educativo em movimento";
      }
    });

    q('[data-action="closeEarth"]').addEventListener("click",closeEarthModal);
    q('[data-role="earthModal"]').addEventListener("click",e=>{
      if(e.target===q('[data-role="earthModal"]')) closeEarthModal();
    });
    q('[data-action="earthSlow"]').addEventListener("click",()=>{
      q('[data-role="rotArrow"]').style.animationDuration="20s";
      q('[data-role="moonOrbit"]').style.animationDuration="14s";
    });
    q('[data-action="earthFast"]').addEventListener("click",()=>{
      q('[data-role="rotArrow"]').style.animationDuration="4s";
      q('[data-role="moonOrbit"]').style.animationDuration="6s";
    });

    viewport.addEventListener("wheel",e=>{
      e.preventDefault();
      zoomFactor=Math.max(1,Math.min(3.5,zoomFactor*(e.deltaY<0?1.1:.9)));
      applyZoom();
    },{passive:false});

    viewport.addEventListener("touchstart",e=>{
      if(e.touches.length===2){
        pinchStart=Math.hypot(
          e.touches[0].clientX-e.touches[1].clientX,
          e.touches[0].clientY-e.touches[1].clientY
        );
        pinchZoom=zoomFactor;
      }
    },{passive:false});

    viewport.addEventListener("touchmove",e=>{
      if(e.touches.length===2 && pinchStart){
        e.preventDefault();
        const d=Math.hypot(
          e.touches[0].clientX-e.touches[1].clientX,
          e.touches[0].clientY-e.touches[1].clientY
        );
        zoomFactor=Math.max(1,Math.min(3.5,pinchZoom*d/pinchStart));
        applyZoom();
      }
    },{passive:false});

    viewport.addEventListener("touchend",()=>pinchStart=null);

    const onResize=()=>calcFit();
    window.addEventListener("resize",onResize);

    const earthTimer=setInterval(()=>{
      const modal=q('[data-role="earthModal"]');
      if(modal && modal.classList.contains("kss-open")) updateEarth();
    },1000);

    selectPlanet(cfg.startPlanet,false);
    loadQuiz();
    setTimeout(calcFit,30);
    rafId=requestAnimationFrame(animate);

    return {
      host,
      fitAll,
      selectPlanet,
      openEarth:openEarthModal,
      closeEarth:closeEarthModal,
      setZoom(percent){
        zoomFactor=Math.max(1,Math.min(3.5,Number(percent)/100));
        applyZoom();
      },
      destroy(){
        destroyed=true;
        if(rafId) cancelAnimationFrame(rafId);
        clearInterval(earthTimer);
        window.removeEventListener("resize",onResize);
        host.innerHTML="";
        host.classList.remove("kss-root");
      }
    };
  }

  global.KidsSolarSystem = { mount, planets:PLANETS };
})(window);
