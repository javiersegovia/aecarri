import React from 'react'
import _tw from 'twin.macro'

interface FullScreenProps {
  children: React.ReactNode
  style?: Record<string, string>
}

const FullScreen = ({ children, ...otherProps }: FullScreenProps) => (
  <section
    tw="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center"
    {...otherProps}
  >
    {children}
  </section>
)

export default FullScreen
