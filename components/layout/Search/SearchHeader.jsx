import Container from '../../ui/Containers/Container'
import classes from './SearchHeader.module.css'

import Link from 'next/link'

const SearchHeader = (props) => {
    return (
        <div className={classes.header}>
            <Container>
                <Link href={'/'}>
                    <img src="https://osu.ppy.sh/assets/images/osu-logo-white.59d385da.svg" alt="logo" />
                </Link>
                <input type="text" placeholder="Search Player" onChange={props.onChange} value={props.value} autoFocus/>
            </Container>
        </div>
    )
}

export default SearchHeader