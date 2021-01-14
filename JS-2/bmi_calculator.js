class person {
    constructor(name, h, w) {
        this.name = name;
        this.h = h;
        this.w = w;
    }
    get_bmi() {
        return Math.floor(this.w / (this.h * this.h));
    }
    get_name() {
        return this.name;
    }
}
var person1 = new person("Harry", 1.8, 65);
var person2 = new person("Potter", 2.8, 55);
var person3 = new person("Mike", 2.12, 45);
var person4 = new person("Johny", 1.5, 80);
var person5 = new person("John Doe", 3.8, 90);


console.log(' NAME: ' + person1.get_name(), ', BMI: ' + person1.get_bmi());
console.log(' NAME: ' + person2.get_name(), ', BMI: ' + person2.get_bmi());
console.log(' NAME: ' + person3.get_name(), ', BMI: ' + person3.get_bmi());
console.log(' NAME: ' + person4.get_name(), ', BMI: ' + person4.get_bmi());
console.log(' NAME: ' + person5.get_name(), ', BMI: ' + person5.get_bmi());