import React, {useState} from 'react'
import Item from "./Item"

const ListTasks = (props) => {
    const [filter, setFilter] = useState("");

    const deleteTask = (index) => {
        console.log(index)
        props.list.splice(index, 1)
        props.setList([...props.list])
    }
    const options = props.allCategories.map((cat, index) => {
        return <option value={cat.id}>{cat.title}</option>
        })


    const listDisplay = props.list
        .filter(item => item.title.includes(filter))
        .map((item, index) => {
            return <Item task={item} deleteTask={deleteTask} index={index}/>
    });

    return (
        <div className="task-container">
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="">All</option>
                {options}
            </select>
            {listDisplay}
        </div>
    )
}

export default ListTasks;