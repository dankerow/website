<template>
	<header class="top-0 start-0 end-0 position-fixed w-100">
		<nav class="navbar navbar-dark navbar-expand-md">
			<div class="container">
				<NuxtLink to="/" class="navbar-brand">
					<span class="text p-1">[~D</span><span class="highlight p-1">]</span>
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
							<a href="#about" class="nav-link">
								{{ $t('about.index') }}
							</a>
						</li>

						<li class="nav-item">
							<a href="#blog" class="nav-link">
								Blog
							</a>
						</li>

						<li class="nav-item">
							<a href="#experience" class="nav-link">
								{{ $t('experience.index') }}
							</a>
						</li>

						<li class="nav-item">
							<a href="#projects" class="nav-link">
								{{ $t('projects.index') }}
							</a>
						</li>

						<LanguageSelector />
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	z-index: 99;

	.navbar {
		background: rgba(23, 23, 23, 0.3);
		border-bottom: 1px solid rgba(38, 38, 38, 0.8);
		backdrop-filter: blur(12px);

		.navbar-brand {
			font-size: 25px;
			font-weight: 500;

			.text {
				transition: background-color 0.3s linear, color 0.3s linear;
			}

			.highlight {
				background-color: rgb(195, 212, 232);
				color: rgb(51,61,73);
				transition: background-color 0.3s linear, color 0.3s linear;
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
			.nav-link {
				color: #fff;

				&:before {
					content: './ ';
					color: rgb(146, 164, 184);
					font-weight: 500;
				}

				&:after {
					content: '/';
					color: rgb(146, 164, 184);
					font-weight: 500;
					opacity: 0;
					position: absolute;
					transition: opacity 0.3s ease;
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
