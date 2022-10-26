import React, { useRef } from "react";

const UseRefHook = () => {
    const firstName = useRef();

    console.log(firstName);

    const handleClick = () => {
        firstName.current.focus();

    
    }

    return (
        <>
            <input type="text" placeholder="Please enter name" ref={firstName} />
            <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default UseRefHook;