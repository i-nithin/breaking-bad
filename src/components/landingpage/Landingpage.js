import './landingpage.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'


const Landingpage = () => {

    return (
        <div className='lp-cnt'>
            <img src= { logo } alt = "logo"/>
            <div className='btn-cnt'>
            <Link to='/characters' className='btn'>ENTER</Link>
            </div>            
        </div>
    )

}

export default Landingpage