const config = {
  target: 'static',
  components: false,
  buildModules: [
    '@nuxt/nitro/compat',
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api'
  ],
  nitro: {
    minify: false,
  },
  generate: {
    exclude: [/.*/],
    crawler: false
  },
  build: {
    transpile: ['@vue/composition-api']
  }
}

export default config
