import './singlecharacter.css'
import Header from '../header/Header'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'


const Singlecharacter = ({match}) => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [ infor, setInfor ] = useState([])

    useEffect(() => {
        fetchItem()
    })

    const fetchItem = async() =>{
        const res = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        const chr = await res.json()
        setInfor(chr)
        console.log(chr)
    }


    return (
        <div>
            <Header />
            <button className='back-btn' onClick={()=>navigate("/characters")}>BACK</button>
            {
                infor.map( char => {
                    return(
                        <div className='chr-cnt' key={char.char_id}>
                            <div  className='img-hldr'>
                                <img src={char.img} alt = {char.name}/>
                                <h1>{char.name}</h1>
                            </div>
                            <div className='chr-info'>
                                
                                <h3> Portrayed : {char.portrayed} </h3>
                                <h3> Nickname : {char.nickname} </h3>
                                <h3> Category : {char.category} </h3>
                                <h3> Birthday : {char.birthday} </h3>
                                <h3> Status : {char.status} </h3>
                                <h3> Appearance : {char.appearance} </h3>
                                <h3> Occupation : {char.occupation} </h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Singlecharacter