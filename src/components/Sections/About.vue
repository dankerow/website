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
      <h1 class="h3 section-heading mb-5">
        About Me
      </h1>

      <div class="row gy-5 row-cols-1 row-cols-lg-2">
        <div class="col">
          <div class="biography">
            <p v-for="(sentence, index) in $tm('about.paragraphOne')" :key="sentence">
              {{ $rt(sentence) }}
              <br v-if="index !== $tm('about.paragraphOne').length - 1">
            </p>
          </div>

          <div class="actions">
            <a href="/files/Resume.pdf" target="_blank" class="btn btn-primary" type="button">
              Resume
            </a>
          </div>
        </div>

        <div class="col">
          <div id="accordionPanelsStayOpenExample" class="accordion accordion-flush">
            <div v-for="(value, key, index) in skills" :key="key" class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button text-capitalize" :class="{ collapsed: index !== 0 }" type="button" data-bs-toggle="collapse" :data-bs-target="`#${key}-collapse`" :aria-expanded="index === 0" :aria-controls="`${key}-collapse`">
                  {{ key }}
                </button>
              </h2>
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
