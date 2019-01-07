import React, { CSSProperties } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { LineIcon } from "react-share"; // mizdra: ここでエラー出てるの直したい
// whywaita: ここコントリビュートする必要ある https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-share/index.d.ts
// mizdra: 本当だ, つらい
// whywaita: 結構残ってるんだよね
// mizdra: プロジェクトの中で自分で型定義拡張できないか試してみます

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

interface Props {
  open: boolean;
  onClose(): void;
  cart: Menu[];
  classes: {
    paper: string; // mizdra: いちいちcreateStylesで書いたやつをPropsに加えないといけないの面倒ですね… 仕方なさそうだけど…
  };
}
// whywaita: ↑こうかくとOrdarModalを呼ぶ部分でclassesを渡さないといけなくならない？
// mizdra: 実はwithStylesで上手いこと `classes` を取り除いた型を要求するコンポーネントを返すようになっています
// whywaita: なるほどね〜〜〜 :innocent:

interface State {
  open: boolean;
}

// mizdra: material-uiのthemeの設定を参照しているせいでエラーでている
// whywaita: コピってきたらはやそう
// hogas: `theme` どっからきたのだろう ~`Theme` ？~ あぁそういうことか
// mizdra: https://material-ui.com/guides/typescript/#augmenting-your-props-using-withstyles かな

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: "none"
    }
  });

class OrdarModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  // hogas: `=`, `=>` 不要そう
  orderMsg = (name: string) => {
    // nullチェックする
    return "https://line.me/R/msg/text?" + name + "をお願いします";
  };

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.props.onClose}
        >
          <div style={getModalStyle()}>
            <Typography variant="h6" id="modal-title">
              を注文する
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              LINEで注文
              <a href={this.orderMsg(this.props.cart[0].name)}>
                <LineIcon size={32} round />
              </a>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

// mizdra: `StyledOrdarModal` の部分でマウスカーソルをホバーさせて型を確認すると `Pick` 型を使って `paper` を取り除いていることが分かる
// whywaita: ほんとだ
const StyledOrdarModal = withStyles(styles)(OrdarModal);

export { StyledOrdarModal };
