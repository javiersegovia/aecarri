import React from 'react'
import _tw from 'twin.macro'
import { useRouter } from 'next/router'
import GoBack from 'src/components/UI/GoBack'
import { Container } from 'src/components/UI'

const links = [
  {
    title: 'Régimen no tiene cómo seguir manteniendo al estado totalitario',
    url:
      'https://www.elnacional.com/venezuela/ecarri-regimen-no-tiene-como-seguir-manteniendo-al-estado-totalitario/',
  },
  {
    title: 'Hay que avanzar a la dolarización formal y seria del país',
    url:
      'https://www.elnacional.com/economia/antonio-ecarri-hay-que-avanzar-a-la-dolarizacion-formal-y-seria-del-pais/',
  },
  {
    title: 'El socialismo convirtió a Venezuela en una fábrica de pobres',
    url:
      'https://www.elnacional.com/venezuela/antonio-ecarri-el-socialismo-convirtio-a-venezuela-en-una-fabrica-de-pobres/ ',
  },
]

const IssueCategoryPage = (props: any) => {
  const router = useRouter()

  const { category } = router.query

  return (
    <>
      <div
        tw="bg-black bg-no-repeat bg-center bg-cover mt-10 rounded-md h-96 w-full max-w-screen-2xl mx-auto"
        style={{
          height: '40vh',
          backgroundImage: `linear-gradient(rgba(40, 0, 70, .2), rgba(50, 0, 100, .35)), url(/images/people6.jpg)`,
        }}
      >
        <GoBack />
      </div>
      <Container tw="mt-10 prose">
        <h1 tw="text-center">Educación</h1>
        <ul tw="mt-10 text-lg text-justify pb-20 space-y-2">
          {links.map(({ title, url }) => (
            <li key={title}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                tw="block"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default IssueCategoryPage
