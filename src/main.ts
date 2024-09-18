import Quadrado from './Quadrado'
import Circulo from './Circulo'
import Renderizador2D from './Renderizador2D';
import Renderizador3D from './Renderizador3D';

const renderizador2d = new Renderizador2D();
const renderizador3d = new Renderizador3D();

let quadrado = new Quadrado(renderizador2d);
quadrado.renderizar();

let circulo = new Circulo(renderizador2d);
circulo.renderizar();

quadrado = new Quadrado(renderizador3d);
quadrado.renderizar();

circulo = new Circulo(renderizador3d);
circulo.renderizar();

