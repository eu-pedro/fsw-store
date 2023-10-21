import Image, { ImageProps } from 'next/image'

export function PromoBanner({ alt, ...props }: ImageProps) {
  return (
    <Image
      height={0}
      width={0}
      sizes="100vw"
      className="h-auto w-full px-5"
      alt={alt}
      {...props}
    />
  )
}
