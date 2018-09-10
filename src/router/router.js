import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!Component/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!Component/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!Component/counter/counter'

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/page1'>Page1</Link></li>
                    <li><Link to='/counter'>counter</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={createComponent(Home)}></Route>
                    <Route path='/page1' component={createComponent(Page1)}></Route>
                    <Route path='/counter' component={createComponent(Counter)}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default getRouter;