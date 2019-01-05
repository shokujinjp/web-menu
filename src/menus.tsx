import * as React from "react";
import * as ReactDOM from "react-dom";
import * as axios from "axios";
import { Menu } from "./types";

interface State {
  menus: Menu[];
}

export class Menus extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      menus: []
    };
  }

  private baseURL = "https://api.shokujin.jp/menu/";
  private getMenu = (time: string) => 
    fetch(this.baseURL + time)
      .then(res => res.json())
      .then(json => this.setState(menus: json as Menu[]))
  );

  componentDidMount() {
    this.getMenu("today")
  }

  render() {
    return (
      <div>{this.state.menus}</div>
    )
  }
}