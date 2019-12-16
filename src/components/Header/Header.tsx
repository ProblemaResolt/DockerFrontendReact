import * as React from "react";
import "./Header.scss";

interface IProps {
  name: string;
}

export default class Header extends React.Component<IProps> {
  public render() {
    return (
      <header>
          <h1 className="title">
            <span className="title__text">React {this.props.name}</span>
          </h1>
      </header>
    );
  }
}
