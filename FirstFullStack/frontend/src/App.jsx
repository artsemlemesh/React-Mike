import { useState } from 'react'
import Func from './components/fetchNote'
import CreateNote from './components/createNote'
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import NavBar from './components/navbar';
import Note from './components/notes';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Func/>}/>
      <Route path='create-note/' element={<CreateNote  />}/>
    </Routes>
    
    </BrowserRouter>


    // <div>
    //   <Func/>
    //   <CreateNote/>
    // </div>
  )
}

export default App
