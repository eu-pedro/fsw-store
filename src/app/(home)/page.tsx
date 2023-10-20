import Image from 'next/image'
import { Categories } from './components/Categories'

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        alt="até 55% de desconto esse mês"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full"
      />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  )
}
