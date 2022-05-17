import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projectasthra from './components/Projectasthra';





function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes >
          <Route path='/projectasthra' element={<Projectasthra/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
