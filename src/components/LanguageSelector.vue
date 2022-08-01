<template>
	<div class="dropdown">
		<a
			class="nav-link"
			href="#"
			role="button"
			data-bs-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
			aria-label="Language Selector"
		>
			<LanguageIcon />
		</a>

		<div class="dropdown-menu dropdown-menu-dark">
			<span class="dropdown-item active">
				{{ $i18n.locales.find(locale => locale.code === $i18n.locale).name }}
			</span>
			<span
				v-for="locale in availableLocales"
				:key="locale.code"
				class="dropdown-item"
				@click="changeLocale(locale.code)"
			>
				{{ locale.name }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		LanguageIcon: () => import('~/assets/icons/language.svg?inline')
	},
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
		}
	},
	methods: {
		changeLocale(locale) {
			return this.$i18n.setLocale(locale)
		}
	}
}
</script>

<style lang="scss" scoped>
.dropdown:hover > .dropdown-menu {
	opacity: 1;
	transform: translateY(0);
	visibility: visible;
}

.nav-link {
	svg {
		width: 1.8rem;
	}
}

.dropdown-menu {
	transform: translateY(20px);
	transition: all 0.3s ease-in-out;
	opacity: 0;
	visibility: hidden;
	display: block;
	right: 0;
	left: auto;

	.dropdown-item {
		border-radius: 0.15rem;
		cursor: pointer;
		display: inline-block;
		transition: all 0.3s ease-in-out;

		&:not(:last-child) {
			margin-bottom: 0.25rem;
		}

		&.active {
			cursor: default;
		}
	}
}
</style>
