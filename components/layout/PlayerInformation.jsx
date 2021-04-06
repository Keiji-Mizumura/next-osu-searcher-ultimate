import { numberWithCommas, roundTwoDecimals } from '../../modules/Math'
import getCountryName from '../../modules/Country'
import Avatar from '../ui/Avatar'
import Container from '../ui/Container'
import classes from './PlayerInformation.module.css'
import { Fragment } from 'react'
import TopScores from '../TopScores'

const PlayerInformation = ({playerID, playerName, country, rankedScore, accuracy, playCount, totalScore, totalHits, mode}) => {
    return(
        <Fragment>
            <div className={classes.content}>
                <Container>
                    <div className={classes.personal}>
                        <div>
                            <Avatar url={'http://s.ppy.sh/a/' + playerID} alt={playerName}/>
                        </div>
                        <div className={classes.personal_info}>
                            <h1>{playerName}</h1>
                            <div>
                                <img src={`https://osu.ppy.sh/images/flags/${country}.png`} alt={country}/>
                                <p>{getCountryName(country)}</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.stats}>
                        <div>
                            <p>Ranked Score</p>
                            <p>Hit Accuracy</p>
                            <p>Play Count</p>
                            <p>Total Score</p>
                            <p>Total Hits</p>
                        </div>
                        <div className={classes.values}>
                            <p>{numberWithCommas(rankedScore)}</p>
                            <p>{roundTwoDecimals(accuracy)}%</p>
                            <p>{numberWithCommas(playCount)}</p>
                            <p>{numberWithCommas(totalScore)}</p>
                            <p>{numberWithCommas(totalHits)}</p>
                        </div>
                    </div>
                </Container>
            </div>

            <TopScores playerID={playerID} mode={mode}/>
        </Fragment>
    )
}

export default PlayerInformation