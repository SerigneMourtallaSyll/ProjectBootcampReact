import React from "react";
import ReactDOM from 'react-dom/client'


const Application = () => {
    return <div>
        <h1>Voici un composant react à base de fonction</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus ipsam sint reprehenderit commodi sunt perspiciatis blanditiis dicta possimus dolore sapiente provident, necessitatibus nesciunt obcaecati ut ea voluptate ullam laboriosam.</p>
    </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<Application />)