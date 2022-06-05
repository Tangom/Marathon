const path = require('path');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  }
}
// указали в какой файл будет собираться весь js и дали ему имя
// module.exports — это синтаксис экспорта в Node.js