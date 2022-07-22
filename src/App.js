import React from 'react'
import "./styles/styles.css"
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/category/:id" element={<ItemListContainer/>}></Route>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App  