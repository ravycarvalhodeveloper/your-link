import { createBrowserRouter } from 'react-router-dom'
import './App.css'

import { Home } from './pages/Home/Home'
import { Networks } from './pages/Networks/Networks'
import { Login } from './pages/Login/Login'
import { Admin } from './pages/Admin/Admin'
import { Private } from './routes/Private'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/login',
    element: <Login />
  },
  {
    path:'/admin',
    element: <Private> <Admin /> </Private> 
  },
  {
    path:'/admin/social',
    element: <Private> <Networks /></Private> 
  },
  {
    path:'*',
    element: <Error /> 
  },
])

export {router}