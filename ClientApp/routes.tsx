import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home, Classes, Contact, About } from './components/pages';

export const routes = (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/classes' component={Classes} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
    </Layout>
);
