import React from 'react'
import _tw from 'twin.macro'
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi'
import FullScreen from 'src/components/UI/FullScreen'
import { HomeData } from 'src/utils/types'
import { useQuery } from 'react-query'

interface SocialIconProps {
  children: React.ReactNode
  href: string
}

const SocialIcon = ({ children, href, ...otherProps }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    tw="text-2xl sm:text-4xl"
    {...otherProps}
  >
    {children}
  </a>
)

const socialLinks = {
  instagram: 'https://www.instagram.com/aecarrivzla',
  twitter: 'https://twitter.com/aecarri ',
  facebook: 'https://facebook.com/AEcarri',
  youtube: 'https://youtube.com/c/AntonioEcarri',
}

const Header = () => {
  const { data: homeData } = useQuery<HomeData>('/homepage')

  return (
    <FullScreen
      tw="bg-green-700 bg-top"
      style={{
        backgroundImage: `linear-gradient(rgba(40, 0, 70, .0), rgba(50, 0, 100, .0)), url(/images/home1.jpg)`,
      }}
    >
      <header
        tw="my-auto pt-8 px-10 lg:px-20 text-white"
        className="text-shadow"
      >
        {homeData && (
          <>
            <h1 tw="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl leading-normal">
              {homeData.phrase}
            </h1>
            <div tw="mt-10 h-1 bg-white w-24 rounded-sm" />
          </>
        )}
        <div tw="mt-10 flex space-x-6">
          <SocialIcon href={socialLinks.instagram}>
            <FiInstagram />
          </SocialIcon>
          <SocialIcon href={socialLinks.twitter}>
            <FiTwitter />
          </SocialIcon>
          <SocialIcon href={socialLinks.facebook}>
            <FiFacebook />
          </SocialIcon>
          <SocialIcon href={socialLinks.youtube}>
            <FiYoutube />
          </SocialIcon>
        </div>
      </header>
    </FullScreen>
  )
}

export default Header
