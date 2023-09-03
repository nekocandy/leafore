/* eslint-disable n/prefer-global/process */
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Leafore',
      meta: [
        {
          name: 'description',
          content: 'A platform to sustain ♻️, educate 🧠 and enable eco-friendly 🌱 best practices!',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.png',
        },
      ],
    },
  },

  auth: {
    enableGlobalAppMiddleware: true,
  },

  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@sidebase/nuxt-auth'],
  css: [
    '@unocss/reset/tailwind.css',
    'notivue/notifications.css',
    'notivue/animations.css',
  ],
  imports: {
    imports: [
      {
        name: 'nanoid',
        from: 'nanoid',
      },
      {
        name: 'consola',
        from: 'consola',
      },
    ],
  },
  build: {
    transpile: [
      'trpc-nuxt',
    ],
  },
  runtimeConfig: {
    auth: {
      DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
      DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
      SECRET: process.env.AUTH_SECRET,
    },
  },
})
