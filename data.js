// ══════════════════════════════════════════════════════
//  TRANSLATIONS
// ══════════════════════════════════════════════════════
const TR = {
  ru: {
    welcome_title:'Загадкино', hero_sub:'Угадывай, думай, побеждай!', winfo:'Данные хранятся в браузере 🔒',
    b_reg:'Зарегистрироваться!', b_log:'Уже есть аккаунт',
    l_title:'Добро пожаловать!', l_sub:'Войди в свой аккаунт', l_do:'Войти! 🚀', l_to_reg:'Нет аккаунта? Зарегистрироваться',
    r_title:'Новый игрок!', r_sub:'Выбери аватарку и придумай никнейм', r_do:'Создать аккаунт! 🎉', r_to_log:'Есть аккаунт? Войти',
    av_girl:'👧 Девочка', av_boy:'👦 Мальчик',
    h_cats:'Выбери категорию',
    cn1:'Загадки', cd1:'Угадай по картинке',
    cn2:'Мультики', cd2:'10 мультфильмов',
    cn3:'Логотипы', cd3:'10 брендов',
    cn4:'Ребусы', cd4:'Картинки-загадки',
    cn5:'Логика', cd5:'Задачи на мышление',
    cn6:'Математика', cd6:'Числа и примеры',
    bdhot:'ТОП', bdnew:'NEW',
    hs_sol:'Решено', hs_st:'Очков', hs_sk:'Серия',
    lb_h:'Лучшие игроки', lb_ft:'Рейтинг',
    nav_h:'Главная', nav_lb:'Рейтинг', nav_pr:'Профиль',
    bk:'Назад', pr_ft:'Профиль',
    pr_sol:'Решено', pr_pts:'Очков', pr_pct:'Верных', b_logout:'Выйти из аккаунта',
    q_n:'Вопрос', q_of:'из', hint:'Выбери правильный ответ',
    ok_title:'Правильно! 🎉', ok_sub:'Отличная работа! Так держать!',
    no_title:'Неверно... 😅', no_sub:'Ничего страшного, в следующий раз!',
    pts:'+10 очков! ⭐', fact_lbl:'💡 Интересный факт',
    ans_lbl:'Правильный ответ: ', ans_ph:'Напиши ответ...',
    btn_next:'Следующая загадка →', btn_fin:'Завершить ✓',
    cat_prog:'Прогресс по категориям',
    lvls:['Новичок 🐣','Любопытный 🐥','Умник 🦉','Знаток 📚','Мудрец 🔮','Чемпион 🏆'],
    cats:{riddles:'🖼️ Загадки',cartoons:'📺 Мультики',logos:'🏷️ Логотипы',rebuses:'🔣 Ребусы',logic:'🧠 Логика',math:'➕ Математика'}
  },
  en: {
    welcome_title:'Riddleland', hero_sub:'Guess, think, win!', winfo:'Data stored in your browser 🔒',
    b_reg:'Sign Up!', b_log:'I have an account',
    l_title:'Welcome back!', l_sub:'Log into your account', l_do:'Log In! 🚀', l_to_reg:'No account? Sign Up',
    r_title:'New Player!', r_sub:'Choose an avatar and pick a nickname', r_do:'Create Account! 🎉', r_to_log:'Have an account? Log In',
    av_girl:'👧 Girl', av_boy:'👦 Boy',
    h_cats:'Choose a category',
    cn1:'Riddles', cd1:'Guess by picture',
    cn2:'Cartoons', cd2:'10 cartoons',
    cn3:'Logos', cd3:'10 brands',
    cn4:'Rebuses', cd4:'Picture puzzles',
    cn5:'Logic', cd5:'Thinking tasks',
    cn6:'Math', cd6:'Numbers & examples',
    bdhot:'TOP', bdnew:'NEW',
    hs_sol:'Solved', hs_st:'Points', hs_sk:'Streak',
    lb_h:'Top Players', lb_ft:'Leaderboard',
    nav_h:'Home', nav_lb:'Ranking', nav_pr:'Profile',
    bk:'Back', pr_ft:'Profile',
    pr_sol:'Solved', pr_pts:'Points', pr_pct:'Correct', b_logout:'Log Out',
    q_n:'Question', q_of:'of', hint:'Choose the correct answer',
    ok_title:'Correct! 🎉', ok_sub:'Great job! Keep it up!',
    no_title:'Wrong... 😅', no_sub:"Don't worry, try again!",
    pts:'+10 points! ⭐', fact_lbl:'💡 Fun Fact',
    ans_lbl:'Correct answer: ', ans_ph:'Write your answer...',
    btn_next:'Next Riddle →', btn_fin:'Finish ✓',
    cat_prog:'Category Progress',
    lvls:['Beginner 🐣','Curious 🐥','Smart 🦉','Expert 📚','Wise 🔮','Champion 🏆'],
    cats:{riddles:'🖼️ Riddles',cartoons:'📺 Cartoons',logos:'🏷️ Logos',rebuses:'🔣 Rebuses',logic:'🧠 Logic',math:'➕ Math'}
  }
};

