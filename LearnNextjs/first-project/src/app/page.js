
import Button from '@/components/Button'
import Card from '@/components/Card'
import Counter from '@/components/Counter'
import Todo from '@/components/Todo'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Todo</h1>
      {/* <Link href='/about-us/about-us2'>go to about us page</Link>
      <Card title="card 1 " description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card title="hello 2 " description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card title="hello 3" description="lorem fjsdkljfskldfjklsdjkljsdfkl" />
      <Card /> */}
      {/* <Counter /> */}
      <Todo   />
    </div>
  )
}
