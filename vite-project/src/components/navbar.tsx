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
                  <Typography variant='h5' >Formulários</Typography>
                  <Button variant="contained" component={Link} to="/form1" sx={{ bgcolor: 'primary.light' }}>
                     Form1
                  </Button>
                  <Button variant="contained" component={Link} to="/form2" sx={{ bgcolor: 'primary.light' }}>
                     Form2
                  </Button>
                  <Button variant="contained" component={Link} to="/form3" sx={{ bgcolor: 'primary.light' }}>
                     Form3
                  </Button>
                  <Button variant="contained" component={Link} to="/form4" sx={{ bgcolor: 'primary.light' }}>
                     Form4
                  </Button>
                  <Button variant="contained" component={Link} to="/form5" sx={{ bgcolor: 'primary.light' }}>
                     Form5
                  </Button>
                  <Box sx={{ flexGrow: 1 }}></Box>
                  {/* <SwitchLightDark /> */}
               </Stack>
            </Toolbar>
         </AppBar>
         <Outlet />
      </div>
   );
}