import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '婚かつ人 - 婚活で出たった人について解説',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/konkatsubito.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      '@nuxtjs/google-fonts',
      {
        families:{
          'Noto+Sans+JP':true
        }
      }
      

    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/date-fns'
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  privateRuntimeConfig: {
    apiURL: process.env.API_URL,
    apiKey: process.env.API_KEY
  },
  publicRuntimeConfig: {
    apiURL: process.env.NODE_ENV !== 'production' ? process.env.API_URL : '',
    apiKey: process.env.NODE_ENV !== 'production' ? process.env.API_KEY : ''
  },
  generate: {
    async routes() {
      const pages = await axios
        .get('https://konkatsubito.microcms.io/api/v1/blog?limit=100', {
          headers: { 'X-MICROCMS-API-KEY': 'a0e3502938bf4d198b1871310d0505697174' }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  }
}
