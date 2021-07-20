import React from 'react'
import _tw from 'twin.macro'
import Link from 'next/link'
import FullScreen from 'src/components/UI/FullScreen'
import {
  GiBookmarklet,
  GiTwoCoins,
  GiPencilBrush,
  GiHealthNormal,
} from 'react-icons/gi'
import { useQuery } from 'react-query'
import { Category } from 'src/utils/types'
import { Fragment } from 'react'
interface IssueProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  href: string
}

const Issue = ({ icon: Icon, title, href }: IssueProps) => {
  return (
    <Link href={href} passHref>
      <a tw="rounded-md bg-white text-indigo-750 cursor-pointer text-center shadow py-6 lg:p-10 w-full opacity-80">
        <Icon className="text-5xl sm:text-6xl mx-auto" />
        <h3 tw="text-lg sm:text-xl font-bold mt-5">{title}</h3>
      </a>
    </Link>
  )
}

const iconKeys = {
  book: GiBookmarklet,
  pencil: GiPencilBrush,
  coins: GiTwoCoins,
  health: GiHealthNormal,
}

const Issues = () => {
  const { data: categories } = useQuery<Category[]>('/categories')

  return (
    <FullScreen
      tw="bg-green-700 pt-40"
      style={{
        backgroundImage: `linear-gradient(rgba(40, 0, 70, .15), rgba(50, 0, 100, .35)), url(/images/speech3.jpeg)`,
      }}
    >
      <header tw="my-auto px-10 lg:px-24 text-white">
        <h1
          tw="text-3xl sm:text-4xl -mt-40 lg:text-5xl font-bold leading-normal"
          className="text-shadow"
        >
          Posiciones políticas
        </h1>
        <p tw="mt-2 ml-auto" className="text-shadow">
          Haz click en cualquier asunto para conocer más »
        </p>
        {categories && (
          <section tw="grid grid-cols-2 lg:grid-flow-col gap-6 mt-10 mx-auto">
            {categories.map((category) => (
              <Issue
                key={category.id}
                href={`/posiciones-politicas/${category.id}`}
                title={category.name}
                icon={(category.icon && iconKeys[category.icon]) || Fragment}
              />
            ))}
          </section>
        )}
      </header>
    </FullScreen>
  )
}

export default Issues
