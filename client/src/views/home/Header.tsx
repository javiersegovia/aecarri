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

const Header = () => {
  const { data: homeData } = useQuery<HomeData>('/homepage')

  const { phrase, instagram_url, twitter_url, facebook_url, youtube_url } =
    homeData || {}

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
        {phrase && (
          <>
            <h1 tw="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-md lg:max-w-lg xl:max-w-2xl leading-normal">
              {phrase}
            </h1>
            <div tw="mt-10 h-1 bg-white w-24 rounded-sm" />
          </>
        )}
        <div tw="mt-10 flex space-x-6">
          {instagram_url && (
            <SocialIcon href={instagram_url}>
              <FiInstagram />
            </SocialIcon>
          )}
          {twitter_url && (
            <SocialIcon href={twitter_url}>
              <FiTwitter />
            </SocialIcon>
          )}
          {facebook_url && (
            <SocialIcon href={facebook_url}>
              <FiFacebook />
            </SocialIcon>
          )}
          {youtube_url && (
            <SocialIcon href={youtube_url}>
              <FiYoutube />
            </SocialIcon>
          )}
        </div>
      </header>
    </FullScreen>
  )
}

export default Header
