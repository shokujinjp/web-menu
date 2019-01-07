import * as React from "react";
import { Menu } from "./types";
import { MenuCard } from "./menu_card";

interface Props {
  addCartFunc(arg0: Menu): void;
}

interface State {
  menus: Menu[];
}

export class Menus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  private baseURL = "https://api.shokujin.jp/menu/";
  private getMenu = (time: string) =>
    fetch(this.baseURL + time)
      .then(res => res.json())
      .then(json => this.setState({ menus: json as Menu[] }));

  componentDidMount() {
    this.getMenu("today");
  }

  render() {
    return (
      <div>
        {this.state.menus.map((menu: Menu) => {
          return (
            <MenuCard
              key={menu.id}
              menu={menu}
              addCartFunc={this.props.addCartFunc}
            />
          );
        })}
      </div>
    );
  }
}
