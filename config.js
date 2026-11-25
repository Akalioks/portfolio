/* =====================================================================
   ВСЁ СОДЕРЖИМОЕ САЙТА — ЗДЕСЬ.
   Меняйте тексты, ссылки и проекты в этом файле. HTML трогать не нужно.
   После правок запустите:  node build.js  (пересоберёт index.html)
   ===================================================================== */

window.SITE = {
  // ---------- О вас ----------
  name: "Aleks Kalikas",
  initials: "AK",
  role: "Telegram Bot & Mini App Developer",
  headline: "Telegram bots and AI assistants that take bookings, sell products and answer customers 24/7.",
  sub: "I help small businesses automate sales and support inside Telegram — plus fast landing pages that send every lead straight to your phone.",
  location: "Estonia, EU · GMT+2",
  languages: "English · Russian",
  responseTime: "Replies within a few hours",
  available: true, // false — скрыть зелёный бейдж «Available»

  // ---------- SEO и превью ссылок (Google, Telegram, LinkedIn, Upwork, Slack) ----------
  siteUrl: "https://a-kalikas.duckdns.org/", // адрес сайта; если купите домен — поменяйте здесь
  description: "Freelance Telegram bot developer: booking and lead bots, Telegram Mini App stores, AI support assistants and landing pages for small businesses. Live demos, fixed prices.",
  ogImage: "og-image.png", // картинка 1200×630 для превью ссылки

  // ---------- Контакты (замените на свои) ----------
  contacts: {
    telegram: "https://t.me/StoneKamen7",
    telegramLabel: "@StoneKamen7",
    email: "akalioks24@gmail.com",
    upwork: "",   // ссылка на профиль Upwork, пусто = кнопка скрыта
    fiverr: "",   // ссылка на профиль Fiverr
    github: "https://github.com/Akalioks"    // ссылка на GitHub
  },

  // ---------- Услуги ----------
  services: [
    { icon: "bot",  title: "Telegram Bots",       text: "Booking, ordering, lead capture, notifications and admin panels — all inside Telegram." },
    { icon: "app",  title: "Telegram Mini Apps",  text: "Full web apps that open in Telegram: stores, catalogs, dashboards, with payments." },
    { icon: "ai",   title: "AI Chatbots",         text: "Assistants that answer from your own documents and hand off to a human when needed." },
    { icon: "web",  title: "Landing Pages",       text: "Fast, mobile-first sites with forms that deliver inquiries to your Telegram." }
  ],

  // ---------- Как я работаю ----------
  process: [
    { title: "Free brief",        text: "A short call or chat to understand your business and what the bot or site must do." },
    { title: "Fixed price & plan", text: "You get a clear scope, timeline and fixed price before any work starts." },
    { title: "Build with demos",  text: "You can test a live demo every few days and give feedback as we go." },
    { title: "Launch & support",  text: "I deploy everything and give 14 days of free fixes after launch." }
  ],

  // ---------- Пакеты и цены (поменяйте под себя) ----------
  packages: [
    { name: "Starter Bot",  price: "from $150", features: ["Menu & FAQ", "Contact / order form", "Admin notifications", "Deploy included"] },
    { name: "Business Bot", price: "from $400", features: ["Bookings or orders", "Database & admin panel", "Payments", "Reminders & broadcasts"], featured: true },
    { name: "AI Assistant", price: "from $600", features: ["Answers from your docs", "Human hand-off", "Multilingual", "Usage dashboard"] },
    { name: "Landing Page", price: "from $250", features: ["Mobile-first design", "Form → Telegram", "SEO basics", "Hosting setup"] }
  ],

  // ---------- FAQ ----------
  faq: [
    { q: "Do I own the code?", a: "Yes. You get the full source code and all accounts are registered to you." },
    { q: "Where will the bot be hosted?", a: "On a reliable cloud server. I set it up and can maintain it for a small monthly fee, or hand it over to you." },
    { q: "What do you need from me to start?", a: "A short description of your business, examples you like, and any texts, prices or documents the bot should use." },
    { q: "Can I change texts and prices myself later?", a: "Yes — most projects include an admin panel so you don't need a developer for everyday changes." }
  ],

  /* ---------- ПРОЕКТЫ ----------
     status: "soon" — карточка с меткой «In development»
             "live" — готовый проект, кнопки ссылок активны
     type:   "bot" | "miniapp" | "ai" | "web"   (для фильтра и превью)
     links:  demo (бот или сайт), video (Loom/YouTube), github — пусто = «скоро»
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
      title: "BookMe — Booking Bot",
      tagline: "Clients book an appointment in 30 seconds; the owner manages everything from Telegram.",
      problem: "Small salons take bookings through DMs and phone calls — slots get double-booked, clients forget visits, and the owner answers messages all day.",
      solution: [
        "Pick a service, a master (or 'any available') and a free time slot with buttons",
        "Double bookings are impossible — every slot is re-checked before saving",
        "Automatic reminders 24 h and 2 h before the visit, with a one-tap cancel",
        "Owner panel in Telegram: daily schedule, cancellations with client notice, stats, broadcasts",
        "Export of all bookings to CSV for Excel or Google Sheets",
        "Covered by end-to-end tests of every dialog"
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
      title: "ShopApp — Store in Telegram",
      tagline: "A complete online store that opens right inside Telegram, with cart and payments.",
      problem: "Shops that sell through Telegram and Instagram DMs have no catalog or cart — every order is typed by hand and many get lost.",
      solution: [
        "Catalog with categories, search and product cards; follows the user's Telegram light/dark theme",
        "Cart and checkout in a few taps: delivery options, automatic free-delivery threshold, saved contact details",
        "Card payments inside Telegram (Telegram Payments + Stripe) or pay on pickup",
        "Every request is verified with Telegram's signature; prices are always recalculated on the server",
        "Owner gets each order in the chat and updates its status with one tap — the customer is notified",
        "Prices and stock editable right in the app's Admin tab, no code needed"
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
      title: "AI Support Assistant",
      tagline: "Answers customer questions 24/7 from the company's own documents and hands off to a human when needed.",
      problem: "Support teams answer the same 20 questions every day, and customers wait hours for simple answers.",
      solution: [
        "Answers only from your price list, FAQ and policies — says 'I don't know' instead of inventing",
        "Owner adds or removes documents (.txt, .md, .pdf) right in Telegram",
        "Hands the chat to a live manager with the conversation so far; the manager replies from Telegram",
        "Understands and replies in English, Russian and Estonian",
        "Automatic fallback to a backup model when the main one is overloaded; built-in usage limits",
        "Covered by automated tests of every dialog and of the AI layer"
      ],
      stack: ["Python", "aiogram 3", "Google Gemini API", "Structured outputs", "SQLAlchemy 2", "Docker", "pytest"],
      result: "",
      links: { demo: "https://t.me/SmartSupport2026_bot", video: "", github: "https://github.com/Akalioks/support-bot" },
      cover: "",
      preview: [
        { from: "user", text: "Do you deliver to Tartu?" },
        { from: "bot", text: "Yes! Delivery to Tartu takes 1–2 days and costs €4.90. Free for orders over €50 🚚" },
        { from: "user", text: "Can I talk to a person?" },
        { from: "bot", text: "Of course — connecting you with a manager now 👤" }
      ]
    },
    {
      id: "leadcatcher",
      status: "live",
      type: "bot",
      typeLabel: "Telegram Bot",
      title: "LeadCatcher — Lead Bot",
      tagline: "Turns ad traffic into qualified leads and delivers them to the sales team in seconds.",
      problem: "Ad clicks end up in DMs, managers ask the same questions by hand, and hot leads go cold while nobody answers.",
      solution: [
        "Short questionnaire with buttons, answer validation and one-tap phone sharing",
        "Automatic lead scoring: hot / warm / cold, with the ad campaign tracked from the link",
        "Lead card in the sales group: one manager takes it, then Contacted / Won / Lost",
        "Alert when a hot lead waits too long; a friendly reminder to people who stopped half-way",
        "Every lead goes to Google Sheets or any CRM via signed webhooks, with automatic retries",
        "Website forms feed the same pipeline; questions and scores are edited in one file"
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
      title: "Landing Pages for Local Business",
      tagline: "Fast, mobile-first landing pages that send every inquiry straight to the owner's Telegram.",
      problem: "Many small businesses have no website, or an old one that loads slowly on phones and doesn't bring inquiries.",
      solution: [
        "Three niches, three styles: a dental clinic, a restaurant and an online course",
        "Booking forms built for each niche: service and time, table and guests, plan and level",
        "Every request lands in the owner's Telegram and Google Sheets via my LeadCatcher bot",
        "Mobile-first with sticky call / book buttons; about 10 KB of compressed HTML per page, self-hosted fonts",
        "SEO basics: meta tags, social previews and Schema.org data (Dentist, Restaurant, Course)",
        "All texts, prices and opening hours in one data file per site, no need to touch the design"
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
      title: "Bot Admin Dashboard",
      tagline: "A web panel where the owner sees bookings, clients and revenue from their Telegram bot and edits prices.",
      problem: "Owners can't see the big picture: how many bookings came in, which services sell best, which clients stopped coming.",
      solution: [
        "Works on the bot's own database: every booking, client and price, always up to date",
        "KPIs with period-over-period change, visits and revenue chart, revenue by service, staff load",
        "Busy-hours heatmap to plan shifts and discounts for quiet hours",
        "Bookings and clients with search and filters; cancelling a booking notifies the client in Telegram",
        "Edit services, prices and staff: the bot shows the changes instantly",
        "Secure login with Telegram; demo visitors get their own private copy of sample data"
      ],
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "SQLite", "Telegram Login", "Docker"],
      result: "",
      links: { demo: "https://admin.a-kalikas.duckdns.org/", video: "", github: "https://github.com/Akalioks/admin-dashboard" },
      cover: "",
      preview: { url: "admin.a-kalikas.duckdns.org", variant: "dashboard" }
    }
  ]
};
