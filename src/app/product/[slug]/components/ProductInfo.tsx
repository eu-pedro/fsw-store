'use client'
import { DiscountBadge } from '@/components/ui/DiscountBadge'
import { Button } from '@/components/ui/button'
import { ProductWithTotalPrice } from '@/helpers/product'
import { CartContext } from '@/providers/cart'
import { ArrowRightIcon, ArrowLeftIcon, TruckIcon } from 'lucide-react'
import { useContext, useState } from 'react'

interface ProductInfoProps {
  product: ProductWithTotalPrice
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const { addProductsToCard } = useContext(CartContext)

  function handleDecreaseQuantityClick() {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1))
  }

  function handleIncreaseQuantityClick() {
    setQuantity((prev) => prev + 1)
  }

  function handleAddToCartClick() {
    addProductsToCard({ ...product, quantity })
  }

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="gap-2 text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon size={16} onClick={handleDecreaseQuantityClick} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline">
          <ArrowRightIcon size={16} onClick={handleIncreaseQuantityClick} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="text-base font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button
        onClick={handleAddToCartClick}
        className="mt-8 font-bold uppercase"
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  )
}
