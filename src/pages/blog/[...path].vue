<script setup lang="ts">
const path = useRoute().path
const { data: article } = await useAsyncData('article', () => queryContent(path).findOne())

if (!article) {
  throw createError({ statusCode: 404, message: 'The article you are looking for couldn\'t be found.' })
}

const articleDate = formatDate(article.value.date)
</script>

<template>
  <div>
    <section class="hero d-flex justify-content-center align-items-center flex-column position-relative text-center pt-12">
      <div class="container">
        <h2 class="title m-0 text-uppercase">
          {{ article.title }}
        </h2>
        <p> {{ article.description }}</p>

        <div class="info fs-5 fw-semibold d-flex flex-wrap position-absolute">
          <div class="row row-cols-auto gx-2">
            <div class="col">
              <div v-if="article.date" class="py-1 px-2 rounded-1 text-bg-primary">
                {{ articleDate }}
              </div>
            </div>
            <div class="col">
              <div v-if="article.tags" class="py-1 px-2 rounded-1 text-bg-primary text-capitalize">
                {{ article.tags.join(', ') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <article>
        <div
          class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 justify-content-center py-5"
        >
          <div class="col col-lg-9 order-2 order-lg-1">
            <ContentRenderer :value="article">
              <template #empty>
                <p>No content found.</p>
              </template>
            </ContentRenderer>
          </div>
          <div class="col col-lg-3 order-1 order-lg-2">
            <BlogToc :links="article.body.toc.links" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-color: rgba(38, 38, 38, 0.3);
  border-bottom: 2px solid rgba(38, 38, 38, 0.8);
  height: 30vh;
}
.title {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
}
.info {
  bottom: 10px;
}
</style>
