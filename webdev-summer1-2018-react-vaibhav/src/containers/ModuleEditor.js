import React from 'react';
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'

export default class ModuleEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);
        this.state = {
            courseId: '', moduleId: ''
        };}



setCourseId(courseId) {
    this.setState
    ({courseId: courseId});
}
setModuleId(moduleId) {
    this.setState
    ({moduleId: moduleId});
}
    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);
        this.setModuleId(
            this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);
        this.setModuleId(
            newProps.match.params.moduleId);
    }

    render() {
        return (
            <div>
            <h1>Module Editor</h1>
        {this.state.courseId},
                {this.state.moduleId}
                <LessonTabs/>
                <br/>
                <TopicPills/>
                </div>
        )}}