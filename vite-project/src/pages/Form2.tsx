import React, { useState } from "react";
import { Campo } from "../components/campo";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { myFetch } from '../utils/request.js';
import { Regex } from '../utils/regex.js'
import { SnackAlert } from '../components/alert'

const regex2 = new Regex()

export function Form2() {
   const [open, setOpen] = useState(false);
   const [snack, setSnack] = useState({
      message: '',
      type: ''
   })
   const [campos, setCampos] = useState({
      email: '',
      senha: '',
   })

   function onChange(ev: React.FormEvent<HTMLInputElement>) {
      let { id, value } = ev.currentTarget

      setCampos({ ...campos, [id]: value })
      console.log(campos)
   }

   function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
      ev.preventDefault()
      console.log(campos)
      const emailTest = regex2.emailTest(campos['email'])
      const senhaTest = regex2.minMaxTest(6, 12, campos['senha'])

      if (emailTest && senhaTest) {
         setSnack({ message: 'Usuário logado com sucesso!', type: 'success' })
         myFetch(`http://localhost:8081/users/${campos['email']}/${campos['senha']}`, 'GET')
      } else {
         setSnack({ message: 'Email ou senha inválidos', type: 'error' })
      }
      setOpen(true)
   }

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
               <Typography variant='h5'>Form2 - Login</Typography>
               <Box
                  onSubmit={onSubmit}
                  component="form"
                  sx={{ mt: 1 }}
                  noValidate
                  autoComplete="off"
               >

                  <Campo text='Email' onChange={onChange} />
                  <Campo text='Senha' onChange={onChange} type='password' />
                  <Button sx={{ mt: 3, mb: 2 }} variant="contained" type="submit" fullWidth>Logar-se</Button>
               </Box>
            </Box>
            <SnackAlert open={open} setOpen={setOpen} message={snack.message} type={snack.type} />
         </Container>
      </div>
   )
}