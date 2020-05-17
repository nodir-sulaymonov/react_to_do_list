import React from 'react';

import classnames from "classnames/bind";

import styles from "../styles/App.module.scss";
import {withRouter} from "react-router-dom";




const cx = classnames.bind(styles);




class Home extends React.Component{
constructor(props) {
    super(props);
}
    render() {
        return(
            <div className={cx("container",{
                [`container-theme-light`]: true
            })}>
                    <button
                        type="submit"
                        onClick={() => {
                            this.props.history.push('/projects/')
                        }}
                    >Projects</button>

            </div>
        )
    }
}

export default withRouter(Home);