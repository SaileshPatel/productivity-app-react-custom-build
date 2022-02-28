import React, { useState } from 'react';
import "./../style/add-task-form.scss";

const TaskForm = () => {
    const [taskName, setTaskName] = useState("");

    return (
        <div id="add-task-form">
            <h2>Add task:</h2>
            <input type="text" name="task-name" />
            <input type="submit" />
        </div>
    )

}

export default TaskForm;
