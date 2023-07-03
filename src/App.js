import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import BlogPage from './pages/BlogPage/BlogPage'
import WorksPage from './pages/WorksPage/WorksPage'
import WorkItemPage from './pages/WorkItemPage/WorkItemPage'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/works' element={<WorksPage />} />
          <Route path="/works/:id" element={<WorkItemPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App