import * as React from 'react';
import { NavMenu } from './navigation/NavMenu';
import { Header } from './header/Header';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <div className='container-fluid'>
                    <Header />
                    <NavMenu />
                    <div className='row'>
                        <div className='col-sm-12'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
