import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class Form extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addChange = e => {
    

    this.props.addSmurf(this.state);
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addChange}>
          <input
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    smurfs:state.smurfs
})
export default connect(mapStateToProps, {addSmurf})(Form);
