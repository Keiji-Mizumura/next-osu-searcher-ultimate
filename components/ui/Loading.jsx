import Container from "./Container"
import classes from './Loading.module.css'

const Loading = (props) => {

    const renderLoading = () => {
        return (
            // The hardest one :D
            <div className={classes.loading}>
                <Container>
                    <div className={classes.personal}>
                        <div className={classes.avatar}></div>
                        <div className={classes.names}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={classes.stats}>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    const renderNothing = () => {
        return (
            <div className={classes.nothing}>
                <Container>
                    <h1>Not Found</h1>
                </Container>
            </div>
        )
    }

    const renderAlert = () => {
        return (
            <div className={classes.alert}>
                <Container>
                    <h1>Start typing
                        <div className={classes.dots}>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                        </div>
                    </h1>
                </Container>
            </div>
        )
    }

    switch(props.type){
        case 0:
            return renderLoading()
            break
        case 1:
            return renderNothing()
            break
        case 2: 
            return renderAlert()
            break
        default:
            return <></>
            break
    }

    return <></>

}

export default Loading