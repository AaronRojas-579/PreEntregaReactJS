import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const ItemCount = ({ stockAct,ClicCarrito, seAgregoCarrito }) => {
    const [stock, setStock] = useState(stockAct);
    const [cantidad, setCantidad] = useState(0);
    const ClicSumar = () => {
        if (cantidad >= 0 && cantidad < stockAct) {
            setCantidad(cantidad + 1);
            setStock(stock - 1);
        }
    }
    const ClicRestar = () => {
        if (cantidad > 0 && cantidad <= stockAct) {
            setCantidad(cantidad - 1);
            setStock(stock + 1);
        }
    }
    return (
        <>
            <div className='container-contador'>
                <h4>Cantidad que desea llevar: {cantidad}</h4>
                <div className='botones'>
                    {
                        seAgregoCarrito === 0 && <button onClick={ClicSumar}> + </button>
                    }
                    {
                        seAgregoCarrito === 0 && <button onClick={ClicRestar}> - </button>
                    }
                    {

                        seAgregoCarrito !== 0 ? <Link to = "/cart"><button>Ir al Carrito</button></Link> : cantidad > 0 ? <button onClick={() => ClicCarrito(cantidad)}>Agregar al Carrito</button> : " "
                    }
                </div>
                <h4>Stock Disponible: {stock}</h4>
            </div>
        </>
    )
}

export default ItemCount