import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div className='grid grid-flow-col grid-cols-[225px_minmax(900px,_1fr)_100px]'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body;