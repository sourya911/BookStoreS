import React from 'react'

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import propic from '../assets/images/profile.jpg'


const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
         <Sidebar.Logo
        href="#"
        img={propic}
        imgAlt="Flowbite logo"
      >
        <p className='bg-green-300 text-black py-1 px-3 rounded hover:bg-teal-200 '>User</p>
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/admin/dashboard"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            <p>
              Upload Books
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/manage"
            icon={HiInbox}
          >
            <p>
              Manage Books
            </p>
          </Sidebar.Item>
          
         
          <Sidebar.Item
            href="/login"
            icon={HiArrowSmRight}
          >
            <p>
              Sign In
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/logout"
            icon={HiTable}
          >
            <p>
              Log Out
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar