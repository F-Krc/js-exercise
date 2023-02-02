// 0-
let isDogBetter = true;
let isCatBetter = false;

// 1-
console.log(`Q1a: ${isDogBetter && isCatBetter}`);
console.log(`Q1b: ${isDogBetter || isCatBetter}`);
console.log(`Q1c: ${!(isDogBetter && isCatBetter)}`);

// 2-
let atoms = 15;
let sandGrains = 10;
let starsInSky = 2;

// 3a-
console.log(`Q3a: ${atoms > starsInSky && atoms > sandGrains}`);

// 3b-
console.log(`Q3b: ${atoms !== sandGrains}`);

// 3c-
console.log(`Q3c: ${starsInSky < sandGrains || starsInSky > atoms}`);

// 3d-
console.log(`Q3d: ${atoms == starsInSky || atoms !== sandGrains}`);

// 3e-
console.log(`Q3e: ${atoms >= 10 && sandGrains <= 10}`);

// 3f-
console.log(`Q3f: ${atoms * starsInSky < 100 || atoms * sandGrains > 100}`);