/*figure out the axios delete request and the filtering of the categories*/

import React from 'react';
import {useFormik} from "formik";
import axios from "axios";

const CreateTask = ({getTasks, setInput, setCategory, allCategories}) => {
    const options = allCategories.map((cat, index) => {
    return <option value={cat.id}>{cat.title}</option>
    })

    const formik = useFormik({
        initialValues: {
            task_name: "",
            category: null
        },
        onSubmit: (values) => {
            axios.post('http://localhost:4000/api/tasks', values)
            .then((res) => {
                getTasks()
                formik.handleReset()})
        }
    })

    return(
        <form className="task-form" onSubmit={formik.handleSubmit}>
            <input 
                name="task_name" 
                value={formik.values.task_name} 
                onChange={formik.handleChange} 
            />
            <select
                name="category" 
                value={formik.values.category}
                onChange={formik.handleChange}>

                <option selected disabled defaultValue>Category</option>
                {options}
            </select>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default CreateTask