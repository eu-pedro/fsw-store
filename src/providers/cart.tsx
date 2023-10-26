'use client'
import { Product } from '@prisma/client'
import { ReactNode, createContext, useState } from 'react'

interface CartProduct extends Product {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductsToCard: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProductsToCard: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<CartProduct[]>([])

  function addProductsToCard(product: CartProduct) {
    setProducts((prev) => [...prev, product])
  }
  return (
    <CartContext.Provider
      value={{
        products,
        addProductsToCard,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
