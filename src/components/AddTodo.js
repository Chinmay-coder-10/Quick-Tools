import React, { useState } from 'react';
import "./css/notes.css"

export const AddTodo = ({ addTodo, }, props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and Description cannot be blank!")
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <>
        <div className="container" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}>
            <div className="card my-3">
                <form onSubmit={submit}>
                    <div id="notecardcopy" className="card-body">
                        <h5 className="card-title">Add note title</h5>
                        <input autoComplete="off"   title="Add note title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="addTitle" placeholder="Add note title here" />
                        <h5 className="card-title">Add note text</h5>
                        <div className="textarea">
                            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} spellCheck="false" className="form-control" id="addTxt" rows="3">
                            </textarea>
                            <div id="preloadertext" className="textpreloader">Adding Note</div>
                        </div>
                        <button id="addBtn" className="btn-all btn-dark btn my-3">Add note</button>
                    </div>
                </form>
            </div>
        </div>
        </>

    )
}
