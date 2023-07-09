// const { a } = require('./app.js'); // избегать круговую зависимость
console.log('Загружено characters.js');

// let characters = [
//   {name: 'Фродо', hasRing: false},
//   {name: 'Бильбо', hasRing: false}
// ];
//
// function stealRing(characters, owner) {
//   return characters.map(c => {
//     if (c.name === owner) {
//       c.hasRing = true;
//     } else {
//       c.hasRing = false;
//     }
//     return c;
//   });
// }
//
// console.log('rembo');

module.exports = function log() {
  console.log('log');
};