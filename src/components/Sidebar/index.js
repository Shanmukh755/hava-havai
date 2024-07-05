import { ListBox, Item } from '@react-spectrum/listbox';
import './index.css';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='section-container'>
                <div className='logo-container'>
                    <img src="/images/Icon.png" className='mini-logo' alt='home' />
                    <p className='logo-des'>Home</p>
                </div>
                <div className='logo-container'>
                    <img src="/images/Icon (1).png" className='mini-logo' alt='dashboard' />
                    <p className='logo-des'>Dashboard</p>
                </div>
            </div>
            <div className='section-container'>
                <p className='services-bold'>Services</p>
                <ListBox UNSAFE_className='custom-listbox'>
                    <Item>Airport</Item>
                    <Item>Videos</Item>
                </ListBox>
            </div>
            <div className='section-container'>
                <p className='services-bold'>Others</p>
                <ListBox UNSAFE_className='custom-listbox'>
                    <Item key="1">List1</Item>
                    <Item key="2">List2</Item>
                    <Item key="3">List3</Item>
                </ListBox>
            </div>
        </div>
    );
}

export default Sidebar;
