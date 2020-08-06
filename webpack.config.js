const path = require("path");

const jsPath = "public/js";

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    filename: "site.js",
    path: path.resolve(__dirname, jsPath),
    publicPath: jsPath,
  },
};

//resolve: {extensions: [".js", ".ts"]}
