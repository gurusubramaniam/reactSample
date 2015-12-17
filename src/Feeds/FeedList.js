import React, { Component } from 'react';
import FeedItem from "./FeedItem";

export default class FeedList extends Component {

    render() {
        var feedItem = this.props.items.map(function(item, index) {
            return <FeedItem key={index} title={item.title} description={item.description} voteCount={item.voteCount}/>
        });
        return(
            <ul className="list-group container">
                {feedItem}
            </ul>
        );
    }
}