import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border:'0.1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll