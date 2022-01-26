import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        //Gör så att hamburgermenyn i aktivt läge blir ett kryss
        <div className={"topbar " +(menuOpen && "active")}> 
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Nike Spengler</a>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
