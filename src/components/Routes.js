import React from "react";
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Answer from "../routes/Answer";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const AppRouter = ({isLoggedIn, userAuth}) => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/">
                    {isLoggedIn ? <Redirect to={{
                                            pathname: `/${userAuth}`
                                            }} /> 
                    : <Home />}
                </Route>
                <Route exact path="/auth">
                    {isLoggedIn ? <Redirect to={{
                                            pathname: `/${userAuth}`
                                            }} /> 
                    : <Auth />}
                </Route>
                <Route exact path="/:id">
                    <Profile userAuth={userAuth}/>
                </Route>
                <Route exact path="/:id/:questionid">
                    <Answer userAuth={userAuth}/>
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default AppRouter;