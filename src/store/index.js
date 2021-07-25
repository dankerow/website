export const state = () => ({
	cookieConsent: false
})

export const mutations = {
	// eslint-disable-next-line no-shadow
	setCookieConsent(state, consented) {
		state.cookieConsent = consented
	}
}

export const getters = {
	// eslint-disable-next-line no-shadow
	getCookieConsent: (state) => {
		return state.cookieConsent
	}
}

export const actions = {
	cookieConsent({ commit }, { consented }) {
		this.$cookies.set('cookie_consent', Number(consented), {
			path: '/',
			maxAge: 60 * 60 * 24 * 7,
			sameSite: 'lax'
		})

		commit('setCookieConsent', consented)
	},
	nuxtServerInit({ dispatch }, { $cookies }) {
		const consentCookie = $cookies.get('cookie_consent')

		if (consentCookie) {
			dispatch('cookieConsent', { consented: Boolean(consentCookie) })
		}
	}
}
