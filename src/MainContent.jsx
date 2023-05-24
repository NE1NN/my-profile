import profile from './profile.png'

function MainContent() {
  return (
    <main>
      <img src={profile}></img>
      <h1>HI I&apos;M HINDIE!</h1>
      <section>
        <h3>ABOUT ME</h3>
        <ul>
          <li>Name: Hindie Suputra</li>
          <li>Age: 19</li>
          <li>Degree: Computer Science</li>
        </ul>
      </section>
      <section>
        <h3>HOBBIES</h3>
        <ul>
          <li>Guitar</li>
          <li>Volleyball</li>
          <li>Gym</li>
          <li>Video Games</li>
        </ul>
      </section>
    </main>
  )
}

export default MainContent