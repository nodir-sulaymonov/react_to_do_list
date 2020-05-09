import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Project from "../Container/Project";
import App from "../Container/App";
import Home from "../Container/Home";
import SignIn from "../Container/SignIn";
import SignUp from "../Container/SingUp";

const PublicRoute = ()=>{
    return(
        <div style={{height: '100%'}}>
            <BrowserRouter>
                     <Switch>
                         <Route exact path="/" component={Home}/>
                         <Route exact path="/projects" component={Project}/>
                         <Route exact path="/signin" component={SignIn}/>
                         <Route exact path="/signup" component={SignUp}/>
                         <Route  path="/projects/0" component={App}/>
                     </Switch>
            </BrowserRouter>
        </div>
    )
};

export default PublicRoute;