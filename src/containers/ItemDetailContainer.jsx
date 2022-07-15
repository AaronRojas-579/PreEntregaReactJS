import React  from 'react'
import Items from '../components/Items'
import {prendas} from './ItemListContainer'
import {useParams} from 'react-router'

const promesa = (time,task) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(task);
        },time)
    })
} 

const ItemDetailContainer = () => {

    const {id} = useParams;
    const arrayId = prendas.filter(item=>item.id === 2)
    console.log(arrayId);

  return (
    <div className='catalogo'>
         <Items array={arrayId[0]} ></Items>)
    </div>
  )
}

export default ItemDetailContainer