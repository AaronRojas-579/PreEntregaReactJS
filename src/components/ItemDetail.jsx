import React, { useContext } from 'react'
import { CartContext } from './CarContext'
import ItemCount from './ItemCount'

const ItemSinBoton = (props) => {
  return (
    <div className='producto'>
      <h2>{props.nombre}</h2>
      <div className='img-products' style={{ backgroundImage: `url(${props.imagen})` }}></div>
      <div className='product-text'>
        <h3>Calidad: {props.calidad}</h3>
        <h3>Para: {props.para}</h3>
        <h3>Precio: {props.precio}$</h3>
      </div>
    </div>
  )
}

const ItemDetail = ({ arrayDetail }) => {

  const test = useContext(CartContext)

  const ClicCarrito = (cantidad) => {
    alert(`has agregado ${cantidad} del producto ${arrayDetail.nombre}`)
    arrayDetail.cantidadCarrito += cantidad
    if (arrayDetail.cantidadCarrito > 5){
      arrayDetail.cantidadCarrito = 5;
    }
    test.addToCart(arrayDetail)

  }

  return (
    <>
      <ItemSinBoton nombre={arrayDetail.nombre} imagen={arrayDetail.imagen} calidad={arrayDetail.calidad} para={arrayDetail.para} precio={arrayDetail.precio} id={arrayDetail.id}></ItemSinBoton>
      <div>
        <p className='detalleProducto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum delectus voluptas aut eaque eum vel nulla beatae debitis necessitatibus ullam numquam perferendis, a laborum, illo accusamus adipisci fugit eveniet.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reprehenderit in corporis nemo laudantium sunt! Ut quos, aliquam minus tempore aspernatur quo praesentium blanditiis exercitationem, fugiat, dolorem nobis delectus excepturi.
        </p>
        <br />
        <ItemCount stockAct={5} prenda={arrayDetail.nombre} ClicCarrito={ClicCarrito}></ItemCount>
      </div>
    </>
  )
}

export default ItemDetail