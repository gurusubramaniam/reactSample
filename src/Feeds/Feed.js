import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton';
import FeedForm from './FeedForm';
import FeedList from './FeedList';
import _ from 'lodash';


export default class Feed extends Component {
    constructor(props, state) {
        super(props, state);
        this.onToggleForm = this.onToggleForm.bind(this);
        this.onNewItem = this.onNewItem.bind(this);
        this.onVote = this.onVote.bind(this);
        var FEED_ITEMS =[
            {key: '1', title: 'realTimeData', description: 'sample', voteCount:60},
            {key: '2', title: 'REACT IS AWESOME', description: 'sample', voteCount:50},
            {key: '3', title: 'BIT CONFUSED NOW', description: 'sample', voteCount:20},
            {key: '4', title: 'ES6 man !!!! ', description: 'Es6 is super super cool with react i just love it ', voteCount:20}
        ];
        var sorted = _.sortByOrder(FEED_ITEMS,['voteCount'],['dsc']);
        this.state = {items: sorted, formDisplayed: false}
    }
    onToggleForm() {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    }
    onNewItem(newItems) {
        var newArticles = this.state.items.concat([newItems]);
        var sorted = _.sortByOrder(newArticles, ['voteCount'], ['dsc']);
        this.setState({
            items: sorted,
            formDisplayed: false,
            key: this.state.items.length
        });
    }
    //Need to revisit this logic since its too complicated
    onVote(item) {
        var items = _.uniq(this.state.items);
        var index = _.findIndex(items, function(feedItems){
            return feedItems.key === item.key;
        });
        var oldObj = items[index];
        var newItems = _.pull(items, oldObj);

        newItems.push(item);
        var sorted = _.sortByOrder(newItems,['voteCount'],['dsc']);
        this.setState({
            items: sorted
        });
    }
    render(){
        var createNewStyle= {
            paddingBottom: "20px"
        };
         return (
                <div>
                    <div className="container" style={createNewStyle}>
                        <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>
                        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>
                    </div>

                 <FeedList items={this.state.items} onVote={this.onVote}/>
             </div>
         );
     }
}
