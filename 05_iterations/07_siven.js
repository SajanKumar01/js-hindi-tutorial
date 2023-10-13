const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const newnums = myNumbers.map((num) => {
//   return  num + 10;
// });
// console.log(newnums);


 const newNums = myNumbers
        //  .map((num) => num / 2)
         .map((num) => num * 10)
         .map((num) => num + 1)
        //  .map((num) => num - 200)
          
        //  .filter((num) => num >= 40)
 console.log(newNums);