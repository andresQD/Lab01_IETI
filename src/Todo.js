import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                //Add your code here to represent a TODO
                <div>
                    <h3>Text: {this.props.text}</h3>
                    <h3>Priority: {this.props.priority}</h3>
                    <h3>Due Date: {String(this.props.dueDate)}</h3>
                </div>
                );
    }

}