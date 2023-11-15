import React from 'react';

function Post({title, description, liker, data , deleted}) { 
  return (
    <div className={data.liker ? 'post active' : 'post'}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='button'>
            <button className='like' onClick={() => liker(data)}>{data.liker ? "Déjà liker" : "liker"}</button>
            <button className='effacer' onClick={() => deleted(data.id)}>Effacer</button>
        </div>
    </div>
  )
}

export default Post