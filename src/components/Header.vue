<template>
	<header>
		<nav class="navbar navbar-dark navbar-expand-md">
			<div class="container">
				<NuxtLink class="navbar-brand" to="/">
					<span class="text">DAN</span><span class="highlight">M</span>
				</NuxtLink>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					Menu
				</button>
				<div id="navbarSupportedContent" class="collapse navbar-collapse">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a v-scroll-to="'#about'" href="#about" class="nav-link">
								{{ $t('about.index') }}
							</a>
						</li>
						<li class="nav-item">
							<a v-scroll-to="'#experience'" href="#experience" class="nav-link">
								{{ $t('experience.index') }}
							</a>
						</li>
						<li class="nav-item">
							<a v-scroll-to="'#projects'" href="#projects" class="nav-link">
								{{ $t('projects.index') }}
							</a>
						</li>
						<li class="nav-item">
							<LanguageSelector />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	z-index: 99;

	.navbar {
		background: rgba(28, 33, 37, 0.8);
		backdrop-filter: blur(12px);

		.navbar-brand {
			font-size: 25px;
			font-weight: 700;

			.text {
				transition: background-color 500ms linear, color 500ms linear;
			}

			.highlight {
				background-color: rgb(195, 212, 232);
				color: rgb(51,61,73);
				transition: background-color 500ms linear, color 500ms linear;
			}

			&:hover {
				.text {
					background-color: rgb(195, 212, 232);
					color: rgb(51,61,73);
				}

				.highlight {
					background-color: unset;
					color: rgb(146,164,184);
				}
			}
		}

		.nav-item {
			&:not(:first-child) {
				margin-left: 16px;
			}

			.nav-link {
				color: #fff;

				&:before {
					font-weight: 500;
					content: './ ';
					color: rgb(146, 164, 184);
				}

				&:after {
					font-weight: 500;
					content: '/';
					color: rgb(146, 164, 184);
					opacity: 0;
					position: absolute;
					transition: opacity 0.5s ease;
					margin-left: 3px;
				}

				&:hover {
					color: rgb(146, 164, 184);

					&:after {
						opacity: 1;
					}
				}

				&.nuxt-link-exact-active {
					color: rgb(146, 164, 184);
				}
			}
		}
	}
}
</style>
