import React from "react";
import aboutImg from "../images/aboutImg.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    return (
        <Common
            heading="Welcome to About Page"
            paragraph="We are the team of talented developer making Websites"
            btnTxt="Contact US"
            visit="/contact" 
            imgSrc = {aboutImg}
            />
    )
};

export default About;