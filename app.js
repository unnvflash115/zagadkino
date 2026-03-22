// ══════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════
let lang = localStorage.getItem('zg_lang') || 'ru';
let currentUser = null;
let selectedAva = 'girl';
let currentCat = null;
let currentQIdx = 0;
let answered = false;

// ── Storage helpers ──────────────────────────────────
function getUsers() { try { return JSON.parse(localStorage.getItem('zg_users') || '{}'); } catch { return {}; } }
function saveUsers(u) { localStorage.setItem('zg_users', JSON.stringify(u)); }
function saveSession(nick) { localStorage.setItem('zg_session', nick); }
function loadSession() { return localStorage.getItem('zg_session'); }
function clearSession() { localStorage.removeItem('zg_session'); }
function t(key) { return TR[lang][key] || key; }

// ══════════════════════════════════════════════════════
//  SCREEN NAVIGATION
// ══════════════════════════════════════════════════════
function go(screenName) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const sc = document.getElementById('screen-' + screenName);
  if (sc) sc.classList.add('active');
  window.scrollTo(0, 0);
  if (screenName === 'home') renderHome();
}

function showTab(tab) {
  if (tab === 'home') { go('home'); updateSidebarActive('home'); return; }
  if (tab === 'lb') { go('lb'); renderLeaderboard(); updateSidebarActive('lb'); return; }
  if (tab === 'profile') { go('profile'); renderProfile(); updateSidebarActive('pr'); return; }
}

function updateSidebarActive(active) {
  ['home','lb','pr'].forEach(id => {
    const el = document.getElementById('snav-' + id);
    if (el) el.classList.toggle('active', id === active);
  });
}

// ══════════════════════════════════════════════════════
//  LANGUAGE
// ══════════════════════════════════════════════════════
function toggleLang() {
  lang = lang === 'ru' ? 'en' : 'ru';
  localStorage.setItem('zg_lang', lang);
  applyTranslations();
}

