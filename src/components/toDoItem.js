import React, { Component } from 'react';
import './toDoItem.css';

export default class ToDoItem extends Component {
    removeToDo(id) {
        this.props.removeToDo(id);
    }

    render() {
        return(
            <div className="to-do-wrapper-item">
                <button className="remove-to-do"
                        onClick={(e) => this.removeToDo(this.props.id)}
                >remove</button>{this.props.todo.text}
            </div>
        )
    }
}