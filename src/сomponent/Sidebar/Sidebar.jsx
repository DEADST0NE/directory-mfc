import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faGlobe, faHandHolding,faFileAlt } from '@fortawesome/free-solid-svg-icons';


import './Sidebar.scss';
const Sidebar = () => { 
    return (
        <nav className='sidebar'>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link active={true}>
                    Сотрудники <FontAwesomeIcon icon={ faUserTie } />
                </Nav.Link> 
                <Nav.Link>Услуги 
                    <span> 
                        <FontAwesomeIcon icon={ faFileAlt } size='sm'/> 
                        <FontAwesomeIcon icon={ faHandHolding } />
                    </span>
                </Nav.Link> 
                <Nav.Link>
                    СМЭВ<FontAwesomeIcon icon={ faGlobe } />
                </Nav.Link> 
            </Nav>
        </nav>
    )
}

export default Sidebar;