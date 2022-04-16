import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import CreatePoint from './pages/createPoint'
import Index from './pages/index'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/createpoint" element={<CreatePoint/>}/>
      </Routes>
    </Router>
  )
}

