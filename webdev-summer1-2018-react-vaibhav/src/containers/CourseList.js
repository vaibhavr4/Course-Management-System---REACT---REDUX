import React from 'react';
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService'

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
            });
    }

    courseRows() {
        var rows = this.state.courses.map((course) => {
            return <CourseRow key={course.id} course={course}
                              delete={this.deleteCourse}/>
        });
        return (
            rows
        )
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.findAllCourses(); });
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });
    }
    createCourse() {
        let newCourse;
        if (this.state.course === undefined || this.state.course.title === '') {
            newCourse = {title: 'New Course'};
        } else {
            newCourse = this.state.course;
        }
        newCourse.modified = new Date();
        newCourse.created = new Date();
        this.courseService
            .createCourse(newCourse)
            .then(() => {this.findAllCourses();});
        document.getElementById('titleFld').value = '';
    }

    // componentDidMount() {
    //     this.findAllCourses();
    // }
    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
                console.log(courses);
            });
    }

    render() {
        return (

            <div>
                <br/><br/>
                <h2>Course List</h2>
                <table className="table table-hover table-striped">
                    <tbody>
                    <tr>
                        <td><input className="form-control" id="titleFld"
                                   placeholder="Course Title"
                                   onChange={this.titleChanged}/></td>
                        <td><button className="btn btn-primary"
                                    onClick={this.createCourse}>Add</button></td>

                    </tr>
                    </tbody>

                </table>
                <table className="table table-hover table-striped">
                    <thead className="coursehead"><tr><th>Title</th>
                        <th>Owner</th>
                        <th>Last modified</th>
                        <th></th></tr>

                    </thead>
                    <tbody>
                    {this.courseRows()}
                </tbody>
                </table>
            </div>
        )
    }
}
export default CourseList;