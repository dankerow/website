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
  <section id="about" class="py-10">
    <div class="container">
      <h2 class="h3 section-heading mb-5">
        About
      </h2>

      <div class="row gy-5 row-cols-1 row-cols-lg-2">
        <div class="col">
          <div class="card mb-4">
            <div class="card-body">
              Hello, my name is Dan and I'm a software developer. I enjoy expressing my creativity in a variety of ways, such as through developing websites and graphic designs. In late 2015, I developed an interest in software development and graphic design. Since then, I've continued to learn and practice in each of these areas.
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
    </div>
  </section>
</template>