// ══════════════════════════════════════════════════════
//  AVATARS
// ══════════════════════════════════════════════════════
const AVA = {
  girl: `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#2d1b4e"/>
<ellipse cx="30" cy="15" rx="15" ry="13" fill="#6d28d9"/>
<ellipse cx="16" cy="22" rx="5" ry="8" fill="#6d28d9"/>
<ellipse cx="44" cy="22" rx="5" ry="8" fill="#6d28d9"/>
<circle cx="30" cy="24" r="12" fill="#fde68a"/>
<circle cx="25" cy="22" r="2.5" fill="#1e293b"/>
<circle cx="35" cy="22" r="2.5" fill="#1e293b"/>
<circle cx="26" cy="21" r="1" fill="white"/>
<circle cx="36" cy="21" r="1" fill="white"/>
<ellipse cx="22" cy="26" rx="3" ry="2" fill="#f9a8d4" opacity=".7"/>
<ellipse cx="38" cy="26" rx="3" ry="2" fill="#f9a8d4" opacity=".7"/>
<path d="M25 28 Q30 33 35 28" stroke="#dc2626" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<ellipse cx="30" cy="48" rx="14" ry="10" fill="#a78bfa"/>
<circle cx="18" cy="13" r="4" fill="#ec4899"/>
<circle cx="42" cy="13" r="4" fill="#ec4899"/>
</svg>`,
  boy: `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#1e3a5f"/>
<ellipse cx="30" cy="14" rx="14" ry="11" fill="#1d4ed8"/>
<path d="M16 18 Q16 8 30 8 Q44 8 44 18" fill="#1d4ed8"/>
<circle cx="30" cy="24" r="12" fill="#fde68a"/>
<circle cx="25" cy="22" r="2.5" fill="#1e293b"/>
<circle cx="35" cy="22" r="2.5" fill="#1e293b"/>
<circle cx="26" cy="21" r="1" fill="white"/>
<circle cx="36" cy="21" r="1" fill="white"/>
<ellipse cx="22" cy="26" rx="3" ry="2" fill="#fca5a5" opacity=".5"/>
<ellipse cx="38" cy="26" rx="3" ry="2" fill="#fca5a5" opacity=".5"/>
<path d="M25 28 Q30 33 35 28" stroke="#dc2626" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<ellipse cx="30" cy="48" rx="14" ry="10" fill="#3b82f6"/>
<path d="M22 42 L38 42" stroke="white" stroke-width="2" opacity=".4"/>
</svg>`
};

// ══════════════════════════════════════════════════════
//  REBUS SVGs
// ══════════════════════════════════════════════════════
const REBUS_SVG = {
  sem7ya: `<svg width="280" height="90" viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="90" rx="12" fill="#1a1a2e"/>
<text x="14" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">СЕМ</text>
<rect x="118" y="14" width="42" height="52" rx="8" fill="#ec4899"/>
<text x="125" y="53" font-size="36" font-family="Fredoka One,sans-serif" fill="white">7</text>
<text x="168" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">Я</text>
</svg>`,
  sto1: `<svg width="280" height="90" viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="90" rx="12" fill="#1a1a2e"/>
<text x="14" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">С</text>
<rect x="62" y="14" width="60" height="52" rx="8" fill="#ec4899"/>
<text x="67" y="56" font-size="32" font-family="Fredoka One,sans-serif" fill="white">100</text>
<text x="130" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">Л</text>
</svg>`,
  soroka40: `<svg width="280" height="90" viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="90" rx="12" fill="#1a1a2e"/>
<text x="14" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">СО</text>
<rect x="112" y="14" width="50" height="52" rx="8" fill="#ec4899"/>
<text x="117" y="55" font-size="36" font-family="Fredoka One,sans-serif" fill="white">40</text>
<text x="170" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">А</text>
</svg>`,
  volk100: `<svg width="280" height="90" viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="90" rx="12" fill="#1a1a2e"/>
<text x="14" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">ВОЛ</text>
<rect x="130" y="14" width="52" height="52" rx="8" fill="#6d28d9"/>
<text x="135" y="55" font-size="30" font-family="Fredoka One,sans-serif" fill="white">100</text>
<text x="190" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">К</text>
</svg>`,
  oko: `<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg">
<rect width="260" height="90" rx="12" fill="#1a1a2e"/>
<text x="14" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">О</text>
<ellipse cx="105" cy="45" rx="30" ry="20" fill="none" stroke="#ec4899" stroke-width="3"/>
<circle cx="105" cy="45" r="11" fill="#ec4899"/>
<circle cx="109" cy="40" r="4" fill="white"/>
<text x="148" y="60" font-size="46" font-family="Fredoka One,sans-serif" fill="#a78bfa">О</text>
</svg>`,
  koleno: `<svg width="300" height="90" viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="90" rx="12" fill="#1a1a2e"/>
<text x="14" y="60" font-size="44" font-family="Fredoka One,sans-serif" fill="#a78bfa">КОЛ</text>
<ellipse cx="174" cy="64" rx="10" ry="8" fill="#fbbf24" transform="rotate(-20 174 64)"/>
<line x1="183" y1="62" x2="183" y2="26" stroke="#fbbf24" stroke-width="3"/>
<line x1="183" y1="26" x2="206" y2="32" stroke="#fbbf24" stroke-width="3"/>
<text x="200" y="60" font-size="44" font-family="Fredoka One,sans-serif" fill="#a78bfa">О</text>
</svg>`,
  ucho: `<svg width="270" height="90" viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg">
<rect width="270" height="90" rx="12" fill="#1a1a2e"/>
<text x="10" y="60" font-size="44" font-family="Fredoka One,sans-serif" fill="#a78bfa">У</text>
<path d="M85 20 Q115 10 115 42 Q115 66 95 66 Q85 66 83 56 Q90 56 92 48 Q100 48 100 38 Q100 28 85 30 Z" fill="none" stroke="#ec4899" stroke-width="3" stroke-linecap="round"/>
<text x="128" y="60" font-size="44" font-family="Fredoka One,sans-serif" fill="#a78bfa">ЧО</text>
</svg>`,
  nos: `<svg width="220" height="90" viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg">
<rect width="220" height="90" rx="12" fill="#1a1a2e"/>
<path d="M52 22 Q52 55 40 66 Q58 74 75 66 Q63 55 63 22 Z" fill="none" stroke="#ec4899" stroke-width="3.5" stroke-linecap="round"/>
<circle cx="43" cy="64" r="5" fill="#ec4899" opacity=".5"/>
<circle cx="72" cy="64" r="5" fill="#ec4899" opacity=".5"/>
<text x="96" y="60" font-size="44" font-family="Fredoka One,sans-serif" fill="#a78bfa">С</text>
</svg>`
};

