<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      blogs: [],
      fetch: true,
    }
  },
  async mounted() {
    await this.fetchBlogs()
  },
  methods: {
    async fetchBlogs() {
      this.fetch = true
      const data = await this.$content('blogs').fetch()
      this.blogs = data
      this.fetch = false
    },
  },
}
</script>

<template>
  <div class="px-3 sm:px-0">
    <div class="grid sm:grid-cols-2 gap-x-3 gap-y-5">
      <template v-if="fetch">
        <BlogSkeleton v-for="i in 2" :key="i" />
      </template>
      <template v-else>
        <NuxtLink v-for="a of blogs" :key="a.path" :to="a.path">
          <BlogCard :title="a.title" :description="a.description" :cover="a.cover" />
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
