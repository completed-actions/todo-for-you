import React from "react";
import Component from "bemponent";
import "./Button.css";

class Button extends Component {
  getModDeps() {
    return [...super.getModDeps(), "theme", "size"];
  }

  render() {
    const { children } = this.props;

    return <button className={this.genClassName()}>{children}</button>;
  }
}

export default Button
