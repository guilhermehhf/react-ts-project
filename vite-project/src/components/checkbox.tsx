import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import zIndex from '@mui/material/styles/zIndex';
import { Grid, Typography } from '@mui/material';

interface checkInterface {
   checkName: string,
   checked: boolean
}
export default function CheckboxLabels() {

   let checkTipos: Array<checkInterface> = [
      { checkName: 'Série', checked: false },
      { checkName: 'Filme', checked: false },
      { checkName: 'Anime', checked: false },
      { checkName: 'Jogos', checked: false }
   ]
   let checkGeneros: Array<checkInterface> = [
      { checkName: 'Drama', checked: false },
      { checkName: 'Aventura', checked: false },
      { checkName: 'Ação', checked: false },
      { checkName: 'Tiro', checked: false }
   ]

   const [tipos, setTipos] = React.useState(checkTipos);
   const [generos, setGeneros] =  React.useState(checkGeneros);

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
   


   return (
      <div>
         <Grid sx={{pl:2.5}} item xs={5}>
            <FormGroup>
               <Typography sx={{mt:3, mb:2}}>Tipos</Typography>
               {
                  tipos.map((tipo, index) => (
                     <FormControlLabel
                        key={index}
                        control={
                           <Checkbox checked={tipo.checked} onChange={handleChangeTipos(index)} name={tipo.checkName.toLowerCase()} />
                        }
                        label={tipo.checkName}
                     />
                  ))
               }
            </FormGroup>
         </Grid>
         <Grid sx={{pl:2.5}} item xs={5}>
            <FormGroup>
               <Typography sx={{mt:3, mb:2}}>Generos</Typography>
               {
                  generos.map((genero, index) => (
                     <FormControlLabel
                        key={index}
                        control={
                           <Checkbox checked={genero.checked} onChange={handleChangeGeneros(index)} name={genero.checkName.toLowerCase()} />
                        }
                        label={genero.checkName}
                     />
                  ))
               }
            </FormGroup>
         </Grid>

      </div>

   );
}