import logo from './logo.svg';
import Speech from 'react-speech';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        {/* <Button className= "speek">click me</Button> */}
       <Speech text="say i love you to your girlfriend">Make me talk
       </Speech>
      </header>  
    </div>
  );
}

export default App;

function Button({onClick, children}){

  return<button onClick={onClick} className= "speek"> {children}</button>
}