// ══════════════════════════════════════════════════════
//  LOGIC SVGs
// ══════════════════════════════════════════════════════
const MATCH_SVG = {
  eq1: `<svg width="290" height="80" viewBox="0 0 290 80" xmlns="http://www.w3.org/2000/svg">
<rect width="290" height="80" rx="10" fill="#1a1a2e"/>
<text x="16" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#fbbf24">6+4=</text>
<text x="190" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#f87171">9</text>
<line x1="190" y1="62" x2="215" y2="20" stroke="#f87171" stroke-width="2.5" opacity=".6"/>
</svg>`,
  eq2: `<svg width="290" height="80" viewBox="0 0 290 80" xmlns="http://www.w3.org/2000/svg">
<rect width="290" height="80" rx="10" fill="#1a1a2e"/>
<text x="16" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#fbbf24">8−3=</text>
<text x="190" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#f87171">6</text>
<line x1="190" y1="62" x2="215" y2="20" stroke="#f87171" stroke-width="2.5" opacity=".6"/>
</svg>`,
  eq3: `<svg width="290" height="80" viewBox="0 0 290 80" xmlns="http://www.w3.org/2000/svg">
<rect width="290" height="80" rx="10" fill="#1a1a2e"/>
<text x="16" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#fbbf24">5+5=</text>
<text x="190" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#f87171">8</text>
<line x1="190" y1="62" x2="215" y2="20" stroke="#f87171" stroke-width="2.5" opacity=".6"/>
</svg>`,
  eq4: `<svg width="290" height="80" viewBox="0 0 290 80" xmlns="http://www.w3.org/2000/svg">
<rect width="290" height="80" rx="10" fill="#1a1a2e"/>
<text x="16" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#fbbf24">3×3=</text>
<text x="190" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#f87171">6</text>
<line x1="190" y1="62" x2="215" y2="20" stroke="#f87171" stroke-width="2.5" opacity=".6"/>
</svg>`,
  eq5: `<svg width="290" height="80" viewBox="0 0 290 80" xmlns="http://www.w3.org/2000/svg">
<rect width="290" height="80" rx="10" fill="#1a1a2e"/>
<text x="10" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#fbbf24">10−5=</text>
<text x="210" y="56" font-size="44" font-family="Fredoka One,sans-serif" fill="#f87171">6</text>
<line x1="210" y1="62" x2="235" y2="20" stroke="#f87171" stroke-width="2.5" opacity=".6"/>
</svg>`
};

// ══════════════════════════════════════════════════════
//  RIDDLES (SVG-based, no local files needed)
// ══════════════════════════════════════════════════════
const RIDDLE_SVG = {
  apple: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="115" r="70" fill="#ef4444"/>
<ellipse cx="100" cy="115" rx="50" ry="70" fill="#f87171" opacity=".3"/>
<path d="M100 50 Q110 30 125 35" stroke="#16a34a" stroke-width="4" fill="none" stroke-linecap="round"/>
<ellipse cx="128" cy="32" rx="12" ry="20" fill="#22c55e" transform="rotate(30 128 32)"/>
<circle cx="75" cy="100" r="8" fill="rgba(255,255,255,.2)"/>
</svg>`,
  cat: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="120" r="60" fill="#f59e0b"/>
<polygon points="55,70 70,30 85,70" fill="#f59e0b"/>
<polygon points="115,70 130,30 145,70" fill="#f59e0b"/>
<polygon points="60,72 70,45 80,72" fill="#fca5a5"/>
<polygon points="120,72 130,45 140,72" fill="#fca5a5"/>
<circle cx="82" cy="108" r="10" fill="#1e293b"/>
<circle cx="118" cy="108" r="10" fill="#1e293b"/>
<circle cx="85" cy="105" r="4" fill="white"/>
<circle cx="121" cy="105" r="4" fill="white"/>
<ellipse cx="100" cy="128" rx="8" ry="6" fill="#fca5a5"/>
<path d="M80 140 Q100 150 120 140" stroke="#1e293b" stroke-width="2" fill="none"/>
<line x1="60" y1="115" x2="30" y2="108" stroke="#1e293b" stroke-width="2"/>
<line x1="60" y1="120" x2="28" y2="120" stroke="#1e293b" stroke-width="2"/>
<line x1="140" y1="115" x2="170" y2="108" stroke="#1e293b" stroke-width="2"/>
<line x1="140" y1="120" x2="172" y2="120" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  sun: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="40" fill="#fbbf24"/>
<g stroke="#fbbf24" stroke-width="5" stroke-linecap="round">
<line x1="100" y1="20" x2="100" y2="45"/>
<line x1="100" y1="155" x2="100" y2="180"/>
<line x1="20" y1="100" x2="45" y2="100"/>
<line x1="155" y1="100" x2="180" y2="100"/>
<line x1="39" y1="39" x2="57" y2="57"/>
<line x1="143" y1="143" x2="161" y2="161"/>
<line x1="161" y1="39" x2="143" y2="57"/>
<line x1="57" y1="143" x2="39" y2="161"/>
</g>
</svg>`,
  fish: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="95" cy="100" rx="60" ry="35" fill="#38bdf8"/>
<polygon points="155,100 185,75 185,125" fill="#0ea5e9"/>
<circle cx="60" cy="92" r="8" fill="#fff"/>
<circle cx="62" cy="90" r="4" fill="#1e293b"/>
<path d="M75 108 Q95 118 115 108" stroke="#0369a1" stroke-width="2.5" fill="none"/>
<line x1="90" y1="80" x2="90" y2="120" stroke="#0369a1" stroke-width="1.5" opacity=".4"/>
<line x1="110" y1="78" x2="110" y2="122" stroke="#0369a1" stroke-width="1.5" opacity=".4"/>
<line x1="128" y1="82" x2="128" y2="118" stroke="#0369a1" stroke-width="1.5" opacity=".4"/>
</svg>`,
  house: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<polygon points="100,40 170,100 30,100" fill="#f87171"/>
<rect x="45" y="100" width="110" height="75" fill="#fbbf24"/>
<rect x="80" y="130" width="40" height="45" fill="#92400e"/>
<rect x="55" y="108" width="25" height="25" fill="#bae6fd"/>
<rect x="120" y="108" width="25" height="25" fill="#bae6fd"/>
<line x1="67" y1="108" x2="67" y2="133" stroke="#0369a1" stroke-width="2"/>
<line x1="55" y1="120" x2="80" y2="120" stroke="#0369a1" stroke-width="2"/>
</svg>`
};

