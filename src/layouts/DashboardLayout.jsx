import React from 'react'
import { Outlet } from 'react-router-dom'
import { getSession } from '../utils/sessionMethods'
import Signup from '../components/Signup'
import NavBar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function DashboardLayout() {
  return (
    getSession('isAuthenticated')?
    <div>
        <NavBar />
        <div className='d-flex flex-row'>
        <Sidebar />
        <Outlet />
        </div>
    </div>
    :
    <Signup />
  )
}
