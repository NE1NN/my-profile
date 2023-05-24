import './App.css'
import MainContent from './MainContent'
import Navbar from './Navbar'
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div>
      <Snowfall />
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
