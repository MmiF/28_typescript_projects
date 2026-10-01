import { type UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import fg from "fast-glob";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const projectEntries = fg.sync("src/projects/**/index.html").reduce(
  (acc, file) => {
    const name = file.split("/")[2];
    acc[name] = resolve(__dirname, file);
    console.log(name);
    return acc;
  },
  {} as Record<string, string>,
);
console.log(projectEntries);

export default {
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...projectEntries,
        // ageCalculator: resolve(
        //   __dirname,
        //   "src/projects/01_Age_Calculator/index.html",
        // ),
        // noteApp: resolve(__dirname, "src/projects/02_Notes_App/index.html"),
        // stopWatch: resolve(__dirname, "src/projects/03_Stop_Watch/index.html"),
        // digitalClock: resolve(
        //   __dirname,
        //   "src/projects/04_Digital_Clock/index.html",
        // ),
        // dragDrop: resolve(__dirname, "src/projects/05_Drag_Drop/index.html"),
      },
    },
  },
} satisfies UserConfig;
