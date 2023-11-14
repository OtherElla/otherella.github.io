import './App.css';


function Space() {
  return <div class="space"></div>
}

function Header() {
  return (
    <header>
      <nav>
        <ul type="none">
          <li><a className="current">Home</a></li>
          <li><a onClick={goToWork}>Work</a></li>
          <li><a onClick={goToSkills}>Skills</a></li>
        </ul>
      </nav>
    </header>
  )
}

function goToWork() {
  window.location.replace("/work");
}

function goToSkills() {
  window.location.replace("/skills");
}

function App() {

  return (
    <div className="App">
      <Header/>
      <Space />
      <Space />
      <section class="info">
        <span>Hello, I'm Ella.</span>
        <br />
        <span>Pronouns: She/They</span>
        <br />
        <span>Genderfluid </span>
      </section>
      <p class="info">
        I love Containers/Docker, WASM/WASI, Building CLIs and TUIs, Linux/UNIX programming, and writing Developer Tools
      </p>
      <p class="info">Favoraite Character In Fiction is Fushi from To Your Eternity</p>
      <img src="./Fushi.jpg" class="center" style={{"width":"500px", "height":"600px"}}/>
      <section>
        <h2 class="title">Where to find me</h2>
        <ul type="none">
          <li><a href="https://github.com/OtherElla" target="_blank">I'm on GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/Ella-hellum-84ba401a2/" target="_blank">I'm also on Linkedin</a>
          </li>
        </ul>
        <p>Send me an email at <a href="mailto:otherellahellum@gmail.com">otherellahellum@gmail.com</a></p>
        <br />
      </section>
    </div>
  );
}

export default App;
