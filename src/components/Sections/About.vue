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
								<li class="nav-item" role="presentation">
									<button
										id="skills-pills-frontend-tab"
										class="nav-link active"
										data-bs-toggle="pill"
										data-bs-target="#skills-pills-frontend"
										type="button"
										role="tab"
										aria-controls="skills-pills-frontend"
										aria-selected="true"
									>
										Front-End
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button
										id="skills-pills-backend-tab"
										class="nav-link"
										data-bs-toggle="pill"
										data-bs-target="#skills-pills-backend"
										type="button"
										role="tab"
										aria-controls="skills-pills-backend"
										aria-selected="false"
									>
										Back-End
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button
										id="skills-pills-design-tab"
										class="nav-link"
										data-bs-toggle="pill"
										data-bs-target="#skills-pills-design"
										type="button"
										role="tab"
										aria-controls="skills-pills-design"
										aria-selected="false"
									>
										Design
									</button>
								</li>
							</ul>
						</div>

						<div class="card-body">
							<div id="skills-pills-tabContent" class="tab-content">
								<div id="skills-pills-frontend" class="tab-pane fade show active" role="tabpanel" aria-labelledby="skills-pills-frontend-tab">
									<div class="skill-category">
										<h1 class="skill-category-title">
											Languages:
										</h1>
										<p class="skill-category-content">
											HTML, CSS/SCSS, JavaScript (ES6+)
										</p>
									</div>

									<div class="skill-category">
										<h1 class="skill-category-title">
											Frameworks / Libraries:
										</h1>
										<p class="skill-category-content">
											Node.js, Express, Vue, Nuxt.js, jQuery, Bootstrap, Bulma
										</p>
									</div>

									<div class="skill-category">
										<h1 class="skill-category-title">
											Tools:
										</h1>
										<p class="skill-category-content">
											Git/GitHub
										</p>
									</div>
								</div>
								<div id="skills-pills-backend" class="tab-pane fade" role="tabpanel" aria-labelledby="skills-pills-backend-tab">
									<div class="skill-category">
										<h1 class="skill-category-title">
											Languages:
										</h1>
										<p class="skill-category-content">
											Node.js
										</p>
									</div>

									<div class="skill-category">
										<h1 class="skill-category-title">
											Tools:
										</h1>
										<p class="skill-category-content">
											Git/GitHub, MongoDB, Redis
										</p>
									</div>
								</div>
								<div id="skills-pills-design" class="tab-pane fade" role="tabpanel" aria-labelledby="skills-pills-design-tab">
									<div class="skill-category">
										<h1 class="skill-category-title">
											Software:
										</h1>
										<p class="skill-category-content">
											Adobe Photoshop, Adobe Illustrator
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
	max-width: 500px;
	width: 100%;

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
