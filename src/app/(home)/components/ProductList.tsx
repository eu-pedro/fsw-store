import { ProductItem } from '@/components/ui/ProductItem'
import { computeProductTotalPrice } from '@/helpers/product'
import { Product } from '@prisma/client'

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          product={computeProductTotalPrice(product)}
          key={product.id}
        />
      ))}
    </div>
  )
}
