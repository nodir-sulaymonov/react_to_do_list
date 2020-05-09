import React from 'react';
import logo from '../logo.svg';
import classnames from "classnames/bind";
import "../styles/App.css";
import styles from "../styles/App.module.scss";
import {connect} from 'react-redux';
import * as addPeople from '../actions/addPeople';
import {Link} from "react-router-dom";

const cx = classnames.bind(styles);

class App extends React.Component {
    state = {
        name: '',
        description: '',
        priority: '',
        data: [{name: 'Petr', description: 'Doctor', priority: '2'}],
        sortResult: true
    };

    handleSortName = () => {
        this.props.sortByName();
        // let newData = this.state.data.sort((a, b) => {
        //     let nameA = a.name.toUpperCase();
        //     let nameB = b.name.toUpperCase();
        //     if (nameA < nameB) {
        //         return -1;
        //     }
        //     if (nameA > nameB) {
        //         return 1;
        //     }
        // });
        // this.setState({
        //     sortResult: !this.state.sortResult,
        //     data: newData
        // })
    };
    handleSortPriority = () => {
        this.props.sortByPriority();
        let newData = this.state.data.sort((a, b) => {
            if (this.state.sortResult) {
                return a.priority - b.priority;
            }
        });
        this.setState({
            sortResult: !this.state.sortResult,
            data: newData
        })
    };
    handleThemeChange = e => {
        let { name, value } = e.target;
        this.setState({...this.state, [name]: value });
    };

    handle(name, description, priority, event) {
        event.preventDefault();
        this.props.createTask({name, description, priority});
        this.setState({
            name: '', priority:'', description:''
        })
        // this.addProductToBasket(name, description,priority);
    }

    // addProductToBasket(name, description,priority) {
    //     let newArray = this.state.data.slice();
    //     let itemToBeAdded = {
    //         name : name,
    //         description : description,
    //         priority:priority
    //     };
    //     newArray.push(itemToBeAdded);
    //
    //     this.setState( {...this.state, data:newArray});
    // }
    render() {
        return (
            <div
                className={cx("container",{
                    [`container-theme-light`]: true
                })}
            >
                <img src={logo} className="App-logo" alt="logo"/>
                <button style={{backgroundColor:'#61dafb'}}><Link to="/">Back</Link></button>
                <div className="section_btn">
                    <div>
                        <button className="btn_primary" onClick={this.handleSortName}> Sort by name</button>
                    </div>
                    <div>
                        <button className="btn_primary" onClick={this.handleSortPriority}> Sort by Priority</button>
                    </div>
                </div>
                <ul className={cx("list_container",)}>
                    {this.props.addList.people.map(function (item, i) {
                        return <li key={i}>
                                    <div className={cx("list_container_left",)}>
                                        <h3>{item.name} </h3><hr/>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className={cx("list_container_right",)}>
                                        {item.priority}
                                    </div>
                            </li>
                    })}
                </ul>
                <form onSubmit={ (event) => this.handle(this.state.name, this.state.description, this.state.priority, event)}>
                    <div className={cx("input")}>
                        <div>
                            <input
                                type="input"
                                name="name"
                                id="light"
                                value={this.state.name}
                                onChange={this.handleThemeChange}
                            />
                        </div>

                        <div>
                            <input
                                type="input"
                                name="description"
                                id="dark"
                                value={this.state.description}
                                onChange={this.handleThemeChange}
                            />
                        </div>
                        <div>
                            <input
                                type="input"
                                name="priority"
                                id="dark"
                                value={this.state.priority}
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
const mapStateToProps = state => ({
    addList: state.addList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: people => dispatch(addPeople.createTask(people)),
        sortByName: ()=>dispatch(addPeople.sortByName()),
        sortByPriority: ()=>dispatch(addPeople.sortByPriority())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
