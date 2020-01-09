import React from 'react'
import App from './app'
import Admin from './admin'
import Home from './pages/home'
/* ui components */
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Carousel from './pages/ui/carousel'
import Gallery from './pages/ui/gallery'
import Loading from './pages/ui/loading'
import Messages from './pages/ui/messages'
import Notification from './pages/ui/notification'
import Tabs from './pages/ui/tabs'
/* end ui components */
//404
import NoMatch from './pages/noMatch'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <App>

                    <Route path="/" render={() =>
                        <Admin>
                            <Switch>

                                <Route path="/admin/home" component={Home} />
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loading" component={Loading} />
                                <Route path="/admin/ui/notification" component={Notification} />
                                <Route path="/admin/ui/messages" component={Messages} />
                                <Route path="/admin/ui/tabs" component={Tabs} />
                                <Route path="/admin/ui/gallery" component={Gallery} />
                                <Route path="/admin/ui/carousel" component={Carousel} />
                                
                                <Redirect exact from="/" to="/admin/home" />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />

                </App>
            </Router>
        )
    }
}