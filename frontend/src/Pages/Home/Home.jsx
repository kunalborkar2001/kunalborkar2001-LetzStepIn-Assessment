import "./Home.css"
import Navigator from '../../Sections/Navigator/Navigator'
import Hero from "../../Sections/Hero/Hero"

const Home = () => {
  return (
    <div className='Home'>
        <div className='homeNavigate'>
            <Navigator />
        </div>
        <Hero />

    </div>
  )
}

export default Home