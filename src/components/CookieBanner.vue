<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

onMounted(() => {
  const cookieConsentBanner = document.getElementById('cookie-consent-banner') as HTMLElement

  if (!settingsStore.cookieConsent) {
    const cookieConsentBannerAlert = new window.bootstrap.Alert(cookieConsentBanner)
    cookieConsentBanner.classList.remove('d-none')
    cookieConsentBanner.classList.add('d-block')

    window.addEventListener('scroll', () => {
      const windowScroll = document.body.scrollTop || document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (windowScroll / documentHeight) * 100

      if (scrolled > 50 && !settingsStore.cookieConsent) {
        settingsStore.setCookiePreference(true)

        cookieConsentBannerAlert.close()
      }
    })
  }
})

const cookieConsent = () => {
  settingsStore.setCookiePreference(true)
}
</script>

<template>
  <div class="container">
    <div class="fixed-bottom">
      <div class="container">
        <div id="cookie-consent-banner" class="alert alert-dismissible d-none fade mx-sm-0 mx-md-2 text-center" role="alert">
          <i18n-t scope="global" keypath="cookieBanner.text" tag="p" class="mb-0">
            <template #cookiePolicy>
              <a class="text-decoration-underline" href="#" type="button" data-bs-toggle="modal" data-bs-target="#cookiePolicyModal">
                {{ $t('cookiePolicy.title') }}
              </a>
            </template>
          </i18n-t>

          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="cookieConsent">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>

    <div id="cookiePolicyModal" class="modal fade" tabindex="-1" aria-labelledby="Cookie Policy Modal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-body">
            <h1>Cookie Policy</h1>

            <p>
              This Cookies Policy explains what Cookies are and how We use them. You should read
              this policy so You can understand what type of cookies We use, or the information We
              collect using Cookies and how that information is used.
            </p>

            <p>
              Cookies do not typically contain any information that personally identifies a user,
              but personal information that we store about You may be linked to the information
              stored in and obtained from Cookies. For further information on how We use, store
              and keep your personal data secure, see our Privacy Policy.
            </p>

            <p>
              We do not store sensitive personal information, such as mailing addresses, account
              passwords, etc. in the Cookies We use.
            </p>

            <p><strong>What Are Cookies</strong></p>

            <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>

            <p><strong>How We Use Cookies</strong></p>

            <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

            <p><strong>Disabling Cookies</strong></p>

            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>
            <p><strong>The Cookies We Set</strong></p>

            <ul>
              <li>
                <p>Site preferences cookies</p>
                <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
              </li>
            </ul>

            <p><strong>Third Party Cookies</strong></p>

            <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>

            <ul>
              <li>
                <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
                <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
              </li>
            </ul>

            <hr class="my-4">
            <h2 class="text-uppercase mb-4">
              More Information about Cookies
            </h2>
            <p>You can learn more about Cookies at the following third-party websites:</p>

            <ul>
              <li>
                <a class="text-decoration-underline" href="https://www.networkadvertising.org/">Network
                  Advertising Initiative</a>
              </li>
            </ul>

            <hr class="my-4">
            <h2 class="text-uppercase mb-4">
              Contact Me
            </h2>
            <p>If you have any questions about this Cookies Policy, You can contact us:</p>
            <ul>
              <li>
                By email: <a class="text-decoration-underline" href="mailto:danmutombo1@gmail.com">danmutombo1@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.alert {
	--bs-alert-border-color: rgba(38, 38, 38, 0.8);
	--bs-alert-bg: rgba(38, 38, 38, 0.1);

	animation: slide-in-up 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	backdrop-filter: blur(12px);
	font-size: 0.875rem;
}

@media (min-width: 768px) {
	.modal-dialog {
		max-width: 700px;
	}
}

@media (min-width: 992px) {
	.modal-dialog {
		max-width: 900px;
	}
}

@media (min-width: 1200px) {
	.modal-dialog {
		max-width: 1200px;
	}
}

@keyframes slide-in-up {
	0% {
		transform: translateY(1000px);
		opacity: 0;
	}

	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>
