import { useParams } from 'react-router-dom';
import Header from "../Header";
import Sidebar from '../Sidebar';
import TerminalData from '../TerminalData';
import Services from '../Sevices';
import {Breadcrumbs, Item} from '@adobe/react-spectrum'
import {TabList, TabPanels, Tabs} from '@adobe/react-spectrum'
import './index.css';

let rows = [
    {id: 1, airport: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3},
    {id: 2, airport: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5},
    {id: 3, airport: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6},
    {id: 4, airport: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3},
    {id: 5, airport: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14},
]
const AirportDetails = () => {
    const { id } = useParams();
    const currentAirport = rows.filter(each => each.id==id)
    const {airport, terminals} = currentAirport[0]
    return (
        <div className='home-container'>
            <Header/>
            <div className='main-container'>
                <Sidebar/>
                <div className='home-data-container'>
                    <Breadcrumbs>
                        <Item key={id}>Airports</Item>
                        <Item key={airport}>{airport}</Item>
                    </Breadcrumbs>
                    <h1 className='airport-main-head'>{airport}</h1>
                    <Tabs >
                        <TabList>
                            <Item key="terminal">Terminals</Item>
                            <Item key="transport">Transport</Item>
                            <Item key="contact">Contact details</Item>
                        </TabList>
                        <TabPanels>
                            <Item key="terminal">
                                <TerminalData terminals={terminals}/>
                            </Item>
                            <Item key="transport">
                                Transported
                            </Item>
                            <Item key="contact">
                                Contact details of Passenger
                            </Item>
                        </TabPanels>
                    </Tabs>
                    <h3 className='services-head'>Services</h3>
                    <Tabs>
                        <TabList>
                            <Item key="service">Lost & Found</Item>
                        </TabList>
                        <TabPanels>
                            <Item key="service">
                                <Services />
                            </Item>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AirportDetails;
