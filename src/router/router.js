import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '../components/Home/Home'
import Page1 from '../components/Page1/Page1'

const getRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/page1'>Page1</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/page1' component={Page1}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default getRouter;