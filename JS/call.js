function s(username){
    this.username=username
    return this.username
}

function createuser(username,email,password){
    this.email=email
    this.password=password
    s.call(username)

}

const chai=new createuser("chai","@gmail.com","123")

console.log(chai)