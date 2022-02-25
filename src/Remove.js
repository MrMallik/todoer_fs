import { useState } from "react";

const Remove = () => {

    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = 'http://localhost:9191/deleteTask/' + id;

        fetch(url, {
                method: 'DELETE',
            }).then(() =>{
                console.log("task deleted!");
            });
        
    }

    return (
        <div className="remove">
            <h2>Remove a Task</h2>

                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter task id to remove" required value={id} 
                onChange={(e) => setId(e.target.value)}/>
                <button>Delete Task</button>
                </form>
        </div>
     );
}
 
export default Remove