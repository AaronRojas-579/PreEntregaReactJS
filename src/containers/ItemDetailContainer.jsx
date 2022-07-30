import React from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { db } from '../utils/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { idItem } = useParams();

  
  useEffect(() => {
    const firestoreFetchUnico = async() => {
      const docRef = doc(db, "products", idItem);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return {...docSnap.data(), id:docSnap.id};
      } else {
        console.log("No such document!");
      }
    }
    firestoreFetchUnico().then(res=>setProducto(res))
    .catch(err=>console.log(err))
  }, [idItem])

  console.log(producto);

  return (
    <div className='catalogo'>
      {
        producto.length !== 0 ? <ItemDetail arrayDetail={producto}></ItemDetail> : <p>Cargando...</p>
      }
    </div>
  )
}

export default ItemDetailContainer