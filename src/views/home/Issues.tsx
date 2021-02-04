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
      <a tw="rounded-md bg-white text-black cursor-pointer text-center shadow p-10 w-full">
        <Icon className="text-6xl mx-auto" />
        <h3 tw="text-xl font-bold">{title}</h3>
      </a>
    </Link>
  )
}

const Issues = () => {
  return (
    <FullScreen
      tw="bg-green-700 pt-40"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)), url(/images/speech3.jpeg)`,
      }}
    >
      <header tw="my-auto px-10 lg:px-24 text-white">
        <h1 tw="text-3xl sm:text-4xl -mt-40 lg:text-5xl font-bold leading-normal">
          Posiciones políticas
        </h1>
        <p tw="mt-2 ml-auto cursor-pointer">
          Haz click en cualquier asunto para conocer más »
        </p>
        <section tw="grid grid-flow-col gap-6 mt-10 mx-auto">
          <Issue
            href="/posiciones-politicas/educacion"
            title="Educación"
            icon={GiBookmarklet}
          />
          <Issue
            href="/posiciones-politicas/educacion"
            title="Educación"
            icon={GiBookmarklet}
          />
          <Issue
            href="/posiciones-politicas/educacion"
            title="Educación"
            icon={GiBookmarklet}
          />
          <Issue
            href="/posiciones-politicas/educacion"
            title="Educación"
            icon={GiBookmarklet}
          />
          <Issue
            href="/posiciones-politicas/educacion"
            title="Educación"
            icon={GiBookmarklet}
          />
        </section>
      </header>
    </FullScreen>
  )
}

export default Issues
