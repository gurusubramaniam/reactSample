import React, { Component } from 'react';

export default class FeedItem extends Component {
    constructor(props) {
        super(props);
        console.log("Feed ITEMS", props.prompt);
        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);
        this.vote = this.vote.bind(this);
    }
    vote(newCount) {
        this.props.onVote({
            key: this.props.prompt,
            title : this.props.title,
            description: this.props.description,
            voteCount: newCount
        });

    }
    voteUp() {
        var count = parseInt(this.props.voteCount);
        var newCount = count + 1;
        this.vote(newCount);
    }
    voteDown() {
        var count = parseInt(this.props.voteCount);
        var newCount = count - 1;
        this.vote(newCount);
    }
    render() {
        return (
            <li key={this.props.prompt} className="list-group-item">
                <span className="badge badge-success">{this.props.voteCount}</span>
                <h1>{this.props.title}</h1>
                <span>{this.props.description}</span>
                <span className="pull-right">
                    <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
                    <button id="up" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
                </span>
            </li>
        );
    }
}