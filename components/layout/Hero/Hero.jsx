import classes from "./Hero.module.css";
import Container from "../../ui/Containers/Container"

const Hero = () => {
    return (
        <div className={classes.hero}>
            <Container>
                <video src="https://assets.ppy.sh/media/landing.mp4" autoplay="" loop=""/>
                <img src="https://osu.ppy.sh/assets/images/pippi.452b13ba.png" />
            </Container>
        </div>
    )
}

export default Hero