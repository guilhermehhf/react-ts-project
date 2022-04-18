import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectLabels(props: { onChange: any }) {
   //Atualizar com o banco posteriormente
   const list = ['One Piece','Game of Thrones','Ozarks']

   return (
      <div>
         <FormControl
            margin="normal"
            fullWidth
            required
         >
            <InputLabel id="obraLabel">Obra</InputLabel>
            <Select
               labelId="obra"
               id="obraSelect"
               label="Obra"
               onChange={props.onChange}
            >
               {
                  list.map(element=>(
                     <MenuItem value={element}>{element}</MenuItem>
                  ))
               }
            </Select>
         </FormControl>
      </div>
   );
}