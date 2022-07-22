import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props)=>{
    return(
        <button type='button'>Ver mas sobre {props.nombre} </button>
    )
}
const Productos = (props)=>{
    return(        
    <div className='producto'>
        <h2>{props.nombre}</h2>
        <div className='img-products' style={{backgroundImage:`url(${props.imagen})`}}></div>
        <div className='product-text'>
            <h3>Calidad: {props.calidad}</h3>
            <h3>Para: {props.para}</h3>
            <h3>Precio: {props.precio}$</h3>
            <Link to = {`/item/${props.id}`} ><Button nombre={props.nombre}></Button></Link>
        </div>
    </div>
    )
}
const Items = ({array}) => {
  return (

    <div className='container-products'>
        <Productos nombre={array.nombre} imagen={array.imagen} calidad={array.calidad} para={array.para} precio={array.precio} id={array.id} />
    </div>
  )
}

export default Items