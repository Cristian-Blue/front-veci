import { Box, Button, Dialog, DialogActions, DialogTitle } from "@mui/material"
import React from "react"
import("./dialog.scss")
export default function DialogGeneral (props) {
    const { onClose, open, info } = props;

 
    const handleClose = () => {
        onClose();
    };
    return(
        <Dialog onClose={handleClose}  open={open} >
            <DialogTitle className="titleDialog">{info.message} </DialogTitle>
            <Box className={"p15"}>
                <p><b> Número de la transacción: </b> {info.transactionalID}</p>
                <p><b> Número de telefono: </b> {info.cellPhone}</p>
                <p><b> Valor: </b> {info.value}</p>
               
            </Box>
            <DialogActions>
                <Button type="button" variant="contained" onClick={handleClose}>Cerrar</Button>
            </DialogActions>
            
        </Dialog>
    )
}