class user {
    constructor(email,password){
this.email=email,
this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
        this._email=val
    }

    get password(){
        return this._password
    }

    set password(value){
        this._password=value
    }
}

const ayesha=new user("ayesha@gmail.com","123")
console.log(ayesha.password)
console.log(ayesha.email)

