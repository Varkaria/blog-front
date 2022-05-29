<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <section class="space-y-4 transition-all transform hover:scale-95">
    <img :src="cover" :alt="title" class="aspect-video rounded-lg overflow-hidden">
    <div class="space-y-1">
      <h1 class="text-xl font-medium line-clamp-2">
        {{ title }}
      </h1>
      <p class="opacity-70 text-sm">
        {{ description }}
      </p>
    </div>
  </section>
</template>
