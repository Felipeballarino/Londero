import React,{useState} from "react";
import Logo from "../../media/logo.png";
import style from "./header.module.css";

const Header = () => {
  const [open, setOpen] =useState(false)

  return (
    <div className={style.contenedor}>
      <div>
        <a href="#home">
        <img src={Logo} alt="logo" />
        </a>
      </div>
      <nav className={style.navDesktop}>
        <ul className={style.navigate}>
          <li>
            <a href="#producto" target="_self">Linea de producto</a>
          </li>
          <li>
            <a href="#destacados"> Productos</a>
          </li>
          <li>
            <a href="#zonas">Zonas</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      <div className={style.menuhambur}>
        <button onClick={()=>setOpen(!open)}><i className='bx bx-menu'></i></button>
      </div>
      <nav className={open?style.navMobileActive:style.navMobile}>
        <ul >
          <li>
            <a href="#producto" >Linea de producto</a>
          </li>
          <li>
            <a href="#destacados"> Productos</a>
          </li>
          <li>
            <a href="#zonas">Zonas</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    


    </div>
  );
};

export default Header;
