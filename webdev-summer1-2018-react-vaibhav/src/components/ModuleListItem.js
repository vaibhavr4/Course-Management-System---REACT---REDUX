import React from 'react';
import ModuleList from '../containers/ModuleList'
import { NavLink } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
    <tr>
            <td>
                <NavLink activeStyle={{
                    fontWeight: 'bold',
                    color: '#D3CD4A',

                }} exact to={`/course/
                ${this.props.courseId}/module/${this.props.module.id}`}
                         >
                    {this.props.module.title}
                </NavLink>
                <span className="float-right">
                <button className="btn btn-danger" onClick={() =>
                {this.props.delete
                (this.props.module.id)}}>
                    <span className="-align-center">  <i className="fa fa-trash fa-2x"></i></span>
                </button>

                </span>
            </td>
    </tr>
        );}}