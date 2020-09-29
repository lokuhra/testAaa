import React, { useState, useEffect } from "react";

import { Box, Modal, Backdrop, Button, Typography } from "@material-ui/core";
import "./styles.scss";

function ModalTC({ showTC, handleDecline, handleAccept }) {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(showTC);
  }, [showTC]);

  const body = (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
        width="35%"
        height="75%"
        className="modal-term"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          width="50%"
          height="10%"
        >
          <Typography
            variant="h5"
            component="h2"
            id="simple-modal-title-terms"
            className="title-modal"
          >
            Terms and Conditions
          </Typography>
        </Box>
        <Box
          direction="row"
          justify="center"
          alignItems="center"
          width="90%"
          height="80%"
          className={"container-terms"}
        >
          <p className="terms">
            Nuestros Términos de Servicio se actualizaron el 01 de Abril de
            2018. Hipcam Global LLC y sus filiales (colectivamente, "Hipcam")
            proporcionan: (1) el sitio web de Hipcam ubicado en www.hipcam.com y
            todos los sitios asociados vinculados con www.hipcam.com, incluidos
            el sitio web de la cuenta de usuario de Hipcam al que se puede
            acceder desde web.hipcam.com y el sitio web de Hipcam al que se
            puede acceder desde www.hipcam.com (cada uno, un "Sitio"), (2)
            servicios accesibles a través de los Sitios ("Aplicaciones web"),
            (3) software que puede descargarse en su smartphone o tableta para
            acceder a los servicios ("Aplicaciones móviles"), y (4) servicios de
            suscripción, incluidos aquellos a los que se puede acceder mediante
            las Aplicaciones web y las Aplicaciones móviles ("Servicios de
            suscripción"), todo ello para ser utilizado junto con los productos
            de hardware de Hipcam ("Productos") y de otras formas dispuestas por
            Hipcam. Algunos Productos y Servicios de Hipcam pueden utilizarse
            juntos o de forma que se integren con productos y servicios de
            terceros. El término "Servicios" se refiere a Sitios, Aplicaciones
            web, Aplicaciones móviles y Servicios de suscripción. Algunos
            Productos y Servicios de Hipcam pueden utilizarse juntos o de forma
            que se integren con productos y servicios de terceros. El término
            "Servicios" se refiere a Sitios, Aplicaciones web, Aplicaciones
            móviles y Servicios de suscripción.
          </p>
        </Box>
        <Box
          display="flex"
          direction="row"
          justifyContent="space-around"
          width="60%"
          alignItems="center"
          height="10%"
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleDecline}
            className="btn-term btn-term-decline"
          >
            DECLINE
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAccept}
            className="btn-term btn-term-accept"
          >
            ACCEPT
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Modal
      open={modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {body}
    </Modal>
  );
}

export default ModalTC;
