import React, { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, Rating, SelectChangeEvent, TextField } from "@mui/material";
import { SelectLabels } from '../components/select'
import { myFetch } from '../utils/request.js';
import { Regex } from '../utils/regex.js'
import { SnackAlert } from '../components/alert'

const regex = new Regex()

export function Form3() {
   const list = ['One Piece','Game of Thrones','Ozarks']

   const [open, setOpen] = useState(false);
   const [snack, setSnack] =  useState({
      message: '',
      type: ''
   })
   const [campos, setCampos] = useState({
      obra: '',
      nota: 0,
      opiniao: ''
   })

   const selectChange = (event: SelectChangeEvent) => {
      setCampos({ ...campos, ['obra']: event.target.value });
   };

   function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
      let { id, value } = ev.currentTarget

      setCampos({ ...campos, [id]: value })
   }

   function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
      ev.preventDefault()
      console.log(campos)
      const obraTest = regex.minMaxTest(6, 30, campos['obra'])
      const opiniaoTest = regex.minMaxTest(12, 300, campos['opiniao'])
      const notaTest = campos['nota'] != 0

      if (obraTest && opiniaoTest && notaTest) {
         setSnack({ message: 'Comentário adicionado', type: 'success' })
         myFetch(`http://localhost:8081/obra/comentario/${campos['obra']}/${campos['nota']}/${campos['opiniao']}`, 'POST')
      } else {
         setSnack({ message: 'Escolha uma obra, adicine uma nota e opinião entre 12 à 300 caracteres!', type: 'error' })
      }
      setOpen(true)
   }

   return (
      <div>
         <Container component="main" maxWidth="xs" sx={{ marginTop: 10, paddingBottom: 2 }}>

            <Typography variant='h5'>Form3 - Opinião sobre alguma obra</Typography>
            <Box
               onSubmit={onSubmit}
               component="form"
               sx={{ mt: 1 }}
               noValidate
               autoComplete="off"
            >
               <Grid container spacing={2} rowSpacing={0.5}>
                  <Grid item xs={8}>
                     <SelectLabels list = {list} label="Obra" onChange={selectChange} />
                  </Grid>
                  
                  <Grid item xs={6}>
                     <Rating
                        name="nota"
                        value={campos.nota}
                        onChange={(event, newValue) => {
                           setCampos({ ...campos, ['nota']: newValue as number})
                        }}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        margin="normal"
                        fullWidth
                        required
                        multiline={true}
                        rows={8}
                        id='opiniao'
                        onChange={onChange}
                        label='Sua opinião'
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Button sx={{ mt: 2, mb: 2 }} variant="contained" type="submit" fullWidth>Adicionar Postagem</Button>
                  </Grid>
               </Grid>
            </Box>
            <SnackAlert open={open} setOpen={setOpen} message={snack.message} type={snack.type} />

         </Container>
      </div>
   )
}