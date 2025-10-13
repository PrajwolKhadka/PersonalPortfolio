import React from "react";
import Not from "../assets/identity.png"
const Blog: React.FC=()=>{
    return(
        <div className="justify-center flex mt-15">
            <img src={Not} alt='Not available at the very moment!'></img>
        </div>
    );
}

export default Blog;