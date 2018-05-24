import React from 'react'
import ModuleList from './ModuleList'
import CourseService from "../services/CourseService";

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {courseId: '', course: ''};
        this.courseService = CourseService.instance;
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.getCourseById(this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }


    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
        this.getCourseById(newProps.match.params.courseId);
    }

    getCourseById(courseId) {
        this.courseService
            .getCourseById(courseId)
            .then((course) => {
                this.setState({course: course});
            });
    }
    renderTitle() {
        let title = null;
        if(this.state.course.title) {

            return this.state.course.title;

        }
        return (
            title
        )
    }

    render() { return(
        <div>
            <div className="table table-hover table-striped"><tbody><tr><td>  <h3>Course {this.renderTitle()}</h3></td></tr></tbody></div>
        <div>
            {/*<div className="col-4">*/}
                <ModuleList courseId={this.state.courseId}/>
            {/*</div>*/}
            {/*<div className="col-8">*/}
                {/*<LessonTabs/>*/}
                {/*<br/>*/}
                {/*<TopicPills/>*/}
            {/*</div>*/}
        </div>
        </div>
    );}}
