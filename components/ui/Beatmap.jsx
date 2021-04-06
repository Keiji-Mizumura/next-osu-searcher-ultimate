import classes from './Beatmap.module.css'
import Rank from './Rank'

import { useState, useEffect, Fragment } from 'react'
import PreviewMusic from '../music/PreviewMusic'

import Mods from '../../modules/Mods'
import ModImages from './ModImages'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { standard } from '../../modules/Accuracy'
import { numberWithCommas } from '../../modules/Math'

const Beatmap = ({rank, beatmapId, pp, mods, score, maxcombo, count50, count100, count300, countmiss, perfect}) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [beatmap, setBeatmap] = useState({})
    const [isError, setIsError] = useState(null)

    const [isHidden, setIsHidden] = useState(true)
    const [buttonVisible, setButtonVisible] = useState(false)

    useEffect(() => {
        let mounted = true
        fetch(`https://osu.ppy.sh/api/get_beatmaps?k=52ae0ab0149244476e7bcc8f297b665ea69a6020&b=${beatmapId}`)
        .then(res => res.json())
        .then(data => {
            if(mounted){
                setIsLoaded(true)
                setBeatmap(data[0])
            }
        },
        (error) => {
            if(mounted){
                setIsLoaded(true)
                setIsError(error)
            }
        })

        return function cleanup(){
            mounted = false
        }
    }, [beatmapId])

    const showButton = () => {
        setButtonVisible(!buttonVisible)
    }

    const handleClick = () =>{
        setIsHidden(!isHidden)
    }

    if(isError){
       return <></>
    }
    else if(!isLoaded){
        return (
            <div className={classes.beatmap}>
                <div className={classes.leftLoad}>
                    <div className={classes.iconLoad}></div>
                    <div className={classes.texts}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
        <div className={classes.beatmap} onClick={handleClick} style={!isHidden ? {backgroundColor: 'var(--osu-dark)'} : {}}>
            <div className={classes.left}>
                <div className={classes.icon}>
                    <Rank rank={rank} />
                </div>
                <div className={classes.beatmap_title}>
                    <p className={classes.beatmap_name}>{beatmap.title}<span className={classes.beatmap_artist}> by {beatmap.artist}</span></p>
                    <p><span className={classes.beatmap_version}>{beatmap.creator}</span></p>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.mods}>
                    <p>{
                        Mods(mods).map(result => <span key={result}>{ModImages(result)}</span>)
                    }</p>
                </div>
                <div className={classes.pp}>
                    <p>{pp}<span className={classes.smol_pp}>pp</span></p>
                </div>
            </div>
        </div>

        {!isHidden && (
            <div className={classes.hidden}>
                <a target="_blank" href={`https://osu.ppy.sh/beatmapsets/${beatmap.beatmapset_id}/download`} onMouseOver={showButton} onMouseOut={showButton}>
                    <img src={`https://assets.ppy.sh/beatmaps/${beatmap.beatmapset_id}/covers/cover.jpg`} />
                    {buttonVisible ? <button className={classes.buttonLink}>Download <FontAwesomeIcon icon={faDownload} /></button> : <></>}
                </a>
                <div className={classes.music}>
                    <PreviewMusic music={beatmap.beatmapset_id} />
                </div>
                <div className={classes.player_results}>
                     <div>


                        <div className={classes.thumbnail}>

                        </div>
                        
                        <div>

                        <div className={classes.top_results}>
                            <div>
                                <h2>TOTAL SCORE</h2>
                                <h1>{numberWithCommas(score)}</h1>
                            </div>
                            <div>
                                <h2>ACCURACY</h2>
                                <h1 className={standard(+countmiss,+count50,+count100,+count300) == 100 ? classes.green : {}}>
                                    {
                                        standard(+countmiss,+count50,+count100,+count300)
                                    }%
                                </h1>
                            </div>
                            <div>
                                <h2>MAX COMBO</h2>
                                {+perfect ? <h1 className={classes.green}>{maxcombo}x</h1> : <h1>{maxcombo}x</h1>}
                            </div>
                        </div>
                        <div className={classes.bottom_results}>
                            <div>
                                <h2>300</h2>
                                <h1>{count300}</h1>
                            </div>
                            <div>
                                <h2>100</h2>
                                <h1>{count100}</h1>
                            </div>
                            <div>
                                <h2>50</h2>
                                <h1>{count50}</h1>
                            </div>
                            <div>
                                <h2>MISS</h2>
                                <h1>{countmiss}</h1>
                            </div>
                            <div>
                                <h2>PP</h2>
                                <h1>{pp}</h1>
                            </div>
                            <div>
                                <h2>TIME</h2>
                                <h1>14m</h1>
                            </div>
                        </div>

                        </div>

                    </div>

                </div>
            </div>
        )
        }

        </Fragment>
    )
}

export default Beatmap