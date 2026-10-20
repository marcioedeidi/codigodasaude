import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  displayOnly: boolean
  ariaLabel: string
  className: string
  children: React.ReactNode
}

const MarqueeSurface: React.FC<Props> = ({ displayOnly, ariaLabel, className, children }) => (
  displayOnly
    ? <div className={className}>{children}</div>
    : <Link to="/produtos" aria-label={ariaLabel} className={className}>{children}</Link>
)

export default MarqueeSurface
