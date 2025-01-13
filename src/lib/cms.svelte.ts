import { MessageSquare, Languages, Terminal, Share2, Users, Shield, Lock, Server } from 'lucide-svelte';

const cms = {
	title: "Revolutioniere deinen Arbeitsalltag mit KI",
	description: "SmartWorkHub automatisiert deine repetitiven Aufgaben mit modernster KI-Technologie. Spare Zeit und fokussiere dich auf das Wesentliche.",
	newFeature: "Neu: KI-powered Workflow Automation",
	cta: "Beratungsgespräch vereinbaren",
	footerText: "Smartworkhub revolutioniert Ihre Business-Prozesse mit KI-gestützten Lösungen für den modernen Arbeitsalltag.",
	headerLinks: [
		{
			text: "Features",
			href: "#features"
		},
		{
			text: "KI-Module",
			href: "/modules"
		},
		{
			text: "Preise",
			href: "#pricing"
		},
		{
			text: "Kontakt",
			href: "#contact"
		}
	],
	modules: {
		title: "KI-Power für Ihr Business",
		description: "Unsere KI-Module automatisieren Ihre Prozesse, steigern die Produktivität und erschließen neue Geschäftspotenziale.",
		discoverAll: "Entdecken Sie alle 30+ KI-Module",
		stats: [
			{
				metric: "30+",
				title: "Module"
			},
			{
				metric: "98%",
				title: "Zeitersparnis"
			},
			{
				metric: "24/7",
				title: "Verfügbarkeit"
			}
		],
		showcase: [
			"ki-chat",
			"uebersetzungsmodul",
			"powershell",
			"social-media",
			"kundenmodul"
		],
		list: [
				{
					id: "ki-chat",
					title: "KI-Chat Modul",
					description: "Revolutionieren Sie Ihren Kundenservice mit einem KI-Assistenten, der 24/7 präzise Antworten liefert und aus jeder Interaktion lernt.",
					icon: MessageSquare
				},
				{
					id: "uebersetzungsmodul",
					title: "Übersetzungsmodul",
					description: "Brechen Sie Sprachbarrieren mit KI-gestützten Übersetzungen in den 6 gängigsten Sprachen. Inklusive Branchenterminologie und Kontext-Erkennung.",
					icon: Languages
				},
				{
					id: "powershell",
					title: "Powershell Script Generator",
					description: "Generieren Sie fehlerfreie PowerShell-Skripte in Sekunden ohne eigene Vorkenntnisse. Mit integrierter Best-Practice-Prüfung und Sicherheitsvalidierung.",
					icon: Terminal
				},
				{
					id: "social-media",
					title: "Social Media Generator",
					description: "Erstellen Sie viralen Content mit KI. Analysiert Trends, optimiert Hashtags und passt Tonalität automatisch an Ihre Zielgruppe an.",
					icon: Share2
				},
				{
					id: "kundenmodul",
					title: "Kundenmodul",
					description: "Entwickeln Sie personalisierte KI-Lösungen für Ihre Branche. Von Predictive Analytics bis zur automatisierten Dokumentenverarbeitung.",
					icon: Users
				}
		]
	},
	privacy: {
		features: [
			{
				icon: Shield,
				title: "Datenschutz-konform",
				description: "Alle Module entsprechen der DSGVO und werden ausschließlich in deutschen Rechenzentren gehostet."
			},
			{
				icon: Lock,
				title: "Verschlüsselte Übertragung",
				description: "Ihre Daten werden durchgehend mit modernster Verschlüsselung (TLS 1.3) übertragen und gespeichert."
			},
			{
				icon: Server,
				title: "Lokale Verarbeitung",
				description: "Sensible Geschäftsdaten verlassen nie Ihre Infrastruktur. Unsere KI-Module können optional auch On-Premises betrieben werden."
			}
		]
	}
};

export default cms;