import React from 'react'
import _tw from 'twin.macro'
import FullScreen from 'src/components/UI/FullScreen'
import { useQuery } from 'react-query'
import { HomeData } from 'src/utils/types'

const Contact = () => {
  const { data: homeData } = useQuery<HomeData>('/home')

  return (
    <FullScreen
      tw="bg-green-700 pt-40 bg-top"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)), url(/images/casual1.jpeg)`,
      }}
    >
      <header tw="my-auto px-10 lg:px-96 text-black flex justify-end">
        <div>
          <h1
            tw="text-3xl sm:text-4xl -mt-60 lg:text-5xl font-bold text-white leading-normal"
            className="text-shadow"
          >
            Contacto
          </h1>
          <section tw="bg-white rounded-md shadow p-10 mt-5 ml-auto text-gray-800">
            {homeData && (
              <>
                <p tw="block">
                  <span tw="font-medium mr-1">Correo electrónico:</span>
                  {homeData.contact_email}
                </p>
                <p>
                  <span tw="font-medium mr-1">WhatsApp:</span>
                  {homeData.contact_phone}
                </p>
              </>
            )}
          </section>
        </div>
      </header>
    </FullScreen>
  )
}

export default Contact
