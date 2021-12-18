import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BtnDelContasReceber(){
    const [open, setOpen] = React.useState(false);
    const [sucesso, setSucesso] = React.useState(false);
    
    const excluirUsuario = () => {
        setOpen(false)
        setSucesso(true);
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setSucesso(false);
        setOpen(false);
      };

    return (
        <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="error" onClick={handleClickOpen}>Excluir</Button>
        </Stack>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <b>{"Atenção!"}</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Deseja realmente <b>Excluir</b> esse registro?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color = 'error'>Cancelar</Button>
          <Button onClick={excluirUsuario} autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={sucesso}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <b>{"Sucesso"}</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Usuario foi excluido
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      );
}