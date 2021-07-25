<template>
	<section id="experience" class="py-12">
		<div class="container">
			<div class="mb-5">
				<h1 class="section-heading">
					<span class="highlight">E</span><span class="highlight inverse">XP</span><span class="highlight">ERIENCE</span>
				</h1>
			</div>

			<div class="row gy-2 row-cols-1 row-cols-sm-2">
				<div class="col col-lg-4">
					<div class="experience-pills float-end">
						<div id="experience-pills-tab" class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
							<button
								v-for="(work, index) in $t('experience.jobs')"
								:id="`experience-pills-${index}-tab`"
								:key="index"
								class="nav-link active"
								data-bs-toggle="pill"
								:data-bs-target="`#experience-pills-${index}`"
								type="button"
								role="tab"
								:aria-controls="`experience-pills-${index}`"
								aria-selected="true"
							>
								{{ work.organizationName }}
							</button>
						</div>
					</div>
				</div>
				<div class="col">
					<div id="experience-pills-tabContent" class="tab-content">
						<div
							v-for="(work, index) in $t('experience.jobs')"
							:id="`experience-pills-${index}`"
							:key="index"
							class="tab-pane fade show active"
							role="tabpanel"
							:aria-labelledby="`experience-pills-${index}-tab`"
						>
							<p>
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
	width: 45%;
}

@media (max-width: 768px) {
	.experience-pills {
		width: 100%;
	}
}

.nav {
	border-right: 2px solid rgb(46, 52, 57);
	counter-reset: nav-link;
}

.nav-link {
	border-left: 3px solid rgb(28, 33, 37);
	border-radius: 0;
	padding: 0.475rem 0;

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
	padding-left: 1rem;
}
</style>
