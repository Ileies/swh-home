# SEO-Anleitung: Außerhalb des Codes – Fokus Google

## 1. Google Search Console (GSC) – Pflicht, Tag 1

**Was es ist:** Das offizielle Google-Tool zur Seitenüberwachung und Indexierungskontrolle.

**Setup:**

1. [search.google.com/search-console](https://search.google.com/search-console) aufrufen
2. Property für `smartworkhub.de` anlegen
3. Domain-Verifizierung via DNS-TXT-Eintrag (empfohlen) oder HTML-Tag
4. Sitemap einreichen: _Sitemaps → URL eingeben: `https://smartworkhub.de/sitemap.xml`_
5. URL-Indexierung manuell anstoßen: _URL-Prüfung → `https://smartworkhub.de/` → Indexierung beantragen_

**Was GSC dir dauerhaft liefert:**

- Welche Keywords Klicks und Impressionen bringen
- Core Web Vitals (LCP, FID, CLS) – direkter Google-Rankingfaktor
- Crawl-Fehler und Indexierungsprobleme
- Manuelle Penalties (falls vorhanden)
- Interne Linkstruktur

---

## 2. Google Business Profile (früher Google My Business)

**Relevant für:** Lokale Sichtbarkeit in Bornheim/Bonn-Region und B2B-Suchen mit Ortsbezug.

1. [business.google.com](https://business.google.com) → Eintrag für _OFF LIMITS IT Services GmbH_ anlegen/beanspruchen
2. Adresse, Öffnungszeiten, Telefon, Website (`smartworkhub.de`) eintragen
3. Kategorie: _Software-Unternehmen_ oder _IT-Dienstleistungen_
4. Logo und Produktfotos hochladen
5. Kurzbeschreibung mit Keywords: _„KI-Automatisierung, Workflow-Automatisierung, KI-Module für Unternehmen"_
6. Kundenbewertungen aktiv sammeln (Bewertungslink direkt an Kunden senden)

> Google Maps-Einträge mit vielen positiven Bewertungen erscheinen häufig in der „Local Pack" Box ganz oben in den Ergebnissen.

---

## 3. OG-Image erstellen (`/og-image.png`)

Im Code wird `/og-image.png` als Social-Share-Bild referenziert – diese Datei fehlt noch.

**Anforderungen:**

- Maße: **1200 × 630 px** (Facebook/LinkedIn/Twitter Standard)
- Format: PNG oder JPG
- Inhalt: Logo + Headline + ggf. kurzer Claim
- Dateipfad: `static/og-image.png`

**Empfohlene Tools:** Figma (kostenlos), Canva, oder Adobe Express.

Sobald die Datei existiert, werden WhatsApp-Links, LinkedIn-Shares und iMessage-Vorschauen automatisch mit diesem Bild angezeigt.

---

## 4. Backlinks – der wichtigste Off-Page-Faktor

Google wertet Backlinks (andere Seiten, die auf `smartworkhub.de` verlinken) als Vertrauenssignal.

**Prioritätsmaßnahmen:**

| Quelle                                                  | Aufwand | Qualität         |
| ------------------------------------------------------- | ------- | ---------------- |
| Branchenverzeichnisse (Trusted Shops, Capterra, GetApp) | gering  | mittel           |
| Partnerunternehmen verlinken lassen                     | gering  | hoch             |
| Gastbeiträge auf IT/KI-Blogs                            | mittel  | sehr hoch        |
| DIHK / IHK-Mitgliederverzeichnis                        | gering  | hoch (Autorität) |
| LinkedIn-Artikel mit Link                               | gering  | mittel           |
| Pressemitteilungen bei Produktnews                      | mittel  | hoch             |
| Kundencase-Studies (mit Backlink)                       | hoch    | sehr hoch        |

**Wichtig:** Qualität vor Quantität. 5 Links von relevanten IT-Seiten schlagen 50 Links von Spam-Verzeichnissen.

---

## 5. Google Analytics 4 einrichten

Für echte Nutzerdaten und Conversion-Tracking:

1. [analytics.google.com](https://analytics.google.com) → Property anlegen
2. GA4-Measurement-ID (`G-XXXXXXXXXX`) in SvelteKit einbinden:

```html
<!-- In src/app.html, vor %sveltekit.head% -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());
	gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. Conversions tracken: Button-Klicks auf „Kostenlose Beratung" als Ziel definieren
4. Datenschutzhinweis in der Datenschutzerklärung ergänzen (DSGVO-Pflicht)

> Alternativ: **Plausible Analytics** (DSGVO-konform ohne Cookie-Banner, kostenlos self-hosted).

---

## 6. Keyword-Strategie schärfen

**Aktuelle Keywords im Code:** gut gewählt, aber zu breit. Ergänzende Long-Tail-Keywords:

- `"KI Automatisierung kleine Unternehmen"`
- `"KI Tool für Mittelstand"`
- `"PowerShell Generator KI"`
- `"E-Mail automatisch schreiben KI"`
- `"DSGVO konforme KI Software"`
- `"KI für HR Abteilung"`

**Tools zur Keyword-Recherche (kostenlos):**

- [Google Search Console](https://search.google.com/search-console) – zeigt, wonach Nutzer suchen
- [Google Keyword Planner](https://ads.google.com/aw/keywordplanner) – Suchvolumen
- [Ubersuggest](https://neilpatel.com/ubersuggest/) – kostenlose Basisversion
- [answerthepublic.com](https://answerthepublic.com) – Fragen, die Nutzer stellen

---

## 7. Content-Strategie (mittelfristig)

Google bevorzugt Seiten mit regelmäßigem, nützlichem Inhalt. Optionen:

### Blog / Wissensbereich

Artikel mit ~800–1.500 Wörtern zu:

- _„Wie KI repetitive Aufgaben im Büro übernimmt"_
- _„PowerShell automatisch generieren – Schritt für Schritt"_
- _„DSGVO und KI: Was Unternehmen wissen müssen"_
- _„ROI von KI-Automatisierung berechnen"_

### FAQ-Seite

Die FAQ im Code ist auskommentiert – aktivieren und als eigene Route `/faq` ausbauen. Google zeigt FAQs als Rich Snippets in den Suchergebnissen.

### Fallstudien / Case Studies

Konkrete Kundenergebnisse (z. B. „Team spart 8h/Woche") erhöhen Vertrauen und Conversions.

---

## 8. Core Web Vitals optimieren

Google nutzt diese 3 Metriken als direkten Rankingfaktor:

| Metrik                              | Bedeutung                     | Zielwert |
| ----------------------------------- | ----------------------------- | -------- |
| **LCP** (Largest Contentful Paint)  | Ladezeit des größten Elements | < 2,5 s  |
| **INP** (Interaction to Next Paint) | Reaktionszeit bei Klicks      | < 200 ms |
| **CLS** (Cumulative Layout Shift)   | Layout-Sprünge beim Laden     | < 0,1    |

**Messen:** GSC → _Core Web Vitals_ oder [PageSpeed Insights](https://pagespeed.web.dev/) mit echter URL.

**Typische Fixes für SvelteKit/Static Sites:**

- Bilder mit `width` und `height` Attributen versehen (verhindert CLS)
- Schriften mit `font-display: swap` laden
- Animierte Hintergrund-Blobs können LCP leicht erhöhen – testen

---

## 9. Structured Data erweitern (FAQPage)

Sobald das FAQ reaktiviert wird, JSON-LD ergänzen. Google zeigt FAQ-Rich-Snippets direkt in den Suchergebnissen (nimmt mehr Platz ein):

```json
{
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "Kann ich den Plan später wechseln?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden."
			}
		}
	]
}
```

---

## 10. Technische Checkliste (einmalig prüfen)

- [ ] HTTPS aktiv (SSL-Zertifikat gültig)
- [ ] `www.smartworkhub.de` → `smartworkhub.de` Weiterleitung (301, kein Duplicate Content)
- [ ] Keine 404-Fehler (GSC prüfen)
- [ ] Ladezeit unter 3 Sekunden (PageSpeed Insights)
- [ ] Mobile-friendly (Google Search Console → Mobile Usability)
- [ ] `og-image.png` erstellen und deployen
- [ ] Google Analytics 4 oder Plausible einbinden
- [ ] GSC verifizieren und Sitemap einreichen

---

## Prioritätenreihenfolge

1. **Sofort:** Google Search Console einrichten + Sitemap einreichen
2. **Diese Woche:** `og-image.png` erstellen, Google Business Profile anlegen
3. **Diesen Monat:** GA4 einbinden, erste Backlinks akquirieren, FAQ aktivieren
4. **Mittelfristig:** Blog starten, Long-Tail-Keywords gezielt belegen, Case Studies publizieren
