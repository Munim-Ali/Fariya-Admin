import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import Header from './components/Header'
import Sidebar from './components/Siderbar/Sidebar'


function App() {
  return (
      <>
        <Router>
        <Header />
          <div className="container">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </> 
  );
}

export default App;
