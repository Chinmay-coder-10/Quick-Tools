import React from "react";
import TodoItem from "./TodoItem";
import "./css/notes.css"

export const Todos = (props) => {
    return (
        <>
            <div className="container">
                <div className="row notes">
                    {props.todos.length === 0 ? <div class="alert alert-danger" role="alert">
                       No notes to display. Enter something and click "Add note"
                    </div> :
                        props.todos.map((todo) => {
                            return (
                                <>
                                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}