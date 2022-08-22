import React, {useContext} from 'react'
import {CartContext} from './CarContext'

function TotalCart() {
    const test = useContext(CartContext);

  return (
    <div className='totalPagar'>
        <h3>Total precio de los producto : {test.priceCart()}$ </h3>
        <h3>Impuesto al Valor Agregado : {Math.ceil(test.priceCart() * 0.021)}$ </h3>
        <h3>Total a pagar : {(test.priceCart())+(test.priceCart() * 0.021)}$</h3>
    </div>
  )
}

export default TotalCart