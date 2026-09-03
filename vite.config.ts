import { type UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default {
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ageCalculator: resolve(
          __dirname,
          "src/projects/01_Age_Calculator/index.html",
        ),
        noteApp: resolve(__dirname, "src/projects/02_Notes_App/index.html"),
        stopWatch: resolve(__dirname, "src/projects/03_Stop_Watch/index.html"),
        digitalClock: resolve(
          __dirname,
          "src/projects/04_Digital_Clock/index.html",
        ),
      },
    },
  },
} satisfies UserConfig;
