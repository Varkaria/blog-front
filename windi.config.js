import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#cbcbcb',
            fontFamily: ['Niramit'],
            a: {
              'color': '#c4d6ff',
              '&:hover': {
                color: '#c4d6ff',
              },
              'textDecoration': 'none',
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h4: {
              color: '#d1d1d1',
            },
            strong: {
              color: '#fff',
            },
            img: {
              borderRadius: '5px',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
  ],
})
