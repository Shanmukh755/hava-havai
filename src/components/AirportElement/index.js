import { MdEdit } from "react-icons/md"
import { RiDeleteBin5Line } from "react-icons/ri"
import {Link} from 'react-router-dom'
import './index.css'

const AirportElement = props => {
    const {eachEle} = props
    const {id, airport, country, code, terminals} = eachEle
    return(
        <Link to={`/airport/${id}`} className="nav-link">
        <div className="airport-border">
        <div className='airport-list-item'>
            <div className='airports-item-left'>
                <input type='checkbox'/>
                <p className='airports-item-heading'>{airport}</p>
            </div>
            <div className='airports-item-right'>
                <p className='country-item-head'>{country}</p>
                <p className='country-item-head'>{code}</p>
                <p className='country-item-head1'>{terminals}</p>
                <div className='mini-logo-cont'>
                    <MdEdit className="mini-image"/>
                    <RiDeleteBin5Line className="mini-image"/>
                </div>
            </div>
        </div>
        </div>
        </Link>
    )

}
export default AirportElement