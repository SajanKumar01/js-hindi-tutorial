// for each loop
const coding = ["js", "rb", "py","java" ,"php"]


coding.forEach( function (item) {
    console.log(item);
})

// coding.forEach(element => {
//     console.log(element);
// });

// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach((item, index , arr )  => {
//      console.log(item,index , arr);
// });



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )