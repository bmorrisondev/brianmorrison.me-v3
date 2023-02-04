import React, { ReactElement } from 'react'
import Nav from '../components/Nav'

type Props = {
  children: ReactElement
}

function Layout({ children }: Props) {
  return (
    <div>
      <Nav />
      { children }
    </div>
  )
}

export default Layout