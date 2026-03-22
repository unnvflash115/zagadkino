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

// ── Translation shortcut ─────────────────────────────
function t(key) { return TR[lang][key] || key; }

// ══════════════════════════════════════════════════════
//  SCREEN NAVIGATION
// ══════════════════════════════════════════════════════
function go(screenName) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + screenName).classList.add('active');
  window.scrollTo(0, 0);
  if (screenName === 'home') renderHome();
}

function showTab(tab) {
  if (tab === 'home') { go('home'); return; }
  if (tab === 'lb') { go('lb'); renderLeaderboard(); return; }
  if (tab === 'profile') { go('profile'); renderProfile(); return; }
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
  const L = lang === 'ru' ? 'RU' : 'EN';
  const next = lang === 'ru' ? 'EN' : 'RU';
  document.querySelectorAll('.lang-btn').forEach(b => b.textContent = next);

  // welcome
  set('wtitle', t('welcome_title'));
  set('htitle', t('welcome_title'));
  set('hsub', t('hero_sub'));
  set('winfo', t('winfo'));
  set('breg', t('b_reg'));
  set('blog', t('b_log'));
  // login
  set('ltitle', t('l_title'));
  set('lsub', t('l_sub'));
  set('bldo', t('l_do'));
  set('blreg', t('l_to_reg'));
  // register
  set('rtitle', t('r_title'));
  set('rsub', t('r_sub'));
  set('brdo', t('r_do'));
  set('brlog', t('r_to_log'));
  set('albl-girl', t('av_girl'));
  set('albl-boy', t('av_boy'));
  // home
  set('hlogo', t('welcome_title'));
  set('hcatttl', t('h_cats'));
  set('cn1', t('cn1')); set('cd1', t('cd1'));
  set('cn2', t('cn2')); set('cd2', t('cd2'));
  set('cn3', t('cn3')); set('cd3', t('cd3'));
  set('cn4', t('cn4')); set('cd4', t('cd4'));
  set('cn5', t('cn5')); set('cd5', t('cd5'));
  set('cn6', t('cn6')); set('cd6', t('cd6'));
  set('bdhot', t('bdhot')); set('bdnew', t('bdnew'));
  set('hs-sl', t('hs_sol')); set('hs-stl', t('hs_st')); set('hs-skl', t('hs_sk'));
  set('lbhtitle', t('lb_h'));
  set('nlh', t('nav_h')); set('nllb', t('nav_lb')); set('nlpr', t('nav_pr'));
  // misc
  set('bk-lbl', t('bk'));
  set('lb-ft', t('lb_ft'));
  set('pr-ft', t('pr_ft'));
  set('b-logout', t('b_logout'));
  set('pr-soll', t('pr_sol')); set('pr-ptsl', t('pr_pts')); set('pr-pctl', t('pr_pct'));

  // re-render if visible
  if (currentUser) {
    refreshHomeStats();
    renderLBHome();
  }
}

