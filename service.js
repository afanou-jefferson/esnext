const { Trip } = require('./app');

class TripService {
    constructor() {
        this.tripsSet = new Set();

        let c1 = new Trip('paris', 'Paris', 'img/paris.jpg');
        let c2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
        let c3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');

        this.tripsSet.add(c1);
        this.tripsSet.add(c2);
        this.tripsSet.add(c3);
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche

                for (let trip of this.tripsSet) {
                    if (trip.name === tripName) {
                        resolve(trip);
                    }
                }

                reject(`Erreur : Aucun trip trouvé avec le nom ${tripName}`);

            }, 2000)
        });
    }
}

//Testing TripService
const tripSrv = new TripService();
tripSrv.findByName('Paris')
    .then(tripFound => console.log(tripFound))
    .catch(err => console.log(err))

tripSrv.findByName('Toulouse')
    .then(tripFound => console.log(tripFound))
    .catch(err => console.log(err))



class PriceService {
    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price == 100
        // 'rio-de-janeiro' --> price == 800)
        // no price for 'nantes'

        this.priceMap = new Map();

        this.priceMap.set("paris", 100);
        this.priceMap.set("rio-de-janeiro", 800);
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche

                const price = this.priceMap.get(tripId);

                if ( price ){
                    resolve(price);
                } else {
                    reject(`Erreur : Aucun trip trouvé avec id= ${tripId}`);
                }
            }, 2000)
        });
    }

}

//Testing PriceService
const priceSrv = new PriceService();
priceSrv.findPriceByTripId('paris')
    .then(price => console.log('price =', price))
    .catch(err => console.log(err));
priceSrv.findPriceByTripId('nantes')
    .then(price => console.log('price =', price))
    .catch(err => console.log(err));


tripSrv.findByName("Rio de Janeiro")
    .then(tripFound => priceSrv.findPriceByTripId(tripFound.id))
    .then(price => console.log('Requête chainée : price = ' + price))
    .catch(err => console.log(err));


tripSrv.findByName("Nantes")
    .then(tripFound => priceSrv.findPriceByTripId(tripFound.id))
    .then(price => console.log('Requête chainée : price = ' + price))
    .catch(err => console.log(err));
