// script.js - Language switch, mobile nav, smooth scroll, reveal, assistant

// Translations
const translations = {
  en: {
    name: 'Charles',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.blacksmith': 'Blacksmith',
    'nav.profile': 'Profile',
    'nav.contact': 'Contact',

    'hero.title': 'Charles',
    'hero.role': 'Electrical Engineering Student & Technology Enthusiast',
    'hero.intro': 'I am a student passionate about electricity, electronics, programming and technology. I enjoy learning by building practical projects and finding technological solutions to real problems.',
    'hero.about': 'About Me',
    'hero.contact': 'Contact',

    'about.title': 'About Me',
    'about.bio': 'I am studying electrical engineering with a strong interest in electronics, programming and technology. I learn through practical projects and experiments. I am also a member of Blacksmith, an initiative focused on community development and environmental challenges.',

    'skills.title': 'Skills',
    'skills.ee.title': 'Electrical Engineering',
    'skills.ee.item1': 'Electrical systems',
    'skills.ee.item2': 'Electronics',
    'skills.ee.item3': 'Basic electrical design',
    'skills.ee.item4': 'Practical experimentation',
    'skills.prog.title': 'Programming',
    'skills.tech.title': 'Technology',

    'projects.title': 'Projects & Activities',
    'projects.elec.title': 'Electronics and programming experiments',
    'projects.elec.desc': 'Hands-on experiments combining circuits and microcontrollers to learn practical electronics and embedded programming.',
    'projects.robotics.title': 'Robotics and embedded systems',
    'projects.robotics.desc': 'Small robotics and embedded projects using platforms like Arduino and ESP32 to explore control and sensors.',
    'projects.community.title': 'Environmental & community activities',
    'projects.community.desc': 'Activities with Blacksmith focused on community development and environmental challenges.',

    'blacksmith.desc': 'I am a member of Blacksmith. The initiative focuses on community development and environmental challenges.',

    'profile.title': 'Profile',
    'profile.text': 'Student → Learner → Builder → Future Engineer',

    'contact.title': 'Contact',
    'contact.intro': 'Use the placeholders below to add real contact details later.',

    'assistant.title': 'Site Assistant',
    'assistant.who': 'Who is Charles?',
    'assistant.study': 'What does Charles study?',
    'assistant.skills': 'What are his skills?',
    'assistant.blacksmith': 'What is Blacksmith?',
    'assistant.contact': 'How can I contact Charles?'
  },
  fr: {
    name: 'Charles',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.blacksmith': 'Blacksmith',
    'nav.profile': 'Profil',
    'nav.contact': 'Contact',

    'hero.title': 'Charles',
    'hero.role': 'Étudiant en génie électrique & passionné de technologie',
    'hero.intro': "Je suis étudiant et passionné par l'électricité, l'électronique, la programmation et la technologie. J'apprends en construisant des projets pratiques et en cherchant des solutions technologiques à des problèmes concrets.",
    'hero.about': 'À propos',
    'hero.contact': 'Contact',

    'about.title': 'À propos de moi',
    'about.bio': "J'étudie le génie électrique avec un grand intérêt pour l'électronique, la programmation et la technologie. J'apprends par des projets pratiques et des expériences. Je suis également membre de Blacksmith, une initiative axée sur le développement communautaire et les enjeux environnementaux.",

    'skills.title': 'Compétences',
    'skills.ee.title': 'Génie électrique',
    'skills.ee.item1': 'Systèmes électriques',
    'skills.ee.item2': 'Électronique',
    'skills.ee.item3': 'Conception électrique de base',
    'skills.ee.item4': 'Expérimentation pratique',
    'skills.prog.title': 'Programmation',
    'skills.tech.title': 'Technologie',

    'projects.title': 'Projets & Activités',
    'projects.elec.title': "Expériences d'électronique et de programmation",
    'projects.elec.desc': "Expériences pratiques combinant circuits et microcontrôleurs pour apprendre l'électronique pratique et la programmation embarquée.",
    'projects.robotics.title': 'Robotique et systèmes embarqués',
    'projects.robotics.desc': "Petits projets de robotique et embarqués utilisant des plateformes comme Arduino et ESP32 pour explorer le contrôle et les capteurs.",
    'projects.community.title': 'Activités environnementales et communautaires',
    'projects.community.desc': "Activités avec Blacksmith axées sur le développement communautaire et les défis environnementaux.",

    'blacksmith.desc': "Je suis membre de Blacksmith. L'initiative se concentre sur le développement communautaire et les enjeux environnementaux.",

    'profile.title': 'Profil',
    'profile.text': 'Étudiant → Apprenant → Bâtisseur → Futur Ingénieur',

    'contact.title': 'Contact',
    'contact.intro': "Utilisez les espaces réservés ci-dessous pour ajouter de vrais contacts plus tard.",

    'assistant.title': "Assistant du site",
    'assistant.who': 'Qui est Charles?',
    'assistant.study': 'Que fait-il étudier?',
    'assistant.skills': 'Quelles sont ses compétences?',
    'assistant.blacksmith': "Qu'est-ce que Blacksmith?",
    'assistant.contact': 'Comment contacter Charles?'
  }
};

