import React, { Component } from "react";

// Uncontrolled input
class ReferenceComponent extends Component {
    constructor() {
        super();
        this.firstname = React.createRef();
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.firstname);
        console.log(this.firstname.current.value);
        let name = this.firstname.current.value;
        this.firstname.current.focus();
    }

    render() {
        return (
            <form>
                <input placeholder="Please enter firstname" type="text" ref={this.firstname} />
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}

export default ReferenceComponent;