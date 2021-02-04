import React from 'react'
import _tw from 'twin.macro'
import FullScreen from 'src/components/UI/FullScreen'

const Organizations = () => {
  return (
    <FullScreen
      tw="bg-black pt-40 bg-top"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)), url(/images/speech4.jpg)`,
      }}
    >
      <header tw="my-auto px-10 lg:px-24 text-white">
        <h1 tw="text-3xl sm:text-4xl -mt-40 lg:text-5xl text-center font-bold leading-normal">
          Organizaciones que represento
        </h1>
        <section tw="grid grid-flow-col gap-6 mt-10 mx-auto"></section>
      </header>
    </FullScreen>
  )
}

export default Organizations
