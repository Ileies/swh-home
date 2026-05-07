# swh-home

Statische Marketing-Website für SmartWorkHub. SvelteKit + adapter-static + DaisyUI v4 + Tailwind v3. Kein Server, kein API, vollständig prerendered.

## Befehle

```bash
bun install          # Dependencies installieren
bun run dev          # Dev-Server :5173
bun run build        # Produktions-Build → build/
bun run preview      # Build lokal vorschauen
bun run check        # Type-check (svelte-check + tsc)
bun run lint         # Prettier + ESLint
bun run format       # Auto-Format
```

## Architektur

```
src/
├── routes/
│   ├── +layout.svelte     # Header, Footer, alle SEO-Meta-Tags (OG, Twitter, canonical)
│   ├── +page.svelte       # Hauptseite: Section-Komposition + JSON-LD structured data
│   ├── privacy/           # Datenschutz
│   ├── terms/             # AGB
│   ├── imprint/           # Impressum
│   └── 404/               # 404-Fehlerseite
├── lib/
│   ├── cms.svelte.ts      # EINZIGE Content-Quelle (alle Texte, Links, Daten)
│   └── components/        # Reine Präsentationskomponenten, kein eigener Content
static/
├── favicon.png
├── robots.txt
└── sitemap.xml
```

## Content-Management-Prinzip

**`src/lib/cms.svelte.ts` ist die einzige Wahrheitsquelle für Inhalte.** Alle Komponenten lesen daraus via `import cms from '$lib/cms.svelte'`. Neue Texte, Links, Preise oder Abschnitte gehören ausschließlich in `cms.svelte.ts` - nie hart in Komponenten kodieren.

Ausnahmen die direkt in Komponenten stehen (weil sie aus `$env/static/public` kommen):

- `PUBLIC_PROJECT_TITLE` - in Header, Footer, Layout
- `PUBLIC_CONTACT_MAIL` - in Footer
- `PUBLIC_ORIGIN`, `PUBLIC_PROJECT_DESCRIPTION`, `PUBLIC_KEYWORDS` - in Layout für SEO

## Umgebungsvariablen

In `.env` (zur Build-Zeit eingebettet, kein Server nötig):

```
PUBLIC_PROJECT_TITLE=SmartWorkHub
PUBLIC_CONTACT_MAIL=smartworkhub@offlimits-it.com
PUBLIC_PROJECT_DESCRIPTION="..."
PUBLIC_ORIGIN="https://smartworkhub.de"
PUBLIC_KEYWORDS="..."
```

Alle Variablen sind `PUBLIC_*` - sie landen im Client-Bundle und dürfen keine Secrets enthalten.

## Themes

DaisyUI v4, konfiguriert in `tailwind.config.js`:

- Default-Theme: `winter` (Hell)
- Zweites Theme: `dark`

Theme-Switcher war in `Header.svelte` vorhanden, wurde entfernt (kein localStorage-Persist, unüblich auf Marketing-Seiten).

## Code-Konventionen

- **Svelte 5 Runes** (`$state`, `$derived`, `$props`) - kein Svelte 4 Store-Pattern
- **Icons:** Lucide Svelte - in Komponenten direkt importiert oder via `cms.svelte.ts` als Icon-Referenz übergeben. Das korrekte Svelte-5-Pattern für dynamische Icons:
  ```svelte
  {@const Icon = item.icon}
  <Icon class="h-8 w-8 text-primary" />
  ```
  `<svelte:component this={item.icon}>` ist in Svelte 5 deprecated - nicht verwenden.
- **Keine Server-Logik** - adapter-static, alles wird zur Build-Zeit gerendert. Kein `+page.server.ts`, kein `+server.ts`.
- **Tailwind-Klassen** - DaisyUI-Komponenten-Klassen (`btn`, `card`, `hero`, etc.) bevorzugen, Tailwind-Utilities nur für Spacing/Layout.
- **Sprache:** Variablen/Funktionen/Typen auf Englisch. User-facing Text auf Deutsch (formelles "Sie").

## Bekannte Bugs / Gotchas

