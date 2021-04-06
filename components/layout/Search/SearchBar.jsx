import classes from './SearchBar.module.css'

const SearchBar = (props) => {

    return (
        <div>
            <input type='text' onChange={props.onChange}/>
        </div>
    )

}

export default SearchBar