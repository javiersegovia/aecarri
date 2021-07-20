import React from 'react'
import _tw from 'twin.macro'
import Link from 'next/link'
import FullScreen from 'src/components/UI/FullScreen'
import { Container } from 'src/components/UI'

const Biography = () => {
  return (
    <FullScreen
      tw="bg-green-700 bg-top"
      style={{
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)), url(/images/portrait1.jpeg)`,
        backgroundImage: `linear-gradient(rgba(40, 0, 70, .15), rgba(50, 0, 100, .1)), url(/images/portrait5.jpg)`,
      }}
    >
      <Container tw="pr-4 lg:pr-0 w-full my-auto lg:px-10 lg:mr-44 text-black text-right">
        <header>
          <div tw="inline-block">
            <h1 tw="text-3xl sm:text-4xl -mt-40 lg:text-7xl font-bold leading-normal">
              ¿Quién soy?
            </h1>
            <Link href="/biografia" passHref>
              <a tw="mt-2 ml-auto text-right text-2xl cursor-pointer flex justify-end">
                Ver biografía »
              </a>
            </Link>
          </div>
        </header>
      </Container>
    </FullScreen>
  )
}

export default Biography
