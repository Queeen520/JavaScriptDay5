// Exercise 1 
// 3 Objects for 3 themes car, animal person

let arr_person = [];

class Person {
    firstName;
    lastName;
    age;
    job;
    religion;
    img;

    constructor(fName, lName, age, job, religion, image) {

        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.job = job;
        this.religion = religion;
        this.img = image;

        arr_person.push(this);
    }

    print_person() {
        return `<div class="card" style="width: 18rem;">
        <img src=" ${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
          <p class="card-text">${this.job} | ${this.age}.</p>
          <a href="#" class="btn btn-primary">Get more Info!</a>
        </div>
      </div>`;
    }

}

// people

let person1 = new Person("Anna", "Aichinger", 35, "Teacher", "evangelical", "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg");
let person2 = new Person("Lisa", "Huber", 45, "Manager", "cathlic", "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg");
let person3 = new Person("Anton", "Steiner", 21, "Lawyer", "atheist", "https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg");

//print people 

for (var people of arr_person) {
    document.getElementById("person-info").innerHTML += people.print_person();
}

//Animals
let arr_animal = [];

class Animal {
    name;
    region;
    predators;
    food;
    img;

    constructor(Name, Region, Predators, Food, image) {

        this.name = Name;
        this.region = Region;
        this.predators = Predators;
        this.food = Food;
        this.img = image;

        arr_animal.push(this);
    }

    print_animal() {
        return `<div class="card" style="width: 18rem;">
        <img src=" ${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.predators} | ${this.region}.</p>
          <a href="#" class="btn btn-primary">Get more info</a>
        </div>
      </div>`;
    }

}

//animals

let animal1 = new Animal("Lion", "Africa", "none", "all", "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");

let animal2 = new Animal("Elephant", "India", "Lion", "grass", "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg");
let animal3 = new Animal("Goat", "Austria", "Wolf", "grass", "https://cdn.pixabay.com/photo/2016/06/16/18/27/goat-1461917_1280.jpg");


// print Animals
for (var animals of arr_animal) {
    document.getElementById("animal-info").innerHTML += animals.print_animal();
}

//Cars
let arr_car = [];

class Car {
    brand;
    color;
    price;
    PS;
    img;

    constructor(Brand, Color, Price, PS, image) {

        this.brand = Brand;
        this.color = Color;
        this.price = Price;
        this.PS = PS;
        this.img = image;

        arr_car.push(this);
    }

    print_car() {
        return `<div class="card" style="width: 18rem;">
        <img src=" ${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand}</h5>
          <p class="card-text">${this.price} | ${this.PS}.</p>
          <a href="#" class="btn btn-primary">Get more info</a>
        </div>
      </div>`;
    }

}

class Motorbike extends Car {
    numberOfWheels;
    type;

    constructor(Brand, Color, Price, PS, image, wheels, type) {
        super(Brand, Color, Price, PS, image);
        this.numberOfWheels = wheels;
        this.type = type;
    }

    print_car() {
        return `<div class="card" style="width: 18rem;">
        <img src=" ${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand} ${this.type}</h5>
          <p class="card-text">${this.price} | ${this.PS} | ${this.numberOfWheels}.</p>
          <a href="#" class="btn btn-primary">Get more info</a>
        </div>
      </div>`;
    }


}

//Cars

let car1 = new Car("BMW", "blue", "50.000", "300", "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_1280.jpg");
let car2 = new Car("Mercedes", "black", "100.000", "400", "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg");
let car3 = new Car("Fiat", "red", "30.000", "120", "https://cdn.pixabay.com/photo/2017/03/24/11/44/car-2170961_1280.png");

//Motorbikes
let bike1 = new Motorbike("KTM", "orange", "10.000", "100", "https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690_1280.jpg", "2", "enduro")

// print cars 


for (var cars of arr_car) {
    document.getElementById("car-info").innerHTML += cars.print_car();
}