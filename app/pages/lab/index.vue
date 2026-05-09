<script setup lang="ts">
definePageMeta({
  title: 'Lab',
  description: 'A collection of interactive experiments and mini-projects. Feel free to explore and have fun!'
})

const games = [
  {
    title: 'hangman',
    description: 'A simple word guessing game',
    icon: 'mdi:human-handsdown'
  },
  {
    title: 'tic-tac-toe',
    description: 'A classic game of Xs and Os',
    icon: 'carbon:type-pattern'
  },
  {
    title: 'typing test',
    description: 'Test your typing speed',
    icon: 'ph:keyboard-duotone'
  }
]
</script>

<template>
  <main>
    <PageHeader
      title="Lab"
      subtitle="A collection of interactive experiments and mini-projects. Feel free to explore and have fun!"
      icon="ph:atom-duotone"
    />

    <UContainer class="container py-8">
      <div
        id="games"
        class="relative scroll-m-20 mb-10"
      >
        <div class="flex items-center mb-5">
          <h2 class="section-heading text-white mb-0 me-6">
            <Icon
              name="ph:game-controller-duotone"
              class="me-2"
            />
            Games
          </h2>

          <div class="heading-line grow" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <UCard
            v-for="(game, index) in games"
            :key="index"
            class="game-card h-full shadow-sm relative overflow-hidden"
            :ui="{
              body: 'p-4 sm:p-4',
            }"
          >
            <div class="game-icon mb-3">
              <Icon
                :name="game.icon"
                size="2em"
              />
            </div>

            <h3 class="h4 text-white capitalize mb-2">
              {{ game.title }}
            </h3>

            <p class="mb-5">
              {{ game.description }}
            </p>

            <UButton
              :to="`/lab/games/${game.title.toLowerCase().replace(' ', '-')}`"
              variant="subtle"
            >
              Play Now

              <Icon
                name="ph:caret-right-bold"
                class="ms-2"
              />
            </UButton>

            <div class="card-shine" />
          </UCard>
        </div>
      </div>
    </UContainer>
  </main>
</template>

<style scoped>
.lab-hero {
  background-color: rgba(18, 18, 18, 0.4);
  backdrop-filter: blur(80px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  position: relative;
  overflow: hidden;
}

.lab-decoration {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.lab-icon {
  color: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.lab-gradient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  z-index: -1;
}

.lab-gradient-blob-1 {
  background: linear-gradient(45deg, #6564ff, #A855F7);
  width: 500px;
  height: 500px;
  top: -250px;
  right: -100px;
}

.lab-gradient-blob-2 {
  background: linear-gradient(45deg, #06B6D4, #14B8A6);
  width: 400px;
  height: 400px;
  bottom: -200px;
  left: -100px;
}

.section-heading {
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.heading-line {
  height: 2px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);
}

.game-card {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
    border-color: rgba(255, 255, 255, 0.1);

    .game-icon {
      transform: scale(1.1);
    }

    .card-shine {
      opacity: 0.1;
    }
  }
}

.game-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  color: #a4a4a4;
  transition: transform 0.3s ease;
}

.card-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg) translateX(-100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  animation: shine 1s infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

@keyframes shine {
  0% {
    transform: skewX(-20deg) translateX(-100%);
  }
  20% {
    transform: skewX(-20deg) translateX(100%);
  }
  100% {
    transform: skewX(-20deg) translateX(100%);
  }
}
</style>
