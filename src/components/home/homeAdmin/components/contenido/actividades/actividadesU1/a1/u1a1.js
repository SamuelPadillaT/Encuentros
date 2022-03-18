import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Div, Footer} from './u1a1Style'

class U1a1 extends Component{

  constructor(props) {
    super(props);
    this.state = {
      activity : 1
    };
  }

  componentDidMount() {
  }

  render(){
    return(
      <div>
        <Div>Unidad1 Actvidad 1</Div>
        <Footer>
          <button onClick = {() =>this.setState({ activity: 1 })}>-1-</button>
          <button onClick = {() =>this.setState({ activity: 2 })}>-2-</button>
          <button onClick = {() =>this.setState({ activity: 3 })}>-3-</button>
          <button onClick = {() =>this.setState({ activity: 4 })}>-4-</button>
        </Footer>
      </div>
    );
  }
}

export default U1a1;