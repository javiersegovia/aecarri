import React from 'react'
import _tw from 'twin.macro'
import FullScreen from 'src/components/UI/FullScreen'
import Image from 'next/image'

const Organizations = () => {
  return (
    <FullScreen
      tw="bg-black pt-40 bg-top"
      style={{
        backgroundImage: `linear-gradient(rgba(40, 0, 70, .15), rgba(50, 0, 100, .1)), url(/images/portrait4.jpeg)`,
      }}
    >
      <header tw="my-auto px-10 lg:px-24 text-center">
        <h1
          tw="text-3xl sm:text-4xl lg:text-5xl text-center text-white mt-32 mb-10 font-bold leading-normal"
          className="text-shadow"
        >
          Organizaciones que represento
        </h1>
        <div tw="bg-white rounded-md inline-flex justify-center mx-auto p-10 flex-col opacity-80">
          {/* <h1 tw="text-3xl sm:text-4xl lg:text-4xl text-center text-indigo-900 font-bold leading-normal">
            Organizaciones que represento
          </h1> */}
          <section tw="rounded-md relative inline-grid grid-flow-col gap-20 items-center mx-auto">
            <Image
              width={150}
              height={150}
              alt="Alianza del lápiz"
              src="/images/logos/alianza-del-lapiz.png"
              tw="transform hover:scale-110 cursor-pointer transition ease-in-out duration-100"
            />
            {/* <Image
              width={150}
              height={150}
              alt="Casa del lápiz"
              src="/images/logos/casa-del-lapiz.png"
              tw="transform hover:scale-110 cursor-pointer transition ease-in-out duration-100"
            /> */}
            <Image
              width={200}
              height={75}
              alt="Ecarri"
              src="/images/logos/ecarri.png"
              tw="transform hover:scale-105 cursor-pointer transition ease-in-out duration-100"
            />
          </section>
        </div>
      </header>
    </FullScreen>
  )
}

export default Organizations
