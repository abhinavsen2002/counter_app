import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        tags: []        
    };

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);

    }

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>;
    }

    handleIncrement(){
        console.log('Increment Clicked');
        //this.state.count+=1;
        this.setState({count: this.state.count +1})
    }

    
    handleDecrement(){
        console.log('Decrement Clicked');
        //this.state.count+=1;
        this.setState({count: this.state.count -1})
    }

    render() { 
        let classes = this.dynamicClasses();
        //let classes = dynamicClasses();
        return (
        <div>            
            <span className = {classes}>{this.formatCount()}</span>
            <button 
                onClick = {() => this.handleIncrement()} 
                className = 'button1'
            >
                +
            </button>
            <button 
                onClick = {this.handleDecrement} 
                className = 'button1'
            >
                -
            </button>
            {this.renderTags()}
        </div>
        );
    }
    dynamicClasses() {
        let classes = 'test ';
        classes += this.state.count === 0 ? 'test1' : '';
        return classes;
    }

    formatCount(){
        return this.state.count === 0 ? 'Zero': this.state.count;
    }
}
 
export default Counter;

/*function dynamicClasses() {
    let classes = "test1 ";
    classes += "test";
    return classes;
}*/
