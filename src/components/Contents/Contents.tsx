import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Contents.scss";


interface IProps {
}

export default class Contents extends React.Component<IProps> {
  public render() {
    return (
          <section className="contents">
            <h2>h2</h2>
            <p>p</p>
          </section>
    );
  }
}
