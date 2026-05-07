# swh-home: Marketing-Seite - To-Do & Planungsdokument

## Entscheidungslog

| Thema | Entscheidung |
|---|---|
| Demo-Integration | Neuer Tab (`target="_blank"`), kein IFrame (SWH setzt `X-Frame-Options: DENY`) |
| Produkt-Preview | Animierter Mock-Chat, kein Screenshot |
| Demo-Limit kommunizieren | Nein - kein Hinweis auf 15 Nachrichten |
| Preise öffentlich | Ja, aktuell so belassen |
| Social Proof | Ehrliche, anonyme Variante - noch kein vollständiger Abschnitt möglich |
| Conversion-Pfad nach Demo | Banner in Demo zeigt direkt auf Booking-Link, nicht auf Marketing-Homepage |
| Theme-Switcher | Entfernen |
| Demo-Onboarding | Zurückgestellt - wird nächste Woche als globales Feature aller Tenants eingeführt |

---

## Block A: Kritische Korrekturen (vor jedem Launch)

- [ ] **`cms.ts`: Modulzahl korrigieren** - `stats[0].metric` von `'27'` → `'40+'`; `modules.discoverAll` von "27 KI-Module" → "40 KI-Module"
- [ ] **`NewFeatureBadge.svelte`: Inhalt aktualisieren** - "Neu: KI-powered Workflow Automation" ist veraltet; ersetzen durch "Neu: Live Demo verfügbar - jetzt ausprobieren"
- [ ] **`cms.ts`: Testzeitraum-Kopie entfernen** - `contact.description` sagt "14-tägige kostenlose Testphase"; ersetzen durch "Erleben Sie die Plattform live - ohne Registrierung, ohne Kreditkarte"
- [ ] **`Privacy.svelte`: "Soon"-Badge entfernen** - On-Premises ist verfügbar; Badge täuscht Besucher
- [ ] **Ton-Konsistenz** - Hero-Heading nutzt "du" (`deiner Mitarbeiter`), alle anderen Sections formal "Sie"; Hero-Text auf "Sie" umstellen
- [ ] **`Header.svelte`: Theme-Switcher entfernen** - kaputt (kein localStorage, kein initialer State) und auf Enterprise-Marketing-Seiten unüblich

---

## Block B: Demo-CTA-Integration (Kern-Feature)

### `cms.ts`
- [ ] `demoUrl: 'https://demo.smartworkhub.de'` als Konstante hinzufügen
- [ ] `headerLinks` um Demo-Eintrag ergänzen: `'https://demo.smartworkhub.de': 'Live Demo'` (mit `target="_blank"`)

### `Header.svelte`
- [ ] "Live Demo" als prominenten zweiten Button neben "Kostenlose Beratung" einfügen (btn-outline oder btn-secondary)
- [ ] Demo-Link öffnet `target="_blank"` - nicht als SPA-Navigation

### `MobileNavigation.svelte`
- [ ] Demo-Link auch im Mobile-Menu ergänzen

### `Hero.svelte`
- [ ] CTA-Hierarchie umkehren: "Live Demo starten" (btn-primary, groß) als erster Button, "Kostenlose Beratung" (btn-outline) als zweiter
- [ ] Subtext unter den Buttons: "Keine Registrierung · Keine Kreditkarte"

### Neue `DemoShowcase.svelte`-Section
Platzierung: direkt nach Hero, vor `Description` - das ist der erste Scroll-Stop.

Aufbau:
- Überschrift: "Überzeugen Sie sich selbst - live, in Echtzeit"
- `AnimatedChatPreview`-Komponente (siehe unten)
- Primärer CTA-Button: "Live Demo starten →" → `demo.smartworkhub.de` in `target="_blank"`
- Subtext: "Keine Registrierung · Keine Kreditkarte"
- Mobile: CTA-Button und Subtext full-width, Callout-Labels als einfache Icon-Text-Zeile

### Neue `AnimatedChatPreview.svelte`-Komponente

