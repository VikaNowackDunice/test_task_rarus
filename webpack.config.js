const path = require("path");

module.exports = {
  mode: "development", // Режим сборки (development или production)
  entry: "./style.scss", // Основной файл SCSS
  output: {
    filename: "bundle.js", // Имя бандла js (необязательно, если подключаете стили через style-loader)
    path: path.resolve(__dirname, "dist"), // Путь к выходной папке
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Регулярное выражение для обработки SCSS
        use: [
          "style-loader", // Вставляет стили в DOM
          "css-loader", // Позволяет обрабатывать CSS
          "sass-loader", // Компилирует SCSS в CSS
        ],
      },
    ],
  },
};
