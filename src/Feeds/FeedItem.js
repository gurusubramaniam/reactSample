import { Component } from 'react';

export default class FeedItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                <span className="badge badge-success">{this.props.voteCount}</span>
                <h1>{this.props.title}</h1>
                <span>{this.props.description}</span>
                <span className="pull-right">
                    <button id="up" className="btn btn-sm btn-primary">&uarr;</button>
                    <button id="up" className="btn btn-sm btn-primary">&darr;</button>
                </span>
            </li>
        );
    }
}