import PublicTermek from "./PublicTermek.js";

export default class PublicTermekTablazat {
  #termekLista = [];
  #szuloElem;
  //#tbodyElem;
  constructor(szuloElem, lista) {
    this.#szuloElem = szuloElem;
    //this.#szuloElem.innerHTML="";
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
          <th scope="col">Kép</th>
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
    /*ide példányosítjuk bele a táblázat sorait PublicTermek osztályt */
    this.#termekLista.forEach(termek =>{
        console.log(termek)
        new PublicTermek(termek,this.tbodyElem)
    })
  }
}
