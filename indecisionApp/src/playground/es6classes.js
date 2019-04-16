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
class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }

}


const me = new Traveler('Marcus Caldeira', 26, 'Saint Paul')
console.log(me)
const other = new Traveler()
console.log(other)

