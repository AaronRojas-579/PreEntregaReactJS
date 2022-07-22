import React  from 'react'
import ItemDetail from '../components/ItemDetail'
import {prendas} from './ItemListContainer'
import {useParams} from 'react-router'
import { useState , useEffect} from 'react'

const promesa = (time,task) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(task);
        },time)
    })
} 

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([]);
    const {idItem} = useParams();

    useEffect(()=>{
      promesa(2000,prendas.find(item=>item.id === parseInt(idItem)))
      .then(res=>setProducto(res))
  },[idItem])

  console.log(producto);

  return (
    <div className='catalogo'>
      {
        producto.length!==0?<ItemDetail arrayDetail={producto}></ItemDetail>:<p>Cargando...</p>
      }  
    </div>
  )
}

export default ItemDetailContainer