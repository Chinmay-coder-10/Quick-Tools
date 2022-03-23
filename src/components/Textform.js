import React, { useState } from 'react'
import "./css/textutils.css"

const Textform = (props) => {
    const [text, setText] = useState("")
    const toUppcase = () => {
        props.showAlert("Text converted to UPPERCASE!", "success");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const toLowercase = (event) => {
        props.showAlert("Text converted to lowercase!", "success");
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const clsText = () => {
        props.showAlert("Text Cleared!", "success");
        setText("");
    }
    const copytext = () => {
        props.showAlert("Text Copied!", "success");
        navigator.clipboard.writeText(text);
    }

    return (
        <>

            <div className="container my-4">
                <textarea onChange={handleOnChange} value={text} className="form-control" id="textArea" rows="5"></textarea>
                <button onClick={toUppcase} className="btn btn-primary mx-3 my-4">Convert to uppercase</button>
                <button onClick={toLowercase} className="btn btn-primary mx-1 my-4">Convert to LoweCase</button>
                <button onClick={clsText} className="btn btn-primary mx-1 my-4">Clear text</button>
                <button onClick={copytext} className="btn btn-primary mx-1 my-4">Copy text</button>
                <h1>Your text report</h1>
                <h5>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</h5>
                <hr style={{ color: 'blue', }} />
                <h5>{0.48 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Seconds read</h5>
                <hr style={{ color: 'blue', }} />
                <h2>Preview</h2>
                <hr style={{ color: 'blue', }} />
                <p>
                    <h4>
                        {text.length > 0 ? text : "Nothing to preview!"}
                    </h4>
                </p>
            </div>
        </>
    )
}

export default Textform
