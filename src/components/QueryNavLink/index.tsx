import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

export default function QueryNavLink({ to, ...props }: any) {
  const localtion = useLocation();
  return (
    <NavLink to={to + localtion.search} {...props} />
  )
}
