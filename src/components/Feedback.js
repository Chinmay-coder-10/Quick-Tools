import React, { useState, } from 'react'
import "./css/feedback.css"


const Feedback = (props) => {
    props.setProgress(100)
    const [feedback, setFeedback] = useState({
        name: "",
        feed: "",
    });
    let name, value
    const getUserdata = (e) => {
        name = e.target.name
        value = e.target.value
        setFeedback({ ...feedback, [name]: value })
    };

    const postData = async (e) => {
        props.setProgress(0)
        let submitbtn = document.getElementsByClassName('submitbtn')[0]
        e.preventDefault();
        const { name, feed } = feedback;
        if (name && feed) {
            submitbtn.innerHTML = `Submitting <span class="spinner-border spinner-border-sm"></span>`;
            const res = await fetch('https://feedbackform-12afe-default-rtdb.firebaseio.com/feedback.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    { name, feed }
                )
            })
            props.setProgress(100)
            if (res) {
                submitbtn.innerHTML = "Submit";
                alert("Thanks! Feedback Subbmitted")
                setFeedback({
                    name: "",
                    feed: "",
                })
                
            }
        } else {

            alert("Please fill all the fields")
            // alertDanger.style.display = "block";
        }
    }
    return (
        <>
            <div className="container">
                <h1 className="my-4 mx-2">Welcome to Feedback page</h1></div>
            <div className="feedback my-4">
                <div className="container">
                    <form method="POST">
                        <div className="box">
                            <i className="far fa-user"></i>
                            <input required value={feedback.name} onChange={getUserdata} autoComplete="off" name="name" type="text" placeholder="Enter Your name" />
                        </div>
                        <div className="box">
                            <i className="far fa-comment-dots"></i>
                            <input value={feedback.feed} onChange={getUserdata} name="feed" autoComplete="off" type="text" placeholder="Enter Your Feedback here" />
                        </div>
                        <button className="submitbtn btn" onClick={postData}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Feedback

