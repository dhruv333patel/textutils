import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert ("Convert to uppercase!","success");
    }

      const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
       props.showAlert ("Convert to Lowercase!","success");

  }
      const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
  }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

const handleCopy = () =>{
navigator.clipboard.writeText(text);
props.showAlert("Copied to clipboard","sucess")

}

const handleExtraSpaces = () =>{
let newText = text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert("Extra spaces removed !","success");


}


    const [text, setText] = useState('');
    // text="new text"; this the wrong way to change the state 
    // setText("new text"); this is right way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length === 0} className="btn btn primary mx-2 my-2"  onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length === 0} className="btn btn primary mx-2 my-2"  onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length === 0} className="btn btn primary mx-2 my-2"  onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length === 0} className="btn btn primary mx-2 my-2"  onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length === 0} className="btn btn primary mx-2 my-2"  onClick={handleExtraSpaces}>Remove Extra Space</button>


  </div>
   <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text stextummary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} character</p>
    <p>{0.008 *text.split(" ").filter((element)=>{return element.length !== 0}).length}Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
   </div>
  </>
  )
}
