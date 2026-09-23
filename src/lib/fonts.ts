import { Gabarito, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hanken-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetbrains-mono",
});

/** Class names that expose the three font families as CSS variables. */
export const fontVariables = [gabarito.variable, hankenGrotesk.variable, jetbrainsMono.variable].join(" ");
