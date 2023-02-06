// 1-
let aleezaTeamAve = (89 + 120 + 103) / 3; // 104
let laraTeamAve = (116 + 94 + 123) / 3; // 111

// 2-

if (aleezaTeamAve > laraTeamAve) {
  console.log(`Aleeza's team is the winner with an average score of ${aleezaTeamAve}`);
} else if (laraTeamAve > aleezaTeamAve) {
  console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else {
  console.log(`It's a tie with an average score of ${laraTeamAve}`);
}

// 3-
let aleezaTeamAve2 = (200 + 120 + 103) / 3;  // 141

if (aleezaTeamAve2 > laraTeamAve) {
  console.log(`Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`);
} else if (laraTeamAve > aleezaTeamAve2) {
  console.log(`Lara's team is the winner with an average score of ${laraTeamAve}`);
} else {
  console.log(`It's a tie with an average score of ${laraTeamAve}`);
}

// 4-
let maryTeamAve = Math.floor((200 + 134 + 105) / 3); // mary 146 lara 111 aleza 141

if (maryTeamAve == aleezaTeamAve2 && maryTeamAve > laraTeamAve) {
  console.log(`Mary's team and Aleeza's team are tied for first place with an average score of ${maryTeamAve}`);
} else if (maryTeamAve == laraTeamAve && laraTeamAve > aleezaTeamAve2) {
  console.log(`Mary's team and Lara's team are tied for first place with an average score of ${maryTeamAve}`);
} else if (laraTeamAve == aleezaTeamAve2 && laraTeamAve > maryTeamAve2) {
  console.log(`Aleeza's team and Lara's team are tied for first place with an average score of ${laraTeamAve}`);
} else if (aleezaTeamAve2 == laraTeamAve && aleezaTeamAve2 == maryTeamAve) {
  console.log(`All three teams are tied with an average score of ${laraTeamAve}`);
} else {
  console.log(`Winner with an averagescore of ${Math.max(maryTeamAve, aleezaTeamAve2, laraTeamAve)}`);
}

// 5-
let maryTeamAve2 = (184 + 134 + 105) / 3;  //141

if (maryTeamAve2 == aleezaTeamAve2 && maryTeamAve2 > laraTeamAve) {
  console.log(`Mary's team and Aleeza's team are tied for first place with an average score of ${maryTeamAve2}`);
} else if (maryTeamAve2 == laraTeamAve && laraTeamAve > aleezaTeamAve2) {
  console.log(`Mary's team and Lara's team are tied for first place with an average score of ${maryTeamAve2}`);
} else if (laraTeamAve == aleezaTeamAve2 && laraTeamAve > maryTeamAve2) {
  console.log(`Aleeza's team and Lara's team are tied for first place with an average score of ${laraTeamAve}`);
} else {
  console.log(`All three teams have different avarage`);
}
