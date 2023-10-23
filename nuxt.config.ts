// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: { 
    public: {
      title: process.env.title,
      api: process.env.api,
    },
   },
  app: {
    head: {
      titleTemplate: "", //
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ดูหนัง.XYZ ดูหนังออนไลน์ เต็มเรื่อง HD ดูหนังใหม่ชนโรง 2022 Netflix หนังแอคชั่น หนังฝรั่ง หนังไทย ทีวีออนไลน์ พากย์ไทย Master zoom ดูผ่านมือถือได้ทั้ง IOS และ Andriod นอกจากนี้รองรับ PC อีกด้วย หนัง4k ดูหนังฟรีผ่านมือถือ Tablet ไม่มีโฆษณา' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel:"canonical", href: `${process.env.baseUrl}`}
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.5.1.min.js",
          type: "text/javascript",
        },        
        // {
        //   src: "_nuxt/node_modules/bootstrap-vue/dist/bootstrap-vue.js",
        //   type: "text/javascript",
        // },        
      ],
    },
  },
 
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
    "assets/index.css",
  ],
  plugins: [
    // { src: '@/plugins/vue-bootstrap-typeahead.js', ssr: false },
    { src: '@/plugins/jquery.js', ssr: true, mode: 'server' },
    { src: '@/plugins/axios.js', ssr: true, mode: 'server' },
    // { src: '@/plugins/test.js', ssr: false, mode: 'server' },
  ],
});
