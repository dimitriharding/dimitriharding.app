// import { extendTheme, ThemeConfig } from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools'

// const styles = {
//   global: (props) => ({
//     ':root': {
//       '--sidebar-wide': '330px',
//       '--theme-color': '#f9fafb;',
//       '--theme-bg-color': mode(
//         'rgba(16 18 27 / 40%)',
//         'rgba(16 18 27 / 40%)'
//       )(props),
//     },
//   }),
// }

// const config: Partial<ThemeConfig> = {
//   useSystemColorMode: false,
//   initialColorMode: 'dark',
// }

// // const fonts = {
// //   body: 'Poppins',
// // }

// const customTheme = extendTheme({ config, styles })

// export default customTheme

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    html: {
      boxSizing: 'border-box',
      '-webkit-font-smoothing': 'antialiased',
    },
    '*': {
      outline: 'none',
      boxSizing: 'border-box',
    },
    ':root': {
      '--body-font':
        '-apple-system, BlinkMacSystemFont, "Poppins" , "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      '--theme-color': '#f9fafb;',
      '--theme-bg-color': mode(
        'rgba(16 18 27 / 40%)',
        'rgba(16 18 27 / 40%)'
      )(props),
      '--border-color': mode(
        'rgba(113 119 144 / 25%)',
        'rgba(113 119 144 / 25%)'
      )(props),
      '--inactive-color': '#333333;',
      '--search-bg': 'rgb(255 255 255 / 31%);',
      '--hover-menu-bg': 'rgba(12 15 25 / 30%);',
      '--content-title-color': '#999ba5',
      '--content-bg': 'rgb(146 151 179 / 13%)',
      '--scrollbar-bg': mode(
        'rgb(255 253 253 / 57%)',
        'rgb(1 2 3 / 40%)'
      )(props),
      '--popup-bg': mode('rgb(22 25 37)', 'rgb(22 25 37)')(props),
      '--button-inactive': 'rgb(249 250 251 / 55%)',
    },
    '::-webkit-scrollbar': {
      width: '4px',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'var(--scrollbar-bg)',
      borderRadius: '10px',
    },
  }),
}

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const fonts = {
  body: 'Poppins',
}

const customTheme = extendTheme({ ...config, styles, fonts })

export default customTheme
