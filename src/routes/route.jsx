import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Project from "../Container/Project";
import App from "../Container/App";
import Home from "../Container/Home";

const PublicRoute = ()=>{
    return(
        <div style={{height: '100%'}}>
            <BrowserRouter>
                     <Switch>
                         <Route exact path="/" component={Home}/>
                         <Route exact path="/projects" component={Project}/>
                         <Route  path="/projects/0" component={App}/>
                     </Switch>
            </BrowserRouter>
        </div>
    )
};

export default PublicRoute;