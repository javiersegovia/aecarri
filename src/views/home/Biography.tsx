import React from 'react'
import _tw from 'twin.macro'
import Link from 'next/link'
import FullScreen from 'src/components/UI/FullScreen'

const Biography = () => {
  return (
    <FullScreen
      tw="bg-green-700"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)), url(/images/portrait1.jpeg)`,
      }}
    >
      <header tw="my-auto px-10 lg:px-80 text-white">
        <div tw="inline-block">
          <h1 tw="text-3xl sm:text-4xl -mt-40 lg:text-5xl font-bold leading-normal">
            ¿Quién soy?
          </h1>
          <Link href="/biografia" passHref>
            <a tw="mt-2 ml-auto text-right cursor-pointer flex justify-end">
              Ver biografía »
            </a>
          </Link>
        </div>
      </header>
    </FullScreen>
  )
}

export default Biography
