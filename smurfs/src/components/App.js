import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfList from "../components/SmurfList";
import { getSmurfs } from "../actions/index";
import Form from "../components/Form";

class App extends Component {


  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    // console.log(this.props.smurfs);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
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
