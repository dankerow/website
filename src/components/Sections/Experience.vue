<script setup lang="ts">
const jobs = [
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
</script>

<template>
  <section id="experience" class="py-10">
    <div class="container">
      <h2 class="section-heading mb-5">
        Experience
      </h2>

      <div class="row">
        <div class="experience-pills d-flex align-items-start">
          <div id="experience-pills-tab" class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
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
              {{ work.organizationName }}
            </button>
          </div>

          <div id="experience-pills-tabContent" class="tab-content w-100 ps-3">
            <div
              v-for="(work, index) in jobs"
              :id="`experience-pills-${index}`"
              :key="`${work.organizationName}-tab-content`"
              :class="`tab-pane fade show ${index === 0 ? 'active' : ''}`"
              role="tabpanel"
              :aria-labelledby="`experience-pills-${index}-tab`"
            >
              <h2 v-if="work.jobTitle" class="mb-1">
                {{ work.jobTitle }}
              </h2>

              <h3 v-if="work.jobType || work.timePeriod" class="h5 mb-4">
                <span v-if="work.jobType" class="px-1 rounded-1" :style="{ paddingTop: '0.15rem', paddingBottom: '0.15rem', backgroundColor: 'rgb(38, 38, 38)' }">
                  {{ work.jobType }}
                </span>
                <span v-if="work.timePeriod" class="mx-1">|</span>
                <span v-if="work.timePeriod" class="px-1 rounded-1" :style="{ paddingTop: '0.15rem', paddingBottom: '0.15rem', backgroundColor: 'rgb(38, 38, 38)' }">
                  {{ work.timePeriod.start }} - {{ work.timePeriod.end }}
                </span>
              </h3>

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
	counter-reset: nav-link;
}

.nav-link {
	border-left: 3px solid rgba(38, 38, 38, 0.3);
	border-radius: 0;
	padding: 0.475rem 0.875rem;
	white-space: nowrap;

	&:before {
		counter-increment: nav-link;
		content: "0" counter(nav-link) ".";
		color: rgb(164, 164, 164);
		font-family: "Roboto Mono", sans-serif;
	}

	&.active {
		background-color: rgba(38, 38, 38, 0.3);
		border-left: 3px solid rgb(164, 164, 164);
	}
}
</style>
