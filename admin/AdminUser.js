
export default class AdminUser {
    #adat = {};
    #szuloElem;
    constructor(user, szuloElem) {
        this.#adat = user;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
    }
    #megjelenit() {
        let html = `
          <tr>
              <td scope="col">${this.#adat.id}</td>
              <td scope="col">${this.#adat.username}</td>
              <td scope="col">${this.#adat.password}</td>
              <td scope="col">${this.#adat.email}</td>
              <td scope="col">
              <button class="btn torol">❌</button>
              </td>
          </tr>
          `
        this.#szuloElem.insertAdjacentHTML("beforeend", html)
        console.log(this.#szuloElem);

    }
}
