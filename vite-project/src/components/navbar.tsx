import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Stack, Divider, Button, Typography, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { SwitchLightDark } from "./switch-light-dark";

export function Navbar() {
   return (
      <div>
         <AppBar position="static">
            <Toolbar>
               <Stack
                  spacing={2}
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  sx={{ flexGrow: 1 }}
               >
                  <Typography variant='h5'>Formulários</Typography>
                  <Button variant="contained" color='warning' component={Link} to="/form1">
                     Form1
                  </Button>
                  <Button variant="contained" color='warning' component={Link} to="/form2">
                     Form2
                  </Button>
                  <Button variant="contained" color='warning' component={Link} to="/form3">
                     Form3
                  </Button>
                  <Button variant="contained" color='warning' component={Link} to="/form4">
                     Form4
                  </Button>
                  <Button variant="contained" color='warning' component={Link} to="/form5">
                     Form5
                  </Button>
                  <Box sx={{ flexGrow: 1 }}></Box>
                  <SwitchLightDark />
               </Stack>
            </Toolbar>
         </AppBar>
         <Outlet />
      </div>
   );
}