import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                //Add your code here to represent a TODO
                <div>
                    <h2>Text: {this.props.text}</h2>
                    <h2>Priority: {this.props.priority}</h2>
                    <h2>Due Date: {this.props.dueDate.toString()}</h2>
                </div>
                );
    }

}