import { PUBLIC_PROJECT_TITLE } from '$env/static/public';
import {
	AlertTriangle,
	ChartNoAxesColumn,
	BookOpen,
	Calculator,
	ChartBar,
	CheckCircle,
	CheckSquare,
	ClipboardCheck,
	Clock,
	FileText,
	GitBranch,
	Globe,
	Hammer,
	Lock,
	Mail,
	MessageCircle,
	MessageSquare,
	Package,
	Presentation,
	Server,
	Share2,
	Shield,
	Terminal,
	Users,
	Wrench,
	Zap
} from 'lucide-svelte';

const cms = {
	hero: {
		title: 'Revolutioniere deinen Arbeitsalltag mit KI',
		description: `${PUBLIC_PROJECT_TITLE} automatisiert deine repetitiven Aufgaben mit modernster KI-Technologie. Spare Zeit und fokussiere dich auf das Wesentliche.`,
		newFeature: 'Neu: KI-powered Workflow Automation'
	},
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
	},
	headerLinks: {
		'#features': 'Features',
		'/modules': 'KI-Module',
		'#pricing': 'Preise',
		'#contact': 'Kontakt'
	},
	benefits: [
		{
			icon: Zap,
			title: 'Sofort einsetzbar',
			description:
				'Alle KI-Module sind sofort und ohne Installation nutzbar. Einfache Integration in bestehende Workflows durch standardisierte APIs.'
		},
		{
			icon: Clock,
			title: 'Zeit sparen',
			description:
				'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf strategische Entscheidungen. Unsere KI-Module arbeiten 24/7 für Sie.'
		},
		{
			icon: ChartBar,
			title: 'Effizienz steigern',
			description:
				'Steigern Sie die Produktivität Ihres Teams messbar. Unsere KI-Module lernen kontinuierlich und werden immer effizienter.'
		}
	],
	descriptionTitle: 'Intelligente Automatisierung für Ihr Unternehmen',
	descriptionText: `${PUBLIC_PROJECT_TITLE} vereint leistungsstarke KI-Module in einer intuitiven Plattform. Entwickelt für moderne Unternehmen, die ihre Prozesse optimieren und Wachstum beschleunigen möchten.`,
	stats: [
		{
			metric: '27',
			title: 'Module'
		},
		{
			metric: '98%',
			title: 'Zeitersparnis'
		},
		{
			metric: '24/7',
			title: 'Verfügbarkeit'
		}
	],
	modules: {
		title: 'KI-Power für Ihr Business',
		description:
			'Unsere KI-Module automatisieren Ihre Prozesse, steigern die Produktivität und erschließen neue Geschäftspotenziale.',
		discoverAll: 'Entdecken Sie alle 27 KI-Module',
		showcase: ['kichat', 'uebersetzung', 'powershell', 'socialmedia', 'kundenbeschwerde'],
		list: [
			/*{
				"id": "basismodul",
				"title": "Basis Modul",
				"description": "Der grundlegende Baustein für die Integration von KI-Funktionen, der als Vorlage für weitere Module dient und die Basisfunktionalitäten demonstriert.",
				"icon": CircleAlert
			},
				{
					"id": "layoutmodul",
					"title": "Layout Modul",
					"description": "Eine umfassende Sammlung von UI-Komponenten und Layoutelementen, die eine konsistente und professionelle Benutzeroberfläche ermöglicht.",
					"icon": LayoutGrid
				},
				{
					"id": "apitestmodul",
					"title": "API-Test Modul",
					"description": "Ermöglicht schnelles und effizientes Testen verschiedener API-Endpunkte mit unterschiedlichen Konfigurationen, perfekt für Entwickler und Systemintegratoren.",
					"icon": TestTube
				},
				{
					"id": "anleitungsmodul",
					"title": "Anleitungs Modul",
					"description": "Ein interaktiver Leitfaden, der neue Benutzer Schritt für Schritt durch die Funktionen der Plattform führt und so die Einarbeitungszeit minimiert.",
					"icon": BookOpen
				},*/
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
				id: 'emailgenerator',
				title: 'Email-Generator',
				description:
					'Erstellt professionelle E-Mail-Vorlagen für verschiedene Geschäftssituationen und spart wertvolle Zeit bei der Kommunikation.',
				icon: Mail
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
				id: 'kichat',
				title: 'KI-Chat',
				description:
					'Ein vielseitiger KI-Assistent für die direkte Kommunikation und schnelle Problemlösung im Arbeitsalltag.',
				icon: MessageCircle
			},
			{
				id: 'kpiplanner',
				title: 'KPI-Dashboard-Planer',
				description:
					'Unterstützt bei der Entwicklung aussagekräftiger KPI-Dashboards für verschiedene Abteilungen und Managementebenen.',
				icon: ChartNoAxesColumn
			},
			{
				id: 'kundenbeschwerde',
				title: 'Kundenbeschwerde E-Mail',
				description:
					'Generiert professionelle und einfühlsame Antworten auf Kundenbeschwerden unter Berücksichtigung verschiedener Eskalationsstufen.',
				icon: Mail
			},
			{
				id: 'motivationsschreiben',
				title: 'Motivationsschreiben-Generator',
				description:
					'Erstellt überzeugende und personalisierte Motivationsschreiben für Bewerbungen, abgestimmt auf Stelle und Unternehmen.',
				icon: FileText
			},
			{
				id: 'powershell',
				title: 'PowerShell Generator',
				description:
					'Entwickelt maßgeschneiderte PowerShell-Skripte für verschiedene Automatisierungsaufgaben in der IT-Administration.',
				icon: Terminal
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
				id: 'pruefung',
				title: 'Prüfung Generator',
				description:
					'Automatisiert die Erstellung und Auswertung von Prüfungsunterlagen für verschiedene Anwendungsfälle.',
				icon: CheckSquare
			},
			/*{
				id: 'raltest',
				title: 'RAL Test',
				description:
					'Unterstützt bei der Überprüfung und Dokumentation von RAL-Gütezeichen-Anforderungen.',
				icon: CheckCircle
			},*/
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
				id: 'socialmedia',
				title: 'Social Media Beiträge',
				description:
					'Generiert zielgruppengerechte Social-Media-Inhalte mit optimierter Reichweite und Engagement-Potenzial.',
				icon: Share2
			},
			{
				id: 'problemloeser',
				title: 'Technischer Problemlöser',
				description:
					'Unterstützt bei der systematischen Analyse und Lösung technischer Probleme durch gezielte Fragestellungen und Lösungsvorschläge.',
				icon: Wrench
			},
			{
				id: 'uebersetzung',
				title: 'Übersetzung',
				description:
					'Bietet präzise Übersetzungen mit Berücksichtigung von Kontext, Fachterminologie und kulturellen Besonderheiten.',
				icon: Globe
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
			}
		]
	},
	privacy: {
		title: 'Ihre Daten in sicheren Händen',
		description: `Bei ${PUBLIC_PROJECT_TITLE} steht Datensicherheit an erster Stelle. Unsere KI-Lösungen sind von Grund auf sicher und transparent gestaltet.`,
		features: [
			{
				icon: Shield,
				title: 'Datenschutz-konform',
				description:
					'Alle Module entsprechen der DSGVO und werden ausschließlich in deutschen Rechenzentren gehostet.'
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
					'Sensible Geschäftsdaten verlassen nie Ihre Infrastruktur. Unsere KI-Module können optional auch On-Premises betrieben werden.'
			}
		]
	},
	moreInfo: 'Mehr erfahren',
	pricing: {
		title: 'Transparente Preise für jede Unternehmensgröße',
		description:
			'Wählen Sie den passenden Tarif für Ihr Unternehmen. Alle Pläne beinhalten eine 14-tägige kostenlose Testphase.',
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
	footer: {
		description: `${PUBLIC_PROJECT_TITLE} revolutioniert Ihre Business-Prozesse mit KI-gestützten Lösungen für den modernen Arbeitsalltag.`,
		links: [
			{
				category: 'Produkt',
				links: {
					'/features': 'Features',
					'/pricing': 'Preise',
					'/enterprise': 'Enterprise',
					'/updates': 'Updates'
				}
			},
			{
				category: 'Support',
				links: {
					'/docs': 'Dokumentation',
					'/contact': 'Kontakt',
					'/faq': 'FAQ',
					'/status': 'Status'
				}
			}
		],
		bottomLinks: {
			'/privacy': 'Datenschutz',
			'/terms': 'AGB',
			'/imprint': 'Impressum'
		}
	},
	copyright: 'Alle Rechte vorbehalten.',
	contact: {
		title: 'Steigern Sie Ihre Produktivität mit KI',
		description:
			'Über 500 Unternehmen vertrauen bereits auf unsere KI-Module. Starten Sie jetzt Ihre 14-tägige kostenlose Testphase und erleben Sie den Unterschied.',
		appointment: 'Jetzt Termin vereinbaren',
		slogan: 'Individuell und unverbindlich'
	},
	solutions: [
		'Individuelle Lösungsanalyse',
		'Persönlicher Ansprechpartner',
		'Maßgeschneiderte Strategien'
	]
};

export default cms;