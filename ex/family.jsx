import React from "react";

export default props => (
    <div>
        <h1>Família</h1>
        <div>
            { React.cloneElement(props.children, {...props}) } 
            {/* cloneElement só funciona com um elemento child */}
        </div>
    </div>
)