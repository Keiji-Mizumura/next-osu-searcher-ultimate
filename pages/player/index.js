import SearchHeader from '../../components/layout/SearchHeader'

import { useRouter } from 'next/router'

const SearchPlayerPage = () => {

    const router = useRouter()

    const handleChange = (e) =>{
        router.push(`/player/${e.target.value}`)
    }

    return (
        <>
            <SearchHeader onChange={handleChange}/>
        </>
    )

}

export default SearchPlayerPage