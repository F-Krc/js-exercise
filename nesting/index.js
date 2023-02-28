// 1-
let board = [
  [1, 2, 3],
  ['quick', 'brown', 'fox', 'jumped', 'over', 'lazy', 'dog'],
  [true, false],
];
// for (let i = 0; i < board.length; i++) {
//   for (let j = 0; j < board[i].length; j++) {
//     console.log(board[i][j]);
//   }
// }
for (const outer of board) {
  for (const inner of outer) {
    console.log(inner);
  }
}

// 2-
let doggo = {
  name: 'Dog',
  breed: 'Labrador Retriever',
  favoriteFoods: ['Wellness', 'Burger', 'Fries'],
  showFavorites: function () {
    for (let i = 0; i < this.favoriteFoods.length; i++) {
      console.log(this.favoriteFoods[i]);
    }
  },
};
console.log(doggo.favoriteFoods[1]);
doggo.showFavorites();

// 3-
let recipe = {
  name: 'Kekse',
  preparationTime: '30 min',
  ingredients: {
    mehl: '10 tbps',
    butter: '1 tbsp',
    ginger: '1 tsp',
    salt: '1 tsp',
  },
  showIngredients: function () {
    for (let key in this.ingredients) {
      console.log(this.ingredients[key]);
    }
  },
};
recipe.ingredients.ginger = '2 tsp';

recipe.showIngredients();
