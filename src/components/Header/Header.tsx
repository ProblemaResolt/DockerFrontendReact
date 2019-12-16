import * as React from "react";
import "./Header.scss";

interface IProps {
  name: string;
}

export default class Header extends React.Component<IProps> {
  public render() {
    return (
          <h1 className="title">
            <span className="title__text">Title {this.props.name}</span>
          </h1>
    );
  }
}
