import { Component } from "react";

class ClassExampleComponent extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.url}
          alt={this.props.description}
          className={this.props.borderRadius}
        />
      </div>
    );
  }
}
export default ClassExampleComponent;
