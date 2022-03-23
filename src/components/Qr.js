import React from 'react'
import QRCode from 'qrcode';

const Qr = () => {
    const [text, settext] = React.useState("");
    const [image, setimage] = React.useState("");
    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text)
            setimage(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    generateQrCode();
    return (
        <>
            <input onChange={(e) => { settext(e.target.value) }} type="text" value={text} />
            
            <button className="btn btn-success" onClick={()=>{generateQrCode()}}>{image ? (
                <a href={image} download>
                    <img src={image} alt="img" />
                </a>) : null}</button>
        </>
    )
}

export default Qr
