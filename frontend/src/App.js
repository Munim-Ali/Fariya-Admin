import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import Header from './components/Header'
import Sidebar from './components/Siderbar/Sidebar'

function App() {
  return (
      <>
        <Router>
        <Sidebar />
        <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>
          </div>
        </Router>
      </> 
  );
}

export default App;