- **`MobileNavigation.svelte` iteriert `cms.headerLinks` falsch** - `headerLinks` ist ein Plain-Object `{ href: text }`, aber das Template nutzt `{link.href}` und `{link.text}` als wären es Array-Objekte. Muss auf `Object.entries()` umgestellt werden (ist Teil der offenen To-Dos).

- **`og-image.png` fehlt** - `+layout.svelte` referenziert `${PUBLIC_ORIGIN}/og-image.png`, aber die Datei existiert nicht in `static/`. OG-Share-Previews sind damit broken. Datei muss noch erstellt werden (1200×630px).

- **Scroll-Offset für Fixed-Header** - Hash-Links wie `/#features` scrollen hinter den Fixed-Header (ca. 72px). Fix: `scroll-padding-top` auf `<html>` setzen.

- **`cms.pricing.plans`** (Starter/Professional/Enterprise-Karten) ist in `cms.svelte.ts` definiert, wird aber von `Pricing.svelte` gar nicht gerendert - toter Code. Aufräumen oder entfernen.

- **`Pricing.svelte` FAQ-Section** ist auskommentiert (`<!--...-->`). Einkommentieren steht noch aus.

## Deployment

Statische Build-Ausgabe in `build/`. Deployment auf den Server:

```bash
bun run build
rsync -avz --delete build/ root@offlimits-it.biz:/var/www/vhosts/smartworkhub.de/httpdocs/
```

nginx liefert `build/` als statische Seite aus. Kein Node/Bun-Prozess läuft auf dem Server.

## Verhältnis zum Hauptprojekt

- **Hauptapplikation:** `../smartworkhub/` - Multi-Tenant SvelteKit + Bun + SQLite + OpenAI
- **Demo-Tenant:** `demo.smartworkhub.de` - Instanz der Hauptapplikation mit `DEMO_MODE=true`, kein Login, rate-limited, keine DB-Persistenz
- **Diese Seite** verlinkt auf `demo.smartworkhub.de` als primären CTA
- Der Demo-Tenant setzt `X-Frame-Options: DENY` - IFrame-Embedding ist nicht möglich und nicht gewünscht. Immer `target="_blank"`.

## Offene To-Dos

Vollständige Liste mit Prioritäten und Implementierungsdetails: `MARKETING_TODOS.md`

Kurzübersicht nach Dringlichkeit:

**Block A - Sofort (reine Content-Fixes):**

- Modulzahl 27 → 40+ in `cms.ts`
- "NewFeatureBadge" aktualisieren
- "14-tägige Testphase" aus Pricing-Copy entfernen
- "Soon"-Badge in Privacy entfernen
- Hero-Text von "du" auf "Sie" umstellen

**Block B - Kern (Demo-Integration):**

- `DemoShowcase.svelte` - neue Section nach Hero mit `AnimatedChatPreview`
- `AnimatedChatPreview.svelte` - Desktop: Two-Panel mit Sidebar-Mock + Chat-Stream; Mobile: nur Chat-Bubbles
- Hero-CTAs umkehren: "Live Demo starten" primär, "Beratung" sekundär
- Demo-Link in Header, Mobile-Nav, CTA-Section

**Block C - Content-Qualität:**

- Description-Benefits-Texte überarbeiten (keine falschen Versprechen)
- Pricing-Aufräumen (toten Code, FAQ einkommentieren)
- Social-Proof-Minimal-Variante

**Block D - Cross-Repo:**

- Demo-Banner im `smartworkhub`-Repo: URL von `smartworkhub.de` auf direkten Booking-Link ändern

**Block E/F - Technisch / SEO:**

- `svelte:component` → Svelte-5-Pattern in Description, Privacy
- `MobileNavigation` Bug fixen
- `og-image.png` erstellen und in `static/` ablegen
- Scroll-Offset für Fixed-Header
- Range-Slider Touch-Fix für iOS

## Docs Reference

- `MARKETING_TODOS.md` - vollständige To-Do-Liste mit Entscheidungslog
- `../smartworkhub/CLAUDE.md` - CLAUDE.md der Hauptapplikation
- `../smartworkhub/static/docs/ADMIN_DOKUMENTATION.md` - Deployment-Details, SSH, systemd
