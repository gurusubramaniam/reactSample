import React, { Component } from 'react';

export default class FeedForm extends Component {
    constructor() {
        super();
        this.handleForm = this.handleForm.bind(this);
    }
    handleForm(e) {
        e.preventDefault();
        var newItem = {
            title: this.refs.title.value,
            description: this.refs.desc.value,
            voteCount: 0
        };
        this.refs.feedForm.reset();
        this.props.onNewItem(newItem);
    }
    render() {
        var display = this.props.displayed? 'block' : 'none';
        var styles = {
            display: display
        };
        return(
            <form ref="feedForm" style={styles} id="feedForm" onSubmit={this.handleForm}>
                <div clasName="form-group">
                    <input ref="title" type = "text" placeholder="Title" className="form-control"/>
                    <input ref="desc" type = "text" placeholder="Description" className="form-control"/>
                    <button className="addTopic" className="btn btn-primary btn-block">Add</button>
                </div>
            </form>
        );
    }
}