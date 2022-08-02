import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../components/CarContext'
import TotalCart from '../components/TotalCart';
import {db} from "../utils/firebaseConfig"
import {collection,serverTimestamp,setDoc,doc, updateDoc, increment} from "firebase/firestore";
import Swal from 'sweetalert2'

const mostrarOrden = (idOrden) => {
  Swal.fire(
    'Orden Guardada',
    'El Código de tu order es'+ idOrden,
    'success'
  )
}

function Cart() {
  const test = useContext(CartContext);
  console.log(test.carList);
  let itemsForDB = test.carList.map(item=>({
    id:item.id,
    title: item.nombre,
    price:item.precio,
    cantidad: item.cantidadCarrito
  }))


  const createOrder = ()=>{
    let order = {
      buyer:{
        name: "Aaron Rojas",
        email:"aaron.rojas@hotmail.com",
        phone : 1123240855
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: test.priceCart(),
    }
    console.log(order);
    const orderInFirestore = async() =>{
      const newOrderRef = doc(collection(db,"orders"))
      await setDoc (newOrderRef, order)
      return newOrderRef
    }
    orderInFirestore().then(result => mostrarOrden(result.id))
    .catch(err => console.log(err))

    test.carList.forEach(async(item)=>{
      const itemRef = doc(db,"products",item.id)
      await updateDoc(itemRef,{
        stock:increment(-item.cantidadCarrito)
      })
    })
    test.removeAll()
  }


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
        test.carList.length > 0 && <TotalCart event={createOrder}></TotalCart>
      }
    </div>

  )
}

export default Cart