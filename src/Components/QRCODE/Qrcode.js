import "../QRCODE/Qrcode.css"
import QRCode from 'qrcode';
import { useState } from "react"
function Qrcode() {
    const [text, setText] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const generaterQrcode = async () => {
        try {
            const response = await QRCode.toDataURL(text)
            setImageUrl(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    return <div className='qrcode'>
        <div className="text">
            <h1>Scan QR Code with React js</h1>
        </div>
        <div className="generate">
            <input onChange={(e) => setText(e.target.value)} placeholder='Enter Text Here' />
            <button onClick={() => generaterQrcode()} >Generate</button>
        </div>
        <div className="image">
            {imageUrl ? <a href={imageUrl} download ><img src={imageUrl} alt="img" /></a> : null}
        </div>
    </div>
}

export default Qrcode;
