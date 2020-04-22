import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component{
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/projects">
                            <h2>
                                Projects
                            </h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/0">
                            <h2>
                                Tasks
                            </h2>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home;