import { ReactNode } from "react";

interface CommonProps {
  heading?: string;
  success?: boolean; // Always true
  show?: boolean;
  title?: string;
  icon?: JSX.Element;
  children?: ReactNode;
}

export default CommonProps;
