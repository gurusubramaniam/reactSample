//var React = require('react'),
//    ReactDOM = require('react-dom'),
//    MessageBox = require('./MessageBox'),
//    Feed = require('./Feeds/Feed');
//
//var reactComponent = React.render(<MessageBox url="metric"/> , document.getElementById('jsx'));
//ReactDOM.render(<Feed/>, document.getElementById('article'));

/* ES 6 */

import ReactDOM from 'react-dom';
//import MessageBox from './MessageBox';
import Feed from './Feeds/Feed';


//ReactDOM.render(<MessageBox url="metric"/> , document.getElementById('jsx'));
ReactDOM.render(<Feed/>, document.getElementById('article'));
