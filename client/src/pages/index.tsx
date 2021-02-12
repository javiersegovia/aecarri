/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import _tw from 'twin.macro'
import Head from 'next/head'
// @ts-ignore
import { FullPage, Slide } from 'react-full-page'
import { Header, Biography, Issues } from '../views/home'
import Organizations from 'src/views/home/Organizations'
import Contact from 'src/views/home/Contact'

const HomePage = () => {
  return (
    <FullPage>
      <Head>
        <title>Antonio Ecarri</title>
      </Head>
      <Slide>
        <Header />
      </Slide>
      <Slide>
        <Biography />
      </Slide>
      <Slide>
        <Issues />
      </Slide>
      <Slide>
        <Organizations />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
    </FullPage>
  )
}

export default HomePage
