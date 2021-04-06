import SearchResults from '../../components/layout/Search/SearchResults'
import SearchHeader from '../../components/layout/Search/SearchHeader'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const PlayerPage = () => {

    const [player, setPlayer] = useState('');

    const router = useRouter()
    const playerId = router.query.id

    useEffect(() => {
        setPlayer(playerId)
    }, [playerId])

    const handleChange = (e) =>{
        const playerName = (e.target.value).replace(/\s/, "_")
        router.push(`/player/${playerName}`)
    }

    return (
        <>
            <Head>
                <title>osu! Searcher Ultimate | {player}</title>
            </Head>
            {/* <img 
            style={{
                position: 'fixed',
                top: '100px',
                left: '20px',
                width: '400px'
            }}
            src="https://i.pinimg.com/originals/66/30/67/6630674a19dbdcf799ef4e7f4be3dc21.png" /> */}
            <SearchHeader onChange={handleChange} value={player}/>
            <SearchResults value={player}/>
        </>
    )
}

export default PlayerPage