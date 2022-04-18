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

export function Form1() {

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
      const emailTest = regex2.emailTest(campos['email'])
      const nomeTest = regex2.minMaxTest(6,12,campos['nome'])
      const senhaTest = regex2.minMaxTest(6,12,campos['senha'])
      const confirmarSenhaTest = campos['senha'] == campos['confirmarsenha']
      console.log(emailTest, nomeTest, senhaTest, confirmarSenhaTest)

      if (emailTest && nomeTest && senhaTest && confirmarSenhaTest) {
         <SnackAlert message = 'Usuário criado com sucesso!' type= 'success'/>
         myFetch(`http://localhost:8081/users/${campos['nome']}/${campos['email']}/${campos['senha']}`, 'POST')
      }else{
         <SnackAlert message = 'Algum dos campos está inválido!' type= 'error'/>
      }
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
      </div>
   )
}