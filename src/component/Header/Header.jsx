import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { Bag, Bell, Fullscreen, FullscreenExit, Grid, List, Moon, Search } from 'react-bootstrap-icons'
import { In } from "react-flags-select";
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ handleSideBar, handle }) {

    const { User } = useSelector(state => state.AuthReducer)
    return (
        <div className='header py-2 shadow'>
            <div className='container-fluid '>
                <div className="d-flex align-items-center">
                    <div className="col-6  align-item-center">
                        <div className="d-flex  align-items-center">
                            <div className="toggle-menu  col-1 p-2">
                                <button className='bg-transparent border-0' onClick={() => handleSideBar
                                    ()}>
                                    <List className='fs-3' />
                                </button>
                            </div>
                            <div className='search-field col-4'>
                                <Form>
                                    <InputGroup className=" bg-info rounded">
                                        <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
                                            <Search />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="search"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            className='bg-transparent border-0'
                                        />
                                    </InputGroup>

                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col d-flex justify-content-end align-items-center">
                            <ul className='nav'>
                                <li className='nav-item p-2'>
                                    <a href="" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-warning '>
                                        <In />
                                    </a>
                                </li>
                                <li className='nav-item p-2'>
                                    <a href="" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark '>
                                        <Grid />
                                    </a>
                                </li>
                                <li className='nav-item p-2'>
                                    <a href="" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark '>
                                        <Bag />
                                    </a>
                                </li>
                                {
                                    handle.active == false ?
                                        <li className='nav-item p-2'>
                                            <NavLink href="" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark ' onClick={handle.enter}>
                                                <Fullscreen />
                                            </NavLink>
                                        </li>
                                        :
                                        <li className='nav-item p-2'>
                                            <NavLink href="" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark ' onClick={handle.exit}>
                                                <FullscreenExit />
                                            </NavLink>
                                        </li>
                                }
                                <li className='nav-item p-2'>
                                    <a href="" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fx-5'>
                                        <Moon />
                                    </a>
                                </li>
                                <li className='nav-item p-2'>
                                    <a href="" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fx-5'>
                                        <Bell />
                                    </a>
                                </li>
                            </ul>
                            <div className='col-3  bg-info user-details'>
                                <div className='d-flex align-items-center'>
                                    <img className="rounded-circle header-profile-user" src={User && `${User.photoURL}`} alt='' />
                                    <span className="text-start ms-xl-2">
                                        <span className="d-inline-block ms-1 fw-medium user-name-text">{User && `${User.displayName}`}</span>
                                        <span className="d-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header