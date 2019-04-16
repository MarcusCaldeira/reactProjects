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
        return `Hi my name is ${this.name} and I am ${this.age}`
    }
} 
class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()
        if (this.hasMajor()){
            description += ` Their Major is ${this.major }`
        }
        return description
    }

}


const me = new Student('Marcus Caldeira', 26, 'Computer Science')
console.log(me.getDescription())
const other = new Student()
console.log(other.getDescription());

