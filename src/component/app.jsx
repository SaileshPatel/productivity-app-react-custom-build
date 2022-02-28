import React, { useState } from 'react';
import "./../style/app.scss";
import List from './list.jsx';

const App = () => {
    const [taskList, setTaskList] = useState(["Task 1", "Task 2"]);

    return (
        <div id="container">
            <h1>Productivity App</h1>
            <List tasks={taskList} />
        </div>
    )
}

export default App;