/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { ProductWithTotalPrice } from '@/helpers/product'
import { ReactNode, createContext, useState } from 'react'

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductsToCard: (product: CartProduct) => void
  decreaseProductQuantity: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  addProductsToCard: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<CartProduct[]>([])

  function addProductsToCard(product: CartProduct) {
    // se o produto já estiver no carrinho, aumente a quantidade
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          }
          return cartProduct
        }),
      )
    }

    // se não, adicione o produto à lista
    setProducts((prev) => [...prev, product])
  }

  function decreaseProductQuantity(productId: string) {
    // se a quantidade for 1, remova o produto do carrinho

    // se não, diminua a quantidade em 1
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            }
          }

          return cartProduct
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    )
  }

  function increaseProductQuantity(productId: string) {
    // se a quantidade for 1, remova o produto do carrinho

    // se não, diminua a quantidade em 1
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1,
            }
          }

          return cartProduct
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    )
  }
  return (
    <CartContext.Provider
      value={{
        products,
        addProductsToCard,
        decreaseProductQuantity,
        increaseProductQuantity,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
