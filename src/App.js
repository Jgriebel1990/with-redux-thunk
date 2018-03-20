import React, { Component } from 'react';
import './App.css';
import { githubActions } from './github/';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <form onSubmit={() => {}}>
          <input type="text"/>
        </form>
        <hr/>
        {JSON.stringify({}, null, 4)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cheese: 'here'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => dispatch(githubActions.fetchRepo(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
