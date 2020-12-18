import React from "react";
// import { NaveLink } from "react-router-dom";
// import web from "./images/img3.png";

import Common from "./Common";
const About = () => {
    return (

        <>
        <Common
         name = "Welcome to About Page" 
        imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGa4oQSg7YE1-H-58Dt3BBGm_G9wnmmgrtDg&usqp=CAU"
        visit = '/contact' 
        btname = "Contact Now" />
        {/* <h1> Welcome About Page </h1> */}
        {/* <Link to="/Service">Go to Service</Link> */}
        </>
    );
}
export default About ;
