// import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from "./pages/Orders/Orders"

import { ToastContainer } from 'react-toastify';

const url = "http://localhost:4000"
export default function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <hr />
      <div className="app-content">
      <Sidebar/>
      <Routes>

        <Route path='/add' element={<Add url = {url}/>}></Route>
        <Route path='/list' element={<List url = {url}/>}></Route>
        <Route path='/orders' element={<Orders url = {url}/>}></Route>
      </Routes>

      </div>
    </div>
  )
}