function set(id, val) {
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
  if (!nick) { showToast('Введи никнейм!'); return; }
  if (nick.length < 2) { showToast('Никнейм слишком короткий!'); return; }
  if (!pass) { showToast('Придумай пароль!'); return; }
  if (pass !== pass2) { showToast('Пароли не совпадают!'); return; }
  const users = getUsers();
  if (users[nick.toLowerCase()]) { showToast('Такой никнейм занят!'); return; }
  const newUser = {
    nick, ava: selectedAva,
    hash: btoa(pass),
    points: 0, solved: 0, attempts: 0, streak: 0,
    progress: {} // { catId: { done: Set as array } }
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
  if (u.hash !== btoa(pass)) { showToast('Неверный пароль!'); return; }
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
  // avatar
  document.getElementById('home-ava').innerHTML = AVA[currentUser.ava];
  document.getElementById('home-uname').textContent = currentUser.nick;
  refreshHomeStats();
  renderLBHome();
}

function refreshHomeStats() {
  if (!currentUser) return;
  set('hs-solved', currentUser.solved || 0);
  set('hs-stars', (currentUser.points || 0) + '⭐');
  set('hs-streak', (currentUser.streak || 0) + '🔥');
}

function renderLBHome() {
  const users = getUsers();
  const sorted = Object.values(users).sort((a, b) => (b.points || 0) - (a.points || 0)).slice(0, 5);
  const medals = ['m1', 'm2', 'm3', 'mn', 'mn'];
  const nums = ['🥇', '🥈', '🥉', '4', '5'];
  document.getElementById('lb-home').innerHTML = sorted.map((u, i) => `
    <div class="lb-row">
      <div class="lb-medal ${medals[i]}">${nums[i]}</div>
      <div class="lb-ava">${AVA[u.ava] || '⭐'}</div>
      <div class="lb-name">${u.nick}</div>
      <div class="lb-score">${u.points || 0} ⭐</div>
    </div>`).join('');
}

// ══════════════════════════════════════════════════════
//  LEADERBOARD FULL
// ══════════════════════════════════════════════════════
function renderLeaderboard() {
  const users = getUsers();
  const sorted = Object.values(users).sort((a, b) => (b.points || 0) - (a.points || 0));
  const medals = ['m1', 'm2', 'm3'];
  const nums = ['🥇', '🥈', '🥉'];
  document.getElementById('lb-full').innerHTML = `
    <div class="lb-card">
      <div class="lb-title">🏆 ${t('lb_h')}</div>
      ${sorted.map((u, i) => `
        <div class="lb-row ${u.nick === currentUser?.nick ? 'done' : ''}">
          <div class="lb-medal ${medals[i] || 'mn'}">${nums[i] || (i + 1)}</div>
          <div class="lb-ava">${AVA[u.ava] || '⭐'}</div>
          <div class="lb-name">${u.nick}${u.nick === currentUser?.nick ? ' 👈' : ''}</div>
          <div class="lb-score">${u.points || 0} ⭐</div>
        </div>`).join('')}
    </div>`;
}

// ══════════════════════════════════════════════════════
//  PROFILE
// ══════════════════════════════════════════════════════
function renderProfile() {
  if (!currentUser) return;
  document.getElementById('pr-ava').innerHTML = AVA[currentUser.ava];
  set('pr-name', currentUser.nick);

  const pts = currentUser.points || 0;
  const lvls = t('lvls');
  let lvlIdx = Math.min(Math.floor(pts / 50), lvls.length - 1);
  set('pr-lvl', lvls[lvlIdx] + ' · ' + pts + ' ⭐');

  set('pr-sol', currentUser.solved || 0);
  set('pr-pts', pts);
  const pct = currentUser.attempts > 0
    ? Math.round((currentUser.solved / currentUser.attempts) * 100)
    : 0;
  set('pr-pct', pct + '%');

  // cat progress
  const prog = currentUser.progress || {};
  const cats = t('cats');
  let html = `<div class="cat-stat-card"><div class="cat-stat-title">📊 ${t('cat_prog')}</div>`;
  Object.keys(QS).forEach(catId => {
    const total = QS[catId].length;
    const done = prog[catId] ? prog[catId].length : 0;
    const pct2 = Math.round((done / total) * 100);
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
  set('cat-top-title', cats[catId]);
  const prog = (currentUser?.progress || {})[catId] || [];
  const questions = QS[catId];
  document.getElementById('qlist').innerHTML = questions.map((q, i) => {
    const done = prog.includes(q.id);
    const qText = q.q ? q.q[lang] : '—';
    const short = qText.split('\n')[0].slice(0, 50) + (qText.length > 50 ? '…' : '');
    return `
      <div class="q-item ${done ? 'done' : ''}" onclick="startQuestion('${catId}', ${i})">
        <div class="q-num">${done ? '✓' : (i + 1)}</div>
        <div class="q-txt">
          <div class="q-ttl">${short}</div>
          <div class="q-stl">${done ? '✅ ' + t('ok_title').replace('! 🎉','') : '⏳ ' + t('hint')}</div>
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

  set('q-top-cat', cats[currentCat]);
  set('qcl', cats[currentCat]);
  set('qpl', t('q_n') + ' ' + (currentQIdx + 1) + ' ' + t('q_of') + ' ' + total);
  document.getElementById('qpb').style.width = Math.round(((currentQIdx + 1) / total) * 100) + '%';

  // image or SVG
  const imgWrap = document.getElementById('qimgwrap');
  if (q.img) {
    imgWrap.innerHTML = `<img class="q-img" src="${q.img}" alt="question"
      onerror="this.parentNode.innerHTML='<div class=q-img-ph><span class=big>${q.fb}</span><span class=hint>📂 Добавь картинку в папку images/</span></div>'"
    />`;
  } else if (q.svgKey) {
    const svgSrc = REBUS_SVG[q.svgKey] || MATCH_SVG[q.svgKey];
    imgWrap.innerHTML = `<div class="q-svg-wrap">${svgSrc || ''}</div>`;
  } else {
    imgWrap.innerHTML = `<div class="q-img-ph"><span class="big">${q.fb}</span></div>`;
  }

  set('qtext', q.q[lang]);

  // answers
  const ansDiv = document.getElementById('qanswers');
  if (q.type === 'choice') {
    const opts = q.opts[lang];
    ansDiv.innerHTML = `<div class="opts4">${
      opts.map((o, i) =>
        `<button class="opt-btn" onclick="checkChoice(${i})" id="opt${i}">${o}</button>`
      ).join('')
    }</div>`;
  } else {
    ansDiv.innerHTML = `
      <div class="txt-ans">
        <input type="text" id="txt-input" placeholder="${t('ans_ph')}" autocomplete="off"/>
        <button onclick="checkText()">→</button>
      </div>`;
    document.getElementById('txt-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') checkText();
    });
  }
}

function checkChoice(idx) {
  if (answered) return;
  answered = true;
  const q = QS[currentCat][currentQIdx];
  const correct = q.ai;
  const isOk = idx === correct;

  // highlight
  q.opts[lang].forEach((_, i) => {
    const btn = document.getElementById('opt' + i);
    if (i === correct) btn.classList.add('ok');
    else if (i === idx && !isOk) btn.classList.add('no');
    btn.disabled = true;
  });

  setTimeout(() => showResult(isOk, q), 700);
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
  const alts = (q.altAns?.[lang] || []).map(a => a.toLowerCase());
  const isOk = val === correct || alts.includes(val);
  input.disabled = true;
  setTimeout(() => showResult(isOk, q), 300);
}

// ══════════════════════════════════════════════════════
//  RESULT
// ══════════════════════════════════════════════════════
function showResult(isOk, q) {
  if (!currentUser) return;

  // update user stats
  currentUser.attempts = (currentUser.attempts || 0) + 1;
  if (isOk) {
    currentUser.points = (currentUser.points || 0) + 10;
    currentUser.solved = (currentUser.solved || 0) + 1;
    currentUser.streak = (currentUser.streak || 0) + 1;
    // mark done
    if (!currentUser.progress) currentUser.progress = {};
    if (!currentUser.progress[currentCat]) currentUser.progress[currentCat] = [];
    if (!currentUser.progress[currentCat].includes(q.id)) {
      currentUser.progress[currentCat].push(q.id);
    }
    saveCurrentUser();
    launchConfetti();
  } else {
    currentUser.streak = 0;
    saveCurrentUser();
  }

  const isLast = currentQIdx >= QS[currentCat].length - 1;
  const nextBtn = isLast
    ? `<button class="btn btn-success" onclick="openCat('${currentCat}')">${t('btn_fin')}</button>`
    : `<button class="btn btn-primary" onclick="startQuestion('${currentCat}', ${currentQIdx + 1})">${t('btn_next')}</button>`;

  const wrongBlock = !isOk
    ? `<div class="wrong-ans">✅ ${t('ans_lbl')}<strong>${q.ans[lang]}</strong></div>`
    : '';

  const factBlock = q.fact
    ? `<div class="fact-box"><div class="fact-lbl">${t('fact_lbl')}</div><div class="fact-txt">${q.fact[lang]}</div></div>`
    : '';

  document.getElementById('result-content').innerHTML = `
    <div class="res-box ${isOk ? 'ok' : 'no'}">
      <div class="res-emoji">${isOk ? '🎉🌟✨' : '😅💪🎯'}</div>
      <div class="res-title ${isOk ? 'ok' : 'no'}">${isOk ? t('ok_title') : t('no_title')}</div>
      <div class="res-sub">${isOk ? t('ok_sub') : t('no_sub')}</div>
      ${isOk ? `<div class="pts-badge">${t('pts')}</div>` : ''}
    </div>
    ${wrongBlock}
    ${factBlock}
    ${nextBtn}
    <button class="btn btn-secondary" onclick="openCat('${currentCat}')">← ${t('bk')}</button>
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
  const colors = ['#7c3aed','#ec4899','#f59e0b','#22c55e','#38bdf8','#f472b6','#a78bfa'];
  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 8,
      vy: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 3,
      opacity: 1
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach(p => {
      p.y += p.vy;
      p.x += p.vx;
      p.rot += p.rotV;
      if (frame > 60) p.opacity -= 0.015;
      if (p.y < canvas.height && p.opacity > 0) alive = true;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (alive) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ══════════════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
function init() {
  // Render avatars in register form
  document.getElementById('ac-girl').innerHTML = AVA.girl;
  document.getElementById('ac-boy').innerHTML = AVA.boy;

  // Apply translations
  applyTranslations();

  // Check session
  const sess = loadSession();
  if (sess) {
    const users = getUsers();
    if (users[sess]) {
      currentUser = users[sess];
      go('home');
      return;
    }
  }
  go('welcome');
}

document.addEventListener('DOMContentLoaded', init);
