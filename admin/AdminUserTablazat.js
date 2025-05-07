import AdminUser from "./AdminUser.js";

export default class AdminUserTablazat {
  #userLista = [];
  #szuloElem;
  //#tbodyElem;
  constructor(szuloElem, lista) {
    this.#szuloElem = szuloElem;
    //this.#szuloElem.innerHTML="";
    this.#userLista = lista;
    this.#megjelenit();
  }
  #megjelenit() {
    //console.log(this.#userLista)
    let html = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Felhasználó név</th>
          <th scope="col">Jelszó</th>
          <th scope="col">Email cím</th>

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
    /*ide példányosítjuk bele a táblázat sorait AdminUSer osztályt */
    this.#userLista.forEach(user =>{
        console.log(user)
        new AdminUser(user,this.tbodyElem)
    })
  }
}
