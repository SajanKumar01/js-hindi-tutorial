// const tinderUsers = new Object();

const tinderUsers = {}

tinderUsers.id = "20303050044"
tinderUsers.name = "Animesh raj"
tinderUsers.isloggedIn  = false

// console.log(tinderUsers);


const regularUser = {
    email: "sdjnvsdjb@55.gmail.com",
    fullname: {
      userfullname:{
        firstName: "Belly",
        middelName:"Shankar",
        LastName: "Singh",
      }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }
const obj4 = Object.assign({}, obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
   {
     id:1,
     email:"kr4@gmail.com"
   },
   {
    id:1,
    email:"kr4@gmail.com"
  },
  {
    id:1,
    email:"kr4@gmail.com"
  },
  {
    id:1,
    email:"kr4@gmail.com"
  },
]

users[1].email
// console.log(users);
// console.log(tinderUsers);

// console.log(Object.keys(tinderUsers));
// console.log(Object.values(tinderUsers));
// console.log(Object.entries(tinderUsers));

// console.log(tinderUsers.hasOwnProperty(' isloggedIn'));




const course = {
    courseName: "js in hindi",
    price: "1000",
    Mentor: "sajan"
}

// course.Mentor


const {Mentor} = course
console.log(Mentor);


const {Mentor: tor} = course
console.log(tor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]