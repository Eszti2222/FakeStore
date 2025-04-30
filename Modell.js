export default class Modell {
  #lista = [];
  constructor(lista) {
  }
  /*
  az osztály feladata, hogy a HTTP kérésének végrehajtása
  */
  getAdat(vegpont, callback) {
    fetch(vegpont)
      .then((response) => response.json())
      .then((TERMEK) => {
        console.log("Megérkezett adatok");
        //console.log(TERMEK);
        callback(TERMEK);
      })
      .catch((error) => console.log(error));
  }
  postAdat(vegpont, callback) {
    fetch(vegpont)
      .then((response) => response.json())
      .then((data) => {
        console.log("Megérkezett adatok");
        console.log(TERMEK);
        callback(adatok);
      })
      .catch((error) => console.log(error));
  }
}
