import "./contact.scss"


export default function Contact() {
    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src="assets/mail4.png" height="350px" className="contact"/>
            </div>
            <div className="right">
                <h2>Contact me!</h2>
                <br />
                <br />
                <li><p>spengler.nike@gmail.com</p></li>
                <li><p>+4673 680 66 24</p></li>
                <br />
                <li><a href="#">Github</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
                
                {/* <form>
                    <input type="text" placeholder="Email"/>
                    <textarea name="Message" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                </form>  */}

            </div>
        </div>
    )
}
