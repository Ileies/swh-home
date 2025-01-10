import { MessageSquare, Languages, Terminal, Share2, Users } from 'lucide-svelte';

const cms = {
	modules: {
		description: "Unsere KI-Module automatisieren Ihre Prozesse, steigern die Produktivität und erschließen neue Geschäftspotenziale. Getestet und bewährt in über 500 Unternehmen.",
		discoverAll: "Entdecken Sie alle 30+ KI-Module",
		stats: [
			{
				metric: "500+",
				title: "Zufriedene Unternehmen"
			},
			{
				metric: "1M+",
				title: "Automatisierte Prozesse"
			},
			{
				metric: "98%",
				title: "Zeitersparnis im Schnitt"
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
					description: "Brechen Sie Sprachbarrieren mit KI-gestützten Übersetzungen in 95+ Sprachen. Inklusive Branchenterminologie und Kontext-Erkennung.",
					icon: Languages
				},
				{
					id: "powershell",
					title: "Powershell Script Generator",
					description: "Generieren Sie fehlerfreie PowerShell-Skripte in Sekunden. Mit integrierter Best-Practice-Prüfung und Sicherheitsvalidierung.",
					icon: Terminal
				},
				{
					id: "social-media",
					title: "Social Media Generator",
					description: "Erstellen Sie virale Content-Kampagnen mit KI. Analysiert Trends, optimiert Hashtags und passt Tonalität automatisch an Ihre Zielgruppe an.",
					icon: Share2
				},
				{
					id: "kundenmodul",
					title: "Kundenmodul",
					description: "Entwickeln Sie personalisierte KI-Lösungen für Ihre Branche. Von Predictive Analytics bis zur automatisierten Dokumentenverarbeitung.",
					icon: Users
				}
		]
	}
};

export default cms;