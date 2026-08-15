/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Token system — extraído da identidade do mascote (tucano-de-bico-azul)
        deepsea: {
          DEFAULT: "#0B3D5C", // azul profundo — texto, rodapé, contraste
          900: "#082C43",
        },
        ocean: {
          DEFAULT: "#1487C9", // azul do céu/mar — cor primária
          50: "#EAF6FD",
          100: "#CFEBFA",
          400: "#3AA3DE",
          600: "#1487C9",
          700: "#0E6CA3",
        },
        lagoon: {
          DEFAULT: "#0E9AA7", // azul-esverdeado de Maracajaú — secundária
          600: "#0B7E89",
        },
        sun: {
          DEFAULT: "#FFC93C", // sol / peito do tucano — destaque quente
          400: "#FFD666",
          600: "#F2AE13",
        },
        coral: {
          DEFAULT: "#E85D42", // colete/câmera — CTA e alertas de atenção
          600: "#CC4530",
          50: "#FDECE8",
        },
        sand: {
          DEFAULT: "#F6E3B4", // chapéu de palha — fundos quentes
          100: "#FBF3DD",
        },
        foam: "#F7FBFD", // espuma do mar — fundo principal claro
      },
      fontFamily: {
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["'Karla'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        post: "0 12px 0 -4px rgba(11,61,92,0.12), 0 20px 30px -18px rgba(11,61,92,0.35)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
