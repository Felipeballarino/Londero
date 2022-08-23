import React, { useState,useEffect   } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import producto1 from "../../media/producto1.png";
import producto2 from "../../media/producto2.png";
import producto3 from "../../media/producto3.png";
import producto4 from "../../media/producto4.png";
import producto5 from "../../media/producto5.png";
import producto6 from "../../media/producto6.png";
import { Navigation } from "swiper";
import style from './producto.module.css'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const arrProd = [
  { foto: producto1, nombre: "HOGAR" },
  { foto: producto2, nombre: "CARNICERIA" },
  { foto: producto3, nombre: "GASTRONOMIA" },
  { foto: producto4, nombre: "ALMACEN" },
  { foto: producto5, nombre: "HOTELERIA" },
  { foto: producto6, nombre: "PANADERIA" },
];

const Productos = () => {
  const [bndMobile,setBndMobile] =useState(4)


  useEffect(() => {
    // evento que sucede cuando la ventana cambia de tamaño
    if (window.innerWidth >= 900) {
      return setBndMobile(4);
    }
    return setBndMobile(1);
  }, []);
  return (
    <div className={style.slide}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={bndMobile}
      >
        {arrProd.map((p,i) => (
          <SwiperSlide key={i}>
            <div className={style.card}>
              <h1>{p.nombre}</h1>
              <img src={p.foto} alt="foto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Productos;
