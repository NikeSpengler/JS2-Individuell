import "./cv.scss"

export default function Cv() {
        const [currentSlide, setCurrentSlide] =useState(0) 
    const data = [
        {
            id: "1",
            title: "Utbilning",
            year1: "2015-pågående",
            year2: "2014-2020",
            year3: "2016-2019",
            desc1: "Frilandsande grafisk formgivare",
            desc2: "Postmuseum, musievärd",
            desc3: "Norbergfestivalen, ljud och ljus",
        },
        {
            id: "2",
            title: "Arbete",
            year1: "2015-pågående",
            year2: "2014-2020",
            year3: "2016-2019",
            desc1: "Frilandsande grafisk formgivare",
            desc2: "Postmuseum, musievärd",
            desc3: "Norbergfestivalen, ljud och ljus",
        },
        {
            id: "3",
            title: "Praktik",
            year1: "2015-pågående",
            year2: "2014-2020",
            year3: "2016-2019",
            desc1: "Frilandsande grafisk formgivare",
            desc2: "Postmuseum, musievärd",
            desc3: "Norbergfestivalen, ljud och ljus",
        },
    ];

    const handleClick = (way) => {
       way  === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="cv" id="cv">
            <div className="slider" 
            style={{transform: `translateX(-${currentSlide * 100}vw)` }} >
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <p className="title">{d.title}</p>
                                <p>{d.year1}</p>
                                <p>{d.year2}</p>
                                <p>{d.year3}</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="rightContainer">
                                <br />
                                <p>{d.desc1}</p>
                                <p>{d.desc2}</p>
                                <p>{d.desc3}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <a href="#skills">
                <img src="assets/down.png" className="arrow-bottom2" alt="" />
            </a>
            <img src="assets/down.png" className="arrow left" alt="" onClick={()=> handleClick("left")} />
            <img src="assets/down.png" className="arrow right" alt="" onClick={()=> handleClick("")} />
        </div>
    )
}
