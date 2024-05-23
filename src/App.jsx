
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import EventList from './components/EventList'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Header></Header>
      <Routes>
      <Route path="eventos" element={<EventList />} />
      <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer></Footer>
    </>
  )
}

export default App
