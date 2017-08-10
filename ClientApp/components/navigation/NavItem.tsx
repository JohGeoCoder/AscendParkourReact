import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface NavItemProps {
    linkText?: string,
    url?: string,
    className?: string
}

export class NavItem extends React.Component<NavItemProps, {}> {
    public render() {
        var classes = "nav-item " + this.props.className;

        return (
            <NavLink to={this.props.url} className={classes} exact activeClassName='active'>
                <div className="nav-item-content">
                    <span>{this.props.linkText}</span>
                </div>
            </NavLink>
        )
    }
}