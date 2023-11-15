import React, { useState, useEffect } from 'react'

function Compteur(props) {
    console.log(props);
    const [compteur , setCompteur] =useState(10);
    const incrementer = () =>{
        setCompteur(compteur + 1)
    }

    const decrementer = () =>{
        setCompteur(compteur - 1)
    }

    {/*--------Cycle de vie d'un composant--------- */}
    useEffect(() => {
        setTimeout(() =>{
            alert("Le composant est rendu")
        })
    })

  return (
    <div>
        {/*<h3>Voici un compteur</h3>
        <h3>Moi c'est {props.nom} et j'ai {props.age}</h3>*/}


        {/*-------Exercice compteur------- */}

        <div className='compteur'>
            <button onClick={incrementer}>+</button>
            <p className={compteur < 0 && "erreur"}>{compteur}</p>
            <button onClick={decrementer}>-</button>
        </div>

    </div>
  )
}

export default Compteur