const marvel_Heros = ["Thor", "Ironmen", "spiderman"];
const dc_Hero = ["Superman", "flash", "batman"];

const allHero = marvel_Heros.concat(dc_Hero);
// console.log(allHero);

// const all_new_hero = oneArray.concat(twoArray)
// const all_new_hero = [oneArray,twoArray]
const all_new_hero = [...marvel_Heros, ...dc_Hero];
// console.log(all_new_hero);


//******* 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


console.log(Array.isArray("sajankumar"));
console.log(Array.from("sajankumar"));
console.log(Array.from({nmae: "sajankumar"})); //interesting


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));










// !++++++++++++++++++++++++++++++++++++++++
//SPREAD

const oneArray = [1, 2, 3, 4];
const twoArray = [5, 6, 7, 8];

// const threeArray =oneArray.concat(twoArray)
// const threeArray =[oneArray,twoArray]
const threeArray = [...oneArray, ...twoArray];
// console.log(threeArray);

//+++++++++++++++++++++++++++++++++
// REST

/* function manyArguments() {
  console.log(typeof arguments);
  let args = Array.from(arguments);
  let finalArr = args.map((e) => e);
  console.log(finalArr);
}

function manyArgumentv2(...args) {
  console.log(typeof args);
  let finalArr = args.map((e) => e);
  console.log(finalArr);
} */

// manyArguments(1,2,3)
// manyArgumentv2(1,2,3,4)
