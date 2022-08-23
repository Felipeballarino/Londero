import axios from 'axios';
import Swal from 'sweetalert2';
class usosService {
  convertUrl(dato, indice) {
    if (!dato) return dato;
    if (indice === 'convert')
      return dato.replace(/ /g, '_').toLocaleLowerCase();
    return dato.replace(/_/g, ' ').toLocaleLowerCase();
  }

  sendMail_confirmacioncheckin(obj) {
    const msj = `
    <section
    style="
      background-color: #ffffff;
      width: 100%;
      height: 100%;
      padding: .5rem 2rem 1rem 2rem;
      color: #000;
    ">
    <div>
      <article style="padding: 1rem 0rem 1rem 0rem">
        <h2 style="font-size: 22px">
          ¡Mensaje de consulta!
        </h2>
        <h4 style="margin-top: 1rem; font-size: 14px">
          <p margin-bottom: 1px">
              Estás recibiendo este mensaje de ${obj.nombre} 
              <br>
              con el e-mail: ${obj.mail}
              <br>
              y e numero: ${obj.telefono}
              <br>
              <br> 
              Su consulta es: ${obj.mensaje}
          </p>
        </h4>
      </article>
    </div>
  </section>
    `;
    const msjHTML = new DatosSendMsj();
    msjHTML.to = 'felipeballarino97@gmail.com';
    msjHTML.from = obj.mail;
    msjHTML.tema = 'Consulta Patio Chino';
    msjHTML.mensaje = msj;
    axios
      .post(
        'https://api.custer.com.ar/server/mailer.php',
        JSON.stringify(msjHTML)
      )
      .then((resp) => {
        if (resp.data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado !',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  }
}
export default usosService;

class DatosSendMsj {
  to = ''; // quien recibe el msj
  from = ''; // quien envia el msj
  tema = ''; // titulo del msj
  mensaje = '';
  nombre = ''; // nombre de quien envía el msj
  telefono = ''; // telefono de quien envía el msj
}
