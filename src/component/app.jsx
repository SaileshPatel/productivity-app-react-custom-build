import React, { useState } from 'react';
import "./../style/app.scss";
import List from './list.jsx';
import TaskForm from './add-task-form.jsx';

const App = () => {
    const [taskList, setTaskList] = useState([]);

    const addTaskToList = (task) => {
        setTaskList(prev => [...prev, task]);
    }

    return (
        <div id="container">
            <h1>Productivity App</h1>
            <TaskForm addItem={addTaskToList} />
            <List tasks={taskList} />
        </div>
    )
}

export default App;