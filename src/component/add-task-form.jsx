import React, { useState } from 'react';
import "./../style/add-task-form.scss";

const TaskForm = (props) => {
    const [taskName, setTaskName] = useState("");

    const addItemToList = () => {
        if (!taskName) {
            return;
        }
        props.addItem(taskName);
        setTaskName("");
    }

    return (
        <div id="add-task-form">
            <h2>Add task:</h2>
            <input type="text" name="task-name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <button onClick={addItemToList} >Add Task</button>
        </div>
    )

}

export default TaskForm;
