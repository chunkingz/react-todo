import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function Item ({title, date, completed, onDelete, onCompleted}) {
  return (
    <Row>
      <Col xs={9} >
        <h5> <input type='checkbox' value='done' readOnly checked={completed} onClick={() => onCompleted(date)} /> {title}</h5>
        {date.toString()}
      </Col>
      <Col xs={3}>
        <Button bsStyle='danger' bsSize='small' onClick={() => onDelete(date)}>Delete</Button>
      </Col>
    </Row>
  )
}

class Task extends Component {
  render () {
    return (
      <div>
        {this.props.tasks.map((item, index) => <Item key={item.date} {...item}
          onCompleted={this.props.onCompleted} onDelete={this.props.onDelete} />)}
      </div>
    )
  }
}

export default Task
