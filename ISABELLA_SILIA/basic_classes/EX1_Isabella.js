/* Create 3 different classes:  car, animal and person. These classes should have some properties like 
name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 
Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.
Create, using the classes, 3 different objects for each class.
The results from the methods must be printed on the browser too. */


// car

class car {

    "model";
    "name";
    
    constructor (model, name) {
    this.model = model;
    this.name = name;
    }

    summary() {
        return this.model + " " + this.name;
    }
    
 }
    
    var car1 = new car("Supercar", "Ferrari F8");
    console.log(car1.summary());

    var car2 = new car("Jeep", "Gladiator");
    console.log(car2.summary());

    var car3 = new car("Stretchlimousine", "Hummer H2");
    console.log(car3.summary());

    
    
    // animal
    
    class animal {
    
    "species";
    "name";
    
    constructor (species, name) {
    this.species = species;
    this.name = name;
    }

    summary() {
        return this.species + " " + this.name;
    }
    
    }
    
    var animal1 = new animal("Mammal", "Dolphin");
    console.log(animal1.summary());
    var animal2 = new animal("Carnivore", "Lion");
    console.log(animal2.summary());
    var animal3 = new animal("Herbivore", "Cow");
    console.log(animal3.summary());
    
    // person
    
    class person {
    
    "firstName";
    "lastName";
    
    constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    summary() {
        return this.firstName + " " + this.lastName;
    }
    
    }
    
    var person1 = new person("Max", "Muster");
    console.log(person1.summary());
    var person2 = new person("Lisa", "Langer");
    console.log(person2.summary());
    var person3 = new person("Simon", "Sonnentor");
    console.log(person3.summary());
    