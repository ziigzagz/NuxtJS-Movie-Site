// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        
      ],
    },
  },
  modules: [
    // "@nuxtjs/axios",
  ],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
    "assets/index.css",
  ],
  plugins: [
    // { src: '@/plugins/vue-bootstrap-typeahead.js', ssr: false },
    { src: '@/plugins/jquery.js', ssr: false, mode: 'server' },
    { src: '@/plugins/axios.js', ssr: false, mode: 'server' },
  ],
});
