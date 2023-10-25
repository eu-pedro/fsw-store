import { ProductWithTotalPrice } from '@/helpers/product'
import Image from 'next/image'
import Link from 'next/link'
import { DiscountBadge } from './DiscountBadge'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[80%] w-auto max-w-[80%]"
            style={{
              objectFit: 'contain',
            }}
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2 overflow-hidden  whitespace-nowrap">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-normal font-semibold ">
                  R$ {product.totalPrice.toFixed(2)}
                </p>

                <p className="text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold">
                R$ {product.basePrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
