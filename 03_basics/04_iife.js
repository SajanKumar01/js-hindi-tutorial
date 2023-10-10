//  ! Immediately Invoked Function Expressions (IIFE)


(function cofi() {

    // this is a named iife
    console.log(`DB CONNECTED`);
})();



((name) =>{
    console.log(`DB CONNECTED two ${name}`); 
} )("sajankaifjfj sn hnjbj ");


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
    // console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')