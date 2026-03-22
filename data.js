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
    cn1:'Загадки', cd1:'Твои картинки · тест',
    cn2:'Мультики', cd2:'10 мультфильмов',
    cn3:'Логотипы', cd3:'10 брендов',
    cn4:'Ребусы', cd4:'Картинки-загадки',
    cn5:'Логика', cd5:'Спички · задачи',
    cn6:'Математика', cd6:'Твои задачи',
    bdhot:'ТОП', bdnew:'NEW',
    hs_sol:'Решено', hs_st:'Очков', hs_sk:'Серия',
    lb_h:'Лучшие игроки', lb_ft:'Рейтинг',
    nav_h:'Главная', nav_lb:'Рейтинг', nav_pr:'Профиль',
    bk:'На главную', pr_ft:'Профиль',
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
    cn1:'Riddles', cd1:'Your images · quiz',
    cn2:'Cartoons', cd2:'10 cartoons',
    cn3:'Logos', cd3:'10 brands',
    cn4:'Rebuses', cd4:'Picture puzzles',
    cn5:'Logic', cd5:'Matches · tasks',
    cn6:'Math', cd6:'Your tasks',
    bdhot:'TOP', bdnew:'NEW',
    hs_sol:'Solved', hs_st:'Points', hs_sk:'Streak',
    lb_h:'Top Players', lb_ft:'Leaderboard',
    nav_h:'Home', nav_lb:'Ranking', nav_pr:'Profile',
    bk:'Back Home', pr_ft:'Profile',
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
//  AVATARS SVG
// ══════════════════════════════════════════════════════
const AVA = {
  girl: `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#fce7f3"/>
<ellipse cx="30" cy="15" rx="15" ry="13" fill="#b45309"/>
<ellipse cx="16" cy="22" rx="5" ry="8" fill="#b45309"/>
<ellipse cx="44" cy="22" rx="5" ry="8" fill="#b45309"/>
<circle cx="30" cy="24" r="12" fill="#fde68a"/>
<circle cx="25" cy="22" r="2.5" fill="#1e293b"/>
<circle cx="35" cy="22" r="2.5" fill="#1e293b"/>
<circle cx="26" cy="21" r="1" fill="white"/>
<circle cx="36" cy="21" r="1" fill="white"/>
<ellipse cx="22" cy="26" rx="3" ry="2" fill="#fca5a5" opacity=".6"/>
<ellipse cx="38" cy="26" rx="3" ry="2" fill="#fca5a5" opacity=".6"/>
<path d="M25 28 Q30 33 35 28" stroke="#dc2626" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<ellipse cx="30" cy="48" rx="14" ry="10" fill="#f472b6"/>
<circle cx="18" cy="13" r="4" fill="#ec4899"/>
<circle cx="42" cy="13" r="4" fill="#ec4899"/>
</svg>`,

  boy: `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#dbeafe"/>
<ellipse cx="30" cy="14" rx="14" ry="11" fill="#92400e"/>
<path d="M16 18 Q16 8 30 8 Q44 8 44 18" fill="#92400e"/>
<circle cx="30" cy="24" r="12" fill="#fde68a"/>
<circle cx="25" cy="22" r="2.5" fill="#1e293b"/>
<circle cx="35" cy="22" r="2.5" fill="#1e293b"/>
<circle cx="26" cy="21" r="1" fill="white"/>
<circle cx="36" cy="21" r="1" fill="white"/>
<ellipse cx="22" cy="26" rx="3" ry="2" fill="#fca5a5" opacity=".5"/>
<ellipse cx="38" cy="26" rx="3" ry="2" fill="#fca5a5" opacity=".5"/>
<path d="M25 28 Q30 33 35 28" stroke="#dc2626" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<ellipse cx="30" cy="48" rx="14" ry="10" fill="#3b82f6"/>
<path d="M22 42 L38 42" stroke="white" stroke-width="2" opacity=".5"/>
</svg>`
};

