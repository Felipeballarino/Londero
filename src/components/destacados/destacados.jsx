import React from "react";
import destacado1 from "../../media/destacado1.png";
import destacado2 from "../../media/destacado2.png";
import destacado3 from "../../media/destacado3.png";
import destacado4 from "../../media/destacado4.png";
import style from "./destacados.module.css";
import Producto from "../producto/producto";

const arrDestacados = [
  {
    foto: destacado1,
    titulo: "Exhibidora Confitera CUBO 1.20 3N – Marca Grupo Cheff",
    info: "Ideales para exhibicion y venta de postres, tortas, masas finas, sandwiches, pastas frescas y comidas | disponibles en diferentes medidas de frente y alto (niveles) | Medidas: 1.17x1.20x0.70 mts (altoxfrentexprof) | Potencia: 1/3 HP | Vidrio termopanel | Puertas de vidrio corredizas | Vision 360° | Conserva la frescura y humedad de tus productos, sin humedad en los paneles.",
  },
  {
    foto: destacado2,
    titulo: "Horno Convector 10 bandejas – Marca: Technocalor",
    info: "Capacidad de 10 bandejas de 45×70 cm (o 20 bandejas gastronómicas 1/1) | | Ideal para panaderías, pastelerías, hoteles, restaurantes y catering. | Producción estimada: 60 kg de pan por hora. | Velocidad de calefacción de 0° a 200°C de 9 a 10 minutos. | Tablero totalmente digitalizado, control automático de temperatura, timer, vaporizador | Luz interior y luz testigo de piloto encendido | Equipado con válvula de seguridad autorizada por Enargas.",
  },
  {
    foto: destacado3,
    titulo: "Exhibidora Walk in Cooler 3 ptas ",
    info: "Permite exhibir y almacenar productos al mismo tiempo | Puertas frontales para autoservicio + puerta lateral de ingreso a depósito | Totalmente modulares | Opcional: de 3 a 10 puertas.",
  },
  {
    foto: destacado4,
    titulo: "Batea Carnicera Lamponia 2.40 mts Vidrio Curvo",
    info: "Vidrio Curvo, lateral de vidrio | Iluminación led | Gabinete exterior en chapa electrolizada-prepintada en color rojo | Piso interior en acero inoxidable brillante | Medidas: 1.35x2.40x1.00mts(altoxfrentexprof) | Disponible en 1.60, 2.00 y 3.00 mts de frente..",
  },
];

const Destacados = () => {
  return (
    <div className={style.destacados}>
        {arrDestacados.map((p, i) => (
        <div className={style.contenedorCard} key={i}>
          <div  className={style.card}>
            <img src={p.foto} alt="foto" />
            <div className={style.ver}>
              <Producto prod={p} />
            </div>
          </div>
      </div>
        ))}
    </div>
  );
};

export default Destacados;
