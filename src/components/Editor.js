import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledCodeEditor} from 'react-codemirror2'
import { useState } from 'react';
const Editor = (props)=>{
    const [open, setOpen] = useState(true);
    const {displayName,value,onChange,language} = props;
    const handleChange =(editor, data, value)=>{
        onChange(value);
    }
    const handleToggle =()=>{
        setOpen(!open);
    }
    return(
        <div className={`editor-wrapper ${open? "":"collapsed"}`}>
            <div className="editor-header">
                <div>{displayName}</div>
                <button onClick={handleToggle}>E/C</button>
            </div>
            <div className="editor-text-area">
                {/* options are from codemirror library */}
                <ControlledCodeEditor
                className="code-mirror-wrapper"
                value={value}
                onBeforeChange={handleChange}
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    theme:"material",
                    lineNumbers:true
                }}
                />
            </div>
        </div>
    )
}
export default Editor;