import { createContext, useState } from 'react'

export const CartContext = createContext();

const CarContextProvider = ({ children }) => {
    const [carList, setCarList] = useState([])

    const addToCart = (item,cantidad) => {
        let arrayId = [];
        carList.map(item=> arrayId = [...arrayId,item.id])
        if(!arrayId.includes(item.id)){
            setCarList([...carList,{
                id: item.id,
                imagen : item.imagen,
                nombre: item.nombre,
                precio:item.precio,
                totalPrecio : item.totalPrecio,
                cantidadCarrito: cantidad<item.stock?cantidad:item.stock,
            }])
        }else{
            let nuevoArray = carList.find(element => element.id === item.id);
            nuevoArray.cantidadCarrito += cantidad
            let arrayCarrito = carList.filter(e => e.id !== item.id)
            setCarList([...arrayCarrito,nuevoArray])
        }
    }
    const removeToCart = (item) =>{
        const nuevoCartList = carList.filter((list)=> list !== item );
        item.cantidadCarrito = 0;
        setCarList(nuevoCartList);
    }
    const removeAll = () =>{
        setCarList([])
    }
    const countCart = ()=>{
        let a = 0;
        for(let i = 0; i < carList.length;i++){
            a += carList[i].cantidadCarrito;
        }
        return a;
    }

    const priceCart = ()=>{
        let totalPrecio = 0;
        for(let i = 0 ; i < carList.length; i++){
            totalPrecio += (carList[i].cantidadCarrito * carList[i].precio) 
        }
        return totalPrecio;
    }

    return (
        <CartContext.Provider value={{ carList, addToCart,removeToCart,countCart,priceCart,removeAll}}>
            {children}
        </CartContext.Provider>
    )
}
export default CarContextProvider