import * as React from "react";
import "./Footer.scss";

interface IProps {
  year : any
}
export default class Footer extends React.Component<IProps> {
  public render() {
    return (
      <footer>
        © Year：2015 -{this.props.year}
      </footer>
    );
  }
}
