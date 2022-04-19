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

const regex2 = new Regex()

export function Form5() {
    const [campos, setCampos] = useState({
        email: '',
        senha: '',
    })

    function onChange(ev: React.FormEvent<HTMLInputElement>) {
        let { id, value } = ev.currentTarget

        setCampos({ ...campos, [id]: value })
        console.log(campos)
    }

    function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        console.log(ev.target)

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
                    <Grid container spacing={2} rowSpacing={0.5}>
                        <CheckboxLabels/>
                        <Grid item xs={12}>
                            <Button sx={{ mt: 2, mb: 2 }} variant="contained" type="submit" fullWidth>Terminar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}