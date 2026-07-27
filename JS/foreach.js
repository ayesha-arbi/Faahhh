const coding =['js','ruby','cpp']

// coding.forEach( function (a){
//     console.log(a)
// } )

coding.forEach( (item)=>{
//
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

const mycoding=[
    {
    langname:"javascript",
    langfile:"js"
},
{
    langname:"java",
    langfile:"java"
},
{
    langname:"python",
    langfile:"py"
}
]

mycoding.forEach((item)=>{
    console.log(item.langfile)
})