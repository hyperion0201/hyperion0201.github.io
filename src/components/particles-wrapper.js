import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    
  >
    <Particles
	style={{
        zIndex:`-10`,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
      params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "none",
                "out_mode": "out",
                "attract.rotateX": 600,
                "attract.rotateY": 600
	        }
	    },
	    "interactivity": {
            "detect_on": "window",
	        "events": {
	            "onhover": {
	                "enable": false,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "push"
                },
                "onresize": {
                    
                }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} 
    />
  </div>
);
