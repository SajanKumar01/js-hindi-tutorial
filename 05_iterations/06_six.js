// const coding = ["js", "rb", "py","java" ,"php"]

//  const value = coding.forEach((item)=> {
//     // console.log(item);
//     return item
// });
// console.log(value);

// const mynums = [1,2,3,4,5,6,7,8,9,]

//**  Using filter
//  let  newnums = mynums.filter((num)=> num > 5)
// let newnums = mynums.filter( (num) => {
//   return num > 5
//});

//  console.log(newnums);

/* const newnums =[1,2,3,4,5,6,7,8,9,10]
 const newnum = []
 
newnums.forEach( (nums) => {
    if (nums > 4) {
        newnum.push(nums)
    }
});

console.log(newnum);  */

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// let userbooks = books.filter((bks) => {
//   return  bks.genre === 'Science'
// })

// const userbooks = books.filter((bk) => {
//     return  bk.publish >=  1995 && bk.genre === 'History'//2000
//   })
// console.log(userbooks);

const userbooks = books.filter((bk) => {
  return bk.publish >= 1995; //2000
});
console.log(userbooks);
