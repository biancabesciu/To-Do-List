import React, { Component } from 'react';
import './toDoInput.css';

export default class ToDoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

    handleChange(e) {
        this.setState ({
            userInput: e.target.value
        })
    }

    addToDo(input) {
        //ensure the to do text isn't empty
        if(input.length > 0) {
            this.props.addToDo(input);
            this.setState ({
                userInput: ''
            })
        }
    }


    render() {
        return(
            <div>
                <input type="text" value={this.state.userInput} onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={ () => this.addToDo(this.state.userInput) }> Submit</button>
            </div>
        );
    }
}