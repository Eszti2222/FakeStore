import AdminTermek from "./AdminTermek.js";

/*
itt kapjuk meg az objListát, és megjelenitjük egy táblázatban,
Annyiszor példányosítjuk  az AdminTermek Osztályt,ahány eleme lesz a listánknak
*/
export default class AdminTermekTablazat {
  #termekLista = [];
  #szuloElem;
  #tbodyElem;
  constructor(szuloElem, lista) {
    this.#szuloElem = szuloElem;
    this.#szuloElem.innerHTML="";
    this.#termekLista = lista;
    this.#megjelenit();
  }
  #megjelenit() {
    //console.log(this.#termekLista)
    let html = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Termék név</th>
      <th scope="col">Ár</th>
      <th scope="col">Kategória</th>
      <th scope="col">Leírás</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>
    `;
    console.log(this.#szuloElem);
    this.#szuloElem.insertAdjacentHTML("beforeend", html);
    this.tbodyElem = this.#szuloElem.querySelector("table tbody");
    console.log(this.tbodyElem);
    /*ide példányosítjuk bele a táblázat sorait AdminTermek osztályt */
    this.#termekLista.forEach(termek =>{
        console.log(termek)
        new AdminTermek(termek,this.#tbodyElem)
    })
  }
}
