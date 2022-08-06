import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        name : "",
        phone : "",
        email : "",
        message : "",
    })

    const handleChange = (e) => {
        const {name,value} = e.target; 
      
        setData((prevVal) => {
            console.log(prevVal)
            return {
                ...prevVal,
                [name] : value,
        }
        });
    }; 

    const handleSubmit = (e) => {
         e.preventDefault();
        alert(`My Name is ${data.name} . My phone Number is ${data.phone} , Here is what I want to say ${data.message}`)
    };


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="Fname">Name</label>
                    <input type="text" class="form-control" onChange={handleChange} value={data.name} name="name" id="Fname" placeholder="First Name" />
                </div>


                <div class="form-group">
                    <label for="Lname">Phone Number</label>
                    <input type="number" class="form-control" onChange={handleChange} value={data.phone} name="phone" id="Lname" placeholder="Enter Phone Number" />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" onChange={handleChange} value={data.email} name="email" id="email" placeholder="Enter Phone Number" />
                </div>


                <div class="form-group">
                    <label for="Message">Message</label>
                    <textarea class="form-control" value={data.message} onChange={handleChange} name="message" id="Message" rows="3"></textarea>
                </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>


    )
};

export default Contact;