import React, { Component } from 'react';
import './App.css';
import { githubActions } from './github/';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" value={this.props.search} onChange={e => this.props.updateSearch(e.target.value)}/>
        </form>
        <hr/>
        {JSON.stringify(this.props.repo, null, 4)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search,
    repo: state.repo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => dispatch(githubActions.fetchRepo(name)),
    updateSearch: (search) => dispatch(githubActions.setSearch(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
