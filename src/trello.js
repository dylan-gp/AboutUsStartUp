import React, { Component } from 'react';
import './trello.css';

class Trello extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      doing: [],
      done: [],
      text: "",
      temp:"",
    }
  };
  
  
  render() {
    return (
      <div className="wrap">
      <div className="wrapTrello">
        <div className="todo section" onDrop={this.newTodo} onDragOver={ this.allowDrop }>
          <h1>To Do</h1>
          { this.state.todo.map((c)=><div className="card" draggable="true" onDragStart={ this.setTemp } onDragEnd={ this.removeTodo }><p>{c}</p></div>) }
        <input onChange={this.setText} id="newt" className="newtodo" type="text" ref="inputtodo"/>
        <button onClick={this.addTodo}>Add</button>
      </div>
        <div className="doing section" onDrop={this.newDoing} onDragOver={ this.allowDrop }>
          <h1>Doing</h1>
          { this.state.doing.map((c)=><div className="card" draggable="true" onDragStart={ this.setTemp } onDragEnd={ this.removeDoing }><p>{c}</p></div>) }
          <input onChange={this.setText} id="newt" className="newdoing" type="text" ref="inputdoing"/>
          <button onClick={this.addDoing}>Add</button>
        </div>
        <div className="done section" onDrop={this.newDone} onDragOver={ this.allowDrop }>
          <h1>Done</h1>
          { this.state.done.map((c)=><div className="card" draggable="true" onDragStart={ this.setTemp } onDragEnd={ this.removeDone }><p>{c}</p></div>) }
          <input onChange={this.setText} id="newt" className="newdone" type="text" ref="inputdone"/>
          <button onClick={this.addDone}>Add</button>
        </div>
        <div className="delete section" onDragOver={ this.allowDrop }>
          <h1>Delete</h1>
        </div>
      </div>
      
      </div>
    );
  }
  setText = (evt) => {
    this.setState({
      text: evt.target.value
    });
  }
  setTemp = (evt) => {
    this.setState({
      temp: evt.target.textContent
    });
  }
  allowDrop(evt) {
    evt.preventDefault();
  }
  


  newTodo = (evt) => {
    this.state.todo.push(this.state.temp);
    this.forceUpdate();
  }
  newDoing = (evt) => {
    this.state.doing.push(this.state.temp);
    this.forceUpdate();
  }
  newDone = (evt) => {
    this.state.done.push(this.state.temp);
    this.forceUpdate();
  }



  removeTodo = (evt) => {
    const array = this.state.todo.filter(function(c) {
      return c !== evt.target.textContent;
    });
    this.setState({todo:array});
  }
  removeDoing = (evt) => {
    const array = this.state.doing.filter(function(c) {
      return c !== evt.target.textContent;
    });
    this.setState({doing:array});
  }
  removeDone = (evt) => {
    const array = this.state.done.filter(function(c) {
      return c !== evt.target.textContent;
    });
    this.setState({done:array});
  }
  
  
  addTodo = () => {
    this.state.todo.push(this.state.text);
    this.refs.inputtodo.value = '';
    this.setState({text:""});
  }
  addDoing = () => {
    this.state.doing.push(this.state.text);
    this.refs.inputdoing.value = '';
    this.setState({text:""});
  }
  addDone = () => {
    this.state.done.push(this.state.text);
    this.refs.inputdone.value = '';
    this.setState({text:""});
  }
}


export default Trello;