import { useState, useEffect } from 'react';
function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav className={`${sticky ? 'sticky' : ''}`}>
      <a href='#main-profile'>Home</a>
      <a href='#about-me'>About Me</a>
      <a href='#hobbies'>Hobbies</a>
      <a href='#projects'>Projects</a>
    </nav>
  )
}

export default Navbar;