import React,{useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";
const App = ()=>{
const [html, setHTML] = useState('');
const [css, setCSS] = useState('');
const [js, setJS] = useState('');
const [editorOutput, setEditorOutput] = useState('');
useEffect(()=>{
    let timeout = setTimeout(()=>{
        setEditorOutput(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
        `)
    },250)

    return ()=> clearTimeout(timeout);
},[
    html,css,js
])

    return (<>
    <div className="panel top-panel">
        <Editor displayName="HTML"
         language="xml" 
         value={html}
         onChange={setHTML}
         />
        <Editor displayName="CSS"
        language="css" 
        value={css} 
        onChange={setCSS}
        />
        <Editor displayName="JS"
        language="javascript" 
        value={js} 
        onChange={setJS}
        />
    </div>
    <div className="panel">
        <iframe 
        title="output" 
        sandbox="allow-scripts" 
        srcDoc={editorOutput} 
        frameborder="0" 
        width="100%" 
        height="100%"/>
    </div>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App/>
);