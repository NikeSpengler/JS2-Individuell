import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"


export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings:[ " Graphic Designer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/port4.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h3>Hi there, I´m a</h3>
                    <h2>Frontend Developer</h2>
                    <h3>& <span ref={textRef}></span></h3><br />
                </div>
            </div>
            {/* <a href="#about">
                <img src="assets/down.png" className="arrow-bottom" alt="" />
            </a> */}
        </div>
    )
}
