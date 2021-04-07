import { numberWithCommas, roundTwoDecimals } from '../../../modules/Math'
import Container from '../../ui/Containers/Container'
import Rank from '../../ui/Images/Rank'
import classes from './RankStats.module.css'

import { secondsToDayHourMinute } from '../../../modules/Time'

const RankStats = (props) => {

    const { total_seconds_played, pp_raw, count_rank_ss, count_rank_ssh, count_rank_s, count_rank_sh, count_rank_a } = props

    const [days, hours, minutes] = secondsToDayHourMinute(total_seconds_played)

    return (
        <div className={classes.content}>
            <Container>
                <div className={classes.stats}>
                    <div>
                        <div className={classes.line}></div>
                        <h2>Total Play Time</h2>
                        <h1>{days}d {hours}h {minutes}m</h1>
                    </div>
                    <div>
                        <div className={classes.lineB}></div>
                        <h2>pp</h2>
                        <h1>{numberWithCommas(Math.round(pp_raw))}</h1>
                    </div>
                </div>
                <div className={classes.ranks}>
                    <div>
                        <Rank rank='SSH' />
                        <h2>{numberWithCommas(count_rank_ssh)}</h2>
                    </div>
                    <div>
                        <Rank rank='SS' />
                        <h2>{numberWithCommas(count_rank_ss)}</h2>
                    </div>
                    <div>
                        <Rank rank='SH' />
                        <h2>{numberWithCommas(count_rank_sh)}</h2>
                    </div>
                    <div>
                        <Rank rank='S' />
                        <h2>{numberWithCommas(count_rank_s)}</h2>
                    </div>
                    <div>
                        <Rank rank='A' />
                        <h2>{numberWithCommas(count_rank_a)}</h2>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default RankStats