import React from 'react'
import "./styles/styles.css"
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './containers/Cart'
import CarContextProvider from './components/CarContext'

const App = () => {
  return (
    <CarContextProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:id" element={<ItemListContainer />}></Route>
          <Route path="/item/:idItem" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </CarContextProvider>
  )
}

export default App  