import logo from './logo.svg';
import './App.css';
// import Question from './components/Question'
import Button from './components/Button'
// Rotating test component for use during the Tutorial Folder
import ErrorExample from "./tutorial/01-useState/1-error-example-fix";
import UseStateArray from './tutorial/02-prop-drilling/1-prop-drilling';

function App() {
  let first_name = "Ren";
  let title = "What is the meaning of life?";
  let info = 42;
  return (
    <div className="App">
      <header className="App-header">
      {/* <Button/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* {current} */}
          {/* <Button title={title} info={info}/> */}
        </a>
      </header>
      <UseStateArray/>
    </div>
  );
}

export default App;
