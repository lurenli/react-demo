import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from 'Component/Home/Home'
import Page1 from 'Component/Page1/Page1'
import Counter from 'Component/counter/counter'

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
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/page1' component={Page1}></Route>
                    <Route path='/counter' component={Counter}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default getRouter;