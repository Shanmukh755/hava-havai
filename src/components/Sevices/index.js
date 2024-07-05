import {TextField} from '@adobe/react-spectrum'
import {Picker, Item} from '@adobe/react-spectrum'
import {Switch, Button} from '@adobe/react-spectrum'
import { MdOutlineFileUpload } from "react-icons/md";

import './index.css'

const Services = () => {
    return(
        <div className='services-container'>
            <div className='service-left'>
                <TextField label="Service Name" placeholder='type service' width={150}/>
                <Picker label="Category" width={150}>
                   <Item >Option1</Item>
                   <Item >Option2</Item>
                   <Item >Option3</Item>
                </Picker>
                <Picker label="Sub Category" width={150}>
                   <Item >Option1</Item>
                   <Item >Option2</Item>
                   <Item >Option3</Item>
                </Picker>
                <Button UNSAFE_style={{
                    fontWeight: "400",
                    fontSize: "13px",
                    marginTop: "1.5rem",
                }}><MdOutlineFileUpload/> upload image</Button>
                <Switch UNSAFE_style={{
                    marginTop: "1.5rem"
                }}>Show image</Switch>
                <Button UNSAFE_style={{
                    marginTop: "1.5rem",
                    backgroundColor: "black",
                    color: "#ffffff"
                }}>Save</Button>
            </div>
            <TextField width={400} label="Description" placeholder='type here' />
        </div>
    )
}
export default Services