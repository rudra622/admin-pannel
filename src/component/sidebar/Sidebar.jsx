import React from 'react'
import './Sidebar.css'
import { Speedometer, PeopleFill, Box, GearFill, ChevronDown, ChevronRight } from 'react-bootstrap-icons'
import CustomToggle from '../Custom-toggal/CustomToggle';
import Accordion from 'react-bootstrap/Accordion';
import { NavLink } from 'react-router-dom';

function Sidebar({show}) {
    return (
        <>  
        
            <div className={show ? 'sidebar bg-primary p-2 hide' : 'sidebar bg-primary vh-100 p-2'  }>
                <div className='logo p-2 text-center text-white'>
                    <h3>Rudra.</h3>
                </div>
                <nav>
                    <h6 className='text-secondary'>
                        Menu
                    </h6>
                    <ul>
                        <li className='list-unstyled p-2'>
                            <NavLink to="/" className=' text-decoration-none d-flex '>
                                <div className='icon col-1'>
                                    <Speedometer />
                                </div>
                                <div className='menu col ms-2'>
                                    <span>Dasborad</span>
                                </div>
                                <div className='arrow'>
                                    <ChevronRight />
                                </div>

                            </NavLink>
                        </li>

                        <Accordion defaultActiveKey="0"> 
                            <li className='list-unstyled p-2'>

                                <CustomToggle eventKey="0">
                                    <NavLink to="/users" className='text-white text-decoration-none d-flex postion-relative navlink'>
                                        <div className='icon col-1'>
                                            <PeopleFill />
                                        </div>
                                        <div className='menu col ms-2'>
                                            <span>Users</span>
                                        </div>
                                        <div className='arrow'>
                                            <ChevronDown />
                                        </div>
                                    </NavLink>
                                </CustomToggle>
                                <Accordion.Collapse eventKey="0">
                                <ul>
                                    <li className='list-unstyled p-2'>
                                        <NavLink to="/admin" className=' text-decoration-none d-flex'>
                                            <div className='icon col-1'>
                                                <PeopleFill />
                                            </div>
                                            <div className='menu col ms-2'>
                                                <span>Admin</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='list-unstyled p-2'>
                                        <NavLink to="/users" className=' text-decoration-none d-flex'>
                                            <div className='icon col-1'>
                                                <PeopleFill />
                                            </div>
                                            <div className='menu col ms-2'>
                                                <span>Users</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                                </Accordion.Collapse>
                            </li>
                        </Accordion>
                        <li className='list-unstyled p-2'>
                            <NavLink to="/product" className=' text-decoration-none d-flex'>
                                <div className='icon col-1'>
                                    <Box />
                                </div>
                                <div className='menu col ms-2'>
                                    <span>Product</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='list-unstyled p-2'>
                            <NavLink to="/setting" className=' text-decoration-none d-flex'>
                                <div className='icon col-1'>
                                    <GearFill />
                                </div>
                                <div className='menu col ms-2'>
                                    <span>Setting</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar