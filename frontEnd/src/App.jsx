import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Inicio } from './pages/Inicio'
import { SobreMim } from './pages/SobreMim'
import { FaleComigo } from './pages/FaleComigo'
import { Projetos } from './pages/Projetos'

function App() {

  const faleComigo = lazy(() => import('./pages/FaleComigo'))

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/'
          element={
            <Suspense fallback={<div>Carregando...</div>}>
              <>
                <div id="inicio">
                  <Inicio />
                </div>
                <div id="sobre-mim">
                  <SobreMim />
                </div>
              </>
            </Suspense>
          }
        />
        <Route path="/fale-comigo" element={
          <Suspense fallback={<div>Carregando...</div>}>
            <FaleComigo />
          </Suspense>
        } />
        <Route path='/projetos' element={
          <Suspense fallback={<div>Carregando...</div>}>
            <Projetos />
          </Suspense>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
