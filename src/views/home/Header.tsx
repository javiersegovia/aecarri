import React from 'react'
import _tw from 'twin.macro'
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi'
import FullScreen from 'src/components/UI/FullScreen'

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
  return (
    <FullScreen
      tw="bg-green-700"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(/images/people1.jpeg)`,
      }}
    >
      <header tw="my-auto pt-8 px-10 lg:px-20 text-white">
        <h1 tw="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-normal">
          &quot;Elit mollit dolore labore fugiat est nisi. Culpa consequat do
          officia mollit ad deserunt non adipisicing magna...&quot;
        </h1>
        <div tw="mt-10 h-1 bg-white w-24 rounded-sm" />
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
