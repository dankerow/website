<template>
	<section id="experience" class="py-12">
		<div class="container">
			<div class="mb-5">
				<h1 class="section-heading">
					<span class="highlight">E</span><span class="highlight inverse">XP</span><span class="highlight">ERIENCE</span>
				</h1>
			</div>

			<div class="row">
				<div class="experience-pills mx-auto d-flex align-items-start">
					<div id="experience-pills-tab" class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
						<button
							v-for="(work, index) in $t('experience.jobs')"
							:id="`experience-pills-${index}-tab`"
							:key="index"
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
					<div id="experience-pills-tabContent" class="tab-content">
						<div
							v-for="(work, index) in $t('experience.jobs')"
							:id="`experience-pills-${index}`"
							:key="index"
							:class="`tab-pane fade show ${index === 0 ? 'active' : ''}`"
							role="tabpanel"
							:aria-labelledby="`experience-pills-${index}-tab`"
						>
							<h1 v-if="work.jobTitle" class="h2 mb-1">
								{{ work.jobTitle }}
							</h1>
							<h2 v-if="work.jobType || work.timePeriod" class="h5 mb-4 text-muted">
								<span v-if="work.jobType">
									{{ work.jobType }}
								</span>
								<span v-if="work.timePeriod">
									| {{ work.timePeriod.start }} - {{ work.timePeriod.end }}
								</span>
							</h2>

							<div v-if="typeof work.description === 'object'">
								<ul v-for="(line, lineIndex) in work.description" :key="`${work.organizationName.toLowerCase()}-description-line-${lineIndex}`" style="padding-left: 1rem; list-style-type: square;">
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
.experience-pills {
	max-width: 1000px;
	min-height: 240px;
}

#experience-pills-tab {
	width: max-content;
}

.nav {
	border-right: 2px solid rgb(46, 52, 57);
	counter-reset: nav-link;
}

.nav-link {
	border-left: 3px solid rgb(28, 33, 37);
	border-radius: 0;
	padding: 0.475rem 0.875rem;
	white-space: nowrap;

	&:before {
		counter-increment: nav-link;
		content: "0" counter(nav-link) ".";
		color: rgb(195, 212, 232);
		font-family: "Roboto Mono", sans-serif;
	}

	&.active {
		background-color: rgba(51, 61, 73, 0.35);
		border-left: 3px solid rgb(195, 212, 232);
	}
}

.tab-content {
	width: 100%;
	padding-left: 1rem;
}
</style>
