import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import AjouterPublication from './Components/AjouterPublication';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import CardPub from './Components/CardPub';

function Dashboard() {
  // const [publications, setPublications] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("utilisateur")){
        navigate("/connexion")
    }
  })
  const queryClient = useQueryClient();
  const {data:publications, error, isLoading} = useQuery({
    queryKey: ["publications"],
    queryFn: () => 
      axios.get("http://localhost:3000/publications")
      .then((res) => res.data),
      onerror: (error) => console.log(error)
  })
  if(isLoading){
    return <div>Chargement...</div>
  }

  let pubTrier = publications.sort((a,b) =>{
    return new Date(b.datePublication) - new Date(a.datePublication)
  })

  return (
    <Box bgcolor={"#eef4ff"}>
      <NavBar />
      <AjouterPublication />
      <Box width={"50%"} margin={"auto"}>
        {publications&& pubTrier.map((pub) =>(
            <CardPub  pub={pub}/>  
          )
        )}
      </Box>
    </Box>
  )
}

export default Dashboard