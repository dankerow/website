<script setup lang="ts">
const jobs = [
  {
    organizationName: 'MIA',
    jobTitle: 'IT Manager',
    jobType: 'Full-time',
    timePeriod: {
      start: 'January 2024',
      end: 'Present'
    },
    description: [
      'I am currently working as an IT Manager for MIA.',
      'I am responsible for managing the IT department and all of its staff.',
      'I am also responsible for managing the company\'s IT infrastructure.'
    ]
  },
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
    organizationName: 'UNICEF Madagascar',
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
  <div id="experience" class="py-5">
    <div class="container">
      <h2 class="text-white mb-5">
        Work Experiences
      </h2>

      <div
        v-for="(work, index) in jobs"
        :key="`${work.organizationName}-content`"
        :class="{ 'mb-5': index < jobs.length - 1 }"
      >
        <div v-if="work.jobTitle" class="text-white fs-5 mb-1">
          {{ work.jobTitle }} at {{ work.organizationName }}
        </div>

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
            style="list-style-type: square;"
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
</template>
