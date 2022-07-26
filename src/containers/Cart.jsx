import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../components/CarContext'
import TotalCart from '../components/TotalCart';

function Cart() {
  const test = useContext(CartContext);
  console.log(test.carList);
  return (
    <div>
      {
        test.carList.length > 0 ?
          test.carList.map(item =>
            <div className='itemCarrito' key={item.id}>
              <div className='itemCarrito--img' style={{ backgroundImage: `url(${item.imagen})` }} ></div>
              <div>
                <h1>{item.nombre}</h1>
                <h2>{item.cantidadCarrito} Unidades</h2>
              </div>
              <button className='itemCarrito--remove' onClick={() => test.removeToCart(item)}>Eliminar del Carrito</button>
            </div>
          )
          :
          <div className='itemCarrito'>
            <h1 className='espera'>No Añadiste ningun producto al carrito</h1>
          </div>
      }
      {
        test.carList.length > 0 && <TotalCart></TotalCart>
      }
    </div>

  )
}

export default Cart