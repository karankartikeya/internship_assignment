/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        gradient: "linear-gradient(90deg ,#000000,#00000000)",
        gradient1: "linear-gradient(90deg ,#00000000,#000000)",
        gradient2:
          "linear-gradient(136deg ,#0000001e,#54c0a01e,#54c0a01e,#0000001e)",
        gradient3: "linear-gradient(180deg ,#ffffff14,#ffffff00)",
        gradient4: "linear-gradient(180deg ,#54c0a03d,#0000003d)",
        gradient5: "linear-gradient(270deg ,#ffffff00,#ffffff99,#ffffff00)",
      },
      fontFamily: {
        poppins: "Poppins",
        lexend: "Lexend",
        playfairdisplay: "Playfair Display",
      },
    },
  },
  plugins: [],
}
