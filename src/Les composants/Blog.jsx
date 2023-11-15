import React from 'react';
import { Link} from 'react-router-dom';

function Blog() {
  return (
    <div>
        <h2>Liste des articles</h2>
        <div>
            <h3>Article 1</h3>
            <Link to="/blog/1">Lire l'article</Link>
        </div>
    </div>
  )
}

export default Blog