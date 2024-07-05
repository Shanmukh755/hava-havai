import {Component} from 'react'
import {Button} from '@adobe/react-spectrum'
import Header from '../Header'
import Sidebar from '../Sidebar'
import AirportElement from '../AirportElement'
import { FaArrowDown } from "react-icons/fa6";
import './index.css'

let rows = [
    {id: 1, airport: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3},
    {id: 2, airport: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5},
    {id: 3, airport: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6},
    {id: 4, airport: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3},
    {id: 5, airport: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14},
]
class Home extends Component{
    state = {
        rows: rows
    }
    render(){
        const {rows} = this.state
        return(
            <div className='home-container'>
                <Header />
                <div className='main-container'>
                    <Sidebar />
                    <div className='home-data-container'>
                        <div className='top-section'>
                            <h1 className='airport-head'>Airport</h1>
                            <Button type='submit' variant='primary' UNSAFE_style={{
                                backgroundColor: "black",
                                color: "#ffffff",
                                height: "25px",
                                width: "110px",
                                cursor: "Pointer"
                            }}>+Add new</Button>
                        </div>
                        <div className='airports-container'>
                            <div className='airports-head-container'>
                                <div className='airports-head-left'>
                                    <input type='checkbox'/>
                                    <p className='airports-heading'>Airports</p>
                                    <FaArrowDown className='mini-img'/>
                                </div>
                                <div className='airports-head-right'>
                                    <p className='country-head'>Country</p>
                                    <p className='country-head'>Code</p>
                                    <p className='country-head'>Terminals</p>
                                    <p className='x'></p>
                                </div>
                            </div>
                            <ul className='airports-list-container'>
                                {rows.map(each => (
                                    <AirportElement eachEle={each} key={each.id} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home