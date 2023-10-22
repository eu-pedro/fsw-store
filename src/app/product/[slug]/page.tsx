import { prismaClient } from '@/lib/prisma'
import { ProductImages } from './components/ProductImages'

export default async function ProductDetailsPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  })

  if (!product) return null

  return (
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </div>
  )
}