**Desktop (≥ md):** Two-Panel-Layout
- Linke Spalte: Schmale Sidebar-Simulation mit 3-4 Modul-Icons, eines davon highlighted
- Rechte Spalte: Chat-Interface mit Browser-Chrome-Andeutung (3 Punkte oben, URL-Bar "demo.smartworkhub.de")
- Animation-Sequenz (Loop, 3 Use-Cases):
  1. Modul-Icon highlighted (z.B. "Meeting-Protokoll")
  2. User-Bubble erscheint mit Tipp-Cursor
  3. Lade-Indikator (3 Punkte)
  4. KI-Antwort streamt rein, Wort für Wort
  5. 3s Pause → sanfter Fade → nächster Use-Case

**Mobile (< md):** Nur Chat-Bubbles, full-width
- Kein Sidebar-Chrome, kein Browser-Rahmen
- Kleines Badge oben mit Modulname ("Meeting-Protokoll")
- User-Bubble rechts, KI-Bubble links - wie Messenger
- Gleicher Streaming-Effekt, nur 1 Use-Case im Loop (kein Wechsel - lenkt auf kleinem Screen ab)

**Technisches:**
- Typing-Effekt: `setInterval` über String-Array
- Streaming-Effekt: chunk-weise String-Interpolation mit `setTimeout`
- `IntersectionObserver`: Animation startet erst wenn Section sichtbar - kein Batterie-Drain im Off-Screen
- `prefers-reduced-motion`: zeigt statisch den Endzustand des ersten Use-Cases
- Farben/Tokens: 1:1 aus DaisyUI `primary`/`base` - wiedererkennbar wenn man danach die echte Demo öffnet

**Demo-Inhalte (3 Use-Cases, alle auf Deutsch, realistisch):**

1. **Meeting-Protokoll** (Modul: `meetingprotokoll`)
   - User: "Erstelle ein Protokoll: Teams-Meeting Projektstand Website-Relaunch, 45 Min, Teilnehmer: Anna, Ben, Clara. Ergebnis: Launch verschoben auf 15. Juni, Ben übernimmt Landingpage."
   - KI: "**Meeting-Protokoll**\n📅 Datum: [heutiges Datum]\n👥 Teilnehmer: Anna, Ben, Clara\n\n**Beschlüsse:**\n- Launch-Termin verschoben auf 15. Juni\n- Ben verantwortlich für Landingpage-Umsetzung\n\n**Nächste Schritte:**\n..."

2. **E-Mail** (Modul: `email`)
   - User: "Schreibe eine professionelle Absage an Bewerber Max Müller für die Stelle als Projektleiter. Freundlich, mit Dank für das Interesse."
   - KI: "Betreff: Ihre Bewerbung als Projektleiter\n\nSehr geehrter Herr Müller,\n\nvielen Dank für Ihr Interesse an einer Tätigkeit in unserem Unternehmen und die Zeit, die Sie in Ihre Bewerbung investiert haben..."

3. **Übersetzung** (Modul: `uebersetzung`)
   - User: "Übersetze ins Englische, professionell: 'Wir freuen uns, Ihnen mitteilen zu können, dass Ihr Angebot angenommen wurde. Die Vertragsunterlagen erhalten Sie in Kürze.'"
   - KI: "We are pleased to inform you that your offer has been accepted. You will receive the contract documents shortly.\n\n*Übersetzungshinweis: 'in Kürze' wurde als 'shortly' übersetzt - alternativ auch 'in the near future' für formellere Kontexte.*"

### `CTA.svelte` (bestehende Section)
- [ ] Zweiten Button "Live Demo starten" neben "Termin vereinbaren" hinzufügen
- [ ] Demo als sekundäre Option - Beratung bleibt primär in dieser Section (umgekehrt zu Hero)

---

## Block C: Content-Qualität

- [ ] **`Description.svelte` / `cms.ts` Benefits-Texte überarbeiten:**
  - "ohne Installation nutzbar" → "in Ihrer Infrastruktur betrieben, kein Datenverlust durch Drittanbieter"
  - "standardisierte APIs" → streichen, zu technisch und nicht das Hauptargument
  - "KI-Module lernen kontinuierlich" → streichen, stimmt nicht (keine Fine-Tuning-Loops)
  - Ersatz-Benefit: "Dedizierte Instanz" - jedes Unternehmen bekommt eine eigene isolierte Umgebung

