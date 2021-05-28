import React    from "react";
import template from "./A.jsx";

class A extends React.Component {
  render() {
    return template.call(this);
  }
}

export default A;
