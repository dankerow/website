<template>
	<div>
		<SectionsHero />

		<SectionsAbout />

		<SectionsExperience />

		<SectionsProjects />
	</div>
</template>

<script>
export default {
	head() {
		return {
			script: [
				{
					type: 'application/ld+json',
					json: {
						'@context': 'https://schema.org/',
						'@type': 'Person',
						name: 'Dan Mutombo',
						jobTitle: 'Web Developer',
						url: 'https://danmutombo.com/'
					}
				}
			]
		}
	}
}
</script>

<style lang="scss">
.section-heading {
	color: rgb(195, 212, 232);
	position: relative;
	text-shadow: 0 2px 0 rgb(146 164 184 / 43%);

	&:before {
		content: './';
	}

	.highlight {
		background-color: rgb(51,61,73);
		color: rgb(195, 212, 232);
		padding: 0 4px;

		&.inverse {
			background-color: rgb(195, 212, 232);
			color: rgb(51,61,73);
		}
	}
}
</style>
