import React from 'react'
import "./Modal.css"

const Modal = ({onClick,title,description,image,url}) => {
  return (
    <div className='modal-container'>
        <div className='modal-content'>
            <h2>{title}</h2>
            <button onClick={onClick} className='btn align-right'>
                X
            </button>
            <img className='span2' src={image} alt={title} />
            <p className='span2'>{description}</p>
            <a target='_blank'rel='noreferrer' href={url}>
                <button className='btn'>Visit Site</button>
            </a>
        </div>
        
    </div>
  )
}

export default Modal