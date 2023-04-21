import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputField from '../../shared/components/text-input/InputField'
import { Routes, Route } from 'react-router-dom'
import Auth from '../auth/Auth/Auth'
import MainDashboard from '../dashboard/main-dashboard/MainDashboard'

function App() {
  return (
    <Routes>
      <Route path='/user/auth//*' element={<Auth />}/>
      <Route path='/dashboard//*' element={<MainDashboard />}/>
    </Routes>
  )
}

export default App
