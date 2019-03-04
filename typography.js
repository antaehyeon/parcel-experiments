import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Montserrant",
      styles: ["700"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Montserrant", "Open Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"]
});

typography.injectStyles();

export default typography;
