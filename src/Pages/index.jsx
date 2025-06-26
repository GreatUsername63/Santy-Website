import autoretrato from '../assets/08_05_24 autoretrato chistoso 1.png'
import "../styles/index.css"
import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <aside>
        <h1>Hi!</h1>
        <p>My name is Santiago Ramírez Enríquez, a junior software engineer and aspirant video game programmer.
          I'm passionate for programming fun and interesting experiences that people can enjoy.</p>
        <div id="button-container">
          <Link class="index-button" id="pink-button" to={"/projects"}>Projects</Link>
          <Link class="index-button" id="blue-button" to={"/education"}>Education</Link>
        </div>

      </aside>
      <div id='main-image-container'>
        <img src={autoretrato}></img>
      </div>

    </>
  )
}

export default App
