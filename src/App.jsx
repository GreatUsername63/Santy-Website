import autoretrato from './assets/08_05_24 autoretrato chistoso 1.png'

function App() {
  return (
    <>
      <aside>
        <h1>Hi!</h1>
        <p>My name is Santiago Ramírez Enríquez, a junior software engineer and aspirant video game programmer.
          I'm passionate for programming fun and interesting experiences that people can enjoy.</p>
      </aside>
      <div id='main-image-container'>
        <img src={autoretrato}></img>
      </div>

    </>
  )
}

export default App
