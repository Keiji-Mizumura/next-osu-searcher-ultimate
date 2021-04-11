import classes from './Footer.module.css'

import Container from '../../ui/Containers/Container'

const Footer = () => {

    return (
        <footer className={classes.footer}>

            <Container>
                <p>Open Source Project created by <a href="https://github.com/Keiji-Mizumura" target="_blank" className={classes.link}>Mizumura Keiji</a></p>
                <p>Credits to <a href="https://osu.ppy.sh" target="_blank" className={classes.link}>osu!</a></p>
                <p>&copy;Copyright 2021</p>
            </Container>

        </footer>
    )

}

export default Footer;