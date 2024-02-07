import SubscribeBox from "../SubscribeBox/SubscribeBox"
import "./Footer.css"
import instagram from "../../Assets/instagram.jpg"
import facebook from "../../Assets/facebook.jpg"
import twitter from "../../Assets/twitter.jpg"
import linkedin from "../../Assets/linkedin.jpg"

const Footer = () => {
  return (
    <div className="footer">
      <SubscribeBox />
      <div className="footerMid">
        <h1>LetzStepIn</h1>
        <div className="socialMedia">
          <ul>
            <li><img src={instagram} alt="Instagramimg" /></li>
            <li><img src={facebook} alt="Instagramimg" /></li>
            <li><img src={twitter} alt="Instagramimg" /></li>
            <li><img src={linkedin} alt="Instagramimg" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer