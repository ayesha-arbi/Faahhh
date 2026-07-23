// // //singleton

// // //object.create

// // //object literals
// // const jsuser ={
// //     name: "hitesh",
// //     fullname: "ayesha zahid aarbie",
// //     age: "Jaipur",
// //     location: "karachi",
// //     email:"ayeshazahid",
// //     islogin: true,
// //     lastlogindays: ["Monday","Saturday"]
// // }



// // const tinderuser=new Object() //singleton
// const tinderUser={} //non singleton

// tinderUser.id="123abc"
// tinderUser.name="sammy"
// tinderUser.isloggedIn=false

// // console.log(tinderUser)

// const regular ={
//     email: "abc@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"ayesha",
//             lastname:"zahid"
//         }
//     }
// }

// const obj1={
//     1:"a",
//     2:"b",
// }

// const obj2={
//     3:"c",
//     4:"d"
// }

// const obj3={obj1,obj2}
// console.log(obj3)

// const users=[
//     {
//         id:1,
//         email:"abc@gmail.com"
//     },
//     {
//         id:1,
//         email:"abc@gmail.com"
//     },
//     {
//         id:1,
//         email:"abc@gmail.com"
//     }
// ]

// users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course={
    cname:"js in hindi",
    price: 999,
    cteacher: "abc"
}

//course.cteacher

const {cteacher: x}=course
console.log(x)

// {
//     "name":'ayesha',
//     "cname":"js in hindi",
//     "price":"free"
// }

