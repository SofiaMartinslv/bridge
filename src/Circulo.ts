import Forma from "./Forma";

export default class Circulo extends Forma {
    renderizar(): void {
        console.log("Circulo renderizado")
        this.renderizador.renderizarForma()
    }
  }