import React from 'react';
import "./../style/list.scss";

const List = (props) => {
    const taskItems = props.tasks.map((task, index) => {
        return <li key={index}>{task}</li>;
    });

    return (
        <div id="taskList">
            <h2>Tasks to do:</h2>
            {
                props.tasks.length > 0 ?
                    <ul>
                        {taskItems}
                    </ul>
                    :
                    <p>You currently have no tasks to complete.</p>}
        </div>
    )
}

export default List;