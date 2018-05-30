import React, {Component} from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import * as constants from '../constants'


///////////////////////////////////////// Heading //////////////////////////////////////////////////////////////////////
const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, headingNameChanged}) => {
  let selectElem
  let inputElem

    let nameElem
  return(
    <div>
      <div hidden={preview}>

          <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                 value={widget.text}
                 ref={node => inputElem = node}/> <br/> <br/>
          <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                  value={widget.size}
                  ref={node => selectElem = node}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
          </select> <br/> <br/>
          <input onChange={() => headingNameChanged(widget.id, nameElem.value)}
                 value={widget.name}
                 ref={node => nameElem = node}/> <br/> <br/>
          <div className="d-flex float-right my-auto pr-2">
          <h3>Preview</h3>
          </div>
      </div>
      {widget.size == 1 && <h1>{widget.text}</h1>}
      {widget.size == 2 && <h2>{widget.text}</h2>}
      {widget.size == 3 && <h3>{widget.text}</h3>}
    </div>
  )
}
const dispathToPropsMapper = dispatch => ({
  headingTextChanged: (widgetId, newText) =>
    actions.headingTextChanged(dispatch, widgetId, newText),
    headingNameChanged: (widgetId, newName) =>
        actions.headingNameChanged(dispatch, widgetId, newName),
  headingSizeChanged: (widgetId, newSize) =>
    actions.headingSizeChanged(dispatch, widgetId, newSize)
})
const stateToPropsMapper = state => ({
  preview: state.preview
})
const HeadingContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Heading)

///////////////////////////////////////// Heading End //////////////////////////////////////////////////////////////////

//////////////////////////////////////// Paragraph /////////////////////////////////////////////////////////////////////
const Paragraph = ({widget, preview, paraTextChanged, paraNameChanged}) => {
    let inputElem
    let nameElem
    return(
        <div>
    <div hidden={preview}>
        <textarea onChange={() => paraTextChanged(widget.id, inputElem.value)}
                  ref={node => inputElem= node}
                  value={widget.text}>
    </textarea> <br/> <br/>
        <input onChange={() => paraNameChanged(widget.id, nameElem.value)}
               value={widget.name}
               ref={node => nameElem = node}/> <br/> <br/>
        <h3>Paragraph Preview</h3>
    </div>
            <p> {widget.text} </p>

        </div>
    )
}

const dispatchToPropsMapperPara = dispatch =>
    ({
        paraTextChanged: (widgetId, newText) =>
            actions.paraTextChanged(dispatch,widgetId, newText),
        paraNameChanged: (widgetId, newName) =>
            actions.paraNameChanged(dispatch,widgetId, newName)
    })

const stateToPropsMapperPara = state => ({
    preview: state.preview
})

const ParaContainer = connect(stateToPropsMapperPara,dispatchToPropsMapperPara)(Paragraph)

///////////////////////////////////////// Paragraph End ////////////////////////////////////////////////////////////////

//////////////////////////////////////// Image /////////////////////////////////////////////////////////////////////////
const Image = ({widget, preview, imageTextChanged, imageNameChanged}) => {
    let inputElem3
    let nameElem
    return(
        <div>
        <div hidden={preview}>
            <input onChange={() => imageTextChanged(widget.id, inputElem3.value)}
                   ref={node3 => inputElem3= node3}
                   value={widget.text}
                   /> <br/> <br/>
            <input onChange={() => imageNameChanged(widget.id, nameElem.value)}
                   value={widget.name}
                   ref={node => nameElem = node}/> <br/> <br/>

    <h3>Image Preview</h3>
        </div>
            <img src={widget.text} alt={widget.text} height="42" width="42"/>
        </div>

    )
}

const stateToPropsMapperImage = state => ({
    preview: state.preview
})

const dispatchToPropsMapperImage = dispatch =>
    ({
        imageTextChanged: (widgetId, imageText) =>
            actions.imageTextChanged(dispatch,widgetId, imageText),
        imageNameChanged: (widgetId, imageName) =>
            actions.imageNameChanged(dispatch,widgetId, imageName)
    })

const ImageContainer = connect(stateToPropsMapperImage,dispatchToPropsMapperImage)(Image)

//////////////////////////////////////// Image End /////////////////////////////////////////////////////////////////////

///////////////////////////////////////// List /////////////////////////////////////////////////////////////////////////
const List = ({widget, preview, listTextChanged, listTypeChanged, listNameChanged}) =>{
    let selectElem2
    let inputElem2
    let nameElem
   return(
       <div>
    <div hidden={preview}>
    <h2>List {widget.listType}</h2>
    <textarea onChange={() => listTextChanged(widget.id, inputElem2.value)}
           ref={node2 => inputElem2= node2}
           value={widget.text}  /> <br/> <br/>

        <select onChange={() => listTypeChanged(widget.id, selectElem2.value)}
            ref={node2 => selectElem2=node2}
                value={widget.listType}>
            <option value="1">Ordered List</option>
        <option value="2">Unordered List</option>
        </select> <br/> <br/>

        <input onChange={() => listNameChanged(widget.id, nameElem.value)}
               value={widget.name}
               ref={node => nameElem = node}/> <br/> <br/>


    <h3> Preview</h3>
</div>
    {widget.listType== 1 && <div>{textToOrderedList(widget.text)} </div>}
    {widget.listType== 2 && <div> {textToUnorderedList(widget.text)}</div>}
    </div>
   )
}


