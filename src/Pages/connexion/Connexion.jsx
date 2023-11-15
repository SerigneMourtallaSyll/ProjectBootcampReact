import React, {useEffect} from 'react'
import { Stack, Typography, Box, TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function Connexion() {
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("utilisateur")){
            navigate("/")
        }
    })
    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = (data) => {
      console.log(data);
      axios.get(`http://localhost:3000/utilisateurs?mailUtilisateur=${data.mailUtilisateur}&motDePasse=${data.motDePasse}`).then(res => {
        if(res.data.length > 0){
          localStorage.setItem("utilisateur", JSON.stringify(res.data[0]));
          navigate("/")
          toast.success("Connexion réussie");
        }else{
          toast.error("Les identifiants sont incorrects")
        }
      })
    }
    return (
    <Stack alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100vh"} backgroundColor={"#f5f5f5"}>
        <Box width={400} sx={{backgroundColor: "#fff"}} padding={3}>
            <Typography variant='h5'>Connexion</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack flexDirection={"column"} gap={"10px"}>
                    <TextField id="email" type='email' label="Veuillez saisir votre addresse email" variant="outlined" fullWidth size="small" {...register("mailUtilisateur", {required: "Veuillez saisir votre adresse mail" , pattern: "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"})} />
                    <TextField id="motDePasse" label="Veuillez saisir un mot de passe" variant="outlined" fullWidth size="small" type='password' {...register("motDePasse", {required: "Veuillez saisir un mot de passe", minLength: {value: 6 , message: "Veuillez saisir un mot de passe de plus de 6 caracteres"}})}/>
                    <Button variant="contained" type='submit'>Se connecter</Button> 
                    <Typography>
                      Voulez-vous créer un compte ? {" "}
                      <Link to="/inscription">Cliquez ici</Link>
                    </Typography>
                </Stack>
            </form>
        </Box>
    </Stack>
  )
}

export default Connexion