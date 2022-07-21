import { useState } from 'react'
import './search.css'


const Search = ({ setSearchInput, setLoading }) => {

    const [ val, setVal ] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(true)
        setSearchInput(val)
        setLoading(false)
        console.log(val)
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSearch}>
                <input placeholder = "Search Characters...." type = "text" value={val} onChange = {(e) => setVal(e.target.value)}/>
            </form>
        </div>
    )

}

export default Search