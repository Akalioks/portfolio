/* =====================================================================
   ВСЁ СОДЕРЖИМОЕ САЙТА ЗДЕСЬ.
   Меняйте тексты, ссылки и проекты в этом файле. HTML трогать не нужно.
   После правок запустите:  node build.js  (пересоберёт index.html)
   Совет: не используйте длинное тире (—), пишите короткими фразами.
   ===================================================================== */

window.SITE = {
  // ---------- О вас ----------
  name: "Aleks Kalikas",
  initials: "AK",
  photo: "img/aleks.webp", // квадратное фото; пусто = вместо фото будут инициалы
  role: "Telegram Bot Developer",
  headline: "Telegram bots that take bookings, orders and payments for small businesses",
  sub: "Your customers book a time, place an order or get an answer in the chat app they already use. Every request lands in your Telegram or a Google Sheet, so nobody copies orders out of DMs by hand.",
  location: "Estonia, EU (GMT+2)",
  languages: "English, Russian",
  responseTime: "Usually replies within a few hours",
  available: true, // false = скрыть зелёный бейдж «Available»

  // ---------- Блок «About» ----------
  about: [
    "I'm a developer from Estonia. I build Telegram bots and small web apps for businesses that talk to their customers in messengers: salons, online shops and local services.",
    "All six projects below run on my own server with Docker, HTTPS and daily database backups, and together they have close to 100 automated tests. Client projects get the same setup, not just a folder of code.",
    "Before I write anything, I want to understand how your business works day to day. Expect a few questions at the start. It saves a lot of rework later."
  ],
  facts: [
    { label: "Based in", value: "Estonia, EU (GMT+2)" },
    { label: "Languages", value: "English, Russian, Estonian (basic)" },
    { label: "Main stack", value: "Python, aiogram, Next.js, TypeScript" },
    { label: "Hosting", value: "Docker, Caddy, Ubuntu VPS" }
  ],

  // ---------- SEO и превью ссылок (Google, Telegram, LinkedIn, Upwork, Slack) ----------
  siteUrl: "https://a-kalikas.duckdns.org/", // адрес сайта; если купите домен, поменяйте здесь
  description: "Aleks Kalikas, Telegram bot developer in Estonia. Booking and order bots, Telegram Mini App stores with card payments, AI support assistants and landing pages. Six live demos, fixed prices.",
  ogImage: "og-image.png", // картинка 1200×630 для превью ссылки
  resume: "Aleks-Kalikas-Resume.pdf", // PDF-резюме; пусто = кнопка «Resume» скрыта

  // ---------- Контакты ----------
  contacts: {
    telegram: "https://t.me/StoneKamen7",
    telegramLabel: "@StoneKamen7",
    email: "akalioks24@gmail.com",
    emailSubject: "Project inquiry", // тема письма, которая подставится при клике
    upwork: "https://www.upwork.com/freelancers/~0125d41676b0e3d83d",
    linkedin: "", // ссылка на LinkedIn, пусто = скрыто
    fiverr: "",   // ссылка на Fiverr, пусто = скрыто
    github: "https://github.com/Akalioks"
  },

  // ---------- Услуги ----------
  services: [
    { icon: "bot",  title: "Telegram bots",          text: "Bots for bookings, orders, lead forms, reminders and broadcasts, with an admin panel you run from your phone." },
    { icon: "app",  title: "Telegram Mini Apps",     text: "A store, catalog or dashboard that opens inside Telegram. Customers browse, add to cart and pay by card without leaving the chat." },
    { icon: "ai",   title: "AI support assistants",  text: "A chatbot that answers from your price list, FAQ and policies. When it doesn't know, it says so and hands the chat to a person." },
    { icon: "web",  title: "Landing pages",          text: "A fast one-page site for your business. Every form submission goes straight to your Telegram or a Google Sheet." }
  ],

  // ---------- Как я работаю ----------
  process: [
    { title: "Tell me what you need",  text: "Write by email, Upwork or Telegram, or we can talk on a short video call. I'll ask questions until I understand how your business works." },
    { title: "Get a fixed quote",      text: "You get a written plan: what the bot will do, how long it takes and what it costs. The price only changes if the scope does." },
    { title: "Try it while it's built", text: "Every few days you get a demo to try on your phone, so you can give feedback early instead of at the end." },
    { title: "Launch and support",     text: "I put it on a server, set up backups and HTTPS, and fix any bugs for free for 14 days after launch." }
  ],

  // ---------- Пакеты и цены (поменяйте под себя) ----------
  packages: [
    { name: "Starter bot",  price: "from $150", features: ["Menu and FAQ", "Contact or order form", "Notifications to you", "Hosting setup included"] },
    { name: "Business bot", price: "from $400", features: ["Bookings or orders", "Database and admin panel", "Card payments", "Reminders and broadcasts"], featured: true },
    { name: "AI assistant", price: "from $600", features: ["Answers from your documents", "Hand-off to a person", "Several languages", "Usage limits and stats"] },
    { name: "Landing page", price: "from $250", features: ["Mobile-first design", "Form sends to Telegram", "SEO basics", "Hosting setup included"] }
  ],

  // ---------- FAQ ----------
  faq: [
    { q: "How do we communicate?", a: "Whichever way suits you: email, Upwork messages, Telegram or a video call. I'm in Estonia (GMT+2) and usually reply within a few hours on weekdays." },
    { q: "Can we work through Upwork?", a: "Yes. If you prefer Upwork's contracts and payment protection, we can run the whole project there." },
    { q: "Do I own the code?", a: "Yes. You get the full source code, and the bot, server and other accounts are registered to you." },
    { q: "Where will the bot run?", a: "On a cloud server (VPS). I set it up, and after launch I can look after it for a small monthly fee or hand everything over to you." },
    { q: "What do you need from me to start?", a: "A short description of your business and what the bot should do. Links to bots or sites you like help, plus any texts, prices or documents it should use." },
    { q: "Can I change texts and prices later myself?", a: "Yes. Most projects include an admin panel where you edit prices, services and texts without a developer." }
  ],

  /* ---------- ПРОЕКТЫ ----------
     status: "soon" = карточка с меткой «In development»
             "live" = готовый проект, кнопки ссылок активны
     type:   "bot" | "miniapp" | "ai" | "web"   (для фильтра и превью)
     short:  короткое имя для макета телефона
     links:  demo (бот или сайт), video (Loom/YouTube), github. Пустая ссылка = кнопка скрыта
     cover:  путь к скриншоту, например "img/bookme.png". Пусто = рисованный макет
     result: итог проекта. Пишите только реальные цифры, иначе оставьте пустым.
     preview: сообщения для макета чата (bot/user) или блоки для макета сайта
  */
  projects: [
    {
      id: "bookme",
      status: "live",
      type: "bot",
      typeLabel: "Telegram Bot",
      title: "BookMe: booking bot for salons",
      short: "BookMe",
      tagline: "Clients book a visit in about 30 seconds. The owner runs the whole schedule from Telegram.",
      problem: "Small salons take bookings through DMs and phone calls. Slots get double-booked, clients forget their visits, and the owner spends the day answering messages.",
      solution: [
        "Clients pick a service, a specialist (or anyone free) and a time slot with buttons",
        "Each slot is checked again right before saving, so two people can't book the same time",
        "Reminders go out 24 hours and 2 hours before the visit, with a one-tap cancel",
        "Owner panel in Telegram: today's schedule, cancellations that notify the client, stats and broadcasts",
        "All bookings export to CSV for Excel or Google Sheets",
        "End-to-end tests cover every dialog"
      ],
      stack: ["Python", "aiogram 3", "SQLAlchemy 2", "PostgreSQL / SQLite", "Docker", "pytest"],
      result: "",
      links: { demo: "https://t.me/bookmedemobot", video: "", github: "https://github.com/Akalioks/bookme-bot" },
      cover: "",
      preview: [
        { from: "bot", text: "What would you like to book?", buttons: ["✂️ Haircut", "🧔 Beard", "💈 Both"] },
        { from: "user", text: "✂️ Haircut" },
        { from: "bot", text: "🕐 Free time tomorrow:", buttons: ["12:00", "14:00", "16:30"] },
        { from: "user", text: "14:00" },
        { from: "bot", text: "✅ You're booked! I'll remind you 24 h and 2 h before." }
      ]
    },
    {
      id: "shopapp",
      status: "live",
      type: "miniapp",
      typeLabel: "Mini App",
      title: "ShopApp: online store inside Telegram",
      short: "ShopApp",
      tagline: "A full store with a catalog, cart and card payments that opens right in Telegram.",
      problem: "Shops that sell through Telegram and Instagram DMs have no catalog or cart. Every order is typed out by hand, and some get lost.",
      solution: [
        "Catalog with categories, search and product pages that follows the user's light or dark Telegram theme",
        "Checkout in a few taps: delivery options, a free-delivery threshold and saved contact details",
        "Card payments inside Telegram (Telegram Payments with Stripe) or pay on pickup",
        "Every request is checked against Telegram's signature, and prices are always recalculated on the server",
        "The owner gets each order in the chat and changes its status with one tap. The customer is notified automatically",
        "Prices and stock are edited in the app's Admin tab, no code needed"
      ],
      stack: ["Python", "aiogram 3", "aiohttp", "Telegram Mini Apps", "Telegram Payments", "JavaScript", "SQLAlchemy 2", "pytest"],
      result: "",
      links: { demo: "https://t.me/shopnordicbot", video: "", github: "https://github.com/Akalioks/shop-bot" },
      cover: "",
      preview: [
        { name: "Linen duvet", price: "€79" },
        { name: "Wool throw", price: "€64" },
        { name: "Oak board", price: "€39" },
        { name: "Mug", price: "€14.90" }
      ]
    },
    {
      id: "ai-assistant",
      status: "live",
      type: "ai",
      typeLabel: "AI Chatbot",
      title: "AI support assistant",
      short: "Support assistant",
      tagline: "Answers customer questions at any hour from the company's own documents, and passes the chat to a person when needed.",
      problem: "Support staff answer the same 20 questions every day, and customers wait hours for simple answers.",
      solution: [
        "Answers only from your price list, FAQ and policies. If the answer isn't there, it says so instead of making something up",
        "The owner adds or removes documents (.txt, .md, .pdf) right in Telegram",
        "Hands the chat to a live manager along with the conversation so far. The manager replies from Telegram",
        "Understands and replies in English, Russian and Estonian",
        "Switches to a backup model when the main one is overloaded, and has built-in usage limits",
        "Automated tests cover every dialog and the AI layer"
      ],
      stack: ["Python", "aiogram 3", "Google Gemini API", "Structured outputs", "SQLAlchemy 2", "Docker", "pytest"],
      result: "",
      links: { demo: "https://t.me/SmartSupport2026_bot", video: "", github: "https://github.com/Akalioks/support-bot" },
      cover: "",
      preview: [
        { from: "user", text: "Do you deliver to Tartu?" },
        { from: "bot", text: "Yes! Delivery to Tartu takes 1–2 days and costs €4.90. Free for orders over €50 🚚" },
        { from: "user", text: "Can I talk to a person?" },
        { from: "bot", text: "Of course, connecting you with a manager now 👤" }
      ]
    },
    {
      id: "leadcatcher",
      status: "live",
      type: "bot",
      typeLabel: "Telegram Bot",
      title: "LeadCatcher: lead qualification bot",
      short: "LeadCatcher",
      tagline: "Turns ad clicks into qualified leads and sends them to the sales team within seconds.",
      problem: "Ad clicks end up in DMs, managers ask the same questions by hand, and good leads go cold while nobody replies.",
      solution: [
        "A short questionnaire with buttons, input checks and one-tap phone sharing",
        "Each lead gets a score (hot, warm or cold) and a note of which ad campaign it came from",
        "Leads appear in the sales group. A manager claims one and marks it Contacted, Won or Lost",
        "An alert fires if a hot lead waits too long, and people who stopped halfway get a reminder",
        "Every lead is sent to Google Sheets or any CRM through signed webhooks, with retries if delivery fails",
        "Website forms feed into the same pipeline. Questions and scoring rules live in one file"
      ],
      stack: ["Python", "aiogram 3", "aiohttp", "SQLAlchemy 2", "Webhooks", "Google Sheets", "Docker", "pytest"],
      result: "",
      links: { demo: "https://t.me/SunBaySolarbot", video: "", github: "https://github.com/Akalioks/leadcatcher-bot" },
      cover: "",
      preview: [
        { from: "bot", text: "What is your average monthly electricity bill?", buttons: ["€50–150", "€150–300", "Over €300"] },
        { from: "user", text: "€150–300" },
        { from: "bot", text: "When would you like the panels installed?", buttons: ["Within a month", "This year"] },
        { from: "user", text: "Within a month" },
        { from: "bot", text: "🔥 Thank you! A specialist will call you within 15 minutes." }
      ]
    },
    {
      id: "landings",
      status: "live",
      type: "web",
      typeLabel: "Website",
      title: "Landing pages for local businesses",
      short: "Landing pages",
      tagline: "Fast, mobile-first pages that send every inquiry straight to the owner's Telegram.",
      problem: "Many small businesses have no website, or an old one that loads slowly on phones and brings in no inquiries.",
      solution: [
        "Three businesses, three designs: a dental clinic, a restaurant and an online course",
        "A booking form for each: service and time, table and guests, plan and level",
        "Every request goes to the owner's Telegram and Google Sheets through the LeadCatcher bot",
        "Built for phones first, with sticky call and booking buttons. Each page is about 10 KB of compressed HTML with self-hosted fonts",
        "SEO basics: meta tags, link previews and Schema.org data (Dentist, Restaurant, Course)",
        "Texts, prices and opening hours sit in one data file per site, so updates never touch the design"
      ],
      stack: ["Astro", "Tailwind CSS", "TypeScript", "Schema.org", "Caddy", "Telegram Bot API"],
      result: "",
      links: { demo: "https://landings.a-kalikas.duckdns.org/", video: "", github: "https://github.com/Akalioks/landings" },
      cover: "",
      preview: { url: "dental.a-kalikas.duckdns.org", variant: "landing" }
    },
    {
      id: "dashboard",
      status: "live",
      type: "web",
      typeLabel: "Web App",
      title: "Admin dashboard for the booking bot",
      short: "Admin dashboard",
      tagline: "A web panel where the owner sees bookings, clients and revenue from the bot, and edits prices.",
      problem: "The owner can't see the big picture: how many bookings came in, which services sell best and which clients stopped coming.",
      solution: [
        "Reads the bot's own database, so bookings, clients and prices are always current",
        "Key numbers compared with the previous period, a visits and revenue chart, revenue by service and staff load",
        "A busy-hours heatmap to plan shifts and quiet-hour discounts",
        "Bookings and clients with search and filters. Cancelling a booking notifies the client in Telegram",
        "Edit services, prices and staff, and the bot shows the changes right away",
        "Log in with Telegram. Demo visitors get their own private copy of sample data"
      ],
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "SQLite", "Telegram Login", "Docker"],
      result: "",
      links: { demo: "https://admin.a-kalikas.duckdns.org/", video: "", github: "https://github.com/Akalioks/admin-dashboard" },
      cover: "",
      preview: { url: "admin.a-kalikas.duckdns.org", variant: "dashboard" }
    }
  ]
};
