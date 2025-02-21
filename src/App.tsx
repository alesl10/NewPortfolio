import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './components/Layout'
import Proyectos from './Pages/Proyectos'
import Contacto from './Pages/Contacto'


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<div>Error 404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
