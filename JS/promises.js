const promiseone = new Promise(function (resolve, reject) {
    //do an async task
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

promiseone.then(function () {
    console.log("promise consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 2")
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async Resolved")
})

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            username: "Chai",
            email: "Chai@example.com"
        })
    }, 1000);
})

promisethree.then(function (username) {
    console.log(username)
})

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({
                username: "Chai",
                email: "chai@gmail.com"
            })
        }
        else {
            reject('Error: Something went wrong')
        }

    }, 1000);
})

const x=promisefour.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)}).finally(()=>{
        console.log("The promise is reslved or rejected")
    })


const promisefive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username: "JS",
                email: "js@gmail.com"
            })
        }
        else {
            reject('JS ERROR')
        }

    }, 1000);
})

async function cp5(){
    const response=await promisefive
    console.log(response)
}

cp5()


