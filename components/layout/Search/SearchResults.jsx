import Header from '../Header/Header'
import PlayerInformation from '../Player/PlayerInformation'

import { useEffect, useState } from 'react'
import Loading from '../../ui/Loading/Loading'

const SearchResults = (props) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [playerData, setPlayerData] = useState({})
    const [playerLength, setPlayerLength] = useState(0)
    const [isError, setIsError] = useState(null)

    const [mode, setMode] = useState(0)

    useEffect(() => {
        let mounted = true;
        fetch("https://osu.ppy.sh/api/get_user?k=52ae0ab0149244476e7bcc8f297b665ea69a6020&u=" + props.value + "&m=" + mode)
        .then(res => res.json())
        .then(data => {
            if(mounted){
                setIsLoaded(true)
                setPlayerData(data[0])
                setPlayerLength(data.length)
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

    }, [props.value, mode])

    const handleChangeMod = (e) => {
        setMode(e)
    }

    if(!props.value){
        return <Loading type={2} />
    }
    else if(isError){
        return <Loading type={0}/>
    }
    else if(playerLength === 0){
        return (
            <>
                <Header />
                <Loading type={0}/>
            </>
        )
    }
    else if(!isLoaded){
        return (
            <>
                <Header />
                <Loading type={0}/>
            </>
        )
    }
    else if(playerData === undefined){
        return (
            <>
                <Header />
                <Loading type={0}/>
            </>
        )
    }
    return (
        <>
            <Header handleChange={handleChangeMod} currentMode={mode}/>
            <PlayerInformation 
                mode={mode}
                playerID={playerData.user_id}
                playerName={playerData.username}
                country={playerData.country}
                rankedScore={playerData.ranked_score}
                accuracy={playerData.accuracy}
                playCount={playerData.playcount}
                totalScore={playerData.total_score}
                totalHits={+playerData['count300'] + +playerData['count100'] + +playerData['count50']}
                pp_raw={playerData.pp_raw}
                count_rank_ss={playerData.count_rank_ss}
                count_rank_ssh={playerData.count_rank_ssh}
                count_rank_s={playerData.count_rank_s}
                count_rank_sh={playerData.count_rank_sh}
                count_rank_a={playerData.count_rank_a}
                total_seconds_played={playerData.total_seconds_played}
                pp_rank={playerData.pp_rank}
                pp_country_rank={playerData.pp_country_rank}
            />
        </>
    )
}

export default SearchResults