// ══════════════════════════════════════════════════════
//  MATH SVGs
// ══════════════════════════════════════════════════════
const MATH_SVG = {
  m1: `<svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="120" rx="12" fill="#1a1a2e"/>
<text x="30" y="50" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">В корзине было 12 яблок.</text>
<text x="30" y="78" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">Съели 5. Сколько осталось?</text>
<text x="30" y="108" font-size="18" font-family="Times New Roman,serif" fill="#6b7280">12 − 5 = ?</text>
</svg>`,
  m2: `<svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="120" rx="12" fill="#1a1a2e"/>
<text x="30" y="50" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">У Маши 3 пакета с 4</text>
<text x="30" y="78" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">конфетами каждый. Сколько?</text>
<text x="30" y="108" font-size="18" font-family="Times New Roman,serif" fill="#6b7280">3 × 4 = ?</text>
</svg>`,
  m3: `<svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="120" rx="12" fill="#1a1a2e"/>
<text x="30" y="50" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">Поезд едет 2 часа со</text>
<text x="30" y="78" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">скоростью 50 км/ч. Путь?</text>
<text x="30" y="108" font-size="18" font-family="Times New Roman,serif" fill="#6b7280">50 × 2 = ? км</text>
</svg>`,
  m4: `<svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="120" rx="12" fill="#1a1a2e"/>
<text x="30" y="50" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">24 книги разложили</text>
<text x="30" y="78" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">на 4 полки поровну. По?</text>
<text x="30" y="108" font-size="18" font-family="Times New Roman,serif" fill="#6b7280">24 ÷ 4 = ?</text>
</svg>`,
  m5: `<svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="120" rx="12" fill="#1a1a2e"/>
<text x="30" y="50" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">Периметр квадрата</text>
<text x="30" y="78" font-size="22" font-family="Times New Roman,serif" fill="#a78bfa">со стороной 7 см = ?</text>
<text x="30" y="108" font-size="18" font-family="Times New Roman,serif" fill="#6b7280">7 × 4 = ? см</text>
</svg>`
};

