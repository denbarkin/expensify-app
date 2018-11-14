// HIGH ORDER COMPONENT HOC

// used to modify, change exsting components.
// To understand React-Redux Connect function which is HOC implementation.

import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => (
    <div>
        <h1>Info Panel</h1>
        <p>Info Details is {props.info}</p>
    </div>
)

const adminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is admin warning..</p>}
            <WrappedComponent {...props} /> 
        </div>
    )
}

const AdminInfo = adminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info="Very important info" />, document.getElementById('app'))