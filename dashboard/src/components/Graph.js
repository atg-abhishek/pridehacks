import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';

export default class Graph extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', paddingBottom: '2em'}}>
        <ReactFC {...this.props.graph} />
      </div>
    );
  }
}
