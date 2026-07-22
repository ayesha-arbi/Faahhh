// let myDate=new Date()

// // console.log(myDate.toString())
// // console.log(myDate.getFullYear())
// // console.log(myDate.toDateString())
// // console.log(myDate.toTimeString())
// // console.log(myDate.toLocaleString())
// // console.log(myDate.toLocaleTimeString())
// // console.log(myDate.toJSON())

// let x= new Date("2023/1/2")
// console.log(x.toLocaleString())

// let ts=Date.now()
// // console.log(ts)
// console.log(Math.floor(ts/1000))

let x=new Date()
console.log(x.toLocaleDateString('default',{
    weekday:"long",
    month: "numeric"
}))