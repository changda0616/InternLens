import React, { Component } from 'react'
import { IndexRedirect, IndexRoute, Router, Route, browserHistory } from 'react-router'
import store from './stores/Store'
import { syncHistoryWithStore } from 'react-router-redux'
import Containers from './containers'

const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
    render () {
        return (
            <Router history={history}>
                {/* <Route path="/InternLens" component={Containers.App} > */}
                <Route path="/" component={Containers.App} >
                    <IndexRedirect to="dashboard/" />
                    <Route path="dashboard">
                        <IndexRoute component={Containers.pages.dashboard.Base} />
                        <Route path="post/:id" component={Containers.pages.dashboard.InnerContent.Test} />
                    </Route>
                    <Route path="favorite" component={Containers.pages.favorite.wishList} />
                    <Route path="setting" component={Containers.pages.setting.Profile} />
                </Route>
            </Router>
        )
    }
}
