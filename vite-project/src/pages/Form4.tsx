import React, { useState } from "react";
import { Campo } from "../components/campo";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, SelectChangeEvent, TextField } from "@mui/material";
import { SelectLabels } from '../components/select'
import { myFetch } from '../utils/request.js';
import { Regex } from '../utils/regex.js'
import { SnackAlert } from '../components/alert'

const regex = new Regex()

export function Form4() {
   const list = ['Filme','Série','Anime','Jogo']

   const [open, setOpen] = useState(false);
   const [snack, setSnack] =  useState({
      message: '',
      type: ''
   })
   const [campos, setCampos] = useState({
      nomedaobra: '',
      genero: '',
      sinopse: ''
   })


   const selectChange = (event: SelectChangeEvent) => {
      setCampos({ ...campos, ['genero']: event.target.value});
    };

   function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
      let { id, value } = ev.currentTarget

      setCampos({ ...campos, [id]: value })
   }

   function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
      ev.preventDefault()
      console.log(campos)
      const nomeObraTest = regex.minMaxTest(6, 30, campos['nomedaobra'])
      const sinopseTest = regex.minMaxTest(12, 300, campos['sinopse'])
      const generoTest = campos['genero'] != ''

      if (nomeObraTest && sinopseTest && generoTest) {
         setSnack({ message: 'Obra adicionada', type: 'success' })
         myFetch(`http://localhost:8081/obra/${campos['nomedaobra']}/${campos['genero']}/${campos['sinopse']}`, 'POST')
      } else {
         setSnack({ message: 'Escreva o nome da obra, escolha um tipo e sinopse entre 12 à 300 caracteres!', type: 'error' })
      }
      setOpen(true)
   }

   return (
      <div>
         <Container component="main" maxWidth="xs" sx={{ marginTop: 10, paddingBottom: 2 }}>

            <Typography variant='h5'>Form4 - Adicionar nova obra</Typography>
            <Box
               onSubmit={onSubmit}
               component="form"
               sx={{ mt: 1 }}
               noValidate
               autoComplete="off"
            >
               <Grid container spacing={2} rowSpacing={0.5}>
                  <Grid item xs={6}>
                     <Campo text='Nome da Obra' onChange={onChange} />
                  </Grid>
                  <Grid item xs={6}>
                     <SelectLabels list = {list} label = "Tipo" onChange={selectChange}/>
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        margin="normal"
                        fullWidth
                        required
                        multiline={true}
                        rows={8}
                        id='sinopse'
                        onChange={onChange}
                        label='Sinopse'
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Button sx={{ mt: 2, mb: 2 }} variant="contained" type="submit" fullWidth>Adicionar Obra</Button>
                  </Grid>
               </Grid>
            </Box>
            <SnackAlert open={open} setOpen={setOpen} message={snack.message} type={snack.type} />
         </Container>
      </div>
   )
}