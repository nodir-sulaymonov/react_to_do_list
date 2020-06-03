import React from 'react';
import logo from '../logo.svg';
import classnames from "classnames/bind";
import "../styles/App.css";
import styles from "../styles/App.module.scss";
import {connect} from 'react-redux';
import * as addTask from '../actions/addTask';
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

const cx = classnames.bind(styles);

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            priority: '',
            id: this.props.match.params.projectId,
            sortResult: true
        };
    }

    handleSortName = () => {
        this.props.sortByName();
    };

    componentDidMount() {
        this.props.fetchTaskList({projectId: this.props.match.params.projectId})
    }

    handleSortPriority = () => {
        this.props.sortByPriority();
    };

    handleChange = e => {
        let {name, value} = e.target;

        this.setState({...this.state, [name]: value});
    };

    handleClick(name, description, priority, event, projectId) {
        event.preventDefault();
        this.props.createTask({task: {name, description, priority}, projectId});
        this.setState({
            name: '', priority: '', description: ''
        })
    }

    render() {
        return (
            <div
                className={cx("container", {
                    [`container-theme-light`]: true
                })}
            >
                <img src={logo} className="App-logo" alt="logo"/>
                <button style={{backgroundColor: '#61dafb'}}><Link to="/projects">Back</Link></button>
                <div className="section_btn">
                    <div>
                        <button className="btn_primary" onClick={this.handleSortName}> Sort by name</button>
                    </div>
                    <div>
                        <button className="btn_primary" onClick={this.handleSortPriority}> Sort by Priority</button>
                    </div>
                </div>
                <div className={cx("list_container",)}>
                        {this.props.tasks.map(function (item, i) {
                            return <li key={i}>
                                <div className={cx("list_container_left",)}>
                                    <h3>{item.name} </h3>
                                    <hr style={{width:"100%"}}/>
                                    <p>{item.description}</p>
                                </div>
                                <div className={cx("list_container_right",)}>
                                    {item.priority}
                                </div>
                            </li>
                        })}
                </div>
                <form
                    onSubmit={(event) => this.handleClick(this.state.name, this.state.description, this.state.priority, event, this.state.id)}>
                    <div className={cx("input")}>
                        <div>
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                id="light"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <input
                                placeholder="description"
                                type="text"
                                name="description"
                                id="dark"
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="priority"
                                placeholder="priority"
                                value={this.state.priority}
                                onChange={(event) => {
                                    this.setState({
                                        priority: parseInt(event.target.value) || 0
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <button type="submit">Add task</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasksResult.taskList
});

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: payload => dispatch(addTask.createTask(payload)),
        sortByName: () => dispatch(addTask.sortByName()),
        sortByPriority: () => dispatch(addTask.sortByPriority()),
        fetchTaskList: (payload) => dispatch(addTask.fetchTaskList(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Task));
