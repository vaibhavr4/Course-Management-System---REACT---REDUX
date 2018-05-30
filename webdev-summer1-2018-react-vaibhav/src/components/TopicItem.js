import React from 'react';
import {NavLink} from 'react-router-dom';

export default class TopicItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="nav-item active">
                <NavLink className="nav-link" activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',

                }} exact to={`/topic/${this.props.topic.id}`}
                >
                    <div className='row'>
                        <div className='col-8'>
                            {this.props.topic.title}
                        </div>
                        <div className='col-1'>
                            <button onClick={() => {this.props.delete(this.props.topic.id)}}
                                    className='btn btn-danger btn-sm'>
                                <i className="fa fa-minus"/>
                            </button>
                        </div>
                    </div>
                </NavLink>
            </li>
        )
    }
}