import React from 'react';
import {Link} from 'react-router-dom';

export default class LessonTabItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="nav-item" style={{"border": "1px solid #ddd", "borderRadius": "3px"}}>
                <Link className="nav-link"
                      to={`/course/`+ this.props.courseId+ `/module/`+this.props.moduleId}
                      role="pill"
                      data-toggle="pill">
                    <div className='row'>
                        <div className='col-8'>
                            {this.props.lesson.title}
                        </div>
                        <div className='col-1'>
                            <button onClick={() => {this.props.delete(this.props.lesson.id)}}
                                    className='btn btn-danger btn-sm'>
                                <i className="fa fa-trash"/>
                            </button>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}