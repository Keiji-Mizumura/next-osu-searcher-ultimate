import SearchHeader from '../../components/layout/Search/SearchHeader'

import { useRouter } from 'next/router'
import Footer from '../../components/layout/Footer/Footer'

import Hero from '../../components/layout/Hero/Hero'

const SearchPlayerPage = () => {

    const router = useRouter()

    const handleChange = (e) =>{
        router.push(`/player/${e.target.value}`)
    }

    return (
        <>
            <SearchHeader onChange={handleChange}/>
            <Hero />
            <Footer />
        </>
    )

}

export default SearchPlayerPage