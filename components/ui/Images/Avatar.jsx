const styles = {
    height: '120px',
    width: '120px',
    borderRadius: '30px'
}

const Avatar = (props) => {
    return (
        <img src={props.url} alt={props.alt} style={styles}/>
    )
}

export default Avatar