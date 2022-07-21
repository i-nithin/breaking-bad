import './character.css'
import { Link } from 'react-router-dom'

const Character = ( { loading, char} ) => {
    return(
      <Link to={`/characters/${char.char_id}` }>
        <div className='card'>
               <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={char.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{char.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {char.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {char.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {char.birthday}
            </li>
            <li>
              <strong>Status:</strong> {char.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
        </div>
        </Link>
    )
}

export default Character