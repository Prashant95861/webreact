import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-4">
                            <a className="navtitle" href="#">PrashantPipaliya</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item navweb">
                                        <NavLink style={{ textDecoration: 'none' }} exact activeClassName="active_classs" to="/" > Home </NavLink>
                                    </li>
                                    <li className="nav-item navweb">
                                        <NavLink style={{ textDecoration: 'none' }} exact activeClassName="active_classs" to="/Service" > Service </NavLink>
                                    </li>
                                    <li className="nav-item navweb">
                                        <NavLink style={{ textDecoration: 'none' }} exact activeClassName="active_classs" to="/About" > About </NavLink>
                                    </li>
                                    <li className="nav-item navweb">
                                        <NavLink style={{ textDecoration: 'none' }} exact activeClassName="active_classs" to="/Contact" > Contact </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;