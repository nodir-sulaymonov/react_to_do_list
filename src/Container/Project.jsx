import React from 'react';
import {connect} from 'react-redux';
import * as contactAction from '../actions/addProject';
import styles from "../styles/Projects.module.scss";
import classnames from "classnames/bind";
import {Link} from "react-router-dom";


const cx = classnames.bind(styles);


class Project extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            tasksCount: ''
        }
    }

    componentDidMount() {
        this.props.fetchProjectList()
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProject({name: this.state.name});
    }

    listView(data, index) {
        return (
            <div className="list-projects">
                <div className="col-md-10">
                    <li key={index} className="list-li">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <Link to={`/projects/${data.id}/tasks/`}>Project name: {data.name}</Link>
                            </div>
                            <div>
                                Tasks: {data.tasksCount}
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <h1>Create projects</h1>
                <button style={{backgroundColor: '#61dafb'}}><Link to="/">Back</Link></button>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className={cx("form-add")}>
                            <label>Name projects:</label>
                            <input type="text" onChange={this.handleChange}
                                   value={this.state.name}/><br/>
                            <button type="submit">Add Project</button>
                        </div>
                    </form>
                    <ul className="list-group">
                        {
                            this.props.projects.map((contact, i) => this.listView(contact, i))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.contacts.projectList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: contact => dispatch(contactAction.createProject(contact)),
        fetchProjectList: () => dispatch(contactAction.fetchProjectList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);