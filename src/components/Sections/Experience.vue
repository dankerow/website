<script setup lang="ts">
const jobs = [
  {
    organizationName: 'Freelance',
    jobTitle: 'Social Media Manager',
    jobType: 'Freelance',
    timePeriod: {
      start: 'June 2023',
      end: 'Present'
    },
    description: [
      'I am currently working as a freelance content manager for a few clients (such as daddysfavgirlie on TikTok).',
      'I am responsible for managing content for their social media accounts.'
    ]
  },
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
  }
]
</script>

<template>
  <section id="experience" class="py-5">
    <div class="container">
      <h2 class="section-heading mb-5">
        Experience
      </h2>

      <div class="row">
        <div class="experience-pills d-lg-flex align-items-lg-start">
          <div id="experience-pills-tab" class="nav flex-lg-column nav-pills mb-3 mb-lg-0" role="tablist">
            <button
              v-for="(work, index) in jobs"
              :id="`experience-pills-${index}-tab`"
              :key="`${work.organizationName}-tab`"
              :class="`nav-link text-start ${index === 0 ? 'active' : ''}`"
              data-bs-toggle="pill"
              :data-bs-target="`#experience-pills-${index}`"
              type="button"
              role="tab"
              :aria-controls="`experience-pills-${index}`"
              :aria-selected="index === 0"
            >
              <span class="d-none d-md-inline">{{ work.jobTitle }} @</span> {{ work.organizationName }}
            </button>
          </div>

          <div id="experience-pills-tabContent" class="tab-content w-100 ps-lg-3">
            <div
              v-for="(work, index) in jobs"
              :id="`experience-pills-${index}`"
              :key="`${work.organizationName}-tab-content`"
              :class="`tab-pane fade show ${index === 0 ? 'active' : ''}`"
              role="tabpanel"
              :aria-labelledby="`experience-pills-${index}-tab`"
            >
              <h2 v-if="work.jobTitle" class="text-white mb-1">
                {{ work.jobTitle }}
              </h2>

              <p v-if="work.jobType || work.timePeriod" class="mb-4 text-body-secondary fst-italic small">
                <span v-if="work.jobType">
                  {{ work.jobType }}
                </span>
                <span v-if="work.timePeriod" class="mx-1">|</span>
                <span v-if="work.timePeriod">
                  {{ work.timePeriod.start }} - {{ work.timePeriod.end }}
                </span>
              </p>

              <div v-if="typeof work.description === 'object'">
                <ul
                  v-for="(line, lineIndex) in work.description"
                  :key="`${work.organizationName.toLowerCase()}-description-line-${lineIndex}`"
                  style="padding-left: 1rem; list-style-type: square;"
                >
                  <li>{{ line }}</li>
                </ul>
              </div>

              <p v-else>
                {{ work.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#experience-pills-tab {
	width: max-content;
}

.nav {
	border-right: 2px solid rgba(38, 38, 38, 0.8);
}

.nav-link {
	border-left: 3px solid rgba(38, 38, 38, 0.3);
	border-radius: 0;
	padding: 0.475rem 0.875rem;
	white-space: nowrap;

	&.active {
		background-color: rgba(38, 38, 38, 0.3);
		border-left: 3px solid rgb(164, 164, 164);
	}
}
</style>
