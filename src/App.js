import './App.css';
import {useEffect, useState} from 'react';
import Create from './Create';
import Remove from './Remove';

function App() {

  const [tasks, setTasks] = useState(null);

  const getAllTasks = () => {

    const url = 'https://my-todoer.herokuapp.com/getAllTasks'

    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTasks(data);
    });
  }

  const hideAllTasks = () => {
    setTasks(null);
  }
  

  return (
    <div className="App">

      
      { //Case for handling when no task exits
          tasks && tasks == 0 && <h2>No Tasks Exist!</h2>
      }

      {tasks && tasks.length > 0 && tasks.map((task) =>(
        <div className="task-preview" key={task.id}>
          <h4> {task.id}. {task.title} </h4>
          {task.description}
        </div>
      ))}

        <br /><br />
        <button onClick={getAllTasks}>Get All Tasks</button>
        <button onClick={hideAllTasks}>Hide All Tasks</button>

        <Create />
        <Remove />

    </div>
  );
}

export default App;
