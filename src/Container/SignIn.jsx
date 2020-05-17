import React from 'react';
import classnames from "classnames/bind";
import "../styles/App.css";
import styles from "../styles/App.module.scss";
import * as addLogin from "../actions/signin";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


const cx = classnames.bind(styles);

class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    handleThemeChange = e => {
        let { name, value } = e.target;
        this.setState({...this.state, [name]: value });
    };
    onSubmit = (event) => {
        event.preventDefault();
        const {login, password} = event.target;

        if (login && password) {
            this.props.signIn(this.state, this.props.history);
        } else {
            console.log("dont work");
        }
    };

    render() {
        return(
            <div
                className={cx("container",{
                    [`container-theme-light`]: true
                })}
            >
                <div className={cx("sign_in_up")}>Sing in</div>
                <form onSubmit={this.onSubmit}>

                    <div className={cx("input")}>
                        <div>
                            <input
                                type="text"
                                name="login"
                                id="light"
                                value={this.state.login}
                                onChange={this.handleThemeChange}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                id="dark"
                                value={this.state.password}
                                onChange={this.handleThemeChange}
                            />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div style={{fontSize: "20px"}}>
                    <Link to='/register/'>Registration</Link>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        signInResult: state.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (value, history) => dispatch(addLogin.signIn(value, history)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);