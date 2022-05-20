import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Home from './layout/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
