import React from 'react'
import _tw from 'twin.macro'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children, ...otherProps }: ContainerProps) => {
  return (
    <section tw="max-w-screen-md mx-auto" {...otherProps}>
      {children}
    </section>
  )
}

export default Container
