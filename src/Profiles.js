import React from "react";
import { ProfileCard } from "./ProfileCard";

export class Profiles extends React.Component {
  render() {
    return (
      <main>
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">
            <ProfileCard data={this.props.data} />
          </ul>
        </section>
      </main>
    );
  }
}
