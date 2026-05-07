import { PUBLIC_PROJECT_TITLE } from '$env/static/public';
import {
	AlertTriangle,
	BookOpen,
	Briefcase,
	Calculator,
	Calendar,
	ChartBar,
	ChartNoAxesColumn,
	CheckCircle,
	CheckSquare,
	ClipboardCheck,
	Clock,
	FileText,
	GitBranch,
	Globe,
	GraduationCap,
	Hammer,
	HelpCircle,
	Lock,
	Mail,
	MessageCircle,
	MessageSquare,
	Package,
	Presentation,
	Scale,
	Server,
	Share2,
	Shield,
	Terminal,
	Users,
	Wrench,
	Zap
} from 'lucide-svelte';

const cms = {
	contactLink: 'https://outlook.office.com/bookwithme/user/c55d7df6bf0a4764adc1cb9f1e16671d@offlimits-it.com/meetingtype/7IJ2G8BNa0-E4n8us68ZPQ2?anonymous&ep=mcard',
	demoUrl: 'https://demo.smartworkhub.de',
	headerLinks: {
		'/#features': 'Features',
		'/#modules': 'KI-Module',
		'/#pricing': 'Preise',
	},
	hero: {
		title: 'Revolutionieren Sie den Arbeitsalltag Ihrer Mitarbeiter mit KI',
		description: `${PUBLIC_PROJECT_TITLE} automatisiert Ihre repetitiven Aufgaben mit modernster KI-Technologie. Sparen Sie Ihren Mitarbeitern Zeit und fokussieren Sie sich auf das Wesentliche.`,
		newFeature: 'Neu: Live Demo verfügbar - jetzt ausprobieren',
		moreInfo: 'Mehr erfahren',
	},
	description: {
		benefits: [
			{
				icon: Zap,
				title: 'Sofort einsetzbar',
				description:
					'Alle KI-Module sind sofort einsatzbereit – in Ihrer Infrastruktur betrieben, kein Datenverlust durch Drittanbieter.'
			},
			{
				icon: Clock,
				title: 'Zeit sparen',
				description:
					'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf strategische Entscheidungen. Unsere KI-Module arbeiten 24/7 für Sie.'
			},
			{
				icon: ChartBar,
				title: 'Dedizierte Instanz',
				description:
					'Jedes Unternehmen erhält eine eigene, isolierte Umgebung. Ihre Daten bleiben Ihre Daten – kein Shared Hosting, keine Datenvermischung.'
			}
		],
		title: 'Intelligente Automatisierung für Ihr Unternehmen',
		text: `${PUBLIC_PROJECT_TITLE} vereint leistungsstarke KI-Module in einer intuitiven Plattform. Entwickelt für moderne Unternehmen, die ihre Prozesse optimieren und Wachstum beschleunigen möchten.`,
	},
	modules: {
		title: 'KI-Power für Ihr Business',
		description:
			'Unsere KI-Module automatisieren Ihre Prozesse, steigern die Produktivität und erschließen neue Geschäftspotenziale.',
		discoverAll: 'Entdecken Sie alle 40 KI-Module',
		showcase: ['uebersetzung', 'emailgenerator', 'praesentation', 'projektplan', 'rechtschreibung', 'dokumentation'],
		list: [
			{
				id: 'uebersetzung',
				title: 'Übersetzung',
				description:
					'Bietet präzise Übersetzungen mit Berücksichtigung von Kontext, Fachterminologie und kulturellen Besonderheiten.',
				icon: Globe,
				inclusive: true
			},
			{
				id: 'powershell',
				title: 'PowerShell Generator',
				description:
					'Entwickelt maßgeschneiderte PowerShell-Skripte für verschiedene Automatisierungsaufgaben in der IT-Administration.',
				icon: Terminal,
				inclusive: true
			},
			{
				id: 'socialmedia',
				title: 'Social Media Beiträge',
				description:
					'Generiert zielgruppengerechte Social-Media-Inhalte mit optimierter Reichweite und Engagement-Potenzial.',
				icon: Share2,
				inclusive: true
			},
			{
				id: 'kundenbeschwerde',
				title: 'Kundenbeschwerde E-Mail',
				description:
					'Generiert professionelle und einfühlsame Antworten auf Kundenbeschwerden unter Berücksichtigung verschiedener Eskalationsstufen.',
				icon: Mail,
				inclusive: true
			},
			{
				id: 'emailgenerator',
				title: 'Email-Generator',
				description:
					'Erstellt professionelle E-Mail-Vorlagen für verschiedene Geschäftssituationen und spart wertvolle Zeit bei der Kommunikation.',
				icon: Mail,
				inclusive: true
			},
			{
				id: 'angebotsgenerator',
				title: 'Angebotsgenerator',
				description:
					'Erstellt professionelle und maßgeschneiderte Angebote basierend auf Projektbeschreibungen, ideal für Vertriebsmitarbeiter und Projektmanager.',
				icon: FileText
			},
			{
				id: 'budgetplanung',
				title: 'Budget-Planungs-Assistent',
				description:
					'Unterstützt bei der detaillierten Finanzplanung durch KI-gestützte Analysen und Prognosen, perfekt für Controller und Finanzverantwortliche.',
				icon: Calculator
			},
			{
				id: 'changemanagement',
				title: 'Change-Management-Kommunikationsplaner',
				description:
					'Entwickelt strategische Kommunikationspläne für Veränderungsprozesse und unterstützt bei der erfolgreichen Implementierung von Organisationsänderungen.',
				icon: MessageCircle
			},
			{
				id: 'compliance',
				title: 'Compliance-Checklisten-Generator',
				description:
					'Erstellt maßgeschneiderte Compliance-Checklisten für verschiedene Branchen und Unternehmensgrößen, um Regelkonformität sicherzustellen.',
				icon: CheckSquare
			},
			{
				id: 'dokumentation',
				title: 'Dokumentations-Generator',
				description:
					'Automatisiert die Erstellung technischer Dokumentationen und Anleitungen mit professionellen Templates und strukturierten Inhalten.',
				icon: FileText
			},
			{
				id: 'feedback',
				title: 'Feedbackformular-Generator',
				description:
					'Entwickelt maßgeschneiderte Feedback-Formulare für unterschiedliche Anwendungsfälle, um wertvolle Kundenrückmeldungen zu sammeln.',
				icon: MessageSquare
			},
			{
				id: 'interviewfragen',
				title: 'Interview-Fragen-Generator',
				description:
					'Erstellt passende Interviewfragen basierend auf Position und Erfahrungslevel, um den Rekrutierungsprozess zu optimieren.',
				icon: Users
			},
			{
				id: 'kpiplanner',
				title: 'KPI-Dashboard-Planer',
				description:
					'Unterstützt bei der Entwicklung aussagekräftiger KPI-Dashboards für verschiedene Abteilungen und Managementebenen.',
				icon: ChartNoAxesColumn
			},
			{
				id: 'motivationsschreiben',
				title: 'Motivationsschreiben-Generator',
				description:
					'Erstellt überzeugende und personalisierte Motivationsschreiben für Bewerbungen, abgestimmt auf Stelle und Unternehmen.',
				icon: FileText
			},
			{
				id: 'praesentation',
				title: 'Präsentations-Outline-Builder',
				description:
					'Strukturiert Präsentationen effektiv und erstellt überzeugende Gliederungen für verschiedene Zielgruppen und Anlässe.',
				icon: Presentation
			},
			{
				id: 'produktbeschreibung',
				title: 'Produktbeschreibungs-Optimierer',
				description:
					'Verbessert Produktbeschreibungen durch KI-gestützte Analyse und Optimierung für verschiedene Vertriebskanäle.',
				icon: Package
			},
			{
				id: 'projektplan',
				title: 'Projektplan Generator',
				description:
					'Erstellt detaillierte und realistische Projektpläne mit Meilensteinen, Ressourcenzuweisung und Gantt-Diagrammen.',
				icon: ClipboardCheck
			},
			{
				id: 'prozessanalyse',
				title: 'Prozessanalyse',
				description:
					'Analysiert und optimiert Geschäftsprozesse durch KI-gestützte Identifikation von Verbesserungspotenzialen.',
				icon: GitBranch
			},
			{
				id: 'prozessdoku',
				title: 'Prozess-Dokumentations-Wizard',
				description:
					'Führt durch die systematische Dokumentation von Geschäftsprozessen und erstellt standardisierte Prozessdokumentationen.',
				icon: GitBranch
			},
			{
				id: 'recherche',
				title: 'Recherche-Zusammenfassung',
				description:
					'Erstellt strukturierte Zusammenfassungen von Rechercheergebnissen und identifiziert die wichtigsten Erkenntnisse.',
				icon: BookOpen
			},
			{
				id: 'rechtschreibung',
				title: 'Rechtschreib- und Grammatikkorrektur',
				description:
					'Prüft und korrigiert Texte auf Rechtschreibung, Grammatik und Stil unter Berücksichtigung verschiedener Textarten.',
				icon: CheckCircle
			},
			{
				id: 'risikomatrix',
				title: 'Risikomanagement-Matrix',
				description:
					'Erstellt detaillierte Risikoanalysen und entwickelt passende Maßnahmen zur Risikominimierung.',
				icon: AlertTriangle
			},
			{
				id: 'problemloeser',
				title: 'Technischer Problemlöser',
				description:
					'Unterstützt bei der systematischen Analyse und Lösung technischer Probleme durch gezielte Fragestellungen und Lösungsvorschläge.',
				icon: Wrench
			},
			{
				id: 'vertragsklausel',
				title: 'Vertragsklausel-Generator',
				description:
					'Erstellt rechtssichere Vertragsklauseln für verschiedene Vertragsarten unter Berücksichtigung aktueller Rechtsprechung.',
				icon: FileText
			},
			{
				id: 'wartung',
				title: 'Wartungsprotokoll-Generator',
				description:
					'Erstellt standardisierte Wartungsprotokolle für verschiedene Assets und Wartungsarten mit allen relevanten Informationen.',
				icon: Hammer
			},
			{
				id: 'meetingprotokoll',
				title: 'Meeting-Protokoll-Generator',
				description:
					'Erstellt strukturierte Meeting-Protokolle mit Beschlüssen und Aufgaben aus rohen Stichpunkten.',
				icon: Calendar
			},
			{
				id: 'stichpunktetext',
				title: 'Stichpunkte zu Fließtext',
				description:
					'Wandelt Bullet-Point-Listen in professionellen, fließenden Text um.',
				icon: FileText
			},
			{
				id: 'zusammenfassung',
				title: 'Text-Zusammenfassung',
				description:
					'Fasst lange Texte als Fließtext, Stichpunkte oder Executive Summary zusammen.',
				icon: BookOpen
			},
			{
				id: 'sop',
				title: 'SOP-Generator',
				description:
					'Erstellt Standard Operating Procedures aus Prozessbeschreibungen.',
				icon: CheckSquare
			},
			{
				id: 'absage',
				title: 'Absage-Generator',
				description:
					'Erstellt höfliche, professionelle Absagen für Lieferanten, Bewerber, Anfragen und Termine.',
				icon: Mail
			},
			{
				id: 'faqgenerator',
				title: 'FAQ-Generator',
				description:
					'Generiert vollständige FAQ-Listen zu einem Thema oder Produkt.',
				icon: HelpCircle
			},
			{
				id: 'stellenbeschreibung',
				title: 'Stellenbeschreibung-Generator',
				description:
					'Erstellt vollständige Stellenausschreibungen mit Aufgaben, Anforderungen und Unternehmensdarstellung.',
				icon: Briefcase
			},
			{
				id: 'onboarding',
				title: 'Onboarding-Plan-Generator',
				description:
					'Erstellt strukturierte 30/60/90-Tage-Einarbeitungspläne für neue Mitarbeiter.',
				icon: Users
			},
			{
				id: 'jahresgespraech',
				title: 'Jahresgespräch-Vorbereitung',
				description:
					'Bereitet Führungskräfte auf Mitarbeiterjahresgespräche vor: Leitfaden, Formulierungen, Zielvorschläge.',
				icon: MessageCircle
			},
			{
				id: 'schulungsunterlagen',
				title: 'Schulungsunterlagen-Generator',
				description:
					'Erstellt Schulungsskripte, Lernpläne oder Handouts zu einem beliebigen Thema.',
				icon: GraduationCap
			},
			{
				id: 'statusbericht',
				title: 'Statusbericht-Generator',
				description:
					'Erstellt strukturierte Fortschrittsberichte für Management oder Fachpublikum.',
				icon: ChartNoAxesColumn
			},
			{
				id: 'gespraechsvorbereitung',
				title: 'Gesprächsvorbereitung',
				description:
					'Erstellt strukturierte Leitfäden für Kunden- und Vertriebsgespräche mit Fragen, Einwand-Antworten und Argumentation.',
				icon: MessageCircle
			},
			{
				id: 'einwandbehandlung',
				title: 'Einwandbehandlung',
				description:
					'Erarbeitet überzeugende Antworten auf konkrete Kundeneinwände.',
				icon: Shield
			},
			{
				id: 'verhandlung',
				title: 'Verhandlungsvorbereitung',
				description:
					'Bereitet Verhandlungen vor: Positionsanalyse, BATNA, Strategie, Kompromissszenarien, rote Linien.',
				icon: Scale
			},
			{
				id: 'dsgvo',
				title: 'DSGVO-Checkliste',
				description:
					'Erstellt eine erste DSGVO-Orientierungscheckliste für neue Software, Prozesse oder Dienstleister.',
				icon: Lock
			}
		]
	},
	privacy: {
		title: 'Ihre Daten in sicheren Händen',
		description: `Bei ${PUBLIC_PROJECT_TITLE} steht Datensicherheit an erster Stelle. Unsere KI-Lösungen sind von Grund auf sicher und transparent gestaltet.`,
		features: [
			{
				icon: Shield,
				title: 'Datensicherheit',
				description:
					'Der Smartworkhub speichert keine Daten und verarbeitet nur die vom Nutzer bereitgestellten Informationen.'
			},
			{
				icon: Lock,
				title: 'Verschlüsselte Übertragung',
				description:
					'Ihre Daten werden durchgehend mit modernster Verschlüsselung (TLS 1.3) übertragen und gespeichert.'
			},
			{
				icon: Server,
				title: 'Lokale Verarbeitung',
				description:
					'Sensible Geschäftsdaten verlassen nie Ihre Infrastruktur. Unsere KI-Module können optional auch On-Premises betrieben werden.',
				special: true
			}
		]
	},
	pricing: {
		title: 'Transparente Preise für jede Unternehmensgröße',
		description:
			'Wählen Sie den passenden Tarif für Ihr Unternehmen. Transparente Preise, keine versteckten Kosten.',
		mostPopular: 'Beliebteste Wahl',
		month: 'Monat',
		monthly: 'Monatlich',
		yearly: 'Jährlich',
		ifYearly: 'Bei jährlicher Zahlung',
		yearlySale: 'Jährlich (-20%)',
		individual: 'Individuell',
		custom: 'Maßgeschneiderte Preise',
		plans: [
			{
				name: 'Starter',
				description: 'Ideal für Einzelpersonen und kleine Teams',
				monthlyPrice: 49,
				annualPrice: 39,
				features: [
					'5 Starter-Kit KI-Module',
					'Bis zu 3 Team-Mitglieder',
					'5.000 API Calls pro Monat',
					'Community Support',
					'Standard Reporting'
				],
				buttonStyle: 'btn-outline'
			},
			{
				name: 'Professional',
				description: 'Perfekt für wachsende Unternehmen',
				monthlyPrice: 99,
				annualPrice: 79,
				popular: true,
				features: [
					'Alle KI-Module inklusive',
					'Bis zu 10 Team-Mitglieder',
					'50.000 API Calls pro Monat',
					'Priority Support',
					'Advanced Reporting & Analytics',
					'Eigene API-Zugänge',
					'Custom Workflows'
				],
				buttonStyle: 'btn-primary'
			},
			{
				name: 'Enterprise',
				description: 'Maßgeschneiderte Lösungen für Großunternehmen',
				customPrice: true,
				features: [
					'Alles in Professional',
					'Custom KI-Module',
					'Unbegrenzte Team-Mitglieder',
					'Individuelle API Limits',
					'On-Premises Installation',
					'SLA Garantie'
				],
				buttonStyle: 'btn-outline'
			}
		]
	},
	contact: {
		title: 'Steigern Sie Ihre Produktivität mit KI',
		description:
			'Erleben Sie die Plattform live - ohne Registrierung, ohne Kreditkarte.',
		appointment: 'Jetzt Termin vereinbaren',
		slogan: 'Individuell und unverbindlich',
		solutions: [
			'Individuelle Lösungsanalyse',
			'Persönlicher Ansprechpartner',
			'Maßgeschneiderte Strategien'
		]
	},
	footer: {
		description: `${PUBLIC_PROJECT_TITLE} revolutioniert Ihre Business-Prozesse mit KI-gestützten Lösungen für den modernen Arbeitsalltag.`,
		street: "Johann-Philipp-Reis-Straße, 8",
		postalcode: "53332",
		city: "Bornheim",
		country: "Deutschland",
		company_product: "Ein Produkt der OFF LIMITS IT Services GmbH",
		links: [
			{
				category: 'Produkt',
				links: {
					'/#features': 'Features',
					'/#pricing': 'Preise',
					'/#contact': 'Kontakt', // eig. im zweiten pack
					//'/#enterprise': 'Enterprise',
					//'/#updates': 'Updates'
				}
			}/*,
			{
				category: 'Support',
				links: {
					'/#docs': 'Dokumentation',
					'/#contact': 'Kontakt',
					'/#faq': 'FAQ',
					'/#status': 'Status'
				}
			}*/
		],
		bottomLinks: {
			'/privacy': 'Datenschutz',
			'/terms': 'AGB',
			'/imprint': 'Impressum'
		},
		copyright: 'Alle Rechte vorbehalten.'
	},

	stats: [
		{
			metric: '40+',
			title: 'Module'
		},
		{
			metric: '~90%',
			title: 'Zeitersparnis'
		},
		{
			metric: '24/7',
			title: 'Verfügbarkeit'
		}
	],
	cta: 'Jetzt Beratungsgespräch vereinbaren',
	call: 'Kostenlose Beratung',
	faq: {
		title: 'Häufige Fragen',
		list: [
			{
				question: 'Kann ich den Plan später wechseln?',
				answer:
					'Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden. Die Abrechnung wird anteilig angepasst.'
			},
			{
				question: 'Was passiert nach der kostenlosen Testphase?',
				answer:
					'Nach Ablauf der 14-tägigen Testphase wird Ihr ausgewählter Plan aktiv. Sie können jederzeit vor Ende der Testphase kündigen.'
			},
			{
				question: 'Wie schnell kann ich mit der Nutzung beginnen?',
				answer:
					'Nach Ihrer Anmeldung können Sie sofort mit den ersten Modulen starten. Die vollständige Integration in Ihre Systeme ist typischerweise innerhalb eines Werktages abgeschlossen.'
			},
			{
				question: 'Welche technischen Voraussetzungen gibt es?',
				answer:
					'Für die Cloud-Version benötigen Sie lediglich einen modernen Webbrowser. Für On-Premises-Installationen beraten wir Sie individuell zu den Systemanforderungen.'
			}
		]
	}
};

export default cms;