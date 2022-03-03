import React, { useState } from 'react';
import "./../style/app.scss";
import List from './list.jsx';
import TaskForm from './add-task-form.jsx';

const App = () => {
    const [taskList, setTaskList] = useState([]);

    const addTaskToList = (task) => {
        setTaskList(prev => [...prev, task]);
    }

    const deleteTaskFromList = (index) => {
        setTaskList(taskList.filter((item, i) => index !== i) )
    }

    return (
        <div id="container">
            <h1>Productivity App</h1>
            <TaskForm addItem={addTaskToList} columnPos={2} rowPos={2} />
            <List tasks={taskList} deleteItem={deleteTaskFromList} />
        </div>
    )
}

export default App;