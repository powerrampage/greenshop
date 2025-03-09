import localFont from "next/font/local";

const ceraPro = localFont({
  src: [
    { path: "./CeraPro-Thin.woff2", weight: "100", style: "normal" },
    { path: "./CeraPro-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "./CeraPro-Light.woff2", weight: "300", style: "normal" },
    {
      path: "./CeraPro-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    { path: "./CeraPro-Regular.woff2", weight: "400", style: "normal" },
    { path: "./CeraPro-Medium.woff2", weight: "500", style: "normal" },
    {
      path: "./CeraPro-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    { path: "./CeraPro-Bold.woff2", weight: "700", style: "normal" },
    { path: "./CeraPro-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./CeraPro-Black.woff2", weight: "900", style: "normal" },
    {
      path: "./CeraPro-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-cerapro",
});

export default ceraPro;
