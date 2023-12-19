import React, { useState } from 'react'




export default function TextForm(props) {

    

    function stringToHex(str) {
        return str.split('').map((char) => {
            return '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0');
        }).join('');
    }

    function hexToBinary(hexString) {
        let binaryString = '';
        for (let i = 0; i < hexString.length; i += 2) {
            const hexPair = hexString.substr(i, 2);
            const decimalValue = parseInt(hexPair, 16);
            const binaryValue = decimalValue.toString(2).padStart(8, '0');
            binaryString += binaryValue;
        }
        return binaryString;
    }
    const handleUpClick = () =>{
        //console.log("Clicked Upper case " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick = () =>{
        //console.log("Clicked Upper case " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower","success");
    }

    const handleClearClick = () =>{
        //console.log("Clicked Upper case " + text);
        let newText = ' ';
        setText(newText);
    }
    const handleHexClick = () =>{
        //console.log("Clicked Upper case " + text);
        let newText = stringToHex(text);
        setText(newText);
    }

    const handleBinaryClick = () =>{
        //console.log("Clicked Upper case " + text);
        let newText = hexToBinary(text.replace(/ /g, ''), 'hex');
        setText(newText);
    }

    

    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value);
    }

    
    const [text , setText ] = useState('');
    
    return (
        <>
        <div className="container" style = {{color : props.mode==='dark'?'white':'#03153b'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode=== 'dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>

            </div>
            <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Conver TO UpperCase</button>
            <button className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert TO LowerCase</button>
            <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick = {handleHexClick}>Hex Converter</button>
            <button className="btn btn-primary mx-2" onClick = {handleBinaryClick}>Hex To Binary</button>
        </div>
            <div className="container my-3" style = {{color : props.mode==='dark'?'white':'#03153b'}}>
                <h2>Text Summery</h2>
                <p>Your Word {text.split(" ").length} & Charecter Count {text.length}</p>
                <p>{0.008 * text.split(" ").length}Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something To Preview"}</p>
            </div>
        </>
   
  )
}



