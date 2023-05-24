import profile from './profile.png'

function MainContent() {
  return (
    <main>
      <section className='main-profile'>
        <img src={profile}></img>
        <h1>HI I&apos;M HINDIE!</h1>
      </section>
      <section className='about-me'>
        <h3>ABOUT ME</h3>
        <div className='elem'>Name: Hindie Suputra</div>
        <div className='elem'>Age: 19</div>
        <div className='elem'>Degree: Computer Science</div>
      </section>
      <section className='hobbies'>
        <h3>HOBBIES</h3>
        <div className='elem'>Guitar</div>
        <div className='elem'>Volleyball</div>
        <div className='elem'>Gym</div>
        <div className='elem'>Video Games</div>
      </section>
      <section className='projects'>
        <h3>PROJECTS</h3>
        <div className='elem'>Valorant Tracker Bot</div>
        <div className='elem'>Gym Progress Tracker</div>
      </section>
    </main>
  )
}

export default MainContent