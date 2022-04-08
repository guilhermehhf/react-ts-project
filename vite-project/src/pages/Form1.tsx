import React, { useState } from "react";
import { Campo } from "../components/campo";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref,
) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Form1() {
   const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
   const minMaxRegex = /^.{6,12}$/

   const [open, setOpen] = React.useState(false);
   const [alertStatus, setAlertStatus] = useState({
      message: '',
      type: ''
   })
   const [campos, setCampos] = useState({
      nome: '',
      email: '',
      senha: '',
      confirmarsenha: ''
   })

   function onChange(ev: React.FormEvent<HTMLInputElement>) {
      let { id, value } = ev.currentTarget

      setCampos({ ...campos, [id]: value })
      console.log(id, value)
   }

   function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
      ev.preventDefault()
      const emailTest = emailRegex.test(campos['email'])
      const nomeTest = minMaxRegex.test(campos['nome'])
      const senhaTest = minMaxRegex.test(campos['senha'])
      const confirmarSenhaTest = campos['senha'] == campos['confirmarsenha']

      if (emailTest && nomeTest && senhaTest && confirmarSenhaTest) {
         setAlertStatus({...alertStatus, ['message']: 'Usuário criado com sucesso!', ['type']: 'success'})
      }else{
         setAlertStatus({...alertStatus, ['message']: 'Algum dos campos está inválido!', ['type']: 'error'})
      }
      setOpen(true);
   }
   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

   return (
      <div>
         <Container component="main" maxWidth="xs" sx={{ marginTop: 10 }}>
            <Box
               sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Typography variant='h5'>Form1 - Cadastro</Typography>
               <Box
                  onSubmit={onSubmit}
                  component="form"
                  sx={{ mt: 1 }}
                  noValidate
                  autoComplete="off"
               >

                  <Campo text='Nome' onChange={onChange} />
                  <Campo text='Email' onChange={onChange} />
                  <Campo text='Senha' onChange={onChange} type='password' />
                  <Campo text='Confirmar Senha' onChange={onChange} type='password' />
                  <Button sx={{ mt: 3, mb: 2 }} variant="contained" type="submit" fullWidth>Cadastrar-se</Button>
               </Box>
            </Box>
         </Container>

         <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={alertStatus.type || 'warning'} sx={{ width: '100%' }}>
               {alertStatus.message}
            </Alert>
         </Snackbar>
      </div>
   )
}