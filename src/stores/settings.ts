import { defineStore } from 'pinia'

export interface SettingsState {
  cookieConsent: boolean|null
}

export const useSettingsStore = defineStore('settings', () => {
  const cookieConsent= ref<SettingsState['cookieConsent']>(null)

  const setCookiePreference = (payload: boolean) => {
    useCookie('cookie_consent').value = payload.toString()

    cookieConsent.value = payload
  }

  return {
    cookieConsent,
    setCookiePreference
  }
})
