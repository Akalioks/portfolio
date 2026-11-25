# Portfolio — Aleks Kalikas

[Русская версия](README.ru.md) · **Live: [a-kalikas.duckdns.org](https://a-kalikas.duckdns.org/)**

My freelance portfolio: Telegram bots, Mini Apps, AI assistants and landing pages for small businesses.

A static site with no framework. All content is pre-rendered into `index.html`, so search engines, link previews (Telegram, LinkedIn, Upwork, Slack, X) and visitors without JavaScript see the full page.

## Projects

| Project | What it is | Code |
|---|---|---|
| BookMe | Booking bot for salons | [bookme-bot](https://github.com/Akalioks/bookme-bot) |
| ShopApp | Online store as a Telegram Mini App | [shop-bot](https://github.com/Akalioks/shop-bot) |
| AI Support Assistant | Support bot on Google Gemini with human hand-off | [support-bot](https://github.com/Akalioks/support-bot) |
| LeadCatcher | Lead qualification bot with CRM / Google Sheets webhooks | [leadcatcher-bot](https://github.com/Akalioks/leadcatcher-bot) |
| Landing pages | Three Astro sites for local businesses | [landings](https://github.com/Akalioks/landings) |
| Bot Admin Dashboard | Next.js dashboard for the booking bot | [admin-dashboard](https://github.com/Akalioks/admin-dashboard) |

## How it's built

`index.html` is generated from `template.html` and `config.js` (Node.js only, no packages):

```
node build.js
```

| File | Contents |
|---|---|
| `config.js` | All content: contacts, services, prices, FAQ, projects, SEO |
| `template.html` | Page structure and meta tags |
| `build.js` | Renders `index.html` |
| `styles.css` | Design, light and dark themes |
| `app.js` | Interactivity only: filters, project modal, menu, theme |
| `og-image.png`, `og/og-image.html` | Link preview image and its source |
| `Aleks-Kalikas-Resume.pdf`, `resume/` | Resume linked from the site, and its Word source |
| `img/` | Profile photo and project screenshots |

## License

[MIT](LICENSE)
