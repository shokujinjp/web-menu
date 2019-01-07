import React, { CSSProperties } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

interface Props {
  cart: Menu[];
  handleModalOpen(): void;
}

const rootStyle: CSSProperties = {
  flexGrow: 0
};

const growStyle: CSSProperties = {
  flexGrow: 1
};

export default class TitleBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // mizdra: 原因分かった `flexGrow` が `flexGlow` になってた. typoっぽい <= なおした
    // whywaita: oh......
    // whywaita: kami
    // naotta!!!!!!!
    // whywaita: mizdra :pro:
    // mizdra: style object に CSSPropertiesの型を指定すると型補完効くようになる :tada:
    // whywaita: なるほど、これでいいのか… (黒魔術感がある)
    // whywaita: anyよくないですね
    // whywaita: これおもしろ
    // mizdra: Stateに型当てます
    // whywaita: 最初title_barでmodal出してたんだけど位置調整が面倒になってmainで出すようになったんよね
    // mizdra: なるほど, だとするとtitle_barではstate不要ですかね?
    // whywaita: たぶんそうー (いらないのでanyで潰してたけど、空で潰す方が良いのかな?) <= mizdra: そうですね <= whywaita: ok
    // whywaita: まあのちのちハンバーガーメニューとかやりそうだし使いそう感はあるけどね
    // hogas: 今使ってなかったら雛形だけ残しておくと良さそう(boolのやつだけ消す)
    // mizdra: React.Component<Props> でState使わないことを明示的できるというテクニックがある <= whywaita: yosasou
    // hogas: Propsが空でStateはあるときってPropsのとこは `{}` とかにするんですか
    // mizdra: いつもそんな感じでやってます
    return (
      <div style={growStyle}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" color="inherit" style={growStyle}>
              今日の食神
            </Typography>
            <Button
              color="inherit"
              onClick={() => this.props.handleModalOpen()}
              style={rootStyle}
            >
              <Icon>shopping_cart</Icon>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
