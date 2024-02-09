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
            <li><a target="_blank" href="https://www.instagram.com/i_am_kunalborkar/"><img src={instagram} alt="Instagramimg" /></a></li>
            <li><a target="_blank" href="https://www.facebook.com/kunal.borkar.9849/"><img src={facebook} alt="Instagramimg" /></a></li>
            <li><a target="_blank" href="https://twitter.com/KunalBo14215428"><img src={twitter} alt="Instagramimg" /></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/kunal-borkar-195a3a213/"><img src={linkedin} alt="Instagramimg" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footerEnd">
        <ul>
          <li><i class="fa-solid fa-location-dot"></i><h2>Head Office</h2></li>
          <li><p>507 twin tower,</p></li>
          <li><p>Pune, MH 411057</p></li>
        </ul>
        <ul>
          <li><i className="fa-solid fa-phone"></i><h2>Contact Us</h2></li>
          <li><p>reachus@letzstepin.com</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer