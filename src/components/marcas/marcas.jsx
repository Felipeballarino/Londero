import React from "react";
import marca1 from "../../media/marca1.png";
import marca2 from "../../media/marca2.png";
import marca3 from "../../media/marca3.png";
import marca4 from "../../media/marca4.png";
import marca5 from "../../media/marca5.png";
import marca6 from "../../media/marca6.png";
import marca7 from "../../media/marca7.png";
import marca8 from "../../media/marca8.png";
import marca9 from "../../media/marca9.png";
import marca10 from "../../media/marca10.png";
import style from './marcas.module.css'

const arrMarca = [
  { foto: marca1 },
  { foto: marca3 },
  { foto: marca8 },
  { foto: marca2 },
  { foto: marca6 },
  { foto: marca5 },
  { foto: marca7 },
  { foto: marca4 },
  { foto: marca10 },
  { foto: marca9 },
];

const Marcas = () => {
  return (
    <div className={style.marcas}>
      {arrMarca.map((p, i) => (
        <div key={i} className={style.cardMarca}>
          <img src={p.foto} alt="foto" />
        </div>
      ))}
    </div>
  );
};

export default Marcas;
