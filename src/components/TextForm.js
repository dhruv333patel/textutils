import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert ("Convert to uppercase!","success");
    }

      const handleLoClick = ()=>{
      // console.log("UpperCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
       props.showAlert ("Convert to Lowercase!","success");

  }
      const handleClearClick = ()=>{
      // console.log("UpperCase was clicked" + text);
      let newText = '';
      setText(newText)
  }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');
    // text="new text"; this the wrong way to change the state 
    // setText("new text"); this is right way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn primary mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn primary mx-2"  onClick={handleClearClick}>Clear Text</button>


  </div>
   <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text stextummary</h2>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008 *text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
   </div>
  </>
  )
}
