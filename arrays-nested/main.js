// 1-
let stars = '';
for (let i = 0; i < 4; i++) {
  stars += '*';
  console.log(stars);
}

// 2-
const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
for (let i = 0; i < ARR.length; i++) {
  console.log(`row ${i}`);
  for (let j = 0; j < ARR[i].length; j++) {
    console.log(ARR[i][j]);
  }
}


// 3- 
let nums = ''
for(let i=1;i<=4;i++){
    for(let j=0;j<3;j++){
       nums +=i+ ' '
    }
}
console.log(nums)

let nums2 = '';
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <5; j++) {
    nums2 += j + ' ';
  }
}
console.log(nums2);


// Bonus
let nums3 = ''
let nums4 = '';
for(let i=1; i<5; i++){
    for(let j=0; j<5; j++){
        if(j<3){
         nums3 += i + ' ';   
        }
        if(i<4){
         nums4 += j + ' ';   
        }
    }
}
console.log(nums3)
console.log(nums4)

