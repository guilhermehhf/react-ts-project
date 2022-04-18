import React, { useState } from "react";
import { Campo } from "../components/campo";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, SelectChangeEvent, TextField } from "@mui/material";
import { SelectLabels } from '../components/select'

export function Form3() {

   const [campos, setCampos] = useState({
      titulodapostagem: '',
      obra: '',
      descricao: ''
   })

   const selectChange = (event: SelectChangeEvent) => {
      setCampos({ ...campos, ['obra']: event.target.value});
    };

   function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
      let { id, value } = ev.currentTarget

      setCampos({ ...campos, [id]: value })
   }

   function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
      ev.preventDefault()
      console.log(campos)
   }

   return (
      <div>
         <Container component="main" maxWidth="xs" sx={{ marginTop: 10, paddingBottom: 2 }}>

            <Typography variant='h5'>Form3 - Criar Postagem</Typography>
            <Box
               onSubmit={onSubmit}
               component="form"
               sx={{ mt: 1 }}
               noValidate
               autoComplete="off"
            >
               <Grid container spacing={2} rowSpacing={0.5}>
                  <Grid item xs={6}>
                     <Campo text='Titulo da postagem' onChange={onChange} />
                  </Grid>
                  <Grid item xs={6}>
                     <SelectLabels onChange={selectChange}/>
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        margin="normal"
                        fullWidth
                        required
                        multiline={true}
                        rows={8}
                        id='descricao'
                        onChange={onChange}
                        label='Descrição da postagem'
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Button sx={{ mt: 2, mb: 2 }} variant="contained" type="submit" fullWidth>Adicionar Postagem</Button>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </div>
   )
}