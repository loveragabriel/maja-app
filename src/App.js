import '/home/loveragabriel/dramaja/maja-app/src/App.css'
import { Home } from './Pages/Home';
import { Treatments } from './Pages/Treatments';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About';

function App() {
  return (
    <div className="bg-dark text-white  app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Treatments' element={<Treatments/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
