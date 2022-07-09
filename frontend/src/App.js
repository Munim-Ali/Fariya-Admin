import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { Outlet } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import Header from './components/Header'
import Sidebar from './components/Siderbar/Sidebar'

// const SidebarLayout = () => (
//   <>
//     <Sidebar />
//   </>
// );
function App() {
  return (
      <>
        <Router>
        <Header />
          <div className="container">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes> 
          </div>
        </Router>
      </> 
  );
}

export default App;
