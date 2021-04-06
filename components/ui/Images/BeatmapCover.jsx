const BeatmapCover = ({beatmapset_id}) => {
    return (
        <img
              src={`https://assets.ppy.sh/beatmaps/${beatmapset_id}/covers/cover.jpg`}
        />
    )
}

export default BeatmapCover