import { useState } from 'react'
import './App.css'
import Menubar from './Components/Menubar/Menubar.jsx'
import {Routes, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ManageCategories from './pages/ManageCategories/ManageCategories.jsx';
import ManageUsers from './pages/ManageUsers/ManageUsers.jsx';
import ManageItems from './pages/ManageItems/ManageItems.jsx';
import Explore from './pages/Explore/Explore.jsx';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div>
        <Menubar/>
        <Toaster/>
        <Routes>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "/categories" element = {<ManageCategories/>}/>
            <Route path = "/users" element = {<ManageUsers/>}/>
            <Route path = "/items" element = {<ManageItems/>}/>
            <Route path = "/explore" element = {<Explore/>}/>
            <Route path = "/" element = {<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default App