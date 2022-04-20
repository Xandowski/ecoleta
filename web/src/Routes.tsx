import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom"
import CreatePoint from './pages/CreatePoint'
import FindPoint from './pages/FindPoint'
import Index from './pages/index'


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/createpoint" element={<CreatePoint/>}/>
        <Route path="/findpoint" element={<FindPoint/>}/>
      </Routes>
    </Router>
  )
}

