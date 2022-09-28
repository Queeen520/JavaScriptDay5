//Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  
//These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, 
//an animal has no brand... 

// Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// The message from the methods must be printed on the browser too.


    const car = {                                               // better to read 

        type: "SUV",
        name: "Lexus UX",
        price: "$33.150",
        horsepower: 169,
        colors: ["black, blue, red"],
        summary: function() {
                   return this.type + " " + this.name; 
        }
    }

        console.log(car.summary());                              


    const car2 = {                                              // because JSON

        "type": "Limousine",
        "name": "Lexus Lincoln Excalibur 1",
        "price": "$65.180",
        "Horsepower": 152,
        "colors": ["black", "blue", "red"],
        "summary": function() {
                   return this.type + " " + this.name; 
        }
    }


    const car3 = {

        "type": "supercar",
        "name": "Ferrari F8",
        "price": "€348.670",
        "Horsepower": 729,
        "colors": ["black", "white", "red", "yellow"],
        "summary": function() {
                   return this.type + " " + this.name; 
        }
    }

    