const stateToPropsMapperList = state => ({
    preview: state.preview
})

const dispatchToPropsMapperList = dispatch =>
    ({
        listTextChanged: (widgetId, newListText) =>
            actions.listTextChanged(dispatch,widgetId,newListText),
        listNameChanged: (widgetId, newListName) =>
            actions.listNameChanged(dispatch,widgetId,newListName),
        listTypeChanged: (widgetId,listType) =>
            actions.listTypeChanged(dispatch,widgetId,listType)
    })


const ListContainer = connect(stateToPropsMapperList,dispatchToPropsMapperList)(List)

const textToOrderedList = (text) =>
{
        let stringArray = text.split("\n");
        return (

            <ol className="list-group" >
                {stringArray.map(line => ( <li> {line} </li>))}
            </ol>
        )
}

const textToUnorderedList = (text) =>
{
    let stringArray = text.split("\n");
    return (

        <ul className="list-group" >
            {stringArray.map(line => ( <li> {line} </li>))}
        </ul>
    )
}


///////////////////////////////////////// List End /////////////////////////////////////////////////////////////////////


//////////////////////////////////////// Link /////////////////////////////////////////////////////////////////////////
const Link = ({widget, preview, linkTextChanged, linkNameChanged, linkDispChanged}) => {
    let inputElem3
    let nameElem
    let dispName
    return(
        <div>
            <div hidden={preview}>
                <input onChange={() => linkTextChanged(widget.id, inputElem3.value)}
                       ref={node3 => inputElem3= node3}
                       value={widget.text}
                /> <br/> <br/>
                <input onChange={() => linkDispChanged(widget.id, dispName.value)}
                       ref={node3 => dispName= node3}
                       value={widget.linkName}
                /> <br/> <br/>
                <input onChange={() => linkNameChanged(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}/> <br/> <br/>

                <h3>Link Preview</h3>
            </div>
            <a href={widget.text}>{widget.linkName}</a>
        </div>

    )
}

const stateToPropsMapperLink = state => ({
    preview: state.preview
})

const dispatchToPropsMapperLink = dispatch =>
    ({
        linkTextChanged: (widgetId, linkText) =>
            actions.linkTextChanged(dispatch,widgetId, linkText),
        linkDispChanged: (widgetId, linkDispText) =>
            actions.linkDispChanged(dispatch,widgetId, linkDispText),
        linkNameChanged: (widgetId, linkName) =>
            actions.linkNameChanged(dispatch,widgetId, linkName)
    })

const LinkContainer = connect(stateToPropsMapperLink,dispatchToPropsMapperLink)(Link)

//////////////////////////////////////// Link End /////////////////////////////////////////////////////////////////////


const Widget = ({widget, preview, dispatch,widgetLength}) => {
  let selectElement
  return(
    <li>
      <div hidden={preview}>
      {widget.id} {widget.widgetType}

      <select value={widget.widgetType}
              onChange={e =>
          dispatch({
            type: 'SELECT_WIDGET_TYPE',
            id: widget.id,
            widgetType: selectElement.value
          })} ref={node => selectElement = node}>
        <option>Heading</option>
        <option>Paragraph</option>
        <option>List</option>
        <option>Image</option>
          <option>Link</option>
      </select>

          <button onClick={e => (
              dispatch({type: constants.DECREASE_ORDER_WIDGET, widgetOrder: widget.widgetOrder})
          )} disabled={(widget.widgetOrder == 1)} className="btn btn-danger my-2 my-sm-0" type="button">Up</button>

          <button onClick={e => (
              dispatch({type: constants.INCREASE_ORDER_WIDGET, widgetOrder: widget.widgetOrder})
          )}  disabled={(widget.widgetOrder==widgetLength)} className="btn btn-danger my-2 my-sm-0" type="button">Down</button>

      <button onClick={e => (
        dispatch({type: DELETE_WIDGET, id: widget.id})
      )}>Delete</button>
      </div>
      <div>
        {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
        {widget.widgetType==='Paragraph' && <ParaContainer widget={widget}/>}
        {widget.widgetType==='List' && <ListContainer widget={widget}/>}
        {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
          {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}
      </div>
    </li>
  )
}
const WidgetContainer = connect(state => ({
  preview: state.preview
}))(Widget)
export default WidgetContainer

