class Person {
    constructor(name = 'Anonymous'){
        this.name = name
    }
    getGreeting(){
        return 'Hi!'
    }
}


const me = new Person('Marcus Caldeira')
console.log(me.getGreeting)
const other = new Person()
console.log(other);

