import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface NavItemProps {
    linkText?: string
    url?: string
}

export class NavItem extends React.Component<NavItemProps, {}> {
    public render() {
        return (
            <NavLink to={this.props.url} className="nav-item" exact activeClassName='active'>
                <div className="nav-item-content">
                    <span>{this.props.linkText}</span>
                </div>
            </NavLink>
        )
    }
}