- [ ] **`Pricing.svelte`: Aufräumen**
  - Die drei Preisplan-Karten (`cms.pricing.plans` mit Starter/Professional/Enterprise) werden gar nicht gerendert - aus `cms.ts` entfernen oder die Sektion kommentieren
  - FAQ-Section (`<!--...-->`) einkommentieren - 4 echte Fragen sind besser als keine
  - Überschrift `cms.pricing.description` enthält "14-tägige kostenlose Testphase" - entfernen

- [ ] **`Modules.svelte`: Showcase-Module auf Demo abstimmen**
  - Showcase-Liste auf Module beschränken die auch in der Live Demo verfügbar sind
  - Empfehlung: `['meetingprotokoll', 'uebersetzung', 'email', 'zusammenfassung', 'praesentation', 'projektplan']`

- [ ] **Social Proof - ehrliche Minimal-Variante**
  - Keine Testimonial-Section solange weniger als 3 Referenzkunden vorhanden
  - Stattdessen: kurzer Satz in der `Description`-Section: "Bereits im Einsatz bei Unternehmen aus Maschinenbau und Dienstleistung"
  - Oder: weglassen und Platz für späteren Ausbau lassen

---

## Block D: Conversion-Pfad (Demo → Kunde)

### Entscheidung: Demo-Banner zeigt direkt auf Booking-Link
Der 15-Nachrichten-Banner in der Demo-App (`InputArea.svelte`) zeigt aktuell auf `https://www.smartworkhub.de`. Das ist ein Kreis. Ändern auf den direkten Booking-Link aus `cms.contactLink`.

- [ ] **`smartworkhub`-Repo: Demo-Banner-URL anpassen** - in `messages/chat.json` oder direkt im Banner in `InputArea.svelte` den Link auf den Booking-Link zeigen statt auf die Homepage
  - Booking-Link: `https://outlook.office.com/bookwithme/...` (aus `cms.contactLink`)
  - Button-Text ändern: "Termin vereinbaren" statt "Jetzt registrieren" - ehrlicher für das B2B-Modell

---

## Block E: Technische Mängel

- [ ] **`svelte:component` → Svelte-5-Syntax** in `Description.svelte`, `Privacy.svelte`, `ModuleGrid.svelte`, `ModuleStats.svelte`:
  ```svelte
  <!-- Alt (deprecated) -->
  <svelte:component this={benefit.icon} class="w-8 h-8 text-primary" />
  <!-- Neu -->
  {@const Icon = benefit.icon}
  <Icon class="w-8 h-8 text-primary" />
  ```

- [ ] **`Pricing.svelte`: Range-Slider Touch-Fix** - iOS Safari hat bekannte Touch-Trefferbereich-Probleme mit `input[type=range]`; `thumb` per CSS größer machen

- [ ] **Scroll-Offset für Fixed-Header** - Hash-Links (z.B. `/#features`) scrollen hinter den Fixed-Header; `scroll-padding-top` auf `<html>` setzen (Höhe des Headers ~72px)

---

## Block F: SEO & Meta

- [ ] **`+page.svelte`: OG-Image hinzufügen** - `<meta property="og:image">` fehlt komplett; einen Screenshot oder ein einfaches Brand-Image in `static/` ablegen
- [ ] **`jsonLdWebApplication.featureList`** erweitern und auf 40 Module aktualisieren
- [ ] **`PUBLIC_PROJECT_DESCRIPTION` (`.env`)**: "kostenlos testen" durch Demo-Hinweis ersetzen

---

## Priorisierung

| Reihenfolge | Block | Aufwand |
|---|---|---|
| 1 | Block A - Kritische Korrekturen | Klein - nur `cms.ts` + kleine Komponenten |
| 2 | Block B - Demo-CTA (Hero, Header, CTA-Section) | Mittel |
| 3 | Block B - `AnimatedChatPreview.svelte` | Groß - eigener Commit |
| 4 | Block D - Conversion-Pfad (Banner-URL im SWH-Repo) | Klein |
| 5 | Block C - Content-Qualität | Mittel |
| 6 | Block E - Technische Mängel | Klein-Mittel |
| 7 | Block F - SEO | Klein |
