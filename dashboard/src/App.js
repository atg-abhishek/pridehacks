import React, { Component } from 'react';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Graph from './components/Graph';
import {getCategories, getHumans, getRatings, getResolutions} from './endpoints';

charts(fusioncharts);

class LongboatApp extends Component {
  constructor() {
    super();

    this.state = {
      categories: {},
      frequencies: {},
      humans: {},
      menuOpen: false,
      ratings: {},
      resolutions: {},
    };
  }

  componentDidMount() {
    getCategories()
      .then(res => {
        this.setState(prevState => Object.assign({}, prevState, {categories: res}));
      });
      // getFrequencies()
      // .then(res => {
      //   this.setState(prevState => Object.assign({}, prevState, {frequencies: res}));
      // });
      getHumans()
      .then(res => {
        this.setState(prevState => Object.assign({}, prevState, {humans: res}));
      });
      getRatings()
      .then(res => {
        this.setState(prevState => Object.assign({}, prevState, {ratings: res}));
      });
      getResolutions()
      .then(res => {
        this.setState(prevState => Object.assign({}, prevState, {resolutions: res}));
      });
  }

  handleMenuToggle() {
    console.log('clicked');
  }

  render() {
    return (
      <div >
        <MuiThemeProvider>
          <AppBar
            title="Dashboard"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          </MuiThemeProvider>
          <MuiThemeProvider>
          <Drawer open={this.state.menuOpen}>
            <MenuItem>Categories</MenuItem>
            <MenuItem>Redirects</MenuItem>
            <MenuItem>Ratings</MenuItem>
            <MenuItem>Resolutions</MenuItem>
          </Drawer>
        </MuiThemeProvider>
        <Graph graph={this.state.categories}/>
        {/* <Graph graph={this.state.frequencies}/> */}
        <Graph graph={this.state.humans}/>
        <Graph graph={this.state.ratings}/>
        <Graph graph={this.state.resolutions}/>
      </div>
    );
  }
}

export default LongboatApp;
