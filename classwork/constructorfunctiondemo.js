function User(name){
    //this = {}
    this.name = name
    this.isAdmin = false
    return this
}
let hills = Object.create(User.prototype);
User.call(hills,'hills')
console.log(hills)
let hills2 = new User('hills')
console.log(hills2)