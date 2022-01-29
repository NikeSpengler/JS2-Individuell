import { useState } from "react";
import "./cv.scss";

export default function Cv() {
        const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            title: "Education",
            year1: "2021-2023",
            year2: "2017",
            year3: "2010-2015",
            desc1: "KYH, Frontend Developer",
            desc2: "Graphic Design for webb, HKR",
            desc3: "Konstfack, GDI KA",
        },
        {
            id: "2",
            title: "Work",
            year1: "2015-pågående",
            year2: "2014-2020",
            year3: "2016-2019",
            desc1: "Freelance Graphic Designer",
            desc2: "Postmuseum, host",
            desc3: "Norbergfestivalen, sound & light",
        },
        {
            id: "3",
            title: "Interns & Scholorship",
            year1: "2012",
            year2: "2012",
            year3: "2010",
            desc1: "Torafu Arcitects Tokyo, intern",
            desc2: "Sasakawa Foundation, exchange",
            desc3: "Grafikens hus, recedency",
        },
    ];


    const handleClick = (way) => {
       way  === "left" 
       ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
       : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="cv" id="cv">
            <div className="slider" 
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
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
            {/* <a href="#skills">
                <img src="assets/down.png" className="arrow-bottom2" alt="" />
            </a> */}
            <img src="assets/down.png" className="arrow left" alt="" onClick={()=> handleClick("left")} />
            <img src="assets/down.png" className="arrow right" alt="" onClick={()=> handleClick()} />
            
        </div>
    );
}
