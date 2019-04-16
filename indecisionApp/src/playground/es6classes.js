class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age
    }
    getGreeting(){
        //ES6 Template String Feature
        return `Hi I am ${this.name}`
    }
    getDescription(){
        return `Hi my name is ${this.name} +  and I am  + ${this.age}`
    }
}


const me = new Person('Marcus Caldeira', 26)
console.log(me.getDescription())
const other = new Person()
console.log(other.getDescription());

