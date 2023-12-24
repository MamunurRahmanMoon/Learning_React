import { useState, useEffect } from 'react'
import './App.css';

const Person = (props) => {
  return (
    <>
      <p>Name: {props.name}</p>
      <h6>Gender: {props.gender}</h6>
      <h6>Age: {props.age}</h6>
      <br></br>
    </>
  )
}

const App = () => {

  const [counter, setCounter] = useState(0) 

  useEffect(() => {
    alert("Reloaded")
  }, [counter])

  const name = ""
  return (
    <div className="App">
      {
        name ? (
          <>
            <h1>Hello {name}</h1>

            <h2>How u doing?</h2>
          </>
        ) :
          <>
            <Person name="Mamunur Rahman Moon" gender="Male" age={24} />
            <Person name="Muntasir Rahman Sun" gender="Male" age={17} />
            <Person name="Afia Ibnat Mounota" gender="Female" age={10} />
          </>
      }

      {/* Lets learn about State, Hooks, Array Destructuring, callback function, Dependency Array */}

      <button onClick={() => setCounter( (prevCount) => prevCount + 1 )}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter( (prevCount) => prevCount - 1 )}>-</button>
  
      
    </div>
  );
}

export default App;
