import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { format, set } from 'date-fns'

function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
  const timerId = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);

  return () => clearInterval(timerId);
}, []);

  function getCurrentTime() {
    if (count !== 0) {
      return format(new Date(), 'MM/dd/yyyy HH:mm:ss')
  }
};

  return (
    <div className="App" >

      <header> 
        <h1>The Color Clock</h1>
      </header>
      
      <main>
        <section>
          <h2>Current Time</h2>
          <p> {getCurrentTime()} </p>
        </section>

        <section className="date">
          <h2>Current Date</h2>
          <p> {format(new Date(), 'MM/dd/yyyy')} </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 The Color Clock. No rights reserved.</p>
        <p> swiper no swiping, we aren't protected</p>
      </footer>

    </div>
  );
}

export default App
