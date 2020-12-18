import React from "react";
import { useState } from "react";
const Contact = () => {
    const [data , setData] = useState({
        FullName: '',
        PhoneNumber : "",
        Email: "",
        Password : ""
    }) ;
    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return{
                ...preVal,
                [name]:value,
            }
        })
    } 

    const formSubmit = (e) => {
        e.preventDefault();
        alert( `My name is ${data.FullName}
        my phoneNo is ${data.PhoneNumber}
        Here is my Email_id ${data.Email}`)
    }
    return (

        <>
       <div className = "my-5">
       <h1 className = "text-center"> Contact Us </h1>
    </div>
    <div className = "container contact_div">
        <div className = "row">
            <div className = "col-md-6 col-10 mx-auto">



            <form onSubmit = {formSubmit}>
                <div class="form-group">
                    <label for="exampleInputFullName" className = 'form-label'>
                        FullName </label>

                            <input type="text" 
                            class="form-control"
                            id="exampleInputFullName" 
                            name = "FullName"
                            value = {data.FullName}
                            onChange = {InputEvent}
                            placeholder = " Enter Your Name"/>

                </div>





                <div class="form-group">
                    <label for="exampleInputPhoneNumber" className = 'form-label'>
                        PhoneNumber </label>

                            <input type="number" 
                            class="form-control"
                                id="exampleInputPhoneNumber"
                                name = "PhoneNumber"
                                value = {data.PhoneNumber}
                                onChange = {InputEvent} 
                                placeholder = "phone Number"/>


                                        
                </div>




                <div class="form-group">
                    <label for="exampleInputEmail1"
                    className = 'form-label'>
                        Email</label>

                            <input type="email" 
                            class="form-control"
                                id="exampleInputEmail1"
                                name = "Email_id"
                                value = {data.Email}
                                onChange = {InputEvent}  
                                aria-describedby="emailHelp" 
                                placeholder = " Enter Your Email_id"/>


                                <small id="emailHelp"
                                        class="form-text text-muted">
                                        We'll never share your email with anyone else.</small>
                </div>




                    <div class="form-group">
                            <label for="exampleInputPassword"> Password</label>
                                    <input type="password" 
                                    class="form-control" 
                                    id="exampleInputPassword" 
                                    name = "Password"
                                value = {data.Password}
                                onChange = {InputEvent}  />
                    </div>


                    <div class="form-group form-check">
                        <input type="checkbox" 
                        class="form-check-input"
                        id="exampleCheck" />

                            <label class="form-check-label" 
                            for="exampleCheck1">
                                Check me out
                                </label>
                    </div> 


                <button type="submit"
                class="btn btn-primary">
                    Submit</button>
            </form>








            </div>
        </div>

    </div>

        </>
    );
}
export default Contact ;