import React, { useState } from 'react'
import CompletedTasks from './CompletedTasks';
export default function AddToDoComponent(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title OR Description cannot be Blank...")
        }
        else {
            props.addToDo(title, desc);
            setTitle("")
            setDesc("")
        }
    }
    return (
        <section className='ToAddTodoItems' style={{ "width": "35%", "backgroundColor": "pink", "padding": "25px" }}>
            <h4 className='text-center my-3'>
                Add To Do Items
            </h4>
            <form style={{ "backgroundColor": "paleTurquoise", "padding": "20px" }} onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder='Enter the title of work' />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder='Enter the description of work' />
                </div>

                <button type="submit" className="btn btn-primary">Add To List</button>
            </form>
        <CompletedTasks comptodos={props.comptodos} onDeleteComp={props.onDeleteComp}/>
        </section>
    )
}
