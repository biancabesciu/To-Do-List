import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import ToDoInput from "./components/toDoInput";
import ToDoItem from "./components/toDoItem";

class App extends Component {
    constructor(props) {
        super(props);

        this.state ={
            todos: [
                {id: 0, text:"Learn to make a React app"},
                {id: 1, text:"Make dinner"}
            ],
            nextId: 2
        };

        this.addToDo = this.addToDo.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
    }

    addToDo(toDoText) {
        let todos = this.state.todos.slice();

        todos.push({id: this.state.nextId, text: toDoText});

        this.setState ({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }

    removeToDo(id) {
        console.log("remove", id)
    }

    render() {
        return (
            <div className="App">
                <div className="to-do-wrapper">
                    <Header />
                    <ToDoInput toDoText=""
                               addToDo={this.addToDo}
                    />
                    <ul>
                        {
                            this.state.todos.map((todo) => {
                                return <ToDoItem todo={todo} key={todo.id} id={todo.id} removeToDo={this.removeToDo} />
                            })
                        }
                    </ul>
          </div>
      </div>
    );
  }
}

export default App;
