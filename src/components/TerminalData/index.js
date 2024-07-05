import { PiDotsThreeBold } from "react-icons/pi";
import {Button} from '@adobe/react-spectrum'

import './index.css'

const TerminalData = props => {
    const {terminals} = props
    return(
        <div className='terminal-container'>
            {[...Array(terminals)].map((_, index) => (
               <div className='terminal'>
                    <img src='/images/Image (1).png' className='terminal-img' alt='terminal' /> 
                    <div className="terminal-col">
                        <div className="terminal-row">
                            <p className='terminal-head'>Terminal {index}</p>
                            <PiDotsThreeBold className="mini-image"/>
                        </div>
                        <p className="terminal-des">Optional metadata should be two lines</p>
                    </div>
               </div>
            ))}
            <Button variant="primary" UNSAFE_style={{
                marginTop: "1.5rem",
                height: "25px",
                width: "130px"
            }}>
                +Add Terminal
            </Button>    
        </div>
    )

}

export default TerminalData