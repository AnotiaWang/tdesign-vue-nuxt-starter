// tailwind config file
import plugin from 'tailwindcss/plugin'

// const Rem = generateRem()
// console.log(`generateRem successful,1 = ${Rem[1]}`)

export const mode = 'jit'
export const darkMode = 'class'
export const theme = {
  extend: {
    colors: {
      'light-background': '#FFFFFF',
      'dark-background': '#121212',
    },
    // spacing: {
    //   'banner-height': '494px',
    //   ...Rem,
    // },
    // lineHeight: {
    //   ...Rem,
    // },
    // fontSize: {
    //   ...Rem,
    // },
    // minHeight: {
    //   ...Rem,
    // },
    // minWidth: {
    //   ...Rem,
    // },
    // maxWidth: {
    //   ...Rem,
    // },
    // maxHeight: {
    //   ...Rem,
    // },
    letterSpacing: {
      doublewidest: '.2em',
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}

export const plugins = [
  plugin(function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* IE and Edge */
        '-ms-overflow-style': 'none',

        /* Firefox */
        'scrollbar-width': 'none',

        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    })
  }),
]
export const content = ['app.vue', '/pages/**/*.vue']

/**1 = 1/16rem */
// function generateRem() {
//   const result = {}
//   console.log('generating width')
//   for (let i = 0; i <= 1920; i++) {
//     result[i] = `${i / 16}rem`
//   }
//   return result
// }
