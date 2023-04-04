import { useSettingsStore } from '@/stores/settings'

export default defineNuxtPlugin((nuxtApp) => {
  const settingsStore = useSettingsStore(nuxtApp.$pinia)

  const cookieConsent = useCookie('cookie_consent')

  if (!cookieConsent.value) return
  settingsStore.setCookiePreference(Boolean(cookieConsent.value))
})
