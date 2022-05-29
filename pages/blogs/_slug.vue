<script>
export default {
  async asyncData({ params, $content, redirect }) {
    const page = await $content(`blogs/${params.slug}`).fetch().catch(() => {
      redirect('/')
    })
    return { page }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.page.description.slice(0, 160),
        },
        { property: 'og:image', content: this.page.cover },
      ],
    }
  },
}
</script>

<template>
  <div class="space-y-6">
    <img :src="page.cover" :alt="page.title" class="aspect-video sm:rounded-lg">

    <div class="px-3 md:px-0">
      <div class="space-y-2">
        <BlogTag />
        <h1 class="text-3xl">
          {{ page.title }}
        </h1>
      </div>

      <div class="mt-4">
        <nuxt-content class="prose dark:prose-invert" :document="page" />
      </div>
    </div>
  </div>
</template>
