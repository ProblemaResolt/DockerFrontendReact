import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Contents.scss";
import { any } from "prop-types";


interface IProps {
  content : any;
}

export default class Contents extends React.Component<IProps> {
  public render() {
    return (
          <section className="contents">
            <h2>typescript-react-sass-webpack-babel-boilerplate</h2>
            <p>Contents [ {this.props.content} ] </p>
          </section>
    );
  }
}
