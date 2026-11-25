#!/usr/bin/env node
/* Builds index.html from template.html + config.js.
   All text is written straight into the HTML, so search engines, link previews
   and visitors with slow connections see the full page without running JavaScript.

   Run after every change to config.js or template.html:
     node build.js
   No dependencies — only Node.js. */
"use strict";
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = __dirname;
var sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, "config.js"), "utf8"), sandbox, { filename: "config.js" });
var S = sandbox.window.SITE;
if (!S) throw new Error("config.js did not define window.SITE");

var esc = function (v) {
  return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
};

/* ---------- Icons ---------- */
var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
var ICONS = {
  bot: '<svg viewBox="0 0 24 24" ' + P + '><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9.5 17h5"/></svg>',
  app: '<svg viewBox="0 0 24 24" ' + P + '><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 6h4M9 11h6M9 15h4"/></svg>',
  ai: '<svg viewBox="0 0 24 24" ' + P + '><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
  web: '<svg viewBox="0 0 24 24" ' + P + '><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M6 6.5h.01M9 6.5h.01"/></svg>',
  send: '<svg viewBox="0 0 24 24" ' + P + '><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" ' + P + '><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" ' + P + '><path d="M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" ' + P + '><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>',
  clock: '<svg viewBox="0 0 24 24" ' + P + '><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" ' + P + '><path d="M20 6L9 17l-5-5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" ' + P + '><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" ' + P + '><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4z"/></svg>',
  code: '<svg viewBox="0 0 24 24" ' + P + '><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
  ext: '<svg viewBox="0 0 24 24" ' + P + '><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>',
  close: '<svg viewBox="0 0 24 24" ' + P + '><path d="M18 6L6 18M6 6l12 12"/></svg>',
  menu: '<svg viewBox="0 0 24 24" ' + P + '><path d="M3 6h18M3 12h18M3 18h18"/></svg>'
};

/* ---------- Mockups ---------- */
function phone(p) {
  var isAi = p.type === "ai";
  var head = '<div class="phone-bar"><div class="phone-avatar' + (isAi ? " ai" : "") + '">' +
    (isAi ? "AI" : esc(p.title.charAt(0))) + '</div><div class="phone-name">' +
    esc(p.title.split(" — ")[0]) + "<small>" + (p.type === "miniapp" ? "mini app" : "bot") + "</small></div></div>";
  var body;
  if (p.type === "miniapp") {
    body = '<div class="shop">' + (p.preview || []).map(function (it) {
      return '<div class="shop-item"><div class="shop-img"></div><b>' + esc(it.name) + "</b><span>" + esc(it.price) + "</span></div>";
    }).join("") + '<div class="shop-cta">View cart · 2 items</div></div>';
  } else {
    body = '<div class="chat">' + (p.preview || []).map(function (m) {
      var kb = m.buttons ? '<div class="kb">' + m.buttons.map(function (b) { return "<span>" + esc(b) + "</span>"; }).join("") + "</div>" : "";
      return '<div class="msg ' + (m.from === "user" ? "user" : "bot") + '">' + esc(m.text) + kb + "</div>";
    }).join("") + "</div>";
  }
  return '<div class="phone"><div class="phone-screen">' + head + body + "</div></div>";
}

function browser(p) {
  var pv = p.preview || {};
  var body = pv.variant === "dashboard"
    ? '<div class="d-wrap"><div class="d-side"></div><div><div class="d-stats"><div></div><div></div><div></div></div>' +
      '<div class="d-chart">' + [40, 65, 50, 80, 58, 92, 74].map(function (h) { return '<span style="height:' + h + '%"></span>'; }).join("") + "</div></div></div>"
    : '<div class="l-hero"><div><div class="bar h"></div><div class="bar" style="width:80%"></div><div class="bar" style="width:65%"></div><div class="bar a"></div></div><div class="l-img"></div></div>' +
      '<div class="l-row"><div></div><div></div><div></div></div>';
  return '<div class="browser"><div class="browser-bar"><i></i><i></i><i></i><span class="browser-url">' + esc(pv.url || "") + '</span></div><div class="browser-body">' + body + "</div></div>";
}

