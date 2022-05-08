import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { CartProvider } from './context'
import {
  Cart,
  Checkout,
  Footer,
  ItemDetailContainer,
  ItemListContainer,
  NavBar,
  Provider
} from './components'

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route element={<ItemListContainer />} path='/' />
            <Route element={<ItemListContainer />} path='/category/:brandId' />
            <Route element={<ItemDetailContainer />} path='/item/:itemId' />
            <Route element={<Provider />} path='/provider' />
            <Route element={<Cart />} path='/cart' />
            <Route element={<Checkout />} path='/checkout' />
            <Route element={<Navigate to='/' />} path='*' />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
