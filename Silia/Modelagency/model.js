// Models

let arr_model = [];

class Models {
    firstName;
    lastName;
    agency;
    age;
    previousJobs;
    img;

    constructor(fName, lName, Agency, Age, PreviousJ, Image) {
        this.firstName = fName;
        this.lastName = lName;
        this.agency = Agency;
        this.age = Age;
        this.previousJobs = PreviousJ;
        this.img = Image;

        arr_model.push(this);
    }

    model_card() {
        return `<div class="card my-card" style="width: 18rem;">
        <img class ="image" src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
          <p class="card-text">${this.agency} <br> ${this.previousJobs}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;

    }

}

// Child Class Gender

class Gender extends Models {
    gender;

    constructor(fName, lName, Agency, Age, PreviousJ, Image, Gender) {
        super(fName, lName, Agency, Age, PreviousJ, Image);
        this.gender = Gender;
    }


}

// Models Female
let modelF1 = new Gender("Luisa", "White", "Go-Models", 23, "H&M - Fall 2018", "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg", "female");
let modelF2 = new Gender("Martha", "Delgado", "NY-Models", 21, "Gucci - Spring 2022", "https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_1280.jpg", "female");
let modelF3 = new Gender("Lexie", "Anderson", "Go-Models", 24, "Prada - Summer 2021", "https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg", "female");
//Models Male
let modelM1 = new Gender("David", "Ericson", "Next-Models", 26, "Armani - Jeans", "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg", "male");
let modelM2 = new Gender("Lucas", "Westwing", "Go-Models", 22, "Todds - Summer 2022", "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg", "male");
let modelM3 = new Gender("Noel", "Spencer", "NY-Models", 25, "Carhartt- Winter 2021", "https://cdn.pixabay.com/photo/2020/10/28/14/01/man-5693573_1280.jpg", "male");
//Models Divers
let modelD1 = new Gender("Elle", "Andrew", "Next-Models", 20, "Desiqual - Winter 2021", "https://cdn.pixabay.com/photo/2018/02/11/16/12/woman-3146093_1280.jpg", "divers");
let modelD2 = new Gender("Nelson", "Attenburg", "Go-Models", 28, "H&M - Summer 2022", "https://cdn.pixabay.com/photo/2021/05/10/14/15/corset-6243486_1280.jpg", "divers");
let modelD3 = new Gender("Graig", "Lone", "Next-Models", 21, "Dolce&Gabana - Winter 2020", "https://cdn.pixabay.com/photo/2016/02/26/02/08/face-1223346_1280.jpg", "divers");


// For loop
for (var models of arr_model) {
    if (models.gender == "female") {
        document.getElementById("female").innerHTML += models.model_card();
    } else if (models.gender == "male") {
        document.getElementById("male").innerHTML += models.model_card();
    } else {
        document.getElementById("divers").innerHTML += models.model_card();
    }
}