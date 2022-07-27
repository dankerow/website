export default {
	shortDescription: 'Uno sviluppatore web junior, in cerca di nuove avventure.',
	hero: {
		headingOne: 'Ciao!',
		shortDescription: 'Uno sviluppatore web junior residente in Canada, attualmente studente in {college}, che sta completando una laurea associata in scienze informatiche.',
		college: 'Columbia College'
	},
	about: {
		index: 'Chi sono',
		paragraphOne: [
			'Ciao, mi chiamo Dan e sono uno sviluppatore web junior dal Canada. Mi piace esprimere la mia creatività in una varietà di modi, come ad esempio attraverso lo sviluppo di siti web e design grafico. Alla fine del 2015, ho sviluppato un interesse per lo sviluppo web e il design grafico. Da allora, ho continuato a imparare e praticare in ciascuna di queste aree.',
			'Naturalmente curioso e mi piace imparare cose nuove, mi integro bene con gli altri.',
			'Fluente in diverse lingue, tra cui francese, inglese e italiano, e attualmente sto imparando lo spagnolo, che già comprendo molto bene.'
		],
		skillsCard: {
			cardTitle: 'Competenze',
			categories: [
				{
					name: 'front-end',
					tag: 'front-end',
					active: true,
					skills: [
						{
							title: 'Languages',
							content: ['HTML', 'CSS/SCSS', 'JavaScript (ES6+)']
						},
						{
							title: 'Frameworks / Libraries',
							content: ['Node.js', 'Express', 'Vue', 'Nuxt.js', 'jQuery', 'Bootstrap', 'Bulma']
						},
						{
							title: 'Tools',
							content: ['Git/GitHub']
						}
					]
				},
				{
					name: 'back-end',
					tag: 'back-end',
					active: false,
					skills: [
						{
							title: 'Languages',
							content: ['Node.js']
						},
						{
							title: 'Tools',
							content: ['Git/GitHub', 'MongoDB', 'Redis']
						}
					]
				},
				{
					name: 'graphic design',
					tag: 'graphic-design',
					active: false,
					skills: [
						{
							title: 'Software',
							content: ['Adobe Photoshop', 'Adobe Illustrator']
						}
					]
				},
				{
					name: 'photography',
					tag: 'photography',
					active: false,
					skills: [
						{
							title: 'Software',
							content: ['Adobe Lightroom', 'Adobe Photoshop']
						}
					]
				}
			]
		}
	},
	experience: {
		index: 'Esperienza',
		jobs: [
			{
				organizationName: 'UNICEF',
				jobTitle: 'Web Developer',
				jobType: 'Internship',
				timePeriod: {
					start: 'June 2020',
					end: 'March 2021'
				},
				description: [
					'Applicazione web costruita per gestire l\'inventario della compagnia utilizzando Express.js, Bootstrap e MongoDB.',
					'Improved efficiency for up to 5 IT department staff; transferred from MS Access to a web application available on mobile + computer devices'
				]
			},
			{
				organizationName: 'Lavora con me',
				jobTitle: 'Lavora con me',
				jobType: 'Waiting for you',
				description: 'Non ho ancora nessuna esperienza professionale, è per questo che sto cercando opportunità per applicare le competenze che ho acquisito per conto mio negli ultimi 3 anni.'
			}
		]
	},
	projects: {
		index: 'Progetti',
		tempMessage: 'Sto ancora cucinando, si prega di tornare più tardi. Dovrebbe essere pronto presto. 😉'
	},
	footer: {
		copyright: {
			text: 'Tutti i diritti riservati. Disegnato e sviluppato da Dan Mutombo.'
		}
	}
}
