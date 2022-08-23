import React, { useState } from "react";
import Portada from "../../media/Portada.png";
import Destacados from "../destacados/destacados";
import Marcas from "../marcas/marcas";
import Productos from "../swiper-prod/productos";
import style from "./home.module.css";
import Usos from '../../services/usos';

const servusos = new Usos();

const Home = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    mail: "",
    telefono: "",
    mensaje: "",
  });

  const handlerChange = (e) => {
    e.preventDefault();
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    servusos.sendMail_confirmacioncheckin(formulario);
    setFormulario({
      nombre: "",
      mail: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <div className={style.contenedorHome}>
      <div className={style.portada} id="home">
        <img src={Portada} alt="portada" />
      </div>
      <div className={style.productos} id="producto">
        <h1 className={style.titulo}>LÍNEA DE PRODUCTOS</h1>
        <div className={style.contProd}>
          <Productos />
        </div>
        <hr />
      </div>
      <div className={style.contDestacados} id="destacados">
        <h1 className={style.titulo}>PRODUCTOS DESTACADOS</h1>
        <Destacados />
        <button className={style.botonCatalogo}>
          Descargar catálogo completo
        </button>
        <hr />
      </div>
      <div className={style.zonas} id="zonas">
        <h1 className={style.titulo}>ZONAS</h1>
        <div className={style.contenidoZonas}>
          <p>
            Desde sus orígenes, nuestra firma concentró sus esfuerzos en atender
            las necesidades de los emprendimientos comerciales de Villa Nueva y
            Villa María. Nuestra evolución fue acompañada por un progresivo
            crecimiento del ámbito de influencia, llegando abastecer con
            nuestros productos a clientes radicados en grandes y pequeñas
            localidades de la provincia, tales como Canals, Bell Ville,
            Ballesteros, General Deheza, Río Cuarto, Río Tercero, Playosa.
          </p>
          <p>
            A pesar de haber satisfecho las necesidades de insumos comerciales
            de clientes de más de 160 localidades, en la actualidad, arriba del
            50% de nuestros clientes se concentran en nuestra región, más
            precisamente en las localidades de Villa María y Villa Nueva. La
            segunda zona en nivel de importancia, es el corredor Villa
            María-Villa General Belgrano, para el cual contamos con un canal
            logístico propio disponible para la entrega de productos y la
            provisión de servicios en las localidades de Arroyo Cabral, Luca,
            Hernando, General Fotheringam, Tancacha, Río Tercero, Almafuerte,
            Embalse, Villa del Dique, Villa Rumipal, Santa Rosa de Ctalamuchita
            y Villa General Belgrano, con miras de ampliar el alcance hasta la
            localidad de Los Reartes.
          </p>
        </div>
        <hr />
      </div>
      <div className={style.marca}>
        <h1 className={style.titulo}>MARCAS COMERCIALIZADAS</h1>
        <div className={style.contMarcas}>
          <Marcas />
        </div>
        <hr />
      </div>
      <div className={style.contacto} id="contacto">
        <h1 className={style.titulo}>CONTACTO</h1>
        <form className={style.formulario}>
          <div className={style.inputs}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={formulario.nombre}
                onChange={handlerChange}
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label>Mail</label>
              <input
                type="text"
                name="mail"
                id="mail"
                value={formulario.mail}
                onChange={handlerChange}
                placeholder="Ingresa tu mail"
              />
            </div>
            <div>
              <label>Telefono</label>
              <input
                type="text"
                name="telefono"
                value={formulario.telefono}
                onChange={handlerChange}
                placeholder="Ingresa tu nombre"
              />
            </div>
          </div>
          <div className={style.textarea}>
            <label>Mensaje</label>
            <textarea
              onChange={handlerChange}
              type="text"
              name="mensaje"
              id="mensaje"
              value={formulario.mensaje}
              placeholder="Dejanos tu mensaje"
            />
          </div>
        </form>
        <button className={style.butonEnviar} onClick={handlerSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default Home;
