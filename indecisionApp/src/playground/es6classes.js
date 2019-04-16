class Person {
    constructor(name = 'Anonymous'){
        this.name = name
    }
    getGreeting(){
        return 'Hey there hows its going? ' + this.name
    }
}


const me = new Person('Marcus Caldeira')
console.log(me.getGreeting())
const other = new Person()
console.log(other.getGreeting());

