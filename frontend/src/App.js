import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import login from './pages/login'
import register from './pages/register'

function App() {
  return (
      <>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/" element={<login />} />
              <Route path="/" element={<register />} />

            </Routes>
          </div>
        </Router>
      </> 
  );
}

export default App;
