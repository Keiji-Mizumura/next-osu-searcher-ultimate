import { useEffect, useState } from 'react';
import { standard } from '../../../modules/Accuracy';
import { numberWithCommas } from '../../../modules/Math';

import CountryFlag from '../Images/CountryFlag';

import classes from './BeatmapScores.module.css';

import Mods from "../../../modules/Mods"
import ModImages from "../Images/ModImages";

const BeatmapScores = ({beatmap_id}) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [isError, setIsError] = useState(null)

    const [beatmap, setBeatmap] = useState([]);

    useEffect(() => {
        let mounted = true;

        fetch(`https://osu.ppy.sh/api/get_scores?k=52ae0ab0149244476e7bcc8f297b665ea69a6020&b=${beatmap_id}`)
        .then(res => res.json())
        .then(data => {
            if(mounted){
                setIsLoaded(true);
                setBeatmap(data)
            }
        },
            error => {
                setIsLoaded(true);
                setIsError(error);
            }
        )

        return function cleanup(){
            mounted = false;
        }
    },[beatmap_id])

    if(!isLoaded){
        return <></>
    }

    return (
        <div className={classes.container}>

            <table>
                <tr className={classes.row}>
                    <th>RANK</th>
                    <th>SCORE</th>
                    <th>ACCURACY</th>
                    <th>PLAYER</th>
                    <th>MAX COMBO</th>
                    <th>300</th>
                    <th>100</th>
                    <th>50</th>
                    <th>MISS</th>
                    <th>PP</th>
                    <th>TIME</th>
                    <th>MODS</th>
                </tr>
                {
                    beatmap.map((item,index) => (
                        <tr key={item.score_id} className={classes.row}>
                            <td>#{index + 1}</td>
                            <td>{numberWithCommas(item.score)}</td>
                            <td>{standard(+item.countmiss, +item.count50, +item.count100, +item.count300)}%</td>
                            <td><CountryFlag country="PH"/> {item.username}</td>
                            <td>{numberWithCommas(item.maxcombo)}</td>
                            <td>{numberWithCommas(item.count300)}</td>
                            <td>{numberWithCommas(item.count100)}</td>
                            <td>{numberWithCommas(item.count50)}</td>
                            <td>{numberWithCommas(item.countiss)}</td>
                            <td>{numberWithCommas(item.pp)}</td>
                            <td>1m</td>
                            <td className={classes.mods} >
                            {Mods(item.enabled_mods).map((result) => (
                                <span key={result}>{ModImages(result)}</span>
                            ))}
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )

}

export default BeatmapScores