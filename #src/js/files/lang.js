let ukr = {
  hello: 'Привіт, мене звати',
  name: 'Юрій Матвєєв',
  description: 'Я фронтенд-розробник-самоучка, що займається створенням якісних і сучасних веб-сайтів і додатків.',
  front: 'Розробник',
  biography: 'Про мене',
  biography_desc: 'Я цілеспрямований і наполегливий, готовий вчитися і швидко освоювати нові ідеї та концепції. Мені дуже цікаво рости в професійному плані. <br> Я присвячую себе створенню якісних і красивих сайтів і додатків. Деякі з технологій, з якими я працюю, - це HTML і CSS, JavaScript (ES6 +) і React.',
  title_name: 'Ім\'я:',
  title_birthday: 'Народився:',
  birthday: '5 Жовтня 1999',
  title_age: 'Вік:',
  age: '21 років',
  title_address: 'Проживаю у:',
  address: 'Хмельницькому',
  title_phone: 'Моб. тел.',
  iDo: 'Чим я займаюсь?',
  WebDesign: 'Веб дизайн',
  WebDesignDesk: 'Я ціную прості за структурою та чисті шаблони з продуманою взаємодію. <br> Figma, Photoshop, Illustrator, Sketch.',
  WebDevelopment: 'Веб-розробка',
  WebDevelopmentDesk: 'Адаптивні веб-сайти, розроблені для оптимального користувацького досвіду, який відповідає цілям клієнта. <br> Javascript, React, Socket.IO, Express.js, Node.js, VS Code.',
  coding: 'Написння коду',
  codingDesk: 'Мені подобається писати код з нуля, втілювати ідеї в життя у браузері. <br> HTML, CSS, LESS, SASS (SCSS), Bootstrap, Github, Terminal.',
  education: 'Освіта та навички',
  present: 'По теперішній час',
  master: 'Магістр цифрової економіки',
  knute: 'Київський національний торговельно-економічний університет',
  bachelor: 'Бакалавр економічної кібернетики',
  myWorks: 'Мої роботи',
  all: 'Всі',
  contacts: 'Контакти',
  contactText: 'Ви завжди можете зв\'язатися зі мною такими способами:',
  brand: 'ЮМ',
  funiroDesk: 'Простий лендинг інтернет-магазину з використанням чистого JavaScript',
  toDoDesk: 'ToDo App написанный на React',
  jsFiddleDesk: 'Розробка елементів функціоналу для сайтів на JS',
  homeDesk: 'Стартова сторінка браузера де є пошук, погода по геолокації, та міні додаток ToDo',
  chatDesk: 'Чат в реальному часі на React, з використанням Socket.IO, потрібно ввести ім\'я та бажану кімнату для спілкування',
  landieDesk: 'Простий лендінг',
  excelDesk: 'Можна міняти назву документа, в комірках можна змінювати стилі та положення, вміст комірок динамічно змінюється, можна вводити прості формули',
  zenMaxDesk: 'Інтернет-магазин з продажу ножів. Головна сторінка, каталог та карточка товару',
  landieDesk: 'Простенький лендінг'
};

let eng = {
  hello: 'Hello, My name is',
  name: 'Yuri Matveev',
  description: 'I\'m a self-taught front end developer, devoted to building quality and modern websites and apps.',
  front: 'Developer',
  biography: 'About me',
  biography_desc: 'I am a motivated and persistent person, ready to learn and quickly master new ideas and concepts. It is very interesting for me to grow professionally. <br> I am committed to creating high quality and beautiful websites and applications. Some of the technologies I work with are HTML and CSS, JavaScript (ES6 +) and React.',
  title_name: 'Name:',
  title_birthday: 'Birthday:',
  birthday: '5 October 1999',
  title_age: 'Age:',
  age: '22 years',
  title_address: 'Address:',
  address: 'Khmelnytskyi',
  title_phone: 'Phone',
  iDo: 'What I do?',
  WebDesign: 'Web Design',
  WebDesignDesk: 'I value simple content structure, clean design patterns, and thoughtful interactions. <br> Figma, Photoshop, Illustrator, Sketch.',
  WebDevelopment: 'Web Development',
  WebDevelopmentDesk: 'Responsive websites designed for an optimal user experience that meets customer goals. <br> Javascript, React, Socket.IO, Express.js, Node.js, VS Code.',
  coding: 'Coding',
  codingDesk: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser. <br> HTML, CSS, LESS, SASS(SCSS), Bootstrap, Github, Terminal.',
  education: 'Education & Skills',
  present: 'Present',
  master: 'Master of Digital Economics',
  knute: 'Kyiv National University of Trade and Economics',
  bachelor: 'Bachelor in Economic Cybernetics',
  myWorks: 'My Works',
  all: 'All',
  contacts: 'Contacts',
  contactText: 'You can always contact me in the following ways:',
  brand: 'YM',
  funiroDesk: 'Simple landing page for an online store using pure JavaScript',
  toDoDesk: 'ToDo App written in React',
  jsFiddleDesk: 'Development of functional elements for sites on JS',
  homeDesk: 'Browser start page with search, geolocation weather, and mini ToDo app',
  chatDesk: 'Live chat in React using Socket.IO you need to enter a name and the desired chat room',
  landieDesk: 'Simple landing',
  excelDesk: 'You can change the name of the document, in cells you can change styles and positions, the contents of the cells change dynamically',
  zenMaxDesk: 'Online shop selling knives. Main page, catalog and product card',
  landieDesk: 'Simple landing page'
};

changeLagnuage();

function changeLagnuage() {
  let language = lang.checked ? ukr : eng;
  document.querySelectorAll('[text]').forEach(el => {
    el.innerHTML = language[el.getAttribute('text')];
  })
}