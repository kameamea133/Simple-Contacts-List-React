import React, { useState } from 'react';

const ContactCard = (props) => {
const [showAge, setShowAge] = useState(false);

  return (
    <div className='contact-card'>
        <img 
          src={props.avatarUrl}
          alt="profile">
        </img>
        <div className='user-details'>
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
        {showAge ? <p>age: {props.age}</p> : null}
        <button onClick={() => setShowAge(!showAge)}>{showAge ? "Toggle Age" : "Show Age"}</button>
        </div>
      </div>
  )
}

export default ContactCard;