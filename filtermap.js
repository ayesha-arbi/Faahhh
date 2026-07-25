// // const coding=["js","ruby","java","cpp"]

// // const x=coding.forEach((item)=>{
// //     console.log(item);
// //     return item
// // })

// // console.log(x)

// // //foreach never returns

// const myNums=[1,2,3,4,5,6,7,8,9]
// // const newNums = myNums.filter((num)=> (num>4))
// // console.log(newNums)

// const newNums=[]
// myNums.forEach((num)=>{
//     if (num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

// const users = [
//   { id: 1, name: "Alice", role: "Admin" },
//   { id: 2, name: "Bob", role: "User" },
//   { id: 3, name: "Charlie", role: "User" }
// ];

// const u=users.filter((a)=> a.name==='Bob' || a.name==="Charlie")
// console.log(u)



// ================================================ //



const x = [1,2,3,4,5,6,7,8.9,10]

const y = x.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>=40)
// console.log(y)


//=================Reduce=================

const n=[1,2,3,4]

// const m=n.reduce(function (acc,curr){
//     console.log('acc:',acc ,'and curr: ',curr )
//     return acc+curr
// },0)



// console.log(m)

const sc = [
    {
        itemname:'jscourse',
        price: 999
    },
    {
        itemname:'tscourse',
        price: 3999
    },
    {
        itemname:'pycourse',
        price: 499
    }
]

console.log(sc.reduce((acc,item)=> acc + item.price,0))