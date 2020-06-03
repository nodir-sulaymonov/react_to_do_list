import React from "react";
import {Switch, Route} from 'react-router-dom'

import Projects from "../Container/Project";
import Tasks from "../Container/Task";
import Home from "../Container/Home";
import Login from "../Container/SignIn";
import Register from "../Container/SingUp";


const PublicRoute = ()=>{
        return (
            <div>
                <div style={{height: '100%'}}>
                    <div>
                        <Switch>
                            <Route exat path='/login/' component={Login} />
                            <Route exact path='/' component={Home} />
                            <Route exact path = '/register/' component={Register} />
                            <Route exact path='/projects/' component={Projects} />
                            <Route path='/projects/:projectId' children={<Tasks/>} />
                        </Switch>
                    </div>
                </div>
                )
            </div>
        );
}



export default PublicRoute;