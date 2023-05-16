import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Salute() {
    return <div>
        <h1>Prueba inicial</h1>
        <p>SCIENCIE BITCH</p>
    </div>
}

root.render(<div>
        <Salute/>
    </div>);
