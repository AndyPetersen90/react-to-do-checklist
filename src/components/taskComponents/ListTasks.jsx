import React, {useState} from 'react'
import Item from "./Item"

const ListTasks = (props) => {
    const [filter, setFilter] = useState("");

    const deleteTask = (index) => {
        props.list.splice(index, 1)
        props.setList([...props.list])
    }

    const listDisplay = props.list.filter(item => item.category.includes(filter)).map((item, index) => {
        return <Item task={item} deleteTask={deleteTask} index={index}/>
    });

    return (
        <div className="task-container">
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="school">School</option>
            </select>
            {listDisplay}
        </div>
    )
}

export default ListTasks;