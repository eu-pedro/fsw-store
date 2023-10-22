import { prismaClient } from '@/lib/prisma'

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

  return <h1>{product.name}</h1>
}
