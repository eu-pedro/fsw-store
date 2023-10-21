import { Category } from '@prisma/client'
import Image from 'next/image'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient rounded-tl-10 flex h-[150px] w-full items-center justify-center rounded-tr-lg">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <div className="rounded-bl-rg rounded-br-lg bg-accent py-3">
        <p className="font-sm text-center font-semibold">{category.name}</p>
      </div>
    </div>
  )
}
