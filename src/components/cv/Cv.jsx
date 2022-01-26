import "./cv.scss"

export default function Cv() {
    return (
        <div className="cv" id="cv">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <p className="title">Arbete</p>
                                <p>2015-pågående</p>
                                <p>2014-2020</p>
                                <p>2016-2019</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="rightContainer">
                                <br />
                                <p>Frilandsande grafisk formgivare</p>
                                <p>Postmuseum, musievärd</p>
                                <p>Norbergfestivalen, ljud och ljus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#skills">
                <img src="assets/down.png" className="arrow-bottom2" alt="" />
            </a>
            <img src="assets/down.png" className="arrow left" alt="" />
            <img src="assets/down.png" className="arrow right" alt="" />
        </div>
    )
}