// ══════════════════════════════════════════════════════
//  ALL QUESTIONS
// ══════════════════════════════════════════════════════
const QS = {

  // ── 🖼️ ЗАГАДКИ ──────────────────────────────────────
  riddles: [
    {
      id:'rd1', svgKey:'apple', svgSrc:'riddle', fb:'🍎',
      q:{ru:'Красное, круглое, сладкое — растёт на дереве. Что это?', en:'Red, round, sweet — grows on a tree. What is it?'},
      type:'choice',
      opts:{ru:['Яблоко','Помидор','Вишня','Арбуз'], en:['Apple','Tomato','Cherry','Watermelon']},
      ai:0, ans:{ru:'Яблоко', en:'Apple'},
      fact:{ru:'Яблоня — одно из древнейших плодовых деревьев. Ей более 4000 лет культивирования!', en:'The apple tree is one of the oldest cultivated fruit trees, grown for over 4,000 years!'}
    },
    {
      id:'rd2', svgKey:'cat', svgSrc:'riddle', fb:'🐱',
      q:{ru:'Мурлычет, лакает молоко, ловит мышей. Кто это?', en:'Purrs, drinks milk, catches mice. Who is it?'},
      type:'choice',
      opts:{ru:['Кошка','Собака','Лиса','Рысь'], en:['Cat','Dog','Fox','Lynx']},
      ai:0, ans:{ru:'Кошка', en:'Cat'},
      fact:{ru:'Кошки спят 12–16 часов в день. Это чемпионы по сну среди домашних животных!', en:'Cats sleep 12–16 hours a day. They are the sleep champions among pets!'}
    },
    {
      id:'rd3', svgKey:'sun', svgSrc:'riddle', fb:'☀️',
      q:{ru:'Светит днём, греет всех, без него не было бы жизни. Что это?', en:'Shines during the day, warms everyone. Life would not exist without it. What is it?'},
      type:'choice',
      opts:{ru:['Солнце','Луна','Лампа','Звезда'], en:['Sun','Moon','Lamp','Star']},
      ai:0, ans:{ru:'Солнце', en:'Sun'},
      fact:{ru:'Свет от Солнца достигает Земли за 8 минут 20 секунд!', en:'Light from the Sun reaches Earth in 8 minutes and 20 seconds!'}
    },
    {
      id:'rd4', svgKey:'fish', svgSrc:'riddle', fb:'🐟',
      q:{ru:'Живёт в воде, плавает, дышит жабрами. Кто это?', en:'Lives in water, swims, breathes through gills. Who is it?'},
      type:'choice',
      opts:{ru:['Рыба','Лягушка','Дельфин','Краб'], en:['Fish','Frog','Dolphin','Crab']},
      ai:0, ans:{ru:'Рыба', en:'Fish'},
      fact:{ru:'На Земле обитает более 30 000 видов рыб — это больше, чем всех других позвоночных вместе взятых!', en:'There are over 30,000 species of fish on Earth — more than all other vertebrates combined!'}
    },
    {
      id:'rd5', svgKey:'house', svgSrc:'riddle', fb:'🏠',
      q:{ru:'Есть крыша, стены, дверь, окна. Люди живут внутри. Что это?', en:'Has a roof, walls, a door, and windows. People live inside. What is it?'},
      type:'choice',
      opts:{ru:['Дом','Замок','Школа','Магазин'], en:['House','Castle','School','Shop']},
      ai:0, ans:{ru:'Дом', en:'House'},
      fact:{ru:'Самому старому известному дому в мире около 14 000 лет — он находится на территории современной Иордании!', en:'The world\'s oldest known house is about 14,000 years old — located in modern-day Jordan!'}
    }
  ],

  // ── 📺 МУЛЬТИКИ ─────────────────────────────────────
  cartoons: [
    {
      id:'ct1',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/9/90/Cheburashka_colour.png/240px-Cheburashka_colour.png',
      fb:'📺',
      q:{ru:'Из какого советского мультфильма этот персонаж?', en:'From which Soviet cartoon is this character?'},
      type:'choice',
      opts:{ru:['Чебурашка','Крокодил Гена','Простоквашино','Ну, погоди!'], en:['Cheburashka','Crocodile Gena','Prostokvashino','Well, Just You Wait!']},
      ai:0, ans:{ru:'Чебурашка', en:'Cheburashka'},
      fact:{ru:'Чебурашка создан писателем Эдуардом Успенским в 1966 году. Мультфильм стал символом советского детства!', en:'Cheburashka was created by Eduard Uspensky in 1966 and became a symbol of Soviet childhood!'}
    },
    {
      id:'ct2',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Uncle_Fedor.png/220px-Uncle_Fedor.png',
      fb:'📺',
      q:{ru:'Из какого мультфильма этот мальчик?', en:'From which cartoon is this boy?'},
      type:'choice',
      opts:{ru:['Простоквашино','Малыш и Карлсон','Буратино','Незнайка'], en:['Prostokvashino','Kid and Karlsson','Pinocchio','Dunno']},
      ai:0, ans:{ru:'Простоквашино', en:'Prostokvashino'},
      fact:{ru:'"Трое из Простоквашино" — мультфильм 1978 года. Дядя Фёдор, кот Матроскин и пёс Шарик стали любимцами миллионов!', en:'"Three from Prostokvashino" (1978). Uncle Fyodor, Matroskin the cat and Sharik the dog are beloved by millions!'}
    },
    {
      id:'ct3',
      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tom_and_Jerry_logo.svg/320px-Tom_and_Jerry_logo.svg.png',
      fb:'📺',
      q:{ru:'Что за знаменитый мультфильм?', en:'What famous cartoon is this?'},
      type:'choice',
      opts:{ru:['Том и Джерри','Луни Тюнз','Смешарики','Фиксики'], en:['Tom and Jerry','Looney Tunes','Smeshariki','Fixies']},
      ai:0, ans:{ru:'Том и Джерри', en:'Tom and Jerry'},
      fact:{ru:'Первый эпизод Тома и Джерри вышел в 1940 году. За 80+ лет мультфильм получил 7 премий «Оскар»!', en:'Tom and Jerry first aired in 1940. Over 80 years, the show has won 7 Academy Awards!'}
    },
    {
      id:'ct4',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/e/e7/Masha_and_the_Bear_title_card.png/320px-Masha_and_the_Bear_title_card.png',
      fb:'📺',
      q:{ru:'Как называется этот российский мультфильм?', en:'What is this Russian cartoon called?'},
      type:'choice',
      opts:{ru:['Маша и Медведь','Три медведя','Лунтик','Барбоскины'], en:['Masha and the Bear','Three Bears','Luntik','Barboskiny']},
      ai:0, ans:{ru:'Маша и Медведь', en:'Masha and the Bear'},
      fact:{ru:'Серия "Маша и Медведь" набрала более 5 миллиардов просмотров на YouTube — мировой рекорд среди мультфильмов!', en:'An episode of Masha and the Bear has over 5 billion views on YouTube — a world record for cartoons!'}
    },
    {
      id:'ct5',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2c/Kung-Fu-Panda.jpg/280px-Kung-Fu-Panda.jpg',
      fb:'📺',
      q:{ru:'Из какого мультфильма этот кадр?', en:'Which movie is this frame from?'},
      type:'choice',
      opts:{ru:['Кунг-фу Панда','Зверополис','Мадагаскар','Тайная жизнь домашних животных'], en:['Kung Fu Panda','Zootopia','Madagascar','The Secret Life of Pets']},
      ai:0, ans:{ru:'Кунг-фу Панда', en:'Kung Fu Panda'},
      fact:{ru:'«Кунг-фу Панда» вышла в 2008 году и вдохновлена китайской культурой и боевыми искусствами кунг-фу!', en:'Kung Fu Panda (2008) was inspired by Chinese culture and the martial art of kung fu!'}
    },
    {
      id:'ct6',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c8/%D0%9D%D1%83%2C_%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B8.jpg/240px-%D0%9D%D1%83%2C_%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B8.jpg',
      fb:'📺',
      q:{ru:'Как называется этот культовый советский мультфильм?', en:'What is this iconic Soviet cartoon called?'},
      type:'choice',
      opts:{ru:['Ну, погоди!','Волк и Заяц','Том и Джерри','Охотники за привидениями'], en:['Well, Just You Wait!','Wolf and Hare','Tom and Jerry','Ghostbusters']},
      ai:0, ans:{ru:'Ну, погоди!', en:'Well, Just You Wait!'},
      fact:{ru:'«Ну, погоди!» выходил с 1969 по 2006 год. Вышло 20 выпусков, любимых несколькими поколениями!', en:'"Well, Just You Wait!" aired from 1969 to 2006 with 20 episodes loved by generations!'}
    },
    {
      id:'ct7',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f3/The_Lion_King_poster.jpg/220px-The_Lion_King_poster.jpg',
      fb:'📺',
      q:{ru:'Как называется этот мультфильм Disney?', en:'What is this Disney film called?'},
      type:'choice',
      opts:{ru:['Король Лев','Тарзан','Мадагаскар','Книга джунглей'], en:['The Lion King','Tarzan','Madagascar','The Jungle Book']},
      ai:0, ans:{ru:'Король Лев', en:'The Lion King'},
      fact:{ru:'«Король Лев» 1994 года собрал в прокате более $1 млрд и стал одним из величайших анимационных фильмов!', en:'The Lion King (1994) grossed over $1 billion and became one of the greatest animated films!'}
    },
    {
      id:'ct8',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2b/Frozen_2013_film_poster.jpg/220px-Frozen_2013_film_poster.jpg',
      fb:'📺',
      q:{ru:'Как называется этот мультфильм?', en:'What is this movie called?'},
      type:'choice',
      opts:{ru:['Холодное сердце','Рапунцель','Моана','Храбрая сердцем'], en:['Frozen','Tangled','Moana','Brave']},
      ai:0, ans:{ru:'Холодное сердце', en:'Frozen'},
      fact:{ru:'«Холодное сердце» стало самым кассовым анимационным фильмом 2013 года и получило 2 премии «Оскар»!', en:'"Frozen" was the highest-grossing animated film of 2013 and won 2 Academy Awards!'}
    },
    {
      id:'ct9',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/7/71/Winnie-the-Pooh_logo.svg/280px-Winnie-the-Pooh_logo.svg.png',
      fb:'📺',
      q:{ru:'Кто это?', en:'Who is this?'},
      type:'choice',
      opts:{ru:['Винни-Пух','Паддингтон','Медведь Балу','Эйнштейн'], en:['Winnie the Pooh','Paddington','Baloo Bear','Einstein']},
      ai:0, ans:{ru:'Винни-Пух', en:'Winnie the Pooh'},
      fact:{ru:'Советский Винни-Пух (1969) озвучен Евгением Леоновым. Сам А.А. Милн считал бы его лучшей версией!', en:'The Soviet Winnie the Pooh (1969), voiced by Leonov, is considered one of the best adaptations ever!'}
    },
    {
      id:'ct10',
      img:'https://upload.wikimedia.org/wikipedia/ru/thumb/6/60/%D0%A4%D0%B8%D0%BA%D1%81%D0%B8%D0%BA%D0%B8_%D0%BB%D0%BE%D0%B3%D0%BE.png/240px-%D0%A4%D0%B8%D0%BA%D1%81%D0%B8%D0%BA%D0%B8_%D0%BB%D0%BE%D0%B3%D0%BE.png',
      fb:'📺',
      q:{ru:'Что за мультфильм?', en:'What cartoon is this?'},
      type:'choice',
      opts:{ru:['Фиксики','Смешарики','Лунтик','Кукутики'], en:['Fixies','Smeshariki','Luntik','Kukutiki']},
      ai:0, ans:{ru:'Фиксики', en:'Fixies'},
      fact:{ru:'Фиксики — крошечные существа, живущие в механизмах и помогающие их чинить. Мультик учит детей технике!', en:'Fixies are tiny creatures who live inside machines and help repair them — teaching kids about technology!'}
    }
  ],

  // ── 🏷️ ЛОГОТИПЫ ─────────────────────────────────────
  logos: [
    {
      id:'lg1', img:'https://logo.clearbit.com/apple.com', fb:'🍎',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['Apple','Samsung','Huawei','Xiaomi'], en:['Apple','Samsung','Huawei','Xiaomi']},
      ai:0, ans:{ru:'Apple', en:'Apple'},
      fact:{ru:'Apple основана в 1976 году в гараже! Стив Джобс продал свой автобус, чтобы купить детали для первого компьютера.', en:'Apple was founded in a garage in 1976! Steve Jobs sold his van to buy parts for the first computer.'}
    },
    {
      id:'lg2', img:'https://logo.clearbit.com/nike.com', fb:'✔️',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['Nike','Adidas','Puma','New Balance'], en:['Nike','Adidas','Puma','New Balance']},
      ai:0, ans:{ru:'Nike', en:'Nike'},
      fact:{ru:'Знаменитую «галочку» Nike нарисовала студентка Кэролин Дэвидсон в 1971 году всего за $35!', en:'Nike\'s famous swoosh was designed by student Carolyn Davidson in 1971 for just $35!'}
    },
    {
      id:'lg3', img:'https://logo.clearbit.com/mcdonalds.com', fb:'🍔',
      q:{ru:'Что это за ресторан?', en:'What restaurant is this?'},
      type:'choice',
      opts:{ru:["McDonald's",'Burger King','KFC','Subway'], en:["McDonald's",'Burger King','KFC','Subway']},
      ai:0, ans:{ru:"McDonald's", en:"McDonald's"},
      fact:{ru:"Золотые арки McDonald's — один из самых узнаваемых символов в мире. Ресторанов больше, чем больниц в США!", en:"McDonald's Golden Arches are among the world's most recognized symbols. There are more locations than US hospitals!"}
    },
    {
      id:'lg4', img:'https://logo.clearbit.com/google.com', fb:'🔍',
      q:{ru:'Какая это компания?', en:'Which company is this?'},
      type:'choice',
      opts:{ru:['Google','Bing','Yahoo','DuckDuckGo'], en:['Google','Bing','Yahoo','DuckDuckGo']},
      ai:0, ans:{ru:'Google', en:'Google'},
      fact:{ru:'Каждый день Google обрабатывает более 8,5 миллиарда поисковых запросов — больше одного на каждого жителя Земли!', en:'Google processes over 8.5 billion searches per day — more than one for every person on Earth!'}
    },
    {
      id:'lg5', img:'https://logo.clearbit.com/youtube.com', fb:'▶️',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['YouTube','TikTok','Twitch','Vimeo'], en:['YouTube','TikTok','Twitch','Vimeo']},
      ai:0, ans:{ru:'YouTube', en:'YouTube'},
      fact:{ru:'На YouTube каждую минуту загружается более 500 часов видео! Платформа основана в 2005 году.', en:'Over 500 hours of video are uploaded to YouTube every minute! The platform was founded in 2005.'}
    },
    {
      id:'lg6', img:'https://logo.clearbit.com/lego.com', fb:'🧱',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['LEGO','Mattel','Hasbro','Fisher-Price'], en:['LEGO','Mattel','Hasbro','Fisher-Price']},
      ai:0, ans:{ru:'LEGO', en:'LEGO'},
      fact:{ru:'LEGO — крупнейший производитель игрушек в мире! В год выпускается около 20 миллиардов деталей.', en:'LEGO is the world\'s largest toy manufacturer! About 20 billion bricks are produced each year.'}
    },
    {
      id:'lg7', img:'https://logo.clearbit.com/netflix.com', fb:'🎬',
      q:{ru:'Какой это стриминговый сервис?', en:'Which streaming service is this?'},
      type:'choice',
      opts:{ru:['Netflix','Disney+','HBO','Amazon Prime'], en:['Netflix','Disney+','HBO','Amazon Prime']},
      ai:0, ans:{ru:'Netflix', en:'Netflix'},
      fact:{ru:'Netflix начался в 1997 году как сервис доставки DVD по почте! Сейчас у него более 260 миллионов подписчиков.', en:'Netflix started in 1997 as a DVD-by-mail service! Now it has over 260 million subscribers.'}
    },
    {
      id:'lg8', img:'https://logo.clearbit.com/amazon.com', fb:'📦',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['Amazon','eBay','AliExpress','Wildberries'], en:['Amazon','eBay','AliExpress','Wildberries']},
      ai:0, ans:{ru:'Amazon', en:'Amazon'},
      fact:{ru:'Стрелка в логотипе Amazon идёт от A до Z — символизируя, что здесь продаётся всё на свете!', en:'The arrow in the Amazon logo goes from A to Z — symbolizing that they sell everything!'}
    },
    {
      id:'lg9', img:'https://logo.clearbit.com/spotify.com', fb:'🎵',
      q:{ru:'Что за музыкальный сервис?', en:'What music service is this?'},
      type:'choice',
      opts:{ru:['Spotify','Apple Music','Deezer','SoundCloud'], en:['Spotify','Apple Music','Deezer','SoundCloud']},
      ai:0, ans:{ru:'Spotify', en:'Spotify'},
      fact:{ru:'Spotify запущен в Швеции в 2008 году. Сейчас в каталоге более 100 миллионов треков!', en:'Spotify launched in Sweden in 2008. The catalog now has over 100 million tracks!'}
    },
    {
      id:'lg10', img:'https://logo.clearbit.com/minecraft.net', fb:'⛏️',
      q:{ru:'Игра с этим логотипом?', en:'Which game has this logo?'},
      type:'choice',
      opts:{ru:['Minecraft','Roblox','Fortnite','Terraria'], en:['Minecraft','Roblox','Fortnite','Terraria']},
      ai:0, ans:{ru:'Minecraft', en:'Minecraft'},
      fact:{ru:'Minecraft — самая продаваемая видеоигра в истории: продано более 300 миллионов копий!', en:'Minecraft is the best-selling video game of all time with over 300 million copies sold!'}
    }
  ],

  // ── 🔣 РЕБУСЫ ────────────────────────────────────────
  rebuses: [
    {
      id:'rb1', svgKey:'sem7ya', fb:'🔣',
      q:{ru:'Расшифруй ребус — это слово о родных!', en:'Decode the rebus — this word is about family!'},
      type:'text', ans:{ru:'семья', en:'семья'},
      altAns:{ru:['СЕМЬЯ','Семья','семья'], en:['СЕМЬЯ','Семья','семья']},
      fact:{ru:'СЕМ + 7 + Я = СЕМЬЯ. В старину слово "семья" значило "семеро я" — большая дружная семья!', en:'СЕМ + 7 + Я = СЕМЬЯ (family). The word historically meant "seven selves" — a big friendly family!'}
    },
    {
      id:'rb2', svgKey:'sto1', fb:'🔣',
      q:{ru:'Что здесь написано? Это мебель!', en:'What is written here? It\'s furniture!'},
      type:'text', ans:{ru:'стол', en:'стол'},
      altAns:{ru:['СТОЛ','Стол'], en:['СТОЛ','Стол','table']},
      fact:{ru:'С + 100 + Л = СТОЛ! Первые столы появились в Древнем Египте около 2500 лет до н.э.', en:'С + 100 + Л = СТОЛ (table)! The first tables appeared in ancient Egypt around 2500 BC.'}
    },
    {
      id:'rb3', svgKey:'soroka40', fb:'🔣',
      q:{ru:'Назови птицу по ребусу!', en:'Name the bird from the rebus!'},
      type:'text', ans:{ru:'сорока', en:'сорока'},
      altAns:{ru:['СОРОКА','Сорока'], en:['СОРОКА','Сорока','magpie']},
      fact:{ru:'Сорока — одна из умнейших птиц! Она узнаёт своё отражение в зеркале, как люди и обезьяны.', en:'Magpies are among the smartest birds! They recognize themselves in mirrors, like humans and apes.'}
    },
    {
      id:'rb4', svgKey:'volk100', fb:'🔣',
      q:{ru:'Какой хищный зверь?', en:'Which predatory animal?'},
      type:'text', ans:{ru:'волк', en:'волк'},
      altAns:{ru:['ВОЛК','Волк'], en:['ВОЛК','wolf','Wolf']},
      fact:{ru:'ВОЛ + 100 + К = ВОЛК! Волки живут стаями и невероятно преданы своей семье — как люди!', en:'ВОЛ + 100 + К = ВОЛК (wolf)! Wolves live in packs and are incredibly loyal to their family — like people!'}
    },
    {
      id:'rb5', svgKey:'oko', fb:'🔣',
      q:{ru:'Расшифруй — это орган зрения!', en:'Decode — this is an organ of sight!'},
      type:'text', ans:{ru:'oko', en:'oko'},
      altAns:{ru:['ОКО','Oko','oko','глаз','ГЛАЗ'], en:['ОКО','eye','EYE','oko']},
      fact:{ru:'О + 👁 + О = ОКО. "Око" — старинное слово со значением "глаз". Отсюда и слово "окно"!', en:'О + 👁 + О = ОКО (eye). "Oko" is an archaic Russian word for eye. That\'s where "okno" (window) comes from!'}
    },
    {
      id:'rb6', svgKey:'koleno', fb:'🔣',
      q:{ru:'Часть тела — ребус с нотой!', en:'Body part — rebus with a musical note!'},
      type:'text', ans:{ru:'колено', en:'колено'},
      altAns:{ru:['КОЛЕНО','Колено'], en:['КОЛЕНО','knee']},
      fact:{ru:'КОЛ + НОТА + О = КОЛЕНО! Коленный сустав — самый большой и сложный сустав в теле человека.', en:'КОЛ + NOTE + О = КОЛЕНО (knee)! The knee is the largest and most complex joint in the human body.'}
    },
    {
      id:'rb7', svgKey:'ucho', fb:'🔣',
      q:{ru:'Что за часть лица — ребус!', en:'What facial feature — decode it!'},
      type:'text', ans:{ru:'ухо', en:'ухо'},
      altAns:{ru:['УХО','Ухо'], en:['УХО','ear','EAR']},
      fact:{ru:'У + 👂 + ЧО = УХО! Ухо работает круглосуточно — мы слышим даже во сне, просто мозг фильтрует звуки.', en:'У + 👂 + ЧО = УХО (ear)! Ears work around the clock — we hear even while sleeping, but the brain filters sounds.'}
    },
    {
      id:'rb8', svgKey:'nos', fb:'🔣',
      q:{ru:'Что нарисовано на картинке плюс буква С?', en:'What is drawn in the picture plus the letter С?'},
      type:'text', ans:{ru:'нос', en:'нос'},
      altAns:{ru:['НОС','Нос'], en:['НОС','nose']},
      fact:{ru:'👃 + С = НОС! Наш нос различает более 1 триллиона запахов и согревает воздух до температуры тела!', en:'👃 + С = НОС (nose)! Our nose can detect over 1 trillion scents and warms air to body temperature!'}
    }
  ],

  // ── 🧠 ЛОГИКА ────────────────────────────────────────
  logic: [
    {
      id:'lc1', svgKey:'eq1', fb:'🧠',
      q:{ru:'На картинке пример написан НЕВЕРНО.\nКакой правильный ответ для 6 + 4?', en:'The example in the picture is WRONG.\nWhat is the correct answer for 6 + 4?'},
      type:'choice',
      opts:{ru:['10','9','11','8'], en:['10','9','11','8']},
      ai:0, ans:{ru:'10', en:'10'},
      fact:{ru:'6 + 4 = 10 ✓ Это простой пример из таблицы сложения до 10!', en:'6 + 4 = 10 ✓ A basic addition fact from the addition table!'}
    },
    {
      id:'lc2', svgKey:'eq2', fb:'🧠',
      q:{ru:'Пример написан НЕВЕРНО.\nЧему равно 8 − 3?', en:'The example is WRONG.\nWhat does 8 − 3 equal?'},
      type:'choice',
      opts:{ru:['5','6','4','7'], en:['5','6','4','7']},
      ai:0, ans:{ru:'5', en:'5'},
      fact:{ru:'8 − 3 = 5 ✓ Отнять 3 от 8: 8, 7, 6, 5 — три шага назад!', en:'8 − 3 = 5 ✓ Subtract 3 from 8: count back three steps!'}
    },
    {
      id:'lc3', svgKey:'eq3', fb:'🧠',
      q:{ru:'Пример НЕВЕРНЫЙ.\nЧему равно 5 + 5?', en:'The example is WRONG.\nWhat does 5 + 5 equal?'},
      type:'choice',
      opts:{ru:['10','8','9','11'], en:['10','8','9','11']},
      ai:0, ans:{ru:'10', en:'10'},
      fact:{ru:'5 + 5 = 10 ✓ Пять пальцев на одной руке плюс пять на другой — десять!', en:'5 + 5 = 10 ✓ Five fingers on one hand plus five on the other equals ten!'}
    },
    {
      id:'lc4', svgKey:'eq4', fb:'🧠',
      q:{ru:'Пример НЕВЕРНЫЙ.\nЧему равно 3 × 3?', en:'The example is WRONG.\nWhat does 3 × 3 equal?'},
      type:'choice',
      opts:{ru:['9','6','12','8'], en:['9','6','12','8']},
      ai:0, ans:{ru:'9', en:'9'},
      fact:{ru:'3 × 3 = 9 ✓ Три ряда по три — получается квадрат 3×3 = 9 клеток!', en:'3 × 3 = 9 ✓ Three rows of three makes a 3×3 square with 9 cells!'}
    },
    {
      id:'lc5', svgKey:'eq5', fb:'🧠',
      q:{ru:'Пример НЕВЕРНЫЙ.\nЧему равно 10 − 5?', en:'The example is WRONG.\nWhat does 10 − 5 equal?'},
      type:'choice',
      opts:{ru:['5','6','4','7'], en:['5','6','4','7']},
      ai:0, ans:{ru:'5', en:'5'},
      fact:{ru:'10 − 5 = 5 ✓ Половина от десяти — это пять! Ровно посередине.', en:'10 − 5 = 5 ✓ Half of ten is five — exactly in the middle!'}
    }
  ],

  // ── ➕ МАТЕМАТИКА ────────────────────────────────────
  math: [
    {
      id:'mt1', svgKey:'m1', svgSrc:'math', fb:'➕',
      q:{ru:'Реши задачу!', en:'Solve the problem!'},
      type:'text', ans:{ru:'7', en:'7'},
      altAns:{ru:['7'], en:['7']},
      fact:{ru:'12 − 5 = 7. Вычитание — это нахождение разности. Проверь: 7 + 5 = 12 ✓', en:'12 − 5 = 7. Subtraction finds the difference. Check: 7 + 5 = 12 ✓'}
    },
    {
      id:'mt2', svgKey:'m2', svgSrc:'math', fb:'➕',
      q:{ru:'Реши задачу!', en:'Solve the problem!'},
      type:'text', ans:{ru:'12', en:'12'},
      altAns:{ru:['12'], en:['12']},
      fact:{ru:'3 × 4 = 12. Умножение — это быстрое сложение: 4+4+4=12!', en:'3 × 4 = 12. Multiplication is fast addition: 4+4+4=12!'}
    },
    {
      id:'mt3', svgKey:'m3', svgSrc:'math', fb:'➕',
      q:{ru:'Реши задачу!', en:'Solve the problem!'},
      type:'text', ans:{ru:'100', en:'100'},
      altAns:{ru:['100'], en:['100']},
      fact:{ru:'50 × 2 = 100 км. Скорость × Время = Расстояние. Это главная формула движения!', en:'50 × 2 = 100 km. Speed × Time = Distance. That\'s the main motion formula!'}
    },
    {
      id:'mt4', svgKey:'m4', svgSrc:'math', fb:'➕',
      q:{ru:'Реши задачу!', en:'Solve the problem!'},
      type:'text', ans:{ru:'6', en:'6'},
      altAns:{ru:['6'], en:['6']},
      fact:{ru:'24 ÷ 4 = 6. Деление — это раскладывание поровну. Проверь: 6 × 4 = 24 ✓', en:'24 ÷ 4 = 6. Division means sharing equally. Check: 6 × 4 = 24 ✓'}
    },
    {
      id:'mt5', svgKey:'m5', svgSrc:'math', fb:'➕',
      q:{ru:'Реши задачу!', en:'Solve the problem!'},
      type:'text', ans:{ru:'28', en:'28'},
      altAns:{ru:['28'], en:['28']},
      fact:{ru:'7 × 4 = 28 см. Периметр квадрата = сторона × 4, потому что все 4 стороны равны!', en:'7 × 4 = 28 cm. Perimeter of a square = side × 4, since all 4 sides are equal!'}
    }
  ]
};
