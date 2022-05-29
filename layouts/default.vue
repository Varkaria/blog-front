<template>
  <div class="max-w-2xl mx-auto text-white space-y-3">
    <nav class="py-6 px-3 md:px-0">
      <div class="flex items-center">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/">
            <svg
              class="transition-all transform cursor-pointer hover:scale-95" width="48" height="48"
              viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd" clip-rule="evenodd" d="M42.7442 0H4.22293C3.2246 0 2.30718 0.346426 1.58432 0.925627L22.2993
                48.8742C22.5989 49.5678 22.7406 50.2899 22.7402 51H46.7771C49.1094 51 51 49.1094
                51 46.7771V7.54322L33.9563 42.6893C32.6644 45.353 29.4582 46.4649 26.7947 45.1733C24.1312
                43.8818 23.0191 40.6753 24.3108 38.0119L42.7442 0ZM11.5403 51L0 24.2878V46.7771C0
                49.1094 1.89067 51 4.22293 51H11.5403Z" fill="white"
              />
            </svg>
          </NuxtLink>
          <a href="https://webring.wonderful.software#varkaria.tech" title="วงแหวนเว็บ" class="block w-[32px] h-[32px]">
            <img src="https://webring.wonderful.software/webring.white.svg" alt="วงแหวนเว็บ" width="{32}" height="{32}">
          </a>
        </div>

        <div class="hidden my-auto ml-auto space-x-8 sm:block text-base">
          <a :href="`${$config.baseURL}/`">Profile</a>
          <a :href="`${$config.baseURL}/about`">About me</a>
          <a :href="`${$config.baseURL}/projects`">Projects</a>
          <a :href="`${$config.baseURL}/works`">Works</a>
        </div>
      </div>
    </nav>

    <Nuxt />

    <footer class="mx-auto pt-5 pb-10">
      <p class="text-center">
        Made with 💖 by <a href="https://github.com/varkaria">Varkaria</a>
      </p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Niramit:wght@300;400;500;600&display=swap');

body {
  background-color: #181818;
  font-family: 'Noto Sans Thai', sans-serif;
}
</style>
