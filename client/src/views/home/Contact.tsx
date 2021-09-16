import React from 'react'
import _tw from 'twin.macro'
import FullScreen from 'src/components/UI/FullScreen'
import { useQuery } from 'react-query'
import { HomeData } from 'src/utils/types'

const Contact = () => {
  const { data: homeData } = useQuery<HomeData>('/homepage')

  return (
    <FullScreen
      tw="bg-green-700 pt-40 lg:bg-top bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)), url(/images/contactame.jpeg)`,
      }}
    >
      <header tw="my-auto lg:px-10 xl:px-32 text-black flex justify-center lg:justify-end">
        <div>
          <h1
            tw="text-center sm:text-left text-3xl sm:text-4xl -mt-60 lg:text-5xl font-bold text-white leading-normal"
            className="text-shadow"
          >
            Contáctame
          </h1>
          <section tw="bg-white rounded-md shadow p-10 mt-5 ml-auto text-gray-800">
            {homeData && (
              <>
                <p tw="block">
                  <span tw="block font-bold mr-1">Correo electrónico</span>
                  {homeData.contact_email}
                </p>
                <p tw="mt-4">
                  <span tw="block font-bold mr-1">WhatsApp</span>
                  {homeData.whatsApp}
                </p>
                <p tw="mt-4">
                  <span tw="block font-bold mr-1">Teléfono</span>
                  {homeData.contact_phone}
                </p>
              </>
            )}
            <img tw="mt-5" src="/images/whatsapp-qr.png" alt="QR Code" />
          </section>
        </div>
      </header>
    </FullScreen>
  )
}

export default Contact
