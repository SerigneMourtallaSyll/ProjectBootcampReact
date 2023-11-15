import { Stack, Typography, Box, TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import React, { useEffect } from 'react';
import axios from 'axios';

function Inscription() {
    

    const navigate = useNavigate();
    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        if(data.motDePasse !== data.confirmationDeMotDePasse){
            toast.error("Les mots de passe ne correspondent pas")
        }else{
            axios.get(`http://localhost:3000/utilisateurs?mailUtilisateur=${data.mailUtilisateur}`)
            .then((res) => {
                if(res.data.length > 0){
                    toast.error("Un compte existe dèjà avec cette adresse mail")
                }else {
                    axios.post("http://localhost:3000/utilisateurs", data).then((res) => {
                    toast.success("Inscription réussie");
                    navigate("/connexion");
            
                    }).catch((err) => {
                        console.log(err);
                        toast.error("Une erreur est survenue");
                    })
                }
            });
            
        }   
    }
    return (
    <Stack alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100vh"} backgroundColor={"#f5f5f5"}>
        <Box width={400} sx={{backgroundColor: "#fff"}} padding={3}>
            <Typography variant='h5'>Inscription</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack flexDirection={"column"} gap={"10px"}>
                    <TextField id="nom" label="Veuillez saisir votre nom" variant="outlined" fullWidth size="small" {...register("nomUtilisateur", {required: "Veuillez saisir un nom", minLength: {value: 5 , message: "Veuillez saisir un nom de plus de 2 caracteres"}})}/>
                    <TextField id="email" type='email' label="Veuillez saisir votre addresse email" variant="outlined" fullWidth size="small" {...register("mailUtilisateur", {required: "Veuillez saisir votre adresse mail" , pattern: "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"})} />
                    <TextField id="motDePasse" label="Veuillez saisir un mot de passe" variant="outlined" fullWidth size="small" type='password' {...register("motDePasse", {required: "Veuillez saisir un mot de passe", minLength: {value: 6 , message: "Veuillez saisir un mot de passe de plus de 6 caracteres"}})}/>
                    <TextField id="confMotDePasse" label="Veuillez confirmer votre mot de passe" variant="outlined" fullWidth size="small" type='password' {...register("confirmationDeMotDePasse", {required: "Veuillez confirmer votre mot de passe", minLength: {value: 6 , message: "Veuillez confirmer le mot de passe exacte"}})}/>  
                    <Button variant="contained" type='submit'>S'inscrire</Button> 
                </Stack>
            </form>
        </Box>
    </Stack>
  )
}

export default Inscription