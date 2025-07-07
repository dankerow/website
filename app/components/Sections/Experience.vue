<script setup lang="ts">
import { motion, useScroll, useTransform } from 'motion-v'

import type { Project } from '@/composables/useProjects'

import { Icon } from '#components'

interface Job {
  organizationName: string
  jobTitle: string
  jobType: string
  timePeriod: {
    start: string
    end: string
  }
  description?: string | string[]
  relatedProjects?: string[]
}

const MotionIcon = motion.create(Icon, { forwardMotionProps: true })

const { projects: allProjects } = useProjects()
const expandedJobs = ref<string[]>([])
const isButtonHovered = ref(false)
const timelineRef = ref(null)

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ['start 85%', 'end 50%']
})

const scaleY = useTransform(scrollYProgress, [0, 0.95], [0, 1])

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
      'Lead and manage the IT department, ensuring effective coordination and support for all team members and activities.',
      'Oversee and maintain the company\'s IT infrastructure, ensuring optimal performance and reliability.'
    ],
    relatedProjects: ['miagospel']
  },
  {
    organizationName: 'EarnIn',
    jobTitle: 'Platform Intern',
    jobType: 'Full-time',
    timePeriod: {
      start: 'May 2024',
      end: 'August 2024'
    }
  },
  {
    organizationName: 'Freelance',
    jobTitle: 'Social Media Manager',
    jobType: 'Freelance',
    timePeriod: {
      start: 'June 2023',
      end: 'October 2024'
    },
    description: [
      'Managed and optimized TikTok and Instagram accounts, increasing follower engagement and watch time through strategic content planning and interaction.',
      'Created compelling video thumbnails and captions to enhance visibility and attract a larger audience, resulting in significant growth in followers and engagement.',
      'Actively engaged with followers by responding to comments and messages, fostering a positive community and improving overall user experience.'
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

const toggleRelatedProjects = (organizationName: string) => {
  if (expandedJobs.value.includes(organizationName)) {
    expandedJobs.value = expandedJobs.value.filter(org => org !== organizationName)
  } else {
    expandedJobs.value.push(organizationName)
  }
}

const hasRelatedProjects = (job: Job) => {
  return job.relatedProjects && job.relatedProjects.length > 0
}

const getRelatedProjects = (job: Job): Project[] => {
  if (!job.relatedProjects) return []

  return allProjects.value.filter(project =>
    project.slug
      ? job.relatedProjects!.includes(project.slug)
      : job.relatedProjects!.includes(project.name)
  )
}
</script>

<template>
  <div
    id="experience"
    ref="experienceContainerRef"
    class="py-5 position-relative"
  >
    <div class="container">
      <div class="d-flex align-items-center mb-5">
        <motion.h2
          class="text-white h3 mb-0 me-3"
          :initial="{ opacity: 0, y: -20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{
            once: true,
            amount: 0.5
          }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          Work Experiences
        </motion.h2>

        <motion.div
          class="heading-line flex-grow-1"
          :initial="{ scaleX: 0 }"
          :in-view="{ scaleX: 1 }"
          :in-view-options="{
            once: true,
            amount: 0.1
          }"
          :transition="{ duration: 0.5, delay: 0.35 }"
        />
      </div>

      <div
        ref="timelineRef"
        class="timeline-container-wrapper position-relative"
      >
        <motion.div
          class="timeline-bar"
          :style="{ scaleY }"
        />

        <div
          class="timeline-container position-relative"
        >
          <div
            v-for="(work, index) in jobs"
            :key="`${work.organizationName}-content`"
            class="timeline-item position-relative mb-5"
            :class="{
              'mb-0': index === jobs.length - 1
            }"
          >
            <div class="timeline-marker">
              <motion.div
                class="timeline-dot"
                :initial="{ scale: 0 }"
                :in-view="{ scale: 1 }"
                :in-view-options="{
                  once: true,
                  amount: 0.5
                }"
                :transition="{ duration: 0.5, delay: 0.2 + index * 0.1 }"
              />
            </div>

            <div class="timeline-content position-relative">
              <motion.div
                class="experience-card"
                :initial="{ opacity: 0, y: 20 }"
                :in-view="{ opacity: 1, y: 0 }"
                :in-view-options="{
                  once: true,
                  amount: 0.5
                }"
                :transition="{ duration: 0.5, delay: 0.2 + index * 0.1 }"
              >
                <div class="experience-header">
                  <div>
                    <h3 class="job-title mb-0">
                      {{ work.jobTitle }}
                    </h3>
                    <h4 class="organization-name">
                      {{ work.organizationName }}
                    </h4>
                  </div>
                  <div class="time-period">
                    {{ work.timePeriod.start }} - {{ work.timePeriod.end }}
                  </div>
                </div>

                <div class="tag mb-2">
                  {{ work.jobType }}
                </div>

                <template v-if="work.description">
                  <div class="description-container">
                    <ul
                      v-if="Array.isArray(work.description)"
                      class="description-list"
                    >
                      <li
                        v-for="(line, lineIndex) in work.description"
                        :key="`${work.organizationName.toLowerCase()}-description-line-${lineIndex}`"
                      >
                        {{ line }}
                      </li>
                    </ul>
                    <p
                      v-else
                      class="description-text"
                    >
                      {{ work.description }}
                    </p>
                  </div>
                </template>

                <div
                  v-if="hasRelatedProjects(work)"
                  class="mt-4 border-top border-dark-subtle pt-3"
                >
                  <button
                    class="btn btn-link btn-link-related d-flex align-items-center border-0 bg-transparent p-0"
                    data-bs-toggle="collapse"
                    :href="`#collapse-${work.organizationName.replace(/\s+/g, '').toLowerCase()}`"
                    role="button"
                    :aria-controls="`collapse-${work.organizationName.replace(/\s+/g, '').toLowerCase()}`"
                    :aria-expanded="expandedJobs.includes(work.organizationName)"
                    @mouseenter="isButtonHovered = true"
                    @mouseleave="isButtonHovered = false"
                    @click="toggleRelatedProjects(work.organizationName)"
                  >
                    {{ expandedJobs.includes(work.organizationName) ? 'Hide related projects' : 'Show related projects' }}

                    <MotionIcon
                      name="ph:caret-right"
                      :initial="{ rotate: 0 }"
                      :animate="expandedJobs.includes(work.organizationName) ? {
                        rotate: 90,
                        transition: {
                          duration: 0.35,
                          ease: 'easeInOut'
                        }
                      }
                        : isButtonHovered ? {
                          rotate: 45
                        } : {}"
                      class="ms-2"
                      size="1em"
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    :id="`collapse-${work.organizationName.replace(/\s+/g, '').toLowerCase()}`"
                    class="collapse"
                  >
                    <div class="mt-3 pt-2">
                      <div class="row g-3">
                        <div
                          v-for="project in getRelatedProjects(work)"
                          :key="project.slug || project.name"
                          class="col-12 col-md-4"
                        >
                          <CardProject
                            v-bind="project"
                            class="h-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#experience {
  color: #a4a4a4;
}

.timeline-container-wrapper {
  padding-left: 32px;
}

.timeline-bar {
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 20px;
  width: 2px;
  height: calc(100% - 20px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1px;
  transform-origin: top;
}

.timeline-marker {
  position: absolute;
  top: 3px;
  left: -32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #171717;
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.experience-card {
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 0.25rem;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.experience-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.2);
  background-color: #fff;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.job-title {
  font-size: 1.25rem;
  color: #fff;
  font-weight: 500;
}

.organization-name {
  font-size: 1rem;
  color: #a4a4a4;
  font-weight: 400;
  margin-top: 2px;
}

.time-period {
  font-size: 0.85rem;
  color: #818181;
  white-space: nowrap;
  padding-top: 4px;
}

.description-container {
  margin-top: 10px;
}

.description-list {
  padding-left: 20px;
  margin-bottom: 0;
  list-style-type: none;
}

.description-list li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 8px;
  line-height: 1.5;
}

.description-list li:last-child {
  margin-bottom: 0;
}

.description-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.3);
}

.description-text {
  margin-bottom: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
  }

  .time-period {
    margin-top: 8px;
  }
}

.btn-link-related {
  color: rgb(200, 200, 200);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
}
</style>
