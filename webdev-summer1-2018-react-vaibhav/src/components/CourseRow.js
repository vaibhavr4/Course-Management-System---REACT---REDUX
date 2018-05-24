import React from 'react';
import { Link } from 'react-router-dom'
import CourseService from '../services/CourseService'

class CourseRow extends React.Component {
    constructor(props) { super(props);
        this.courseService = CourseService.instance;}

    getAddTime(time){
        var currdate = new Date();
        var old = new Date(time).toDateString();
        var currtime = new Date(currdate).toDateString();
        if(old !== currtime) {
            return old;
        }
        else{
            return new Date(time).toLocaleTimeString();
        }
    }

    render() {
        return (
            <tr><td>
                <Link to=
                          {`/course/${this.props.course.id}`}>
                    {this.props.course.title}
                </Link>
                </td>
                <td><b>me</b></td>
                <td><b>{this.getAddTime(this.props.course.modified)}</b></td>
                <td><button className="btn btn-danger"
                            onClick={() => {this.props.delete(this.props.course.id)}}>
                    Delete
                </button></td>
            </tr>
        )
    }
}
export default CourseRow;