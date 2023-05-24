import profile from './profile.png'
import valorantBot1 from './valorant-bot-1.png'
import gymTracker from './gym-tracker.png'

function MainContent() {
  return (
    <main>
      <section id='main-profile'>
        <img src={profile} className='profile-img'></img>
        <h1>HI I&apos;M HINDIE!</h1>
      </section>
      <section id='about-me'>
        <h3>ABOUT ME</h3>
        <div className='elem'>Name: Hindie Suputra</div>
        <div className='elem'>Age: 19</div>
        <div className='elem'>Degree: Computer Science</div>
        <div className='elem'>Fav season: Winter!</div>
      </section>
      <section id='hobbies'>
        <h3>HOBBIES</h3>
        <div className='elem'>Guitar</div>
        <div className='elem'>Volleyball</div>
        <div className='elem'>Gym</div>
        <div className='elem'>Video Games</div>
      </section>
      <section id='projects'>
        <h3>PROJECTS</h3>
        <div className='elem'>Valorant Tracker Bot (It&apos;s dead tho 💀)</div>
        <img src={valorantBot1} className='proj-img'></img>
        <div className='elem'>Gym Progress Tracker</div>
        <img src={gymTracker} className='proj-img'></img>
      </section>
    </main>
  )
}

export default MainContent