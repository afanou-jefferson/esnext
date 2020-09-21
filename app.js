// Let ###################################################################################################################
let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris"
console.log(favoriteCityId);

// Const ###################################################################################################################
const citiesID = ["Constantinople", "Paris", "New-York", "Rome"];
console.log(citiesID);

//citiesID = []; // Error car affectation à une const non autorisée
console.log(citiesID); 

citiesID.push("Tokyo");
console.log(citiesID);


//Creation d'objet ###################################################################################################################
function getWeather(cityId) {
    let city =  cityId;
    let temperature = 20;

    return  {city: city , temperature};
}

weather = getWeather(citiesID[0]);
console.log(weather);


//Affectation destructurée ###################################################################################################################
city = weather.city;
temperature = weather.temperature;

console.log("city = " + city);
console.log("temperature = " + temperature);


// Rest Operator ###################################################################################################################
const [constantId , parisId , ...othersCitiesId] = citiesID;
console.log(constantId);
console.log(parisId);
console.log(othersCitiesId.length);


// Classe ###################################################################################################################
class Trip {
    constructor(id, name, imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price(){
        return this._price;
    }
    
    set price(newPrice){
        this._price = newPrice;
    }

    toString(){
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

    static getDefaultTrip(){
        return new Trip("rio-de-janeiro", "Rio De Janeiro", "img/rio-de-janeiro.jpg" );
    }
}

let parisTrip = new Trip("paris", "Paris", " img/paris.jpg");
parisTrip.price = 100; // calling setter

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

console.log(Trip.getDefaultTrip().toString());


// Heritage ###################################################################################################################
class FreeTrip extends Trip {
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this._price = 0;
    }

    //redefinition
    toString(){
        return "Free"+ super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());



//Promise, Set, Map, Arrow Function ################################################################################################################### 

// Voir service.js
module.exports= {Trip};
