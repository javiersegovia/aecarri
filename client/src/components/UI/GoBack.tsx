import React from 'react'
import _tw from 'twin.macro'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'

const GoBack = () => {
  return (
    <>
      <Link href="/" passHref>
        <a
          tw="text-black cursor-pointer text-lg font-medium fixed top-5 flex items-center left-10"
          style={
            {
              // mixBlendMode: 'difference',
            }
          }
        >
          <BiArrowBack className="mr-2 text-xl" /> Regresar
        </a>
      </Link>
    </>
  )
}

export default GoBack
