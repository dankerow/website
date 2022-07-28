<template>
	<section id="about" class="py-12">
		<div class="container">
			<div class="mb-5">
				<div class="col">
					<h1 class="section-heading">
						<span class="highlight">ABO</span><span class="highlight inverse">U</span><span class="highlight">T</span> Me
					</h1>
				</div>
			</div>

			<div class="row gy-5 row-cols-1 row-cols-lg-2">
				<div class="col">
					<div class="biography">
						<p>
							<span v-for="(sentence, index) in $t('about.paragraphOne')" :key="index">
								{{ sentence }}
								<br v-if="index !== $t('about.paragraphOne').length - 1">
							</span>
						</p>
					</div>

					<div class="actions">
						<a href="/files/Resume.pdf" target="_blank" class="btn btn-primary" type="button">
							Resume
						</a>
					</div>
				</div>

				<div class="col">
					<div class="card skills-card mx-auto me-lg-0">
						<div class="card-header">
							<h1 class="card-title text-center text-uppercase mb-0">
								{{ $t('about.skillsCard.cardTitle') }}
							</h1>
						</div>
						<div class="card-header card-sub-header">
							<ul class="nav nav-pills nav-justified card-header-pills" role="tablist">
								<li v-for="category in $t('about.skillsCard.categories')" :key="category.name" class="nav-item" role="presentation">
									<button
										:id="`skills-pills-${category.tag}-tab`"
										:class="`nav-link ${category.active ? 'active' : '' } text-capitalize`"
										data-bs-toggle="pill"
										:data-bs-target="`#skills-pills-${category.tag}`"
										type="button"
										role="tab"
										:aria-controls="`skills-pills-${category.tag}`"
										aria-selected="true"
									>
										{{ category.name }}
									</button>
								</li>
							</ul>
						</div>

						<div class="card-body">
							<div id="skills-pills-tabContent" class="tab-content">
								<div
									v-for="category in $t('about.skillsCard.categories')"
									:id="`skills-pills-${category.tag}`"
									:key="`tab-content-${category.name}`"
									:class="`tab-pane fade ${category.active ? 'show active' : ''}`"
									role="tabpanel"
									:aria-labelledby="`skills-pills-${category.tag}-tab`"
								>
									<div v-for="skill in category.skills" :key="`${category.name}-${skill.title}`" class="skill-category">
										<h1 class="skill-category-title">
											{{ skill.title }}:
										</h1>
										<p class="skill-category-content">
											{{ skill.content.join(', ') }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
#about {
   background: rgb(25, 30, 33);
}

.skills-card {
	height:100%;
	min-height: 340px;

	.card-sub-header {
		background-color: rgb(22, 26, 30);
	}

	.card-title {
		color: rgb(195, 212, 232);
		letter-spacing: 10px;
		text-shadow: 0 2px 0 rgba(146, 164, 184, 0.43);
	}
}

.skill-category {
	.skill-category-title {
		border-radius: .15rem;
		background-color: rgba(22,26,30,0.6);
		color: rgb(195, 212, 232);
		display: inline-block;
		font-size: 0.825rem;
		padding: 0.25rem 0.5rem;
		text-transform: uppercase;
	}

	.skill-category-content {
		color: #C7D2DB;
		font-size: 0.875rem;
	}
}
</style>
