import React from 'react';
import {connect} from 'react-redux';
import * as contactAction from '../actions/addProject';
import styles from "../styles/Projects.module.scss";
import classnames from "classnames/bind";
import {Link} from "react-router-dom";


const cx = classnames.bind(styles);



class Project extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            id: ''
        }
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let contact = {
            name: this.state.name,
            id: this.props.contacts.length
        };
        this.setState({
            name: '',
            id: ''
        });
        this.props.createProject(contact, this.props.history);
    }

    listView(data, index){
        return (
            <div className="list-projects">
                <div className="col-md-10">
                    <li key={index} className="list-li">
                        <Link to={`/projects/${data.id}`}>{data.name}</Link>
                    </li>
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.deleteContact(e, index)}>
                        Remove
                    </button>
                </div>
            </div>
        )
    }

    deleteContact(e, index){
        e.preventDefault();
        this.props.deleteProject(index, this.props.history);
    }
    render() {
        return (
            <div className="container">
                <h1>Create projects</h1>
                <button style={{backgroundColor:'#61dafb'}}><Link to="/">Back</Link></button>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className={cx("form-add")}>
                            <label>Name projects:</label>
                            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    { <ul className="list-group">
                        {this.props.contacts.map((contact, i) => this.listView(contact, i))}
                    </ul> }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: contact => dispatch(contactAction.createProject(contact, this.props.history)),
        deleteProject: index =>dispatch(contactAction.deleteProject(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);