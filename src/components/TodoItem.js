import React from 'react'
import "./css/notes.css"

const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div style={{width:"18rem", borderRadius:'15px', boxShadow:"rgb(123 123 123 / 36%) -1px 7px 18px 12px"}} className="noteCard my-2 mx-2 card">
                <div className="card-body">
                    <h3 className="card-title">{todo.title}</h3>
                    <h5 style={{padding: "5px",}} className="card-text"> {todo.desc}</h5>
                    <button  onClick={() => { onDelete(todo) }} className="btn btn-danger rounded-pill">Delete Note</button>
                </div>
            </div>
        </>
    )

}
// style={{background:"black", borderRadius:'19px'}}
export default TodoItem;


