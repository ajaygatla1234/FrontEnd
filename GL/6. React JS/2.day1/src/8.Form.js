import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div>
                <h1>Basic Form</h1>
                <form>
                    <label>First Name</label><br></br>
                    <input type="text"/><br></br>

                    <label>Last Name</label><br></br>
                    <input type="text"/><br></br>

                    <label>Email</label><br></br>
                    <input type="email"/><br></br>

                    <label>Phone Number</label><br></br>
                    <input type="tel"/><br></br>

                    <label>Address</label><br></br>
                    <textarea/><br></br><br></br>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;
