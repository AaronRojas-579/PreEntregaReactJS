import { createContext, useState } from 'react'

export const CartContext = createContext();

const CarContextProvider = ({ children }) => {
    const [carList, setCarList] = useState([])

    const addToCart = (item) => {
        if(!carList.includes(item)){
            setCarList([...carList,item]);
        }
    }
    const removeToCart = (item) =>{
        const nuevoCartList = carList.filter((list)=> list !== item );
        item.cantidadCarrito = 0;
        setCarList(nuevoCartList);
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
        <CartContext.Provider value={{ carList, addToCart,removeToCart,countCart,priceCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CarContextProvider