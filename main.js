/*
itt a program blépési pontja
*/
/*callback függvény nem azonnal hívodnak meg, ezért nincsen () sem , akkor fut le amikor megérkeznek az adatok, aszinkron hivásban működik, paraméterben megadva*/
import AdminTermekTablazat from "./admin/AdminTermekTablazat.js";
import AdminTermek from "./admin/AdminTermek.js";
import AdminUser from "./admin/AdminUser.js";
import AdminUserTablazat from "./admin/AdminUserTablazat.js";
import Modell from "./Modell.js";
import PublicTermekTablazat from "./public/PublicTermekTablazat.js";

const SZULOELEM = document.getElementsByClassName("tarolo")[0];

const ADMINTERMEKGOMB = document.querySelector(".admintermek");
const ADMINUSERGOMB = document.querySelector(".adminuser");
const PUBLICTERMEKGOMB = document.querySelector(".publictermek");
const PUBLICKOSARGOMB = document.querySelector(".publickosar");

/*
publictermek
publickosar
admintermek
adminuser
*/
const modell = new Modell();
let TERMEK = [];

ADMINTERMEKGOMB.addEventListener("click", function () {
  SZULOELEM.innerHTML = "Admin TERMÉK oldal";
  modell.getAdat("https://fakestoreapi.com/products", adminTermekMegjelenit);
});
ADMINUSERGOMB.addEventListener("click", function () {
  SZULOELEM.innerHTML = "Admin USER oldal";
  modell.getAdat("https://fakestoreapi.com/users", adminUserMegjelenit);
});

PUBLICTERMEKGOMB.addEventListener("click", function () {
  SZULOELEM.innerHTML = "Publikus Termék oldal";
  modell.getAdat("https://fakestoreapi.com/products", publikusTermekMegjelenit);
});
PUBLICKOSARGOMB.addEventListener("click", function () {
  SZULOELEM.innerHTML = "Publikus Kosár oldal";
  modell.getAdat("https://fakestoreapi.com/products", publicKosarMegjelenit);
});
/*
Aszinkron működés: nem állítja meg porgram futását, amíg ő maga fut/teljesül, tovább megy a következő sorra
*/

/*console.log("A lista értéke a fetch előtt: ");
console.log(TERMEK);
*/

/*function getAdat(vegpont, callback) {
    fetch(vegpont)
      .then((response) => response.json())
      .then((data) => {
        console.log("Megérkezett adatok");
        console.log(TERMEK);
        callback(adatok);
      })
      .catch((error) => console.log(error));
  }*/

/*
  console.log("A lista értéke a fetch után: ");
  console.log(TERMEK);
*/

function adminTermekMegjelenit(lista) {
  new AdminTermekTablazat(SZULOELEM, TERMEK);
}
function adminUserMegjelenit(lista) {
  new AdminUserTablazat(SZULOELEM, TERMEK);
  //console.log("admin user", lista);
}
function publikusTermekMegjelenit(lista) {
  new PublicTermekTablazat(SZULOELEM, TERMEK);
}
function publicKosarMegjelenit(lista) {
  new PublicKosar(SZULOELEM, TERMEK);
}
