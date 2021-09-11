import React from 'react'
import _tw from 'twin.macro'
import FullScreen from 'src/components/UI/FullScreen'
import Image from 'next/image'

const Organizations = () => {
  return (
    <FullScreen
      tw="bg-black pt-40 bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(40, 0, 70, .15), rgba(50, 0, 100, .1)), url(/images/organizaciones.webp)`,
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
            <a href="https://alianzadellapiz.com">
              <Image
                width={150}
                height={150}
                alt="Alianza del lápiz"
                src="/images/logos/alianza-del-lapiz.png"
                tw="transform hover:scale-110 cursor-pointer transition ease-in-out duration-100"
              />
            </a>
            <a href="https://gfsinvestment.com">
              <Image
                width={100}
                height={100}
                alt="Ecarri"
                src="/images/logos/gfs.png"
                tw="transform hover:scale-105 cursor-pointer transition ease-in-out duration-100"
              />
            </a>
            <a href="https://casauslarpietri.org">
              <Image
                width={200}
                height={75}
                alt="Ecarri"
                src="/images/logos/ecarri.png"
                tw="transform hover:scale-105 cursor-pointer transition ease-in-out duration-100"
              />
            </a>
          </section>
        </div>
      </header>
    </FullScreen>
  )
}

export default Organizations
