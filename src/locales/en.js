export default {
	shortDescription: 'A junior web developer, looking for more challenges.',
	hero: {
		headingOne: 'Greetings!',
		shortDescription: 'A junior web developer living in Canada, currently enrolled at {college}, completing an Associate Degree in Computer Science.',
		college: 'Columbia College'
	},
	about: {
		index: 'About',
		paragraphOne: [
			'Hello, my name is Dan and I\'m a junior web developer from Canada. I enjoy expressing my creativity in a variety of ways, such as through developing websites and graphic designs. In late 2015, I developed an interest in web development and graphic design. Since then, I\'ve continued to learn and practice in each of these areas.',
			'Naturally inquisitive and enjoying learning new things, I fit in well with others.',
			'Fluent in numerous languages, including French, English, and Italian, and currently learning Spanish, which I already comprehend very well.'
		],
		skillsCard: {
			cardTitle: 'Skills',
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
		index: 'Experience',
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
					'Individually built web application to manage inventory of the company utilizing Express.js, Bootstrap & MongoDB.',
					'Improved efficiency for up to 5 IT department staff; transferred from MS Access to a web application available on mobile + computer devices.'
				]
			},
			{
				organizationName: 'Work with me',
				jobTitle: 'Work with me',
				jobType: 'Waiting for you',
				description: 'I don\'t have much work experience yet, that\'s why I am looking for opportunities to apply the skills I have acquired on my own over the last 3 years.'
			}
		]
	},
	projects: {
		index: 'Projects',
		tempMessage: 'I\'m still cooking, please come back later. It should be ready soon. 😉'
	},
	footer: {
		copyright: {
			text: 'All rights reserved. Designed and developed by Dan Mutombo.'
		}
	},
	cookieBanner: {
		text: 'I use cookies to provide and improve this website. By using my site, you consent to cookies (By Scrolling you consent to cookies). For more information, please see the {cookiePolicy}.'
	},
	cookiePolicy: {
		title: 'Cookie Policy'
	}
}
