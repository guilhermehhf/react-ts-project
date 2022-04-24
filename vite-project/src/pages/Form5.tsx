import React, { useState } from "react";
import { Campo } from "../components/campo";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { myFetch } from '../utils/request.js';
import { Regex } from '../utils/regex.js'
import { SnackAlert } from '../components/alert'
import { Grid } from "@mui/material";
import CheckboxLabels from "../components/checkbox";

const regex = new Regex()

interface CheckInterface {
   checkName: string,
   checked: boolean
}

export function Form5() {
   let checkTipos: Array<CheckInterface> = [
      { checkName: 'Série', checked: false },
      { checkName: 'Filme', checked: false },
      { checkName: 'Anime', checked: false },
      { checkName: 'Jogos', checked: false }
   ]
   let checkGeneros: Array<CheckInterface> = [
      { checkName: 'Drama', checked: false },
      { checkName: 'Aventura', checked: false },
      { checkName: 'Ação', checked: false },
      { checkName: 'Tiro', checked: false }
   ]


   const [open, setOpen] = useState(false);
   const [snack, setSnack] = useState({
      message: '',
      type: ''
   })

   const [tipos, setTipos] = React.useState(checkTipos);
   const [generos, setGeneros] = React.useState(checkGeneros);

   const handleChangeTipos = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      let newArr = [...tipos];
      newArr[index].checked = event.target.checked
      setTipos(newArr);
   };
   const handleChangeGeneros = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      let newArr = [...generos];
      newArr[index].checked = event.target.checked
      setGeneros(newArr)
   };

   function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
      ev.preventDefault()
      console.log(tipos)
      console.log(generos)

      const tiposTest = verifyQtd(tipos)
      const generosTest = verifyQtd(generos)

      console.log(tiposTest, generosTest)
      if (tiposTest && generosTest) {
         setSnack({ message: 'Preferências definidas', type: 'success' })
      } else {
         setSnack({ message: 'Escolha pelo menos um campo de cada categoria!', type: 'error' })
      }
      setOpen(true)

   }

   function verifyQtd(list: Array<CheckInterface>) {
      for (let i = 0; i < list.length; i++) {
         if (list[i].checked) {
            return true
         }
      }
      return false
   }

   return (
      <div>
         <Container component="main" maxWidth="xs" sx={{ marginTop: 10, paddingBottom: 2 }}>

            <Typography variant='h5'>Form5 - Selecionar Preferências</Typography>
            <Box
               onSubmit={onSubmit}
               component="form"
               sx={{ mt: 1 }}
               noValidate
               autoComplete="off"
            >
               <Grid container spacing={2} alignItems="center" justifyContent="center" rowSpacing={0.5}>
                  <Grid sx={{ pl: 2.5 }} item xs={6}>
                     <CheckboxLabels list={tipos} handleChange={handleChangeTipos} />
                  </Grid>
                  <Grid sx={{ pl: 2.5 }} item xs={6}>
                     <CheckboxLabels list={generos} handleChange={handleChangeGeneros} />
                  </Grid>
                  <Grid item xs={12}>
                     <Button sx={{ mt: 2, mb: 2 }} variant="contained" type="submit" fullWidth>Terminar</Button>
                  </Grid>
               </Grid>
            </Box>
            <SnackAlert open={open} setOpen={setOpen} message={snack.message} type={snack.type} />
         </Container>
      </div>
   )
}