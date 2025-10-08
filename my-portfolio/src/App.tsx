import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Parent from './components/parent.tsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Parent/>}/>
      </Routes>
    </Router>
  )
}

export default App
