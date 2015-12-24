import React, { Component } from 'react';
import FeedItem from "./FeedItem";

export default class FeedList extends Component {
    render() {
        var onClickHandler = this.props.onVote;
        var feedItem = this.props.items.map(function(item) {
            console.log("Feed List Value ", item.key, item.voteCount);
            return <FeedItem
                prompt={item.key}
                title={item.title}
                description={item.description}
                voteCount={item.voteCount}
                onVote={onClickHandler}
            />
        });
        return(
            <ul className="list-group container">
                {feedItem}
            </ul>
        );
    }
}