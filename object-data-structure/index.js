// 1-
const myRecipe = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa'],
};

console.log(`Title: ${myRecipe.title}`);
console.log(`Servings: ${myRecipe.servings}`);
console.log(`Ingredients: ${myRecipe.ingredients.join(', ')}`);

//2-
const myBooks = [
  {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    alreadyRead: true,
  },
];

for (let i = 0; i < myBooks.length; i++) {
  console.log(`${myBooks[i].title} by ${myBooks[i].author}`);
}

for (let i = 0; i < myBooks.length; i++) {
    let book = myBooks[i];
  if (book.alreadyRead) {
    console.log(`you AlREady read "${book.title}" by ${book.author}`);
  } else {
    console.log(`you STiLL need to read "${book.title}" by ${book.author}`);
  }
}
