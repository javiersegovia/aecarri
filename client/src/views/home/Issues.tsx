import React from 'react'
import _tw from 'twin.macro'
import Link from 'next/link'
import FullScreen from 'src/components/UI/FullScreen'
import { GiBookmarklet } from 'react-icons/gi'

interface IssueProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  href: string
}

const Issue = ({ icon: Icon, title, href }: IssueProps) => {
  return (
    <Link href={href} passHref>
      <a tw="rounded-md bg-white text-indigo-750 cursor-pointer text-center shadow p-10 w-full">
        <Icon className="text-6xl mx-auto" />
        <h3 tw="text-xl font-bold mt-5">{title}</h3>
      </a>
    </Link>
  )
}

const Issues = () => {
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
        <section tw="grid grid-flow-col gap-6 mt-10 mx-auto">
          <Issue
            href="/posiciones-politicas/educacion"
            title="Educación"
            icon={GiBookmarklet}
          />
          <Issue
            href="/posiciones-politicas/economia"
            title="Economía"
            icon={GiBookmarklet}
          />
          <Issue
            href="/posiciones-politicas/derecho"
            title="Derecho"
            icon={GiBookmarklet}
          />
          <Issue
            href="/posiciones-politicas/salud"
            title="Salud"
            icon={GiBookmarklet}
          />
          <Issue
            href="/posiciones-politicas/otros"
            title="Otros"
            icon={GiBookmarklet}
          />
        </section>
      </header>
    </FullScreen>
  )
}

export default Issues
