import React from 'react'

const Wrapper = (props) => {
    return (
        <div style={{
            padding:0,
            margin:0,
            backgroundColor:"#EEE7E7"
        }}>
            {props.children}
        </div>
    )
}

export default Wrapper;
