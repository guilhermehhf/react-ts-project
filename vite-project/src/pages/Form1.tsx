import React, { useState } from "react";
import { Campo } from "../components/campo";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export function Form1(){
    const [campos, setCampos] = useState({
        nome:'',
        email:'',
        senha:'',
        confirmarSenha:''
    })

    function onChange(ev:React.FormEvent<HTMLInputElement>){
        let {id,value} = ev.currentTarget
        
        setCampos({...campos, [id]:value})
        console.log(campos)
    }

    function onSubmit(ev: React.FormEvent<HTMLFormElement>){
        ev.preventDefault()
        console.log(campos)
    }

    return(
        <div>
            <Container component="main" maxWidth="xs" sx={{marginTop: 10 }}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant='h5'>Form1 - Cadastro</Typography>
                    <Box
                        onSubmit={onSubmit}
                        component="form"
                        sx={{mt: 1}}
                        noValidate
                        autoComplete="off"
                    >
                        
                        <Campo text= 'Nome' onChange = {onChange} />
                        <Campo text= 'Email' onChange = {onChange} />
                        <Campo text= 'Senha' onChange = {onChange} type='password' />
                        <Campo text= 'Confirmar Senha' onChange = {onChange} type='password' />
                        <Button sx={{ mt: 3, mb: 2 }} variant="contained" type="submit" fullWidth>Cadastrar-se</Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}