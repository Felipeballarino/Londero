import React from "react";
import imagen1 from "../../media/logoFoot.png";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <div className={style.contenedorFooter}>
      <ul className={style.info}>
        <li className={style.direccion}>
          <p>
          <span className="material-icons">fmd_good</span>
          Av. Carranza 50 - </p>
          <p>Villa Nueva, Córdoba, Argentina</p>
        </li>
        <li>
          <span className="material-icons">phone</span>+ 54 9 4912741
        </li>
        <li>
          <i className="bx bxl-whatsapp"></i>353 4269328
        </li>
        <li>
          <span className="material-icons">email</span>info@londero.com.ar
        </li>
      </ul>
      <div>
        <img src={imagen1} alt="foto" />
      </div>
    </div>
  );
};

export default Footer;
