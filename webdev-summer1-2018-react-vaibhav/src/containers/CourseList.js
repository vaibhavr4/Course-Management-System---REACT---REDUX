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
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    }

    componentDidMount() {
        this.findAllCourses();
    }
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
                <h2>Course List</h2>
                <table className="table">
                    <thead><tr><th>Title</th></tr>
                    <tr>
                        <th><input className="form-control" id="titleFld"
                                   placeholder="cs101"
                                   onChange={this.titleChanged}/></th>
                        <th><button className="btn btn-primary"
                                    onClick={this.createCourse}>Add</button></th>

                    </tr>
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