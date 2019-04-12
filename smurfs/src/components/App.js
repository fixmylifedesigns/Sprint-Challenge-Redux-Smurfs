import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfList from "../components/SmurfList";
import { getSmurfs } from "../actions/index";
import Form from "../components/Form";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {


  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    // console.log(this.props.smurfs);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form 
        addingSmurf={this.props.addingSmurf}
        smurfs={this.props.smurfs}
        />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    smurfs: state.smurfReducer.smurfs,
    error: state.smurfReducer.error,
    fetching: state.smurfReducer.fetchingsmurfs,
    addingSmurf: state.addReducer.addingSmurf
  };
};
export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
