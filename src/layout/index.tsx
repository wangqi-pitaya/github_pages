import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>Layout

      <div>
        <Link to='/home'>点击去首页</Link>
      </div>
      <div>
        <Link to='/list'>查看详情</Link>
      </div>
      <Outlet />
    </div>
  )
}
