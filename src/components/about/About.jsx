import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="box">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                {/* <p className="title">About</p> */}
                                <p>I’m a Stockholm based Frontend Developer with graphic design experience, often from working in close collaboration with clients. The last few years I’ve shifted from graphic design towards web development which I’ve become rather passionate about. I’m drawn to working with data structures, developing playful visual aesthetics and creating intuitive functionality.</p>
                                <br />
                                <br />
                                <p className="title">Goals</p>
                                <p>I’m a Stockholm based front-end developer with graphic design experience, often from working in close collaboration with clients. The last few years I’ve shifted from graphic design towards web development which I’ve become rather passionate about. </p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="rightContainer">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <a href="#cv">
                <img src="assets/down.png" className="arrow-bottom1" alt="" />
            </a>
        </div>
    )
}
            
