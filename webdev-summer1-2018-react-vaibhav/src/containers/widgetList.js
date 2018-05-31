import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/widget'
import '../Style1.css';

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
        <html>
        <head>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                  integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
                  crossOrigin="anonymous"/>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
                    integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
                    crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
                  integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
                  crossOrigin="anonymous"/>
        </head>
        <body>
        <div className="container pt-5">
            <div className="row flex-row-reverse pr-2 pb-3">
                <div className="d-flex float-right my-auto">

                    <label className="switch m-auto">
                        <input type="checkbox" onClick={this.props.preview}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="d-flex pr-2">
                    <button className="btn btn-success m-auto" hidden={this.props.previewMode}
                            onClick={this.saveToServer}>
                        Save
                    </button>
                </div>
            </div>
        </div>

        <div>
            {this.props.widgets.map(widget => (
                <WidgetContainer widget={widget}
                                 preview={this.props.previewMode}
                                 key={widget.widgetOrder}
                                 widgetLength={this.props.widgets.length}/>
            ))}
        </div>

        <div className="container pt-1">
            <div className="row flex-row-reverse pr-2 pb-3">
                <div className="row flex-row-reverse pr-2 pb-3">
                    <button className="btn btn-danger" onClick={this.props.addWidget}><i
                        className="fas fa-plus-square"></i>
                    </button>
                </div>
            </div>
        </div>
        </body>
        </html>
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