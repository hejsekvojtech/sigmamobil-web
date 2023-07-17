module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.{js,jsx}",
    "./public/*.html",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "brand-main": "#D40000",
        "brand-secondary": "#666666",
        "background-col": "bg-red-50",
        // Bob Ross colour palette
        "sap-green": "#0A3410",
        "alizarin-crimson": "#4E1500",
        "van-dyke-brown": "#221B15",
        "dark-sienna": "#5F2E1F",
        "midnight-black": "#000000",
        "prussian-blue": "#021E44",
        "phthalo-blue": "#0C0040",
        "phthalo-green": "#102E3C",
        "cadmium-yellow": "#FFEC00",
        "yellow-ochre": "#C79B00",
        "indian-yellow": "#FFB800",
        "bright-red": "#DB0000",
        "titanium-white": "#FFFFFF",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
