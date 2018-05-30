import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/widget'

class WidgetList extends Component {
  constructor(props) {
    super(props)
      this.state = {topicId: ''};
      this.selectTopic = this.selectTopic.bind(this);
      this.saveToServer = this.saveToServer.bind(this);
  }

    componentDidMount() {
        this.selectTopic
        (this.props.topicId);
    }
    componentWillReceiveProps(newProps) {
        this.selectTopic
        (newProps.topicId);
        if(this.props.topicId!=newProps.topicId){
            this.props.findAllWidgetsForTopic(newProps.topicId);
        }
    }

    selectTopic(topicId) {
        this.setState({topicId: topicId});
    }

    saveToServer(){

        this.props.save(this.state.topicId);
    }
  render() {
    return(
      <div>
        <h1>Widget List {this.props.widgets.length}</h1>

        <button className="btn btn-success" hidden={this.props.previewMode} onClick={this.saveToServer}>
          Save
        </button>
        <button onClick={this.props.preview}>
          Preview
        </button>

        <div>
          {this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.widgetOrder}
                             widgetLength ={this.props.widgets.length}  />
          ))}
        </div>
        <button onClick={this.props.addWidget}>Add widget
        </button>
      </div>
    )
  }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
})

const dispatcherToPropsMapper
  = dispatch => ({
    findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch,topicId),
    addWidget: () => actions.addWidget(dispatch),
    save: (topicId) => actions.save(dispatch,topicId),
    preview: () => actions.preview(dispatch)
})
const WidgetListContainer = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default WidgetListContainer