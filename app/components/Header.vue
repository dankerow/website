<script setup lang="ts">
const route = useRoute()
const navbarBrandName = computed(() => route.name === 'index' ? 'D' : splitString(route.name)[0])

const splitString = (string: string) => {
  return string.split('-')
}
</script>

<template>
  <header class="top-0 start-0 end-0 position-fixed w-100">
    <nav class="navbar navbar-dark navbar-expand-md">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">
          <span class="text text-capitalize p-1">
            [~{{ navbarBrandName }}</span><span class="highlight p-1">]
          </span>
        </NuxtLink>

        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon name="solar:hamburger-menu-line-duotone" size="1.8em" class="text-white" />
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-3">
              <NuxtLink to="/blog" class="nav-link">
                Blog
              </NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink href="/#projects" class="nav-link">
                Projects
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
	z-index: 2;

	.navbar {
    background-color: rgba(var(--bs-body-bg-rgb), 0.3);
		border-bottom: 1px solid var(--bs-border-color-translucent);
		backdrop-filter: blur(12px);

		.navbar-brand {
			font-weight: 500;

			.text {
				transition: background-color 0.3s linear, color 0.3s linear;
			}

			.highlight {
				background-color: var(--bs-primary);
				color: rgb(51, 61, 73);
				transition: background-color 0.3s linear, color 0.3s linear;
			}

			&:hover {
				.text {
					background-color: var(--bs-primary);
					color: rgb(51, 61, 73);
				}

				.highlight {
					background-color: unset;
					color: var(--bs-primary);
				}
			}
		}

		.nav-item {
			.nav-link {
				color: #fff;

				&:before {
					content: '~/ ';
					color: var(--bs-primary);
					font-weight: 500;
				}

				&:after {
					content: '/';
					color: var(--bs-primary);
					font-weight: 500;
					opacity: 0;
					position: absolute;
					transition: opacity 0.3s ease;
					margin-left: 3px;
				}

				&:hover {
					color: var(--bs-primary);

					&:after {
						opacity: 1;
					}
				}

				&.nuxt-link-exact-active {
					color: var(--bs-primary);
				}
			}
		}
	}
}
</style>