function visual(p) {
  if (p.cover) return '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy">';
  return p.type === "web" ? browser(p) : phone(p);
}

function statusBadge(p) {
  var live = p.status === "live";
  return '<span class="tag' + (p.type === "ai" ? " ai" : "") + '">' + esc(p.typeLabel) + "</span>" +
    '<span class="status' + (live ? " live" : "") + '">' + (live ? "Live demo" : "In development") + "</span>";
}

function chips(list) {
  return '<div class="chips">' + list.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>";
}

/* ---------- Sections ---------- */
var C = S.contacts || {};

var heroProject = S.projects.filter(function (p) { return p.type === "bot" || p.type === "ai"; })[0];

var FILTERS = [
  { key: "all", label: "All" },
  { key: "bot", label: "Telegram Bots" },
  { key: "miniapp", label: "Mini Apps" },
  { key: "ai", label: "AI" },
  { key: "web", label: "Websites" }
].filter(function (f) { return f.key === "all" || S.projects.some(function (p) { return p.type === f.key; }); });

function linkBtn(url, label, icon, primary) {
  var ok = !!url;
  return '<a class="btn ' + (primary ? "btn-primary" : "btn-ghost") + ' btn-sm"' +
    (ok ? ' href="' + esc(url) + '" target="_blank" rel="noopener"' : ' aria-disabled="true"') + '><span class="ico">' + ICONS[icon] + "</span>" +
    esc(label) + (ok ? "" : " · soon") + "</a>";
}

function caseStudy(p) {
  var live = p.status === "live", L = p.links || {};
  return '<div data-case="' + esc(p.id) + '">' +
    '<div class="project-top" style="justify-content:flex-start;gap:12px">' + statusBadge(p) + "</div>" +
    "<h2>" + esc(p.title) + '</h2><p class="lead">' + esc(p.tagline) + "</p>" +
    '<div class="case-grid"><div>' +
      '<div class="case-block"><h4>The problem</h4><p>' + esc(p.problem) + "</p></div>" +
      '<div class="case-block"><h4>The solution</h4><ul>' + p.solution.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="case-block"><h4>Tech stack</h4>' + chips(p.stack) + "</div>" +
      (p.result ? '<div class="case-block"><h4>Result</h4><p>' + esc(p.result) + "</p></div>" : "") +
      '<div class="case-links">' + linkBtn(L.demo, p.type === "web" ? "Open site" : "Try the demo", p.type === "web" ? "ext" : "send", true) +
        linkBtn(L.video, "Watch video", "play") + linkBtn(L.github, "Source code", "code") + "</div>" +
      (live ? "" : '<p class="note">This project is in development — a live demo and video walkthrough are coming soon.</p>') +
    '</div><div class="case-visual' + (p.type === "web" ? " case-browser" : "") + '">' + visual(p) + "</div></div></div>";
}

var contactButtons = [];
if (C.telegram) contactButtons.push('<a class="btn btn-primary" href="' + esc(C.telegram) + '" target="_blank" rel="noopener"><span class="ico">' + ICONS.send + "</span>" + esc(C.telegramLabel || "Telegram") + "</a>");
if (C.email) contactButtons.push('<a class="btn btn-ghost" href="mailto:' + esc(C.email) + '"><span class="ico">' + ICONS.mail + "</span>" + esc(C.email) + "</a>");
[["upwork", "Upwork"], ["fiverr", "Fiverr"], ["github", "GitHub"]].forEach(function (x) {
  if (C[x[0]]) contactButtons.push('<a class="btn btn-ghost" href="' + esc(C[x[0]]) + '" target="_blank" rel="noopener">' + x[1] + ' <span class="ico">' + ICONS.ext + "</span></a>");
});

