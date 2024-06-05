import { IconType } from "react-icons";
import { Location } from "react-router-dom";

declare type LiProps = {
  url: string;
  text: string;
  location: Location<string>;
  Icon: IconType;
};
