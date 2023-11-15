import React, { useState } from 'react';
import '../src/main.css';
// import Compteur from './Les composants/Compteur';
import Navbar from './Les composants/ExoComponent/Navbar';
import Post from './Les composants/ExoComponent/Post';
import { Link } from 'react-router-dom';


function App() {
    // const age = 60;
    // const nom = "Cheikh";
    const [posts, setPosts] = useState([
        {
            id:1,
            title: "Modou Ndiaye",
            description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
            liker: false
        },
        {
            id:2,
            title: "Fallou Fall",
            description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
            liker: false
        },
        {
            id:3,
            title: "Bintou Diallo",
            description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
            liker: false
        },
        {
            id:4,
            title: "Sadiyah Thiam",
            description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
            liker: false
        },
        {
            id:5,
            title: "Pierre Doumbouya",
            description: "Voici un exemple de texte qui vient juste remplacer ce texte ici",
            liker: false
        },
    ]);

    const liker = (data) =>{
        const donneeCopier = [...posts];
        const index = posts.indexOf(data);
        donneeCopier[index] = {...posts[index], liker:!posts[index].liker};
        setPosts(donneeCopier)
        console.log(donneeCopier);
    }

    const deletePosts = (id) =>{
        const nouvelleDonnee = posts.filter(p => p.id != id)
        setPosts(nouvelleDonnee);
    }


    const nbreLiker = posts.filter((p) => p.liker);


  return (
    <div>
        {/*<Link to="/propos">Visitez à propos</Link>
         <Link to="/blog">Visitez le blog</Link>*/}
        {/*<h2>Voici un composant dans un autre fichier</h2>
        <h2>Voici un cmposant simple</h2>
        <p>Bonjour il a {age} ans</p>
        {
            age > 50 ? <h3>Vous etes vieux</h3> : <h3>Vous etes jeunes</h3>
        }
        {/*<Compteur age={20} nom={nom}/>*/}

        {/*------Composant reutilisable--------*/}
        {/*<Compteur />*/}

        {/*-------Exercice sur les composants-------*/}
        {/*<Navbar nombreLike = {nbreLiker.length} />
        {posts.map((elem) => (
            <Post title={elem.title} key={elem.id} description={elem.description} liker={liker} data={elem} deleted={deletePosts}/>    
        ))}*/}
    </div>
  )
}

export default App