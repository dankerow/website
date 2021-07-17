<template>
	<section id="about" class="py-12" style="background: #191e21;">
		<div class="container">
			<div class="row row-cols-2 mb-5">
				<div class="col">
					<h1 class="section-heading">
						<span class="highlight">ABO</span><span class="highlight inverse">U</span><span class="highlight">T</span> Me.
					</h1>
				</div>
			</div>

			<div class="row gy-5 row-cols-1 row-cols-lg-2">
				<div class="col">
					<div class="biography">
						<p style="font-size: 16px;">
							Hi, I'm Dan, a junior web developer living in Canada. I like to express my creativity in many ways, such as creating websites and graphic designs. I started to get interested in web development and graphic design in late 2015. Since then I have continued to learn and practice each of these areas.
							<br>
							I am by nature very curious, I like to discover new things, and I easily integrate into a team.
							<br>
							I speak several languages such as French, English, and Italian, and I am learning Spanish which I already understand quite well.
						</p>

						<p style="font-size: 16px;">
							I don't have any projects to show at the moment, that's why I am looking for opportunities to apply the skills I have acquired on my own over the last 3 years.
						</p>
					</div>

					<div class="actions">
						<button class="btn btn-primary">
							Download Resume
						</button>
					</div>
				</div>

				<div class="col">
					<div class="card float-end" style="height:100%;min-height: 350px;max-width: 500px;width: 100%;">
						<div class="card-header text-center text-uppercase">
							<h1 class="mb-0" style="letter-spacing: 26px;color: rgb(195, 212, 232);text-shadow: 0 2px 0 rgba(146, 164, 184, 0.43);">
								Skills
							</h1>
						</div>
						<div class="card-header" style="background-color: #161a1e;">
							<ul class="nav nav-pills justify-content-around" role="tablist">
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
									<div>
										<h1 class="d-inline-block h5 text-uppercase px-2 py-1 rounded-1" style="background-color: rgba(22,26,30,0.6);color: rgb(195, 212, 232);">
											Languages:
										</h1>
										<p style="font-size: 14px;">
											HTML, CSS, JavaScript (ES6+)
										</p>

										<h1 class="d-inline-block h5 text-uppercase px-2 py-1 rounded-1" style="background-color: rgba(22,26,30,0.6);color: rgb(195, 212, 232);">
											Frameworks:
										</h1>
										<p style="font-size: 14px;">
											Bootstrap, Bulma, Vue
										</p>

										<h1 class="d-inline-block h5 text-uppercase px-2 py-1 rounded-1" style="background-color: rgba(22,26,30,0.6);color: rgb(195, 212, 232);">
											Tools:
										</h1>
										<p style="font-size: 14px;">
											jQuery, SCSS
										</p>
									</div>
								</div>
								<div id="skills-pills-backend" class="tab-pane fade" role="tabpanel" aria-labelledby="skills-pills-backend-tab">
									<div>
										<h1 class="d-inline-block h5 text-uppercase px-2 py-1 rounded-1" style="background-color: rgba(22,26,30,0.6);color: rgb(195, 212, 232);">
											Languages:
										</h1>
										<p style="font-size: 14px;">
											Node.js
										</p>

										<h1 class="d-inline-block h5 text-uppercase px-2 py-1 rounded-1" style="background-color: rgba(22,26,30,0.6);color: rgb(195, 212, 232);">
											Tools:
										</h1>
										<p style="font-size: 14px;">
											MongoDB, Redis
										</p>
									</div>
								</div>
								<div id="skills-pills-design" class="tab-pane fade" role="tabpanel" aria-labelledby="skills-pills-design-tab">
									<div>
										<h1 class="d-inline-block h5 text-uppercase px-2 py-1 rounded-1" style="background-color: rgba(22,26,30,0.6);color: rgb(195, 212, 232);">
											Software:
										</h1>
										<p style="font-size: 14px;">
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
