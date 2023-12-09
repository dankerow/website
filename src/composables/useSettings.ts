export function useSettings() {
  const cookie = useCookie('cookie_consent')
  const cookieConsent = ref<boolean | null>(cookie ? Boolean(cookie.value) : null)

  const setCookiePreference = (payload: boolean) => {
    cookie.value = payload.toString()
    cookieConsent.value = payload
  }

  return {
    cookieConsent: computed(() => cookieConsent.value),
    setCookiePreference
  }
}
