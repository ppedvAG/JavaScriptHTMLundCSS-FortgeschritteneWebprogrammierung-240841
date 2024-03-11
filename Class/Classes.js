class Person {
    #age;

    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    set age(newAge) {
        console.log("setter wurde aufgerufen");
        if(newAge < this.age) {
            console.error("Man kann nicht jünger werden");
        }
        else {
            this.#age = newAge;
        }
    }

    get age() {
        console.log("getter wurde aufgerufen");
        return this.#age;
    }

    #introduce() {
        return `Hi my name is ${this.firstName} ${this.lastName}`;
    }

    introduceSelf() {
        console.log(this.#introduce());
        return this.#introduce();
    }

}

const p1 = new Person("Max", "Mustermann", 29, "male");

p1.introduceSelf();

class Student extends Person {
    constructor (firstName, lastName, age, gender, schoolClass) {
        super(firstName, lastName, age, gender);
        this.schoolClass = schoolClass;
    }

    showGrade() {
        return console.log(Math.floor(Math.random() * 6) + 1);
    }
    introduceSelf() {
        console.log(`My Name is ${this.firstName} and i'm in class ${this.schoolClass}`);
    }

}

const p2 = new Student("Erika", "Musterfrau", 17, "female", 11);

p2.introduceSelf();
p2.showGrade();

// Erstellt eine Klasse Teacher, die von Person abgeleitetet wird und zusätzlich ein private field mit subject
// hat. Die Methode introduceSelf() soll erweitert oder überschrieben werden um zusätzlich das subject anzuzeigen
// Zusätzlich einen getter und setter für subject erstellen