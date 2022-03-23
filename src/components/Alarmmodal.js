import React from 'react'

const Alarmmodal = ({ alarmdateime, alarmTitle}) => {
    return (
        <>
            <div className="card my-3 mx-3 shownotec historycard" style={{ width: "18rem", }}>
                <div className="card-body">
                    <h5 className="card-title">{alarmTitle}</h5>
                    <h3 style={{ color: "black" }} className="card-text">
                        {alarmdateime}
                    </h3>
                    <button onClick={() => { window.location.reload(true) }} data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" id="1" className="btn btn-danger">Dismiss  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                    </svg></button>

                </div>
            </div>
        </>
    )
}

export default Alarmmodal
