import React, {useState} from 'react';

const Item = ({task, deleteTask, index}) => {
    const [complete, setComplete] = useState(false)
    console.log(task)

    return (
        <div className='item-card'>
            <div className="item card left">
                <h3 onClick={() => setComplete(!complete)} className={complete && "complete"}>{task.task_name}</h3>
                <h5 value={task.title}>{task.title}</h5>
            </div>
            <button className="small-btn" onClick={() => deleteTask(index)}>X</button>
        </div>
    )
}

export default Item