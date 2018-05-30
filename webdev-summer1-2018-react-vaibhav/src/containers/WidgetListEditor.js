import React from 'react';
import TopicPill from './TopicPill';
import Topicitem from '../components/TopicItem'
import WidgetListContainer from './widgetList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {widgetReducer} from "../reducers/widgetReducer"

let store = createStore(widgetReducer);

export default class WidgetListEditor
    extends React.Component {

    constructor(props) {
        super(props)

        this.state = {topicId: '',
            topic: {}};

        this.setTopicId = this.setTopicId.bind(this);
    }

    componentDidMount() {
        this.setTopicId
        (this.props.match.params.topicId);
    }
    componentWillReceiveProps(newProps) {
        this.setTopicId
        (newProps.match.params.topicId);
    }

    setTopicId(topicId) {
        this.setState({topicId: topicId});
    }


    render() {
        return(

            <div>
                <WidgetListContainer topicId={this.state.topicId}/>

            </div>

        );}}
