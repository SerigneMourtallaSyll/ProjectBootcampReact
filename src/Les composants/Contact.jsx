import React from 'react'

function Contact() {
  return (
    <div>
        <h2>Contactez-nous</h2>
        <form style={{display: "flex", gap: "1rem"}}>
            <label htmlFor='nom'>Nom</label>
            <input type='text' id='nom'/>

            <label htmlFor='nom'>Email</label>
            <input type='email' id='email'/>
        </form>
    </div>
  )
}

export default Contact