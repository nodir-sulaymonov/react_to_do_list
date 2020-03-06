import React from 'react';
import logo from './logo.svg';
import classnames from "classnames/bind";
import "./App.css";
import styles from "./App.module.scss";

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
        let newData = this.state.data.sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });
        this.setState({
            sortResult: !this.state.sortResult,
            data: newData
        })
    };
    handleSortPriority = () => {
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
        this.setState({ [name]: value });
    };

    handle(name, description, priority) {
        this.addProductToBasket(name, description,priority);
    }

    addProductToBasket(name, description,priority) {
        let newArray = this.state.data.slice();
        let itemToBeAdded = {
            name : name,
            description : description,
            priority:priority
        };
        newArray.push(itemToBeAdded);
        console.log(newArray);
        this.setState( {data:[newArray]})
    }
    render() {
        return (
            <div
                className={cx("container",{
                    [`container-theme-light`]: true
                })}
            >
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="section_btn">
                    <div>
                        <button className="btn_primary" onClick={this.handleSortName}> Sort by name</button>
                    </div>
                    <div>
                        <button className="btn_primary" onClick={this.handleSortPriority}> Sort by Priority</button>
                    </div>
                </div>
                <ul className={cx("list_container",)}>
                    {this.state.data.map(function (item, i) {
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
                <form onSubmit={ () => this.handle(this.state.name, this.state.description, this.state.priority)}>
                    <div className={cx("input")}>
                        <div>
                            <input
                                type="input"
                                name="name"
                                id="light"
                                value={this.state.data.name}
                                onChange={this.handleThemeChange}
                            />
                        </div>

                        <div>
                            <input
                                type="input"
                                name="description"
                                id="dark"
                                value={this.state.value}
                                onChange={this.handleThemeChange}
                            />
                        </div>
                        <div>
                            <input
                                type="input"
                                name="priority"
                                id="dark"
                                value={this.state.value}
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

export default App;
