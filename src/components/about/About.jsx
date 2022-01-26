import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="box">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <p className="title">About</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nisi molestias vitae consequatur culpa fugit maiores labore! Dolorem, harum sunt accusantium quisquam consequatur earum ullam illo facere, aut dicta dolorum.</p>
                                
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
                <img src="assets/down.png"  className="arrow-bottom2" alt="" />
            </a>
        </div>
    )
}
            
