import React, { Component } from 'react'
import { FormControl, Panel, Button } from 'react-bootstrap'
import Task from './tasks/Task'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [],
      completedView: false
    }
    this.deleteTask = this.deleteTask.bind(this)
    this.onCompleted = this.onCompleted.bind(this)
  }

  addTask (title) {
    let tasks = this.state.tasks
    let date = new Date()
    tasks.push({title: title, date: date, completed: false})
    this.setState({tasks: tasks})
    this.inputField.value = ''
  }

  deleteTask (id) {
    let tasks = this.state.tasks
    let index = tasks.findIndex(task => task.date === id)
    if (index > -1) {
      tasks.splice(index, 1)
      this.setState({tasks: tasks})
    }
  }

  onCompleted (id) {
    let tasks = this.state.tasks
    let task = tasks.find(task => task.date === id)
    if (task != null) {
      task.completed = !task.completed
      this.setState({tasks: tasks})
    }
  }

  toggleView () {
    let currentView = this.state.completedView
    this.setState({completedView: !currentView})
  }

  render () {
    return (
      <div style={{width: '400px', margin: 'auto', marginTop: '50px'}}>
        <Panel header={<h3>TODO App</h3>}>
          <FormControl
            type='text'
            placeholder='What to do'
            inputRef={text => { this.inputField = text }}
          />
          <Button className='pull-right' style={{marginTop: '10px'}} bsStyle='primary'
            onClick={() => this.addTask(this.inputField.value)}>ADD</Button>
          <br />
          <button onClick={() => this.toggleView()}>Toggle View</button>
          <h4>{this.state.completedView ? 'Completed Tasks' : 'Current Tasks'}</h4>
          { this.state.completedView
          ? <Task tasks={this.state.tasks.filter(task => task.completed === true)} onDelete={this.deleteTask} onCompleted={this.onCompleted} />
          : <Task tasks={this.state.tasks.filter(task => task.completed === false)} onDelete={this.deleteTask} onCompleted={this.onCompleted} />
          }

        </Panel>
      </div>
    )
  }
}

export default App
