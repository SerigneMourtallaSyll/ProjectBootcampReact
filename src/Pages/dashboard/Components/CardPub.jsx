import React from "react";
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import axios from "axios";


function CardPub({pub}) {
  const user = JSON.parse(localStorage.getItem("utilisateur"));
  const useQuery = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`http://localhost:3000/publications/${id}`)
    },
    onError: (error) => {
      toast.error("Une erreur est survenue");
    },
    onSuccess: () => {
      useQuery.invalidateQueries("publications");
      toast.success("Publication supprimée avec succés")
    }
  })
  const supprimerPub = (id) => {
    mutation.mutate(id)
  }
  return (
    <Box
      width={"100%"}
      bgcolor={"#fff"}
      borderRadius={"4px"}
      marginBottom={"10px"}
      padding={"8%"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"4px"}
        marginBottom={"2%"}
      >
        <Avatar src={pub.photoUtilisateur} />
        <Typography>{pub.auteur}</Typography>
        {user.id === pub.idUtilisateur &&
          <IconButton aria-label="delete" onClick={() => supprimerPub(pub.id)} style={{marginLeft: "auto", color: "red"}}>
            <DeleteIcon />
          </IconButton> 
        }
      </Stack>
      <Typography style={{ marginBottom: "5%" }}>
        {pub.textPublication}
      </Typography>
      <img
        src={pub.imagePublication}
        style={{ width: "100%", margin: "auto" }}
      />
    </Box>
  );
}

export default CardPub;
