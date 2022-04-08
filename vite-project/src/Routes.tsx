import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Form1 } from "./pages/Form1";
import { Form2 } from "./pages/Form2";
import { Form3 } from "./pages/Form3";
import { Form4 } from "./pages/Form4";
import { Form5 } from "./pages/Form5";

export function AppRoutes() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path='/form1' element={<Form1 />} />
            <Route path='/form2' element={<Form2 />} />
            <Route path='/form3' element={<Form3 />} />
            <Route path='/form4' element={<Form4 />} />
            <Route path='/form5' element={<Form5 />} />
            </Route>
        </Routes>
      </Router >
    </ThemeProvider>
  )
}

