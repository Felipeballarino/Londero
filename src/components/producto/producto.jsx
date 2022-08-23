import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./producto.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Producto = ({ prod }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button onClick={handleOpen} >
        Ver producto
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            className={styles.contenedorProducto}
          >
            <div className={styles.imagen}>
              <button onClick={handleClose}>
                <span className="material-icons-outlined">highlight_off</span>
              </button>
              <img src={prod.foto} alt="foto" />
            </div>
            <div className={styles.prodInfo}>
              <div>
                <h1>{prod.titulo}</h1>
                <p>{prod.info}</p>
              </div>
              <button>Consultar por el producto</button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Producto;
