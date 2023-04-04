<script setup lang="ts">
import type { LocaleObject } from 'vue-i18n-routing'

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
	return (locales.value as LocaleObject[]).filter((l: { code: any; value: any; }) => l.code !== locale.value)
})
</script>

<template>
	<li class="nav-item dropdown">
		<a
			class="nav-link"
			href="#"
			role="button"
			data-bs-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
			aria-label="Language Selector"
		>
			<Icon name="ph:globe-simple-duotone" />
		</a>

		<div class="dropdown-menu dropdown-menu-dark">
			<span class="dropdown-item active">
				{{ locales.find(l => l.code === locale).name }}
			</span>
			<span
				v-for="availableLocale in availableLocales"
				:key="availableLocale.code"
				class="dropdown-item"
				@click="setLocale(availableLocale.code)"
			>
				{{ availableLocale.name }}
			</span>
		</div>
	</li>
</template>

<style lang="scss" scoped>
.dropdown:hover > .dropdown-menu {
	opacity: 1;
	transform: translateY(0);
	visibility: visible;
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
