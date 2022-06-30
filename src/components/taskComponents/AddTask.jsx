import React, {useState, useEffect} from 'react';
import CreateTask from './CreateTask';
import ListTasks from './ListTasks'
import axios from "axios";

const AddTask = () => {
    //store useState at the top of the component
    const [input, setInput] = useState("")
    //when destructuring useState, the first is the state, the second is the setter, used to change the state.//
    const [list, setList] = useState([])
    const [category, setCategory] = useState("")
    const [allCategories, setAllCategories] = useState([])

    const handleClick = () => {
        setList([...list, {task: input, category: category}])
    }

    useEffect(() => {
        axios.get('http://localhost:4000/api/getCategories')
        .then((res) => {
            console.log(res)
            setAllCategories(res.data)
        })
    }, [])

    return(
        <div>
            <h1>Add Task</h1>
            <CreateTask 
                handleClick={handleClick}
                setInput={setInput}
                setCategory={setCategory}
                allCategories={allCategories}
            />
            <h2>My Tasks</h2>
            <ListTasks list={list} setList={setList}/>
        </div>
    )
}

export default AddTask