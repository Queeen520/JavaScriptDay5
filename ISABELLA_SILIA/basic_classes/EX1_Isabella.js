/* Create 3 different classes:  car, animal and person. These classes should have some properties like 
name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 
Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.
Create, using the classes, 3 different objects for each class.
The results from the methods must be printed on the browser too. */


// car

class car {

    "model";
    "name";
    
    constructor (Supercar, Ferrari_F8) {
    this.model = Supercar;
    this.name = Ferrari_F8;
    }

    function summary() {
        return this.model + " " + this.name;
    }
    
    }
    
    var car1 = new car("Supercar", "Ferrari F8");
    var car2 = new car("Jeep", "Gladiator");
    var car3 = new car("Stretchlimousine", "Hummer H2");

    console.log(summary());
    
    
    // animal
    
    class animal {
    
    "species";
    "name";
    
    constructor (Mammal, Dolphin) {
    this.species = Mammal;
    this.name = Dolphin;
    }

    function summary() {
        return this.species + " " + this.name;
    }
    
    }
    
    var animal1 = new animal(Mammal, Dolphin);
    var animal2 = new animal(Carnivore, Lion);
    var animal3 = new animal(Herbivore, Cow)

    console.log(summary());
    
    // person
    
    class person {
    
    "firstName";
    "lastName";
    
    constructor (Max, Muster) {
    this.firstName = Max;
    this.lastName = Muster;
    }

    function summary() {
        return this.firstName + " " + this.lastName;
    }
    
    }
    
    var person1 = new person(Max, Muster);
    var person2 = new person(Lisa, Langer);
    var person3 = new person(Simon, Sonnentor);

    console.log(summary());
    