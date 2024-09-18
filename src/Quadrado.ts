import Forma from "./Forma";

export default class Quadrado extends Forma {
    renderizar(): void {
      console.log("Quadrado renderizado")
      this.renderizador.renderizarForma()
    }
  }