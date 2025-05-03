<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="text-center">
    <div class="footer-social border-bottom py-3">
      <div class="container">
        <a
          href="https://github.com/dankerow"
          aria-label="GitHub"
          target="_blank"
        >
          <Icon name="ph:github-logo-duotone" />
        </a>

        <a
          href="https://www.linkedin.com/in/dan-mutombo/"
          aria-label="LinkedIn"
          target="_blank"
        >
          <Icon name="ph:linkedin-logo-duotone" />
        </a>

        <a
          href="https://twitter.com/dankerow"
          aria-label="Twitter"
          target="_blank"
        >
          <Icon name="ph:twitter-logo-duotone" />
        </a>
      </div>
    </div>

    <div class="footer-bottom py-3">
      <div class="container">
        <div class="referral-banner d-inline-block p-2  pb-1 mb-3">
          <a
            href="https://hetzner.cloud/?ref=X8BnX3Z5qBXO"
            class="referral-link mb-0"
            target="_blank"
          >
            <Icon
              name="ph:cloud-duotone"
              class="me-1"
            />
            Host your projects with Hetzner Cloud - Get $20 credit by signing up now
          </a>
        </div>

        <p class="mb-0">
          © {{ year }} All rights reserved. Designed and developed by Dan Mutombo.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-social {
  a {
    &:not(:last-child) {
      margin-right: 1.875rem;
    }
  }
}

.footer-bottom {
  font-size: 13px;
}

.referral-banner {
  background-color: rgba(50, 50, 50, 0.2);
  border-radius: 6px;
  margin-bottom: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(101, 100, 255, 0.15);
  }
}

.referral-link {
  color: #6564ff;
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
}
</style>
