import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/img.png"
const Common = (props) => {
    return (

        <>
        <section id = "header" 
        className = "d-flex align-items-center">
            <div
            className ="container-fluid ">
                <div
                className = "row">
                    <div
                    className="col-10 mx-auto">
                        <div
                        className = "row">
                        <div 
                        className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            
                            
                            
                            
                            
                            <h1 > {props.name} <br/>
                            <strong className = "brand-name ">
                                Technical 
                                </strong> 
                            </h1>




                            <h2 className = "my-3">
                                we are the team of talented developer making websites</h2>
                            <div className = "my-3 ">
                                <NavLink to = {props.visit} className = "btn-get-started">
                                    {props.btname}
                                    </NavLink>
                            </div>
                        </div>
                        <div className = " col-lg-6 order-1 order-lg-2 header-img" >
                        <img src = {props.imgsrc}
                        className = "img-fluid animated"
                        alt = "Common img"/>


                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>







{/* 

    <section id="header"
    class="d-flex align-items-center">
        <div class="container-fluid ">
            <div class="row">
                <div class="col-10 mx-auto">
                    <div class="row">
                        <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                Grow your business with
                                <strong class="brand-name"> ThapaTechnical </strong>
                                </h1>
                                <h2 class="my-3">
                                    We are the team of talented developer making websites
                                    </h2>
                                    <div class="mt-3">
                                        <a class="btn-get-started " href="/service">
                                            Get Started
                                            </a>
                                            </div>
                                            </div>
                                            <div class="col-lg-6 order-1 order-lg-2 header-img">
                                                <img src="/reactlivewebsite/static/media/img2.e981619f.svg"
                                                class="img-fluid animated" alt="Commom img" />
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </section> */}
        </>
    );
}
export default Common ;