function applyTranslations() {
  const next = lang === 'ru' ? 'EN' : 'RU';
  document.querySelectorAll('[id^="lb-"]').forEach(b => { if(b.tagName==='SPAN'||b.classList.contains('lang-btn')) b.textContent = next; });
  document.querySelectorAll('span[id^="lb-"]').forEach(b => b.textContent = next);

  setText('wtitle', t('welcome_title'));
  setText('htitle', t('welcome_title'));
  setText('hlogo', t('welcome_title'));
  setText('hsub', t('hero_sub'));
  setText('winfo', t('winfo'));
  setText('breg', t('b_reg'));
  setText('blog', t('b_log'));
  setText('ltitle', t('l_title'));
  setText('lsub', t('l_sub'));
  setText('bldo', t('l_do'));
  setText('blreg', t('l_to_reg'));
  setText('rtitle', t('r_title'));
  setText('rsub', t('r_sub'));
  setText('brdo', t('r_do'));
  setText('brlog', t('r_to_log'));
  setText('albl-girl', t('av_girl'));
  setText('albl-boy', t('av_boy'));
  setText('hcatttl', t('h_cats'));
  setText('cn1', t('cn1')); setText('cd1', t('cd1'));
  setText('cn2', t('cn2')); setText('cd2', t('cd2'));
  setText('cn3', t('cn3')); setText('cd3', t('cd3'));
  setText('cn4', t('cn4')); setText('cd4', t('cd4'));
  setText('cn5', t('cn5')); setText('cd5', t('cd5'));
  setText('cn6', t('cn6')); setText('cd6', t('cd6'));
  setText('bdhot', t('bdhot'));
  setText('bdnew', t('bdnew'));
  setText('hs-sl', t('hs_sol'));
  setText('hs-stl', t('hs_st'));
  setText('hs-skl', t('hs_sk'));
  setText('lbhtitle', t('lb_h'));
  setText('lb-ft', t('lb_ft'));
  setText('nlh', t('nav_h'));
  setText('nllb', t('nav_lb'));
  setText('nlpr', t('nav_pr'));
  setText('snl-h', t('nav_h'));
  setText('snl-lb', t('nav_lb'));
  setText('snl-pr', t('nav_pr'));
  setText('pr-ft', t('pr_ft'));
  setText('pr-soll', t('pr_sol'));
  setText('pr-ptsl', t('pr_pts'));
  setText('pr-pctl', t('pr_pct'));
  setText('b-logout', t('b_logout'));

  if (currentUser) { refreshHomeStats(); renderLBHome(); }
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ══════════════════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════════════════
function selAva(type) {
  selectedAva = type;
  document.getElementById('ava-girl').classList.toggle('sel', type === 'girl');
  document.getElementById('ava-boy').classList.toggle('sel', type === 'boy');
}

function doRegister() {
  const nick = document.getElementById('r-nick').value.trim();
  const pass = document.getElementById('r-pass').value;
  const pass2 = document.getElementById('r-pass2').value;
  if (!nick || nick.length < 2) { showToast('Введи никнейм (мин. 2 символа)!'); return; }
  if (!pass) { showToast('Придумай пароль!'); return; }
  if (pass !== pass2) { showToast('Пароли не совпадают!'); return; }
  const users = getUsers();
  if (users[nick.toLowerCase()]) { showToast('Такой никнейм уже занят!'); return; }
  const newUser = {
    nick, ava: selectedAva, hash: btoa(unescape(encodeURIComponent(pass))),
    points: 0, solved: 0, attempts: 0, streak: 0, progress: {}
  };
  users[nick.toLowerCase()] = newUser;
  saveUsers(users);
  currentUser = newUser;
  saveSession(nick.toLowerCase());
  go('home');
  showToast('Добро пожаловать, ' + nick + '! 🎉');
}

function doLogin() {
  const nick = document.getElementById('l-nick').value.trim();
  const pass = document.getElementById('l-pass').value;
  if (!nick || !pass) { showToast('Заполни все поля!'); return; }
  const users = getUsers();
  const u = users[nick.toLowerCase()];
  if (!u) { showToast('Пользователь не найден!'); return; }
  if (u.hash !== btoa(unescape(encodeURIComponent(pass)))) { showToast('Неверный пароль!'); return; }
  currentUser = u;
  saveSession(nick.toLowerCase());
  go('home');
  showToast('С возвращением, ' + u.nick + '! 👋');
}

function doLogout() {
  currentUser = null;
  clearSession();
  go('welcome');
}

function saveCurrentUser() {
  if (!currentUser) return;
  const users = getUsers();
  users[currentUser.nick.toLowerCase()] = currentUser;
  saveUsers(users);
}

// ══════════════════════════════════════════════════════
//  HOME
// ══════════════════════════════════════════════════════
function renderHome() {
  if (!currentUser) return;
  document.getElementById('home-ava').innerHTML = AVA[currentUser.ava];
  setText('home-uname', currentUser.nick);
  refreshHomeStats();
  renderLBHome();
  renderSidebarStats();
}

function refreshHomeStats() {
  if (!currentUser) return;
  setText('hs-solved', currentUser.solved || 0);
  setText('hs-stars', (currentUser.points || 0) + ' ⭐');
  setText('hs-streak', (currentUser.streak || 0) + ' 🔥');
}

function renderSidebarStats() {
  if (!currentUser) return;
  const el = document.getElementById('sidebar-stats');
  if (!el) return;
  const pts = currentUser.points || 0;
  const lvls = t('lvls');
  const lvlIdx = Math.min(Math.floor(pts / 50), lvls.length - 1);
  el.innerHTML = `
    <div style="text-align:center">
      <div style="width:56px;height:56px;border-radius:50%;overflow:hidden;margin:0 auto 8px;background:var(--card2);border:2px solid var(--border);display:flex;align-items:center;justify-content:center">
        ${AVA[currentUser.ava]}
      </div>
      <div style="font-weight:bold;font-size:14px;margin-bottom:2px">${currentUser.nick}</div>
      <div style="font-size:12px;color:var(--muted)">${lvls[lvlIdx]}</div>
      <div style="margin-top:8px;font-size:13px;color:var(--yellow);font-weight:bold">${pts} ⭐</div>
    </div>`;
}

function renderLBHome() {
  const users = getUsers();
  const sorted = Object.values(users).sort((a,b)=>(b.points||0)-(a.points||0)).slice(0,5);
  const medals = ['m1','m2','m3','mn','mn'];
  const nums = ['🥇','🥈','🥉','4','5'];
  document.getElementById('lb-home').innerHTML = sorted.map((u,i) => `
    <div class="lb-row">
      <div class="lb-medal ${medals[i]}">${nums[i]}</div>
      <div class="lb-ava">${AVA[u.ava]||'⭐'}</div>
      <div class="lb-name">${u.nick}</div>
      <div class="lb-score">${u.points||0} ⭐</div>
    </div>`).join('');
}

// ══════════════════════════════════════════════════════
//  LEADERBOARD FULL
// ══════════════════════════════════════════════════════
function renderLeaderboard() {
  const users = getUsers();
  const sorted = Object.values(users).sort((a,b)=>(b.points||0)-(a.points||0));
  const medals = ['m1','m2','m3'];
  const nums = ['🥇','🥈','🥉'];
  document.getElementById('lb-full').innerHTML = `
    <div class="lb-card">
      <div class="lb-title">🏆 ${t('lb_h')}</div>
      ${sorted.map((u,i) => `
        <div class="lb-row ${u.nick===currentUser?.nick?'done':''}">
          <div class="lb-medal ${medals[i]||'mn'}">${nums[i]||(i+1)}</div>
          <div class="lb-ava">${AVA[u.ava]||'⭐'}</div>
          <div class="lb-name">${u.nick}${u.nick===currentUser?.nick?' 👈':''}</div>
          <div class="lb-score">${u.points||0} ⭐</div>
        </div>`).join('')}
    </div>`;
}

// ══════════════════════════════════════════════════════
//  PROFILE
// ══════════════════════════════════════════════════════
function renderProfile() {
  if (!currentUser) return;
  document.getElementById('pr-ava').innerHTML = AVA[currentUser.ava];
  setText('pr-name', currentUser.nick);
  const pts = currentUser.points || 0;
  const lvls = t('lvls');
  const lvlIdx = Math.min(Math.floor(pts/50), lvls.length-1);
  setText('pr-lvl', lvls[lvlIdx] + ' · ' + pts + ' ⭐');
  setText('pr-sol', currentUser.solved || 0);
  setText('pr-pts', pts);
  const pct = currentUser.attempts > 0
    ? Math.round((currentUser.solved/currentUser.attempts)*100) : 0;
  setText('pr-pct', pct + '%');

  const prog = currentUser.progress || {};
  const cats = t('cats');
  let html = `<div class="cat-stat-card"><div class="cat-stat-title">📊 ${t('cat_prog')}</div>`;
  Object.keys(QS).forEach(catId => {
    const total = QS[catId].length;
    const done = prog[catId] ? prog[catId].length : 0;
    const pct2 = Math.round((done/total)*100);
    html += `
      <div class="cat-prog-row">
        <div class="cat-prog-lbl">${cats[catId]}</div>
        <div class="cat-prog-bg"><div class="cat-prog-fg" style="width:${pct2}%"></div></div>
        <div class="cat-prog-pct">${pct2}%</div>
      </div>`;
  });
  html += '</div>';
  document.getElementById('pr-catstat').innerHTML = html;
}

// ══════════════════════════════════════════════════════
//  CATEGORY LIST
// ══════════════════════════════════════════════════════
function openCat(catId) {
  currentCat = catId;
  const cats = t('cats');
  setText('cat-top-title', cats[catId]);
  const prog = (currentUser?.progress||{})[catId] || [];
  const questions = QS[catId];
  document.getElementById('qlist').innerHTML = questions.map((q,i) => {
    const done = prog.includes(q.id);
    const qText = q.q ? q.q[lang] : '—';
    const short = qText.split('\n')[0].slice(0,55) + (qText.length>55?'…':'');
    return `
      <div class="q-item ${done?'done':''}" onclick="startQuestion('${catId}',${i})">
        <div class="q-num">${done?'✓':(i+1)}</div>
        <div class="q-txt">
          <div class="q-ttl">${short}</div>
          <div class="q-stl">${done?'✅ Решено':'⏳ '+t('hint')}</div>
        </div>
        <div class="q-arr">›</div>
      </div>`;
  }).join('');
  go('cat');
}

// ══════════════════════════════════════════════════════
//  QUESTION
// ══════════════════════════════════════════════════════
function startQuestion(catId, qIdx) {
  currentCat = catId;
  currentQIdx = qIdx;
  answered = false;
  renderQuestion();
  go('question');
}

function renderQuestion() {
  const q = QS[currentCat][currentQIdx];
  const total = QS[currentCat].length;
  const cats = t('cats');

  setText('q-top-cat', cats[currentCat]);
  setText('qcl', cats[currentCat]);
  setText('qpl', t('q_n') + ' ' + (currentQIdx+1) + ' ' + t('q_of') + ' ' + total);
  document.getElementById('qpb').style.width = Math.round(((currentQIdx+1)/total)*100)+'%';

  // Image/SVG
  const imgWrap = document.getElementById('qimgwrap');
  if (q.img) {
    imgWrap.innerHTML = `<img class="q-img" src="${q.img}" alt="question"
      onerror="this.parentNode.innerHTML='<div class=q-img-ph><span class=big>${q.fb}</span></div>'"
    />`;
  } else if (q.svgKey) {
    let svgSrc = '';
    if (q.svgSrc === 'riddle') svgSrc = RIDDLE_SVG[q.svgKey] || '';
    else if (q.svgSrc === 'math') svgSrc = MATH_SVG[q.svgKey] || '';
    else svgSrc = REBUS_SVG[q.svgKey] || MATCH_SVG[q.svgKey] || '';
    imgWrap.innerHTML = `<div class="q-svg-wrap">${svgSrc}</div>`;
  } else {
    imgWrap.innerHTML = `<div class="q-img-ph"><span class="big">${q.fb}</span></div>`;
  }

  setText('qtext', q.q[lang]);

  const ansDiv = document.getElementById('qanswers');
  if (q.type === 'choice') {
    const opts = q.opts[lang];
    ansDiv.innerHTML = `<div class="opts4">${
      opts.map((o,i)=>`<button class="opt-btn" onclick="checkChoice(${i})" id="opt${i}">${o}</button>`).join('')
    }</div>`;
  } else {
    ansDiv.innerHTML = `
      <div class="txt-ans">
        <input type="text" id="txt-input" placeholder="${t('ans_ph')}" autocomplete="off"/>
        <button onclick="checkText()">→</button>
      </div>`;
    setTimeout(()=>{
      const inp = document.getElementById('txt-input');
      if(inp) inp.addEventListener('keydown', e=>{ if(e.key==='Enter') checkText(); });
    }, 50);
  }
}

function checkChoice(idx) {
  if (answered) return;
  answered = true;
  const q = QS[currentCat][currentQIdx];
  const correct = q.ai;
  const isOk = idx === correct;
  q.opts[lang].forEach((_,i) => {
    const btn = document.getElementById('opt'+i);
    if(i===correct) btn.classList.add('ok');
    else if(i===idx&&!isOk) btn.classList.add('no');
    btn.disabled = true;
  });
  setTimeout(()=>showResult(isOk,q), 600);
}

function checkText() {
  if (answered) return;
  const input = document.getElementById('txt-input');
  if (!input) return;
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  answered = true;
  const q = QS[currentCat][currentQIdx];
  const correct = q.ans[lang].toLowerCase();
  const alts = (q.altAns?.[lang]||[]).map(a=>a.toLowerCase());
  const isOk = val===correct || alts.includes(val);
  input.disabled = true;
  setTimeout(()=>showResult(isOk,q), 300);
}

// ══════════════════════════════════════════════════════
//  RESULT
// ══════════════════════════════════════════════════════
function showResult(isOk, q) {
  if (!currentUser) return;
  currentUser.attempts = (currentUser.attempts||0)+1;
  if (isOk) {
    currentUser.points = (currentUser.points||0)+10;
    currentUser.solved = (currentUser.solved||0)+1;
    currentUser.streak = (currentUser.streak||0)+1;
    if (!currentUser.progress) currentUser.progress={};
    if (!currentUser.progress[currentCat]) currentUser.progress[currentCat]=[];
    if (!currentUser.progress[currentCat].includes(q.id)) currentUser.progress[currentCat].push(q.id);
    saveCurrentUser();
    launchConfetti();
  } else {
    currentUser.streak = 0;
    saveCurrentUser();
  }

  const isLast = currentQIdx >= QS[currentCat].length-1;
  const nextBtn = isLast
    ? `<button class="btn btn-success" onclick="openCat('${currentCat}')">${t('btn_fin')}</button>`
    : `<button class="btn btn-primary" onclick="startQuestion('${currentCat}',${currentQIdx+1})">${t('btn_next')}</button>`;

  const wrongBlock = !isOk
    ? `<div class="wrong-ans">✅ ${t('ans_lbl')}<strong>${q.ans[lang]}</strong></div>` : '';
  const factBlock = q.fact
    ? `<div class="fact-box"><div class="fact-lbl">${t('fact_lbl')}</div><div class="fact-txt">${q.fact[lang]}</div></div>` : '';

  document.getElementById('result-content').innerHTML = `
    <div class="res-box ${isOk?'ok':'no'}">
      <div class="res-emoji">${isOk?'🎉🌟✨':'😅💪🎯'}</div>
      <div class="res-title ${isOk?'ok':'no'}">${isOk?t('ok_title'):t('no_title')}</div>
      <div class="res-sub">${isOk?t('ok_sub'):t('no_sub')}</div>
      ${isOk?`<div class="pts-badge">${t('pts')}</div>`:''}
    </div>
    ${wrongBlock}
    ${factBlock}
    ${nextBtn}
  `;
  go('result');
}

// ══════════════════════════════════════════════════════
//  CONFETTI
// ══════════════════════════════════════════════════════
function launchConfetti() {
  const canvas = document.getElementById('ccanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const pieces = [];
  const colors = ['#a78bfa','#f472b6','#fbbf24','#34d399','#60a5fa','#f87171'];
  for (let i=0; i<130; i++) {
    pieces.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height - canvas.height,
      w: Math.random()*10+5,
      h: Math.random()*6+3,
      color: colors[Math.floor(Math.random()*colors.length)],
      rot: Math.random()*360,
      rotV: (Math.random()-.5)*8,
      vy: Math.random()*3+2,
      vx: (Math.random()-.5)*2.5,
      opacity: 1
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let alive = false;
    pieces.forEach(p => {
      p.y+=p.vy; p.x+=p.vx; p.rot+=p.rotV;
      if (frame>70) p.opacity-=0.012;
      if (p.y<canvas.height&&p.opacity>0) alive=true;
      ctx.save();
      ctx.globalAlpha = Math.max(0,p.opacity);
      ctx.translate(p.x,p.y);
      ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
      ctx.restore();
    });
    frame++;
    if (alive) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

// ══════════════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════════════
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 2600);
}

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
function init() {
  document.getElementById('ac-girl').innerHTML = AVA.girl;
  document.getElementById('ac-boy').innerHTML = AVA.boy;
  applyTranslations();
  const sess = loadSession();
  if (sess) {
    const users = getUsers();
    if (users[sess]) { currentUser = users[sess]; go('home'); return; }
  }
  go('welcome');
}

document.addEventListener('DOMContentLoaded', init);
