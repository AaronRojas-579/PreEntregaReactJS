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

    return (
        <CartContext.Provider value={{ carList, addToCart,removeToCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CarContextProvider