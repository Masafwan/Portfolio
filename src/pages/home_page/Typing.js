import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
      <div className="type">  <Typewriter 
            options={{
                strings: [
                    "Software Engineer",
                    "Developer",
                    
                    "Frontend Developer",
                    "Backend Developer",
                    "Tally ERP Specialist",

                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        /> </div>
    );
}

export default Typing;
