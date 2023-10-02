<script setup lang="ts">
const skills = ref({
  languages: [
    'HTML',
    'CSS/SCSS',
    'JavaScript (ES6+)',
    'TypeScript',
    'Python',
    'C#'
  ],
  frameworks: [
    'Node.js',
    'Express',
    'Vue',
    'Nuxt.js',
    'jQuery',
    'Bootstrap',
    'Bulma'
  ],
  databases: [
    'MongoDB',
    'MySQL',
    'Redis',
    'SQLite'
  ],
  tools: [
    'Git',
    'GitHub',
    'GitLab',
    'VS Code',
    'Postman',
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign'
  ]
})
</script>

<template>
  <section class="hero pt-14 pb-6">
    <div class="container">
      <span class="tooltip">
        @dankerow
      </span>

      <h1 class="header-heading-2 display-4 text-white fw-bolder">
        <span class="special-letter">D</span>an
        <span class="special-letter">M</span>utombo.
      </h1>

      <p class="mb-4">
        Software developer, building whatever in my bed.
      </p>

      <div class="row gy-5 row-cols-1 row-cols-lg-2">
        <div class="col">
          <div class="card mb-4">
            <div class="card-body">
              I'm a software developer. I enjoy expressing my creativity in a variety of ways, such as through developing websites and graphic designs. In late 2015, I developed an interest in software development and graphic design. Since then, I've continued to learn and practice in each of these areas.
              <br>
              Naturally inquisitive and enjoying learning new things, I fit in well with others.
              <br>
              Fluent in numerous languages, including French, English, and Italian, and currently learning Spanish, which I already comprehend very well.
            </div>
          </div>

          <div class="actions">
            <a href="/files/Resume.pdf" target="_blank" class="btn btn-primary" type="button">
              Resume
            </a>
          </div>
        </div>

        <div class="col">
          <div id="accordionPanelsStayOpenExample" class="accordion">
            <div v-for="(value, key, index) in skills" :key="key" class="accordion-item">
              <h3 class="accordion-header">
                <button class="accordion-button text-capitalize" :class="{ collapsed: index !== 0 }" type="button" data-bs-toggle="collapse" :data-bs-target="`#${key}-collapse`" :aria-expanded="index === 0" :aria-controls="`${key}-collapse`">
                  {{ key }}
                </button>
              </h3>

              <div :id="`${key}-collapse`" class="accordion-collapse collapse" :class="{ show: index === 0 }">
                <div class="accordion-body">
                  {{ value.join(', ') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="social-links">
        <a href="https://github.com/dankerow" aria-label="GitHub" target="_blank">
          <Icon name="ph:github-logo-duotone" />
        </a>

        <a href="https://www.linkedin.com/in/dan-mutombo/" aria-label="LinkedIn" target="_blank">
          <Icon name="ph:linkedin-logo-duotone" />
        </a>

        <a href="https://twitter.com/dankerow" aria-label="Twitter" target="_blank">
          <Icon name="ph:twitter-logo-duotone" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
	.tooltip {
		color: white;
		font-size: .825rem;
		font-weight: 500;
		display: inline-block;
		position: relative;
		background: rgba(146, 164, 184, 0.3);
		border: 2px solid rgba(146, 164, 184, 0.8);
		border-radius: 0.25rem;
		padding: 0.45rem 0.75rem;

		&:after {
			content: '';
			position: absolute;
			bottom: -8px;
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 8px 8px 0 8px;
			border-color: rgba(146, 164, 184, 0.8) transparent transparent transparent;
		}
	}

	.header-heading-2 {
		.special-letter {
			color: rgb(146, 164, 184);
			text-shadow: 0 2px rgba(146, 164, 184, 0.45);
		}
	}

	.social-links {
		a {
			&:not(:last-child) {
				margin-right: 1.875rem;
			}
		}
	}
}
</style>
<script setup lang="ts">
</script>