// Helpers
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// Language
let currentLang = localStorage.getItem('lang') || 'en';
const applyTranslations = (lang) => {
  const map = translations[lang] || translations.en;
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(map[key]) el.textContent = map[key];
  });
  // update lang toggle label (FR | EN)
  $('#lang-switch').textContent = (lang === 'en') ? 'FR | EN' : 'FR | EN';
};

// Toggle language
$('#lang-switch').addEventListener('click', ()=>{
  currentLang = (currentLang === 'en') ? 'fr' : 'en';
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
});

// Initial apply
applyTranslations(currentLang);

// Mobile nav
const nav = $('#nav');
const navToggle = $('#nav-toggle');
navToggle.addEventListener('click', ()=>{
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
// Close nav on link click (mobile)
$$('.nav a').forEach(a => a.addEventListener('click', ()=>{
  if(nav.classList.contains('open')) nav.classList.remove('open');
}));

// Smooth scroll for internal links
$$('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.12});
$$('.reveal').forEach(el=>observer.observe(el));

// Footer year
const yearEl = $('#year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Simple Site Assistant
const assistantToggle = $('#assistant-toggle');
const assistantPanel = $('#assistant-panel');
const assistantClose = $('#assistant-close');
const assistantAnswer = $('#assistant-answer');

assistantToggle.addEventListener('click', ()=>{
  const isHidden = assistantPanel.hasAttribute('hidden');
  if(isHidden) assistantPanel.removeAttribute('hidden'); else assistantPanel.setAttribute('hidden','');
});
assistantClose && assistantClose.addEventListener('click', ()=>assistantPanel.setAttribute('hidden',''));

// Predefined Q&A using site content
const answers = {
  who: ()=> translations[currentLang].hero.title + ' — ' + translations[currentLang]['hero.role'],
  study: ()=> translations[currentLang]['about.bio'].split('.')[0],
  skills: ()=> {
    return [
      translations[currentLang]['skills.ee.title'] + ': Electrical systems, Electronics, Basic electrical design, Practical experimentation.',
      translations[currentLang]['skills.prog.title'] + ': Python, C/C++, JavaScript, HTML, CSS.',
      translations[currentLang]['skills.tech.title'] + ': Arduino, ESP32, Git, GitHub, Linux / Ubuntu.'
    ].join('\n');
  },
  blacksmith: ()=> translations[currentLang]['blacksmith.desc'],
  contact: ()=> 'Email, GitHub, LinkedIn — placeholders on the contact section. Please replace with real links.'
};

$$('.qa-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const q = btn.getAttribute('data-q');
    const a = answers[q] ? answers[q]() : '';
    assistantAnswer.textContent = a;
  });
});

// Ensure translation updates assistant texts when language changes
const observeLangChange = new MutationObserver(()=>{
  // rebind any necessary dynamic content (assistant answers use translations object)
});
observeLangChange.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

// Accessibility: close assistant with Escape
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') assistantPanel.setAttribute('hidden','');
});
