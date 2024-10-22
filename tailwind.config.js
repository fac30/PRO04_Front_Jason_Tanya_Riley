/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			container: {
				center: true,
				padding: '1rem',
			},
      colors: {
        primary: {
          'B': '#e2f9bd',
          'A': '#c2e9ad',
          '0': '#a0da81',
          '1': '#84b26b',
          '2': '#688c55',
          '3': '#4e6740',
          '4': '#35442c',
          '5': '#1e251a',
        },
        accent: {
          'A': '#b0e1e9',
          '0': '#81cdda',
          '1': '#6ba8b2',
          '2': '#56848b',
          '3': '#416167',
          '4': '#2d4144',
          '5': '#1a2325',
        },
        danger: {
          0: '#b41c2b',
          1: '#851d22',
          2: '#581919',
          3: '#2f1310',
        },
        success: {
          0: '#009f42',
          1: '#167533',
          2: '#184d25',
          3: '#132916',
        },
        warning: {
          0: '#f0ad4e',
          1: '#af7f3c',
          2: '#71532a',
          3: '#392b19',
        },
        info: {
          0: '#388cfa',
          1: '#3267b5',
          2: '#284475',
          3: '#1a253b',
        },
        neutral: {
          0: '#ffffff',
          1: '#c6c6c6',
          2: '#919191',
          3: '#5e5e5e',
          4: '#303030',
          5: '#000000',
        },
      },
			textShadow: {
				'outline': '1px 1px 0 var(--tw-shadow-color), -1px 1px 0 var(--tw-shadow-color), 1px -1px 0 var(--tw-shadow-color), -1px -1px 0 var(--tw-shadow-color)'
			}
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-outline': {
          textShadow: theme('textShadow.outline'),
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
