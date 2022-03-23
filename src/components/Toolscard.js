import React from 'react'
import Tools from '../Tools'
import "./css/Tools.css"
import { Link } from 'react-router-dom'

const Toolscard = () => {
    const [tools] = React.useState(Tools)
    return (
        <>
        
            <div className="mx-3">
                <h1 className="try">Try Different Tols</h1>
                <div style={{ marginLeft: "28px" }} className="row notes">
                    {tools.map((tools) => {
                        return (
                            <>
                                <div style={{ width: "297px", borderRadius: '15px', boxShadow: "rgb(123 123 123 / 36%) -1px 7px 18px 12px", height: "225px", cursor: 'pointer', overflowY: 'hidden'}} className="noteCard my-2 mx-2 card">
                                    <div className="card-body">
                                        <div className="icon">

                                            <i className={tools.logo}></i>
                                        </div>
                                        <h3 className="card-title">{tools.tool}</h3>
                                        <h5 style={{ padding: "5px", }} className="card-text"> {tools.desc}</h5>
                                        <Link className="btn btn-primary" to={tools.url}>See</Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Toolscard
