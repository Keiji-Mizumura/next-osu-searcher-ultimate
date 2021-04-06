import Container from '../../ui/Containers/Container'
import classes from './Header.module.css'

const Header = (props) => {

    const active = {
        color: "white"
    }

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.headerItem}>
                    <img src="https://osu.ppy.sh/assets/images/profile.c681ffeb.svg" alt="icon" />
                    <h1>player info</h1>
                </div>
                <div className={classes.headerItem}>
                    <nav className={classes.navigation}>
                        <ul>
                            <li><button style={props.currentMode === 0 ? active : {}} className={classes.btn} onClick={() => props.handleChange(0)}>osu!</button></li>
                            <li><button style={props.currentMode === 1 ? active : {}} className={classes.btn} onClick={() => props.handleChange(1)}>osu!taiko</button></li>
                            <li><button style={props.currentMode === 2 ? active : {}} className={classes.btn} onClick={() => props.handleChange(2)}>osu!catch</button></li>
                            <li><button style={props.currentMode === 3 ? active : {}} className={classes.btn} onClick={() => props.handleChange(3)}>osu!mania</button></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header