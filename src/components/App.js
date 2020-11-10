import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Information from '../pages/Information'

function App (props) {
    return (
        <div>
            <NavBar></NavBar>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route exact path="/information" component={ Information }></Route>
                    <Route component={ NotFound }></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App