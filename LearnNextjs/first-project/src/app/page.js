import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>hello this is main page</h1>
      <Link href='/about-us/about-us2'>go to about us page</Link>
      <Card title="card 1 " description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card title="hello 2 " description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card title="hello 3" description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card />
    </div>
  )
}
