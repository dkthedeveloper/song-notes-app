import { React, useState, useEffect } from "react";
import "./TextArea.css";

const TextArea = (props) => {
    const [text, setText] = useState("");
    const [isFocused, setFocus] = useState(false);
    
    const textAreaClasses = ["text-area"];
    if (isFocused) {
        textAreaClasses.push("focused");
    }
    
    const textAreaChangeHandler = (event) => {
        setText(event.target.value);
    };
    
    const textAreaFocusHandler = () => {
        setFocus(true);
    };
    
    const textAreaBlurHandler = () => {
        setFocus(false);
    };
    
    return (
        <div className={textAreaClasses.join(" ")}>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea
            id={props.id}
            rows={props.rows || 3}
            value={text}
            onChange={textAreaChangeHandler}
            onFocus={textAreaFocusHandler}
            onBlur={textAreaBlurHandler}
        />
        <a id='save-file' href="/">
            <img src="https://i.ibb.co/WHD9dst/1257459.png" alt="save file"/>
        </a>
        </div>
    );
    };

    export default TextArea;