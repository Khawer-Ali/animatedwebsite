import React from "react";
import web from "../images/roket.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web1 from "../images/roket.svg"

const Home = () => {
    return (
        <Common
            heading="Grow your business with"
            paragraph="We are the team of talented developer making Websites"
            btnTxt="Get Started"
            visit="/service" 
            imgSrc = {web1}
            />
    )
};

export default Home;