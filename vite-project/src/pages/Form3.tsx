import React, { useState } from "react";
import { Campo } from "../components/campo";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, TextField } from "@mui/material";

export function Form3() {
   const [campos, setCampos] = useState({
      email: '',
      senha: '',
   })

   return (
      <div>
         <Container component="main" maxWidth="md" sx={{ marginTop: 10, paddingBottom: 2 }}>
         <Typography variant='h5'>Form3 - Criar Postagem</Typography>
            <Grid container spacing={2}>
               <Grid item xs={6}>
                  <TextField
                     margin="normal"
                     fullWidth
                     required
                     label='Titulo da postagem'
                  />
               </Grid>
               <Grid item xs={6}>
                  <TextField
                     margin="normal"
                     fullWidth
                     required
                     label='Sobre'
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     margin="normal"
                     fullWidth
                     required
                     multiline={true}
                     rows={8}
                     label='Descrição da postagem'
                  />
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}