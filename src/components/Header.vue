<template>
	<header>
		<nav class="navbar navbar-expand-md">
			<div class="container">
				<NuxtLink class="navbar-brand" to="/">
					<span class="text">DAN</span><span class="highlight">M</span>
				</NuxtLink>
				<div id="navbarCollapse" class="collapse navbar-collapse">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a v-scroll-to="'#about'" href="#about" class="nav-link">
								About
							</a>
						</li>
						<li class="nav-item">
							<a v-scroll-to="'#experience'" href="#experience" class="nav-link">
								Experience
							</a>
						</li>
						<li class="nav-item">
							<a v-scroll-to="'#projects'" href="#projects" class="nav-link">
								Projects
							</a>
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
	position: sticky;
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

			&.dropdown {
				&:hover > .dropdown-menu {
					opacity: 1;
					transform: translateY(0);
					visibility: visible;
				}
			}

			.dropdown-menu {
				box-shadow: -1px 2px 19px 3px rgba(14, 0, 40, 0.1);
				transform: translateY(20px);
				transition: opacity 0.3s ease-in-out;
				opacity: 0;
				visibility: hidden;
				display: block;

				.dropdown-item {
					display: inline-block;
					transition: color 0.3s ease-in-out;
				}
			}
		}
	}
}
</style>
