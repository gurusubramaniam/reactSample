import React, { Component } from 'react';

export default class ShowAddButton extends Component {
    render() {
        var classString, buttonText;

        if(this.props.displayed) {
            classString= 'btn btn-default btn-block';
            buttonText = 'Cancel';
        } else {
            classString= 'btn btn-success btn-block';
            buttonText = 'Add New topic';
        }
        return (
            <button className={classString} onClick={this.props.onToggleForm}>{buttonText}</button>
        );
    }
}