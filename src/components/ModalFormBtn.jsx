import React from 'react'
import './modalformbtn.css'

const ModalFormBtn = ({text,white,type,onClick}) => {
  return (
    <button type={type} onClick={onClick} className={`modalformbtn ${white && 'white'}`}>{text}</button>
  )
}

export default ModalFormBtn