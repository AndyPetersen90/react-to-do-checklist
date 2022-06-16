import React from 'react';

const CreateTask = ({handleClick, setInput, setCategory}) => {
    return(
        <div className="task-form">
            <input onChange={(e) => setInput(e.target.value)} />
            <select onChange={(e) => setCategory(e.target.value)}>
                <option selected disabled defaultValue>Category</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="school">School</option>
            </select>
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}

export default CreateTask