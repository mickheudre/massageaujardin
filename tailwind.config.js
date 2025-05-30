/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      serif: ['Buenard'],
      sans: ['Noto Sans']
    },
    colors: {
      duckgreen: '#147673',
      cream: '#DAD7CD',
      leaf: '#344E41',
      norway: '#A3B18A'
    },
    lineHeight: {
      'extra-tight': '1.15',
    }
      
  },
  variants: {},
  plugins: [
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