/* ---------- SEO / social previews ---------- */
var siteUrl = S.siteUrl || "";
var absolute = function (u) {
  if (!u || /^https?:\/\//.test(u) || !siteUrl) return u || "";
  return siteUrl.replace(/\/+$/, "") + "/" + u.replace(/^\/+/, "");
};
var pageTitle = S.name + " — " + S.role;
var description = S.description || S.sub;

var VALUES = {
  pageTitle: esc(pageTitle),
  description: esc(description),
  siteUrl: esc(siteUrl),
  ogImage: esc(absolute(S.ogImage)),
  ogImageAlt: esc(S.name + " — " + S.role),
  name: esc(S.name),
  initials: esc(S.initials),
  role: esc(S.role),
  headline: esc(S.headline),
  sub: esc(S.sub),
  location: esc(S.location),
  languages: esc(S.languages),
  responseTime: esc(S.responseTime),
  hireHref: esc(C.telegram || "#contact"),
  year: String(new Date().getFullYear()),
  availPill: S.available ? '<span class="pill" id="availPill"><span class="dot"></span>Available for new projects</span>' : "",
  heroVisual: heroProject ? phone(heroProject) : "",
  services: S.services.map(function (s) {
    return '<div class="card"><div class="service-icon ' + esc(s.icon) + '">' + (ICONS[s.icon] || "") + "</div><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>";
  }).join("\n          "),
  filters: FILTERS.map(function (f, i) {
    return '<button class="filter" role="tab" data-filter="' + f.key + '" aria-selected="' + (i === 0) + '">' + esc(f.label) + "</button>";
  }).join(""),
  projects: S.projects.map(function (p) {
    return '<button class="project" data-id="' + esc(p.id) + '" data-type="' + esc(p.type) + '">' +
      '<div class="project-cover t-' + esc(p.type) + '">' + visual(p) + "</div>" +
      '<div class="project-body"><div class="project-top">' + statusBadge(p) + "</div>" +
      "<h3>" + esc(p.title) + "</h3><p>" + esc(p.tagline) + "</p>" +
      chips(p.stack.slice(0, 4)) +
      '<span class="project-link">View case study <span class="ico">' + ICONS.arrow + "</span></span></div></button>";
  }).join("\n          "),
  cases: S.projects.map(caseStudy).join("\n    "),
  process: S.process.map(function (s) {
    return "<li><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></li>";
  }).join("\n          "),
  pricing: S.packages.map(function (k) {
    return '<div class="card price' + (k.featured ? " featured" : "") + '"><h3>' + esc(k.name) + '</h3><div class="price-amount">' + esc(k.price) + "</div><ul>" +
      k.features.map(function (f) { return '<li><span class="ico">' + ICONS.check + "</span>" + esc(f) + "</li>"; }).join("") +
      '</ul><a class="btn ' + (k.featured ? "btn-primary" : "btn-ghost") + ' btn-sm" href="#contact">Get a quote</a></div>';
  }).join("\n          "),
  faq: S.faq.map(function (f) {
    return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>";
  }).join("\n          "),
  contactButtons: contactButtons.join("\n            ")
};

/* ---------- Render ---------- */
var template = fs.readFileSync(path.join(ROOT, "template.html"), "utf8");
var html = template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, function (_, key) {
  if (key.indexOf("icon.") === 0) {
    var ic = ICONS[key.slice(5)];
    if (!ic) throw new Error("Unknown icon in template.html: " + key);
    return ic;
  }
  if (!(key in VALUES)) throw new Error("Unknown placeholder in template.html: {{" + key + "}}");
  return VALUES[key];
});

html = html.replace("<!doctype html>", "<!doctype html>\n<!-- Generated by build.js from template.html + config.js. Do not edit by hand: run `node build.js`. -->");
fs.writeFileSync(path.join(ROOT, "index.html"), html);
console.log("index.html built (" + Math.round(Buffer.byteLength(html) / 1024) + " KB)");
