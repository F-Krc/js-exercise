// 1-
let [fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"]
console.log(fruit)
console.log(vegetable)
console.log(food)



// 2-
let {fran, martina, camille} = {
  fran: 'monster',
  martina: 'ghost',
  camille: 'witch',
};
console.log(fran)
console.log(martina)
console.log(camille)

// 3-
let musician = {
  firstname: 'Regina',
  lastname: 'Spektor',
  nationality: 'American-Russian',
  job: ['singer', 'songwriter', 'pianist'],
  hit: 'Us',
  genre: 'indie-pop',
};

const displayMusicianDetails = (obj) => {
  let { genre, firstname, lastname, nationality, job, hit } = obj;
  return `${firstname} ${lastname} is a ${nationality} ${job[0]}/${job[1]} and ${job[2]}. The musician sings ${genre} and their greatest hit is '${hit}'`;
}

console.log(displayMusicianDetails(musician));
