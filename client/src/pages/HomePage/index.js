import React from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./style.css"
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import Register from "../../components/Register"
import Land from "../../components/Land";

function HomePage() {
    return (
        <div>
            <Nav />
            <Router>
                <div className="pageContainer">
                    <Switch>
                        <Route exact path="/">
                            <Land />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </div>
            </Router>

        </div>
    )
}

export default HomePage;