// ══════════════════════════════════════════════════════
//  REBUSES — SVG картинки
// ══════════════════════════════════════════════════════
const REBUS_SVG = {
  sem7ya: `<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg">
<rect width="260" height="90" rx="12" fill="#faf5ff"/>
<text x="20" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">СЕМ</text>
<rect x="115" y="16" width="38" height="52" rx="8" fill="#ec4899"/>
<text x="122" y="54" font-size="38" font-family="Fredoka One,sans-serif" fill="white">7</text>
<text x="160" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">Я</text>
</svg>`,

  sto1: `<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg">
<rect width="260" height="90" rx="12" fill="#faf5ff"/>
<text x="20" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">С</text>
<rect x="65" y="16" width="52" height="52" rx="8" fill="#ec4899"/>
<text x="72" y="55" font-size="34" font-family="Fredoka One,sans-serif" fill="white">100</text>
<text x="125" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">Л</text>
</svg>`,

  soroka40: `<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg">
<rect width="260" height="90" rx="12" fill="#faf5ff"/>
<text x="20" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">СО</text>
<rect x="112" y="16" width="48" height="52" rx="8" fill="#ec4899"/>
<text x="118" y="54" font-size="38" font-family="Fredoka One,sans-serif" fill="white">40</text>
<text x="168" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">А</text>
</svg>`,

  koleno: `<svg width="300" height="90" viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="90" rx="12" fill="#faf5ff"/>
<!-- КОЛ + нота -->
<text x="16" y="58" font-size="44" font-family="Fredoka One,sans-serif" fill="#7c3aed">КОЛ</text>
<!-- нота (нотный символ) -->
<ellipse cx="172" cy="62" rx="9" ry="7" fill="#f59e0b" transform="rotate(-20 172 62)"/>
<line x1="181" y1="60" x2="181" y2="24" stroke="#f59e0b" stroke-width="3"/>
<line x1="181" y1="24" x2="204" y2="30" stroke="#f59e0b" stroke-width="3"/>
<text x="200" y="58" font-size="44" font-family="Fredoka One,sans-serif" fill="#7c3aed">О</text>
</svg>`,

  volk100: `<svg width="280" height="90" viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="90" rx="12" fill="#faf5ff"/>
<text x="16" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">ВОЛ</text>
<rect x="120" y="16" width="52" height="52" rx="8" fill="#7c3aed"/>
<text x="126" y="55" font-size="32" font-family="Fredoka One,sans-serif" fill="white">100</text>
<text x="180" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">К</text>
</svg>`,

  oko: `<svg width="240" height="90" viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
<rect width="240" height="90" rx="12" fill="#faf5ff"/>
<!-- О + глаз + О -->
<text x="16" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">О</text>
<ellipse cx="100" cy="42" rx="28" ry="18" fill="none" stroke="#ec4899" stroke-width="3"/>
<circle cx="100" cy="42" r="10" fill="#ec4899"/>
<circle cx="104" cy="38" r="4" fill="white"/>
<text x="140" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">О</text>
</svg>`,

  ucho: `<svg width="260" height="90" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg">
<rect width="260" height="90" rx="12" fill="#faf5ff"/>
<!-- У + ухо-картинка + О -->
<text x="10" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">У</text>
<path d="M85 20 Q115 10 115 42 Q115 65 95 65 Q85 65 83 55 Q90 55 92 48 Q100 48 100 38 Q100 28 85 30 Z" fill="none" stroke="#ec4899" stroke-width="3" stroke-linecap="round"/>
<text x="130" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">ЧО</text>
</svg>`,

  noc: `<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="90" rx="12" fill="#faf5ff"/>
<!-- нос — нарисованный нос -->
<path d="M60 22 Q60 55 48 65 Q65 72 80 65 Q68 55 68 22 Z" fill="none" stroke="#ec4899" stroke-width="3.5" stroke-linecap="round"/>
<text x="95" y="58" font-size="48" font-family="Fredoka One,sans-serif" fill="#7c3aed">С</text>
</svg>`
};

// ══════════════════════════════════════════════════════
//  LOGIC (matches) SVG
// ══════════════════════════════════════════════════════
const MATCH_SVG = {
  // 6+4=9 → передвинь 1 спичку → 6+4=10 или 5+4=9
  eq1: `<svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="80" rx="10" fill="#fffbeb"/>
<!-- цифры из спичек: 6 + 4 = 9 (схематично) -->
<text x="20" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">6</text>
<text x="78" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">+</text>
<text x="120" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">4</text>
<text x="178" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">=</text>
<text x="218" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#dc2626">9</text>
</svg>`,

  eq2: `<svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="80" rx="10" fill="#fffbeb"/>
<text x="20" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">8</text>
<text x="78" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">-</text>
<text x="120" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">3</text>
<text x="178" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">=</text>
<text x="218" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#dc2626">6</text>
</svg>`,

  eq3: `<svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="80" rx="10" fill="#fffbeb"/>
<text x="20" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">5</text>
<text x="78" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">+</text>
<text x="120" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">5</text>
<text x="178" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">=</text>
<text x="218" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#dc2626">8</text>
</svg>`,

  eq4: `<svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="80" rx="10" fill="#fffbeb"/>
<text x="20" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">3</text>
<text x="78" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">×</text>
<text x="120" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">3</text>
<text x="178" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">=</text>
<text x="218" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#dc2626">6</text>
</svg>`,

  eq5: `<svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="80" rx="10" fill="#fffbeb"/>
<text x="10" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">10</text>
<text x="78" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">-</text>
<text x="120" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">5</text>
<text x="178" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#92400e">=</text>
<text x="218" y="54" font-size="44" font-family="Fredoka One,sans-serif" fill="#dc2626">6</text>
</svg>`
};

