import './App.css'

import { Link } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <span style={{ margin: '0 10px'}}>|</span>
        <Link to="/about">About</Link>
      </nav>
      <AppRoutes />
    </>
  );
}

export default App
