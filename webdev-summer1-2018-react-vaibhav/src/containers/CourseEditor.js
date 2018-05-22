import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import ModuleEditor from './ModuleEditor'

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {courseId: ''};
    }

    // componentDidMount() {
    //     this.selectCourse(this.props.match.params.courseId);
    // }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }


    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    render() { return(
        <div>
            <h3>Course {this.state.courseId}</h3>
        <div className="row">
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
