import "./Hero.css"
import heroSubImage from "../../Assets/heroSubImage.jpg"

const Hero = () => {
    return (
        <div className="Hero">
            <div className="heroLeft">
                <h1>Virtual Reality <span style={{color : "red"}}>based <br /> Search Portal</span>  for <br /> Real Existing Spaces</h1>
                <p>A digital platform that allows users to <br /> search, explore, and experience real-world environments through virtual reality technology.</p>
            </div>
            <div className="heroRight">
                <img src={heroSubImage} alt="kunalborkar2001@gmail.com" />
            </div>
        </div>
    )
}

export default Hero