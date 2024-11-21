import LogoIcon from "@/assets/logo.svg?react";
import { Link } from "react-router-dom";

interface Props {
  fill?: "black" | "white";
}

export const Logo = ({ fill = "white" }: Props) => {
  return (
    <Link to="/">
      <LogoIcon fill={fill} />
    </Link>
  );
};
