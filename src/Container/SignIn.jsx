import React from 'react';
import classnames from "classnames/bind";
import "../styles/App.css";
import styles from "../styles/App.module.scss";
import {connect} from 'react-redux';


const cx = classnames.bind(styles);

class SignIn extends React.Component{

    state = {
        login: '',
        password: ''
    }

    handleThemeChange = e => {
        let { name, value } = e.target;
        this.setState({...this.state, [name]: value });
    };
    render() {
        return(
            <div
                className={cx("container",{
                    [`container-theme-light`]: true
                })}
            >

                <div className={cx("sign_in_up")}>Sing in</div>
                <form onSubmit={ (event) => this.handle(this.state.login, this.state.password, event)}>

                    <div className={cx("input")}>
                        <div>
                            <input
                                type="input"
                                name="login"
                                id="light"
                                value={this.state.login}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <input
                                type="input"
                                name="password"
                                id="dark"
                                value={this.state.password}
                                onChange={this.handleThemeChange}
                            />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

export default SignIn;