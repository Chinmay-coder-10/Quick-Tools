import React from 'react'
import Textform from './Textform'

const Textutility = (props) => {
    const { showAlert } = props;
    return (
        <>
            <h1 className="text-center my-2">
                Text Utility - Word counter, Character counter and many more
            </h1>
            <Textform showAlert={showAlert} />
        </>
    )
}

export default Textutility;
