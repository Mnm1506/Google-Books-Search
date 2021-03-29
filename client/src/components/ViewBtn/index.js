import React from "react" 

function Button(props) {

    return (<button style={{ float: "right", marginBottom: 10 }} className="btn btn-success" onClick={() => window.location.href=props.link} formTarget="_blank">View</button>)
}

export default Button;