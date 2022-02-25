import { useState } from "react";

const Create = () => {


    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const task = {id, title, description};

        const url = 'https://my-todoer.herokuapp.com/addTask'

        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(() => {
            console.log("New blog added");
        })
    }

    return ( 
        <div className="create">

            <h2>Add a new Task</h2>

            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter task id" required value={id} 
            onChange={(e) => setId(e.target.value)}/>
            <input type="text" placeholder="Enter Task title" required 
            value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Enter Task description" required 
            value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button>Add Task</button>
        </form>

        
        </div>
     );
}
 
export default Create;