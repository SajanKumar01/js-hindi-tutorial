// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log("7 is best number");
    }
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {

    // console.log(`outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j +  '=' + i*j);
    }
 
}


let myarray = ["flash", "batman", "supermen"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element);
}

//   key words    break and continue


// using Break
/*for (let i = 1; i <= 20; i++) {
    const element = (i);

    if (i == 7) {
        console.log(` Detected 7`);
        break;
    }
    console.log("velue of i is", element);
}*/




for (let i = 1; i <= 20; i++) {
    const element = (i);

    if (i == 5) {
        console.log(` Detected 5`);
        continue;
    }

    if (i == 12) {
        console.log(` Detected 12`);
        continue;
    }
    console.log("velue of i is", element);
}