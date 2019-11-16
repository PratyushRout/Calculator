import React, {useState, useEffect} from 'react';
import Button from './button/Button';
import './Content.css';
import DisplayText from './displayText/DisplayText';
import './displayText/DisplayText.css';



var Content = () => {
    const [text,setText] = useState("");

    var Calculate = () => {
        setText(eval(text));
     }
     var Clear = () => {
        setText("");
     }
    
    return (
    <div className="container" >
        <div className="display">
        <DisplayText  display={text}/>
        </div>
         <div className="btns">
            <Button setText={setText} text={text} value={"1"} /> 
            <Button setText={setText} text={text} value={"2"} />
            <Button setText={setText} text={text} value={"3"} />
            <Button setText={setText} text={text} value={"+"} />
            <Button setText={setText} text={text} value={"4"} />
            <Button setText={setText} text={text} value={"5"} />
            <Button setText={setText} text={text} value={"6"} />
            <Button setText={setText} text={text} value={"-"} />
            <Button setText={setText} text={text} value={"7"} />
            <Button setText={setText} text={text} value={"8"} />
            <Button setText={setText} text={text} value={"9"} />
            <Button setText={setText} text={text} value={"*"} />
            <Button classname={'clear-btn'} setText={Clear} text={text} value={"C"} />
            <Button setText={setText} text={text} value={"0"} />
            <Button setText={Calculate} text={text} value={"="} />
            <Button setText={setText} text={text} value={"/"} />
        </div>
    
        
    </div>
   
    )
}



export default Content;