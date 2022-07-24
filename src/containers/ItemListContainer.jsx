import React , {useEffect, useState} from 'react'
import Items from '../components/Items'
import {useParams} from 'react-router'
export const prendas = [
    {
        nombre:"Campera Gris Femenina",
        calidad:"Frizza de Algodon",
        imagen:"/image/camperaGris-mujer.jpg",
        para:"Mujer",
        id:1,
        precio: 1700,
        cantidadCarrito: 0
        
    },
    {
        nombre:"Campera Negra Feminina",
        calidad:"Frizza de Algodon",
        imagen:"/image/camperaNegro-mujer.jpg",
        para:"Mujer",
        id:2,
        precio: 2000,
        cantidadCarrito: 0

    },
    {
        nombre:"Campera Negra con Cierre",
        calidad:"Algodon",
        imagen:"/image/camperaNegra-mujer2.jpg",
        para:"Mujer",
        id:3,
        precio: 1800,
        cantidadCarrito: 0

    },
    {
        nombre:"Remera Blanca",
        calidad:"Algodon",
        imagen:"/image/remeraBlanca-mujer.jpg",
        para:"Mujer",
        id:4,
        precio: 700,
        cantidadCarrito: 0

    },
    {
        nombre:"Campera Negra Masculino",
        calidad:"Frizza de Algodon",
        imagen:"/image/camperaNegro-hombre.jpg",
        para:"Hombre",
        id:5,
        precio: 1800,
        cantidadCarrito: 0

    },
    {
        nombre:"Remera Blanca Masculina",
        calidad:"Algodon",
        imagen:"/image/remeraBlanco-hombre.jpg",
        para:"Hombre",
        id:6,
        precio: 800,
        cantidadCarrito: 0

    }

]

const promesa = (time,task) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(task);
        },time)
    })
} 


const ItemListContainer = () => {
    const [data,setData]=useState([]);
    const {id} = useParams();

    useEffect(()=>{
        if(id === undefined){
            promesa(2000,prendas)
            .then(res=>setData(res))
        }else{
            promesa(2000,prendas.filter(item=>item.para === id))
            .then(res=>setData(res))
        }
    },[id])



  return (
    <div className='catalogo'>
        {
            data.length > 0 ? data.map(dato=> <Items key={dato.id} array={dato} ></Items>) : <h2>Cargando ...</h2>
        }
    </div>
  )
}

export default ItemListContainer