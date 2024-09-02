import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Actividades from './Pages/Activity';
import Actividad4 from './Pages/Activity4';
import Collage from './Pages/Collage';
import Actividad7 from './Pages/Activity7';
import Actividad8 from './Pages/Activity8';
import Actividad9 from './Pages/Activity9';
import FODA from './Pages/Foda';
import Catwda from './Pages/CATWDA';
import Ishikawa from './Pages/Ishikawa';
import Pareto from './Pages/Pareto';
import Sombreros from './Pages/6Sombreros'
import Resumen from './Pages/Resumen'
import Google from './Pages/google'
import Detona from './Pages/Detona'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actividades" element={<Actividades />} />
            <Route path="/actividad4" element={<Actividad4/>}/>
            <Route path="/collage-interactivo" element={<Collage />} />
            <Route path="/actividad7" element={<Actividad7 />} />
            <Route path="/actividad8" element={<Actividad8 />} />
            <Route path="/actividad9" element={ <Actividad9/> }/>
            <Route path="/FODA" element={ <FODA/> }/>
            <Route path="/CATWDA" element={ <Catwda/> }/>
            <Route path="/Ishikawa" element={ <Ishikawa/> }/>
            <Route path="/Pareto" element={ <Pareto/> }/>
            <Route path="/6Sombreros" element={ <Sombreros/> }/>
            <Route path="/Resumen" element={ <Resumen/> }/>
            <Route path="/Google" element={ <Google/> }/>
            <Route path="/Detona" element={<Detona/>}/>

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;