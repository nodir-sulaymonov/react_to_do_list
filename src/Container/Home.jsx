import React from 'react';

import classnames from "classnames/bind";
import styled from "styled-components";
import styles from "../styles/App.module.scss";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";


const cx = classnames.bind(styles);


const ComponentsWrapper = styled.div`
    background-color: #C5FF33;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
`;

class Home extends React.Component{

    render() {
        return(
            <div className={cx("container",{
                [`container-theme-light`]: true
            })}>
             <ComponentsWrapper>
                    <Link
                        type="submit"
                        onClick={() => {
                            this.props.history.push('/projects/')
                        }}
                    >Projects</Link>
             </ComponentsWrapper>
            </div>
        )
    }
}

export default withRouter(Home);