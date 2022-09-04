import './App.css';
import { Home } from './Pages/Home';
import { Services } from './Pages/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Services' element={<Services/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
