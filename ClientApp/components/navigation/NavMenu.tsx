import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavItem } from './NavItem';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <div className="row nav-container-row">
                    <div className="nav-container">
                        <NavItem linkText="Home" url="/" />
                        <NavItem linkText="Classes" url="/classes" />
                        <NavItem linkText="About Us" url="/about" />
                        <NavItem linkText="Contact" url="/contact" />
                    </div>
                </div>

            </div>
        )
    }
}

//export class NavMenu extends React.Component<{}, {}> {
//    public render() {
//        return <div className='main-nav'>
//                <div className='navbar navbar-inverse'>
//                <div className='navbar-header'>
//                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
//                        <span className='sr-only'>Toggle navigation</span>
//                        <span className='icon-bar'></span>
//                        <span className='icon-bar'></span>
//                        <span className='icon-bar'></span>
//                    </button>
//                    <Link className='navbar-brand' to={ '/' }>NewReactApp</Link>
//                </div>
//                <div className='clearfix'></div>
//                <div className='navbar-collapse collapse'>
//                    <ul className='nav navbar-nav'>
//                        <li>
//                            <NavLink to={ '/' } exact activeClassName='active'>
//                                <span className='glyphicon glyphicon-home'></span> Home
//                            </NavLink>
//                        </li>
//                        <li>
//                            <NavLink to={ '/counter' } activeClassName='active'>
//                                <span className='glyphicon glyphicon-education'></span> Counter
//                            </NavLink>
//                        </li>
//                        <li>
//                            <NavLink to={ '/fetchdata' } activeClassName='active'>
//                                <span className='glyphicon glyphicon-th-list'></span> Fetch data
//                            </NavLink>
//                        </li>
//                    </ul>
//                </div>
//            </div>
//        </div>;
//    }
//}
