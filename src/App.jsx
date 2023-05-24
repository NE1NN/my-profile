import './App.css'
import MainContent from './MainContent'
import Navbar from './Navbar'
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div>
      <Snowfall style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }}/>
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
