// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css", '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    "@pinia-plugin-persistedstate/nuxt",
    
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  pages: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**',
      'stores'
    ]
  },

  devtools: {
    enabled: true,
  },
  axios: {
    proxy: false,
  }
});
