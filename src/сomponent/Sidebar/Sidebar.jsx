import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faGlobe, faHandHolding,faFileAlt } from '@fortawesome/free-solid-svg-icons';


import './Sidebar.scss';
const Sidebar = () => { 

    const [key, setKey] = useState('link-1');

    return (
        <nav className='sidebar'>
            <Nav className="flex-column"
                activeKey={key}
                onSelect={(selectedKey) => {setKey(selectedKey)}}
            >
                <Nav.Link eventKey="link-1">
                    Сотрудники <FontAwesomeIcon icon={ faUserTie } />
                </Nav.Link> 
                <Nav.Link eventKey="link-2">Услуги 
                    <span> 
                        <FontAwesomeIcon icon={ faFileAlt } size='sm'/> 
                        <FontAwesomeIcon icon={ faHandHolding } />
                    </span>
                </Nav.Link> 
                <Nav.Link eventKey="link-3">
                    СМЭВ<FontAwesomeIcon icon={ faGlobe } />
                </Nav.Link> 
            </Nav>
        </nav>
    )
}

export default Sidebar;