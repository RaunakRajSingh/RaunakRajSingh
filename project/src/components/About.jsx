import React from "react";
import cup from "../assets/cup.svg";
import gun from "../assets/gun.svg";
import './About.css';
const About = () => {
    return (
        <>
            <div className="flex main-container justify-center font-bold bg-yellow-400 py-60">
                
                <div className="hover">
                <img src={gun} alt="" />
                </div>
                    <h2 className="text-black text-6xl text-center px-8" >We Are Marketing Mafias<br></br>
                     Skilled enough to know better<br></br>
                      Wild enough to think bigger!</h2>
                   
                   <div className="tea">
                    <img src={cup} />
                   </div>
                </div>
           

        </>
    )
}
export default About;