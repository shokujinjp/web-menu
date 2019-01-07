import { IconComponentProps } from "react-share";

// whywaita: LineIconしか使ってなさそう / カウントも不要そう
// mizdra: これかな https://github.com/nygardk/react-share/blob/877b0f40fbea485e2d904ab159300a96d29b2f96/src/LineIcon.js
// whywaita: あってそう
// mizdra: 完成 <= :+1: :tada:

declare module "react-share" {
  export const LineIcon: React.StatelessComponent<IconComponentProps>;
}
