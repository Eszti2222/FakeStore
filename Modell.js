export default class Modell {
  //#lista = [];
  constructor() {
  }
  /*
  az osztály feladata, hogy a HTTP kérésének végrehajtása
  */
  getAdat(vegpont, callback) {
    fetch(vegpont)
      .then(response => response.json())
      .then(data => {
        data
        //console.log("Megérkezett adatok");
        //console.log(data);
        callback(data);
      })
      .catch(error => console.log(error));
  }
  postAdat(vegpont, callback) {
    fetch(vegpont)
      .then(response => response.json())
      .then(data => {
        data
        //console.log("Megérkezett adatok");
        //console.log(data);
        callback(adatok);
      })
      .catch(error => console.log(error));
  }
}