// ══════════════════════════════════════════════════════
//  ALL QUESTIONS
// ══════════════════════════════════════════════════════
const QS = {

  // ─── 🖼️ ЗАГАДКИ (пользовательские картинки) ───
  riddles: [
    {
      id:'rd1', img:'images/riddle1.jpg', fb:'🖼️',
      q:{ru:'Что изображено на этой картинке?', en:'What is shown in this picture?'},
      type:'choice',
      opts:{ru:['Мыло','Груша','Апельсин','Банан'], en:['Apple','Pear','Orange','Banana']},
      ai:0,
      ans:{ru:'Мыло', en:'green'},
    },
    {
      id:'rd2', img:'images/riddle2.jpg', fb:'🖼️',
      q:{ru:'Кто изображён на картинке?', en:'Who is shown in the picture?'},
      type:'choice',
      opts:{ru:['Кошка','Собака','Кролик','Хомяк'], en:['Cat','Dog','Rabbit','Hamster']},
      ai:1,
      ans:{ru:'Утро', en:'morning'},
    },
    {
      id:'rd3', img:'images/riddle3.jpg', fb:'🖼️',
      q:{ru:'Что это?', en:'What is this?'},
      type:'choice',
      opts:{ru:['Гора','Море','Лес','Поле'], en:['Mountain','Sea','Forest','Field']},
      ai:2,
      ans:{ru:'Елка', en:'Forest'},
   
    },
    {
      id:'rd4', img:'images/riddle4.jpg', fb:'🖼️',
      q:{ru:'Угадай, что на картинке!', en:'Guess what\'s in the picture!'},
      type:'choice',
      opts:{ru:['Самолёт','Ракета','Вертолёт','Воздушный шар'], en:['Airplane','Rocket','Helicopter','Hot air balloon']},
      ai:0,
      ans:{ru:'Соль', en:'Airplane'},
   
    },
    {
      id:'rd5', img:'images/riddle5.jpg', fb:'🖼️',
      q:{ru:'Что изображено?', en:'What is depicted?'},
      type:'choice',
      opts:{ru:['Планета','Звезда','Комета','Луна'], en:['Planet','Star','Comet','Moon']},
      ai:3,
      ans:{ru:'Лес', en:'Moon'},
  
    }
  ],

  // ─── 📺 МУЛЬТИКИ ───
  cartoons: [
    {
      id:'ct1', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/9/90/Cheburashka_colour.png/240px-Cheburashka_colour.png', fb:'📺',
      q:{ru:'Из какого мультфильма этот персонаж?', en:'From which cartoon is this character?'},
      type:'choice',
      opts:{ru:['Чебурашка','Простоквашино','Маша и Медведь','Ну погоди!'], en:['Cheburashka','Prostokvashino','Masha and the Bear','Well Just You Wait!']},
      ai:0,
      ans:{ru:'Чебурашка', en:'Cheburashka'},
      fact:{ru:'Чебурашка — персонаж книг Эдуарда Успенского. Мультфильм вышел в 1966 году!', en:'Cheburashka first appeared in Eduard Uspensky\'s books. The cartoon was released in 1966!'}
    },
    {
      id:'ct2', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Uncle_Fedor.png/220px-Uncle_Fedor.png', fb:'📺',
      q:{ru:'Из какого мультфильма этот персонаж?', en:'Which cartoon is this character from?'},
      type:'choice',
      opts:{ru:['Простоквашино','Чебурашка','Карлсон','Буратино'], en:['Prostokvashino','Cheburashka','Karlsson','Pinocchio']},
      ai:0,
      ans:{ru:'Простоквашино', en:'Prostokvashino'},
      fact:{ru:'Мультфильм "Трое из Простоквашино" вышел в 1978 году и стал одним из самых любимых в СССР!', en:'"Three from Prostokvashino" was released in 1978 and became one of the most beloved Soviet cartoons!'}
    },
    {
      id:'ct3', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tom_and_Jerry_logo.svg/320px-Tom_and_Jerry_logo.svg.png', fb:'📺',
      q:{ru:'Что за мультфильм?', en:'What cartoon is this?'},
      type:'choice',
      opts:{ru:['Том и Джерри','Луни Тюнз','Спанч Боб','Фиксики'], en:['Tom and Jerry','Looney Tunes','SpongeBob','Fixies']},
      ai:0,
      ans:{ru:'Том и Джерри', en:'Tom and Jerry'},
      fact:{ru:'Том и Джерри — один из старейших мультфильмов. Первый эпизод вышел в 1940 году!', en:'Tom and Jerry is one of the oldest cartoons. The first episode aired in 1940!'}
    },
    {
      id:'ct4', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/e/e7/Masha_and_the_Bear_title_card.png/320px-Masha_and_the_Bear_title_card.png', fb:'📺',
      q:{ru:'Как называется этот мультфильм?', en:'What is this cartoon called?'},
      type:'choice',
      opts:{ru:['Маша и Медведь','Три медведя','Лунтик','Смешарики'], en:['Masha and the Bear','Three Bears','Luntik','Smeshariki']},
      ai:0,
      ans:{ru:'Маша и Медведь', en:'Masha and the Bear'},
      fact:{ru:'"Маша и Медведь" — самый популярный российский мультфильм в мире! Серия набрала 5 млрд просмотров на YouTube!', en:'"Masha and the Bear" is the most popular Russian cartoon worldwide with over 5 billion YouTube views!'}
    },
    {
      id:'ct5', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2c/Kung-Fu-Panda.jpg/280px-Kung-Fu-Panda.jpg', fb:'📺',
      q:{ru:'Из какого мультфильма этот кадр?', en:'Which cartoon is this from?'},
      type:'choice',
      opts:{ru:['Кунг-фу Панда','Зверополис','Мадагаскар','Как приручить дракона'], en:['Kung Fu Panda','Zootopia','Madagascar','How to Train Your Dragon']},
      ai:0,
      ans:{ru:'Кунг-фу Панда', en:'Kung Fu Panda'},
      fact:{ru:'Сериал "Кунг-фу Панда" вдохновлён китайской культурой и боевыми искусствами!', en:'Kung Fu Panda was inspired by Chinese culture and martial arts!'}
    },
    {
      id:'ct6', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c8/%D0%9D%D1%83%2C_%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B8.jpg/240px-%D0%9D%D1%83%2C_%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B8.jpg', fb:'📺',
      q:{ru:'Из какого мультфильма эти персонажи?', en:'Which cartoon are these characters from?'},
      type:'choice',
      opts:{ru:['Ну, погоди!','Том и Джерри','Волк и Заяц','Хитрый Лис'], en:['Well, Just You Wait!','Tom and Jerry','Wolf and Hare','Clever Fox']},
      ai:0,
      ans:{ru:'Ну, погоди!', en:'Well, Just You Wait!'},
      fact:{ru:'"Ну, погоди!" — советская классика! Вышло 20 серий с 1969 по 2006 год.', en:'"Well, Just You Wait!" is a Soviet classic! 20 episodes were released from 1969 to 2006.'}
    },
    {
      id:'ct7', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f3/The_Lion_King_poster.jpg/220px-The_Lion_King_poster.jpg', fb:'📺',
      q:{ru:'Как называется этот мультфильм?', en:'What is this movie called?'},
      type:'choice',
      opts:{ru:['Король Лев','Мадагаскар','Тарзан','Книга джунглей'], en:['The Lion King','Madagascar','Tarzan','The Jungle Book']},
      ai:0,
      ans:{ru:'Король Лев', en:'The Lion King'},
      fact:{ru:'"Король Лев" 1994 года — один из самых кассовых анимационных фильмов всех времён!', en:'The Lion King (1994) is one of the highest-grossing animated films of all time!'}
    },
    {
      id:'ct8', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/6/60/%D0%A4%D0%B8%D0%BA%D1%81%D0%B8%D0%BA%D0%B8_%D0%BB%D0%BE%D0%B3%D0%BE.png/240px-%D0%A4%D0%B8%D0%BA%D1%81%D0%B8%D0%BA%D0%B8_%D0%BB%D0%BE%D0%B3%D0%BE.png', fb:'📺',
      q:{ru:'Что за мультфильм?', en:'What cartoon is this?'},
      type:'choice',
      opts:{ru:['Фиксики','Смешарики','Лунтик','Кукутики'], en:['Fixies','Smeshariki','Luntik','Kukutiki']},
      ai:0,
      ans:{ru:'Фиксики', en:'Fixies'},
      fact:{ru:'Фиксики — крошечные существа, которые живут внутри машин и ремонтируют их!', en:'Fixies are tiny creatures who live inside machines and fix them!'}
    },
    {
      id:'ct9', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2b/Frozen_2013_film_poster.jpg/220px-Frozen_2013_film_poster.jpg', fb:'📺',
      q:{ru:'Как называется этот мультфильм Дисней?', en:'What is this Disney film called?'},
      type:'choice',
      opts:{ru:['Холодное сердце','Рапунцель','Моана','Бравая сердцем'], en:['Frozen','Tangled','Moana','Brave']},
      ai:0,
      ans:{ru:'Холодное сердце', en:'Frozen'},
      fact:{ru:'"Холодное сердце" стало самым кассовым анимационным фильмом в истории на момент выхода!', en:'"Frozen" became the highest-grossing animated film in history upon its release!'}
    },
    {
      id:'ct10', img:'https://upload.wikimedia.org/wikipedia/ru/thumb/7/71/Winnie-the-Pooh_logo.svg/280px-Winnie-the-Pooh_logo.svg.png', fb:'📺',
      q:{ru:'Кто это?', en:'Who is this?'},
      type:'choice',
      opts:{ru:['Винни-Пух','Паддингтон','Медведь Балу','Тедди'], en:['Winnie the Pooh','Paddington','Baloo','Teddy']},
      ai:0,
      ans:{ru:'Винни-Пух', en:'Winnie the Pooh'},
      fact:{ru:'Советский Винни-Пух 1969 года озвучил Евгений Леонов. Сам Милн сказал бы, что это лучшая версия!', en:'The Soviet Winnie the Pooh (1969) was voiced by Yevgeny Leonov. It\'s considered one of the best adaptations!'}
    }
  ],

  // ─── 🏷️ ЛОГОТИПЫ ───
  logos: [
    {
      id:'lg1', img:'https://logo.clearbit.com/apple.com', fb:'🍎',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['Apple','Samsung','Xiaomi','Huawei'], en:['Apple','Samsung','Xiaomi','Huawei']},
      ai:0,
      ans:{ru:'Apple', en:'Apple'},
      fact:{ru:'Apple основана в 1976 году Стивом Джобсом, Стивом Возняком и Рональдом Уэйном!', en:'Apple was founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne!'}
    },
    {
      id:'lg2', img:'https://logo.clearbit.com/nike.com', fb:'✔️',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['Nike','Adidas','Puma','Reebok'], en:['Nike','Adidas','Puma','Reebok']},
      ai:0,
      ans:{ru:'Nike', en:'Nike'},
      fact:{ru:'Логотип Nike ("галочку") нарисовала студентка Кэролин Дэвидсон в 1971 году всего за $35!', en:'Nike\'s swoosh was designed by student Carolyn Davidson in 1971 for just $35!'}
    },
    {
      id:'lg3', img:'https://logo.clearbit.com/mcdonalds.com', fb:'🍔',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['McDonald\'s','Burger King','KFC','Wendy\'s'], en:['McDonald\'s','Burger King','KFC','Wendy\'s']},
      ai:0,
      ans:{ru:'McDonald\'s', en:'McDonald\'s'},
      fact:{ru:'Золотые арки McDonald\'s — один из самых узнаваемых символов в мире!', en:'The Golden Arches of McDonald\'s are one of the most recognized symbols in the world!'}
    },
    {
      id:'lg4', img:'https://logo.clearbit.com/google.com', fb:'🔍',
      q:{ru:'Какая это компания?', en:'Which company is this?'},
      type:'choice',
      opts:{ru:['Google','Yahoo','Bing','DuckDuckGo'], en:['Google','Yahoo','Bing','DuckDuckGo']},
      ai:0,
      ans:{ru:'Google', en:'Google'},
      fact:{ru:'Google обрабатывает более 8.5 миллиарда поисковых запросов каждый день!', en:'Google processes over 8.5 billion search queries every single day!'}
    },
    {
      id:'lg5', img:'https://logo.clearbit.com/youtube.com', fb:'▶️',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['YouTube','TikTok','Twitch','Vimeo'], en:['YouTube','TikTok','Twitch','Vimeo']},
      ai:0,
      ans:{ru:'YouTube', en:'YouTube'},
      fact:{ru:'На YouTube загружается больше 500 часов видео каждую минуту!', en:'Over 500 hours of video are uploaded to YouTube every minute!'}
    },
    {
      id:'lg6', img:'https://logo.clearbit.com/lego.com', fb:'🧱',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['LEGO','Mattel','Hasbro','Fisher-Price'], en:['LEGO','Mattel','Hasbro','Fisher-Price']},
      ai:0,
      ans:{ru:'LEGO', en:'LEGO'},
      fact:{ru:'LEGO — крупнейший производитель игрушек в мире! В год выпускается около 20 миллиардов деталей!', en:'LEGO is the world\'s largest toy maker! About 20 billion bricks are produced each year!'}
    },
    {
      id:'lg7', img:'https://logo.clearbit.com/netflix.com', fb:'🎬',
      q:{ru:'Какой это стриминговый сервис?', en:'Which streaming service is this?'},
      type:'choice',
      opts:{ru:['Netflix','Disney+','HBO','Amazon Prime'], en:['Netflix','Disney+','HBO','Amazon Prime']},
      ai:0,
      ans:{ru:'Netflix', en:'Netflix'},
      fact:{ru:'Netflix начинался как сервис доставки DVD по почте в 1997 году!', en:'Netflix started as a DVD-by-mail service in 1997!'}
    },
    {
      id:'lg8', img:'https://logo.clearbit.com/amazon.com', fb:'📦',
      q:{ru:'Чей это логотип?', en:'Whose logo is this?'},
      type:'choice',
      opts:{ru:['Amazon','eBay','AliExpress','Wildberries'], en:['Amazon','eBay','AliExpress','Wildberries']},
      ai:0,
      ans:{ru:'Amazon', en:'Amazon'},
      fact:{ru:'Стрелка в логотипе Amazon идёт от A до Z — значит, они продают всё! 😄', en:'The arrow in Amazon\'s logo goes from A to Z — meaning they sell everything!'}
    },
    {
      id:'lg9', img:'https://logo.clearbit.com/spotify.com', fb:'🎵',
      q:{ru:'Что за приложение?', en:'What app is this?'},
      type:'choice',
      opts:{ru:['Spotify','Apple Music','Deezer','SoundCloud'], en:['Spotify','Apple Music','Deezer','SoundCloud']},
      ai:0,
      ans:{ru:'Spotify', en:'Spotify'},
      fact:{ru:'Spotify запущен в Швеции в 2008 году и сегодня имеет более 600 миллионов пользователей!', en:'Spotify launched in Sweden in 2008 and now has over 600 million users!'}
    },
    {
      id:'lg10', img:'https://logo.clearbit.com/minecraft.net', fb:'⛏️',
      q:{ru:'Игра с этим логотипом?', en:'The game with this logo?'},
      type:'choice',
      opts:{ru:['Minecraft','Roblox','Fortnite','Terraria'], en:['Minecraft','Roblox','Fortnite','Terraria']},
      ai:0,
      ans:{ru:'Minecraft', en:'Minecraft'},
      fact:{ru:'Minecraft — самая продаваемая видеоигра в истории: более 300 миллионов копий!', en:'Minecraft is the best-selling video game of all time with over 300 million copies sold!'}
    }
  ],

  // ─── 🔣 РЕБУСЫ ───
  rebuses: [
    {
      id:'rb1', svgKey:'sem7ya', fb:'🔣',
      q:{ru:'Расшифруй ребус!', en:'Decode the rebus!'},
      type:'text',
      ans:{ru:'семья', en:'семья'},
      altAns:{ru:['СЕМЬЯ','Семья'], en:['СЕМЬЯ','Семья']},
      fact:{ru:'СЕМЬЯ = СЕМ + 7 + Я! Слово "семья" в старину означало "семеро я" — большая дружная семья!', en:'СЕМЬЯ = СЕМ + 7 + Я! The Russian word for "family" historically meant "seven selves" — a big friendly family!'}
    },
    {
      id:'rb2', svgKey:'sto1', fb:'🔣',
      q:{ru:'Что здесь написано?', en:'What is written here?'},
      type:'text',
      ans:{ru:'стол', en:'стол'},
      altAns:{ru:['СТОЛ','Стол'], en:['СТОЛ','Стол']},
      fact:{ru:'С + 100 + Л = СТОЛ! Интересный ребус, правда?', en:'С + 100 + Л = СТОЛ (table)! Great rebus, right?'}
    },
    {
      id:'rb3', svgKey:'soroka40', fb:'🔣',
      q:{ru:'Назови птицу по ребусу!', en:'Name the bird from the rebus!'},
      type:'text',
      ans:{ru:'сорока', en:'сорока'},
      altAns:{ru:['СОРОКА','Сорока'], en:['СОРОКА','Сорока']},
      fact:{ru:'СО + 40 + А = СОРОКА! Сороки — одни из умнейших птиц. Они узнают себя в зеркале!', en:'CO + 40 + A = СОРОКА (magpie)! Magpies are among the smartest birds — they recognize themselves in mirrors!'}
    },
    {
      id:'rb4', svgKey:'koleno', fb:'🔣',
      q:{ru:'Какая часть тела?', en:'Which body part?'},
      type:'text',
      ans:{ru:'колено', en:'колено'},
      altAns:{ru:['КОЛЕНО','Колено'], en:['КОЛЕНО','Колено']},
      fact:{ru:'КОЛ + НОТА (♪) + О = КОЛЕНО! Нота в ребусе означает "НО" или "ДО-РЕ-МИ"!', en:'КОЛ + NOTE + О = КОЛЕНО (knee)! A music note in rebuses often stands for the syllable "НО"!'}
    },
    {
      id:'rb5', svgKey:'volk100', fb:'🔣',
      q:{ru:'Какой зверь?', en:'Which animal?'},
      type:'text',
      ans:{ru:'волк', en:'волк'},
      altAns:{ru:['ВОЛК','Волк'], en:['ВОЛК','Волк']},
      fact:{ru:'ВОЛ + 100 + К = ВОЛК! Волки живут стаями и очень верны своей семье!', en:'ВОЛ + 100 + К = ВОЛК (wolf)! Wolves live in packs and are very loyal to their family!'}
    },
    {
      id:'rb6', svgKey:'oko', fb:'🔣',
      q:{ru:'Расшифруй — это часть лица!', en:'Decode — it\'s part of the face!'},
      type:'text',
      ans:{ru:'око', en:'oko'},
      altAns:{ru:['ОКО','Oko','глаз','ГЛАЗ'], en:['ОКО','oko','eye','EYE']},
      fact:{ru:'О + 👁 + О = ОКО! "Око" — старинное слово, означающее "глаз". Отсюда "окно" — место, куда смотришь!', en:'О + 👁 + О = ОКО! "Oko" is an old Russian word meaning "eye". That\'s where "okno" (window) comes from!'}
    },
    {
      id:'rb7', svgKey:'ucho', fb:'🔣',
      q:{ru:'Что за часть тела?', en:'What body part?'},
      type:'text',
      ans:{ru:'ухо', en:'ухо'},
      altAns:{ru:['УХО','Ухо'], en:['УХО','Ухо','ear','EAR']},
      fact:{ru:'У + 👂 + ЧО = УХО! Человек воспринимает звуки в диапазоне от 20 до 20 000 Гц!', en:'У + 👂 + ЧО = УХО (ear)! Humans can hear sounds ranging from 20 to 20,000 Hz!'}
    },
    {
      id:'rb8', svgKey:'noc', fb:'🔣',
      q:{ru:'Что нарисовано + буква?', en:'What is drawn + a letter?'},
      type:'text',
      ans:{ru:'нос', en:'нос'},
      altAns:{ru:['НОС','Нос'], en:['НОС','Нос','nose','NOSE']},
      fact:{ru:'👃 + С = НОС! Нос может различать более 1 триллиона различных запахов!', en:'👃 + С = НОС (nose)! The human nose can detect over 1 trillion different scents!'}
    }
  ],

  // ─── 🧠 ЛОГИКА / СПИЧКИ ───
  logic: [
    {
      id:'lc1', svgKey:'eq1', fb:'🧠',
      q:{ru:'На картинке: 6 + 4 = 9\nЭто неверно! Какую 1 цифру нужно исправить, чтобы стало верно?',
         en:'In the picture: 6 + 4 = 9\nThis is wrong! Which 1 digit should be changed to make it correct?'},
      type:'choice',
      opts:{ru:['Заменить 9 на 10','Заменить 6 на 5','Заменить 4 на 3','Заменить + на ×'],
            en:['Change 9 to 10','Change 6 to 5','Change 4 to 3','Change + to ×']},
      ai:0,
      ans:{ru:'6 + 4 = 10', en:'6 + 4 = 10'},
      fact:{ru:'6 + 4 = 10 ✓ Всего одна маленькая поправка делает пример верным!', en:'6 + 4 = 10 ✓ Just one small fix makes the equation correct!'}
    },
    {
      id:'lc2', svgKey:'eq2', fb:'🧠',
      q:{ru:'На картинке: 8 − 3 = 6\nНеверно! Что нужно изменить?',
         en:'Picture shows: 8 − 3 = 6\nWrong! What needs to change?'},
      type:'choice',
      opts:{ru:['Заменить 6 на 5','Заменить 3 на 2','Заменить 8 на 9','Заменить − на +'],
            en:['Change 6 to 5','Change 3 to 2','Change 8 to 9','Change − to +']},
      ai:0,
      ans:{ru:'8 − 3 = 5', en:'8 − 3 = 5'},
      fact:{ru:'8 − 3 = 5 ✓ Отнять 3 от 8 — получим 5, а не 6!', en:'8 − 3 = 5 ✓ Subtracting 3 from 8 gives 5, not 6!'}
    },
    {
      id:'lc3', svgKey:'eq3', fb:'🧠',
      q:{ru:'На картинке: 5 + 5 = 8\nНеверно! Правильный ответ:',
         en:'Picture: 5 + 5 = 8\nWrong! The correct answer is:'},
      type:'choice',
      opts:{ru:['5 + 5 = 10','4 + 4 = 8','5 + 3 = 8','6 + 5 = 8'],
            en:['5 + 5 = 10','4 + 4 = 8','5 + 3 = 8','6 + 5 = 8']},
      ai:0,
      ans:{ru:'5 + 5 = 10', en:'5 + 5 = 10'},
      fact:{ru:'Пять плюс пять равно десять! Это одно из самых лёгких сложений 😄', en:'Five plus five equals ten! That\'s one of the easiest additions 😄'}
    },
    {
      id:'lc4', svgKey:'eq4', fb:'🧠',
      q:{ru:'На картинке: 3 × 3 = 6\nНеверно! Чему равно 3 × 3?',
         en:'Picture: 3 × 3 = 6\nWrong! What does 3 × 3 equal?'},
      type:'choice',
      opts:{ru:['9','6','12','8'],
            en:['9','6','12','8']},
      ai:0,
      ans:{ru:'9', en:'9'},
      fact:{ru:'3 × 3 = 9 ✓ Три ряда по три — это девять! Таблица умножения — наш лучший друг!', en:'3 × 3 = 9 ✓ Three rows of three equal nine! Multiplication tables are our best friend!'}
    },
    {
      id:'lc5', svgKey:'eq5', fb:'🧠',
      q:{ru:'На картинке: 10 − 5 = 6\nНеверно! Правильный ответ?',
         en:'Picture: 10 − 5 = 6\nWrong! Correct answer?'},
      type:'choice',
      opts:{ru:['5','4','6','7'],
            en:['5','4','6','7']},
      ai:0,
      ans:{ru:'5', en:'5'},
      fact:{ru:'10 − 5 = 5 ✓ Половина от десяти — это пять! Ровно половина!', en:'10 − 5 = 5 ✓ Half of ten is five! Exactly half!'}
    }
  ],

  // ─── ➕ МАТЕМАТИКА ───
  math: [
    {
      id:'mt1', img:'images/math1.jpg', fb:'➕',
      q:{ru:'Реши задачу на картинке!\n(📂 Замени images/math1.jpg своей задачей)',
         en:'Solve the problem in the picture!\n(📂 Replace images/math1.jpg)'},
      type:'text',
      ans:{ru:'4', en:'4'},
      altAns:{ru:['5'], en:['5']},
      fact:{ru:'Математика — язык Вселенной! Умение считать поможет тебе везде.', en:'Math is the language of the Universe! Being able to count will help you everywhere.'}
    },
    {
      id:'mt2', img:'images/math2.jpg', fb:'➕',
      q:{ru:'Найди ответ!\n(📂 Замени images/math2.jpg)', en:'Find the answer!\n(📂 Replace images/math2.jpg)'},
      type:'text',
      ans:{ru:'12', en:'12'},
      altAns:{ru:['25'], en:['25']},
      fact:{ru:'25 = 5 × 5. Это "квадратное" число! Таких чисел много: 1, 4, 9, 16, 25...', en:'25 = 5 × 5. It\'s a "square" number! There are many: 1, 4, 9, 16, 25...'}
    },
    {
      id:'mt3', img:'images/math3.jpg', fb:'➕',
      q:{ru:'Реши задачу!\n(📂 Замени images/math3.jpg)', en:'Solve it!\n(📂 Replace images/math3.jpg)'},
      type:'text',
      ans:{ru:'7', en:'7'},
      altAns:{ru:['7'], en:['7']},
      fact:{ru:'Число 7 считается самым "счастливым" во многих культурах мира!', en:'The number 7 is considered the "luckiest" number in many world cultures!'}
    },
    {
      id:'mt4', img:'images/math4.jpg', fb:'➕',
      q:{ru:'Какой ответ?\n(📂 Замени images/math4.jpg)', en:'What\'s the answer?\n(📂 Replace images/math4.jpg)'},
      type:'text',
      ans:{ru:'100', en:'100'},
      altAns:{ru:['100'], en:['100']},
      fact:{ru:'100 = 10 × 10. В десятичной системе счёта 100 — это "круглое" число!', en:'100 = 10 × 10. In the decimal system, 100 is a round number!'}
    },
    {
      id:'mt5', img:'images/math5.jpg', fb:'➕',
      q:{ru:'Найди число!\n(📂 Замени images/math5.jpg)', en:'Find the number!\n(📂 Replace images/math5.jpg)'},
      type:'text',
      ans:{ru:'36', en:'36'},
      altAns:{ru:['36'], en:['36']},
      fact:{ru:'36 = 6 × 6. Ещё одно квадратное число! Это сторона квадрата со стороной 6.', en:'36 = 6 × 6. Another square number! It\'s the area of a 6×6 square.'}
    }
  ]
};
