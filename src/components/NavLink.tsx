import { Link } from 'gatsby'
import React, { ReactElement } from 'react'

type Props = {
  to: string
  children: JSX.Element | Array<JSX.Element | string> | string
  className?: string
  style?: React.CSSProperties
}

function NavLink({ to, children, className, style }: Props) {
  return (
    <Link to={to} className={`text-gray-500 hover:text-gray-900 hover:translate-colors-4 ${className}`} style={style}>
      { children }
    </Link>
  )
}

export default NavLink