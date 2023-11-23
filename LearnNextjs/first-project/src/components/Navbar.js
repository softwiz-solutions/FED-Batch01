'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  const router = useRouter()
  const changePath = () => {
    router.push("/about-us/about-us2")
  }
  return (
    <div>
      <h1 className='bg-blue-800 text-3xl'>hello this navbar</h1>
      <Button title="go to nested about us page" onClick={changePath} />
    </div>
  )
}

export default Navbar
