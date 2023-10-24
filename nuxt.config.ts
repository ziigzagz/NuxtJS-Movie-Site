// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  site: {
    url: process.env.baseUrl // Replace with your actual site URL
  },
  runtimeConfig: {
    sitemap: {
      hostname: 'https://www.ljpc.nl',
      gzip: true,
      path: '/sitemap.xml',
      routes: [],
      defaults: {
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date()
      }
  },
    public: {
      title: process.env.title,
      api: process.env.api,
      baseUrl: process.env.baseUrl,
      logoWeb: process.env.logoWeb,
      headerText: process.env.headerText,
      footerText: process.env.footerText,
      footerTextCopyRight: process.env.footerTextCopyRight,
      description: process.env.description,
    },
    mode: "universal",
    target: "static",
  },
  app: {
    
    head: {
      titleTemplate: "", //
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: process.env.description ,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: `${process.env.baseUrl}` },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.5.1.min.js",
          type: "text/javascript",
        },
      ],
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "nuxt-simple-sitemap",
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap", "sitemap.xml"],
      ignore: ["/tak", "/konfiguration", "/checkout"],
    },
  },
  
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
    { src: "@/plugins/jquery.js", ssr: true, mode: "server" },
    { src: "@/plugins/axios.js", ssr: true, mode: "server" },
  ],
});
