import { Component } from 'react';
import ShowAddButton from './ShowAddButton';
import FeedForm from './FeedForm';
import FeedList from './FeedList';


export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.onToggleForm = this.onToggleForm.bind(this);
        var FEED_ITEMS =[
            {key: '1', title: 'realTimeData', description: 'sample', voteCount:60},
            {key: '2', title: 'REACT IS AWESOME', description: 'sample', voteCount:50},
            {key: '3', title: 'BIT CONFUSED NOW', description: 'sample', voteCount:20},
            {key: '4', title: 'ES6 man !!!! ', description: 'Es6 is super super cool with react i just love it ', voteCount:20},
        ];
        this.state = {items: FEED_ITEMS, formDisplayed: false}
    }
    onToggleForm() {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    }
    onNewItem(newItems) {
        var newItems = this.state.items.concat([newItems]);
        this.setState({
            item: newItems,
            formDisplayed: false
        });
    }
    render(){
         return (
                <div>
                    <div className="container">
                        <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>
                    </div>
                <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>
                 <FeedList items={this.state.items} onVote={this.onVote}/>
             </div>
         );
     }
}
