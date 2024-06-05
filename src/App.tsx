import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { DashBoard } from './pages'


const App = () => {
  return (
    <Router>
<Routes>
<Route path="/admin/dashboard" element={<DashBoard/>} />
        
</Routes>

    </Router>
  )
}

export default App