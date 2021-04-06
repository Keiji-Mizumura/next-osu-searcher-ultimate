import ReactAudioPlayer from 'react-audio-player'

const styles = {
    width: '100%',
    backgroundColor: '#46393f',
    borderRadius: "10px"
}

const PreviewMusic = (props) => {
    return (
            
            <div>
                    <ReactAudioPlayer
                    style={styles}
                    src={`https://b.ppy.sh/preview/${props.music}.mp3`}
                    controls
                    />
            </div>
    )
}

export default PreviewMusic