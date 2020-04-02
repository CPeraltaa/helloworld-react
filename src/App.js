import "./App.css";
import React from "react";

/* function HelloWorld(props) {
  return (
    <div id="Greeting">
      <h3>I'm another component.</h3> {props.showText}
    </div>
  );
} */
class HelloWorld extends React.Component {
  state = {
    show: true,
  };

  hideComponent = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    if (this.state.show) {
      return (
        <div id="Greeting">
          <h3>I'm another component.</h3> {this.props.showText}
          <button onClick={this.hideComponent}>Toggle</button>
        </div>
      );
    } else {
      return (
        <div id="seeya">
          <h1>No component to show</h1>
          <button onClick={this.hideComponent}>Another toggle</button>
        </div>
      );
    }
  }
}
function App() {
  return (
    <div>
      Hello I'm the root component <HelloWorld showText="Holis" />
      <HelloWorld showText="Holi" /> <HelloWorld showText="Hol" />
    </div>
  );
}

export default App;
