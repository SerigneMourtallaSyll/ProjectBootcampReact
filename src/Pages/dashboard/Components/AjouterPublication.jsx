// import { ResetTv } from '@mui/icons-material';
import { Button, Stack,TextField } from '@mui/material'
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

// import TextField from '@mui/material';

function AjouterPublication() {
    const user = JSON.parse(localStorage.getItem("utilisateur"))
    const {handleSubmit, register,reset, formState: {errors}} = useForm();
    const useQueryclient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (pub) => {
            return axios.post("http://localhost:3000/publications", pub)
        }, onError: (error) => {
            toast.error("Une erreur est survenue")
        },
        onSuccess: () => {
            reset();
            useQueryclient.invalidateQueries("publications")
            toast.success("Publication ajoutée avec succés")
        }
    })

    const onSubmit = (data) => {
        const publication = {
            ...data,
            idUtilisateur: user.id,
            datePublication: new Date(),
            likePublication: 0,
            auteur: user.nomUtilisateur
        };
        
        mutation.mutate(publication)
        // console.log(data);
        
    }
    return (
        <Stack width={"50%"} margin={"auto"} marginBottom={"5%"}>
            <h1>Ajouter une publication</h1>
            <form style={{marginTop:"10px"}} onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={"8px"}>
                    <TextField id="nom" label="Partager une publication" variant="outlined" fullWidth size="small" multiline rows={4} {...register("textPublication", {required: "Veuillez saisir un texte", minLength: {value: 10 , message: "Veuillez saisir un texte de plus de 10 caracteres"}})} />
                    <TextField id="nom" label="Saisir l'url de votre image" variant="outlined" fullWidth size="small" rows={4} {...register("imagePublication", {required: "Veuillez saisir un url", minLength: {value: 5 }})}/>
                    <Button variant='contained' type='submit' style={{width: "30%"}}>Publier</Button>
                </Stack>
            </form>
        </Stack>
    )
}

export default AjouterPublication