import React from "react";

export class SkillsList extends React.Component {
  render() {
    return this.props.item.skills.map(skill => {
      return <li>{skill}</li>;
    });
  }
}
