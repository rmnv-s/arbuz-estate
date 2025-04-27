// postcss.config.js
import autoprefixer from "autoprefixer";
console.log("Autoprefixer loaded:", !!autoprefixer);

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        "last 10 versions",
        "ie >= 11",
        "Safari >= 9",
        "Android >= 4.4",
        "iOS >= 9",
      ],
    }),
  ],
};
