import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../header/Header'
import Search from '../search/Search'
import Spinner from '../spinner/Spinner'
import Character from './character/Character'
import './characters.css'


const Characters = () => {

    const URL = "https://www.breakingbadapi.com/api/characters"
    const [ items, setItems ] = useState([])
    const [ searchInput, setSearchInput ] = useState("")
    const [ loading, setLoading] = useState(false)

    const fetchData = async() =>{
        setLoading(true)
        const res = await axios(URL)
        setItems(res.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    },[searchInput])

    return (
        <div className='card-cnt'>
            <Header />
            <Search  setSearchInput = {setSearchInput}  setLoading = {setLoading} />
            <div className='cards'>
            {loading ? <Spinner /> :(
                items.filter(char => {
                    if(searchInput === ""){
                        return char
                    } else if(char.name.toLowerCase().includes(searchInput.toLocaleLowerCase())){
                        return char
                    }
                } ).map(char => {
                    return loading ? (<Spinner />):(
                        <Character key={char.char_id} char = { char } loading = { loading } />
                    )
                }))
            }
            </div>
        </div>
    )

}

export default Characters