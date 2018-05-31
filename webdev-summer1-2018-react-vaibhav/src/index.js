import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './style.css';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from "./reducers/widgetReducer"
import {WidgetContainer} from './components/widget'

import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom'
import CourseEditor from "./containers/CourseEditor";
import ModuleEditor from "./containers/ModuleEditor";

// const Home = () => {
//     return(
//         <html>
//         <head>
//             <link rel="stylesheet" href="style.css" rel="stylesheet"/>
//
//         </head>
//         <body>
//
//         <div class="header">
//             <h1><font color="black">Course Management System</font></h1>
//         </div>
//
//         <div class="topnav">
//             <p align="center"><Link to='/courses'>Course Manager</Link></p>
//         </div>
//
//         </body>
//         </html>
//     );
// };
//
//
// const App = () => {
//     return(
//         <Router>
//             <div>
//                 <Route exact path='/'
//                        component={Home}/>
//                 <Route exact path='/courses'
//                        component={CourseManager}/>
//                 <Route exact path='/CourseEditor/:courseId'
//                        component={CourseEditor}/>
//                 <Route exact path='/CourseEditor/:courseId'
//                        component={ModuleEditor}/>
//
//
//
//             </div>
//         </Router>);
// };
//
//let store = createStore(widgetReducer)

let store = createStore(widgetReducer)

ReactDOM.render(
    <div>
        <CourseManager/>
    </div>,
    document.getElementById('root')
);