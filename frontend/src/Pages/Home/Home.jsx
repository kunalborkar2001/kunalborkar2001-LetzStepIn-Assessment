import "./Home.css"
import Navigator from '../../Sections/Navigator/Navigator'
import Hero from "../../Sections/Hero/Hero"
import Education from "../../Sections/Education/Education"
import Hotels from "../../Sections/Hotels/Hotels"
import Property from "../../Sections/Property/Property"
import Restaurants from "../../Sections/Restaurants/Restaurants"
import Pubs from "../../Sections/Pubs/Pubs"
import Banquet from "../../Sections/Banquet/Banquet"
import Grid from '@mui/material/Unstable_Grid2';

const Home = () => {
    return (
        <div className='Home'id="Home">
            <Navigator />
            <Hero />
            <div className="catagorySection" id="categorySection">
                <Grid container spacing={2}>
                    <Pubs />
                    <Grid xs={12} md={8} lg={8}>
                        <Education />
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Banquet />
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Property />
                    </Grid>
                    <Grid xs={12} md={8} lg={8}>
                        <Hotels />
                    </Grid>
                    <Restaurants />
                </Grid>
            </div>
        </div>
    )
}

export default Home