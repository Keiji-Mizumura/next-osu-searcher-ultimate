const styles = {
    height: '100%'
}

const BeatmapThumbnail = ({beatmapset_id}) => {
    return (
        <img style={styles} src={`https://b.ppy.sh/thumb/${beatmapset_id}l.jpg`} />
    )
}

export default BeatmapThumbnail