import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

// imports all pages that will be used and rendered 
import AddCreator from './pages/AddCreator'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AddCreator" element={<AddCreator />}/>
        <Route path="ShowCreators" element={<ShowCreators />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
