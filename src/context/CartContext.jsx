import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext([])
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  // Products in cart
  const countCart = () => {
    return cart.reduce((acc, prod) => acc + prod.count, 0)
  }

  const totalPriceCart = () => {
    return cart.reduce((acc, prod) => acc + prod.count * prod.price, 0)
  }

  // Clean all products in cart
  const cleanCart = () => {
    return setCart([])
  }

  // Clean a product
  const cleanItem = (id) => {
    return setCart(cart.filter((prod) => prod.id !== id))
  }

  // LocalStorage
  useEffect(() => {
    let cart = localStorage.getItem('cart')

    if (cart) return setCart(JSON.parse(cart))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        countCart,
        totalPriceCart,
        cleanCart,
        cleanItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
