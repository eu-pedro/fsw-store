import Image from 'next/image'
import { Categories } from './components/Categories'
import { prismaClient } from '@/lib/prisma'
import { ProductList } from './components/ProductList'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })
  return (
    <div>
      <Image
        src="/banner-home-01.png"
        alt="até 55% de desconto esse mês"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full px-5"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  )
}
