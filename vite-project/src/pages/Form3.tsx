import React, { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, Rating, SelectChangeEvent, TextField } from "@mui/material";
import { SelectLabels } from '../components/select'

export function Form3() {

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
                     <SelectLabels onChange={selectChange} />
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
         </Container>
      </div>
   )
}