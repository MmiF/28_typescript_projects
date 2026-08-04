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
        noteApp: resolve(
          __dirname,
          "src/projects/02_Notes_App/index.html",
        ),
      },
    },
  },
} satisfies UserConfig;
