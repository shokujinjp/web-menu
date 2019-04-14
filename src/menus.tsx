import React, { CSSProperties } from "react";
import { Menu } from "./types";
import { MenuCard } from "./menu_card";

interface Props {
  addCartFunc(arg0: string): void;
}

interface State {
  menus: Menu[];
}

const styles: CSSProperties = {
  // TODO: stickyになったら直す
  marginTop: 70
};

export class Menus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  private baseURL = "http://api.shokujin.jp/menu/";
  private getMenu = (time: string) =>
    fetch(this.baseURL + time)
      .then(res => res.json())
      .then(json => this.setState({ menus: json as Menu[] }));

  componentDidMount() {
    this.getMenu("today");
  }

  render() {
    return (
      <div style={styles}>
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
