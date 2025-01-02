module.exports = {
  content: [
    './source/**/*.{html,js,css,hubspot}',
    '../templates/**/*.html',
    '../components/**/*.html',
    '../**/*.html',
  ],
  safelist: [
    'mx-auto',
    {
      pattern: /^(bg-|border-|text-|w-|md:w-|lg:w-|grid-cols-|mt-|ml-|mr-|mb-|pt-|pb-|max-w|md:grid-cols-|h-)/,
      variants: ["hover", "active"],
    },
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    container: {
      center: true,
    },
    colors: {
          'black':      '#000',
          'white':      '#FFF',
          'gray':       '#6279a9',
          'gray-dark':  '#545C6C',
          'gray-light': '#A9A9B5',
          'blue':       '#03b6fb',
          'blue-dark':  '#3d85c6',
          'navy':       '#1e2533',
          'pink':       '#f53bad',
        },
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
            'opensans': ['Open Sans', 'sans-serif']
        },
        spacing: {
            'quarter': '0.25rem',
            'half': '0.5rem',
            'less': '0.75rem',
            'more': '1.25rem',
            0: '0',
            1: '1rem',
            2: '2rem',
            3: '3rem',
            4: '4rem',
            5: '5rem',
            6: '6rem',
            7: '7rem',
            8: '8rem'
        },
        fontSize: {
            'xs': '0.75rem',    //12px
            'sm': '0.875rem',   //14px
            'base': '1rem',     //16px
            'lg': '1.25rem',    //20px
            'xl': '1.5rem',     //24px
            '2xl': '2rem',      //32px
            '3xl': '3rem',      //48px
            '4xl': '4rem',      //64px
        },
        screens: {
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px'
        },
        extend: {
        }
  },
  plugins: [],
};