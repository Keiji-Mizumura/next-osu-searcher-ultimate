import Header from './layout/Header'
import PlayerInformation from './layout/PlayerInformation'

import { useEffect, useState } from 'react'
import Loading from './ui/Loading'

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
            />
        </>
    )
}

export default SearchResults