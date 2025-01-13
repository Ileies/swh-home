import {
	ChartBar,
	Clock,
	Languages,
	Lock,
	MessageSquare,
	Server,
	Share2,
	Shield,
	Terminal,
	Users,
	Zap
} from 'lucide-svelte';

const cms = {
	title: 'Revolutioniere deinen Arbeitsalltag mit KI',
	description: 'SmartWorkHub automatisiert deine repetitiven Aufgaben mit modernster KI-Technologie. Spare Zeit und fokussiere dich auf das Wesentliche.',
	newFeature: 'Neu: KI-powered Workflow Automation',
	cta: 'Beratungsgespräch vereinbaren',
	cta2: 'Kostenloses Beratungsgespräch',
	cta3: 'Kontakt aufnehmen',
	cta4: 'Kostenlose Beratung',
	faq: 'Häufige Fragen',
	headerLinks: [
		{
			text: 'Features',
			href: '#features'
		},
		{
			text: 'KI-Module',
			href: '/modules'
		},
		{
			text: 'Preise',
			href: '#pricing'
		},
		{
			text: 'Kontakt',
			href: '#contact'
		}
	],
	benefits: [
		{
			icon: Zap,
			title: 'Sofort einsetzbar',
			description: 'Alle KI-Module sind sofort und ohne Installation nutzbar. Einfache Integration in bestehende Workflows durch standardisierte APIs.'
		},
		{
			icon: Clock,
			title: 'Zeit sparen',
			description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf strategische Entscheidungen. Unsere KI-Module arbeiten 24/7 für Sie.'
		},
		{
			icon: ChartBar,
			title: 'Effizienz steigern',
			description: 'Steigern Sie die Produktivität Ihres Teams messbar. Unsere KI-Module lernen kontinuierlich und werden immer effizienter.'
		}
	],
	descriptionTitle: 'Intelligente Automatisierung für Ihr Unternehmen',
	descriptionText: 'SmartWorkHub vereint leistungsstarke KI-Module in einer intuitiven Plattform. Entwickelt für moderne Unternehmen, die ihre Prozesse optimieren und Wachstum beschleunigen möchten.',
	stats: [
		{
			metric: '30+',
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
		description: 'Unsere KI-Module automatisieren Ihre Prozesse, steigern die Produktivität und erschließen neue Geschäftspotenziale.',
		discoverAll: 'Entdecken Sie alle 30+ KI-Module',
		showcase: [
			'ki-chat',
			'uebersetzungsmodul',
			'powershell',
			'social-media',
			'kundenmodul'
		],
		list: [
			{
				id: 'ki-chat',
				title: 'KI-Chat Modul',
				description: 'Revolutionieren Sie Ihren Kundenservice mit einem KI-Assistenten, der 24/7 präzise Antworten liefert und aus jeder Interaktion lernt.',
				icon: MessageSquare
			},
			{
				id: 'uebersetzungsmodul',
				title: 'Übersetzungsmodul',
				description: 'Brechen Sie Sprachbarrieren mit KI-gestützten Übersetzungen in den 6 gängigsten Sprachen. Inklusive Branchenterminologie und Kontext-Erkennung.',
				icon: Languages
			},
			{
				id: 'powershell',
				title: 'Powershell Script Generator',
				description: 'Generieren Sie fehlerfreie PowerShell-Skripte in Sekunden ohne eigene Vorkenntnisse. Mit integrierter Best-Practice-Prüfung und Sicherheitsvalidierung.',
				icon: Terminal
			},
			{
				id: 'social-media',
				title: 'Social Media Generator',
				description: 'Erstellen Sie viralen Content mit KI. Analysiert Trends, optimiert Hashtags und passt Tonalität automatisch an Ihre Zielgruppe an.',
				icon: Share2
			},
			{
				id: 'kundenmodul',
				title: 'Kundenmodul',
				description: 'Entwickeln Sie personalisierte KI-Lösungen für Ihre Branche. Von Predictive Analytics bis zur automatisierten Dokumentenverarbeitung.',
				icon: Users
			}
		]
	},
	privacy: {
		title: 'Ihre Daten in sicheren Händen',
		description: 'Bei Smartworkhub steht Datensicherheit an erster Stelle. Unsere KI-Lösungen sind von Grund auf sicher und transparent gestaltet.',
		features: [
			{
				icon: Shield,
				title: 'Datenschutz-konform',
				description: 'Alle Module entsprechen der DSGVO und werden ausschließlich in deutschen Rechenzentren gehostet.'
			},
			{
				icon: Lock,
				title: 'Verschlüsselte Übertragung',
				description: 'Ihre Daten werden durchgehend mit modernster Verschlüsselung (TLS 1.3) übertragen und gespeichert.'
			},
			{
				icon: Server,
				title: 'Lokale Verarbeitung',
				description: 'Sensible Geschäftsdaten verlassen nie Ihre Infrastruktur. Unsere KI-Module können optional auch On-Premises betrieben werden.'
			}
		]
	},
	moreInfo: 'Mehr erfahren',
	pricing: {
		title: 'Transparente Preise für jede Unternehmensgröße',
		description: 'Wählen Sie den passenden Tarif für Ihr Unternehmen. Alle Pläne beinhalten eine 14-tägige kostenlose Testphase.',
		mostPopular: 'Beliebteste Wahl',
		month: 'Monat',
		monthly: 'Monatlich',
		yearly: "Jährlich",
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
					'5 KI-Module nach Wahl',
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
					'Unbegrenzte KI-Module',
					'Unbegrenzte Team-Mitglieder',
					'Individuelle API Limits',
					'24/7 Premium Support',
					'Custom Reporting & Analytics',
					'Eigene API-Zugänge',
					'Custom Workflows',
					'On-Premises Installation',
					'SLA Garantie'
				],
				buttonStyle: 'btn-outline'
			}
		]
	},
	faqs: [
		{
			question: 'Kann ich den Plan später wechseln?',
			answer: 'Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden. Die Abrechnung wird anteilig angepasst.'
		},
		{
			question: 'Was passiert nach der kostenlosen Testphase?',
			answer: 'Nach Ablauf der 14-tägigen Testphase wird Ihr ausgewählter Plan aktiv. Sie können jederzeit vor Ende der Testphase kündigen.'
		},
		{
			question: 'Gibt es versteckte Kosten?',
			answer: 'Nein, alle Preise verstehen sich inklusive Mehrwertsteuer und beinhalten alle genannten Features ohne versteckte Zusatzkosten.'
		}
	],
	footer: {
		description: 'Smartworkhub revolutioniert Ihre Business-Prozesse mit KI-gestützten Lösungen für den modernen Arbeitsalltag.',
		links: [
			{
				category: 'Produkt',
				links: [
					{ name: 'Features', href: '/features' },
					{ name: 'Preise', href: '/pricing' },
					{ name: 'Enterprise', href: '/enterprise' },
					{ name: 'Updates', href: '/updates' }
				]
			},
			{
				category: 'Support',
				links: [
					{ name: 'Dokumentation', href: '/docs' },
					{ name: 'Kontakt', href: '/contact' },
					{ name: 'FAQ', href: '/faq' },
					{ name: 'Status', href: '/status' }
				]
			},
			{
				category: 'Rechtliches',
				links: [
					{ name: 'Datenschutz', href: '/privacy' },
					{ name: 'AGB', href: '/terms' },
					{ name: 'Impressum', href: '/imprint' }
				]
			}
		],
		bottomLinks: [
			{ name: 'Datenschutz', href: '/privacy' },
			{ name: 'AGB', href: '/terms' },
			{ name: 'Impressum', href: '/imprint' },
		]
	},
	copyright: "Alle Rechte vorbehalten.",
	contact: {
		title: 'Steigern Sie Ihre Produktivität mit KI',
		description: 'Über 500 Unternehmen vertrauen bereits auf unsere KI-Module. Starten Sie jetzt Ihre 14-tägige kostenlose Testphase und erleben Sie den Unterschied.',
		appointment: 'Jetzt Termin vereinbaren',
		slogan: 'Individuell und unverbindlich'
	},
	solutions: ["Individuelle Lösungsanalyse", "Persönlicher Ansprechpartner", "Maßgeschneiderte Strategien"],
};

export default cms;