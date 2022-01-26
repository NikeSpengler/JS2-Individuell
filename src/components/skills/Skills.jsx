import "./skills.scss"

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="box">
                <div className="container">
                    <div className="item">
                    {/* <p className="title-CV">CV</p>   */}
                        <div className="left">
                            <div className="leftContainer">
                                <p className="title">Languages</p>
                                <p>CSS</p>
                                <p>Html 5</p>
                                <p>JavaScript ES6</p>
                                <p>TypeScript</p> <br /> <br /> <br />
                                <p className="title">Frameworks/ Libraries</p>
                                <p>Elevntry</p>
                                <p>Flutter</p>
                                <p>React</p>
                                <p>Vue.js</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="rightContainer">
                                <p className="title">Software</p>
                                <p>Adobe CC</p>
                                <p>Figma</p>
                                <p>Glyphs</p>
                                <p>Notion</p> <br /><br /> <br />
                                <p className="title">Other tools</p>
                                <p>React Query</p>
                                <p>Git</p>
                                <p>npm</p>
                                <p>Styled Components</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <a href="#contact">
                <img src="assets/down.png"  className="arrow-bottom2" alt="" />
            </a>
        </div>
    )
}
