import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';
import ModuleEditor from './ModuleEditor'
import {BrowserRouter as Router,Route} from 'react-router-dom'

export default class ModuleList
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId:'',
            module: { title: '' },
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678},]};

        this.deleteModule = this.deleteModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.moduleService = ModuleService.instance;

    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        this.moduleService
            .createModule
            (this.state.courseId,
                this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId);
            })
    }

    renderListOfModules() {
        let modules = this.state.modules
            .map(function(module){
                return <ModuleListItem
                    module={module} title={module.title} key={module.id}
                    ></ModuleListItem>
            });
        return modules;}

    renderModules() {
        let modules = this.state.modules.map((module) => {
            return (
                <ModuleListItem module={module} key={module.id}
                                delete={this.deleteModule}/>
            )});
        return (<ul className="list-group"> {modules}</ul>)
    }

    render() { return (
        <Router>
        <div className="row">
            <div className="col-5">

            <h4>Modules for courseId:
                {this.state.courseId}</h4>
            <input className="form-control"
                   onChange={this.titleChanged}
                   value={this.state.module.title}
                   placeholder="title"/>
            <button
                className="btn btn-primary btn-block"
                onClick={this.createModule}>
                <i className=
                       "fa fa-plus"></i>
            </button>
            <br/>

            {this.renderModules()}

        </div>
                <div className="col-7">
                    <Route path="/course/:courseId/module/:moduleId"
                           component={ModuleEditor}/></div>
            </div>
        </Router>
            );}}