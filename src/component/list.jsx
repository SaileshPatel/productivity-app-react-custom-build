import React from 'react';
import "./../style/list.scss";

const List = (props) => {

    const deleteItemFromList = (index) => {
        props.deleteItem(index);
    }

    const taskItems = props.tasks.map((task, index) => {
        return <li key={index}>{task} <button onClick={() => deleteItemFromList(index)} >Delete Task</button> </li>;
    });

    return (
        <div className="taskList" style={{ gridColumn: props.columnPos, gridRow: props.rowPos }}>
            <h2>Tasks to do:</h2>
            {
                props.tasks.length > 0 ?
                    <ul>
                        {taskItems}
                    </ul>
                    :
                    <p>You currently have no tasks to complete.</p>
            }
        </div>
    )
}

export default List;