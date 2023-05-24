import './App.css'
import fall from './fall.png'
import spring from './spring.png'
import winter from './winter.png'
import summer from './summer.png'
import profile from './profile.png'
import MainContent from './MainContent'
import Navbar from './Navbar'
import Snowfall from 'react-snowfall'

function App() {
  return (
    // <div>
    //   <Parallax pages={2}>
    //     <ParallaxLayer 
    //       speed={1}
    //       style={{
    //         backgroundImage: `url(${winter})`,
    //         backgroundSize: 'cover',
    //       }}
    //       className='center'>
    //       <h1>WELCOME</h1>
    //     </ParallaxLayer>

    //     <ParallaxLayer 
    //       offset={1} 
    //       speed={0.5}
    //       style={{
    //       backgroundImage: 'rgb(0,212,255)',
    //         backgroundSize: 'cover',
    //       }}
    //       className='mid'>
    //       <h1>Page 2</h1>
    //     </ParallaxLayer>
    //   </Parallax>
    // </div>
    // <main>
    //   <img src={profile}></img>
    //   <h1>HI I&apos;M HINDIE!</h1>
    //   <section>
    //     <h3>ABOUT ME</h3>
    //     <ul>
    //       <li>Name: Hindie Suputra</li>
    //       <li>Age: 19</li>
    //       <li>Degree: Computer Science</li>
    //     </ul>
    //   </section>
    //   <section>
    //     <h3>HOBBIES</h3>
    //     <ul>
    //       <li>Guitar</li>
    //       <li>Volleyball</li>
    //       <li>Gym</li>
    //       <li>Video Games</li>
    //     </ul>
    //   </section>
    // </main>
    <div>
      <Snowfall />
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
